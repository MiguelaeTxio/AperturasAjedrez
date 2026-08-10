// Repertorio embebido -- Hito 01: una unica linea jugable de principio
// a fin (Gambito de Dama con blancas) para verificar el flujo completo
// de entrenamiento. El resto de variantes de blancas y la escandinava
// de negras se anaden en el Hito 02 (ver DOCS/MASTER_DOCUMENT.md).
//
// "color" indica quien mueve esa jugada: "w" = Miguel Angel (usuario,
// debe acertarla), "b" = el motor (auto-jugada). "san" es la jugada en
// notacion algebraica estandar, tal como la produce chess.js.
var REPERTOIRE_LINES = [
  {
    id: 'h01-gambito-dama-rehusado',
    name: 'Gambito de Dama Rehusado -- linea principal',
    moves: [
      { color: 'w', san: 'd4' },
      { color: 'b', san: 'd5' },
      { color: 'w', san: 'c4' },
      { color: 'b', san: 'e6' },
      { color: 'w', san: 'Nc3' },
      { color: 'b', san: 'Nf6' },
      { color: 'w', san: 'Bg5' },
      { color: 'b', san: 'Be7' },
      { color: 'w', san: 'e3' },
      { color: 'b', san: 'O-O' }
    ]
  }
]
