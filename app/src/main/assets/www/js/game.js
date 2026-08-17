// Logica de entrenamiento del Hito 01 -- ver mecanica cerrada en
// DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H01.md (incidencia S1).
;(function () {
  'use strict'

  var MAX_ATTEMPTS = 3
  var OPPONENT_PAUSE_MS = 550

  // S7 (reapertura H01): modo arbol de aperturas. Si la URL trae
  // "opening" (primera jugada de la familia, p. ej. "d4"), el motor
  // entra en un camino completamente nuevo que recorre REPERTOIRE_TREE
  // en vez de line.moves/moveIndex -- ver treeXxx() mas abajo. Todo el
  // resto del fichero (finales, problemas, trampas legacy mientras
  // convivan, estructuras) sigue exactamente igual, sin tocar.
  function openingRootParam () {
    var params = new URLSearchParams(window.location.search)
    return params.get('opening')
  }
  function openingColorParam () {
    var params = new URLSearchParams(window.location.search)
    var c = params.get('color')
    return (c === 'w' || c === 'b') ? c : null
  }
  function openingTargetParam () {
    var params = new URLSearchParams(window.location.search)
    return params.get('target')
  }

  var isTreeMode = !!openingRootParam()

  function selectedLineId () {
    var params = new URLSearchParams(window.location.search)
    return params.get('line')
  }

  // S7: modo sesion secuencial (Problemas 1700-2200 por ahora). Si la
  // URL trae "queue" (ids separados por comas), el motor recorre esa
  // lista de lineas una tras otra dentro del mismo WebView -- sin
  // volver al selector nativo entre una y la siguiente -- en vez de
  // cargar una unica linea via "line". Ver DOCS/ATTACHEDS/
  // APERTURASAJEDREZ_ANNEX_H04.md, sesion S7.
  function selectedQueueIds () {
    var params = new URLSearchParams(window.location.search)
    var raw = params.get('queue')
    if (!raw) return null
    var ids = raw.split(',').map(function (s) { return s.trim() }).filter(Boolean)
    return ids.length > 0 ? ids : null
  }

  // S6 (navegacion de Problemas de ajedrez, ver ANNEX_H04.md): si la
  // URL trae "navcat", la cola de "queue" se trata como navegable --
  // orden fijo (sin barajar, ya garantizado por
  // CategorySelectorActivity.startProblemSession), con marcapaginas,
  // favoritos y avance sin repetir persistidos en AndroidBridge bajo
  // esta clave de categoria. Sin este parametro, el comportamiento es
  // exactamente el de antes (cola servida en orden de llegada, sin
  // barra de navegacion).
  function selectedNavCategory () {
    var params = new URLSearchParams(window.location.search)
    return params.get('navcat')
  }

  // H04: los finales y los problemas viven en ficheros nuevos
  // (finales.js, problemas.js, cargados antes que este fichero) para
  // no mezclar contenido de lineas, finales y problemas en el mismo
  // fichero. Se buscan por id en la concatenacion de los tres -- sin
  // parametro de categoria en la URL, los ids de finales y problemas
  // llevan prefijo propio ("h04-final-", "h04-problema-") para evitar
  // colision (ver ANNEX_H04.md, "DISENO CERRADO (S4)"). Los
  // problemas resultaron no necesitar ningun motor propio: la misma
  // mecanica de "secuencia fija de jugadas, oponente auto-jugado,
  // dialogo de 3 fallos" ya cubre por completo un problema de
  // posicion suelta + solucion corta.
  //
  // S7 (reapertura H01, PCH): TRAMPAS_LINES ya no se concatena aqui --
  // trampas.js dejo de cargarse en index.html, las 6 trampas quedaron
  // integradas como ramas del arbol de aperturas (REPERTOIRE_TREE,
  // ver isTreeMode mas abajo). REPERTOIRE_LINES (repertoire.js) sigue
  // cargado y en la concatenacion por compatibilidad -- ningun
  // selector nativo busca ya un id de linea suelta por ese camino,
  // pero retirarlo no aporta nada y anadiria riesgo sin necesidad.
  function allLines () {
    return REPERTOIRE_LINES.concat(
      typeof FINALES_LINES !== 'undefined' ? FINALES_LINES : []
    ).concat(
      typeof PROBLEMAS_LINES !== 'undefined' ? PROBLEMAS_LINES : []
    ).concat(
      typeof ESTRUCTURAS_LINES !== 'undefined' ? ESTRUCTURAS_LINES : []
    )
  }

  function findLine (id) {
    var lines = allLines()
    for (var i = 0; i < lines.length; i++) {
      if (lines[i].id === id) return lines[i]
    }
    return lines[0]
  }

  var navCategory = selectedNavCategory()
  var sessionQueue = selectedQueueIds()
  // Copia estable de la cola completa recibida -- sessionQueue puede
  // sustituirse mas adelante por el subconjunto de favoritos
  // (toggleFavoritesView), pero fullQueueIds siempre conserva el
  // orden y el conjunto original para poder volver a el.
  var fullQueueIds = sessionQueue ? sessionQueue.slice() : null
  var favoritesOnly = false
  var sessionIndex = 0
  if (navCategory && sessionQueue && window.AndroidBridge) {
    try {
      var savedBookmark = window.AndroidBridge.getBookmark(navCategory)
      if (typeof savedBookmark === 'number' && savedBookmark >= 0 && savedBookmark < sessionQueue.length) {
        sessionIndex = savedBookmark
      }
    } catch (e) {
      sessionIndex = 0
    }
  }
  var sessionAciertos = 0
  var sessionFallos = 0
  var SESSION_ADVANCE_PAUSE_MS = 1400

  var line = isTreeMode
    ? { id: 'opening-root', name: 'Recorrido de apertura', overview: 'Juega con naturalidad -- las variantes se van reconociendo segun aparecen.', userColor: openingColorParam() || 'w', moves: [] }
    : findLine(sessionQueue ? sessionQueue[sessionIndex] : selectedLineId())
  var userColor = line.userColor || 'w'
  var opponentColor = userColor === 'w' ? 'b' : 'w'
  // H04: si la linea trae "startFen" (finales), la partida arranca
  // desde esa posicion en vez de la inicial estandar. Las lineas de
  // apertura no llevan este campo -- comportamiento identico al de
  // antes de H04.
  var game = line.startFen ? new window.Chess(line.startFen) : new window.Chess()
  var board = null
  var moveIndex = 0 // indice de la proxima jugada esperada en line.moves
  var attemptsThisMove = 0
  var aciertos = 0
  var fallos = 0
  // Modo toque-toque (tocar pieza, tocar destino), independiente del
  // arrastre -- ver seleccionSquare()/deselectSquare()/onDrop() mas
  // abajo para el porque de este diseño.
  var selectedSquare = null

  // ---- Estado exclusivo del modo arbol (S7, reapertura H01) ----
  var treeUserColor = line.userColor // ya resuelto arriba (openingColorParam() o 'w')
  var treeOpponentColor = treeUserColor === 'w' ? 'b' : 'w'
  var treeRootNode = null
  var treeCursor = null // null = todavia no se ha jugado ninguna jugada
  var treeTargetPath = null // array de nodos raiz->hoja, solo en modo dirigido
  var treeActiveColorId = null // colorId de la ultima variante/trampa reconocida en esta rama
  if (isTreeMode) {
    var rootSan = openingRootParam()
    treeRootNode = REPERTOIRE_TREE.filter(function (r) { return r.san === rootSan })[0] || null
    var targetId = openingTargetParam()
    if (treeRootNode && targetId) {
      treeTargetPath = treeFindPathToId(treeRootNode, targetId)
    }
  }

  // ---- Funciones del motor de arbol (S7, reapertura H01) ----

  function treeFindPathToId (node, targetId, pathSoFar) {
    pathSoFar = pathSoFar || []
    var here = pathSoFar.concat([node])
    if (node.id === targetId) return here
    if (!node.children) return null
    for (var i = 0; i < node.children.length; i++) {
      var found = treeFindPathToId(node.children[i], targetId, here)
      if (found) return found
    }
    return null
  }

  function treeTurnColor () {
    return treeCursor === null ? 'w' : (treeCursor.color === 'w' ? 'b' : 'w')
  }

  function treeChildrenOf (cursor) {
    var raw = cursor === null ? (treeRootNode ? [treeRootNode] : []) : (cursor.children || [])
    return raw.filter(function (n) { return n.userColors.indexOf(treeUserColor) !== -1 })
  }

  // Candidatos legales para la jugada que toca ahora mismo. En el
  // turno del rival se excluyen las ramas de trampa defensiva (la
  // tentacion es tuya, nunca la juega el motor) -- las ofensivas si
  // entran, tal como se diseño con Miguel Angel. En tu turno entran
  // todas: las de libro (correctas) y las de trampa defensiva (la
  // jugada tentadora que hay que reconocer y evitar).
  function treeCandidates (cursor) {
    var turn = treeTurnColor()
    var children = treeChildrenOf(cursor).filter(function (n) { return n.color === turn })
    if (turn === treeOpponentColor) {
      return children.filter(function (n) {
        return n.kind === 'book' || (n.kind === 'trap' && n.trap.tipo === 'ofensiva')
      })
    }
    return children
  }

  function treeProgressTotal (nodeId) {
    if (!window.AndroidBridge) return 0
    try {
      var raw = window.AndroidBridge.getProgress(nodeId)
      var p = raw ? JSON.parse(raw) : null
      return ((p && p.aciertos) || 0) + ((p && p.fallos) || 0)
    } catch (e) {
      return 0
    }
  }

  // Recorrido ponderado: prioriza la rama con menos intentos
  // acumulados (punto 2 del diseno cerrado -- cobertura real del
  // arbol en vez de repetir siempre lo mas practicado). Empate ->
  // eleccion aleatoria entre las empatadas, no siempre la primera.
  function treePickWeighted (candidates) {
    if (candidates.length === 0) return null
    var totals = candidates.map(function (c) { return treeProgressTotal(c.id) })
    var min = Math.min.apply(null, totals)
    var tied = candidates.filter(function (c, i) { return totals[i] === min })
    return tied[Math.floor(Math.random() * tied.length)]
  }

  function treeNextOnTargetPath () {
    if (!treeTargetPath) return null
    var idx = treeCursor === null ? 0 : treeTargetPath.indexOf(treeCursor) + 1
    if (idx <= 0 && treeCursor !== null) return null // treeCursor no esta en el camino objetivo
    return idx < treeTargetPath.length ? treeTargetPath[idx] : null
  }

  function treeChooseForTurn (candidates) {
    var pinned = treeNextOnTargetPath()
    if (pinned && candidates.indexOf(pinned) !== -1) return pinned
    return treePickWeighted(candidates)
  }

  function treeColorIdToHex (colorId) {
    return colorId === 'trap' ? TREE_TRAP_COLOR : TREE_PALETTE[colorId % TREE_PALETTE.length]
  }

  function treeShowVariantBadge (node) {
    if (!elVariantBadge) return
    if (node && node.variantName) {
      elVariantBadge.textContent = node.variantName
      elVariantBadge.style.display = ''
      elVariantBadge.style.background = treeColorIdToHex(node.variantColorId)
    } else {
      elVariantBadge.style.display = 'none'
    }
  }

  function treeAdvanceTo (node, move, statusOverride) {
    treeCursor = node
    line.id = node.id
    if (node.variantName) {
      line.name = node.variantName
      treeActiveColorId = node.variantColorId
    }
    if (node.leafOf && node.leafOf.overview) line.overview = node.leafOf.overview
    treeShowVariantBadge(node)
    loadInitialProgress()
    showExplanation(node)
    // Resalte de casillas con el color de la variante/trampa activa
    // (diseno cerrado, punto 4: "en el selector, en el tablero y en
    // cualquier resumen del arbol") -- mientras el tronco todavia es
    // comun a varias variantes (treeActiveColorId todavia null), se
    // usa el resalte neutro de siempre.
    highlightMove(move.from, move.to, treeActiveColorId !== null ? treeColorIdToHex(treeActiveColorId) : null)

    var candidates = treeCandidates(node)
    if (candidates.length === 0) {
      setStatus(statusOverride || (node.leafOf ? 'Rama completada: ' + node.leafOf.name + '.' : 'Fin de la linea conocida.'))
      return
    }
    if (statusOverride) {
      // Mensaje especial (p. ej. "el rival cae en la trampa"): se deja
      // visible una pausa antes de que treeBeginTurn lo sobreescriba
      // con el aviso normal de turno -- si no, se pisa en el mismo
      // tick y nunca llega a verse.
      setStatus(statusOverride)
      window.setTimeout(treeBeginTurn, SESSION_ADVANCE_PAUSE_MS)
    } else {
      treeBeginTurn()
    }
  }

  function treeBeginTurn () {
    var turn = treeTurnColor()
    var candidates = treeCandidates(treeCursor)
    if (candidates.length === 0) {
      setStatus(treeCursor && treeCursor.leafOf ? 'Rama completada: ' + treeCursor.leafOf.name + '.' : 'Fin de la linea conocida.')
      return
    }
    if (turn === treeOpponentColor) {
      setStatus('El rival esta pensando...')
      window.setTimeout(treePlayOpponentMove, OPPONENT_PAUSE_MS)
    } else {
      setStatus('Tu turno.')
    }
  }

  function treePlayOpponentMove () {
    clearTurnLabel()
    var candidates = treeCandidates(treeCursor)
    if (candidates.length === 0) return
    var chosen = treeChooseForTurn(candidates)
    var move = game.move(chosen.san)
    if (!move) {
      setStatus('Error interno: jugada del arbol invalida (' + chosen.san + ').')
      return
    }
    board.position(game.fen())
    var msg = (chosen.kind === 'trap' && chosen.isError)
      ? 'El rival cae en la ' + chosen.trap.name + '. Castigalo.'
      : null
    treeAdvanceTo(chosen, move, msg)
  }

  // Revela la continuacion correcta -- se usa tanto tras 3 fallos
  // "fuera de repertorio" como, con pausa breve, justo despues de caer
  // en una trampa defensiva (para no dejarte a medias sin saber que
  // jugar en su lugar).
  function treeRevealExpected () {
    clearTurnLabel()
    var candidates = treeCandidates(treeCursor).filter(function (c) { return c.kind === 'book' })
    if (candidates.length === 0) candidates = treeCandidates(treeCursor)
    var chosen = treeChooseForTurn(candidates)
    if (!chosen) return
    var move = game.move(chosen.san)
    board.position(game.fen())
    treeAdvanceTo(chosen, move)
  }

  window.onTreeTorpeDialogClosed = treeRevealExpected // alias directo, sin envoltorio extra

  function treeProcessUserMove (source, target) {
    var candidates = treeCandidates(treeCursor)
    if (treeTurnColor() !== treeUserColor) return false

    var move = safeMove({ from: source, to: target, promotion: 'q' })
    if (move === null) return false

    var matched = null
    for (var i = 0; i < candidates.length; i++) {
      if (candidates[i].san === move.san) { matched = candidates[i]; break }
    }

    if (matched && matched.kind === 'trap' && matched.isError) {
      // Caida real en una trampa defensiva documentada: se deshace,
      // cuenta como fallo, y se explica -- sin esperar a 3 intentos,
      // el reconocimiento es el objetivo pedagogico inmediato aqui.
      game.undo()
      attemptsThisMove = 0
      recordAttempt(false, matched.id)
      setStatus('Esto es la ' + matched.trap.name + ': ' + matched.explain.debilidad)
      window.setTimeout(treeRevealExpected, SESSION_ADVANCE_PAUSE_MS)
      return false
    }

    if (matched) {
      attemptsThisMove = 0
      recordAttempt(true, matched.id)
      window.setTimeout(function () { treeAdvanceTo(matched, move) }, 0)
      return true
    }

    // Jugada legal pero fuera del arbol conocido en este punto.
    game.undo()
    attemptsThisMove++

    if (attemptsThisMove >= MAX_ATTEMPTS) {
      setStatus('Jugada revelada tras 3 fallos.')
      if (window.AndroidBridge) {
        window.AndroidBridge.showTorpeDialog()
      } else {
        window.alert('torpe como una oruga')
        window.onTreeTorpeDialogClosed()
      }
      return false
    }

    setStatus('Fuera de repertorio (' + attemptsThisMove + '/' + MAX_ATTEMPTS + '). Intentalo de nuevo.')
    return false
  }

  function treeRestart () {
    cancelAnyDrag()
    game.reset()
    treeCursor = null
    treeActiveColorId = null
    attemptsThisMove = 0
    line.id = 'opening-root'
    board.position('start')
    clearHighlights()
    elExplain.innerHTML = ''
    treeShowVariantBadge(null)
    loadInitialProgress()
    treeBeginTurn()
  }

  var TREE_PALETTE = ['#c0392b', '#2980b9', '#27ae60', '#8e44ad', '#d35400', '#16a085', '#2c3e50', '#f39c12', '#7f8c8d', '#2471a3', '#229954', '#a04000']
  var TREE_TRAP_COLOR = '#e74c3c'

  // Ganchos de depuracion SOLO para el arnes de pruebas de Node
  // (scripts/../verify/test_tree_engine.js) -- nunca se activan en la
  // app real: requieren que el propio arnes ponga
  // window.__ENABLE_TREE_TEST_HOOKS__ antes de cargar este fichero.
  if (isTreeMode && typeof window !== 'undefined' && window.__ENABLE_TREE_TEST_HOOKS__) {
    window.__debugCursorId = function () { return treeCursor ? treeCursor.id : null }
    window.__debugTurnColor = treeTurnColor
    window.__debugLineName = function () { return line.name }
    window.__debugCandidatesSan = function () {
      return treeCandidates(treeCursor).map(function (c) { return c.san + '(' + c.color + ',' + c.kind + ')' })
    }
    window.__debugUserMove = function (san) {
      var candidates = treeCandidates(treeCursor)
      var target = null
      for (var i = 0; i < candidates.length; i++) {
        if (candidates[i].san === san) { target = candidates[i]; break }
      }
      if (!target) return false
      // Resolvemos from/to reales sobre la posicion actual de chess.js
      // probando el SAN directamente (mismo resultado que arrastrar la
      // pieza en el tablero real).
      var mv = game.move(san)
      if (!mv) return false
      game.undo()
      return treeProcessUserMove(mv.from, mv.to)
    }
    window.__debugRunPendingTimers = function () {
      var guard = 0
      while (window.__pendingTimers && window.__pendingTimers.length && guard++ < 1000) {
        var next = window.__pendingTimers.shift()
        next()
      }
    }
    window.__debugRunOneTimer = function () {
      if (!window.__pendingTimers || !window.__pendingTimers.length) return false
      var next = window.__pendingTimers.shift()
      next()
      return true
    }
    window.__debugStatusText = function () {
      return elStatus.textContent
    }
    window.__debugColorForNode = function (nodeId) {
      // Busca el nodo por id en el arbol activo y devuelve el hex que
      // le correspondería en el resalte del tablero (o null si no
      // tiene variantColorId propio).
      function find (node) {
        if (node.id === nodeId) return node
        if (!node.children) return null
        for (var i = 0; i < node.children.length; i++) {
          var r = find(node.children[i]); if (r) return r
        }
        return null
      }
      var n = find(treeRootNode)
      return n && n.variantColorId !== undefined ? treeColorIdToHex(n.variantColorId) : null
    }
  }


  var elStatus = document.getElementById('status')
  var elVariantBadge = document.getElementById('variantBadge')
  var elProgress = document.getElementById('progress')
  var elSessionProgress = document.getElementById('sessionProgress')
  var elLineName = document.getElementById('lineName')
  var elOverview = document.getElementById('overview')
  var elTurn = document.getElementById('turnLabel')
  var elRestart = document.getElementById('restartBtn')
  var elExplain = document.getElementById('explain')
  var elNavBar = document.getElementById('navBar')
  var elNavNumberInput = document.getElementById('navNumberInput')
  var elNavTotal = document.getElementById('navTotal')
  var elNavFirst = document.getElementById('navFirstBtn')
  var elNavPrev = document.getElementById('navPrevBtn')
  var elNavNext = document.getElementById('navNextBtn')
  var elNavLast = document.getElementById('navLastBtn')
  var elNavGo = document.getElementById('navGoBtn')
  var elNavFav = document.getElementById('navFavBtn')
  var elNavFavList = document.getElementById('navFavListBtn')

  function isNavigable () {
    return !!(navCategory && fullQueueIds)
  }

  function updateSessionProgressLabel () {
    if (!sessionQueue || isNavigable()) {
      // En sesion navegable el propio navBar ya muestra la posicion
      // (numero / total) -- evitar el texto duplicado.
      elSessionProgress.textContent = ''
      return
    }
    elSessionProgress.textContent = 'Problema ' + (sessionIndex + 1) + ' de ' + sessionQueue.length
  }

  function persistBookmark () {
    // El marcapaginas solo tiene sentido sobre la cola completa (no
    // sobre la vista filtrada de favoritos) -- si se guardara ahi, el
    // "retomar donde lo dejaste" quedaria roto la proxima vez que se
    // entre en modo normal.
    if (!navCategory || favoritesOnly || !window.AndroidBridge) return
    window.AndroidBridge.setBookmark(navCategory, sessionIndex)
  }

  function refreshNavBar () {
    if (!isNavigable()) {
      elNavBar.style.display = 'none'
      return
    }
    elNavBar.style.display = 'flex'
    elNavNumberInput.value = sessionIndex + 1
    elNavNumberInput.max = sessionQueue.length
    elNavTotal.textContent = '/ ' + sessionQueue.length + (favoritesOnly ? ' (favoritos)' : '')
    elNavFavList.textContent = favoritesOnly ? 'Ver todos' : 'Favoritos'
    var esFavorito = window.AndroidBridge && window.AndroidBridge.isFavorite(line.id)
    elNavFav.textContent = esFavorito ? '★' : '☆'
  }

  // Salto directo a un indice concreto de la cola activa (sessionQueue
  // -- completa o filtrada a favoritos segun favoritesOnly). Con
  // vuelta de ronda en ambos extremos (indice -1 va al ultimo, indice
  // == longitud vuelve al primero), igual que un carrusel.
  function navigateToIndex (newIndex) {
    if (!isNavigable()) return
    var n = sessionQueue.length
    if (n === 0) return
    if (newIndex < 0) newIndex = n - 1
    if (newIndex >= n) newIndex = 0
    sessionIndex = newIndex
    persistBookmark()
    loadLine(findLine(sessionQueue[sessionIndex]))
  }

  // Busca, a partir de fromIndex (sin incluirlo), el primer problema
  // de la cola activa que no este resuelto -- dando la vuelta si hace
  // falta. Si todos estan resueltos, se comporta como un simple
  // avance secuencial (fromIndex + 1, con vuelta), sin bloquear el
  // avance sin repetir cuando ya no queda nada nuevo que ofrecer.
  function findNextUnsolvedIndex (fromIndex) {
    var n = sessionQueue.length
    for (var step = 1; step <= n; step++) {
      var idx = (fromIndex + step) % n
      var resuelto = window.AndroidBridge && window.AndroidBridge.isSolved(sessionQueue[idx])
      if (!resuelto) return idx
    }
    return (fromIndex + 1) % n
  }

  function goNext () {
    navigateToIndex(findNextUnsolvedIndex(sessionIndex))
  }

  function goPrev () {
    // La navegacion manual hacia atras no salta resueltos -- es
    // exactamente para poder "volver a ver" lo ya hecho.
    navigateToIndex(sessionIndex - 1)
  }

  function goFirst () {
    navigateToIndex(0)
  }

  function goLast () {
    navigateToIndex(sessionQueue.length - 1)
  }

  function goToNumber () {
    var n = parseInt(elNavNumberInput.value, 10)
    if (isNaN(n) || n < 1 || n > sessionQueue.length) {
      setStatus('Numero fuera de rango (1-' + sessionQueue.length + ').')
      return
    }
    navigateToIndex(n - 1)
  }

  function toggleFavorite () {
    if (!window.AndroidBridge) return
    window.AndroidBridge.toggleFavorite(line.id)
    refreshNavBar()
  }

  // Alterna entre la cola completa y el subconjunto de favoritos,
  // reutilizando exactamente el mismo mecanismo de navegacion
  // (sessionQueue/sessionIndex) -- favoritesOnly es lo unico que
  // distingue ambos modos, y controla ademas si se actualiza el
  // marcapaginas (persistBookmark).
  function toggleFavoritesView () {
    if (!isNavigable()) return
    if (!favoritesOnly) {
      var favIds = fullQueueIds.filter(function (id) {
        return window.AndroidBridge && window.AndroidBridge.isFavorite(id)
      })
      if (favIds.length === 0) {
        setStatus('Todavia no tienes ningun problema marcado como favorito.')
        return
      }
      sessionQueue = favIds
      favoritesOnly = true
      navigateToIndex(0)
    } else {
      var idActual = line.id
      sessionQueue = fullQueueIds
      favoritesOnly = false
      var idx = sessionQueue.indexOf(idActual)
      navigateToIndex(idx >= 0 ? idx : 0)
    }
  }

  function showExplanation (moveEntry) {
    if (!moveEntry || !moveEntry.explain) {
      elExplain.innerHTML = ''
      return
    }
    var e = moveEntry.explain
    elExplain.innerHTML =
      '<div class="explainSan">' + moveEntry.san + '</div>' +
      '<div class="explainRow"><b>Idea:</b> ' + e.idea + '</div>' +
      '<div class="explainRow"><b>Ventaja:</b> ' + e.ventaja + '</div>' +
      '<div class="explainRow"><b>Debilidad:</b> ' + e.debilidad + '</div>'
  }

  function refreshProgressLabel () {
    elProgress.textContent = 'Aciertos: ' + aciertos + ' | Fallos: ' + fallos
  }

  function loadInitialProgress () {
    try {
      var raw = window.AndroidBridge && window.AndroidBridge.getProgress(line.id)
      var parsed = raw ? JSON.parse(raw) : null
      aciertos = (parsed && parsed.aciertos) || 0
      fallos = (parsed && parsed.fallos) || 0
    } catch (e) {
      aciertos = 0
      fallos = 0
    }
    refreshProgressLabel()
  }

  function recordAttempt (correct, idOverride) {
    if (correct) { aciertos++ } else { fallos++ }
    if (sessionQueue) {
      if (correct) { sessionAciertos++ } else { sessionFallos++ }
    }
    refreshProgressLabel()
    if (window.AndroidBridge) {
      window.AndroidBridge.recordAttempt(idOverride || line.id, correct)
    }
  }

  function clearHighlights () {
    $('#board .square-55d63').removeClass('highlight-square').css('box-shadow', '')
  }

  // colorOverride (opcional, solo lo usa el modo arbol): color exacto
  // de la variante/trampa activa, aplicado como box-shadow inline sin
  // tocar la clase CSS de siempre -- fuera del modo arbol nunca se
  // pasa este parametro, asi que el resalte amarillo (decision cerrada
  // S1) queda exactamente igual que siempre.
  function highlightMove (from, to, colorOverride) {
    clearHighlights()
    var $from = $('#board .square-' + from)
    var $to = $('#board .square-' + to)
    $from.addClass('highlight-square')
    $to.addClass('highlight-square')
    if (colorOverride) {
      $from.css('box-shadow', 'inset 0 0 3px 4px ' + colorOverride)
      $to.css('box-shadow', 'inset 0 0 3px 4px ' + colorOverride)
    }
  }

  function currentExpected () {
    return moveIndex < line.moves.length ? line.moves[moveIndex] : null
  }

  // H04 (correccion tecnica de mates de torre/dama/dos alfiles): estos
  // finales no tienen una unica jugada correcta -- se puede acorralar
  // al rey hacia cualquiera de los dos lados, y el motor de "linea
  // fija" (jugada esperada exacta) estaba marcando como fallo jugadas
  // perfectamente validas de la misma tecnica, y aceptando como
  // "buena" precisamente la jugada mas lenta. La correccion no es
  // rehacer la linea, es un modo de motor distinto: "practica libre
  // de tecnica" (line.freeMode === true). En este modo no hay
  // line.moves ni jugada esperada: el usuario mueve su bando con
  // total libertad (cualquier jugada legal), el rey rival solitario
  // se juega solo (una respuesta legal cualquiera, no hay "mejor
  // defensa" que memorizar), y el motor solo interviene para impedir
  // el unico error real de la tecnica -- una jugada que ahoga al rey
  // rival. Nada mas se marca como fallo.
  function isFreeMode () {
    return !!line.freeMode
  }

  function checkGameEndAfterMove () {
    // Llamar justo despues de cualquier jugada (propia o del rival)
    // para ver si el bando al que le toca mover ahora esta en jaque
    // mate o ahogado.
    if (game.isCheckmate && game.isCheckmate()) return 'mate'
    if (game.isStalemate && game.isStalemate()) return 'stalemate'
    return null
  }

  function playOpponentFreeMove () {
    clearTurnLabel()
    var legal = game.moves()
    if (legal.length === 0) return // no deberia ocurrir, ya se comprobo antes de llamar
    var pick = legal[Math.floor(Math.random() * legal.length)]
    var move = game.move(pick)
    board.position(game.fen())
    highlightMove(move.from, move.to)
    setStatus('Tu turno.')
  }

  // BUG real (incidencia de Miguel Angel: soltar una pieza en su
  // propia casilla de origen dejaba algo raro en vez de un snapback
  // limpio). Causa de fondo, mas amplia de lo que parecia: esta
  // version de chess.js NUNCA devuelve null en una jugada ilegal --
  // lanza una excepcion (verificado real: game.move({from:'e2',
  // to:'e2'}) lanza "Invalid move", igual que cualquier otra jugada
  // ilegal). El codigo comprobaba "if (move === null)", que nunca se
  // cumplia, asi que CUALQUIER jugada ilegal (soltar en la misma
  // casilla, soltar en una casilla inalcanzable, etc.) rompia el
  // flujo sin control en vez de hacer un snapback limpio -- chessboard.js
  // llama a onDrop con origen=destino como una jugada mas, no lo
  // trata como caso especial. safeMove() centraliza la captura de esa
  // excepcion para tratar "ilegal" siempre igual, sin repetir el
  // try/catch en cada sitio que mueve una pieza soltada por el
  // usuario.
  function safeMove (moveSpec) {
    try {
      return game.move(moveSpec)
    } catch (e) {
      return null
    }
  }

  function onDropFreeMode (source, target) {
    clearTurnLabel()
    var move = safeMove({ from: source, to: target, promotion: 'q' })
    if (move === null) { updateTurnLabel(); return 'snapback' }

    var result = checkGameEndAfterMove()

    if (result === 'mate') {
      board.position(game.fen())
      highlightMove(move.from, move.to)
      setStatus('¡Jaque mate! Tecnica completada.')
      recordAttempt(true)
      return
    }

    if (result === 'stalemate') {
      // Unico error real de la tecnica: deshacer y avisar, sin
      // revelar ninguna "jugada correcta" (no existe una unica).
      game.undo()
      recordAttempt(false)
      setStatus('Esa jugada ahoga al rey (se queda sin jugadas legales y no esta en jaque). Prueba otra forma de acorralarlo.')
      return 'snapback'
    }

    board.position(game.fen())
    highlightMove(move.from, move.to)
    setStatus('El rey negro mueve...')
    window.setTimeout(playOpponentFreeMove, OPPONENT_PAUSE_MS)
  }

  function setStatus (text) {
    elStatus.textContent = text
    updateTurnLabel()
  }

  // Indicador "Juegan blancas/negras" fuera del tablero (peticion de
  // Miguel Angel). updateTurnLabel() refleja siempre el turno real de
  // game.turn() -- se llama junto a setStatus() en cada punto donde
  // la posicion queda estable esperando la proxima jugada. Pero debe
  // "desaparecer al mover": clearTurnLabel() se llama al principio de
  // cada funcion que inicia una jugada (propia o del motor), antes de
  // que la jugada se resuelva, para que no quede visible el turno
  // viejo mientras se procesa la nueva jugada.
  function updateTurnLabel () {
    elTurn.textContent = game.turn() === 'w' ? 'Juegan blancas' : 'Juegan negras'
  }

  function clearTurnLabel () {
    elTurn.textContent = ''
  }

  function onLineComplete () {
    board.position(game.fen())

    if (window.AndroidBridge) {
      window.AndroidBridge.markSolved(line.id)
    }

    if (!sessionQueue) {
      setStatus('Linea completada.')
      return
    }

    if (isNavigable()) {
      setStatus('¡Problema resuelto! Buscando el siguiente sin resolver...')
      window.setTimeout(function () {
        navigateToIndex(findNextUnsolvedIndex(sessionIndex))
      }, SESSION_ADVANCE_PAUSE_MS)
      return
    }

    if (sessionIndex + 1 < sessionQueue.length) {
      setStatus('¡Problema resuelto! Siguiente problema...')
      window.setTimeout(function () {
        sessionIndex++
        loadLine(findLine(sessionQueue[sessionIndex]))
      }, SESSION_ADVANCE_PAUSE_MS)
      return
    }

    setStatus(
      'Sesion completada: ' + sessionQueue.length + ' problemas -- ' +
      sessionAciertos + ' aciertos, ' + sessionFallos + ' fallos en el conjunto.'
    )
  }

  function advanceAfterMove (from, to) {
    showExplanation(line.moves[moveIndex])
    highlightMove(from, to)
    moveIndex++
    attemptsThisMove = 0
    if (moveIndex >= line.moves.length) {
      onLineComplete()
      return
    }
    var expected = currentExpected()
    if (expected.color === opponentColor) {
      setStatus('El motor esta pensando...')
      window.setTimeout(playOpponentMove, OPPONENT_PAUSE_MS)
    } else {
      setStatus('Tu turno.')
    }
  }

  function playOpponentMove () {
    clearTurnLabel()
    var expected = currentExpected()
    if (!expected) return
    var move = game.move(expected.san)
    if (!move) {
      setStatus('Error interno: jugada del motor invalida (' + expected.san + ').')
      return
    }
    board.position(game.fen())
    advanceAfterMove(move.from, move.to)
  }

  function revealExpectedMove () {
    clearTurnLabel()
    var expected = currentExpected()
    var move = game.move(expected.san)
    board.position(game.fen())
    advanceAfterMove(move.from, move.to)
  }

  // Expuesta para que Kotlin la llame tras cerrar el dialogo bloqueante
  // "torpe como una oruga". Unico punto de entrada real (el puente
  // nativo no conoce el modo activo) -- bifurca segun isTreeMode.
  window.onTorpeDialogClosed = function () {
    if (isTreeMode) {
      treeRevealExpected()
    } else {
      revealExpectedMove()
    }
  }

  function onDragStart (source, piece) {
    if (isTreeMode) {
      if (game.isGameOver && game.isGameOver()) return false
      if (treeTurnColor() !== treeUserColor) return false
      return piece.charAt(0) === treeUserColor
    }
    if (game.isGameOver && game.isGameOver()) return false
    if (isFreeMode()) {
      return piece.charAt(0) === userColor
    }
    if (moveIndex >= line.moves.length) return false
    var expected = currentExpected()
    if (!expected || expected.color !== userColor) return false
    if (piece.charAt(0) !== userColor) return false
    return true
  }

  // Logica compartida de "el usuario intenta esta jugada" -- usada
  // tanto por el arrastre real (onDrop, cuando source !== target)
  // como por el segundo toque del modo toque-toque
  // (handleDestinationTap). Devuelve true si era la jugada esperada
  // (ya se ha lanzado advanceAfterMove), false en cualquier otro caso
  // (jugada ilegal, o legal pero incorrecta -- ya deshecha si hacia
  // falta, con su fallo ya registrado).
  function processUserMove (source, target) {
    var expected = currentExpected()
    if (!expected || expected.color !== userColor) return false

    var move = safeMove({ from: source, to: target, promotion: 'q' })
    if (move === null) return false

    if (move.san === expected.san) {
      attemptsThisMove = 0
      recordAttempt(true)
      window.setTimeout(function () { advanceAfterMove(move.from, move.to) }, 0)
      return true
    }

    // Jugada legal pero distinta de la esperada por el repertorio: se
    // deshace y cuenta como fallo.
    game.undo()
    attemptsThisMove++
    recordAttempt(false)

    if (attemptsThisMove >= MAX_ATTEMPTS) {
      setStatus('Jugada revelada tras 3 fallos.')
      if (window.AndroidBridge) {
        window.AndroidBridge.showTorpeDialog()
      } else {
        // Fallback sin puente nativo (solo para pruebas en navegador de escritorio).
        window.alert('torpe como una oruga')
        window.onTorpeDialogClosed()
      }
      return false
    }

    setStatus('Fallo (' + attemptsThisMove + '/' + MAX_ATTEMPTS + '). Intentalo de nuevo.')
    return false
  }

  // Resalte de la pieza "cogida" en modo toque-toque -- distinto del
  // resalte de la ultima jugada (highlight-square), para poder ver
  // ambos a la vez si hace falta.
  function selectSquare (square) {
    if (selectedSquare) {
      $('#board .square-' + selectedSquare).removeClass('selected-square')
    }
    selectedSquare = square
    $('#board .square-' + square).addClass('selected-square')
  }

  function deselectSquare () {
    if (!selectedSquare) return
    $('#board .square-' + selectedSquare).removeClass('selected-square')
    selectedSquare = null
  }

  // Segundo toque del modo toque-toque: tocar la casilla destino.
  // Solo hace falta para casillas que chessboard.js ignora por
  // completo al no haber ninguna pieza propia que arrastrar desde
  // ahi (vacias, o con pieza rival -- mousedownSquare en
  // chessboard.js no empieza ningun arrastre en esos casos, asi que
  // nunca llega a llamar a onDrop). Las casillas con pieza propia SI
  // pasan por chessboard.js con normalidad -- las gestiona el propio
  // onDrop() (toque simple = seleccionar/deseleccionar, ver mas
  // abajo), sin necesidad de este segundo camino.
  function handleDestinationTap (square) {
    if (isFreeMode()) return // fuera de alcance por ahora, ver ANNEX_H04.md
    if (!selectedSquare) return
    var from = selectedSquare
    deselectSquare()
    var moved = isTreeMode ? treeProcessUserMove(from, square) : processUserMove(from, square)
    if (moved) {
      board.position(game.fen())
      highlightMove(from, square)
    }
    updateTurnLabel()
  }

  function onBoardSquarePress (evt) {
    if (isFreeMode()) return
    if (!selectedSquare) return // sin seleccion activa, nada que hacer aqui
    var square = $(this).attr('data-square')
    var piece = game.get(square)
    if (piece && piece.color === userColor) return // pieza propia: la gestiona el flujo normal de chessboard.js
    handleDestinationTap(square)
  }

  function onDrop (source, target) {
    clearTurnLabel()
    if (isFreeMode()) {
      return onDropFreeMode(source, target)
    }
    if (isTreeMode) {
      if (treeTurnColor() !== treeUserColor) { updateTurnLabel(); return 'snapback' }
    } else {
      var expected = currentExpected()
      if (!expected || expected.color !== userColor) { updateTurnLabel(); return 'snapback' }
    }

    if (source === target) {
      // BUG real corregido antes (chess.js lanza excepcion en vez de
      // devolver null en esta jugada, ver safeMove()): un toque
      // simple sin arrastre real llega aqui con origen=destino. No es
      // una jugada -- es el primer toque del modo toque-toque:
      // seleccionar la pieza (o deseleccionarla si ya estaba
      // seleccionada esta misma casilla).
      if (selectedSquare === source) {
        deselectSquare()
      } else {
        selectSquare(source)
      }
      updateTurnLabel()
      return 'snapback'
    }

    // Un arrastre real cancela cualquier seleccion de toque-toque
    // pendiente, se complete la jugada o no.
    deselectSquare()

    var moved = isTreeMode ? treeProcessUserMove(source, target) : processUserMove(source, target)
    updateTurnLabel()
    if (!moved) return 'snapback'
    // Exito: no se devuelve 'snapback' -- se deja que chessboard.js
    // anime la pieza hasta el destino el solo, igual que siempre.
  }

  function onSnapEnd () {
    board.position(game.fen())
  }

  // BUG real (incidencia de Miguel Angel): reiniciar/cambiar de linea
  // mientras hay una pieza "cogida" (arrastre en curso) dejaba el
  // estado interno de chessboard.js sin limpiar -- la variable interna
  // isDragging seguia en true y la imagen flotante de la pieza
  // quedaba huerfana en pantalla, mientras board.position() ya habia
  // cambiado la posicion por debajo. Al soltar, chessboard.js
  // procesaba el drop contra un tablero que ya no era el que empezo a
  // arrastrarse. chessboard.js no expone ningun metodo publico para
  // cancelar un arrastre en curso (es una libreria de terceros, no se
  // modifica), asi que se dispara un mouseup sintetico muy fuera del
  // tablero: si hay un arrastre activo, el propio chessboard.js lo
  // interpreta como "soltar fuera del tablero" (dropOffBoard por
  // defecto es 'snapback') y limpia su estado solo. Si no hay ningun
  // arrastre en curso, el evento no hace nada (chessboard.js
  // comprueba isDragging internamente y sale de inmediato).
  function cancelAnyDrag () {
    var evt = window.jQuery.Event('mouseup', { pageX: -9999, pageY: -9999 })
    window.jQuery(window).trigger(evt)
  }

  function beginLine () {
    deselectSquare()
    clearHighlights()
    elExplain.innerHTML = ''
    if (isFreeMode()) {
      // El bando del usuario siempre empieza en los finales de
      // practica libre (tiene la ventaja material y la iniciativa).
      setStatus('Tu turno.')
      return
    }
    var expected = currentExpected()
    if (expected && expected.color === opponentColor) {
      setStatus('El motor esta pensando...')
      window.setTimeout(playOpponentMove, OPPONENT_PAUSE_MS)
    } else {
      setStatus('Tu turno.')
    }
  }

  function restartLine () {
    if (isTreeMode) { treeRestart(); return }
    cancelAnyDrag()
    if (line.startFen) {
      game.load(line.startFen)
    } else {
      game.reset()
    }
    moveIndex = 0
    attemptsThisMove = 0
    board.position(line.startFen || 'start')
    beginLine()
  }

  // S7: cambia la linea activa sin recargar la pagina (modo sesion).
  // Reutiliza exactamente la misma logica de arranque que init(),
  // solo que sobre una linea nueva en vez de la primera carga.
  function loadLine (newLine) {
    cancelAnyDrag()
    line = newLine
    userColor = line.userColor || 'w'
    opponentColor = userColor === 'w' ? 'b' : 'w'
    game = line.startFen ? new window.Chess(line.startFen) : new window.Chess()
    moveIndex = 0
    attemptsThisMove = 0
    clearHighlights()
    elExplain.innerHTML = ''
    elLineName.textContent = line.name
    elOverview.textContent = line.overview || ''
    loadInitialProgress()
    board.orientation(userColor === 'b' ? 'black' : 'white')
    board.position(line.startFen || 'start')
    updateSessionProgressLabel()
    refreshNavBar()
    beginLine()
  }

  function init () {
    elLineName.textContent = line.name
    elOverview.textContent = line.overview || ''
    loadInitialProgress()
    updateSessionProgressLabel()

    board = window.Chessboard('board', {
      draggable: true,
      position: line.startFen || 'start',
      orientation: userColor === 'b' ? 'black' : 'white',
      pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
      onDragStart: onDragStart,
      onDrop: onDrop,
      onSnapEnd: onSnapEnd
    })

    elRestart.addEventListener('click', restartLine)

    // Segundo toque del modo toque-toque -- delegado en #board porque
    // los ids de las casillas los genera chessboard.js con un uuid
    // por instancia (no se pueden enlazar por id de antemano). Se
    // usa 'mousedown touchstart' (no 'click') para que dispare de
    // inmediato al tocar, sin depender de que el click no quede
    // interceptado por la pieza flotante de chessboard.js durante un
    // arrastre real -- ver handleDestinationTap()/onBoardSquarePress().
    $('#board').on('mousedown touchstart', '[data-square]', onBoardSquarePress)

    if (isNavigable()) {
      elNavFirst.addEventListener('click', goFirst)
      elNavPrev.addEventListener('click', goPrev)
      elNavNext.addEventListener('click', goNext)
      elNavLast.addEventListener('click', goLast)
      elNavGo.addEventListener('click', goToNumber)
      elNavFav.addEventListener('click', toggleFavorite)
      elNavFavList.addEventListener('click', toggleFavoritesView)
    }
    refreshNavBar()

    if (isTreeMode) {
      treeBeginTurn()
    } else {
      beginLine()
    }
  }

  document.addEventListener('DOMContentLoaded', init)
})()
