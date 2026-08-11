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
  },
  {
    id: 'h02-contragambito-albin',
    name: 'Contragambito Albin -- respuesta principal',
    userColor: 'w',
    overview: 'Familia Gambito de Dama: en vez de sostener o capturar en ' +
      'c4, negras contragambitea con e5, buscando complicaciones ' +
      'tacticas inmediatas y un peon pasado avanzado en d4. Blancas ' +
      'responde con el plan mas solido y menos comprometido: capturar ' +
      'en e5 y fianchettar el alfil de rey para presionar el peon d4 ' +
      'desde lejos, sin tener que calcular las lineas mas afiladas.',
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
          idea: 'Negras responde en el centro con la misma logica: ocupar y no ceder espacio.',
          ventaja: 'Mantiene la simetria y no debilita ninguna casilla.',
          debilidad: 'Dificulta el desarrollo del alfil de casillas claras de negras, que queda encerrado tras la cadena de peones.'
        }
      },
      {
        color: 'w',
        san: 'c4',
        explain: {
          idea: 'El Gambito de Dama: blancas ofrecen el peon c4 para atacar el centro de negras desde el flanco.',
          ventaja: 'Da a negras varias formas de responder, y en todas ellas blancas obtiene alguna ventaja de espacio o desarrollo.',
          debilidad: 'Cede momentaneamente el control exclusivo del centro.'
        }
      },
      {
        color: 'b',
        san: 'e5',
        explain: {
          idea: 'Contragambito Albin: en vez de defender o capturar en c4, negras contraataca de inmediato el centro con su propio gambito.',
          ventaja: 'Jugada muy agresiva que busca sacar a blancas de la teoria mas conocida y crear complicaciones rapidas.',
          debilidad: 'Objetivamente arriesgada: si blancas responde con precision (como en esta linea), negras queda con menos espacio y un peon avanzado que puede volverse debil en vez de fuerte.'
        }
      },
      {
        color: 'w',
        san: 'dxe5',
        explain: {
          idea: 'Acepta el gambito capturando el peon ofrecido; la respuesta mas natural y fuerte.',
          ventaja: 'Gana un peon de forma momentanea sin ningun riesgo inmediato.',
          debilidad: 'Ninguna; es la continuacion practicamente obligada.'
        }
      },
      {
        color: 'b',
        san: 'd4',
        explain: {
          idea: 'Avanza el peon de dama en vez de recapturar, ganando espacio y clavando la idea de crear un peon pasado protegido mas adelante.',
          ventaja: 'Peon muy avanzado que resta espacio a blancas en el centro.',
          debilidad: 'El peon d4 queda sin apoyo inmediato y sera un objetivo constante durante toda la partida si blancas juega con precision.'
        }
      },
      {
        color: 'w',
        san: 'Nf3',
        explain: {
          idea: 'Desarrolla evitando complicaciones prematuras y prepara fianchettar el alfil de rey para presionar d4 a distancia.',
          ventaja: 'Plan solido y sencillo de ejecutar, evita las lineas mas tacticas y complicadas del Albin.',
          debilidad: 'Ninguna; es el plan mas fiable contra el Albin a nivel de club.'
        }
      },
      {
        color: 'b',
        san: 'Nc6',
        explain: {
          idea: 'Desarrolla y refuerza el peon d4 avanzado, preparando recuperar el peon e5 con ...Bxe5 o similar mas adelante.',
          ventaja: 'Pieza activa que sostiene la estructura de peones agresiva de negras.',
          debilidad: 'Ninguna inmediata; jugada natural del plan de negras.'
        }
      },
      {
        color: 'w',
        san: 'g3',
        explain: {
          idea: 'Prepara fianchettar el alfil de rey a g2, la pieza clave del plan de blancas contra el Albin: presiona el peon d4 desde la larga diagonal sin necesidad de bloquearlo con piezas.',
          ventaja: 'Plan estrategico claro y de bajo riesgo, tipico de todas las lineas solidas contra el Albin.',
          debilidad: 'Cede algo de tiempo mientras negras completa su desarrollo, aunque el plan compensa sobradamente a la larga.'
        }
      },
      {
        color: 'b',
        san: 'Be6',
        explain: {
          idea: 'Desarrolla el alfil de casillas claras, libre desde el principio en el Albin, y prepara el enroque largo en algunas lineas.',
          ventaja: 'Pieza activa fuera de la cadena de peones.',
          debilidad: 'No hace nada por resolver el problema de fondo del peon d4 avanzado, que sigue siendo un objetivo a largo plazo para blancas.'
        }
      },
      {
        color: 'w',
        san: 'Bg2',
        explain: {
          idea: 'Completa el fianchetto: el alfil presiona d4 y c6 desde la larga diagonal, la pieza clave de todo el plan contra el Albin.',
          ventaja: 'Presion constante y de largo alcance sobre el peon avanzado de negras sin arriesgar nada.',
          debilidad: 'Ninguna; es el objetivo de todo el plan desde la jugada 5.'
        }
      },
      {
        color: 'b',
        san: 'Qd7',
        explain: {
          idea: 'Prepara el enroque largo (O-O-O) y conecta las torres, un plan tipico de negras en el Albin para buscar contrajuego rapido en el flanco de rey.',
          ventaja: 'Desarrollo activo que mantiene las opciones de ataque de negras.',
          debilidad: 'El rey en el enroque largo puede quedar expuesto si blancas ataca el flanco de dama con a3-b4 mas adelante.'
        }
      }
    ]
  },
  {
    id: 'h02-defensa-chigorin',
    name: 'Defensa Chigorin -- respuesta principal',
    userColor: 'w',
    overview: 'Familia Gambito de Dama: negras desarrolla el caballo de ' +
      'dama antes que el peon, rompiendo las reglas clasicas de la ' +
      'apertura a cambio de piezas rapidas y activas. Blancas responde ' +
      'con el plan mas claro: cambiar en d5 y aceptar doblar los propios ' +
      'peones a cambio del par de alfiles, una ventaja estructural a ' +
      'largo plazo frente al planteamiento poco ortodoxo de negras.',
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
          idea: 'Negras responde en el centro con la misma logica: ocupar y no ceder espacio.',
          ventaja: 'Mantiene la simetria y no debilita ninguna casilla.',
          debilidad: 'Dificulta el desarrollo del alfil de casillas claras de negras, que queda encerrado tras la cadena de peones.'
        }
      },
      {
        color: 'w',
        san: 'c4',
        explain: {
          idea: 'El Gambito de Dama: blancas ofrecen el peon c4 para atacar el centro de negras desde el flanco.',
          ventaja: 'Da a negras varias formas de responder, y en todas ellas blancas obtiene alguna ventaja de espacio o desarrollo.',
          debilidad: 'Cede momentaneamente el control exclusivo del centro.'
        }
      },
      {
        color: 'b',
        san: 'Nc6',
        explain: {
          idea: 'Defensa Chigorin: desarrolla el caballo de dama antes que el peon de rey, una idea poco ortodoxa que prioriza piezas activas sobre estructura solida.',
          ventaja: 'Desarrollo rapido y planteamiento dificil de preparar para blancas si no conoce la teoria concreta.',
          debilidad: 'Bloquea el propio peon c7, dificultando el plan clasico de sostener el centro con c6; objetivamente algo dudosa a nivel teorico.'
        }
      },
      {
        color: 'w',
        san: 'Nf3',
        explain: {
          idea: 'Desarrolla y protege el peon d4 antes de decidir como responder al planteamiento poco convencional de negras.',
          ventaja: 'Jugada solida y flexible que no compromete nada.',
          debilidad: 'Ninguna relevante.'
        }
      },
      {
        color: 'b',
        san: 'Bg4',
        explain: {
          idea: 'Clava el caballo de f3 para dificultar que blancas defienda d4 con comodidad.',
          ventaja: 'Pieza activa que presiona de inmediato el centro de blancas.',
          debilidad: 'Deja que blancas rompa la clavada con h3 y luego gane el par de alfiles si negras captura en f3.'
        }
      },
      {
        color: 'w',
        san: 'cxd5',
        explain: {
          idea: 'Cambia en el centro antes de que negras pueda sostenerlo, aprovechando que Nc6 ya bloquea la recaptura mas natural con el peon c.',
          ventaja: 'Gana un peon momentaneamente y fuerza a negras a recapturar con una pieza, perdiendo tiempo.',
          debilidad: 'Ninguna; es la continuacion mas fuerte y directa contra el planteamiento de negras.'
        }
      },
      {
        color: 'b',
        san: 'Bxf3',
        explain: {
          idea: 'Antes de recapturar en d5, negras resuelve la clavada capturando el caballo, evitando que blancas gane un tiempo con h3 mas adelante.',
          ventaja: 'Elimina una pieza defensora clave de blancas y desorganiza momentaneamente su estructura de peones de rey.',
          debilidad: 'Cede el par de alfiles a cambio de nada material, una concesion estructural importante a largo plazo.'
        }
      },
      {
        color: 'w',
        san: 'gxf3',
        explain: {
          idea: 'Recaptura con el peon, la unica opcion, doblando los propios peones de rey.',
          ventaja: 'A cambio de los peones doblados, blancas se queda con el par de alfiles y una columna g semiabierta util para el ataque.',
          debilidad: 'Estructura de peones de rey daniada, aunque el par de alfiles compensa sobradamente segun la teoria establecida.'
        }
      },
      {
        color: 'b',
        san: 'Qxd5',
        explain: {
          idea: 'Recupera el peon con la dama, la recaptura mas natural ya que el caballo de c6 impide hacerlo con el peon c.',
          ventaja: 'Recupera el material inmediatamente.',
          debilidad: 'La dama queda en el centro, expuesta a perder otro tiempo si blancas encuentra Nc3 con ataque.'
        }
      },
      {
        color: 'w',
        san: 'e3',
        explain: {
          idea: 'Prepara el desarrollo del alfil de rey y refuerza d4, sin prisa por atacar la dama de inmediato.',
          ventaja: 'Jugada solida que consolida la ventaja estructural (par de alfiles) sin ningun riesgo.',
          debilidad: 'Ninguna relevante.'
        }
      },
      {
        color: 'b',
        san: 'e5',
        explain: {
          idea: 'Contraataca el centro de blancas antes de que consolide del todo su ventaja estructural, tipico plan activo de la Chigorin.',
          ventaja: 'Jugada mas combativa que quedarse pasivo, cuestiona d4 de inmediato.',
          debilidad: 'Puede abrir aun mas la posicion en un momento en el que blancas tiene el par de alfiles, generalmente favorable a la parte con los dos alfiles.'
        }
      }
    ]
  },
  {
    id: 'h02-semi-eslava-meran',
    name: 'Semi-Eslava -- Variante Meran',
    userColor: 'w',
    overview: 'Familia Gambito de Dama / Eslava: negras combina ...c6 y ' +
      '...e6 en el mismo sistema, la estructura mas solida y elastica ' +
      'contra 1.d4 a nivel de elite. Blancas desarrolla con naturalidad ' +
      'y dirige la partida hacia la Variante Meran, donde negras captura ' +
      'en c4 y contragambitea de inmediato con ...b5, generando partidas ' +
      'muy ricas de plan y con juego en ambos flancos.',
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
          idea: 'Negras responde en el centro con la misma logica: ocupar y no ceder espacio.',
          ventaja: 'Mantiene la simetria y no debilita ninguna casilla.',
          debilidad: 'Dificulta el desarrollo del alfil de casillas claras de negras, que queda encerrado tras la cadena de peones.'
        }
      },
      {
        color: 'w',
        san: 'c4',
        explain: {
          idea: 'El Gambito de Dama: blancas ofrecen el peon c4 para atacar el centro de negras desde el flanco.',
          ventaja: 'Da a negras varias formas de responder, y en todas ellas blancas obtiene alguna ventaja de espacio o desarrollo.',
          debilidad: 'Cede momentaneamente el control exclusivo del centro.'
        }
      },
      {
        color: 'b',
        san: 'c6',
        explain: {
          idea: 'Defensa Eslava: sostiene d5 sin encerrar el alfil de casillas claras, dejando abierta la opcion de transponer a la Semi-Eslava con ...e6.',
          ventaja: 'Posicion muy solida y flexible, base de dos sistemas distintos (Eslava pura y Semi-Eslava) segun como continue negras.',
          debilidad: 'Tapa momentaneamente la casilla natural de desarrollo del caballo de dama.'
        }
      },
      {
        color: 'w',
        san: 'Nf3',
        explain: {
          idea: 'Desarrolla una pieza y prepara el enroque corto sin comprometerse aun con el plan concreto.',
          ventaja: 'Jugada flexible que sirve tanto contra la Eslava pura como contra la Semi-Eslava.',
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
          debilidad: 'Ninguna en esta linea concreta.'
        }
      },
      {
        color: 'b',
        san: 'e6',
        explain: {
          idea: 'Semi-Eslava: combina ...c6 ya jugado con ...e6, liberando la diagonal del alfil de rey aunque encerrando de nuevo el de casillas claras -- la eleccion consciente entre las dos estructuras.',
          ventaja: 'Estructura elastica y muy solida, terreno de la teoria mas moderna y respetada contra 1.d4.',
          debilidad: 'Vuelve a encerrar el alfil de casillas claras, el mismo problema estructural que en el Rehusado puro, aunque compensado por la solidez general del sistema.'
        }
      },
      {
        color: 'w',
        san: 'e3',
        explain: {
          idea: 'Completa el desarrollo del centro y prepara Bd3, el plan clasico de blancas en la Meran.',
          ventaja: 'Jugada solida y flexible, deja las opciones de flanco de dama (a3, b4) abiertas para mas adelante.',
          debilidad: 'Encierra temporalmente al propio alfil de dama.'
        }
      },
      {
        color: 'b',
        san: 'Nbd7',
        explain: {
          idea: 'Desarrolla el caballo de dama por d7, unica casilla disponible ya que c6 esta ocupado por el peon.',
          ventaja: 'Pieza que apoya un futuro ...dxc4 y ...b5, el plan caracteristico de la Meran.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural en la posicion.'
        }
      },
      {
        color: 'w',
        san: 'Bd3',
        explain: {
          idea: 'Desarrolla el alfil a su diagonal mas activa antes de que negras defina el centro con ...dxc4.',
          ventaja: 'Pieza bien colocada, apuntando al flanco de rey de negras y lista para recapturar en c4 si hace falta.',
          debilidad: 'Ninguna inmediata; jugada estandar del plan Meran.'
        }
      },
      {
        color: 'b',
        san: 'dxc4',
        explain: {
          idea: 'Variante Meran: negras captura el peon central justo antes de que blancas pueda evitarlo, preparando el contragambito ...b5 a continuacion.',
          ventaja: 'Peon de mas momentaneo y la base del plan mas afilado y respetado de toda la Semi-Eslava.',
          debilidad: 'Cede el centro por completo; si blancas recaptura con precision (Bxc4) seguido de e4, puede obtener una fuerte iniciativa central.'
        }
      }
    ]
  },
  {
    id: 'h02-escandinava-moderna',
    name: 'Escandinava Moderna (2...Nf6)',
    userColor: 'b',
    overview: 'Familia Escandinava: en vez de recapturar de inmediato con ' +
      'la dama, negras desarrolla primero el caballo y recupera el peon ' +
      'con la pieza en la siguiente jugada, evitando por completo los ' +
      'tiempos de ataque contra la dama que caracterizan la linea ' +
      'principal (2...Qxd5). Es la eleccion mas popular a nivel de elite ' +
      'dentro de toda la familia escandinava por su solidez.',
    moves: [
      {
        color: 'w',
        san: 'e4',
        explain: {
          idea: 'Ocupa el centro y abre la diagonal de la dama y del alfil de rey.',
          ventaja: 'Jugada mas popular a todos los niveles, maxima actividad inmediata para las piezas.',
          debilidad: 'Ninguna real a este nivel.'
        }
      },
      {
        color: 'b',
        san: 'd5',
        explain: {
          idea: 'Escandinava: ataca el peon e4 de inmediato en vez de responder de forma simetrica o cerrada.',
          ventaja: 'Fuerza a blancas a definir la estructura central en la jugada 2, sacando la partida del terreno mas teorico de otras defensas.',
          debilidad: 'Tras el cambio de peones, alguna pieza de negras tendra que recuperar el peon con perdida relativa de tiempo.'
        }
      },
      {
        color: 'w',
        san: 'exd5',
        explain: {
          idea: 'Captura el peon ofrecido; casi siempre la respuesta principal.',
          ventaja: 'Gana un peon de forma momentanea y obliga a negras a decidir como recuperarlo.',
          debilidad: 'Ninguna; es la continuacion practicamente obligada.'
        }
      },
      {
        color: 'b',
        san: 'Nf6',
        explain: {
          idea: 'Escandinava Moderna: en vez de recapturar de inmediato con la dama, negras desarrolla primero y recupera el peon la jugada siguiente con el caballo.',
          ventaja: 'Evita por completo los tiempos de ataque contra la dama que sufre la linea principal (2...Qxd5); desarrollo mas natural desde el principio.',
          debilidad: 'El peon d5 queda momentaneamente en manos de blancas un turno mas, aunque negras lo recupera sin problemas la jugada siguiente.'
        }
      },
      {
        color: 'w',
        san: 'd4',
        explain: {
          idea: 'Sostiene el peon de mas con el peon de dama, ganando espacio central antes de que negras lo recupere.',
          ventaja: 'Centro amplio y solido, la forma mas ambiciosa de defender el peon extra.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural y fuerte.'
        }
      },
      {
        color: 'b',
        san: 'Nxd5',
        explain: {
          idea: 'Recupera el peon con el caballo, ya desarrollado y sin haber perdido ningun tiempo con la dama.',
          ventaja: 'Material igualado y pieza activa en el centro, con el desarrollo muy por delante respecto a la linea principal con 2...Qxd5.',
          debilidad: 'El caballo en d5 puede ser blanco de c4 mas adelante, obligandolo a retroceder.'
        }
      },
      {
        color: 'w',
        san: 'Nf3',
        explain: {
          idea: 'Desarrolla y prepara el enroque corto, la continuacion mas natural y solida.',
          ventaja: 'Jugada flexible que no compromete nada y completa el desarrollo con rapidez.',
          debilidad: 'Ninguna relevante.'
        }
      },
      {
        color: 'b',
        san: 'g6',
        explain: {
          idea: 'Prepara el fianchetto del alfil de rey, un plan solido y flexible tipico de las lineas modernas contra 1.e4.',
          ventaja: 'El alfil en g7 controlara la larga diagonal y apoyara al caballo de d5 si blancas ataca con c4.',
          debilidad: 'Debilita ligeramente las casillas oscuras alrededor del rey, aunque el fianchetto lo compensa de sobra.'
        }
      },
      {
        color: 'w',
        san: 'c4',
        explain: {
          idea: 'Ataca el caballo de d5 ganando espacio y tiempo, el plan mas ambicioso contra la Escandinava Moderna.',
          ventaja: 'Gana espacio en el centro y obliga a negras a decidir la retirada del caballo.',
          debilidad: 'Debilita ligeramente d4, aunque es un precio asumido en toda la teoria principal de esta linea.'
        }
      },
      {
        color: 'b',
        san: 'Nb6',
        explain: {
          idea: 'Retira el caballo a una casilla activa, presionando c4 y manteniendo la vista sobre el centro.',
          ventaja: 'Pieza bien colocada que sigue participando en la lucha por el centro.',
          debilidad: 'Ninguna relevante; es la retirada mas natural y solida.'
        }
      },
      {
        color: 'w',
        san: 'Nc3',
        explain: {
          idea: 'Desarrolla la ultima pieza menor del flanco de dama y refuerza el centro.',
          ventaja: 'Pieza activa que completa el desarrollo antes de decidir el plan de medio juego (Be3, Be2, h3, etc).',
          debilidad: 'Ninguna relevante.'
        }
      },
      {
        color: 'b',
        san: 'Bg7',
        explain: {
          idea: 'Completa el fianchetto, la ultima pieza menor de desarrollo natural antes del enroque.',
          ventaja: 'Presion de largo alcance sobre el centro y el flanco de dama de blancas desde la larga diagonal.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural para completar el desarrollo.'
        }
      }
    ]
  },
  {
    id: 'h02-ortodoxa-clasica',
    name: 'Defensa Ortodoxa -- linea clasica',
    userColor: 'w',
    overview: 'Familia Gambito de Dama: el plan mas tradicional y solido ' +
      'de todos contra el Rehusado. Negras desarrolla el caballo de dama ' +
      'por d7 (en vez de jugar la Variante de Cambio o transponer a la ' +
      'Eslava), y blancas responde con el desarrollo clasico Bg5-Nf3, ' +
      'reservando la torre para la columna c y el plan de minoria de ' +
      'peones para mas adelante en el medio juego.',
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
          idea: 'Negras responde en el centro con la misma logica: ocupar y no ceder espacio.',
          ventaja: 'Mantiene la simetria y no debilita ninguna casilla.',
          debilidad: 'Dificulta el desarrollo del alfil de casillas claras de negras, que queda encerrado tras la cadena de peones.'
        }
      },
      {
        color: 'w',
        san: 'c4',
        explain: {
          idea: 'El Gambito de Dama: blancas ofrecen el peon c4 para atacar el centro de negras desde el flanco.',
          ventaja: 'Da a negras varias formas de responder, y en todas ellas blancas obtiene alguna ventaja de espacio o desarrollo.',
          debilidad: 'Cede momentaneamente el control exclusivo del centro.'
        }
      },
      {
        color: 'b',
        san: 'e6',
        explain: {
          idea: 'Gambito de Dama Rehusado: sostiene d5 sin capturar, abriendo la diagonal de su alfil de rey.',
          ventaja: 'Posicion solida y flexible, la mas fiable estadisticamente para negras contra 1.d4.',
          debilidad: 'El alfil de casillas claras de negras queda temporalmente encerrado tras la cadena de peones e6-d5.'
        }
      },
      {
        color: 'w',
        san: 'Nc3',
        explain: {
          idea: 'Desarrolla una pieza y refuerza el control sobre d5, dejando abierta la decision de si cambiar en d5 mas adelante.',
          ventaja: 'Pieza activa que apoya un futuro Bg5 y mantiene la tension central.',
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
        san: 'Bg5',
        explain: {
          idea: 'Clava el caballo de f6 contra la dama, la jugada mas caracteristica de todo el plan clasico contra el Rehusado.',
          ventaja: 'Pieza activa fuera de la cadena de peones antes de que quede encerrada.',
          debilidad: 'Ninguna inmediata; jugada estandar de la Defensa Ortodoxa.'
        }
      },
      {
        color: 'b',
        san: 'Nbd7',
        explain: {
          idea: 'Defensa Ortodoxa clasica: desarrolla el caballo de dama por d7 en vez de romper la clavada de inmediato, preparando recapturar en f6 con la pieza si hace falta.',
          ventaja: 'Desarrollo solido y flexible que mantiene varias opciones (...Be7, ...h6, ...c6) abiertas para mas adelante.',
          debilidad: 'Deja la clavada sin resolver un turno mas, aunque no supone ningun riesgo inmediato.'
        }
      },
      {
        color: 'w',
        san: 'e3',
        explain: {
          idea: 'Abre la diagonal del alfil de rey y refuerza d4, preparando el desarrollo del resto de piezas menores.',
          ventaja: 'Jugada solida y flexible que deja varias opciones abiertas (Nf3, Bd3 o Be2, Rc1).',
          debilidad: 'Encierra temporalmente al propio alfil de casillas claras de blancas.'
        }
      },
      {
        color: 'b',
        san: 'Be7',
        explain: {
          idea: 'Rompe la clavada preparando el enroque, ya con el caballo de dama desarrollado en d7 como apoyo.',
          ventaja: 'Desarrollo solido y completo, listo para enrocar en la siguiente jugada.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural en la posicion.'
        }
      },
      {
        color: 'w',
        san: 'Nf3',
        explain: {
          idea: 'Desarrolla la ultima pieza menor del flanco de rey y prepara el enroque corto.',
          ventaja: 'Jugada solida que completa el desarrollo antes de decidir el plan de medio juego.',
          debilidad: 'Ninguna relevante.'
        }
      },
      {
        color: 'b',
        san: 'O-O',
        explain: {
          idea: 'Pone el rey a salvo y conecta las torres antes de decidir el plan de medio juego.',
          ventaja: 'Seguridad del rey resuelta.',
          debilidad: 'Ninguna; es la jugada mas natural para completar el desarrollo basico.'
        }
      }
    ]
  },
  {
    id: 'h02-defensa-baltica',
    name: 'Defensa Baltica',
    userColor: 'w',
    overview: 'Familia Gambito de Dama: negras saca el alfil de casillas ' +
      'claras antes que nada, evitando por completo el problema ' +
      'estructural tipico del Rehusado, a costa de ceder tiempo y de ' +
      'exponer el alfil a ser atacado pronto. Blancas responde con un ' +
      'plan de desarrollo natural y ganancia de tiempo con Qb3, ' +
      'apuntando tanto al alfil como al flanco de dama de negras.',
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
          idea: 'Negras responde en el centro con la misma logica: ocupar y no ceder espacio.',
          ventaja: 'Mantiene la simetria y no debilita ninguna casilla.',
          debilidad: 'Dificulta el desarrollo del alfil de casillas claras de negras, que queda encerrado tras la cadena de peones.'
        }
      },
      {
        color: 'w',
        san: 'c4',
        explain: {
          idea: 'El Gambito de Dama: blancas ofrecen el peon c4 para atacar el centro de negras desde el flanco.',
          ventaja: 'Da a negras varias formas de responder, y en todas ellas blancas obtiene alguna ventaja de espacio o desarrollo.',
          debilidad: 'Cede momentaneamente el control exclusivo del centro.'
        }
      },
      {
        color: 'b',
        san: 'Bf5',
        explain: {
          idea: 'Defensa Baltica: saca el alfil de casillas claras antes que nada, resolviendo de raiz el problema estructural del Rehusado (el alfil encerrado tras ...e6).',
          ventaja: 'Pieza activa colocada fuera de la cadena de peones desde el principio, sin depender de ningun orden de jugadas posterior.',
          debilidad: 'Pierde un tiempo de desarrollo central y expone el alfil a ser atacado pronto con Qb3 o cxd5, ganando tiempo blancas.'
        }
      },
      {
        color: 'w',
        san: 'Nc3',
        explain: {
          idea: 'Desarrolla una pieza y refuerza el control sobre d5 antes de decidir el plan concreto contra el alfil.',
          ventaja: 'Pieza activa que mantiene la tension central sin comprometerse aun.',
          debilidad: 'Ninguna relevante en este orden de jugadas.'
        }
      },
      {
        color: 'b',
        san: 'e6',
        explain: {
          idea: 'Completa el desarrollo del centro y abre la diagonal del alfil de rey, ya con el otro alfil colocado fuera con anterioridad.',
          ventaja: 'Estructura solida con el problema del alfil de casillas claras ya resuelto de antemano.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural en la posicion.'
        }
      },
      {
        color: 'w',
        san: 'Nf3',
        explain: {
          idea: 'Desarrolla y prepara el enroque corto antes de decidir si atacar el alfil con Qb3.',
          ventaja: 'Jugada solida y flexible que no compromete nada.',
          debilidad: 'Ninguna relevante.'
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
        san: 'Qb3',
        explain: {
          idea: 'Ataca simultaneamente el alfil de f5 (indirectamente, presionando b7) y el peon b7, el plan mas incomodo para negras en la Defensa Baltica.',
          ventaja: 'Doble amenaza que fuerza a negras a reaccionar con precision, ganando tiempo e iniciativa para blancas.',
          debilidad: 'Saca la dama pronto, lo que puede dar a negras un tiempo de desarrollo si encuentra la forma de atacarla mas adelante.'
        }
      },
      {
        color: 'b',
        san: 'Qc8',
        explain: {
          idea: 'Defiende b7 de forma indirecta y mantiene el alfil de f5 protegido, la respuesta mas solida a la amenaza de Qb3.',
          ventaja: 'Resuelve ambas amenazas de golpe sin conceder ninguna concesion material.',
          debilidad: 'La dama queda algo pasiva en c8, con menos actividad que si hubiera podido desarrollarse de forma mas natural.'
        }
      },
      {
        color: 'w',
        san: 'Bg5',
        explain: {
          idea: 'Clava el caballo de f6 y aumenta la presion sobre el centro, aprovechando la iniciativa ganada con Qb3.',
          ventaja: 'Pieza activa fuera de la cadena de peones que mantiene la iniciativa de blancas.',
          debilidad: 'Ninguna inmediata.'
        }
      },
      {
        color: 'b',
        san: 'c6',
        explain: {
          idea: 'Refuerza d5 y prepara ...Nbd7, consolidando la posicion tras las primeras jugadas mas incomodas.',
          ventaja: 'Jugada solida que estabiliza el centro.',
          debilidad: 'Jugada algo pasiva que no desarrolla ninguna pieza nueva, dejando a blancas con la iniciativa del planteamiento.'
        }
      }
    ]
  },
  {
    id: 'h02-defensa-simetrica',
    name: 'Defensa Simetrica (2...c5)',
    userColor: 'w',
    overview: 'Familia Gambito de Dama: negras contraataca de inmediato el ' +
      'centro con c5 en vez de sostener o capturar en c4, buscando ' +
      'cambios rapidos y una posicion abierta y dinamica. Blancas ' +
      'responde cambiando en d5 y desarrollando con naturalidad, ' +
      'quedando con una ligera ventaja de espacio y desarrollo gracias a ' +
      'los tiempos que negras pierde recolocando la dama.',
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
          idea: 'Negras responde en el centro con la misma logica: ocupar y no ceder espacio.',
          ventaja: 'Mantiene la simetria y no debilita ninguna casilla.',
          debilidad: 'Dificulta el desarrollo del alfil de casillas claras de negras, que queda encerrado tras la cadena de peones.'
        }
      },
      {
        color: 'w',
        san: 'c4',
        explain: {
          idea: 'El Gambito de Dama: blancas ofrecen el peon c4 para atacar el centro de negras desde el flanco.',
          ventaja: 'Da a negras varias formas de responder, y en todas ellas blancas obtiene alguna ventaja de espacio o desarrollo.',
          debilidad: 'Cede momentaneamente el control exclusivo del centro.'
        }
      },
      {
        color: 'b',
        san: 'c5',
        explain: {
          idea: 'Defensa Simetrica: contraataca el centro de blancas en vez de sostener o capturar en c4, buscando cambios inmediatos y una posicion abierta.',
          ventaja: 'Plan dinamico que evita las estructuras mas conocidas del Rehusado o la Eslava.',
          debilidad: 'Tras los cambios centrales, la dama de negras puede acabar perdiendo tiempos, similar a lo que ocurre en la Escandinava.'
        }
      },
      {
        color: 'w',
        san: 'cxd5',
        explain: {
          idea: 'Cambia en el centro antes de que negras pueda definir la estructura a su gusto.',
          ventaja: 'Fuerza a negras a recapturar, casi siempre con la dama, ganando un tiempo de desarrollo.',
          debilidad: 'Ninguna; es la continuacion mas fuerte y natural.'
        }
      },
      {
        color: 'b',
        san: 'Qxd5',
        explain: {
          idea: 'Recaptura con la dama, la unica pieza disponible de inmediato.',
          ventaja: 'Recupera el material igualado.',
          debilidad: 'La dama queda en el centro, expuesta a perder otro tiempo con Nc3 -- el mismo problema estructural que la Escandinava.'
        }
      },
      {
        color: 'w',
        san: 'Nc3',
        explain: {
          idea: 'Desarrolla atacando la dama de negras, ganando un tiempo de desarrollo gratis.',
          ventaja: 'Pieza activa con tiempo ganado, tipico de todas las lineas donde la dama rival sale pronto al centro.',
          debilidad: 'Ninguna; es la jugada mas natural y fuerte.'
        }
      },
      {
        color: 'b',
        san: 'Qd6',
        explain: {
          idea: 'Retira la dama a una casilla segura que mantiene la vista sobre el centro y el flanco de rey.',
          ventaja: 'Casilla razonablemente activa y segura para la dama.',
          debilidad: 'La dama sigue relativamente expuesta y puede volver a perder tiempos mas adelante.'
        }
      },
      {
        color: 'w',
        san: 'Nf3',
        explain: {
          idea: 'Desarrolla y prepara el enroque corto, completando con rapidez el desarrollo de piezas menores.',
          ventaja: 'Jugada solida que mantiene la iniciativa ganada con los tiempos anteriores.',
          debilidad: 'Ninguna relevante.'
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
        san: 'e4',
        explain: {
          idea: 'Ocupa el centro con el segundo peon central, ganando mucho espacio mientras negras sigue sin completar el desarrollo.',
          ventaja: 'Centro amplio y fuerte, la compensacion natural de blancas por los tiempos ganados con la dama rival.',
          debilidad: 'Ninguna relevante; es la continuacion mas ambiciosa y fuerte.'
        }
      },
      {
        color: 'b',
        san: 'cxd4',
        explain: {
          idea: 'Cambia el peon de flanco de dama que ya no puede sostener con comodidad, simplificando la estructura central.',
          ventaja: 'Resuelve la tension en el flanco de dama antes de que blancas la aumente mas.',
          debilidad: 'Cede aun mas espacio central a blancas, que recuperara el peon con ventaja de desarrollo.'
        }
      }
    ]
  },
  {
    id: 'h02-escandinava-qd6',
    name: 'Escandinava -- retirada moderna (3...Qd6)',
    userColor: 'b',
    overview: 'Familia Escandinava: en vez de retirar la dama a a5, negras ' +
      'la lleva a d6, una casilla que a primera vista parece rara (tapa ' +
      'el propio alfil de rey) pero que evita la clavada de Bd2/Nc3 de la ' +
      'linea con 3...Qa5 y mantiene la dama vigilando la casilla d4. Es ' +
      'la eleccion mas popular a nivel de elite dentro de toda la familia ' +
      'escandinava en los ultimos anios.',
    moves: [
      {
        color: 'w',
        san: 'e4',
        explain: {
          idea: 'Ocupa el centro y abre la diagonal de la dama y del alfil de rey.',
          ventaja: 'Jugada mas popular a todos los niveles, maxima actividad inmediata para las piezas.',
          debilidad: 'Ninguna real a este nivel.'
        }
      },
      {
        color: 'b',
        san: 'd5',
        explain: {
          idea: 'Escandinava: ataca el peon e4 de inmediato en vez de responder de forma simetrica o cerrada.',
          ventaja: 'Fuerza a blancas a definir la estructura central en la jugada 2.',
          debilidad: 'Tras el cambio de peones, la dama de negras tendra que salir pronto y perder algun tiempo.'
        }
      },
      {
        color: 'w',
        san: 'exd5',
        explain: {
          idea: 'Captura el peon ofrecido; casi siempre la respuesta principal.',
          ventaja: 'Gana un peon de forma momentanea y obliga a negras a recapturar.',
          debilidad: 'Ninguna; es la continuacion practicamente obligada.'
        }
      },
      {
        color: 'b',
        san: 'Qxd5',
        explain: {
          idea: 'Recaptura con la dama, la unica pieza que puede hacerlo de inmediato.',
          ventaja: 'Recupera el material y desarrolla la dama a una casilla central.',
          debilidad: 'La dama queda expuesta en el centro, blanco facil para Nc3 con ganancia de tiempo.'
        }
      },
      {
        color: 'w',
        san: 'Nc3',
        explain: {
          idea: 'Desarrolla una pieza atacando la dama de negras, ganando un tiempo de desarrollo gratis.',
          ventaja: 'Pieza activa con tiempo ganado.',
          debilidad: 'Ninguna; es la jugada mas natural y fuerte en la posicion.'
        }
      },
      {
        color: 'b',
        san: 'Qd6',
        explain: {
          idea: 'Retirada moderna: en vez de ir a a5 (donde puede sufrir una clavada con Bd2), la dama va a d6, vigilando d4 y quedando fuera del alcance de ataques de tiempo inmediatos.',
          ventaja: 'Evita por completo las ideas de Nd5 y Bd2 con clavada que sufre la linea con 3...Qa5; la eleccion preferida al maximo nivel en los ultimos anios.',
          debilidad: 'Tapa momentaneamente la diagonal del propio alfil de rey, aunque la dama se reubicara pronto sin perder mas tiempos.'
        }
      },
      {
        color: 'w',
        san: 'd4',
        explain: {
          idea: 'Ocupa el centro con el segundo peon central, ganando espacio mientras negras sigue sin completar el desarrollo.',
          ventaja: 'Centro solido y mucho espacio, la compensacion natural de blancas por el tiempo perdido por negras con la dama.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural y fuerte.'
        }
      },
      {
        color: 'b',
        san: 'Nf6',
        explain: {
          idea: 'Empieza el desarrollo de piezas menores, presionando e4 (ya vacio) y preparando el enroque.',
          ventaja: 'Jugada natural que acelera la seguridad del rey.',
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
        san: 'a6',
        explain: {
          idea: 'Jugada tipica de las lineas modernas de la Escandinava: evita Nb5 atacando la dama en d6 y prepara ...b5 mas adelante.',
          ventaja: 'Previene de forma profilactica la unica idea molesta de blancas contra la dama en d6.',
          debilidad: 'Jugada algo lenta que no desarrolla ninguna pieza nueva.'
        }
      },
      {
        color: 'w',
        san: 'g3',
        explain: {
          idea: 'Prepara el fianchetto del alfil de rey, un plan solido y flexible muy popular en las lineas modernas contra la Escandinava.',
          ventaja: 'El alfil en g2 presionara la larga diagonal y el flanco de dama de negras sin comprometerse con un desarrollo mas directo.',
          debilidad: 'Cede algo de tiempo mientras negras completa su propio desarrollo.'
        }
      },
      {
        color: 'b',
        san: 'b5',
        explain: {
          idea: 'Gana espacio en el flanco de dama, tal y como preparaba ...a6, y prepara el desarrollo del alfil de dama por b7.',
          ventaja: 'Plan activo tipico de las lineas modernas de la Escandinava con 3...Qd6, buscando contrajuego en el flanco de dama.',
          debilidad: 'Puede debilitar ligeramente las casillas del flanco de dama si blancas encuentra a4 mas adelante, aunque es un riesgo asumido en toda la teoria principal.'
        }
      }
    ]
  },
  {
    id: 'h02-defensa-tarrasch',
    name: 'Defensa Tarrasch',
    userColor: 'w',
    overview: 'Familia Gambito de Dama: negras acepta un peon de dama ' +
      'aislado (IQP) a cambio de piezas muy activas y espacio central, ' +
      'una de las estructuras mas estudiadas de todo el ajedrez clasico. ' +
      'Blancas responde con el plan mas solido y menos comprometido: el ' +
      'Sistema Fianchetto (g3-Bg2), presionando el peon aislado a ' +
      'distancia sin tener que memorizar las lineas mas tacticas del ' +
      'Tarrasch.',
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
          idea: 'Negras responde en el centro con la misma logica: ocupar y no ceder espacio.',
          ventaja: 'Mantiene la simetria y no debilita ninguna casilla.',
          debilidad: 'Dificulta el desarrollo del alfil de casillas claras de negras, que queda encerrado tras la cadena de peones.'
        }
      },
      {
        color: 'w',
        san: 'c4',
        explain: {
          idea: 'El Gambito de Dama: blancas ofrecen el peon c4 para atacar el centro de negras desde el flanco.',
          ventaja: 'Da a negras varias formas de responder, y en todas ellas blancas obtiene alguna ventaja de espacio o desarrollo.',
          debilidad: 'Cede momentaneamente el control exclusivo del centro.'
        }
      },
      {
        color: 'b',
        san: 'e6',
        explain: {
          idea: 'Sostiene d5 sin capturar, dejando abierta la opcion de transponer a varios sistemas segun la siguiente jugada.',
          ventaja: 'Posicion solida y flexible.',
          debilidad: 'El alfil de casillas claras de negras queda temporalmente encerrado, un problema que el Tarrasch resuelve pronto abriendo el centro.'
        }
      },
      {
        color: 'w',
        san: 'Nc3',
        explain: {
          idea: 'Desarrolla una pieza y refuerza el control sobre d5 antes de que negras defina su plan concreto.',
          ventaja: 'Pieza activa que mantiene la tension central.',
          debilidad: 'Ninguna relevante en este orden de jugadas.'
        }
      },
      {
        color: 'b',
        san: 'c5',
        explain: {
          idea: 'Defensa Tarrasch: en vez de encerrar el alfil con mas peones, negras contraataca el centro de inmediato, aceptando quedarse con un peon aislado en d5 a cambio de piezas muy activas.',
          ventaja: 'Piezas libres y activas desde el principio, una estructura con mucho contrajuego dinamico pese al peon debil.',
          debilidad: 'El peon d5 quedara aislado tras los cambios en el centro, un objetivo a largo plazo para blancas durante toda la partida.'
        }
      },
      {
        color: 'w',
        san: 'cxd5',
        explain: {
          idea: 'Define la estructura antes de que negras pueda recapturar a su gusto, forzando el peon aislado.',
          ventaja: 'Fija de inmediato la debilidad estructural que negras acepto al jugar ...c5.',
          debilidad: 'Ninguna; es la continuacion mas natural y fuerte.'
        }
      },
      {
        color: 'b',
        san: 'exd5',
        explain: {
          idea: 'Recaptura con el peon, quedando con el peon aislado de dama tipico de toda la Defensa Tarrasch.',
          ventaja: 'Piezas muy activas y espacio central pese al peon debil, la esencia de toda la apuesta del Tarrasch.',
          debilidad: 'El peon d5 aislado sera un objetivo constante para blancas, especialmente en los finales.'
        }
      },
      {
        color: 'w',
        san: 'Nf3',
        explain: {
          idea: 'Desarrolla y controla d4 y e5, casillas clave para presionar el peon aislado mas adelante.',
          ventaja: 'Pieza bien colocada dentro del plan de presionar el IQP a distancia.',
          debilidad: 'Ninguna relevante.'
        }
      },
      {
        color: 'b',
        san: 'Nc6',
        explain: {
          idea: 'Desarrolla y refuerza el peon d5, sosteniendo la estructura central activa de negras.',
          ventaja: 'Pieza activa que participa en la lucha central.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural en la posicion.'
        }
      },
      {
        color: 'w',
        san: 'g3',
        explain: {
          idea: 'Sistema Fianchetto contra el Tarrasch: prepara Bg2 para presionar el peon d5 aislado desde la larga diagonal, el plan mas solido y menos comprometido de todos contra esta defensa.',
          ventaja: 'Presion constante y de largo alcance sobre el peon debil sin arriesgar nada ni entrar en las lineas mas tacticas y complicadas del Tarrasch.',
          debilidad: 'Cede algo de tiempo mientras negras completa su desarrollo, aunque el plan compensa sobradamente a la larga gracias a la debilidad permanente del peon d5.'
        }
      },
      {
        color: 'b',
        san: 'Nf6',
        explain: {
          idea: 'Completa el desarrollo de piezas menores y prepara el enroque corto.',
          ventaja: 'Jugada solida que no compromete nada.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural en la posicion.'
        }
      }
    ]
  },
  {
    id: 'h02-defensa-marshall',
    name: 'Defensa Marshall (2...Nf6)',
    userColor: 'w',
    overview: 'Familia Gambito de Dama: negras ignora por completo el peon ' +
      'c4 y desarrolla de inmediato el caballo de rey, dejando que ' +
      'blancas capture en d5 con ganancia de tiempo. Blancas responde ' +
      'con el plan mas natural: recuperar el peon, ocupar el centro con ' +
      'e4 y desarrollar con comodidad, quedando con una clara ventaja de ' +
      'espacio frente a un planteamiento poco exigente de negras.',
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
          idea: 'Negras responde en el centro con la misma logica: ocupar y no ceder espacio.',
          ventaja: 'Mantiene la simetria y no debilita ninguna casilla.',
          debilidad: 'Dificulta el desarrollo del alfil de casillas claras de negras, que queda encerrado tras la cadena de peones.'
        }
      },
      {
        color: 'w',
        san: 'c4',
        explain: {
          idea: 'El Gambito de Dama: blancas ofrecen el peon c4 para atacar el centro de negras desde el flanco.',
          ventaja: 'Da a negras varias formas de responder, y en todas ellas blancas obtiene alguna ventaja de espacio o desarrollo.',
          debilidad: 'Cede momentaneamente el control exclusivo del centro.'
        }
      },
      {
        color: 'b',
        san: 'Nf6',
        explain: {
          idea: 'Defensa Marshall: ignora por completo la oferta de peon en c4, desarrollando de inmediato en vez de decidir el plan estructural.',
          ventaja: 'Desarrollo rapido que evita tener que decidir de entrada entre el Rehusado, la Eslava o el Aceptado.',
          debilidad: 'No hace nada por defender d5 ni disputar c4, permitiendo a blancas capturar en d5 con ganancia de tiempo y espacio.'
        }
      },
      {
        color: 'w',
        san: 'cxd5',
        explain: {
          idea: 'Captura el peon central antes de que negras pueda sostenerlo, la respuesta mas natural y fuerte contra este planteamiento.',
          ventaja: 'Gana un peon momentaneamente y fuerza a negras a recapturar, perdiendo tiempo.',
          debilidad: 'Ninguna; es la continuacion mas directa y fuerte.'
        }
      },
      {
        color: 'b',
        san: 'Nxd5',
        explain: {
          idea: 'Recupera el peon con el caballo, la unica recaptura razonable ya desarrollada.',
          ventaja: 'Recupera el material y coloca el caballo en una casilla central.',
          debilidad: 'El caballo en d5 sera blanco de e4 en la siguiente jugada, obligandolo a retroceder y perdiendo otro tiempo.'
        }
      },
      {
        color: 'w',
        san: 'Nf3',
        explain: {
          idea: 'Desarrolla antes de ocupar el centro con e4, completando el desarrollo de piezas menores con naturalidad.',
          ventaja: 'Jugada flexible que prepara el enroque corto sin ninguna prisa.',
          debilidad: 'Ninguna relevante.'
        }
      },
      {
        color: 'b',
        san: 'g6',
        explain: {
          idea: 'Prepara el fianchetto del alfil de rey, el plan mas habitual de negras dentro de la Defensa Marshall para compensar la falta de espacio central.',
          ventaja: 'El alfil en g7 controlara la larga diagonal, compensando en parte la ventaja de espacio de blancas.',
          debilidad: 'Debilita ligeramente las casillas oscuras alrededor del futuro rey.'
        }
      },
      {
        color: 'w',
        san: 'e4',
        explain: {
          idea: 'Ocupa el centro con el segundo peon central, atacando de paso al caballo de d5 y ganando otro tiempo mas.',
          ventaja: 'Centro amplio y fuerte, la clara ventaja de espacio que caracteriza toda la Defensa Marshall a favor de blancas.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural y fuerte.'
        }
      },
      {
        color: 'b',
        san: 'Nb6',
        explain: {
          idea: 'Retira el caballo a una casilla razonable, presionando de reojo el peon c4 ya avanzado a e4... realmente vigilando d5 y c4 desde el flanco.',
          ventaja: 'Pieza que sigue participando en la partida sin perder mas tiempo.',
          debilidad: 'Ninguna relevante; es la retirada mas natural.'
        }
      },
      {
        color: 'w',
        san: 'Nc3',
        explain: {
          idea: 'Desarrolla la ultima pieza menor del flanco de dama, completando un desarrollo rapido y comodo con una clara ventaja de espacio.',
          ventaja: 'Pieza activa que corona un desarrollo modelo tras los tiempos ganados en las primeras jugadas.',
          debilidad: 'Ninguna relevante.'
        }
      },
      {
        color: 'b',
        san: 'Bg7',
        explain: {
          idea: 'Completa el fianchetto, la ultima pieza menor de desarrollo natural antes del enroque.',
          ventaja: 'Presion de largo alcance sobre el centro desde la larga diagonal, compensando en parte la falta de espacio.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural para completar el desarrollo.'
        }
      }
    ]
  },
  {
    id: 'h02-semi-tarrasch',
    name: 'Semi-Tarrasch',
    userColor: 'w',
    overview: 'Familia Gambito de Dama: un hibrido entre la Ortodoxa y el ' +
      'Tarrasch -- negras desarrolla primero el caballo de rey y solo ' +
      'despues juega ...c5, recapturando en d5 con el caballo en vez de ' +
      'quedarse con un peon aislado de peon. Blancas responde ocupando ' +
      'el centro con e4 y ganando un tiempo sobre el caballo, una ' +
      'ventaja de desarrollo tipica de todo el plan principal.',
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
          idea: 'Negras responde en el centro con la misma logica: ocupar y no ceder espacio.',
          ventaja: 'Mantiene la simetria y no debilita ninguna casilla.',
          debilidad: 'Dificulta el desarrollo del alfil de casillas claras de negras, que queda encerrado tras la cadena de peones.'
        }
      },
      {
        color: 'w',
        san: 'c4',
        explain: {
          idea: 'El Gambito de Dama: blancas ofrecen el peon c4 para atacar el centro de negras desde el flanco.',
          ventaja: 'Da a negras varias formas de responder, y en todas ellas blancas obtiene alguna ventaja de espacio o desarrollo.',
          debilidad: 'Cede momentaneamente el control exclusivo del centro.'
        }
      },
      {
        color: 'b',
        san: 'e6',
        explain: {
          idea: 'Sostiene d5 sin capturar, dejando abierta la opcion de transponer a varios sistemas segun la siguiente jugada.',
          ventaja: 'Posicion solida y flexible.',
          debilidad: 'El alfil de casillas claras de negras queda temporalmente encerrado.'
        }
      },
      {
        color: 'w',
        san: 'Nc3',
        explain: {
          idea: 'Desarrolla una pieza y refuerza el control sobre d5 antes de que negras defina su plan concreto.',
          ventaja: 'Pieza activa que mantiene la tension central.',
          debilidad: 'Ninguna relevante en este orden de jugadas.'
        }
      },
      {
        color: 'b',
        san: 'Nf6',
        explain: {
          idea: 'Semi-Tarrasch: desarrolla primero el caballo de rey, dejando la decision de ...c5 para mas adelante en vez de jugarla de inmediato como en el Tarrasch puro.',
          ventaja: 'Desarrollo natural que mantiene mas flexibilidad que el Tarrasch clasico sobre cuando y como abrir el centro.',
          debilidad: 'Ninguna inmediata; jugada natural del plan.'
        }
      },
      {
        color: 'w',
        san: 'Nf3',
        explain: {
          idea: 'Desarrolla y prepara el enroque corto antes de que negras decida su plan concreto en el centro.',
          ventaja: 'Jugada solida y flexible.',
          debilidad: 'Ninguna relevante.'
        }
      },
      {
        color: 'b',
        san: 'c5',
        explain: {
          idea: 'Semi-Tarrasch: ahora si contraataca el centro, pero con el caballo ya en f6, listo para recapturar en d5 con la pieza en vez de quedarse con un peon aislado.',
          ventaja: 'Evita el peon de dama aislado tipico del Tarrasch puro, a cambio de piezas activas igualmente.',
          debilidad: 'Cede tiempo a blancas para ocupar el centro con e4 tras el cambio en d5.'
        }
      },
      {
        color: 'w',
        san: 'cxd5',
        explain: {
          idea: 'Cambia en el centro antes de que negras pueda recapturar a su gusto.',
          ventaja: 'Fuerza a negras a recapturar con el caballo, abriendo la posibilidad de ganar un tiempo con e4 despues.',
          debilidad: 'Ninguna; es la continuacion mas natural y fuerte.'
        }
      },
      {
        color: 'b',
        san: 'Nxd5',
        explain: {
          idea: 'Recaptura con el caballo, evitando el peon aislado del Tarrasch puro -- la diferencia clave del Semi-Tarrasch.',
          ventaja: 'Sin peon debil en la estructura, a cambio de una pieza bien colocada en el centro.',
          debilidad: 'El caballo en d5 sera blanco de e4 en la siguiente jugada, perdiendo un tiempo.'
        }
      },
      {
        color: 'w',
        san: 'e4',
        explain: {
          idea: 'Ataca el caballo de d5 ganando espacio y tiempo, el plan principal de blancas contra el Semi-Tarrasch.',
          ventaja: 'Centro amplio y tiempo ganado sobre el caballo rival.',
          debilidad: 'Ninguna relevante; es la continuacion mas ambiciosa y fuerte.'
        }
      },
      {
        color: 'b',
        san: 'Nxc3',
        explain: {
          idea: 'Cambia el caballo antes de retirarlo, simplificando la posicion en vez de perder otro tiempo con la retirada.',
          ventaja: 'Resuelve de inmediato la amenaza sobre el caballo sin conceder mas tiempos.',
          debilidad: 'Cede el par de alfiles potencial a cambio de la simplificacion, aunque es una concesion menor y muy jugada en la practica.'
        }
      }
    ]
  },
  {
    id: 'h02-escandinava-qd8',
    name: 'Escandinava -- retirada ultra-solida (3...Qd8)',
    userColor: 'b',
    overview: 'Familia Escandinava: la retirada mas conservadora de todas ' +
      '-- la dama vuelve a su casilla original, perdiendo mas tiempo que ' +
      'con Qa5 o Qd6 pero sin dejar ningun objetivo de ataque futuro ' +
      'para blancas. Es la eleccion de jugadores que priorizan la ' +
      'solidez absoluta sobre la actividad de la dama, muy dificil de ' +
      'sacar de la teoria conocida.',
    moves: [
      {
        color: 'w',
        san: 'e4',
        explain: {
          idea: 'Ocupa el centro y abre la diagonal de la dama y del alfil de rey.',
          ventaja: 'Jugada mas popular a todos los niveles, maxima actividad inmediata para las piezas.',
          debilidad: 'Ninguna real a este nivel.'
        }
      },
      {
        color: 'b',
        san: 'd5',
        explain: {
          idea: 'Escandinava: ataca el peon e4 de inmediato en vez de responder de forma simetrica o cerrada.',
          ventaja: 'Fuerza a blancas a definir la estructura central en la jugada 2.',
          debilidad: 'Tras el cambio de peones, la dama de negras tendra que salir pronto y perder algun tiempo.'
        }
      },
      {
        color: 'w',
        san: 'exd5',
        explain: {
          idea: 'Captura el peon ofrecido; casi siempre la respuesta principal.',
          ventaja: 'Gana un peon de forma momentanea y obliga a negras a recapturar.',
          debilidad: 'Ninguna; es la continuacion practicamente obligada.'
        }
      },
      {
        color: 'b',
        san: 'Qxd5',
        explain: {
          idea: 'Recaptura con la dama, la unica pieza que puede hacerlo de inmediato.',
          ventaja: 'Recupera el material y desarrolla la dama a una casilla central.',
          debilidad: 'La dama queda expuesta en el centro, blanco facil para Nc3 con ganancia de tiempo.'
        }
      },
      {
        color: 'w',
        san: 'Nc3',
        explain: {
          idea: 'Desarrolla una pieza atacando la dama de negras, ganando un tiempo de desarrollo gratis.',
          ventaja: 'Pieza activa con tiempo ganado.',
          debilidad: 'Ninguna; es la jugada mas natural y fuerte en la posicion.'
        }
      },
      {
        color: 'b',
        san: 'Qd8',
        explain: {
          idea: 'Retirada ultra-solida: la dama vuelve a su casilla original, la opcion mas conservadora de toda la familia escandinava.',
          ventaja: 'Sin ningun objetivo de ataque futuro para blancas -- ni Bd2 ni Nb5 tienen sentido contra la dama en su casilla inicial.',
          debilidad: 'Pierde mas tiempo que las retiradas a a5 o d6, dejando a blancas con la maxima ventaja de desarrollo de toda la familia.'
        }
      },
      {
        color: 'w',
        san: 'd4',
        explain: {
          idea: 'Ocupa el centro con el segundo peon central, aprovechando al maximo la ventaja de tiempo conseguida.',
          ventaja: 'Centro amplio y mucha ventaja de desarrollo, la compensacion mas clara de blancas dentro de toda la familia escandinava.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural y fuerte.'
        }
      },
      {
        color: 'b',
        san: 'Nf6',
        explain: {
          idea: 'Empieza por fin el desarrollo de piezas menores, ya urgente tras varias jugadas de dama.',
          ventaja: 'Jugada natural que acelera la seguridad del rey.',
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
        san: 'Bg4',
        explain: {
          idea: 'Clava el caballo de f3 para dificultar el desarrollo de blancas, buscando algo de contrajuego pese al tiempo perdido.',
          ventaja: 'Pieza activa que presiona de inmediato el centro de blancas.',
          debilidad: 'Deja que blancas rompa la clavada con h3 y gane otro tiempo mas.'
        }
      },
      {
        color: 'w',
        san: 'h3',
        explain: {
          idea: 'Pregunta al alfil de inmediato, ganando otro tiempo mas dentro de una linea ya muy favorable en desarrollo.',
          ventaja: 'Tiempo extra que amplia aun mas la ventaja de desarrollo de blancas.',
          debilidad: 'Debilita ligeramente el flanco de rey, un precio menor y asumido en toda la teoria principal.'
        }
      },
      {
        color: 'b',
        san: 'Bh5',
        explain: {
          idea: 'Mantiene la clavada en vez de cambiar el alfil, buscando conservar algo de presion pese a la posicion incomoda.',
          ventaja: 'Sigue presionando el caballo de f3 y la posicion del rey de blancas.',
          debilidad: 'El alfil puede quedar atrapado mas adelante si blancas encuentra g4 seguido de Ne5, un riesgo real en esta linea.'
        }
      }
    ]
  },
  {
    id: 'h03-londres-clasica',
    name: 'Sistema Londres -- respuesta clasica con Bd6',
    userColor: 'b',
    overview: 'Familia Sistema Londres: blancas montan la misma estructura ' +
      '(d4, Bf4, e3, Nf3, Bd3/Be2, c3, Nbd2, O-O) contra casi cualquier ' +
      'respuesta de negras, sin depender de la teoria de la apertura ' +
      'rival. La respuesta clasica de negras imita el desarrollo natural ' +
      '(d5, Nf6, e6, Bd6) y evita cambiar los alfiles de forma prematura, ' +
      'para no facilitar la estructura de peones que blancas busca tras ' +
      'un cambio en d3.',
    moves: [
      {
        color: 'w',
        san: 'd4',
        explain: {
          idea: 'Ocupa el centro y abre la diagonal del alfil de dama.',
          ventaja: 'Controla e5 y c5, y prepara un desarrollo rapido sin comprometerse todavia con el plan concreto.',
          debilidad: 'Ninguna real a este nivel; es la jugada mas solida y flexible para empezar.'
        }
      },
      {
        color: 'b',
        san: 'd5',
        explain: {
          idea: 'Negras responde en el centro con la misma logica: ocupar y no ceder espacio, la respuesta mas natural y solida contra el Sistema Londres.',
          ventaja: 'Mantiene la simetria y no debilita ninguna casilla.',
          debilidad: 'No impide el plan de blancas -- el Sistema Londres se monta igual sea cual sea la respuesta de negras en las primeras jugadas.'
        }
      },
      {
        color: 'w',
        san: 'Bf4',
        explain: {
          idea: 'Sistema Londres: saca el alfil de dama antes de cerrarlo con e3, la jugada que define todo el sistema.',
          ventaja: 'Desarrollo rapido y sin teoria compleja; blancas monta la misma estructura contra casi cualquier respuesta de negras.',
          debilidad: 'El alfil puede convertirse en objetivo de un futuro ...Nh5 o ...Qb6 en algunas lineas, aunque no es una amenaza inmediata aqui.'
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
        san: 'e3',
        explain: {
          idea: 'Refuerza d4 y abre la diagonal del alfil de rey antes de decidir su destino (d3 o e2).',
          ventaja: 'Estructura solida e inflexible ante los planes de negras; casi nunca se sale de este esquema.',
          debilidad: 'Encierra temporalmente al alfil de dama ya desarrollado en f4 solo en el sentido de reducir su movilidad por detras de la cadena, aunque ya esta fuera de la cadena de peones.'
        }
      },
      {
        color: 'b',
        san: 'e6',
        explain: {
          idea: 'Prepara el desarrollo del alfil de rey a d6 o e7 y sostiene el centro con una estructura solida.',
          ventaja: 'Posicion flexible que no compromete nada todavia.',
          debilidad: 'El alfil de casillas claras de negras queda temporalmente encerrado tras la cadena de peones, el mismo problema estructural de siempre contra sistemas de peon en d4.'
        }
      },
      {
        color: 'w',
        san: 'Nf3',
        explain: {
          idea: 'Desarrolla la ultima pieza menor del flanco de rey antes de decidir entre Bd3 o Be2.',
          ventaja: 'Jugada solida y flexible que prepara el enroque corto de inmediato.',
          debilidad: 'Ninguna relevante.'
        }
      },
      {
        color: 'b',
        san: 'Bd6',
        explain: {
          idea: 'Desarrolla el alfil de rey enfrentando directamente al alfil de blancas en f4, buscando el cambio de piezas menores.',
          ventaja: 'Pieza activa apuntando al flanco de rey de blancas y lista para preparar ...O-O de inmediato.',
          debilidad: 'Invita al cambio Bxd6 si blancas lo desea, aunque normalmente blancas prefiere retirarse a g3 para mantener la pareja de alfiles activa.'
        }
      },
      {
        color: 'w',
        san: 'Bg3',
        explain: {
          idea: 'Evita el cambio de alfiles retirandose a g3, manteniendo la pieza activa sobre la diagonal b8-h2.',
          ventaja: 'Conserva el alfil fuera de la cadena de peones y mantiene la presion diagonal a largo plazo.',
          debilidad: 'Pierde un tiempo respecto a cambiar directamente, aunque es la eleccion mas ambiciosa en la practica.'
        }
      },
      {
        color: 'b',
        san: 'O-O',
        explain: {
          idea: 'Pone el rey a salvo antes de decidir el plan de flanco de dama.',
          ventaja: 'Seguridad del rey resuelta; a partir de aqui negras puede pensar en ...c5 o ...b6.',
          debilidad: 'Ninguna; es la jugada mas natural para completar la seguridad basica.'
        }
      },
      {
        color: 'w',
        san: 'Bd3',
        explain: {
          idea: 'Completa el desarrollo de piezas menores enfrentando al alfil de negras en d6, preparando el enroque corto.',
          ventaja: 'Pieza activa sobre la diagonal b1-h7, apuntando hacia el flanco de rey de negras.',
          debilidad: 'Si negras cambia con ...Bxg3, blancas debe recapturar con hxg3 abriendo la columna h, una concesion menor pero real que hay que vigilar.'
        }
      },
      {
        color: 'b',
        san: 'c5',
        explain: {
          idea: 'Contraataca el centro de blancas en el flanco de dama, el plan tipico de negras contra el Sistema Londres.',
          ventaja: 'Gana espacio y actividad en el flanco de dama sin descuidar la seguridad del rey.',
          debilidad: 'Cede parcialmente el control de d5 si blancas encuentra el momento de cambiar ahi, aunque no es una debilidad inmediata.'
        }
      },
      {
        color: 'w',
        san: 'c3',
        explain: {
          idea: 'Refuerza d4 antes de completar el desarrollo con Nbd2, manteniendo la estructura solida tipica del sistema.',
          ventaja: 'Centro reforzado y flexible; prepara Nbd2 sin bloquear el desarrollo de la dama.',
          debilidad: 'Ninguna relevante; es la continuacion mas solida y natural.'
        }
      },
      {
        color: 'b',
        san: 'Nc6',
        explain: {
          idea: 'Desarrolla el ultimo caballo, presionando d4 y completando el desarrollo de piezas menores.',
          ventaja: 'Pieza activa que aumenta la presion sobre el centro de blancas.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural en la posicion.'
        }
      },
      {
        color: 'w',
        san: 'Nbd2',
        explain: {
          idea: 'Completa el desarrollo de piezas menores, dejando la dama libre para salir por c2 o e2 mas adelante.',
          ventaja: 'Desarrollo completo y solido, listo para enrocar en la siguiente jugada.',
          debilidad: 'Ninguna relevante.'
        }
      },
      {
        color: 'b',
        san: 'Qc7',
        explain: {
          idea: 'Desarrolla la dama a una casilla activa, apoyando el avance ...e5 mas adelante y evitando estorbar al resto de piezas.',
          ventaja: 'Pieza flexible que mantiene varias opciones de plan abiertas en el medio juego.',
          debilidad: 'Ninguna relevante a este nivel de la apertura.'
        }
      },
      {
        color: 'w',
        san: 'O-O',
        explain: {
          idea: 'Pone el rey a salvo y conecta las torres antes de decidir el plan de medio juego.',
          ventaja: 'Seguridad del rey resuelta; el desarrollo completo del Sistema Londres ya esta terminado.',
          debilidad: 'Ninguna; es la jugada mas natural para completar el desarrollo basico.'
        }
      },
      {
        color: 'b',
        san: 'b6',
        explain: {
          idea: 'Prepara el desarrollo del alfil de dama a b7, completando el desarrollo de piezas menores de negras.',
          ventaja: 'Estructura solida y flexible, con el alfil apuntando hacia el flanco de rey de blancas a traves de la diagonal larga.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural en la posicion.'
        }
      }
    ]
  },
  {
    id: 'h03-londres-fianchetto',
    name: 'Sistema Londres -- respuesta moderna con fianchetto g6',
    userColor: 'b',
    overview: 'Familia Sistema Londres: variante moderna en auge donde ' +
      'negras responde con un planteamiento de tipo Este de Rey ' +
      '(fianchetto en g7) en vez del desarrollo clasico con d5. Al no ' +
      'ocupar el centro de inmediato, negras deja que blancas defina su ' +
      'estructura y presiona despues desde los flancos con ...c5 y ' +
      '...b6, una de las formas mas populares de tratar el Londres a ' +
      'nivel de club en los ultimos anos.',
    moves: [
      {
        color: 'w',
        san: 'd4',
        explain: {
          idea: 'Ocupa el centro y abre la diagonal del alfil de dama.',
          ventaja: 'Controla e5 y c5, y prepara un desarrollo rapido sin comprometerse todavia con el plan concreto.',
          debilidad: 'Ninguna real a este nivel; es la jugada mas solida y flexible para empezar.'
        }
      },
      {
        color: 'b',
        san: 'Nf6',
        explain: {
          idea: 'Desarrolla la pieza mas natural sin definir todavia la estructura de peones central, dejando abierta la opcion del fianchetto.',
          ventaja: 'Maxima flexibilidad; negras puede optar por ...g6, ...e6 o ...d5 segun lo que juegue blancas.',
          debilidad: 'Ninguna relevante a este nivel.'
        }
      },
      {
        color: 'w',
        san: 'Bf4',
        explain: {
          idea: 'Sistema Londres: saca el alfil de dama antes de cerrarlo con e3, sin importar la respuesta de negras.',
          ventaja: 'Desarrollo rapido y sin teoria compleja; blancas monta la misma estructura contra casi cualquier planteamiento.',
          debilidad: 'Ninguna inmediata; el plan de blancas es independiente de lo que juegue negras.'
        }
      },
      {
        color: 'b',
        san: 'g6',
        explain: {
          idea: 'Planteamiento moderno tipo Este de Rey: negras prepara el fianchetto del alfil de rey en vez de ocupar el centro con peones.',
          ventaja: 'Estructura solida y flexible, con el alfil de rey apuntando hacia el centro y el flanco de dama de blancas a largo plazo.',
          debilidad: 'Cede el centro momentaneamente a blancas, que puede ganar espacio con e4 mas adelante si negras no reacciona a tiempo.'
        }
      },
      {
        color: 'w',
        san: 'e3',
        explain: {
          idea: 'Refuerza d4 con una estructura solida, sin arriesgarse a e4 antes de completar el desarrollo.',
          ventaja: 'Estructura inflexible y dificil de atacar; el plan estandar del Londres funciona igual contra el fianchetto.',
          debilidad: 'Renuncia a la posibilidad mas ambiciosa de e4, dejando que negras complete su fianchetto sin problemas.'
        }
      },
      {
        color: 'b',
        san: 'Bg7',
        explain: {
          idea: 'Completa el fianchetto, la pieza clave de todo el planteamiento de negras contra el Londres.',
          ventaja: 'Alfil muy activo sobre la diagonal larga, presionando el centro y el flanco de dama de blancas.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural del plan.'
        }
      },
      {
        color: 'w',
        san: 'Nf3',
        explain: {
          idea: 'Desarrolla la ultima pieza menor del flanco de rey, preparando el enroque corto.',
          ventaja: 'Jugada solida y flexible que no compromete nada.',
          debilidad: 'Ninguna relevante.'
        }
      },
      {
        color: 'b',
        san: 'O-O',
        explain: {
          idea: 'Pone el rey a salvo antes de decidir el plan de flanco de dama.',
          ventaja: 'Seguridad del rey resuelta; a partir de aqui negras puede pensar en ...d6 y ...c5.',
          debilidad: 'Ninguna; es la jugada mas natural para completar la seguridad basica.'
        }
      },
      {
        color: 'w',
        san: 'h3',
        explain: {
          idea: 'Jugada profilactica que evita cualquier molestia futura de ...Nh5 o ...Ng4 contra el alfil de f4.',
          ventaja: 'Elimina de raiz cualquier idea tactica de negras sobre el alfil, a cambio de un tiempo.',
          debilidad: 'Jugada algo lenta que cede un tiempo de desarrollo, aunque es la eleccion mas solida en la practica.'
        }
      },
      {
        color: 'b',
        san: 'd6',
        explain: {
          idea: 'Completa la estructura tipo Este de Rey, preparando ...Nbd7 y el avance central ...e5 mas adelante.',
          ventaja: 'Estructura solida y flexible, con todas las piezas menores a punto de completar su desarrollo.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural del plan.'
        }
      },
      {
        color: 'w',
        san: 'Be2',
        explain: {
          idea: 'Desarrolla el ultimo alfil a una casilla solida, evitando exponerlo en d3 contra el fianchetto de negras.',
          ventaja: 'Desarrollo completo y sin debilidades, listo para enrocar en la siguiente jugada.',
          debilidad: 'Jugada menos activa que Bd3 en otras variantes, pero mas solida aqui frente al alfil de negras en g7.'
        }
      },
      {
        color: 'b',
        san: 'Nbd7',
        explain: {
          idea: 'Desarrolla el ultimo caballo, preparando el avance central ...e5 con apoyo suficiente.',
          ventaja: 'Pieza flexible que apoya el plan central sin bloquear al resto de piezas.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural del plan.'
        }
      },
      {
        color: 'w',
        san: 'O-O',
        explain: {
          idea: 'Pone el rey a salvo y conecta las torres antes de decidir el plan de medio juego.',
          ventaja: 'Seguridad del rey resuelta; el desarrollo completo del Sistema Londres ya esta terminado.',
          debilidad: 'Ninguna; es la jugada mas natural para completar el desarrollo basico.'
        }
      },
      {
        color: 'b',
        san: 'c5',
        explain: {
          idea: 'Contraataca el centro de blancas en el flanco de dama, el plan tipico de negras contra el Sistema Londres.',
          ventaja: 'Gana espacio y actividad en el flanco de dama sin descuidar la seguridad del rey.',
          debilidad: 'Ninguna inmediata; es la continuacion mas activa y natural del plan.'
        }
      },
      {
        color: 'w',
        san: 'c3',
        explain: {
          idea: 'Refuerza d4 manteniendo la estructura solida tipica del sistema.',
          ventaja: 'Centro reforzado y flexible frente a la presion de negras.',
          debilidad: 'Ninguna relevante; es la continuacion mas solida y natural.'
        }
      },
      {
        color: 'b',
        san: 'b6',
        explain: {
          idea: 'Prepara el desarrollo del alfil de dama a b7, apoyando el control de la diagonal larga junto al alfil de rey en g7.',
          ventaja: 'Estructura muy solida con ambos alfiles apuntando hacia el centro y el flanco de rey de blancas.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural del plan.'
        }
      }
    ]
  },
  {
    id: 'h03-inglesa-inversa-siciliana',
    name: 'Inglesa -- respuesta simetrica tipo Siciliana Inversa',
    userColor: 'b',
    overview: 'Familia Inglesa: negras responde a 1.c4 con ...e5, tratando ' +
      'la posicion como una Siciliana con los colores invertidos (negras ' +
      'ocupa el centro como blancas en la Siciliana normal). Es la ' +
      'respuesta mas popular y solida contra la Inglesa, con planes muy ' +
      'conocidos de desarrollo simetrico y lucha por el centro tras el ' +
      'cambio en d5.',
    moves: [
      {
        color: 'w',
        san: 'c4',
        explain: {
          idea: 'Apertura Inglesa: ataca d5 desde el flanco sin ocupar el centro con un peon central todavia.',
          ventaja: 'Maxima flexibilidad; blancas puede transponer a estructuras de d4, a un fianchetto puro, o mantener la lucha en el flanco de dama.',
          debilidad: 'No ocupa el centro de inmediato, dejando que negras responda con la misma libertad.'
        }
      },
      {
        color: 'b',
        san: 'e5',
        explain: {
          idea: 'Respuesta simetrica que trata la posicion como una Siciliana con colores invertidos, ocupando el centro de inmediato.',
          ventaja: 'La respuesta mas popular y solida contra la Inglesa, con mucha teoria y planes conocidos.',
          debilidad: 'Ninguna relevante a este nivel; es la continuacion mas natural y fiable.'
        }
      },
      {
        color: 'w',
        san: 'Nc3',
        explain: {
          idea: 'Desarrolla una pieza y refuerza el control sobre d5, evitando que negras ocupe esa casilla sin oposicion.',
          ventaja: 'Pieza activa que prepara g3 y el fianchetto tipico de la Inglesa.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural y flexible.'
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
        san: 'Nf3',
        explain: {
          idea: 'Desarrolla la otra pieza menor del flanco de rey, presionando tambien el centro.',
          ventaja: 'Pieza activa que prepara g3 y el enroque corto sin comprometerse todavia con d4.',
          debilidad: 'Ninguna relevante.'
        }
      },
      {
        color: 'b',
        san: 'Nc6',
        explain: {
          idea: 'Desarrolla el ultimo caballo, reforzando el centro de negras y completando el desarrollo simetrico.',
          ventaja: 'Pieza activa que mantiene la simetria y la solidez de la posicion.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural en la posicion.'
        }
      },
      {
        color: 'w',
        san: 'g3',
        explain: {
          idea: 'Prepara el fianchetto del alfil de rey, el plan mas caracteristico de la Apertura Inglesa.',
          ventaja: 'Alfil muy activo sobre la diagonal larga una vez completado el fianchetto.',
          debilidad: 'Ninguna relevante; es la continuacion mas tipica del sistema.'
        }
      },
      {
        color: 'b',
        san: 'd5',
        explain: {
          idea: 'Rompe la simetria ocupando el centro con el peon de dama, aprovechando que blancas todavia no ha fijado su estructura central.',
          ventaja: 'Gana espacio en el centro y fuerza a blancas a definir la tension inmediatamente.',
          debilidad: 'Si blancas cambia en d5, negras debera recapturar con una pieza, cediendo algo de tiempo si blancas encuentra despues Ng5 o similar.'
        }
      },
      {
        color: 'w',
        san: 'cxd5',
        explain: {
          idea: 'Cambia en el centro antes de que negras pueda sostener la tension a su gusto.',
          ventaja: 'Fuerza a negras a recapturar con una pieza, ganando tiempo de desarrollo.',
          debilidad: 'Ninguna; es la continuacion mas natural y fuerte.'
        }
      },
      {
        color: 'b',
        san: 'Nxd5',
        explain: {
          idea: 'Recaptura con el caballo, la pieza mas natural para hacerlo y la que mas actividad mantiene en el centro.',
          ventaja: 'Pieza muy activa en el centro del tablero.',
          debilidad: 'El caballo puede ser blanco de un futuro Bg2 combinado con Nxd5, aunque no es una amenaza inmediata.'
        }
      },
      {
        color: 'w',
        san: 'Bg2',
        explain: {
          idea: 'Completa el fianchetto, presionando la diagonal larga hacia el flanco de dama de negras.',
          ventaja: 'Pieza muy activa que apoya la lucha por el centro y prepara el enroque corto.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural del plan.'
        }
      },
      {
        color: 'b',
        san: 'Nb6',
        explain: {
          idea: 'Retira el caballo de la presion de la diagonal larga a una casilla solida, evitando cambios prematuros.',
          ventaja: 'Pieza segura que sigue controlando casillas centrales importantes.',
          debilidad: 'Pierde un tiempo respecto a mantener el caballo en el centro, aunque es la eleccion mas solida.'
        }
      },
      {
        color: 'w',
        san: 'O-O',
        explain: {
          idea: 'Pone el rey a salvo antes de decidir el plan de medio juego.',
          ventaja: 'Seguridad del rey resuelta; a partir de aqui blancas puede pensar en d3 y Rb1-b4.',
          debilidad: 'Ninguna; es la jugada mas natural para completar la seguridad basica.'
        }
      },
      {
        color: 'b',
        san: 'Be7',
        explain: {
          idea: 'Desarrolla el alfil de rey a una casilla solida, preparando el enroque corto de inmediato.',
          ventaja: 'Jugada solida que no compromete nada y acelera la seguridad del rey.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural en la posicion.'
        }
      },
      {
        color: 'w',
        san: 'd3',
        explain: {
          idea: 'Abre la diagonal del alfil de dama y refuerza el centro antes de decidir el plan de flanco de dama.',
          ventaja: 'Estructura solida y flexible que mantiene varias opciones de plan abiertas.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural del sistema.'
        }
      },
      {
        color: 'b',
        san: 'O-O',
        explain: {
          idea: 'Pone el rey a salvo y conecta las torres antes de decidir el plan de medio juego.',
          ventaja: 'Seguridad del rey resuelta; el desarrollo basico de negras ya esta completo.',
          debilidad: 'Ninguna; es la jugada mas natural para completar el desarrollo basico.'
        }
      }
    ]
  },
  {
    id: 'h03-catalana',
    name: 'Inglesa -- Catalan (transposicion via 1.d4 Nf6 2.c4 e6 3.g3 d5)',
    userColor: 'b',
    overview: 'Linea propia dentro del bloque Inglesa por su transposicion ' +
      'natural: blancas combina d4 y c4 con el fianchetto de rey (g3), ' +
      'una de las armas mas fuertes y modernas a nivel de elite contra ' +
      'estructuras de dama por su presion constante sobre la diagonal ' +
      'larga y el flanco de dama de negras. Negras acepta el peon en c4 ' +
      'y contraataca despues con ...a6 y ...b5 para sostenerlo el mayor ' +
      'tiempo posible.',
    moves: [
      {
        color: 'w',
        san: 'd4',
        explain: {
          idea: 'Ocupa el centro y abre la diagonal del alfil de dama.',
          ventaja: 'Controla e5 y c5, y prepara un desarrollo rapido sin comprometerse todavia con el plan concreto.',
          debilidad: 'Ninguna real a este nivel; es la jugada mas solida y flexible para empezar.'
        }
      },
      {
        color: 'b',
        san: 'Nf6',
        explain: {
          idea: 'Desarrolla la pieza mas natural sin definir todavia la estructura de peones central.',
          ventaja: 'Maxima flexibilidad; negras puede optar por varias estructuras segun lo que juegue blancas.',
          debilidad: 'Ninguna relevante a este nivel.'
        }
      },
      {
        color: 'w',
        san: 'c4',
        explain: {
          idea: 'Combina el peon de dama con el ataque en el flanco de dama, ampliando el control central.',
          ventaja: 'Mayor presencia en el centro y preparacion directa del plan Catalan con g3.',
          debilidad: 'Cede momentaneamente la exclusividad del centro, igual que en cualquier gambito de dama.'
        }
      },
      {
        color: 'b',
        san: 'e6',
        explain: {
          idea: 'Prepara el desarrollo del alfil de rey y sostiene la posibilidad de jugar ...d5 con una estructura solida.',
          ventaja: 'Posicion flexible que no compromete nada todavia.',
          debilidad: 'El alfil de casillas claras de negras queda temporalmente encerrado tras la cadena de peones si se juega d5.'
        }
      },
      {
        color: 'w',
        san: 'g3',
        explain: {
          idea: 'El Catalan: prepara el fianchetto del alfil de rey en vez del desarrollo clasico con Nc3 o Nf3 primero.',
          ventaja: 'Alfil muy activo sobre la diagonal larga, presionando d5 y el flanco de dama de negras a largo plazo -- una de las armas modernas mas fuertes a nivel de elite.',
          debilidad: 'Ninguna inmediata; el plan es lento pero muy solido.'
        }
      },
      {
        color: 'b',
        san: 'd5',
        explain: {
          idea: 'Ocupa el centro antes de que blancas complete el fianchetto, definiendo la estructura tipica del Catalan.',
          ventaja: 'Estructura solida y conocida, la respuesta mas natural y fiable contra el Catalan.',
          debilidad: 'El peon de d5 quedara bajo presion constante de el alfil de blancas en g2 durante toda la partida.'
        }
      },
      {
        color: 'w',
        san: 'Bg2',
        explain: {
          idea: 'Completa el fianchetto, la pieza que define todo el plan Catalan.',
          ventaja: 'Presion maxima sobre la diagonal larga a1-h8, apuntando hacia d5 y el flanco de dama de negras.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural del plan.'
        }
      },
      {
        color: 'b',
        san: 'Be7',
        explain: {
          idea: 'Desarrolla el alfil de rey a una casilla solida, preparando el enroque corto de inmediato.',
          ventaja: 'Jugada solida que no compromete nada y acelera la seguridad del rey.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural en la posicion.'
        }
      },
      {
        color: 'w',
        san: 'Nf3',
        explain: {
          idea: 'Desarrolla la ultima pieza menor del flanco de rey, preparando el enroque corto.',
          ventaja: 'Jugada solida y flexible que no compromete nada.',
          debilidad: 'Ninguna relevante.'
        }
      },
      {
        color: 'b',
        san: 'O-O',
        explain: {
          idea: 'Pone el rey a salvo antes de decidir el plan del flanco de dama.',
          ventaja: 'Seguridad del rey resuelta; a partir de aqui negras puede pensar en ...dxc4 o ...c6.',
          debilidad: 'Ninguna; es la jugada mas natural para completar la seguridad basica.'
        }
      },
      {
        color: 'w',
        san: 'O-O',
        explain: {
          idea: 'Pone el rey a salvo y conecta las torres antes de decidir el plan de medio juego.',
          ventaja: 'Seguridad del rey resuelta; el desarrollo basico del sistema Catalan ya esta completo.',
          debilidad: 'Ninguna; es la jugada mas natural para completar el desarrollo basico.'
        }
      },
      {
        color: 'b',
        san: 'dxc4',
        explain: {
          idea: 'Acepta el peon en c4 en vez de sostener la tension, el plan tipico de negras contra el Catalan (Catalan Aceptado).',
          ventaja: 'Un peon extra de forma inmediata y sin complicaciones tacticas.',
          debilidad: 'El peon c4 sera dificil de sostener a largo plazo frente a la presion del alfil de blancas en g2 y una futura Qc2.'
        }
      },
      {
        color: 'w',
        san: 'Qc2',
        explain: {
          idea: 'Ataca indirectamente el peon c4 y prepara recuperarlo con Qxc4, el plan principal de blancas en el Catalan Aceptado.',
          ventaja: 'Recupera el peon con comodidad y mantiene toda la presion tipica de la estructura Catalan.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural y fuerte del sistema.'
        }
      },
      {
        color: 'b',
        san: 'a6',
        explain: {
          idea: 'Prepara ...b5 para sostener el peon de mas el mayor tiempo posible, el plan mas combativo de negras en el Catalan Aceptado.',
          ventaja: 'Intenta conservar el peon extra ganando espacio en el flanco de dama.',
          debilidad: 'Cede tiempo de desarrollo mientras blancas completa el resto de piezas con ventaja de espacio en el centro.'
        }
      },
      {
        color: 'w',
        san: 'Qxc4',
        explain: {
          idea: 'Recupera el peon antes de que negras complete ...b5, manteniendo la iniciativa.',
          ventaja: 'Material igualado y dama activa en una casilla central.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural y fuerte.'
        }
      },
      {
        color: 'b',
        san: 'b5',
        explain: {
          idea: 'Gana espacio y tiempo atacando la dama de blancas, buscando contrajuego en el flanco de dama pese a no conservar el peon.',
          ventaja: 'Iniciativa momentanea en el flanco de dama y expansion de espacio.',
          debilidad: 'Debilita las casillas negras del flanco de dama (c6, c5), un factor a largo plazo que blancas puede explotar en el medio juego.'
        }
      }
    ]
  },
  {
    id: 'h03-reti-fianchetto-doble',
    name: 'Reti -- estructura de fianchetto simetrico',
    userColor: 'b',
    overview: 'Familia Reti: blancas empieza con el caballo antes que ' +
      'ningun peon central, manteniendo la maxima flexibilidad para ' +
      'transponer a Inglesa, Catalan o quedarse en una estructura Reti ' +
      'pura tipo King s Indian Attack invertido. Negras responde con el ' +
      'desarrollo mas solido y universal (d5, Nf6, e6, fianchetto de ' +
      'rey si blancas lo hace tambien) sin comprometerse con ninguna ' +
      'transposicion concreta.',
    moves: [
      {
        color: 'w',
        san: 'Nf3',
        explain: {
          idea: 'Apertura Reti: desarrolla una pieza antes que ningun peon central, manteniendo maxima flexibilidad de transposicion.',
          ventaja: 'Puede transponer a Inglesa, Catalan, o quedarse en una estructura Reti pura segun la respuesta de negras.',
          debilidad: 'No define ningun plan concreto todavia, cediendo a negras la misma libertad de eleccion.'
        }
      },
      {
        color: 'b',
        san: 'd5',
        explain: {
          idea: 'Ocupa el centro de inmediato con el desarrollo mas solido y universal, sin comprometerse con ninguna transposicion concreta.',
          ventaja: 'Maxima flexibilidad; negras puede mantener esta estructura sea cual sea el plan que elija blancas despues.',
          debilidad: 'Ninguna relevante a este nivel.'
        }
      },
      {
        color: 'w',
        san: 'g3',
        explain: {
          idea: 'Prepara el fianchetto del alfil de rey, manteniendo la estructura Reti pura sin transponer a d4 ni c4.',
          ventaja: 'Alfil muy activo sobre la diagonal larga una vez completado el fianchetto.',
          debilidad: 'Ninguna relevante; es la continuacion mas tipica del sistema.'
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
        san: 'Bg2',
        explain: {
          idea: 'Completa el fianchetto, presionando la diagonal larga hacia el centro y el flanco de dama de negras.',
          ventaja: 'Pieza muy activa que apoya la lucha por el centro y prepara el enroque corto.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural del plan.'
        }
      },
      {
        color: 'b',
        san: 'e6',
        explain: {
          idea: 'Prepara el desarrollo del alfil de rey y sostiene la posicion central sin ceder espacio.',
          ventaja: 'Estructura solida y flexible que mantiene varias opciones de plan abiertas.',
          debilidad: 'El alfil de casillas claras de negras queda temporalmente encerrado tras la cadena de peones.'
        }
      },
      {
        color: 'w',
        san: 'O-O',
        explain: {
          idea: 'Pone el rey a salvo antes de decidir el plan de medio juego.',
          ventaja: 'Seguridad del rey resuelta; a partir de aqui blancas puede pensar en d3 y e4.',
          debilidad: 'Ninguna; es la jugada mas natural para completar la seguridad basica.'
        }
      },
      {
        color: 'b',
        san: 'Be7',
        explain: {
          idea: 'Desarrolla el alfil de rey a una casilla solida, preparando el enroque corto de inmediato.',
          ventaja: 'Jugada solida que no compromete nada y acelera la seguridad del rey.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural en la posicion.'
        }
      },
      {
        color: 'w',
        san: 'd3',
        explain: {
          idea: 'Abre la diagonal del alfil de dama y prepara el avance central e4, el plan tipico tipo King s Indian Attack.',
          ventaja: 'Estructura solida y flexible que mantiene varias opciones de plan abiertas.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural del sistema.'
        }
      },
      {
        color: 'b',
        san: 'O-O',
        explain: {
          idea: 'Pone el rey a salvo y conecta las torres antes de decidir el plan de medio juego.',
          ventaja: 'Seguridad del rey resuelta; el desarrollo basico de negras ya esta completo.',
          debilidad: 'Ninguna; es la jugada mas natural para completar el desarrollo basico.'
        }
      },
      {
        color: 'w',
        san: 'Nbd2',
        explain: {
          idea: 'Completa el desarrollo de piezas menores, apoyando el avance central e4 que se prepara.',
          ventaja: 'Desarrollo completo y solido, listo para el plan central de e4.',
          debilidad: 'Ninguna relevante.'
        }
      },
      {
        color: 'b',
        san: 'c5',
        explain: {
          idea: 'Gana espacio en el flanco de dama y presiona el centro de blancas antes de que complete su plan.',
          ventaja: 'Actividad en el flanco de dama sin descuidar la seguridad del rey.',
          debilidad: 'Ninguna inmediata; es la continuacion mas activa y natural.'
        }
      },
      {
        color: 'w',
        san: 'e4',
        explain: {
          idea: 'Ejecuta el plan central tipico del sistema tipo King s Indian Attack, ganando espacio en el centro.',
          ventaja: 'Centro amplio y mayor espacio para las piezas de blancas.',
          debilidad: 'Cede el control de d4 momentaneamente, un factor menor que blancas acepta a cambio del espacio ganado.'
        }
      },
      {
        color: 'b',
        san: 'Nc6',
        explain: {
          idea: 'Desarrolla el ultimo caballo, presionando el centro de blancas y completando el desarrollo de piezas menores.',
          ventaja: 'Pieza activa que aumenta la presion sobre el centro de blancas.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural en la posicion.'
        }
      },
      {
        color: 'w',
        san: 'Re1',
        explain: {
          idea: 'Coloca la torre en la columna central abierta por el avance de peones, apoyando futuras tensiones en e5 o e4.',
          ventaja: 'Pieza bien colocada para apoyar el centro a largo plazo.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural del plan.'
        }
      },
      {
        color: 'b',
        san: 'b5',
        explain: {
          idea: 'Gana espacio en el flanco de dama, el plan tipico de negras en estas estructuras simetricas tipo King s Indian Attack invertido.',
          ventaja: 'Espacio y actividad en el flanco de dama, complementando la presion ya iniciada con ...c5.',
          debilidad: 'Ninguna relevante; es la continuacion mas natural del plan.'
        }
      }
    ]
  }
]

