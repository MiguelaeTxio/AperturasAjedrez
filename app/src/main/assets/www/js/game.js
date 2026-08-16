// Logica de entrenamiento del Hito 01 -- ver mecanica cerrada en
// DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H01.md (incidencia S1).
;(function () {
  'use strict'

  var MAX_ATTEMPTS = 3
  var OPPONENT_PAUSE_MS = 550

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
  function allLines () {
    return REPERTOIRE_LINES.concat(
      typeof FINALES_LINES !== 'undefined' ? FINALES_LINES : []
    ).concat(
      typeof PROBLEMAS_LINES !== 'undefined' ? PROBLEMAS_LINES : []
    ).concat(
      typeof TRAMPAS_LINES !== 'undefined' ? TRAMPAS_LINES : []
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

  var line = findLine(sessionQueue ? sessionQueue[sessionIndex] : selectedLineId())
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

  var elStatus = document.getElementById('status')
  var elProgress = document.getElementById('progress')
  var elSessionProgress = document.getElementById('sessionProgress')
  var elLineName = document.getElementById('lineName')
  var elOverview = document.getElementById('overview')
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

  function recordAttempt (correct) {
    if (correct) { aciertos++ } else { fallos++ }
    if (sessionQueue) {
      if (correct) { sessionAciertos++ } else { sessionFallos++ }
    }
    refreshProgressLabel()
    if (window.AndroidBridge) {
      window.AndroidBridge.recordAttempt(line.id, correct)
    }
  }

  function clearHighlights () {
    $('#board .square-55d63').removeClass('highlight-square')
  }

  function highlightMove (from, to) {
    clearHighlights()
    $('#board .square-' + from).addClass('highlight-square')
    $('#board .square-' + to).addClass('highlight-square')
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
    var legal = game.moves()
    if (legal.length === 0) return // no deberia ocurrir, ya se comprobo antes de llamar
    var pick = legal[Math.floor(Math.random() * legal.length)]
    var move = game.move(pick)
    board.position(game.fen())
    highlightMove(move.from, move.to)
    setStatus('Tu turno.')
  }

  function onDropFreeMode (source, target) {
    var move = game.move({ from: source, to: target, promotion: 'q' })
    if (move === null) return 'snapback'

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
    var expected = currentExpected()
    var move = game.move(expected.san)
    board.position(game.fen())
    advanceAfterMove(move.from, move.to)
  }

  // Expuesta para que Kotlin la llame tras cerrar el dialogo bloqueante
  // "torpe como una oruga".
  window.onTorpeDialogClosed = function () {
    revealExpectedMove()
  }

  function onDragStart (source, piece) {
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

  function onDrop (source, target) {
    if (isFreeMode()) {
      return onDropFreeMode(source, target)
    }
    var expected = currentExpected()
    if (!expected || expected.color !== userColor) return 'snapback'

    var move = game.move({ from: source, to: target, promotion: 'q' })
    if (move === null) return 'snapback'

    if (move.san === expected.san) {
      attemptsThisMove = 0
      recordAttempt(true)
      window.setTimeout(function () { advanceAfterMove(move.from, move.to) }, 0)
      return
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
      return
    }

    setStatus('Fallo (' + attemptsThisMove + '/' + MAX_ATTEMPTS + '). Intentalo de nuevo.')
    return 'snapback'
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

    beginLine()
  }

  document.addEventListener('DOMContentLoaded', init)
})()
