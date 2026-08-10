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

  function findLine (id) {
    for (var i = 0; i < REPERTOIRE_LINES.length; i++) {
      if (REPERTOIRE_LINES[i].id === id) return REPERTOIRE_LINES[i]
    }
    return REPERTOIRE_LINES[0]
  }

  var line = findLine(selectedLineId())
  var game = new window.Chess()
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
    if (expected.color === 'b') {
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
    if (moveIndex >= line.moves.length) return false
    var expected = currentExpected()
    if (!expected || expected.color !== 'w') return false
    if (piece.search(/^b/) !== -1) return false
    return true
  }

  function onDrop (source, target) {
    var expected = currentExpected()
    if (!expected || expected.color !== 'w') return 'snapback'

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

  function restartLine () {
    game.reset()
    moveIndex = 0
    attemptsThisMove = 0
    board.position('start')
    clearHighlights()
    elExplain.innerHTML = ''
    setStatus('Tu turno.')
  }

  function init () {
    elLineName.textContent = line.name
    elOverview.textContent = line.overview || ''
    loadInitialProgress()

    board = window.Chessboard('board', {
      draggable: true,
      position: 'start',
      pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
      onDragStart: onDragStart,
      onDrop: onDrop,
      onSnapEnd: onSnapEnd
    })

    setStatus('Tu turno.')
    elRestart.addEventListener('click', restartLine)
  }

  document.addEventListener('DOMContentLoaded', init)
})()
