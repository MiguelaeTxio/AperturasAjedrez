// Repertorio embebido -- Hito 01: una unica linea jugable de principio
// a fin (Gambito de Dama con blancas) para verificar el flujo completo
// de entrenamiento. El resto de variantes de blancas y la escandinava
// de negras se anaden en el Hito 02 (ver DOCS/MASTER_DOCUMENT.md).
//
// IMPORTANTE: el campo "id" de cada linea debe coincidir exactamente
// con el id declarado en RepertoireCatalog.kt (selector nativo del
// menu) -- son dos listas separadas a proposito (una en JS para el
// motor de entrenamiento, otra en Kotlin para el selector nativo),
// pero comparten el mismo espacio de identificadores.
//
// "color" indica quien mueve esa jugada: "w" = Miguel Angel (usuario,
// debe acertarla), "b" = el motor (auto-jugada). "san" es la jugada en
// notacion algebraica estandar, tal como la produce chess.js. "explain"
// es la explicacion que se muestra tras jugarse esa jugada (propia o
// del motor): la idea general de la jugada, su ventaja principal y su
// debilidad o riesgo principal.
var REPERTOIRE_LINES = [
  {
    id: 'h01-gambito-dama-rehusado',
    name: 'Gambito de Dama Rehusado -- linea principal',
    overview: 'Blancas ceden el centro de peones a cambio de desarrollo ' +
      'rapido y presion sobre d5. Negras rehusan el gambito sosteniendo ' +
      'd5 con e6, a costa de encerrar temporalmente su alfil de casillas ' +
      'claras. Es la base clasica de todo el repertorio de dama de ' +
      'blancas: solida, poco arriesgada, y con planes de medio juego ' +
      'muy estudiados (minoria de peones en el flanco de dama, ataque ' +
      'central con e3-e4 tras completar el desarrollo).',
    moves: [
      {
        color: 'w',
        san: 'd4',
        explain: {
          idea: 'Ocupa el centro y abre la diagonal del alfil de dama.',
          ventaja: 'Controla e5 y c5, y prepara un desarrollo rapido sin comprometerse todavia con c4.',
          debilidad: 'Ninguna real a este nivel; es la jugada mas solida y flexible para empezar.'
        }
      },
      {
        color: 'b',
        san: 'd5',
        explain: {
          idea: 'Negras responden en el centro con la misma logica: ocupar y no ceder espacio.',
          ventaja: 'Mantiene la simetria y no debilita ninguna casilla.',
          debilidad: 'Dificulta el desarrollo del alfil de casillas claras de negras, que queda encerrado tras la cadena de peones.'
        }
      },
      {
        color: 'w',
        san: 'c4',
        explain: {
          idea: 'El Gambito de Dama: blancas ofrecen el peon c4 para atacar el centro de negras desde el flanco.',
          ventaja: 'Si negras capturan (dxc4), blancas recuperan el peon con facilidad y quedan con mejor desarrollo; si negras sostienen d5, blancas ganan tiempo y espacio en el flanco de dama.',
          debilidad: 'Cede momentaneamente el control exclusivo del centro y abre ligeramente la posicion del rey mientras no se ha enrocado.'
        }
      },
      {
        color: 'b',
        san: 'e6',
        explain: {
          idea: 'Gambito de Dama Rehusado: negras sostienen d5 sin capturar, abriendo la diagonal de su alfil de rey.',
          ventaja: 'Posicion solida y flexible, la mas fiable estadisticamente para negras contra 1.d4.',
          debilidad: 'El alfil de casillas claras de negras queda temporalmente encerrado tras la cadena de peones e6-d5; liberarlo es uno de los planes centrales de negras en el medio juego.'
        }
      },
      {
        color: 'w',
        san: 'Nc3',
        explain: {
          idea: 'Desarrolla una pieza y refuerza el control sobre d5, preparando presionar el centro de negras.',
          ventaja: 'Pieza activa que apoya un futuro Bg5 o e4, y no bloquea el peon c4.',
          debilidad: 'Permite a negras la Defensa Eslava (c6) en otros ordenes de jugadas; en esta linea negras ya jugo e6, asi que no aplica aqui.'
        }
      },
      {
        color: 'b',
        san: 'Nf6',
        explain: {
          idea: 'Desarrolla la pieza mas natural, presionando e4 y preparando el enroque corto.',
          ventaja: 'Jugada solida que no compromete nada y acelera la seguridad del rey.',
          debilidad: 'Ninguna relevante; es la respuesta mas natural en la posicion.'
        }
      },
      {
        color: 'w',
        san: 'Bg5',
        explain: {
          idea: 'Clava el caballo de f6 contra la dama, aumentando la presion sobre el centro y sobre d5.',
          ventaja: 'Pieza activa fuera de la cadena de peones antes de que quede encerrada, y prepara e3 seguido de un desarrollo rapido.',
          debilidad: 'El alfil puede acabar siendo blanco de ...h6 y ...g5 mas adelante si negras busca contrajuego agresivo, aunque no es una amenaza inmediata.'
        }
      },
      {
        color: 'b',
        san: 'Be7',
        explain: {
          idea: 'Rompe la clavada preparando el enroque sin debilitar la estructura de peones con ...h6 tan pronto.',
          ventaja: 'Desarrollo solido, mantiene la posicion flexible y lista para enrocar en la siguiente jugada.',
          debilidad: 'Deja pasar la opcion mas combativa ...h6 seguido de ...O-O; ambas son teoria principal.'
        }
      },
      {
        color: 'w',
        san: 'e3',
        explain: {
          idea: 'Abre la diagonal del alfil de rey y refuerza d4, preparando el desarrollo del resto de piezas menores.',
          ventaja: 'Jugada solida y flexible que no compromete la estructura y deja varias opciones abiertas (Bd3 o Be2, Nf3, enroque corto).',
          debilidad: 'Encierra temporalmente al propio alfil de casillas claras de blancas, simetrico al problema que tiene negras con el suyo.'
        }
      },
      {
        color: 'b',
        san: 'O-O',
        explain: {
          idea: 'Pone el rey a salvo y conecta las torres antes de decidir el plan de medio juego.',
          ventaja: 'Seguridad del rey resuelta; a partir de aqui negras puede pensar en ...h6, ...b6 o el plan clasico de minoria en el flanco de dama.',
          debilidad: 'Ninguna; es la jugada mas natural para completar el desarrollo basico.'
        }
      }
    ]
  }
]
