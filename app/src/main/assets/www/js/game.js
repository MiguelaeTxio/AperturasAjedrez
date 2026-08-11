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
    )
  }

  function findLine (id) {
    var lines = allLines()
    for (var i = 0; i < lines.length; i++) {
      if (lines[i].id === id) return lines[i]
    }
    return lines[0]
  }

  var line = findLine(selectedLineId())
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
  var elLineName = document.getElementById('lineName')
  var elOverview = document.getElementById('overview')
  var elRestart = document.getElementById('restartBtn')
  var elExplain = document.getElementById('explain')

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
    setStatus('Linea completada.')
    board.position(game.fen())
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

  function init () {
    elLineName.textContent = line.name
    elOverview.textContent = line.overview || ''
    loadInitialProgress()

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
    beginLine()
  }

  document.addEventListener('DOMContentLoaded', init)
})()
