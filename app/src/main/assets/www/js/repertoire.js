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
    userColor: 'w',
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
  },
  {
    id: 'h02-gambito-dama-aceptado',
    name: 'Gambito de Dama Aceptado -- Sistema Alekhine',
    userColor: 'w',
    overview: 'Negras capturan el peon c4 en vez de sostener d5. Blancas ' +
      'no se apresuran a recuperarlo: desarrollan primero (Nf3, e3, ' +
      'Bxc4) y dejan que negras gaste tiempo defendiendo el peon de ' +
      'mas, para acabar con mejor centro y mas espacio. Es el plan mas ' +
      'solido contra el Aceptado, frente a alternativas mas agresivas ' +
      'como 3.e4.',
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
        san: 'dxc4',
        explain: {
          idea: 'Gambito de Dama Aceptado: negras se quedan con el peon de mas y sueltan el centro.',
          ventaja: 'Un peon extra de forma inmediata y sin complicaciones tacticas.',
          debilidad: 'Cede el centro y el tiempo de desarrollo; el peon c4 no se puede sostener a largo plazo y blancas lo recuperara con ventaja de espacio.'
        }
      },
      {
        color: 'w',
        san: 'Nf3',
        explain: {
          idea: 'Desarrolla sin prisa por recuperar el peon todavia -- primero completar el desarrollo.',
          ventaja: 'Controla e5 y d4, y prepara el enroque corto rapido.',
          debilidad: 'Deja el peon c4 en manos de negras un turno mas, aunque no supone ningun riesgo real.'
        }
      },
      {
        color: 'b',
        san: 'Nf6',
        explain: {
          idea: 'Desarrollo natural, presiona e4 y prepara el enroque.',
          ventaja: 'Jugada solida que no compromete nada.',
          debilidad: 'No hace nada por sostener el peon c4, que blancas recuperara pronto sin esfuerzo.'
        }
      },
      {
        color: 'w',
        san: 'e3',
        explain: {
          idea: 'Abre la diagonal del alfil de rey para poder recuperar el peon c4 con Bxc4 la siguiente jugada.',
          ventaja: 'Jugada flexible que prepara el enroque corto y no compromete nada mas.',
          debilidad: 'Encierra momentaneamente al propio alfil de dama, igual que en el Rehusado.'
        }
      },
      {
        color: 'b',
        san: 'e6',
        explain: {
          idea: 'Completa el desarrollo del centro y abre la diagonal de su propio alfil de rey.',
          ventaja: 'Jugada solida que prepara el enroque.',
          debilidad: 'Sigue sin defender el peon c4, que blancas captura en la siguiente jugada sin ninguna compensacion para negras.'
        }
      },
      {
        color: 'w',
        san: 'Bxc4',
        explain: {
          idea: 'Recupera el peon con una pieza ya desarrollada y con tiempo de sobra.',
          ventaja: 'Blancas iguala el material y queda con mejor desarrollo y mas espacio en el centro -- la esencia de todo el plan del Sistema Alekhine.',
          debilidad: 'Ninguna; es el objetivo de todo el plan desde la jugada 3.'
        }
      },
      {
        color: 'b',
        san: 'c5',
        explain: {
          idea: 'Contraataca el centro de blancas en vez de quedarse pasivo.',
          ventaja: 'Plan mas activo que limitarse a desarrollar sin mas; cuestiona d4 de inmediato.',
          debilidad: 'Puede dejar la estructura de peones algo suelta si blancas juega con precision (dxc5 seguido de recuperar el peon con ventaja de desarrollo).'
        }
      },
      {
        color: 'w',
        san: 'O-O',
        explain: {
          idea: 'Pone el rey a salvo antes de decidir como responder a c5.',
          ventaja: 'Jugada solida que no compromete nada y deja las opciones abiertas (Qe2, Rd1, dxc5).',
          debilidad: 'Ninguna; es la jugada mas natural para completar la seguridad del rey.'
        }
      },
      {
        color: 'b',
        san: 'a6',
        explain: {
          idea: 'Prepara ...b5 para ganar espacio en el flanco de dama y darle mas margen al alfil de casillas claras.',
          ventaja: 'Jugada flexible tipica del Aceptado, prepara expansion en el flanco de dama.',
          debilidad: 'Jugada lenta que no desarrolla ninguna pieza; blancas puede aprovechar el tiempo con Qe2 o Rd1 presionando el centro.'
        }
      }
    ]
  },
  {
    id: 'h02-defensa-eslava',
    name: 'Defensa Eslava -- linea principal',
    userColor: 'w',
    overview: 'Negras sostiene d5 con c6 en vez de e6, dejando libre desde ' +
      'el principio la diagonal del alfil de casillas claras (el problema ' +
      'estructural del Rehusado). A cambio, el peon c6 tapa la salida ' +
      'natural del caballo de dama. Es la respuesta mas solida y popular ' +
      'contra 1.d4 a nivel de club y profesional.',
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
        san: 'c6',
        explain: {
          idea: 'Defensa Eslava: sostiene d5 sin encerrar el alfil de casillas claras, a diferencia de e6.',
          ventaja: 'Posicion muy solida que deja libre desde el principio la diagonal c8-h3 para el alfil.',
          debilidad: 'Tapa la casilla natural de desarrollo del caballo de dama (b8), que tendra que salir por d7 en vez de c6.'
        }
      },
      {
        color: 'w',
        san: 'Nf3',
        explain: {
          idea: 'Desarrolla una pieza y prepara el enroque corto sin comprometerse aun con Nc3 o cxd5.',
          ventaja: 'Jugada flexible que mantiene varias opciones de plan abiertas.',
          debilidad: 'Ninguna relevante.'
        }
      },
      {
        color: 'b',
        san: 'Nf6',
        explain: {
          idea: 'Desarrollo natural, presiona e4 y prepara el enroque.',
          ventaja: 'Jugada solida que no compromete nada.',
          debilidad: 'Ninguna relevante; es la respuesta mas natural en la posicion.'
        }
      },
      {
        color: 'w',
        san: 'Nc3',
        explain: {
          idea: 'Desarrolla la ultima pieza menor del flanco de dama y refuerza el centro.',
          ventaja: 'Pieza activa que apoya un futuro e4 o presiona d5 de nuevo.',
          debilidad: 'Permite a negras capturar en c4 y sostener el peon de mas con ...b5, el plan principal de la Eslava.'
        }
      },
      {
        color: 'b',
        san: 'dxc4',
        explain: {
          idea: 'A diferencia del Aceptado, aqui negras si puede sostener el peon de mas gracias a que el alfil de casillas claras ya esta libre.',
          ventaja: 'Peon de mas con posibilidades reales de conservarlo tras ...b5.',
          debilidad: 'Cede el centro por completo; si blancas juega con precision (a4) puede evitar que negras sostenga el peon comodamente.'
        }
      },
      {
        color: 'w',
        san: 'a4',
        explain: {
          idea: 'Evita que negras juegue ...b5 para sostener el peon c4, forzando la devolucion del peon mas adelante.',
          ventaja: 'Jugada clave del plan principal contra la Eslava: le quita a negras su plan mas natural.',
          debilidad: 'Debilita ligeramente la casilla b4 y compromete el flanco de dama, aunque es un precio asumido en toda la teoria principal.'
        }
      },
      {
        color: 'b',
        san: 'Bf5',
        explain: {
          idea: 'Saca el alfil de casillas claras antes de que quede encerrado por ...e6, aprovechando la ventaja estructural de la Eslava frente al Rehusado.',
          ventaja: 'Pieza activa fuera de la cadena de peones, apuntando al flanco de rey de blancas.',
          debilidad: 'El alfil puede convertirse en objetivo de Nh4 o Qb3 mas adelante en algunas variantes, aunque no es una amenaza inmediata aqui.'
        }
      },
      {
        color: 'w',
        san: 'e3',
        explain: {
          idea: 'Prepara Bxc4 para recuperar el peon con desarrollo, igual que en el Aceptado.',
          ventaja: 'Jugada solida y flexible que abre la diagonal del alfil de rey.',
          debilidad: 'Encierra temporalmente al propio alfil de dama, ya reubicado fuera en la practica gracias al orden de jugadas.'
        }
      },
      {
        color: 'b',
        san: 'e6',
        explain: {
          idea: 'Completa el desarrollo del centro y prepara el enroque, dejando ya colocado el alfil fuera de la cadena de peones.',
          ventaja: 'Estructura solida con el problema del alfil ya resuelto, a diferencia del Rehusado.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural en la posicion.'
        }
      }
    ]
  },
  {
    id: 'h02-qgd-cambio',
    name: 'Gambito de Dama Rehusado -- Variante de Cambio',
    userColor: 'w',
    overview: 'Blancas cambia en d5 de forma voluntaria (cxd5) para fijar ' +
      'la estructura de peones y jugar contra la debilidad resultante en ' +
      'el flanco de dama de negras con el plan clasico de minoria de ' +
      'peones (b4-b5). Es una alternativa mas estrategica y menos ' +
      'tactica que la linea principal del Rehusado, muy popular en la ' +
      'practica de club por lo clara que es la idea de medio juego.',
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
          idea: 'Desarrolla una pieza y refuerza el control sobre d5 antes de decidir cuando cambiar en d5.',
          ventaja: 'Pieza activa que apoya el plan de cambio en d5 y la minoria de peones posterior.',
          debilidad: 'Ninguna relevante en este orden de jugadas.'
        }
      },
      {
        color: 'b',
        san: 'Nf6',
        explain: {
          idea: 'Desarrolla la pieza mas natural, presionando e4 y preparando el enroque corto.',
          ventaja: 'Jugada solida que no compromete nada.',
          debilidad: 'Ninguna relevante; es la respuesta mas natural en la posicion.'
        }
      },
      {
        color: 'w',
        san: 'cxd5',
        explain: {
          idea: 'Variante de Cambio: fija la estructura de peones antes de que negras decida como recapturar.',
          ventaja: 'Define el plan de medio juego con claridad: minoria de peones en el flanco de dama (b4-b5) contra la estructura resultante.',
          debilidad: 'Renuncia a la tension central que mantiene la linea principal; algunos jugadores de blancas prefieren mantener mas opciones sin definir la estructura tan pronto.'
        }
      },
      {
        color: 'b',
        san: 'exd5',
        explain: {
          idea: 'Recaptura manteniendo un peon en d5 y las dos torres conectadas por la columna e abierta para el rival, la recaptura mas comun.',
          ventaja: 'Estructura solida y simetrica, sin debilidades inmediatas.',
          debilidad: 'La columna c queda semiabierta para blancas, base del plan de minoria de peones que viene a continuacion.'
        }
      },
      {
        color: 'w',
        san: 'Bg5',
        explain: {
          idea: 'Clava el caballo de f6 y mantiene la presion sobre el centro antes de completar el desarrollo.',
          ventaja: 'Pieza activa fuera de la cadena de peones, preparando e3 y el plan de minoria con b4.',
          debilidad: 'Ninguna inmediata; jugada estandar del plan.'
        }
      },
      {
        color: 'b',
        san: 'Be7',
        explain: {
          idea: 'Rompe la clavada preparando el enroque sin debilitar la estructura con ...h6 tan pronto.',
          ventaja: 'Desarrollo solido, lista para enrocar en la siguiente jugada.',
          debilidad: 'Deja pasar la opcion mas combativa ...h6 seguido de ...O-O; ambas son teoria principal.'
        }
      },
      {
        color: 'w',
        san: 'e3',
        explain: {
          idea: 'Completa el desarrollo del centro y prepara Bd3, dejando el plan de minoria (b4-b5) para mas adelante tras el enroque.',
          ventaja: 'Jugada solida y flexible tipica de toda la Variante de Cambio.',
          debilidad: 'Encierra temporalmente al propio alfil de dama, ya reubicado en g5.'
        }
      },
      {
        color: 'b',
        san: 'O-O',
        explain: {
          idea: 'Pone el rey a salvo antes del medio juego, donde vendra el plan de minoria de blancas.',
          ventaja: 'Seguridad del rey resuelta.',
          debilidad: 'Ninguna; es la jugada mas natural para completar el desarrollo basico.'
        }
      }
    ]
  },
  {
    id: 'h02-escandinava-principal',
    name: 'Escandinava -- linea principal (2...Qxd5)',
    userColor: 'b',
    overview: 'Negras responde a 1.e4 capturando de inmediato en d5 con la ' +
      'dama tras el cambio de peones, y la reubica en a5 para evitar que ' +
      'blancas la ataque con tiempo. Es la respuesta mas directa y menos ' +
      'teorica contra 1.e4: negras sale del libro de aperturas antes que ' +
      'blancas y busca una posicion solida y conocida de memoria.',
    moves: [
      {
        color: 'w',
        san: 'e4',
        explain: {
          idea: 'Ocupa el centro y abre la diagonal de la dama y del alfil de rey.',
          ventaja: 'Jugada mas popular a todos los niveles, maxima actividad inmediata para las piezas.',
          debilidad: 'Ninguna real a este nivel; es una de las dos jugadas principales para empezar la partida.'
        }
      },
      {
        color: 'b',
        san: 'd5',
        explain: {
          idea: 'Escandinava: negras ataca el peon e4 de inmediato en vez de responder de forma simetrica o cerrada.',
          ventaja: 'Fuerza a blancas a definir la estructura central en la jugada 2, sacando la partida del terreno mas teorico de otras defensas.',
          debilidad: 'Tras el cambio de peones, la dama de negras tendra que salir pronto y blancas puede ganar tiempo atacandola con piezas menores.'
        }
      },
      {
        color: 'w',
        san: 'exd5',
        explain: {
          idea: 'Captura el peon ofrecido; casi siempre la respuesta principal.',
          ventaja: 'Gana un peon de forma momentanea y obliga a negras a recapturar, casi siempre con la dama.',
          debilidad: 'Ninguna; es la continuacion practicamente obligada para no perder tiempo defendiendo e4.'
        }
      },
      {
        color: 'b',
        san: 'Qxd5',
        explain: {
          idea: 'Recaptura con la dama, la unica pieza que puede hacerlo de inmediato.',
          ventaja: 'Recupera el material y desarrolla la dama a una casilla central, aunque tendra que moverse de nuevo pronto.',
          debilidad: 'La dama queda expuesta en el centro, blanco facil para Nc3 con ganancia de tiempo -- el precio principal de toda la Escandinava.'
        }
      },
      {
        color: 'w',
        san: 'Nc3',
        explain: {
          idea: 'Desarrolla una pieza atacando la dama de negras, ganando un tiempo de desarrollo gratis.',
          ventaja: 'Pieza activa con tiempo ganado; es la razon principal por la que 2...Qxd5 exige mas precision que otras defensas.',
          debilidad: 'Ninguna; es la jugada mas natural y fuerte en la posicion.'
        }
      },
      {
        color: 'b',
        san: 'Qa5',
        explain: {
          idea: 'Reubica la dama a una casilla activa fuera del alcance de mas ataques de tiempo, manteniendo la clavada sobre Nc3 si blancas desarrolla con Bd2 mas adelante.',
          ventaja: 'La retirada mas popular: la dama queda razonablemente segura y sigue presionando el flanco de dama de blancas.',
          debilidad: 'La dama sigue fuera y puede volver a perder tiempos si blancas encuentra Nd5 o Bd2 con ideas de ganar mas tiempo.'
        }
      },
      {
        color: 'w',
        san: 'd4',
        explain: {
          idea: 'Ocupa el centro con el segundo peon central, ganando espacio mientras negras sigue sin completar el desarrollo.',
          ventaja: 'Centro solido y mucho espacio, la compensacion natural de blancas por el tiempo que le costo a negras recuperar el peon.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural y fuerte.'
        }
      },
      {
        color: 'b',
        san: 'Nf6',
        explain: {
          idea: 'Empieza por fin el desarrollo de piezas menores, presionando e4 (ya vacio) y preparando el enroque.',
          ventaja: 'Jugada natural que acelera la seguridad del rey, ya urgente tras varias jugadas de dama.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural en la posicion.'
        }
      },
      {
        color: 'w',
        san: 'Nf3',
        explain: {
          idea: 'Desarrolla la ultima pieza menor del flanco de rey y prepara el enroque corto.',
          ventaja: 'Jugada solida que completa el desarrollo rapido tipico de las lineas contra la Escandinava.',
          debilidad: 'Ninguna relevante.'
        }
      },
      {
        color: 'b',
        san: 'c6',
        explain: {
          idea: 'Da una casilla de retirada a la dama en c7 y prepara el desarrollo del caballo de dama por d7.',
          ventaja: 'Jugada flexible y solida, tipica de las lineas modernas de la Escandinava.',
          debilidad: 'Jugada algo lenta que no desarrolla ninguna pieza nueva; blancas puede seguir ganando tiempo de desarrollo con Bd2 o Bc4.'
        }
      },
      {
        color: 'w',
        san: 'Bc4',
        explain: {
          idea: 'Desarrolla el alfil a una diagonal activa apuntando a f7, el punto tradicionalmente mas debil del bando negro.',
          ventaja: 'Pieza activa con presion directa sobre f7 mientras negras aun no ha enrocado.',
          debilidad: 'Ninguna inmediata; jugada estandar del plan principal contra la Escandinava.'
        }
      },
      {
        color: 'b',
        san: 'Bf5',
        explain: {
          idea: 'Saca por fin el alfil de casillas claras antes de que quede encerrado, aprovechando que en la Escandinava esta diagonal esta libre desde el principio.',
          ventaja: 'Pieza activa fuera de la cadena de peones, con la partida ya casi desarrollada del todo pese al tiempo perdido con la dama.',
          debilidad: 'Ninguna inmediata; es la continuacion mas natural para completar el desarrollo de piezas menores.'
        }
      }
    ]
  }
]

