// Problemas tacticos -- Hito 04. Mismo formato de objeto que
// REPERTOIRE_LINES/FINALES_LINES: "userColor" es el bando que
// entrena Miguel Angel, "moves" es la secuencia fija de la solucion
// (propias y del rival) que reproduce el motor ya existente sin
// cambios -- ver ANNEX_H04.md, "DISENO CERRADO (S4)".
//
// REDISENO (sesion posterior a la primera version de 10 problemas):
// Miguel Angel senalo dos fallos de fondo en la version anterior: (1)
// contenido inventado por Claude, de nivel demasiado basico, sin
// ningun anclaje en fuentes reales; (2) sin niveles de dificultad,
// mezclando todo en un mismo cajon. Correccion:
//
// - Los problemas mas representativos de cada nivel se anclan en
//   patrones y partidas REALES y documentados (mate de Legal, mate
//   de Anastasia, mate de Boden con la partida completa real
//   "Inmortal Peruana" Canal-NN 1934, mate sofocado "Legado de
//   Philidor" con la posicion de referencia usada en multiples
//   fuentes), no inventados por Claude desde cero.
// - Los 10 problemas de la version anterior (todos ellos tacticamente
//   solidos y verificados, el fallo no era de correccion sino de
//   nivel/procedencia) se conservan pero se reclasifican por nivel
//   real de dificultad en vez de presentarse todos como un unico
//   bloque uniforme.
// - Campo nuevo: "nivel" (1=Iniciacion, 2=Intermedio, 3=Avanzado,
//   4=Experto), ademas del ya existente "tema" (clasificacion
//   tactica). Ambos son solo metadatos para el selector nativo
//   (ProblemasCatalog.kt) -- no afectan al motor JS.
//
// Toda secuencia SAN de este fichero fue verificada con chess.js real
// (node verify.js, o exploracion interactiva jugada a jugada cuando
// habia pieza defensora rival con contrajuego real) antes de
// escribirse aqui. Las posiciones de partidas reales se verificaron
// ademas reproduciendo la apertura/partida documentada desde cero con
// chess.js, no solo copiando el FEN de la fuente.
//
// IMPORTANTE: el campo "id" de cada problema debe coincidir
// exactamente con el id declarado en ProblemasCatalog.kt (selector
// nativo del menu). Todos los ids llevan el prefijo "h04-problema-"
// para evitar colision en el array combinado que construye game.js.
//
// S7: Miguel Angel senalo que los niveles 1-4 de abajo, pese al
// redisexo anterior, se quedan muy por debajo de lo que necesita
// (ELO 1700-2200). Se anade un bloque nuevo "NIVEL 5 -- TORNEO" al
// final del fichero con 3 partidas reales completas y muy
// documentadas (no patrones de mate en 1-2), y en ProblemasCatalog.kt
// los niveles 1-4 se colapsan a una unica etiqueta honesta en el
// selector en vez de la falsa progresion 1-4 anterior -- ver ese
// fichero para el detalle exacto.
var PROBLEMAS_LINES = [

  // ============================================================
  // NIVEL 1 -- INICIACION
  // ============================================================
  {
    id: 'h04-problema-mate-legal',
    name: 'El Mate de Legal -- la clavada que no era tal',
    tema: 'Clavada falsa',
    nivel: 1,
    userColor: 'w',
    startFen: 'rn1qkbnr/ppp2p1p/3p2p1/4p3/2B1P1b1/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5',
    overview: 'Patron real documentado desde 1750, atribuido a Sire ' +
      'de Legal (maestro y mentor de Philidor). Posicion real tras ' +
      '1.e4 e5 2.Cf3 d6 3.Ac4 Ag4 4.Cc3 g6: el alfil negro parece ' +
      'clavar el caballo de f3 contra la dama, pero la clavada es ' +
      'una ilusion -- si negras la toma en serio y captura la dama, ' +
      'un mate forzado con las piezas menores cae en dos jugadas ' +
      'mas. La leccion central: antes de asumir que una pieza esta ' +
      'inmovilizada por una clavada, comprueba si en realidad puede ' +
      'moverse igual porque hay algo mas fuerte detras.',
    moves: [
      {
        color: 'w',
        san: 'Nxe5',
        explain: {
          idea: 'Blancas ignoran la supuesta clavada y capturan el peon central, ofreciendo la dama.',
          ventaja: 'Si negras recapturan con el alfil (Axd1), la dama cae, pero a cambio blancas obtienen un mate forzado con las piezas menores que quedan restantes.',
          debilidad: 'Si negras juegan la respuesta correcta (dxe5, no capturar la dama), blancas simplemente pierden un caballo -- la trampa solo funciona si el rival cae en ella.'
        }
      },
      {
        color: 'b',
        san: 'Bxd1',
        explain: {
          idea: 'Negras capturan la dama, cayendo en la trampa: parece ganar material decisivo.',
          ventaja: 'A primera vista, negras se llevan la pieza mas valiosa del tablero.',
          debilidad: 'El alfil de c4 y los dos caballos ya estan perfectamente coordinados para dar mate en dos jugadas mas -- la dama resulta ser solo el cebo.'
        }
      },
      {
        color: 'w',
        san: 'Bxf7+',
        explain: {
          idea: 'El alfil captura con jaque, arrastrando al rey negro a la unica casilla donde el mate funciona.',
          ventaja: 'El rey no puede capturar el alfil (esta defendido por el caballo de e5) ni tiene otra casilla razonable.',
          debilidad: 'Ninguna: es la jugada que hace funcionar toda la combinacion.'
        }
      },
      {
        color: 'b',
        san: 'Ke7',
        explain: {
          idea: 'Unica casilla razonable para salir del jaque.',
          ventaja: 'Ninguna: el rey queda expuesto justo en el centro del tablero.',
          debilidad: 'Esa casilla exacta es la que necesita el caballo blanco para dar mate.'
        }
      },
      {
        color: 'w',
        san: 'Nd5#',
        explain: {
          idea: 'El caballo salta a d5 dando jaque mate: controla las casillas de escape junto con el alfil y el otro caballo.',
          ventaja: 'Jaque mate: el rey no tiene ninguna casilla libre y no hay forma de capturar ni bloquear.',
          debilidad: 'Ninguna: es el resultado final de la combinacion -- una dama sacrificada por un mate forzado con piezas menores.'
        }
      }
    ]
  },
  {
    id: 'h04-problema-horquilla-caballo',
    name: 'Horquilla de caballo',
    tema: 'Horquilla',
    nivel: 1,
    userColor: 'w',
    startFen: 'r3k3/8/N7/8/8/8/8/2K5 w - - 0 1',
    overview: 'El caballo salta a una casilla desde la que da jaque ' +
      'al rey y, al mismo tiempo, ataca la torre: negras no pueden ' +
      'evitar las dos cosas a la vez.',
    moves: [
      {
        color: 'w',
        san: 'Nc7+',
        explain: {
          idea: 'El caballo da jaque al rey y ataca la torre a8 al mismo tiempo -- una horquilla clasica.',
          ventaja: 'Negras no pueden capturar el caballo (esta lejos de la torre y del rey) ni bloquear un jaque de caballo: solo pueden mover el rey.',
          debilidad: 'Ninguna: el caballo esta a salvo en c7, fuera del alcance de cualquier pieza negra.'
        }
      },
      {
        color: 'b',
        san: 'Kd8',
        explain: {
          idea: 'El rey se ve obligado a moverse para salir del jaque.',
          ventaja: 'Ninguna: jugada forzada.',
          debilidad: 'La torre a8 queda indefensa: nada puede salvarla ya.'
        }
      },
      {
        color: 'w',
        san: 'Nxa8',
        explain: {
          idea: 'El caballo captura la torre, completando la horquilla.',
          ventaja: 'Blancas ganan una torre completa a cambio de nada.',
          debilidad: 'Ninguna: es el resultado natural de la horquilla.'
        }
      }
    ]
  },
  {
    id: 'h04-problema-mate-en-1',
    name: 'Mate en 1: la fila trasera',
    tema: 'Mate en 1',
    nivel: 1,
    userColor: 'w',
    startFen: '6k1/5ppp/8/8/8/8/8/R5K1 w - - 0 1',
    overview: 'El rey negro esta encerrado por sus propios peones, sin ' +
      'ninguna casilla de escape en la octava fila. Una sola jugada ' +
      'de torre basta para dar mate.',
    moves: [
      {
        color: 'w',
        san: 'Ra8#',
        explain: {
          idea: 'La torre da jaque por la octava fila.',
          ventaja: 'Jaque mate: el rey no puede capturar la torre (esta lejos), no hay pieza que bloquee el jaque, y sus propios peones en f7, g7 y h7 le tapan cualquier retirada.',
          debilidad: 'Ninguna: es el clasico mate de la fila trasera, uno de los patrones mas importantes que hay que reconocer siempre.'
        }
      }
    ]
  },

  // ============================================================
  // NIVEL 2 -- INTERMEDIO
  // ============================================================
  {
    id: 'h04-problema-mate-anastasia',
    name: 'Mate de Anastasia',
    tema: 'Mate con nombre propio',
    nivel: 2,
    userColor: 'w',
    startFen: '7k/4N1p1/8/8/8/8/6K1/R7 w - - 0 1',
    overview: 'Patron real documentado, con nombre propio desde la ' +
      'novela "Anastasia und das Schachspiel" (1803). El caballo ya ' +
      'vigila g8 y g6 desde e7, y el propio peon de g7 le tapa esa ' +
      'casilla al rey: solo falta llevar la torre a la columna h ' +
      'para completar el mate. Es uno de los patrones de mate con ' +
      'caballo y torre mas reconocibles, y aparece con frecuencia ' +
      'en partidas reales cuando el rey rival queda empujado a la ' +
      'columna h.',
    moves: [
      {
        color: 'w',
        san: 'Rh1#',
        explain: {
          idea: 'La torre llega a la columna h dando jaque mate.',
          ventaja: 'Jaque mate: g8 y g6 estan vigiladas por el caballo, g7 esta ocupada por el propio peon negro, y la torre cubre toda la columna h incluida h7.',
          debilidad: 'Ninguna: es el resultado directo del patron clasico de Anastasia.'
        }
      }
    ]
  },
  {
    id: 'h04-problema-clavada-caballo',
    name: 'Clavada absoluta',
    tema: 'Clavada',
    nivel: 2,
    userColor: 'w',
    startFen: '4k3/8/2n5/1B2p3/8/5N2/8/6K1 w - - 0 1',
    overview: 'El alfil clava el caballo negro contra su propio rey: ' +
      'ese caballo no puede moverse sin dejar al rey en jaque, asi ' +
      'que en la practica no defiende nada. Blancas aprovechan para ' +
      'capturar gratis lo que el caballo creia estar defendiendo.',
    moves: [
      {
        color: 'w',
        san: 'Nxe5',
        explain: {
          idea: 'El caballo blanco captura el peon que, en teoria, estaba defendido por el caballo negro en c6.',
          ventaja: 'El caballo negro esta clavado por el alfil de b5 contra el rey de e8: si captura en e5, expone a su propio rey a jaque, asi que en la practica no puede recapturar.',
          debilidad: 'Ninguna: es una captura completamente gratuita gracias a la clavada.'
        }
      }
    ]
  },
  {
    id: 'h04-problema-descubierta-caballo',
    name: 'Jaque a la descubierta',
    tema: 'Ataque a la descubierta',
    nivel: 2,
    userColor: 'w',
    startFen: '4k3/r7/8/4N3/8/8/8/4R1K1 w - - 0 1',
    overview: 'El caballo se aparta de la columna e, descubriendo el ' +
      'jaque de la torre que tenia detras -- y de paso, el propio ' +
      'caballo aterriza atacando la torre rival. Dos amenazas por el ' +
      'precio de una jugada.',
    moves: [
      {
        color: 'w',
        san: 'Nc6+',
        explain: {
          idea: 'El caballo se mueve, abriendo la columna e para que la torre de e1 de jaque al rey -- y de paso ataca la torre de a7.',
          ventaja: 'Es un jaque doble en sentido practico: viene de la torre (descubierto) mientras el caballo amenaza otra pieza distinta.',
          debilidad: 'Ninguna: el caballo aterriza en una casilla segura.'
        }
      },
      {
        color: 'b',
        san: 'Kf8',
        explain: {
          idea: 'El rey se ve obligado a salir del jaque de la torre.',
          ventaja: 'Ninguna: jugada forzada (nada puede bloquear ni capturar la torre a distancia).',
          debilidad: 'La torre a7 sigue atacada por el caballo y nada puede salvarla ya.'
        }
      },
      {
        color: 'w',
        san: 'Nxa7',
        explain: {
          idea: 'El caballo captura la torre que quedo atacada desde el jaque a la descubierta.',
          ventaja: 'Blancas ganan una torre completa.',
          debilidad: 'Ninguna: es el resultado natural del ataque a la descubierta.'
        }
      }
    ]
  },
  {
    id: 'h04-problema-doble-ataque-torre',
    name: 'Doble ataque de torre',
    tema: 'Doble ataque de torre',
    nivel: 2,
    userColor: 'w',
    startFen: '1R2k3/4n3/8/8/1b6/8/8/6K1 w - - 0 1',
    overview: 'La torre se planta en una casilla desde la que ataca a ' +
      'la vez, por columna y por fila, a dos piezas distintas: ' +
      'negras solo pueden salvar una de las dos.',
    moves: [
      {
        color: 'w',
        san: 'Rb7',
        explain: {
          idea: 'La torre ataca al mismo tiempo el alfil de b4 (por la columna b) y el caballo de e7 (por la septima fila).',
          ventaja: 'Ninguna de las dos piezas negras esta defendida: negras solo tienen tiempo de salvar una.',
          debilidad: 'Ninguna: la torre esta a salvo en b7.'
        }
      },
      {
        color: 'b',
        san: 'Nf5',
        explain: {
          idea: 'Negras salvan el caballo, la pieza que consideran mas valiosa de salvar en este momento.',
          ventaja: 'Conserva el caballo.',
          debilidad: 'El alfil de b4 queda perdido sin remedio.'
        }
      },
      {
        color: 'w',
        san: 'Rxb4',
        explain: {
          idea: 'La torre captura el alfil que quedo sin defensa tras el doble ataque.',
          ventaja: 'Blancas ganan una pieza completa.',
          debilidad: 'Ninguna: es el resultado natural del doble ataque.'
        }
      }
    ]
  },

  // ============================================================
  // NIVEL 3 -- AVANZADO
  // ============================================================
  {
    id: 'h04-problema-mate-boden',
    name: 'Mate de Boden -- la Inmortal Peruana',
    tema: 'Mate con nombre propio (partida real)',
    nivel: 3,
    userColor: 'w',
    startFen: '2kr2nr/pp1n1ppp/2p1p3/q7/1b1P1B2/P1N2Q1P/1PP1BPP1/R3K2R w KQ - 1 11',
    overview: 'Posicion real de la partida Canal-NN, exhibicion ' +
      'simultanea, Budapest 1934 -- conocida como "la Inmortal ' +
      'Peruana", el ejemplo mas citado del mate de Boden (dos ' +
      'alfiles en diagonales cruzadas). Tras 10...0-0-0??, el rey ' +
      'negro enroco largo hacia un peligro que no vio venir: ' +
      'blancas desvian el peon de b4 con jaque, y cuando negras ' +
      'recuperan aparentemente la iniciativa capturando dos torres, ' +
      'un sacrificio de dama abre la diagonal exacta que necesita ' +
      'el alfil para dar mate.',
    moves: [
      {
        color: 'w',
        san: 'axb4',
        explain: {
          idea: 'Blancas capturan el alfil que daba jaque, abriendo la columna a con jaque.',
          ventaja: 'Gana una pieza con jaque, ganando ademas un tiempo crucial para la combinacion que sigue.',
          debilidad: 'Ninguna: es la jugada natural que ademas resulta ser el primer paso de la combinacion de mate.'
        }
      },
      {
        color: 'b',
        san: 'Qxa1+',
        explain: {
          idea: 'Negras capturan la torre con jaque, buscando contrajuego y material.',
          ventaja: 'Gana una torre completa y da jaque, pareciendo tomar la iniciativa.',
          debilidad: 'El rey blanco simplemente se aparta del jaque, y la dama negra queda fuera de juego en el otro extremo del tablero justo cuando mas se la necesita en el centro.'
        }
      },
      {
        color: 'w',
        san: 'Kd2',
        explain: {
          idea: 'El rey blanco se aparta del jaque sin perder tiempo.',
          ventaja: 'Deja la dama negra completamente descolocada en a1, lejos de poder defender al propio rey negro.',
          debilidad: 'Ninguna: el rey blanco esta perfectamente seguro en d2.'
        }
      },
      {
        color: 'b',
        san: 'Qxh1',
        explain: {
          idea: 'Negras capturan tambien la segunda torre, acumulando material.',
          ventaja: 'Dos torres ganadas a cambio de un alfil -- en apariencia, un balance excelente para negras.',
          debilidad: 'La dama negra sigue completamente fuera de juego en la esquina h1, sin ninguna posibilidad de volver a tiempo para defender a su propio rey.'
        }
      },
      {
        color: 'w',
        san: 'Qxc6+',
        explain: {
          idea: 'Sacrificio de dama: blancas entregan la dama con jaque para abrir la diagonal que necesita el alfil.',
          ventaja: 'El rey negro esta obligado a recapturar con el peon, ya que no hay otra forma de responder al jaque -- y esa recaptura es precisamente lo que abre la diagonal fatal.',
          debilidad: 'Blancas entregan la dama, pero a cambio del mate forzado en la jugada siguiente -- una de las combinaciones mas celebradas de la historia por esta razon exacta.'
        }
      },
      {
        color: 'b',
        san: 'bxc6',
        explain: {
          idea: 'Unica forma de responder al jaque: el peon b7 recaptura la dama.',
          ventaja: 'Recupera la dama blanca, quedando negras con una ventaja material aparentemente enorme.',
          debilidad: 'Esa misma recaptura abre por completo la diagonal a6-c8 hacia el rey negro -- la jugada que sella su propia suerte.'
        }
      },
      {
        color: 'w',
        san: 'Ba6#',
        explain: {
          idea: 'El alfil de casillas claras da jaque mate por la diagonal recien abierta -- el patron de Boden completo: dos alfiles en diagonales cruzadas, con el rey encerrado por su propia torre y peones.',
          ventaja: 'Jaque mate: el rey no tiene ninguna casilla libre (b8 y c7 estan cubiertas por el otro alfil de f4, d8 esta ocupada por la propia torre) y no puede capturar ni bloquear.',
          debilidad: 'Ninguna: es el desenlace de una de las combinaciones mas citadas de la historia del ajedrez para ilustrar este patron.'
        }
      }
    ]
  },
  {
    id: 'h04-problema-sobrecarga-torre',
    name: 'Sobrecarga de la torre defensora',
    tema: 'Sobrecarga',
    nivel: 3,
    userColor: 'w',
    startFen: '4k3/3r3b/8/8/3n4/8/8/3R2KR w - - 0 1',
    overview: 'La torre negra tiene demasiado trabajo: defiende a la ' +
      'vez un caballo (por la columna d) y un alfil (por la septima ' +
      'fila). No puede cumplir las dos tareas al mismo tiempo.',
    moves: [
      {
        color: 'w',
        san: 'Rxd4',
        explain: {
          idea: 'Blancas capturan el caballo, obligando a la torre negra a elegir entre recapturar o seguir defendiendo el alfil.',
          ventaja: 'Si la torre no recaptura, blancas se quedan con un caballo gratis.',
          debilidad: 'Ninguna: aunque negras recapturen, la sobrecarga ya esta en marcha.'
        }
      },
      {
        color: 'b',
        san: 'Rxd4',
        explain: {
          idea: 'Negras recapturan el caballo para no perder material sin compensacion.',
          ventaja: 'Recupera la pieza perdida.',
          debilidad: 'Al abandonar la septima fila, el alfil de h7 se queda sin ninguna defensa.'
        }
      },
      {
        color: 'w',
        san: 'Rxh7',
        explain: {
          idea: 'La otra torre blanca captura el alfil, que quedo indefenso por la sobrecarga.',
          ventaja: 'Blancas terminan la combinacion con caballo y alfil ganados a cambio de una torre -- claramente a favor.',
          debilidad: 'Ninguna: es el resultado natural de explotar la sobrecarga.'
        }
      }
    ]
  },
  {
    id: 'h04-problema-desviacion-dama',
    name: 'Desviación de la dama defensora',
    tema: 'Desviación',
    nivel: 3,
    userColor: 'w',
    startFen: '1R4qk/6p1/8/7Q/8/8/8/6K1 w - - 0 1',
    overview: 'La dama negra es la unica pieza que vigila las casillas ' +
      'clave junto al rey. Blancas la desvian de su puesto con una ' +
      'captura forzada: el rey tiene que recapturar, y con la dama ' +
      'fuera de juego el resto de la partida queda decidido.',
    moves: [
      {
        color: 'w',
        san: 'Rxg8+',
        explain: {
          idea: 'La torre captura la dama con jaque, desviandola por la fuerza de su puesto defensivo.',
          ventaja: 'El rey no tiene ninguna otra casilla disponible (esta encerrado por su propio peon y por la dama blanca que vigila h7): debe recapturar.',
          debilidad: 'Blancas entregan la torre a cambio de la dama -- una ganancia de material clara (dama por torre).'
        }
      },
      {
        color: 'b',
        san: 'Kxg8',
        explain: {
          idea: 'Unica jugada legal: el rey recaptura la torre.',
          ventaja: 'Ninguna: jugada totalmente forzada.',
          debilidad: 'Negras se quedan sin dama, con solo un peon como compensacion por la torre perdida -- una perdida de material decisiva.'
        }
      }
    ]
  },
  {
    id: 'h04-problema-mate-en-2',
    name: 'Mate en 2: la última casilla',
    tema: 'Mate en 2',
    nivel: 3,
    userColor: 'w',
    startFen: '8/8/5Q2/8/8/5K2/8/7k w - - 0 1',
    overview: 'El rey negro ya esta arrinconado en h1, con la dama ' +
      'blanca vigilando de cerca. Blancas necesitan solo dos jugadas ' +
      'para completar el mate sin arriesgar un ahogado.',
    moves: [
      {
        color: 'w',
        san: 'Kg3',
        explain: {
          idea: 'El rey blanco se acerca a controlar la ultima casilla que le falta cubrir junto al rincon.',
          ventaja: 'Prepara el jaque mate de la siguiente jugada sin dejar al rey negro ninguna via de escape ni provocar un ahogado.',
          debilidad: 'Ninguna: es la unica jugada que progresa sin arriesgar nada.'
        }
      },
      {
        color: 'b',
        san: 'Kg1',
        explain: {
          idea: 'Unica casilla legal disponible para el rey negro.',
          ventaja: 'Ninguna: jugada totalmente forzada.',
          debilidad: 'A partir de aqui, cualquier jaque de la dama por la primera fila, apoyado por el rey blanco, es mate.'
        }
      },
      {
        color: 'w',
        san: 'Qa1#',
        explain: {
          idea: 'La dama da jaque mate por la primera fila.',
          ventaja: 'Jaque mate: el rey blanco controla f1, f2 y g2, y la dama cubre toda la primera fila.',
          debilidad: 'Ninguna: es el resultado de la maniobra de dos jugadas.'
        }
      }
    ]
  },

  // ============================================================
  // NIVEL 4 -- EXPERTO
  // ============================================================
  {
    id: 'h04-problema-mate-sofocado',
    name: 'Mate sofocado -- el Legado de Philidor',
    tema: 'Mate sofocado (partida clasica)',
    nivel: 4,
    userColor: 'w',
    startFen: '5r1k/6pp/4Q3/6N1/8/8/5PPP/6K1 w - - 0 1',
    overview: 'El patron mas celebrado del ajedrez con caballo: la ' +
      'idea aparece ya analizada en el manuscrito de Lucena (1497) ' +
      'y quedo fijada en la literatura tras el tratado de Philidor ' +
      'de 1749, de ahi el nombre "Legado de Philidor". El rey negro ' +
      'esta en la esquina, protegido por sus propios peones y una ' +
      'torre en f8 -- exactamente las piezas que, tras un doble ' +
      'jaque y un sacrificio de dama, terminaran por asfixiarlo. Es ' +
      'una combinacion de cuatro jugadas exactas, sin margen de ' +
      'error en el orden.',
    moves: [
      {
        color: 'w',
        san: 'Nf7+',
        explain: {
          idea: 'El caballo da jaque, forzando al rey a la unica casilla que sirve para el resto de la combinacion.',
          ventaja: 'El rey no puede capturar el caballo (no esta a su alcance) ni tiene mas que una casilla razonable.',
          debilidad: 'Ninguna: es el primer eslabon exacto de la combinacion -- si se juega en otro orden, el mate no funciona.'
        }
      },
      {
        color: 'b',
        san: 'Kg8',
        explain: {
          idea: 'Unica casilla disponible para salir del jaque.',
          ventaja: 'Ninguna: jugada forzada.',
          debilidad: 'El rey queda exactamente donde el caballo necesita que este para el doble jaque siguiente.'
        }
      },
      {
        color: 'w',
        san: 'Nh6+',
        explain: {
          idea: 'El caballo salta dando jaque doble: jaque de caballo y, al mismo tiempo, jaque descubierto de la dama por la columna e.',
          ventaja: 'Con doble jaque, el rey no puede bloquear ni capturar ninguna de las dos piezas: solo puede moverse, y solo le queda una casilla.',
          debilidad: 'Ninguna: es el segundo eslabon exacto -- el doble jaque es lo que fuerza la vuelta a la esquina.'
        }
      },
      {
        color: 'b',
        san: 'Kh8',
        explain: {
          idea: 'Unica casilla legal ante el doble jaque: de vuelta a la esquina.',
          ventaja: 'Ninguna: jugada totalmente forzada.',
          debilidad: 'El rey queda completamente rodeado por sus propios peones y su propia torre, la condicion exacta que hace falta para el sacrificio final.'
        }
      },
      {
        color: 'w',
        san: 'Qg8+',
        explain: {
          idea: 'Sacrificio de dama: se entrega en g8 con jaque, sabiendo que la unica respuesta legal es capturar con la torre.',
          ventaja: 'Al capturar con la torre, esta bloquea la ultima casilla de escape del propio rey -- el rey queda completamente sofocado por sus propias piezas.',
          debilidad: 'Blancas entregan la dama, pero a cambio de un mate forzado inmediato: es la jugada que da nombre al patron entero.'
        }
      },
      {
        color: 'b',
        san: 'Rxg8',
        explain: {
          idea: 'Unica jugada legal: la torre recaptura la dama.',
          ventaja: 'Recupera la dama blanca.',
          debilidad: 'Al capturar en g8, la propia torre tapa la ultima casilla de escape que le quedaba al rey -- ahora esta completamente sofocado.'
        }
      },
      {
        color: 'w',
        san: 'Nf7#',
        explain: {
          idea: 'El caballo regresa a f7 dando jaque mate: el rey esta completamente rodeado por sus propios peones (g7, h7) y su propia torre (g8), sin ninguna casilla libre.',
          ventaja: 'Jaque mate: es la definicion misma de "mate sofocado" -- un rey asfixiado por su propio ejercito, con el caballo como unica pieza capaz de dar el golpe final.',
          debilidad: 'Ninguna: es el desenlace de uno de los patrones tacticos mas antiguos y celebrados del ajedrez.'
        }
      }
    ]
  },
  {
    id: 'h04-problema-atraccion-peon',
    name: 'Atracción del rey a una casilla forzada',
    tema: 'Atracción',
    nivel: 4,
    userColor: 'w',
    startFen: 'r3k3/3p4/2P5/3N4/8/8/8/6K1 w - - 0 1',
    overview: 'Un jaque de peon atrae al rey negro a una casilla muy ' +
      'concreta -- y una vez alli, un caballo esperando en la ' +
      'sombra da una horquilla que gana la torre.',
    moves: [
      {
        color: 'w',
        san: 'cxd7+',
        explain: {
          idea: 'El peon captura con jaque, atrayendo al rey negro exactamente a la casilla d7.',
          ventaja: 'Aunque el rey tiene otras casillas legales, capturar el peon parece la jugada mas natural (gana un peon gratis en apariencia).',
          debilidad: 'Ninguna para blancas: cualquier respuesta de negras deja el peon o la atraccion funcionando a favor de blancas.'
        }
      },
      {
        color: 'b',
        san: 'Kxd7',
        explain: {
          idea: 'El rey captura el peon, atraido a la casilla d7.',
          ventaja: 'Gana un peon.',
          debilidad: 'Esa casilla concreta esta vigilada por un caballo que ya prepara una horquilla devastadora.'
        }
      },
      {
        color: 'w',
        san: 'Nb6+',
        explain: {
          idea: 'El caballo da jaque desde b6, atacando al mismo tiempo la torre de a8 -- la horquilla que justificaba toda la maniobra.',
          ventaja: 'El rey debe moverse, dejando la torre indefensa.',
          debilidad: 'Ninguna: el caballo esta a salvo en b6.'
        }
      },
      {
        color: 'b',
        san: 'Kc7',
        explain: {
          idea: 'El rey se ve obligado a salir del jaque.',
          ventaja: 'Ninguna: jugada forzada.',
          debilidad: 'La torre a8 queda perdida.'
        }
      },
      {
        color: 'w',
        san: 'Nxa8+',
        explain: {
          idea: 'El caballo captura la torre, completando la combinacion de atraccion y horquilla.',
          ventaja: 'Blancas ganan una torre completa, y encima con jaque.',
          debilidad: 'Ninguna: es el resultado final de la combinacion.'
        }
      }
    ]
  },
  {
    id: 'h04-problema-subpromocion-caballo',
    name: 'Subpromoción a caballo con jaque',
    tema: 'Promoción forzada',
    nivel: 4,
    userColor: 'w',
    startFen: '8/5P1k/6r1/8/8/8/8/K7 w - - 0 1',
    overview: 'Coronar en dama aqui no logra nada especial -- la dama ' +
      'ni siquiera da jaque desde esa casilla. Pero coronar en ' +
      'caballo si da jaque, gracias a la forma de L en que se mueve, ' +
      'y de paso ataca a la torre negra: una subpromocion que gana ' +
      'material donde la dama se habria quedado corta.',
    moves: [
      {
        color: 'w',
        san: 'f8=N+',
        explain: {
          idea: 'El peon corona en caballo en vez de en dama: solo el caballo, por su movimiento en L, da jaque al rey desde esta casilla concreta.',
          ventaja: 'Ademas del jaque, el caballo ataca tambien la torre de g6 -- una horquilla obtenida gracias a la subpromocion.',
          debilidad: 'Cambia una dama en potencia por un caballo, pero aqui es la unica pieza que logra el jaque, asi que merece la pena.'
        }
      },
      {
        color: 'b',
        san: 'Kh6',
        explain: {
          idea: 'El rey se ve obligado a salir del jaque.',
          ventaja: 'Se acerca a intentar recuperar el caballo despues.',
          debilidad: 'La torre de g6 queda atacada por el caballo mientras tanto.'
        }
      },
      {
        color: 'w',
        san: 'Nxg6',
        explain: {
          idea: 'El caballo captura la torre.',
          ventaja: 'Blancas ganan una torre; aunque el rey negro pueda recapturar el caballo despues, el balance sigue siendo favorable a blancas (torre por caballo).',
          debilidad: 'El caballo puede perderse si el rey lo recaptura, pero el saldo material sigue siendo ganancia neta para blancas.'
        }
      }
    ]
  },

  // ============================================================
  // NIVEL 5 -- TORNEO (1700-2200), anadido S7
  // ============================================================
  // Los niveles 1-4 de arriba se quedan cortos frente a lo que
  // Miguel Angel necesita entrenar de verdad (senalado explicitamente
  // en S7): combinaciones reales de varias jugadas, no patrones de
  // mate en 1-2 de iniciacion. Los 3 problemas de este bloque son
  // partidas reales completas, extremadamente documentadas,
  // reproducidas desde la jugada 1 y verificadas con chess.js real
  // (node) antes de escribirse aqui -- no solo el fragmento final,
  // la partida entera desde el inicio hasta confirmar que el FEN de
  // arranque del problema es exactamente el que resulta de esas
  // jugadas reales. Los dos finales en jaque mate se verificaron
  // ademas con isCheckmate(), no solo con la notacion "#" del SAN.
  {
    id: 'h04-problema-mate-reti-tartakower',
    name: 'Reti vs Tartakower -- la miniatura mas famosa de la historia',
    tema: 'Sacrificio de dama + mate con alfil (partida real, Viena 1910)',
    nivel: 5,
    userColor: 'w',
    startFen: 'rnb1kb1r/pp3ppp/2p5/4q3/4n3/3Q4/PPPB1PPP/2KR1BNR w kq - 0 9',
    overview: 'Posicion real tras 8...Cxe4 de la partida Reti-Tartakower, ' +
      'Viena 1910 -- probablemente la miniatura mas reproducida de toda ' +
      'la literatura ajedrecistica. Negras acaba de capturar un caballo, ' +
      'aparentemente ganando la partida con comodidad: blancas no ' +
      'parece tener compensacion visible por el peon sacrificado en la ' +
      'apertura. Pero la dama negra, aunque domina el centro del ' +
      'tablero, ha dejado la casilla d8 sin ninguna vigilancia real. ' +
      'Mate forzado en 3 jugadas.',
    moves: [
      { color: 'w', san: 'Qd8+', explain: { idea: 'Sacrificio de dama a la casilla d8, forzando al rey a capturar porque es la unica pieza que puede hacerlo (nada mas cubre esa casilla ni puede interponerse).', ventaja: 'Aunque entrega la pieza mas valiosa del tablero, arrastra al rey negro al centro exacto donde el resto de piezas blancas lo necesitan.', debilidad: 'Ninguna: es el sacrificio que hace funcionar toda la combinacion final.' } },
      { color: 'b', san: 'Kxd8', explain: { idea: 'Unica jugada legal: el rey debe capturar la dama, no hay bloqueo ni otra pieza que pueda hacerlo.', ventaja: 'Gana la dama, la pieza mas valiosa del tablero.', debilidad: 'El rey queda expuesto en el centro exacto de la octava fila, sin ninguna pieza propia cerca para protegerlo.' } },
      { color: 'w', san: 'Bg5+', explain: { idea: 'Jaque de alfil por la diagonal, cortando por completo la retirada del rey hacia el flanco de dama.', ventaja: 'El rey solo tiene una casilla razonable para escapar del jaque (c7); cualquier otra opcion pierde mas material de forma inmediata.', debilidad: 'Ninguna: prepara exactamente el mate de la jugada siguiente.' } },
      { color: 'b', san: 'Kc7', explain: { idea: 'Unica casilla razonable para salir del jaque sin perder mas material de inmediato.', ventaja: 'Ninguna real: el rey sigue completamente expuesto, ahora en la septima fila.', debilidad: 'Esa casilla exacta es la que el alfil blanco necesita para el mate final -- controla d8 sin que ninguna pieza negra pueda interponerse ni capturar.' } },
      { color: 'w', san: 'Bd8#', explain: { idea: 'El alfil vuelve a d8 dando jaque mate, apoyado por el resto de piezas blancas que ya cubrian el resto de casillas de escape del rey.', ventaja: 'Jaque mate: el rey no tiene ninguna casilla libre, no hay pieza negra que pueda capturar el alfil ni interponerse.', debilidad: 'Ninguna: es el resultado final de la combinacion.' } }
    ]
  },

  {
    id: 'h04-problema-inmortal-anderssen',
    name: 'La Partida Inmortal -- Anderssen vs Kieseritzky, 1851',
    tema: 'Sacrificio de dama + mate puro con piezas menores (partida real, Londres 1851)',
    nivel: 5,
    userColor: 'w',
    startFen: 'r1bk2nr/p2p1pNp/n2B4/1p1NP2P/6P1/3P1Q2/P1P1K3/q5b1 w - - 1 22',
    overview: 'Posicion real tras 21...Kd8 de la Partida Inmortal, ' +
      'Anderssen-Kieseritzky, Londres 1851 -- probablemente la partida ' +
      'mas reproducida de toda la historia del ajedrez. Blancas ya ha ' +
      'entregado un alfil y las dos torres a cambio de la iniciativa; ' +
      'negras tiene dama, dos torres y un alfil de ventaja material. ' +
      'Pero el rey negro esta completamente solo en el centro del ' +
      'tablero, y a blancas le bastan dos jugadas mas con sus tres ' +
      'piezas menores restantes (dos caballos y un alfil) para dar ' +
      'mate puro -- cada pieza blanca cubre exactamente una casilla de ' +
      'escape, sin ninguna casilla libre de sobra.',
    moves: [
      { color: 'w', san: 'Qf6+', explain: { idea: 'Sacrificio de dama en f6, dando jaque y obligando a negras a decidir con que pieza tapa el jaque -- solo el caballo de g8 puede hacerlo.', ventaja: 'Aunque entrega la dama, la unica respuesta posible bloquea la unica casilla de escape que le quedaba al rey negro.', debilidad: 'Ninguna: es el sacrificio que hace posible el mate de la jugada siguiente.' } },
      { color: 'b', san: 'Nxf6', explain: { idea: 'Unica jugada legal: el caballo de g8 debe capturar la dama para parar el jaque, no hay otra pieza que pueda interponerse.', ventaja: 'Gana la dama, la pieza mas valiosa del tablero -- negras termina la combinacion con una ventaja material enorme.', debilidad: 'Esa captura exacta tapa la casilla f6, la unica salida que le quedaba al rey -- ahora esta completamente atrapado.' } },
      { color: 'w', san: 'Be7#', explain: { idea: 'El alfil da jaque mate desde e7: junto con el caballo de d5 y el propio caballo negro (que le tapa la salida a su rey en f6), cada casilla de escape queda cubierta por exactamente una razon -- un mate puro de libro de texto.', ventaja: 'Jaque mate pese a una inferioridad material aplastante (dos caballos y un alfil contra dama, dos torres y un alfil de negras) -- la coordinacion de esas tres piezas menores basta.', debilidad: 'Ninguna: es el resultado final de la combinacion, la imagen mas reproducida de toda la historia del ajedrez.' } }
    ]
  },

  {
    id: 'h04-problema-molino-torre-lasker',
    name: 'El Molino -- Torre vs Lasker, Moscu 1925',
    tema: 'Jaque a la descubierta en cadena para ganar material (partida real, Moscu 1925)',
    nivel: 5,
    userColor: 'w',
    startFen: 'r3rnk1/pb3pp1/3pp2p/1q4BQ/1P1P4/4N1R1/P4PPP/4R1K1 w - - 4 25',
    overview: 'Posicion real tras 24...Db5 de la partida Torre-Lasker, ' +
      'Moscu 1925, el ejemplo mas famoso de todo el ajedrez del ' +
      '"molino": una cadena de jaques a la descubierta en la que la ' +
      'pieza que se aparta para dar el jaque va comiendo material en ' +
      'cada vuelta, sin que el bando defensor pueda hacer nada mas que ' +
      'mover el rey de un lado a otro. Emanuel Lasker, ex campeon del ' +
      'mundo, tiene la dama y una posicion solida en apariencia -- pero ' +
      'el alfil de g5 y la torre de g3 estan a punto de desmontarle ' +
      'todas las piezas del flanco de rey una por una.',
    moves: [
      { color: 'w', san: 'Bf6', explain: { idea: 'El alfil se aparta de la diagonal larga y ataca la dama negra, abriendo al mismo tiempo la descubierta de la torre de g3 contra el rey en g8 -- el primer giro del molino.', ventaja: 'Doble amenaza: la dama negra esta atacada, y el jaque a la descubierta que sigue empieza a comer material sin que negras pueda evitarlo.', debilidad: 'Ninguna real -- negras se ve obligada a mover la dama a una casilla que no soluciona el problema de fondo.' } },
      { color: 'b', san: 'Qxh5', explain: { idea: 'Negras captura el peon de h5 con la dama, la unica forma de mantenerla algo activa fuera del ataque directo del alfil.', ventaja: 'Gana un peon y mantiene la dama en el tablero, en apariencia activa sobre la diagonal.', debilidad: 'No hace nada por defender al rey -- el jaque a la descubierta con la torre de g3 cae de inmediato, y ese es el verdadero problema.' } },
      { color: 'w', san: 'Rxg7+', explain: { idea: 'Primer giro del molino: la torre se aparta con jaque (descubierta del alfil de f6 sobre el rey g8) y de paso captura un peon.', ventaja: 'Jaque a la descubierta -- el rey esta obligado a moverse, y la torre sigue viva en g7 amenazando comer mas material en la siguiente vuelta.', debilidad: 'Ninguna; es el mecanismo central de todo el molino.' } },
      { color: 'b', san: 'Kh8', explain: { idea: 'Unica casilla razonable para salir del jaque sin perder la torre de f8 de inmediato.', ventaja: 'Ninguna real -- el rey solo se desplaza una casilla, sin escapar del patron.', debilidad: 'Deja a la torre blanca en g7 completamente libre para seguir comiendo peones con jaque en la siguiente vuelta.' } },
      { color: 'w', san: 'Rxf7+', explain: { idea: 'Segunda vuelta del molino: la torre vuelve a apartarse con jaque a la descubierta, comiendo otro peon.', ventaja: 'Cada vuelta del molino suma material sin que negras pueda hacer nada mas que mover el rey.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'Kg8', explain: { idea: 'De vuelta a g8, la unica casilla razonable.', ventaja: 'Ninguna.', debilidad: 'El rey vuelve a la casilla de partida, y el molino sigue girando exactamente igual.' } },
      { color: 'w', san: 'Rg7+', explain: { idea: 'La torre regresa a g7 con jaque a la descubierta otra vez, sin comer material esta vez -- solo reposiciona para la siguiente vuelta.', ventaja: 'Mantiene el patron de jaques con ganancia de material controlada; blancas decide el ritmo de la combinacion.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'Kh8', explain: { idea: 'Unica casilla razonable, identica a la jugada anterior de este tipo.', ventaja: 'Ninguna.', debilidad: 'El patron se repite exactamente igual.' } },
      { color: 'w', san: 'Rxb7+', explain: { idea: 'Tercera vuelta del molino: la torre se aparta de nuevo con jaque a la descubierta, esta vez comiendo el alfil negro en b7.', ventaja: 'El material ganado ya es decisivo: dos peones y un alfil, con el molino todavia sin terminar.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'Kg8', explain: { idea: 'Unica casilla razonable, identica a las anteriores.', ventaja: 'Ninguna.', debilidad: 'Ninguna nueva; el patron continua.' } },
      { color: 'w', san: 'Rg7+', explain: { idea: 'La torre vuelve a reposicionarse en g7 con jaque a la descubierta, preparando el ultimo giro sobre la dama negra.', ventaja: 'Mantiene la iniciativa total; negras no tiene ni una sola jugada intermedia disponible.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'Kh8', explain: { idea: 'Unica casilla razonable, identica a las anteriores.', ventaja: 'Ninguna.', debilidad: 'Ninguna nueva.' } },
      { color: 'w', san: 'Rg5+', explain: { idea: 'Ultimo giro del molino: en vez de volver a g7, la torre se desplaza a g5 con jaque a la descubierta, alineandose para atacar directamente a la dama negra en la proxima jugada.', ventaja: 'Cambia el patron justo en el momento decisivo -- ya no busca mas material menor, sino la propia dama.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'Kh7', explain: { idea: 'El rey se ve forzado a moverse a una casilla distinta esta vez, ya que g8 no para el jaque de la torre en g5.', ventaja: 'Ninguna real.', debilidad: 'Deja la dama de h5 completamente indefendida frente a la torre.' } },
      { color: 'w', san: 'Rxh5', explain: { idea: 'La torre captura la dama negra directamente, cerrando el molino con la pieza mas valiosa del tablero.', ventaja: 'Balance final del molino completo: blancas gana dama, alfil y dos peones a cambio de nada, con el rey negro reducido a mero espectador durante toda la combinacion.', debilidad: 'Ninguna: es el resultado final de la combinacion -- el ejemplo de libro de texto de por que un molino bien ejecutado es letal.' } }
    ]
  },

  {
    id: 'h04-problema-opera-morphy',
    name: 'La Partida de la Opera -- Morphy vs Duque de Brunswick y Conde Isouard, 1858',
    tema: 'Sacrificio de dama + mate con torre (partida real, Paris 1858)',
    nivel: 5,
    userColor: 'w',
    startFen: '4kb1r/p2n1ppp/4q3/4p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 0 16',
    overview: 'Posicion real tras 15...Cxd7 de la celebre partida de ' +
      'consulta jugada por Morphy en un palco de la Opera de Paris, ' +
      '1858, contra el Duque de Brunswick y el Conde Isouard. Blancas ' +
      'ha desarrollado todas sus piezas en 15 jugadas mientras negras ' +
      'apenas ha movido peones y una dama que ya va por su tercera ' +
      'casilla. El resultado: mate forzado en solo 2 jugadas mas, con ' +
      'un sacrificio de dama que despeja la ultima casilla que faltaba.',
    moves: [
      { color: 'w', san: 'Qb8+', explain: { idea: 'Sacrificio de dama en b8, dando jaque -- el rey no puede moverse a ninguna casilla libre y solo el caballo de d7 puede interponerse capturando.', ventaja: 'Aunque entrega la dama, obliga a negras a tapar el jaque con la unica pieza que le queda cerca del rey, dejando la casilla d8 completamente vacia.', debilidad: 'Ninguna: es el sacrificio que hace posible el mate de la jugada siguiente.' } },
      { color: 'b', san: 'Nxb8', explain: { idea: 'Unica jugada legal: el caballo debe capturar la dama para parar el jaque.', ventaja: 'Gana la dama, la pieza mas valiosa del tablero.', debilidad: 'El caballo abandona la vigilancia de la casilla d8, la unica pieza negra que la controlaba.' } },
      { color: 'w', san: 'Rd8#', explain: { idea: 'La torre entra en d8 dando jaque mate, apoyada por el resto de piezas blancas que ya cubrian el resto de casillas de escape del rey.', ventaja: 'Jaque mate con una sola torre, tras haber sacrificado la dama -- el ejemplo de libro de texto de por que el desarrollo rapido de piezas pesa mas que el material cuando el rey rival se ha quedado atras.', debilidad: 'Ninguna: es el resultado final de la combinacion.' } }
    ]
  },

  {
    id: 'h04-problema-perenne-anderssen',
    name: 'La Partida Perenne -- Anderssen vs Dufresne, 1852',
    tema: 'Sacrificio de dama + mate con dos alfiles (partida real, Berlin 1852)',
    nivel: 5,
    userColor: 'w',
    startFen: '1r2k1r1/pbppnp1p/1b3P2/8/Q7/B1PB1q2/P4PPP/3R2K1 w - - 0 21',
    overview: 'Posicion real tras 20...Cxe7 de la Partida Perenne, ' +
      'Anderssen-Dufresne, Berlin 1852 -- considerada junto con la ' +
      'Inmortal una de las dos obras maestras de Anderssen. Negras ' +
      'acaba de capturar una torre y tiene la dama activa en f3, ' +
      'aparentemente con la iniciativa. Pero el rey negro sigue en el ' +
      'centro sin enrocar, y blancas tiene mate forzado en 4 jugadas ' +
      'con un nuevo sacrificio de dama seguido de una persecucion del ' +
      'rey con los dos alfiles.',
    moves: [
      { color: 'w', san: 'Qxd7+', explain: { idea: 'Segundo sacrificio de dama de la partida: captura en d7 con jaque, arrastrando al rey negro fuera de su ultima casilla segura.', ventaja: 'Fuerza la respuesta del rey (es la unica jugada legal), llevandolo al centro exacto del tablero donde los dos alfiles blancos ya apuntan.', debilidad: 'Ninguna: es el sacrificio que desencadena toda la persecucion final.' } },
      { color: 'b', san: 'Kxd7', explain: { idea: 'Unica jugada legal: el rey debe capturar la dama, no hay bloqueo ni otra pieza que pueda hacerlo.', ventaja: 'Gana la dama, la pieza mas valiosa del tablero.', debilidad: 'El rey queda completamente expuesto en el centro del tablero, justo en la diagonal de los dos alfiles blancos.' } },
      { color: 'w', san: 'Bf5+', explain: { idea: 'Jaque de alfil, cortando la retirada del rey hacia las casillas del flanco de dama.', ventaja: 'El rey solo tiene una casilla razonable (e8); cualquier otra opcion pierde mas material de inmediato.', debilidad: 'Ninguna: sigue empujando al rey hacia la red de mate.' } },
      { color: 'b', san: 'Ke8', explain: { idea: 'Unica casilla razonable para salir del jaque.', ventaja: 'Ninguna real: el rey solo retrocede una casilla.', debilidad: 'Sigue en la misma zona que el segundo alfil blanco necesita para completar la persecucion.' } },
      { color: 'w', san: 'Bd7+', explain: { idea: 'El segundo alfil se suma con jaque, empujando al rey hacia la unica casilla que le queda.', ventaja: 'El rey se ve forzado a una casilla donde ya no tiene ninguna huida real en la jugada siguiente.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'Kf8', explain: { idea: 'Unica casilla razonable para salir del jaque.', ventaja: 'Ninguna real.', debilidad: 'Esa casilla exacta es la que necesita el alfil blanco para el mate final -- el propio caballo negro en e7 le tapa a su rey la salida por esa casilla.' } },
      { color: 'w', san: 'Bxe7#', explain: { idea: 'El alfil captura el caballo de e7 dando jaque mate, junto con el resto de piezas blancas que ya cubrian el resto de casillas de escape del rey.', ventaja: 'Jaque mate: cierra la combinacion completa, con dos sacrificios de dama a lo largo de la partida resueltos con la coordinacion final de los dos alfiles.', debilidad: 'Ninguna: es el resultado final de la combinacion, la segunda obra maestra de Anderssen junto con la Inmortal.' } }
    ]
  },

  {
    id: 'h04-problema-lluvia-oro-marshall',
    name: 'La Lluvia de Oro -- Levitsky vs Marshall, Breslau 1912',
    tema: 'Sacrificio de dama triple e irrechazable (partida real, Breslau 1912)',
    nivel: 5,
    userColor: 'b',
    startFen: '5rk1/pp4pp/4p3/2R3Q1/3n4/2q4r/P1P2PPP/5RK1 b - - 1 23',
    overview: 'Posicion real tras 23.Tc5 de Levitsky-Marshall, Breslau ' +
      '1912 -- la jugada mas famosa de Frank Marshall, conocida como ' +
      '"la lluvia de oro" porque el publico llovio monedas sobre el ' +
      'tablero al verla. La torre blanca acaba de atacar la dama ' +
      'negra en c3. La respuesta obvia seria mover la dama a un sitio ' +
      'seguro -- pero hay una jugada que ofrece la dama de tres formas ' +
      'distintas, y ninguna de las tres captura es aceptable para ' +
      'blancas.',
    moves: [
      { color: 'b', san: 'Qg3', explain: { idea: 'Ofrece la dama a la torre de f1, al peon de f2 y a la propia dama blanca en g5 -- las tres formas de capturarla pierden para blancas.', ventaja: 'Si hxg3 entonces Ne2# (mate); si fxg3 entonces Ne2+ seguido de mate; y si blancas captura con la dama (Qxg3), el caballo entra con jaques en cadena y termina ganando la torre, dejando a negras con ventaja decisiva de material.', debilidad: 'Ninguna real: es la unica jugada que blancas puede aceptar sin perder de inmediato, y aun asi negras sale ganando material.' } },
      { color: 'w', san: 'Qxg3', explain: { idea: 'De las tres capturas posibles, esta es la unica que evita el mate inmediato -- las otras dos (hxg3 y fxg3) permiten Ne2# a continuacion.', ventaja: 'Evita el mate inmediato y gana la dama negra.', debilidad: 'No evita la perdida de material que viene con los jaques encadenados del caballo -- solo cambia un mate rapido por una desventaja material decisiva.' } },
      { color: 'b', san: 'Ne2+', explain: { idea: 'El caballo entra con jaque, iniciando la cadena que recupera material.', ventaja: 'Jaque forzado: el rey blanco solo tiene una casilla.', debilidad: 'Ninguna.' } },
      { color: 'w', san: 'Kh1', explain: { idea: 'Unica casilla legal para salir del jaque.', ventaja: 'Ninguna real.', debilidad: 'Deja al caballo negro seguir la cadena de jaques sin ningun impedimento.' } },
      { color: 'b', san: 'Nxg3+', explain: { idea: 'El caballo captura la dama blanca con jaque, recuperando la pieza que parecia perdida.', ventaja: 'Recupera la dama: el balance material pasa a ser claramente favorable para negras.', debilidad: 'Ninguna.' } },
      { color: 'w', san: 'Kg1', explain: { idea: 'Unica casilla razonable para salir del jaque.', ventaja: 'Ninguna real.', debilidad: 'Deja al caballo negro con una ultima jugada disponible antes de que blancas pueda recapturarlo.' } },
      { color: 'b', san: 'Nxf1', explain: { idea: 'El caballo remata capturando tambien la torre de f1 antes de retirarse.', ventaja: 'Balance final de toda la combinacion: negras entrega la dama pero recupera dama y torre, quedando con ventaja material decisiva y posicion ganadora.', debilidad: 'El caballo queda momentaneamente colgado en f1, pero el peon g2 lo captura de vuelta sin que eso cambie el balance ya asegurado.' } },
      { color: 'w', san: 'gxh3', explain: { idea: 'Blancas recupera el caballo capturando tambien la torre que negras habia dejado en h3 varias jugadas atras, el unico consuelo material posible en una posicion ya perdida.', ventaja: 'Reduce ligeramente la sangria material.', debilidad: 'Ninguna que cambie el resultado: negras sigue con ventaja decisiva y partida totalmente ganada -- blancas termino resignando poco despues en la partida real.' } }
    ]
  },

  {
    id: 'h04-problema-inmortal-rubinstein',
    name: 'La Inmortal de Rubinstein -- Rotlewi vs Rubinstein, Lodz 1907',
    tema: 'Doble sacrificio de torre y dama (partida real, Lodz 1907)',
    nivel: 5,
    userColor: 'b',
    startFen: '2rr2k1/1b3ppp/pb2p3/1p2P3/1P2BPnq/P1N3P1/1B2Q2P/R4R1K b - - 0 22',
    overview: 'Posicion real tras 22.g3 de Rotlewi-Rubinstein, Lodz ' +
      '1907, bautizada por Hans Kmoch como "la Inmortal de Rubinstein" ' +
      'y descrita por Kasparov como la creacion mas famosa de ' +
      'Rubinstein. Blancas acaba de tapar el jaque de la dama negra en ' +
      'h4 con g3, en apariencia resolviendo el ataque directo. Pero ' +
      'negras tiene preparado un doble sacrificio de torre que blancas ' +
      'no puede aceptar de ninguna forma sin perder.',
    moves: [
      { color: 'b', san: 'Rxc3', explain: { idea: 'Primer sacrificio: la torre captura el caballo, abriendo la columna c y quitandole a blancas una pieza defensiva clave junto al rey.', ventaja: 'Si blancas recaptura con el alfil (Bxc3), sigue Bxe4+ y el ataque continua igual de fuerte; blancas prefiere capturar la dama con gxh4 para intentar quedarse con la mayor pieza posible.', debilidad: 'Ninguna real: es el primer paso de una combinacion completamente calculada.' } },
      { color: 'w', san: 'gxh4', explain: { idea: 'Blancas captura la dama negra, la respuesta mas natural ante el sacrificio de torre.', ventaja: 'Gana la dama, en apariencia la pieza mas valiosa del tablero.', debilidad: 'Deja completamente indefensa la casilla d2 y la diagonal del alfil de b7, la base de todo el segundo sacrificio que viene a continuacion.' } },
      { color: 'b', san: 'Rd2', explain: { idea: 'Segundo sacrificio, el golpe decisivo: la torre entra en d2 amenazando mate y atacando la dama blanca al mismo tiempo, sin que blancas tenga ninguna defensa satisfactoria.', ventaja: 'Doble amenaza imposible de parar por completo: si la dama no captura, el mate llega de todas formas; si captura, el alfil de b7 entra con jaque y el ataque continua con la ultima torre negra libre.', debilidad: 'Ninguna: es la jugada que decide la partida, considerada uno de los golpes mas bellos de la historia del ajedrez.' } },
      { color: 'w', san: 'Qxd2', explain: { idea: 'Unica forma de evitar el mate inmediato: la dama captura la torre.', ventaja: 'Evita el mate directo y gana una torre.', debilidad: 'Abre la diagonal para el alfil de b7, que entra con jaque en la jugada siguiente -- el ataque negro continua sin perder ni un tiempo.' } },
      { color: 'b', san: 'Bxe4+', explain: { idea: 'El alfil entra con jaque por la diagonal que el sacrificio de torre acaba de despejar.', ventaja: 'Jaque forzado que arrastra a la dama blanca a defender, dejando a negras con la ultima pieza (la otra torre) lista para el golpe final.', debilidad: 'Ninguna.' } },
      { color: 'w', san: 'Qg2', explain: { idea: 'Unica forma razonable de tapar el jaque sin perder mas material de inmediato.', ventaja: 'Detiene el jaque.', debilidad: 'Deja la casilla h3 completamente abierta para la ultima torre negra, que decide la partida en la jugada siguiente.' } },
      { color: 'b', san: 'Rh3', explain: { idea: 'La torre entra en h3, amenazando mate en h2 de forma inevitable -- ninguna pieza blanca puede defender esa casilla sin perder aun mas material.', ventaja: 'Cierra la combinacion completa: negras entrego una torre y la dama, pero recupero un caballo, la propia torre entregada y dejo a blancas sin ninguna defensa razonable frente a la amenaza final. Blancas resignio en esta misma posicion en la partida real.', debilidad: 'Ninguna: es el resultado final de la combinacion.' } }
    ]
  },
  // ============================================================
  // PROBLEMAS DE AJEDREZ -- banco tactico verificado, Lichess (S6)
  // Fuente: database.lichess.org (lichess_db_puzzle.csv.zst, CC0).
  // Filtrado por Miguel Angel (Termux, rating 1700-2200, muestreo por
  // reservorio). Verificado con chess.js real: UCI->SAN desde el
  // startFen correcto (posicion tras la jugada inicial de Lichess).
  // Partidas anonimas: Lichess no da nombres de jugadores en este
  // dataset, solo el enlace GameUrl -- no se inventa autoria.
  // Lote 1 de varios (S6).
  // ============================================================
  {
    id: 'h04-problema-lichess-ykesE',
    name: 'Jaque que aleja al rey y deja una pieza colgada',
    tema: 'Pieza colgada tras jaque forzado',
    nivel: 6,
    rating: 1748,
    userColor: 'b',
    startFen: '8/8/2k1Bp2/P4Pp1/4P1n1/5pB1/1r6/3R2K1 b - - 1 51',
    overview: "Posición real de una partida jugada en Lichess (rating 1748). El rey blanco y el alfil de g3 parecen estar en calma, pero un jaque de torre a distancia rompe esa calma: obliga al rey a moverse a una casilla desde la que ya no puede proteger nada, y deja el alfil completamente indefenso.",
    moves: [
      { color: 'b', san: 'Rg2+', explain: { idea: "La torre negra entra en g2 dando jaque, la única pieza que puede hacerlo en esa columna.", ventaja: "Jaque forzado: el rey blanco debe responder antes de ocuparse de cualquier otra cosa.", debilidad: "Ninguna real -- es la jugada que arranca toda la combinación." } },
      { color: 'w', san: 'Kh1', explain: { idea: "Única casilla legal para salir del jaque.", ventaja: "Ninguna real: el rey solo se retira una casilla.", debilidad: "Al alejarse, el rey deja de tener cualquier relación con la casilla g3, donde el alfil blanco se queda sin ninguna pieza que lo proteja." } },
      { color: 'b', san: 'Rxg3', explain: { idea: "La torre negra captura el alfil blanco, ya completamente indefenso tras el jaque anterior.", ventaja: "Gana una pieza completa sin ninguna compensación para blancas.", debilidad: "Ninguna: cierra la combinación con ventaja material decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-NqiJs',
    name: 'Sacrificio de calidad para desnudar al rey blanco',
    tema: 'Ataque al rey con entrega de material',
    nivel: 6,
    rating: 2173,
    userColor: 'b',
    startFen: '4r3/1Q4pk/6rp/p1p5/P3pq2/2P4P/1P3PP1/4RRK1 b - - 0 32',
    overview: "Posición real de una partida jugada en Lichess (rating 2173). Negras tiene la dama activa en f3 y decide forzar la apertura de la columna g con un sacrificio de torre, dejando al rey blanco completamente expuesto en vez de conservar el material.",
    moves: [
      { color: 'b', san: 'Qf3', explain: { idea: "La dama negra se sitúa en f3, amenazando entrar más adelante por la columna g si blancas la abre.", ventaja: "Pieza muy activa, cerca del rey blanco.", debilidad: "Ninguna real: es una jugada de preparación." } },
      { color: 'w', san: 'g3', explain: { idea: "Blancas tapa la amenaza inmediata avanzando el peón a g3.", ventaja: "Bloquea momentáneamente la entrada directa de la dama.", debilidad: "Abre la columna g de forma permanente y crea un objetivo nuevo (el propio peón de g3) que negras va a poder atacar." } },
      { color: 'b', san: 'Rxg3+', explain: { idea: "Negras entrega la torre a cambio de destruir la defensa del rey, capturando el peón de g3 con jaque.", ventaja: "Jaque forzado que arrastra al rey blanco a recapturar con el peón, abriendo aún más su posición.", debilidad: "Pérdida material momentánea de una torre completa a cambio de la iniciativa." } },
      { color: 'w', san: 'fxg3', explain: { idea: "Única forma de responder al jaque: recapturar con el peón.", ventaja: "Recupera la torre entregada.", debilidad: "El rey blanco queda con la estructura de peones del enroque completamente destruida y sin ninguna pieza cerca que lo proteja." } },
      { color: 'b', san: 'Qxg3+', explain: { idea: "La dama negra recaptura en g3 con jaque, entrando en el corazón de la posición blanca.", ventaja: "Recupera un peón adicional y deja al rey blanco extremadamente expuesto, con la iniciativa completa para negras.", debilidad: "El balance material puro (torre por dos peones) no favorece a negras todavía, pero la exposición del rey blanco compensa de sobra -- es la idea central del sacrificio." } }
    ]
  },
  {
    id: 'h04-problema-lichess-WlrCx',
    name: 'Cambio de torres seguido de jaque que gana la segunda torre',
    tema: 'Skewer -- ataque a distancia sobre dos piezas alineadas',
    nivel: 6,
    rating: 1901,
    userColor: 'w',
    startFen: '2kr3r/3p1pp1/pp6/2q1p3/2P2P2/2P2QP1/P5K1/R6R w - - 0 22',
    overview: "Posición real de una partida jugada en Lichess (rating 1901). Blancas cambia primero las torres en la columna h y, tras forzar la salida del rey negro de su refugio con un jaque de dama, recupera la segunda torre negra sin que negras pueda evitarlo: el rey y la torre están alineados en la misma diagonal.",
    moves: [
      { color: 'w', san: 'Rxh8', explain: { idea: "Blancas cambia torres en h8, la única captura posible en esa casilla.", ventaja: "Elimina una pareja de torres, simplificando hacia la posición que blancas necesita para el golpe siguiente.", debilidad: "Ninguna real: es la jugada de preparación del skewer." } },
      { color: 'b', san: 'Rxh8', explain: { idea: "Única recaptura posible para negras.", ventaja: "Recupera la torre cambiada, manteniendo la igualdad material momentánea.", debilidad: "La nueva torre en h8 queda en la misma diagonal larga que el rey negro, sin saberlo todavía." } },
      { color: 'w', san: 'Qa8+', explain: { idea: "La dama blanca entra en a8 con jaque, alineándose con el rey negro y, detrás de él, con la torre de h8.", ventaja: "Jaque forzado que no se puede tapar ni capturar.", debilidad: "Ninguna real: es el golpe que decide la combinación." } },
      { color: 'b', san: 'Kc7', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real: el rey solo se aparta.", debilidad: "Al moverse, el rey deja completamente al descubierto la torre de h8, que sigue en la misma diagonal que la dama blanca." } },
      { color: 'w', san: 'Qxh8', explain: { idea: "La dama blanca captura la segunda torre negra de la partida, aprovechando el skewer.", ventaja: "Gana una segunda torre completa, quedando con ventaja material decisiva.", debilidad: "Ninguna: cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-8lgKs',
    name: 'Jaque a la descubierta que gana la dama',
    tema: 'Ataque a la descubierta',
    nivel: 6,
    rating: 1859,
    userColor: 'b',
    startFen: '1q2r1k1/p2Q3r/5p2/1pB4B/2p1b2P/2P2P2/8/R3K1R1 b Q - 5 31',
    overview: "Posición real de una partida jugada en Lichess (rating 1859). El alfil negro se interpone entre su propia torre y el rey blanco: al moverse dando jaque él mismo, descubre además el ataque de la torre sobre la dama blanca, que queda indefendible.",
    moves: [
      { color: 'b', san: 'Bg6+', explain: { idea: "El alfil negro se mueve a g6 dando jaque directo y, al abandonar la casilla que ocupaba, descubre el ataque de la torre negra sobre la dama blanca en d7.", ventaja: "Doble amenaza: el jaque es inmediato y, además, la dama blanca queda atacada sin ninguna defensa extra posible.", debilidad: "Ninguna real: es la jugada que decide la combinación." } },
      { color: 'w', san: 'Kf1', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real: el rey solo se aparta.", debilidad: "La dama blanca sigue exactamente donde estaba, indefendible ante la torre negra." } },
      { color: 'b', san: 'Rxd7', explain: { idea: "La torre negra captura la dama blanca, que se había quedado sin ninguna pieza que la protegiera tras el jaque a la descubierta.", ventaja: "Gana la dama, la pieza más valiosa del tablero, sin ninguna compensación para blancas.", debilidad: "Ninguna: cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-IEddA',
    name: 'Cadena de jaques que arrastra al rey lejos de su torre',
    tema: 'Desviación mediante jaques en cadena',
    nivel: 6,
    rating: 2003,
    userColor: 'b',
    startFen: '4r3/1R5p/6pk/1p6/2r5/P7/1P1K2PP/3R4 b - - 0 33',
    overview: "Posición real de una partida jugada en Lichess (rating 2003). Con dos torres activas, negras encadena jaques que van empujando al rey blanco fuera de la zona donde puede defender su propia torre de d1, hasta ganarla sin compensación.",
    moves: [
      { color: 'b', san: 'Rd4+', explain: { idea: "La torre negra entra en d4 dando jaque, empezando la cadena que va a alejar al rey blanco de d1.", ventaja: "Jaque forzado, el rey no tiene alternativa a moverse.", debilidad: "Ninguna real: es la primera jugada de la combinación." } },
      { color: 'w', san: 'Kc2', explain: { idea: "Única casilla razonable para salir del jaque sin perder material de inmediato.", ventaja: "Ninguna real.", debilidad: "El rey sigue alejándose de la zona de d1, donde está su propia torre." } },
      { color: 'b', san: 'Rc8+', explain: { idea: "Segundo jaque de la cadena, con la otra torre negra.", ventaja: "Sigue forzando al rey a alejarse, sin darle ni un respiro.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kb3', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda ya completamente desconectado de la columna d, donde su torre se ha quedado sola." } },
      { color: 'b', san: 'Rxd1', explain: { idea: "La torre negra captura la torre blanca de d1, que se había quedado sin ninguna defensa tras la persecución del rey.", ventaja: "Gana una torre completa sin compensación, ventaja material decisiva.", debilidad: "Ninguna: cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-GUI2f',
    name: 'Recuperar la pieza y entrar con jaque',
    tema: 'Pieza colgada + jaque de caballo',
    nivel: 6,
    rating: 1718,
    userColor: 'w',
    startFen: '8/2N1p2p/3pPkp1/8/1np1pP2/2P3P1/6KP/8 w - - 1 32',
    overview: "Posición real de una partida jugada en Lichess (rating 1718), final de piezas menores. Blancas captura primero un caballo suelto y, tras la respuesta de negras, entra con el propio caballo dando jaque desde una casilla fuerte.",
    moves: [
      { color: 'w', san: 'cxb4', explain: { idea: "Blancas captura el caballo negro de b4, que se había quedado sin ninguna pieza que lo defendiera.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'c3', explain: { idea: "Negras avanza el peón a c3, buscando complicar y crear su propia amenaza de coronación.", ventaja: "Peón pasado avanzado, contrajuego real para negras.", debilidad: "No recupera el material perdido ni detiene el plan blanco de continuar activando sus piezas." } },
      { color: 'w', san: 'Nd5+', explain: { idea: "El caballo blanco entra en d5 con jaque, una casilla muy fuerte cerca del rey negro.", ventaja: "Jaque forzado que mantiene la iniciativa blanca además de la ventaja material ya conseguida.", debilidad: "Ninguna real: sigue la combinación con ventaja decisiva para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-qLPPB',
    name: 'Sacrificio de caballo para abrir la columna del peón pasado',
    tema: 'Sacrificio para coronar',
    nivel: 6,
    rating: 1952,
    userColor: 'w',
    startFen: '8/1pp1kp1p/6p1/P2Pb3/2KN4/5P1P/6P1/8 w - - 3 34',
    overview: "Posición real de una partida jugada en Lichess (rating 1952), final de peones y piezas menores. Blancas entrega el caballo con jaque para forzar la captura con el peón b, abriendo así el camino a su propio peón pasado de columna a.",
    moves: [
      { color: 'w', san: 'Nc6+', explain: { idea: "El caballo blanco entra en c6 con jaque, ofreciéndose voluntariamente.", ventaja: "Fuerza una respuesta concreta de negras.", debilidad: "Entrega una pieza completa -- solo se justifica si lo que viene después compensa de sobra." } },
      { color: 'b', san: 'bxc6', explain: { idea: "Única forma razonable de responder al jaque sin perder más material de inmediato.", ventaja: "Gana el caballo entregado.", debilidad: "El peón negro de b7 desaparece de esa columna, dejando el camino libre para el peón pasado blanco de la columna a." } },
      { color: 'w', san: 'a6', explain: { idea: "El peón blanco avanza a a6, ya sin ningún peón negro por delante que pueda detenerlo camino a la coronación.", ventaja: "Peón pasado y protegido, a un paso de decidir la partida por sí solo.", debilidad: "Blancas ha entregado un caballo completo -- el peón debe coronar o la ventaja se pierde." } }
    ]
  },
  {
    id: 'h04-problema-lichess-TzaYa',
    name: 'Mate en 1 con la torre ya infiltrada',
    tema: 'Mate en 1',
    nivel: 6,
    rating: 1749,
    userColor: 'b',
    startFen: '2k4r/ppp5/4R3/3p4/P7/1PQ1PNr1/2P1BKP1/7q b - - 2 25',
    overview: "Posición real de una partida jugada en Lichess (rating 1749). La torre negra ya está infiltrada junto al rey blanco: una sola jugada resuelve la partida con jaque mate inmediato.",
    moves: [
      { color: 'b', san: 'Rxg2#', explain: { idea: "La torre negra captura el peón de g2 dando jaque mate: el rey blanco no tiene ninguna casilla de escape y ninguna pieza puede capturar la torre ni interponerse.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-XnmNN',
    name: 'Torre que se sacrifica para arrastrar al rey al mate',
    tema: 'Mate en 2 con atracción de torre',
    nivel: 6,
    rating: 1793,
    userColor: 'b',
    startFen: '1Bk5/1p2bQ2/2b1p3/PN2P3/3p1Kp1/2P4r/5P2/R3R2r b - - 3 33',
    overview: "Posición real de una partida jugada en Lichess (rating 1793). Negras entrega la torre con jaque para obligar al rey blanco a capturarla, arrastrándolo a una casilla desde la que la segunda torre negra da mate.",
    moves: [
      { color: 'b', san: 'Rf3+', explain: { idea: "La torre negra entra en f3 dando jaque, ofreciéndose a ser capturada.", ventaja: "Fuerza al rey blanco a moverse a una casilla muy concreta.", debilidad: "Entrega una torre completa -- solo se justifica porque lleva directamente al mate." } },
      { color: 'w', san: 'Kxg4', explain: { idea: "Única forma de responder al jaque: el rey captura la torre.", ventaja: "Recupera la torre entregada.", debilidad: "El rey queda exactamente en la casilla que la segunda torre negra necesita para dar jaque mate." } },
      { color: 'b', san: 'Rh4#', explain: { idea: "La segunda torre negra entra en h4 dando jaque mate: el rey blanco no tiene ninguna casilla de escape.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-JGKE5',
    name: 'Jaque de alfil que abre la puerta al mate con torre',
    tema: 'Mate en 3 con ataque de alfil y torre',
    nivel: 6,
    rating: 1864,
    userColor: 'w',
    startFen: 'r4k2/pp4p1/1np1B3/3p4/3B1rP1/2P3q1/PP6/2KR3R w - - 1 33',
    overview: "Posición real de una partida jugada en Lichess (rating 1864). Blancas fuerza al rey negro a una casilla concreta con un jaque de alfil, y a continuación entra con la torre para dar jaque mate, sin que negras tenga ninguna defensa satisfactoria.",
    moves: [
      { color: 'w', san: 'Bc5+', explain: { idea: "El alfil blanco entra en c5 dando jaque, cortando además la retirada del rey negro hacia el otro lado del tablero.", ventaja: "Jaque forzado que dirige al rey exactamente hacia donde blancas necesita.", debilidad: "Ninguna real: es la primera jugada de la combinación." } },
      { color: 'b', san: 'Ke8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda en una casilla donde la torre blanca puede entrar con jaque en la columna h." } },
      { color: 'w', san: 'Rh8+', explain: { idea: "La torre blanca entra en h8 dando jaque.", ventaja: "Jaque forzado que obliga a negras a interponer una pieza.", debilidad: "Ninguna real: sigue empujando hacia el mate." } },
      { color: 'b', san: 'Rf8', explain: { idea: "Única forma de tapar el jaque sin perder al rey de inmediato: interponer la propia torre.", ventaja: "Detiene el jaque momentáneamente.", debilidad: "La pieza interpuesta queda exactamente en la casilla que blancas necesita capturar para dar mate." } },
      { color: 'w', san: 'Rxf8#', explain: { idea: "La torre blanca captura la pieza interpuesta dando jaque mate, apoyada por el resto de piezas blancas que ya cubrían las demás casillas de escape.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-i223v',
    name: 'Atracción del rey con sacrificio de torre para rematar con la dama',
    tema: 'Atracción del rey + mate con dama',
    nivel: 6,
    rating: 1793,
    userColor: 'w',
    startFen: 'r3rk2/pp3p1B/2p2R1p/3p4/3q2n1/8/PPQ3PP/4R2K w - - 1 22',
    overview: "Posición real de una partida jugada en Lichess (rating 1793). Blancas entrega la torre para obligar al rey negro a salir de su refugio, y remata con la dama en dos jugadas más.",
    moves: [
      { color: 'w', san: 'Rxf7+', explain: { idea: "La torre blanca captura el peón de f7 dando jaque, ofreciéndose a ser capturada por el rey.", ventaja: "Atrae al rey negro fuera de la seguridad del enroque.", debilidad: "Entrega una torre completa -- solo se justifica porque lleva directamente al mate." } },
      { color: 'b', san: 'Kxf7', explain: { idea: "Única forma razonable de responder al jaque: el rey captura la torre.", ventaja: "Recupera la torre entregada.", debilidad: "El rey queda completamente expuesto en la casilla f7, sin ninguna pieza propia cerca que lo proteja." } },
      { color: 'w', san: 'Qg6+', explain: { idea: "La dama blanca entra en g6 dando jaque.", ventaja: "Jaque forzado que sigue empujando al rey negro.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kf8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda en la única casilla donde la dama blanca puede dar jaque mate en la jugada siguiente." } },
      { color: 'w', san: 'Qg8#', explain: { idea: "La dama blanca entra en g8 dando jaque mate, sin que ninguna pieza negra pueda capturarla ni interponerse.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-kPRMK',
    name: 'Doble sacrificio en f2 que abre el rey blanco',
    tema: 'Ataque al rey en el flanco de rey',
    nivel: 6,
    rating: 1771,
    userColor: 'b',
    startFen: 'r4r1k/p5pp/1p2Q3/1PpP4/7q/2BnP3/5PP1/R4RK1 b - - 4 25',
    overview: "Posición real de una partida jugada en Lichess (rating 1771). Negras entrega primero el caballo y luego, tras la recaptura, la dama entra con jaque capturando la torre que quedaba en f2, dejando al rey blanco completamente abierto.",
    moves: [
      { color: 'b', san: 'Nxf2', explain: { idea: "El caballo negro captura el peón de f2, ofreciéndose junto al rey blanco.", ventaja: "Empieza a destruir la estructura de peones que protege al rey blanco.", debilidad: "Entrega el caballo -- solo se justifica si lo que sigue compensa de sobra." } },
      { color: 'w', san: 'Rxf2', explain: { idea: "Única forma razonable de recapturar sin perder más material de inmediato.", ventaja: "Recupera el caballo entregado.", debilidad: "La torre blanca queda en f2, una casilla que la dama negra puede atacar directamente." } },
      { color: 'b', san: 'Qxf2+', explain: { idea: "La dama negra captura la torre de f2 dando jaque.", ventaja: "Gana una torre adicional y deja al rey blanco con la estructura de peones completamente destruida y la dama negra infiltrada en su posición.", debilidad: "Ninguna real: cierra la combinación con ventaja decisiva para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-JNTkc',
    name: 'Cadena de jaques de dama que termina ganando una torre',
    tema: 'Ataque con la dama al rey expuesto',
    nivel: 6,
    rating: 1950,
    userColor: 'b',
    startFen: 'b3r1k1/6p1/1Q2p3/3pR3/1P4P1/5P1p/P1q2R2/6K1 b - - 2 33',
    overview: "Posición real de una partida jugada en Lichess (rating 1950). El rey blanco ya está expuesto en el flanco de rey; una cadena de jaques de dama lo empuja hasta una casilla desde la que negras gana una torre sin compensación.",
    moves: [
      { color: 'b', san: 'Qc1+', explain: { idea: "La dama negra entra en c1 dando jaque, empezando la cadena.", ventaja: "Jaque forzado, primer paso de la combinación.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kh2', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey se acerca cada vez más a la zona donde están los peones blancos ya debilitados." } },
      { color: 'b', san: 'Qf4+', explain: { idea: "Segundo jaque de dama, ahora desde f4.", ventaja: "Sigue sin dar tregua al rey blanco.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kxh3', explain: { idea: "Única forma de responder sin perder más material de inmediato: el rey captura el peón que daba jaque.", ventaja: "Detiene el jaque directo.", debilidad: "El rey queda en una casilla desde la que la dama negra puede capturar una torre blanca sin ninguna defensa." } },
      { color: 'b', san: 'Qxe5', explain: { idea: "La dama negra captura la torre blanca de e5, que se había quedado sin ninguna pieza que la defendiera tras la persecución del rey.", ventaja: "Gana una torre completa, ventaja material decisiva.", debilidad: "Ninguna: cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Pd5wv',
    name: 'Cambio de torres seguido de un alfil que se cuela hasta capturar la última',
    tema: 'Infiltración de alfil tras cambio de torres',
    nivel: 6,
    rating: 2070,
    userColor: 'b',
    startFen: '5rk1/N1R5/6pp/1pP5/8/P1N5/R4rbP/6K1 b - - 1 33',
    overview: "Posición real de una partida jugada en Lichess (rating 2070), final de torres y piezas menores. Tras un primer cambio de torres, el alfil negro se cuela hasta h3 y termina capturando la última torre blanca de la partida.",
    moves: [
      { color: 'b', san: 'Rxa2', explain: { idea: "La torre negra captura la torre blanca de a2, la única captura legal disponible en esa casilla.", ventaja: "Elimina una pareja de torres a favor de negras.", debilidad: "Ninguna real: es un cambio favorable, no una entrega." } },
      { color: 'w', san: 'Nxa2', explain: { idea: "Única recaptura posible para blancas.", ventaja: "Recupera la torre cambiada.", debilidad: "El caballo blanco queda alejado de la defensa del resto del tablero." } },
      { color: 'b', san: 'Bh3', explain: { idea: "El alfil negro se cuela en h3, una jugada tranquila que no da jaque pero prepara el ataque a la última torre blanca.", ventaja: "Pieza muy activa, cerca de las piezas blancas que quedan.", debilidad: "Ninguna real: jugada de infiltración silenciosa." } },
      { color: 'w', san: 'Rc8', explain: { idea: "Blancas mueve la torre a c8, buscando actividad en la última fila.", ventaja: "Busca contrajuego con la torre en la fila 8.", debilidad: "No hace nada por defender la propia posición del alfil negro ya infiltrado." } },
      { color: 'b', san: 'Bxc8', explain: { idea: "El alfil negro captura la torre blanca de c8, que se había quedado sin ninguna pieza que la defendiera.", ventaja: "Gana una torre completa, ventaja material decisiva.", debilidad: "Ninguna: cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-4B1n1',
    name: 'Jaque intermedio de caballo antes de capturar la torre',
    tema: 'Jaque intermedio (zwischenzug)',
    nivel: 6,
    rating: 1864,
    userColor: 'w',
    startFen: '6k1/pb4p1/1p5q/3p4/2p1p1Np/1PP1n1rP/P1B1QrPK/3R4 w - - 0 32',
    overview: "Posición real de una partida jugada en Lichess (rating 1864). Antes de resolver la amenaza pendiente sobre su propia dama, blancas mete un jaque intermedio de caballo que gana la dama negra, y solo después captura la torre que tenía disponible.",
    moves: [
      { color: 'w', san: 'Nxh6+', explain: { idea: "El caballo blanco entra en h6 dando jaque, ofreciéndose junto al rey negro, en vez de resolver primero la amenaza pendiente.", ventaja: "Jaque intermedio que gana un tiempo crucial: antes de que negras pueda hacer nada más, debe ocuparse de este jaque.", debilidad: "Entrega el caballo -- solo se justifica porque lo que se gana a cambio compensa de sobra." } },
      { color: 'b', san: 'gxh6', explain: { idea: "Única forma razonable de responder al jaque: capturar el caballo con el peón.", ventaja: "Recupera el caballo entregado.", debilidad: "Al abrir la columna g, la dama negra se queda sin ninguna pieza que la proteja frente al siguiente golpe." } },
      { color: 'w', san: 'Qxf2', explain: { idea: "La dama blanca captura la torre negra de f2, que se había quedado indefensa tras toda la secuencia anterior.", ventaja: "Gana una torre completa además de haber ganado ya el tiempo del jaque intermedio, quedando con ventaja material decisiva.", debilidad: "Ninguna: cierra la combinación." } }
    ]
  },
  // ============================================================
  // PROBLEMAS DE AJEDREZ -- banco tactico Lichess, lote 2 (S6)
  // ============================================================
  {
    id: 'h04-problema-lichess-e0rv2',
    name: 'Clavada absoluta que condena a la dama',
    tema: 'Clavada absoluta',
    nivel: 6,
    rating: 2001,
    userColor: 'w',
    startFen: '4q1k1/pR4b1/5n2/3p2N1/1n1P1Q2/6B1/r4PP1/6K1 w - - 0 25',
    overview: "Posición real de una partida jugada en Lichess (rating 2001). Blancas entra con la torre en la octava fila, clavando la dama negra contra su propio rey: la dama no puede abandonar la fila sin exponer al rey a jaque, y queda condenada a perderse.",
    moves: [
      { color: 'w', san: 'Rb8', explain: { idea: "La torre blanca entra en b8, alineándose en la octava fila con la dama y el rey negros.", ventaja: "La dama negra queda absolutamente clavada: no puede abandonar la fila sin exponer a su propio rey a jaque.", debilidad: "Ninguna real -- la torre entra en una casilla sin ninguna pieza negra que pueda capturarla de inmediato." } },
      { color: 'b', san: 'Ra1+', explain: { idea: "Negras ignora momentáneamente la clavada y busca contrajuego con un jaque propio, la única forma de ganar algo de tiempo antes de perder la dama.", ventaja: "Jaque forzado que obliga al rey blanco a ocuparse de él antes de poder capturar la dama.", debilidad: "No resuelve el problema de fondo: la dama negra sigue exactamente igual de clavada tras este jaque intermedio." } },
      { color: 'w', san: 'Kh2', explain: { idea: "Única casilla razonable para salir del jaque, sin ceder nada de la ventaja ya conseguida.", ventaja: "El rey se pone a salvo y la dama negra sigue completamente clavada en la octava fila.", debilidad: "Ninguna real -- cierra el fragmento con la ventaja decisiva ya asegurada, la dama caerá en la jugada siguiente." } }
    ]
  },
  {
    id: 'h04-problema-lichess-VesSW',
    name: 'Pareja de peones pasados que corren hacia la coronación',
    tema: 'Peón pasado avanzado',
    nivel: 6,
    rating: 2100,
    userColor: 'b',
    startFen: '8/ppp2r2/8/3k2P1/2R4P/1P2p3/P7/6K1 b - - 0 32',
    overview: "Final de torres real de una partida jugada en Lichess (rating 2100). Negras tiene un peón a un solo paso de coronar y lo empuja mientras el rey acude en su ayuda, sin que el rey blanco pueda llegar a tiempo para detenerlo.",
    moves: [
      { color: 'b', san: 'e2', explain: { idea: "El peón negro avanza a e2, a un solo paso de coronar.", ventaja: "Con el rey blanco lejos, nadie puede detenerlo sin sacrificar la propia torre.", debilidad: "Por sí solo el peón no basta -- si nadie lo apoya, la torre blanca podría acabar deteniéndolo desde atrás." } },
      { color: 'w', san: 'Rc1', explain: { idea: "La torre blanca se sitúa detrás del peón, en la única casilla desde la que controla a distancia la casilla de coronación.", ventaja: "Mientras la torre siga ahí, el peón no puede coronar por su cuenta.", debilidad: "La torre queda atada a la vigilancia de esa casilla, sin poder hacer nada más en el resto del tablero." } },
      { color: 'b', san: 'Ke4', explain: { idea: "El rey negro avanza a apoyar a su peón pasado, acercándose a la zona de coronación.", ventaja: "Con el rey cerca, negras podrá desalojar tarde o temprano a la torre blanca de su vigilancia o crear amenazas adicionales que la torre sola no puede parar.", debilidad: "Ninguna real -- es la continuación lógica del plan de apoyar al peón pasado." } }
    ]
  },
  {
    id: 'h04-problema-lichess-sLTOx',
    name: 'Mate en 2 con la dama sola',
    tema: 'Mate en 2',
    nivel: 6,
    rating: 2039,
    userColor: 'w',
    startFen: '8/p1pp2Q1/2pkp1pB/3b4/6PK/2P4P/2r5/6q1 w - - 6 40',
    overview: "Posición real de una partida jugada en Lichess (rating 2039). El rey negro está muy expuesto en el centro; dos jaques de dama consecutivos, apoyados por el resto de piezas blancas, bastan para dar mate.",
    moves: [
      { color: 'w', san: 'Qf8+', explain: { idea: "La dama blanca entra en f8 dando jaque a distancia.", ventaja: "Jaque forzado que dirige al rey negro exactamente a la casilla que blancas necesita.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Ke5', explain: { idea: "Única casilla legal para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda en el centro del tablero, sin ninguna casilla de escape disponible en la jugada siguiente." } },
      { color: 'w', san: 'Qf4#', explain: { idea: "La dama blanca entra en f4 dando jaque mate, apoyada por el resto de piezas blancas que ya cubrían las demás casillas de escape del rey.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-DYSlo',
    name: 'Sacrificio de torre y horquilla de caballo con jaque',
    tema: 'Atracción del rey + horquilla de caballo',
    nivel: 6,
    rating: 1980,
    userColor: 'w',
    startFen: 'r1b2rk1/1p1nq1n1/p1p1p1p1/3pN3/2PP2P1/4P3/PPQ2P2/R3K2R w KQ - 0 17',
    overview: "Posición real de una partida jugada en Lichess (rating 1980). Blancas entrega la torre para atraer al rey negro a la esquina, y el caballo entra dando jaque mientras ataca al mismo tiempo a la dama negra, ganándola sin compensación.",
    moves: [
      { color: 'w', san: 'Rh8+', explain: { idea: "La torre blanca se sacrifica entrando en h8 con jaque, obligando al rey a capturarla.", ventaja: "Atrae al rey exactamente a la casilla que el caballo necesita para el jaque siguiente.", debilidad: "Entrega una torre completa -- solo se justifica por lo que viene después." } },
      { color: 'b', san: 'Kxh8', explain: { idea: "Única forma de responder al jaque: el rey captura la torre.", ventaja: "Recupera la torre entregada.", debilidad: "El rey queda exactamente en la casilla que el caballo blanco necesita para el siguiente jaque." } },
      { color: 'w', san: 'Nxg6+', explain: { idea: "El caballo blanco captura el peón de g6 dando jaque y, al mismo tiempo, ataca directamente a la dama negra de e7 -- una horquilla real.", ventaja: "Jaque forzado y, de paso, la dama negra queda bajo ataque directo del propio caballo.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kg8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por salvar a la dama, que sigue atacada por el caballo." } },
      { color: 'w', san: 'Nxe7+', explain: { idea: "El caballo blanco captura la dama negra con jaque, cerrando la combinación.", ventaja: "Gana la dama, la pieza más valiosa del tablero, además de haber ganado ya un peón por el camino.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-bFldI',
    name: 'Sacrificio de dama que destruye la defensa del rey blanco',
    tema: 'Ataque al enroque con sacrificio de dama',
    nivel: 6,
    rating: 1959,
    userColor: 'b',
    startFen: '6k1/p3rpp1/1p3q1p/2b5/2B5/3P2P1/PPPQ1P1P/4R1K1 b - - 1 23',
    overview: "Posición real de una partida jugada en Lichess (rating 1959). Negras entrega la dama para abrir la posición del rey blanco y recupera con creces el material capturando torre y dama en las jugadas siguientes.",
    moves: [
      { color: 'b', san: 'Qxf2+', explain: { idea: "La dama negra captura el peón de f2 con jaque, entregándose voluntariamente junto al rey blanco.", ventaja: "Jaque forzado que obliga a blancas a recapturar con su propia dama, abriendo la posición del rey.", debilidad: "Entrega la dama completa -- solo se justifica por lo que viene después." } },
      { color: 'w', san: 'Qxf2', explain: { idea: "Única forma razonable de responder al jaque, recapturando con la propia dama.", ventaja: "Recupera la dama entregada.", debilidad: "La dama blanca queda en f2, una casilla que la torre negra puede atacar con jaque en la jugada siguiente." } },
      { color: 'b', san: 'Rxe1+', explain: { idea: "La torre negra captura la torre blanca de e1 dando jaque.", ventaja: "Gana una torre completa y mantiene la iniciativa con jaque.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kg2', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda junto a su propia dama en f2, que el alfil negro puede atacar directamente por la diagonal." } },
      { color: 'b', san: 'Bxf2', explain: { idea: "El alfil negro captura la dama blanca de f2, cerrando la combinación.", ventaja: "Recupera también la segunda dama de la secuencia -- el balance final deja a negras con una torre de ventaja neta y el rey blanco con la posición completamente destruida.", debilidad: "La casilla f2 sigue defendida por el propio rey blanco, que podría recapturar el alfil a continuación -- aun así, el balance material y posicional queda decisivamente a favor de negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Cm6Pq',
    name: 'El Molino -- jaque a la descubierta en cadena',
    tema: 'Molino -- jaque a la descubierta en cadena',
    nivel: 6,
    rating: 1933,
    userColor: 'w',
    startFen: '4rr2/pp3ppk/7p/2nN4/6R1/3b4/PB2RPP1/5K2 w - - 6 30',
    overview: "Posición real de una partida jugada en Lichess (rating 1933). El alfil blanco de b2 apunta a la gran diagonal hacia el rey negro, tapado por la propia torre. Cada vez que la torre se mueve para capturar un peón, descubre jaque del alfil -- el mismo patrón de \"molino\" que la partida real Torre-Lasker.",
    moves: [
      { color: 'w', san: 'Rxg7+', explain: { idea: "La torre blanca captura el peón de g7 dando jaque directo en la fila 7.", ventaja: "Gana un peón con jaque, y además tapa momentáneamente la diagonal larga de su propio alfil de b2.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kh8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda exactamente en la diagonal larga donde espera el alfil blanco, solo tapado por la propia torre." } },
      { color: 'w', san: 'Rxf7+', explain: { idea: "La torre blanca se retira a f7 capturando otro peón; al abandonar la diagonal larga, descubre el jaque del alfil de b2 sobre el rey negro.", ventaja: "Doble beneficio: gana un segundo peón y da jaque a la descubierta con el alfil, sin que el rey tenga forma de escapar del patrón.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kg8', explain: { idea: "Única casilla razonable para salir del jaque a la descubierta.", ventaja: "Ninguna real.", debilidad: "El rey vuelve a quedar en la diagonal larga en cuanto la torre se aparte de nuevo." } },
      { color: 'w', san: 'Rg7+', explain: { idea: "La torre blanca regresa a g7, tapando de nuevo la diagonal y dando jaque directo ella misma -- el mismo patrón puede repetirse.", ventaja: "Jaque forzado que mantiene indefinidamente la iniciativa y sigue erosionando la posición negra.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Mv7Qi',
    name: 'Dos torres colgadas, una tras otra',
    tema: 'Piezas colgadas',
    nivel: 6,
    rating: 1927,
    userColor: 'w',
    startFen: '5r1k/2q3p1/2p4p/5p2/4n2P/Q3P1P1/5P2/1r1R2K1 w - - 0 33',
    overview: "Posición real de una partida jugada en Lichess (rating 1927). Negras deja dos torres completamente indefensas en la misma jugada; blancas las captura una tras otra sin ninguna compensación.",
    moves: [
      { color: 'w', san: 'Qxf8+', explain: { idea: "La dama blanca captura la torre negra de f8, que se había quedado sin ninguna pieza que la defendiera, y además da jaque.", ventaja: "Gana una torre completa con jaque incluido.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kh7', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por salvar la segunda torre negra, que sigue colgada en b1." } },
      { color: 'w', san: 'Rxb1', explain: { idea: "La torre blanca captura la segunda torre negra, también sin ninguna defensa.", ventaja: "Gana una segunda torre completa, ampliando la ventaja material a decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-tuguo',
    name: 'Cambio de torres y jugada tranquila que decide la partida',
    tema: 'Despeje de columna + jugada tranquila decisiva',
    nivel: 6,
    rating: 2175,
    userColor: 'w',
    startFen: '1r3k2/1rR2p1p/4pp2/ppRp4/4q3/4P2P/2Q2PP1/6K1 w - - 12 27',
    overview: "Posición real de una partida jugada en Lichess (rating 2175). Tras cambiar un par de torres y dar jaque en la última fila, blancas remata con una jugada silenciosa que amenaza ganar la torre negra restante sin que negras pueda evitarlo.",
    moves: [
      { color: 'w', san: 'Rxb7', explain: { idea: "La torre blanca captura la torre negra de b7, la única captura disponible en esa casilla.", ventaja: "Elimina una pareja de torres a favor de la iniciativa blanca.", debilidad: "Ninguna real, es un cambio favorable." } },
      { color: 'b', san: 'Rxb7', explain: { idea: "Única recaptura posible para negras.", ventaja: "Recupera la torre cambiada, manteniendo la igualdad material momentánea.", debilidad: "La columna c queda despejada para la segunda torre y la dama blancas." } },
      { color: 'w', san: 'Rc8+', explain: { idea: "La segunda torre blanca entra en c8 dando jaque en la última fila, aprovechando la columna ya despejada.", ventaja: "Jaque forzado que aleja al rey negro de la defensa del resto del tablero.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kg7', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey se aleja todavía más de su propia torre, que queda sin ninguna protección extra." } },
      { color: 'w', san: 'Qc6', explain: { idea: "Jugada tranquila, sin jaque ni captura, que sitúa la dama blanca atacando directamente a la torre negra de b7 por la diagonal.", ventaja: "Amenaza ganar la torre negra en la jugada siguiente, sin que negras tenga ninguna forma sencilla de defenderla.", debilidad: "Ninguna real -- es la jugada silenciosa que remata la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-OVhPV',
    name: 'Cadena de capturas con jaque que arrasa el centro',
    tema: 'Desviación mediante jaques',
    nivel: 6,
    rating: 1784,
    userColor: 'w',
    startFen: '8/1p2b3/3k4/p2pn3/2P3rr/P2Q3P/1q4PB/5R1K w - - 0 35',
    overview: "Posición real de una partida jugada en Lichess (rating 1784). Blancas encadena tres capturas con jaque, cada una forzada, terminando con ventaja material decisiva tras ganar un peón, una pieza menor y la dama rival.",
    moves: [
      { color: 'w', san: 'Qxd5+', explain: { idea: "La dama blanca captura el peón central de d5 dando jaque.", ventaja: "Jaque forzado -- el rey negro no puede ni siquiera recapturar la dama, es la única jugada legal disponible.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kc7', explain: { idea: "Única jugada legal disponible para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda alejado de la defensa del caballo de e5, que blancas ataca en la jugada siguiente." } },
      { color: 'w', san: 'Bxe5+', explain: { idea: "El alfil blanco captura el caballo negro de e5 dando jaque.", ventaja: "Gana una pieza y mantiene la iniciativa con jaque.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qxe5', explain: { idea: "Única forma razonable de responder al jaque, recapturando con la propia dama.", ventaja: "Recupera el alfil entregado.", debilidad: "La dama negra queda en e5, una casilla que la dama blanca puede atacar directamente." } },
      { color: 'w', san: 'Qxe5+', explain: { idea: "La dama blanca captura la dama negra, cerrando la combinación con jaque.", ventaja: "Gana la segunda dama de la secuencia, quedando con ventaja material decisiva (un peón, un caballo y una dama ganados a cambio de un alfil).", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-l8hsK',
    name: 'Pareja de peones pasados conectados que deciden el final',
    tema: 'Peones pasados conectados',
    nivel: 6,
    rating: 2003,
    userColor: 'w',
    startFen: '8/2p5/1p5k/p2P1p2/P1PP4/5p1p/8/6K1 w - - 0 53',
    overview: "Final de peones real de una partida jugada en Lichess (rating 2003). Blancas avanza dos peones pasados conectados; el rey negro no puede detener a ambos a la vez y busca compensación en el otro extremo del tablero, sin éxito.",
    moves: [
      { color: 'w', san: 'c5', explain: { idea: "El peón blanco avanza a c5, creando una pareja de peones pasados conectados en el flanco de dama.", ventaja: "Dos peones pasados unidos avanzan mucho más rápido que uno solo -- el rey negro no puede detener a los dos a la vez.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kg5', explain: { idea: "El rey negro no puede hacer nada por el flanco de dama y busca compensación atacando los peones blancos del flanco de rey.", ventaja: "Gana tiempo en el otro extremo del tablero.", debilidad: "Se aleja todavía más de los peones pasados blancos, que ahora corren sin ninguna vigilancia." } },
      { color: 'w', san: 'd6', explain: { idea: "El segundo peón blanco avanza a d6, apoyado por el peón de c5, camino a la coronación.", ventaja: "Pareja de peones pasados y conectados a solo dos casillas de coronar, sin ningún rey cerca que pueda detenerlos.", debilidad: "Ninguna real -- el plan de avanzar los peones pasados decide la partida." } }
    ]
  },
  {
    id: 'h04-problema-lichess-e9sBZ',
    name: 'Maniobra de dama que deja un caballo colgado',
    tema: 'Pieza colgada tras maniobra de dama',
    nivel: 6,
    rating: 2125,
    userColor: 'w',
    startFen: 'r1bq1r1k/p1p2ppp/1bp5/4B3/1P1P4/2PBn3/P5PP/RN1Q1RK1 w - - 5 15',
    overview: "Posición real de una partida jugada en Lichess (rating 2125). La dama blanca se pasea por el flanco de rey negro, obligando a varias respuestas defensivas, hasta que el caballo negro se queda completamente solo y cae capturado.",
    moves: [
      { color: 'w', san: 'Qh5', explain: { idea: "La dama blanca se traslada a h5, apuntando hacia el flanco de rey negro y preparando la entrada en h6.", ventaja: "Pieza muy activa, cerca del rey negro.", debilidad: "Ninguna real, jugada de preparación." } },
      { color: 'b', san: 'f5', explain: { idea: "Negras avanza el peón a f5, tratando de ganar espacio y controlar casillas centrales.", ventaja: "Gana algo de espacio.", debilidad: "No hace nada por defender la casilla h6, que la dama blanca ocupa en la jugada siguiente." } },
      { color: 'w', san: 'Qh6', explain: { idea: "La dama blanca entra en h6, muy cerca del rey negro.", ventaja: "Posición extremadamente activa e incómoda para negras.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qe7', explain: { idea: "Negras reagrupa la dama en e7, buscando coordinar la defensa.", ventaja: "Cubre algunas casillas críticas cerca del rey.", debilidad: "Deja el caballo de e3 completamente solo, sin ninguna pieza que lo proteja." } },
      { color: 'w', san: 'Qxe3', explain: { idea: "La dama blanca captura el caballo negro de e3, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-AjQQJ',
    name: 'Torre activa que acosa al rey blanco sin tregua',
    tema: 'Torre activa acosando al rey',
    nivel: 6,
    rating: 1991,
    userColor: 'b',
    startFen: '8/R4p2/P4kp1/7p/r6P/4R1PK/8/5r2 b - - 0 45',
    overview: "Final de torres real de una partida jugada en Lichess (rating 1991). La torre negra se infiltra detrás de las líneas blancas y encadena jaques que acorralan al rey cada vez más, sin darle ni un respiro.",
    moves: [
      { color: 'b', san: 'Ra2', explain: { idea: "La torre negra abandona la presión directa lateral y se traslada a la segunda fila, preparando entrar por detrás del rey blanco.", ventaja: "Posición mucho más activa, lista para dar jaques desde la espalda del rey.", debilidad: "Ninguna real, jugada de reposicionamiento." } },
      { color: 'w', san: 'g4', explain: { idea: "Blancas avanza el peón, buscando ganar espacio y quizás abrir una vía de escape para el rey.", ventaja: "Gana algo de espacio.", debilidad: "Debilita todavía más las casillas alrededor de su propio rey, que la torre negra va a explotar de inmediato." } },
      { color: 'b', san: 'Rh1+', explain: { idea: "La torre negra entra en h1 dando jaque.", ventaja: "Jaque forzado que sigue empujando al rey blanco.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kg3', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda todavía más expuesto, sin ninguna pieza propia cerca que lo proteja." } },
      { color: 'b', san: 'Rg1+', explain: { idea: "La torre negra sigue con la cadena de jaques, ahora desde g1.", ventaja: "Mantiene al rey blanco sin ningún respiro, cada vez más acorralado.", debilidad: "Ninguna real -- la posición sigue siendo decisiva para negras aunque este fragmento no llegue todavía al remate final." } }
    ]
  },
  {
    id: 'h04-problema-lichess-2Iwcz',
    name: 'Cambios forzados que dejan un caballo colgado',
    tema: 'Cambios que dejan una pieza colgada',
    nivel: 6,
    rating: 1702,
    userColor: 'w',
    startFen: 'r3kr2/1p1bq1p1/1Ppp3p/p3p3/2B1P1n1/2P1PQ1P/P2N4/1R3RK1 w q - 0 19',
    overview: "Posición real de una partida jugada en Lichess (rating 1702). Una cadena de cambios en la última fila deja al final un caballo negro completamente indefenso, que blancas captura sin ningún coste adicional.",
    moves: [
      { color: 'w', san: 'Qxf8+', explain: { idea: "La dama blanca captura la torre negra de f8 con jaque, la única pieza libre para hacerlo.", ventaja: "Gana una torre con jaque incluido.", debilidad: "Entrega la propia dama a cambio, ya que la torre estaba defendida por la dama negra." } },
      { color: 'b', san: 'Qxf8', explain: { idea: "Única forma de recapturar sin perder más material.", ventaja: "Recupera la torre a cambio de la propia dama -- cambio de damas por torres, favorable para blancas en material.", debilidad: "Ninguna real para esta jugada en sí." } },
      { color: 'w', san: 'Rxf8+', explain: { idea: "La torre blanca recaptura en f8 con jaque.", ventaja: "Jaque forzado, sigue la simplificación favorable.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kxf8', explain: { idea: "Única jugada legal para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey negro queda como única pieza real defendiendo el resto del tablero, incluido el caballo suelto de g4." } },
      { color: 'w', san: 'hxg4', explain: { idea: "El peón blanco captura el caballo negro de g4, que se había quedado sin ninguna defensa tras todos los cambios anteriores.", ventaja: "Gana una pieza adicional, ampliando la ventaja material ya conseguida en los cambios previos.", debilidad: "Ninguna, cierra la secuencia con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-OGNVL',
    name: 'Jaque a la descubierta desesperado que pierde la dama',
    tema: 'Jaque a la descubierta que gana la dama',
    nivel: 6,
    rating: 1883,
    userColor: 'b',
    startFen: 'r3b2r/p3qpk1/3pp1P1/8/1p2P1Q1/1B3R2/PPP1NKPb/5R2 b - - 2 27',
    overview: "Posición real de una partida jugada en Lichess (rating 1883). Blancas intenta un jaque a la descubierta capturando en f7 con el propio peón, pero negras resuelve el jaque capturando directamente la dama que lo daba -- la mejor respuesta posible.",
    moves: [
      { color: 'b', san: 'Rh4', explain: { idea: "La torre negra se traslada a h4, reforzando la presión sobre el flanco de rey blanco.", ventaja: "Pieza muy activa, cerca del rey blanco.", debilidad: "Ninguna real, jugada de preparación." } },
      { color: 'w', san: 'gxf7+', explain: { idea: "Blancas captura el peón de f7 con su propio peón, lo que además abre la columna g y descubre el jaque de su propia dama sobre el rey negro.", ventaja: "Jaque a la descubierta, forzando una respuesta inmediata.", debilidad: "Es una jugada desesperada -- si negras puede capturar la dama al resolver el jaque, blancas pierde la pieza más valiosa del tablero." } },
      { color: 'b', san: 'Rxg4', explain: { idea: "La torre negra resuelve el jaque capturando directamente la dama blanca que lo daba.", ventaja: "Gana la dama, la pieza más valiosa del tablero, de la mejor forma posible: quitándose el jaque de encima al mismo tiempo.", debilidad: "Ninguna real, es la mejor respuesta posible a la jugada desesperada blanca." } },
      { color: 'w', san: 'f8=B+', explain: { idea: "El peón blanco corona en f8, eligiendo promocionar a alfil en vez de a dama, y da jaque.", ventaja: "Jaque forzado, último intento de complicar la posición.", debilidad: "Incluso coronando, blancas sigue muy por detrás en material tras haber perdido la dama." } },
      { color: 'b', san: 'Qxf8', explain: { idea: "La dama negra captura la pieza recién coronada, eliminando la última complicación blanca.", ventaja: "Cierra la combinación con una ventaja material aplastante.", debilidad: "Ninguna, es el resultado final de la secuencia." } }
    ]
  },
  {
    id: 'h04-problema-lichess-ahJ7v',
    name: 'Dos peones limpios ganados a cambio de nada',
    tema: 'Peones sueltos con jaques en cadena',
    nivel: 6,
    rating: 2036,
    userColor: 'b',
    startFen: '1r2k1r1/p3bp1Q/1q2p3/8/1PP2P2/P2NP3/R2K2PP/3R4 b - - 0 27',
    overview: "Posición real de una partida jugada en Lichess (rating 2036). La torre negra captura dos peones blancos sueltos, ambos con jaque, y cuando blancas busca contrajuego desesperado con un jaque propio, negras lo tapa sin ceder nada de la ventaja.",
    moves: [
      { color: 'b', san: 'Rxg2+', explain: { idea: "La torre negra captura el peón de g2 dando jaque, sin que nadie lo defendiera.", ventaja: "Gana un peón con jaque incluido.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kc3', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda muy expuesto en el centro del tablero, lejos de cualquier protección." } },
      { color: 'b', san: 'Rxa2', explain: { idea: "La torre negra captura un segundo peón, también sin ninguna defensa.", ventaja: "Gana un segundo peón, ampliando la ventaja material.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Qh8+', explain: { idea: "La dama blanca entra en h8 dando jaque, buscando algo de contrajuego desesperado.", ventaja: "Jaque forzado que obliga a negras a responder de inmediato.", debilidad: "No recupera nada del material ya perdido." } },
      { color: 'b', san: 'Bf8', explain: { idea: "El alfil negro se interpone en f8, tapando el jaque de la forma más sencilla.", ventaja: "Detiene el jaque sin ceder nada de la ventaja material ya conseguida (dos peones limpios).", debilidad: "Ninguna real, cierra el fragmento con ventaja clara para negras." } }
    ]
  },
  // ============================================================
  // PROBLEMAS DE AJEDREZ -- banco tactico Lichess, lote 3 (S6)
  // ============================================================
  {
    id: 'h04-problema-lichess-SoVfe',
    name: 'Ganar una pieza y enrocar a salvo en la misma combinación',
    tema: 'Enroque que pone al rey a salvo tras ganar material',
    nivel: 6,
    rating: 1956,
    userColor: 'b',
    startFen: 'r3k2r/1b2ppbp/5np1/1Nq3B1/2Q5/PB6/1PP3PP/2KRR3 b kq - 0 19',
    overview: "Posición real de una partida jugada en Lichess (rating 1956). Negras captura una pieza suelta con jaque y, en vez de perder tiempo, completa el enroque para poner al rey a salvo y la torre en juego en la misma jugada.",
    moves: [
      { color: 'b', san: 'Qxg5+', explain: { idea: "La dama negra captura el alfil blanco de g5 dando jaque, sin que nadie lo defendiera.", ventaja: "Gana una pieza completa con jaque incluido.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kb1', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional, pero blancas sigue sin ninguna compensación por la pieza perdida." } },
      { color: 'b', san: 'O-O', explain: { idea: "Negras enroca corto, poniendo al rey a salvo y activando la torre en la misma jugada.", ventaja: "Rey seguro y torre en juego, además de la pieza de ventaja ya conseguida.", debilidad: "Ninguna real -- cierra el fragmento con una posición sólida y ganadora." } }
    ]
  },
  {
    id: 'h04-problema-lichess-ajnHD',
    name: 'Rey centralizado que prepara ganar la calidad',
    tema: 'Rey activo + ganancia de calidad',
    nivel: 6,
    rating: 2171,
    userColor: 'b',
    startFen: 'r2r4/p4PR1/1p1k4/3p1N2/2pP4/2PbP3/P2K4/5R2 b - - 6 32',
    overview: "Final de piezas real de una partida jugada en Lichess (rating 2171). El rey negro se centraliza sin miedo mientras blancas reposiciona una pieza, y el alfil negro termina capturando una torre completa.",
    moves: [
      { color: 'b', san: 'Ke6', explain: { idea: "El rey negro avanza a e6, centralizándose sin ningún jaque ni amenaza inmediata que lo impida.", ventaja: "Rey activo, listo para participar en el medio juego o el final.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Ng3', explain: { idea: "Blancas reposiciona el caballo a g3, sin ocuparse de la amenaza real que pende sobre su propia torre.", ventaja: "Ninguna real para blancas.", debilidad: "Deja la torre de f1 sin ninguna defensa extra frente al alfil negro." } },
      { color: 'b', san: 'Bxf1', explain: { idea: "El alfil negro captura la torre blanca de f1.", ventaja: "Gana la calidad (torre por alfil), ventaja material clara.", debilidad: "Ninguna real, cierra la combinación con ventaja para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Jt6AB',
    name: 'Cambio de alfiles seguido de un jaque que gana el caballo',
    tema: 'Horquilla de dama con jaque',
    nivel: 6,
    rating: 1770,
    userColor: 'w',
    startFen: 'rn1qk2r/p1p1ppbp/b5p1/2Pp4/3P4/2B1P3/P4PPP/R2QKBNR w KQkq - 1 10',
    overview: "Posición real de una partida jugada en Lichess (rating 1770), en fase de apertura. Tras cambiar los alfiles, la dama blanca entra con jaque en la misma columna donde está el caballo negro recién recapturado, y se lo lleva sin compensación.",
    moves: [
      { color: 'w', san: 'Bxa6', explain: { idea: "El alfil blanco captura el alfil negro de a6, la única captura disponible en esa casilla.", ventaja: "Elimina una pareja de alfiles, abriendo la columna a.", debilidad: "Ninguna real, es un cambio." } },
      { color: 'b', san: 'Nxa6', explain: { idea: "Única recaptura posible para negras.", ventaja: "Recupera el alfil cambiado.", debilidad: "El caballo queda en a6, en la misma columna donde la dama blanca puede entrar con jaque." } },
      { color: 'w', san: 'Qa4+', explain: { idea: "La dama blanca entra en a4 dando jaque, en la misma columna que el caballo recién recapturado.", ventaja: "Jaque forzado que además mantiene la vigilancia sobre el caballo de a6.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qd7', explain: { idea: "Única forma razonable de tapar el jaque sin perder más material de inmediato.", ventaja: "Detiene el jaque.", debilidad: "No hace nada por defender al caballo de a6, que sigue en la misma columna que la dama blanca." } },
      { color: 'w', san: 'Qxa6', explain: { idea: "La dama blanca captura el caballo negro de a6, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-TzuOi',
    name: 'Jaque de dama que ataca al rey y al caballo a la vez',
    tema: 'Horquilla de dama (jaque + ataque doble en la misma fila)',
    nivel: 6,
    rating: 1905,
    userColor: 'w',
    startFen: '4r2k/1p2q1r1/p2p2Q1/3n4/8/6RP/PP4P1/5RK1 w - - 1 35',
    overview: "Posición real de una partida jugada en Lichess (rating 1905). La dama blanca entra dando jaque en una casilla desde la que, además, ataca directamente al caballo negro en la misma fila -- negras solo puede tapar el jaque, sin poder salvar al caballo.",
    moves: [
      { color: 'w', san: 'Qh5+', explain: { idea: "La dama blanca entra en h5 dando jaque y, en la misma fila, ataca directamente al caballo negro de d5.", ventaja: "Doble amenaza real: el jaque es inmediato y el caballo queda bajo ataque sin ninguna forma de defenderlo a la vez.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rh7', explain: { idea: "Única forma de tapar el jaque, interponiendo la torre.", ventaja: "Detiene el jaque.", debilidad: "No defiende al caballo de d5, que sigue en la misma fila bajo el ataque de la dama." } },
      { color: 'w', san: 'Qxd5', explain: { idea: "La dama blanca captura el caballo negro de d5, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Ifth5',
    name: 'Doble jaque de dama y caballo que termina ganando la dama rival',
    tema: 'Horquilla de caballo con jaque',
    nivel: 6,
    rating: 2027,
    userColor: 'w',
    startFen: '8/3k1pp1/4p3/N3q3/8/5Q1K/8/8 w - - 0 60',
    overview: "Final de dama y caballo real de una partida jugada en Lichess (rating 2027). Tras un primer jaque de dama, el caballo blanco entra dando jaque y, al mismo tiempo, ataca directamente a la dama negra -- una horquilla real que la gana sin compensación.",
    moves: [
      { color: 'w', san: 'Qxf7+', explain: { idea: "La dama blanca captura el peón de f7 dando jaque.", ventaja: "Gana un peón con jaque incluido, ganando además un tiempo importante.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kd6', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda en una casilla desde la que el caballo blanco puede dar el siguiente jaque." } },
      { color: 'w', san: 'Nc4+', explain: { idea: "El caballo blanco entra en c4 dando jaque y, al mismo tiempo, ataca directamente a la dama negra de e5 -- una horquilla real.", ventaja: "Doble amenaza: el jaque es inmediato y la dama queda bajo ataque sin ninguna forma de salvarla a la vez.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kd5', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por salvar a la dama, que sigue atacada por el caballo." } },
      { color: 'w', san: 'Nxe5', explain: { idea: "El caballo blanco captura la dama negra, cerrando la combinación.", ventaja: "Gana la dama, la pieza más valiosa del tablero, sin ninguna compensación.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Iedeo',
    name: 'Ruptura de peones que crea un pasado decisivo',
    tema: 'Ruptura de peones en el final',
    nivel: 6,
    rating: 1729,
    userColor: 'b',
    startFen: '8/5kp1/3K1p1p/7P/5PP1/8/8/8 b - - 4 63',
    overview: "Final de peones real de una partida jugada en Lichess (rating 1729). Negras rompe la estructura de peones con una serie de cambios forzados, terminando con un peón mucho más avanzado que el de blancas.",
    moves: [
      { color: 'b', san: 'f5', explain: { idea: "El peón negro avanza a f5, preparando la ruptura de la estructura de peones blanca.", ventaja: "Gana espacio y prepara la apertura de líneas favorables.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'g5', explain: { idea: "Blancas responde avanzando su propio peón a g5, buscando mantener la estructura cerrada.", ventaja: "Intenta frenar el plan negro.", debilidad: "Crea un nuevo objetivo que negras puede capturar de inmediato." } },
      { color: 'b', san: 'hxg5', explain: { idea: "Negras captura el peón de g5.", ventaja: "Gana un peón y abre la posición a su favor.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'fxg5', explain: { idea: "Única recaptura razonable para blancas.", ventaja: "Recupera el peón cambiado.", debilidad: "El peón blanco resultante queda mucho más atrasado que el peón negro que queda tras la ruptura." } },
      { color: 'b', san: 'f4', explain: { idea: "El peón negro avanza a f4, quedando muy por delante de cualquier peón blanco equivalente.", ventaja: "Peón mucho más avanzado, con clara ventaja en la carrera hacia la coronación.", debilidad: "Ninguna real -- la ruptura ha dejado a negras con la ventaja decisiva en el final de peones." } }
    ]
  },
  {
    id: 'h04-problema-lichess-cYenw',
    name: 'Reposicionar la torre antes de ganar un peón con jaque',
    tema: 'Torre reposicionada que gana un peón con jaque',
    nivel: 6,
    rating: 2143,
    userColor: 'w',
    startFen: '8/3r4/p2r4/1pRp4/1P1Pk1p1/P3p3/4K3/5R2 w - - 2 49',
    overview: "Final de torres real de una partida jugada en Lichess (rating 2143). Blancas reposiciona la torre a una casilla más activa y, tras la respuesta negra, captura un peón con jaque.",
    moves: [
      { color: 'w', san: 'Rc3', explain: { idea: "La torre blanca se traslada a c3, buscando mayor actividad antes de decidir el plan.", ventaja: "Torre más flexible, lista para entrar por varias columnas.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Re7', explain: { idea: "Negras reposiciona su propia torre a e7, sin resolver la debilidad real de su estructura.", ventaja: "Ninguna real para negras.", debilidad: "No defiende el peón de e3, que sigue siendo un objetivo real." } },
      { color: 'w', san: 'Rxe3+', explain: { idea: "La torre blanca captura el peón de e3 dando jaque.", ventaja: "Gana un peón con jaque, manteniendo la iniciativa.", debilidad: "Ninguna real -- sigue con ventaja clara en el final de torres." } }
    ]
  },
  {
    id: 'h04-problema-lichess-DexMu',
    name: 'Serie de cambios en la columna d que termina con la dama infiltrada',
    tema: 'Serie de cambios que abren la última fila',
    nivel: 6,
    rating: 1962,
    userColor: 'w',
    startFen: '2rr2k1/1b3p1p/p3p1p1/1pn1q3/7Q/P1NB3P/1PP3P1/3R1R1K w - - 2 25',
    overview: "Posición real de una partida jugada en Lichess (rating 1962). Blancas encadena tres cambios de piezas en la columna d, terminando con la dama infiltrada en la octava fila con jaque.",
    moves: [
      { color: 'w', san: 'Bxg6', explain: { idea: "El alfil blanco captura el peón de g6, la única forma de justificar la entrega si negras recaptura.", ventaja: "Empieza a destruir la estructura de peones que protege al rey negro.", debilidad: "Entrega el alfil -- solo se justifica por lo que sigue." } },
      { color: 'b', san: 'hxg6', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera el alfil entregado.", debilidad: "La estructura de peones cerca del rey negro queda más débil." } },
      { color: 'w', san: 'Rxd8+', explain: { idea: "La torre blanca captura la torre negra de d8 dando jaque.", ventaja: "Cambio favorable con jaque, manteniendo la iniciativa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rxd8', explain: { idea: "Única recaptura posible para negras.", ventaja: "Recupera la torre cambiada.", debilidad: "La octava fila queda completamente abierta para la dama blanca." } },
      { color: 'w', san: 'Qxd8+', explain: { idea: "La dama blanca captura la torre negra recién recapturada, entrando en la octava fila con jaque.", ventaja: "Gana una torre adicional además de todo el material ya cambiado, quedando con ventaja material decisiva y la dama muy activa.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-veHYi',
    name: 'El rey busca refugio del jaque de torre',
    tema: 'Jugada defensiva del rey en el final',
    nivel: 6,
    rating: 1964,
    userColor: 'b',
    startFen: '8/8/8/1R5P/8/1p3k2/1r6/7K b - - 2 59',
    overview: "Final de torres real de una partida jugada en Lichess (rating 1964). El rey negro se acerca a su propio peón para defenderlo, y tras un jaque de torre encuentra la única casilla que mantiene la posición defendible.",
    moves: [
      { color: 'b', san: 'Kg3', explain: { idea: "El rey negro avanza a g3, acercándose a defender su propio peón coronado.", ventaja: "Rey activo, cerca de sus propios recursos.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rg5+', explain: { idea: "La torre blanca da jaque desde g5, buscando alejar al rey de la defensa.", ventaja: "Jaque forzado, gana un tiempo.", debilidad: "Ninguna real para blancas." } },
      { color: 'b', san: 'Kh3', explain: { idea: "Única casilla que mantiene la posición defendible para negras.", ventaja: "El rey se mantiene cerca de sus recursos sin perder nada adicional.", debilidad: "Ninguna real -- es la respuesta más precisa disponible." } }
    ]
  },
  {
    id: 'h04-problema-lichess-kS3Wz',
    name: 'Rey que se come el peón rival antes de coronar el propio',
    tema: 'Peón pasado con apoyo del rey',
    nivel: 6,
    rating: 1960,
    userColor: 'w',
    startFen: '6n1/3k4/1K4P1/p4P2/P7/8/8/8 w - - 1 61',
    overview: "Final de caballo y peones real de una partida jugada en Lichess (rating 1960). El rey blanco elimina el último peón negro que podía crear contrajuego, y el peón pasado blanco sigue su camino hacia la coronación.",
    moves: [
      { color: 'w', san: 'Kxa5', explain: { idea: "El rey blanco captura el peón negro de a5, eliminando cualquier contrajuego posible en ese flanco.", ventaja: "Gana un peón y deja a negras sin ninguna base de contrajuego.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Ne7', explain: { idea: "El caballo negro intenta llegar a tiempo para frenar al peón pasado blanco.", ventaja: "Es el único intento razonable de defensa.", debilidad: "Llega demasiado tarde: el peón blanco ya está a solo dos casillas de coronar." } },
      { color: 'w', san: 'g7', explain: { idea: "El peón blanco avanza a g7, a un solo paso de coronar.", ventaja: "Nada puede detenerlo ya -- corona en la jugada siguiente.", debilidad: "Ninguna real, decide la partida." } }
    ]
  },
  {
    id: 'h04-problema-lichess-IKzCR',
    name: 'Cadena de jaques que termina ganando una torre',
    tema: 'Jaques en cadena que ganan una torre',
    nivel: 6,
    rating: 2068,
    userColor: 'w',
    startFen: '2r2k1r/p3q1pp/8/1pp1Q3/3pP3/3P2PP/PPP3B1/R5K1 w - - 1 20',
    overview: "Posición real de una partida jugada en Lichess (rating 2068). La dama blanca encadena dos jaques, el segundo de los cuales captura directamente una torre negra sin ninguna defensa.",
    moves: [
      { color: 'w', san: 'Qf5+', explain: { idea: "La dama blanca entra en f5 dando jaque.", ventaja: "Jaque forzado, dirige al rey negro hacia una casilla concreta.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Ke8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda en una casilla desde la que la dama blanca puede capturar la torre de c8 con jaque." } },
      { color: 'w', san: 'Qxc8+', explain: { idea: "La dama blanca captura la torre negra de c8 dando jaque, sin que nadie la defendiera.", ventaja: "Gana una torre completa con jaque incluido.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-SGfi1',
    name: 'Rey que recupera material y avanza en el final de peones',
    tema: 'Rey activo en el final de peones',
    nivel: 6,
    rating: 2095,
    userColor: 'b',
    startFen: '8/2p5/1p3p2/2pP1Pp1/2RkP1P1/5K2/8/8 b - - 0 39',
    overview: "Final de peones y torre real de una partida jugada en Lichess (rating 2095). El rey negro recupera una torre suelta y sigue avanzando para ganar también un peón central, todo sin ninguna oposición real.",
    moves: [
      { color: 'b', san: 'Kxc4', explain: { idea: "El rey negro captura la torre blanca de c4, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Ke3', explain: { idea: "El rey blanco se centraliza, buscando algo de actividad tras la pérdida de material.", ventaja: "Ninguna real que compense la pérdida ya sufrida.", debilidad: "No recupera nada del material perdido." } },
      { color: 'b', san: 'b5', explain: { idea: "Negras avanza el peón a b5, ampliando su mayoría de peones en el flanco de dama.", ventaja: "Refuerza el plan de crear un peón pasado adicional.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'e5', explain: { idea: "Blancas avanza su propio peón a e5, buscando alguna actividad en el centro.", ventaja: "Ninguna real que compense la desventaja material ya existente.", debilidad: "Deja el peón de d5 sin ninguna defensa extra." } },
      { color: 'b', san: 'Kxd5', explain: { idea: "El rey negro captura también el peón de d5.", ventaja: "Amplía todavía más la ventaja material ya decisiva.", debilidad: "Ninguna real, cierra el fragmento con ventaja aplastante para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Tcg5p',
    name: 'Mate en 2 con el caballo abriendo camino',
    tema: 'Mate en 2 con caballo y torre',
    nivel: 6,
    rating: 1707,
    userColor: 'b',
    startFen: '6r1/R7/1p2k3/7R/3n4/3b4/P4P1P/4K3 b - - 2 38',
    overview: "Posición real de una partida jugada en Lichess (rating 1707). El caballo negro entra con jaque, obligando al rey a una única casilla, y la torre negra remata con jaque mate.",
    moves: [
      { color: 'b', san: 'Nf3+', explain: { idea: "El caballo negro entra en f3 dando jaque.", ventaja: "Jaque forzado que dirige al rey blanco a la única casilla posible.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kd1', explain: { idea: "Única casilla legal para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda sin ninguna casilla de escape para la jugada siguiente." } },
      { color: 'b', san: 'Rg1#', explain: { idea: "La torre negra entra en g1 dando jaque mate, sin que ninguna pieza blanca pueda capturarla ni interponerse.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-kp2p6',
    name: 'El rey esquiva el jaque de caballo en un final de peones',
    tema: 'Jugada defensiva del rey ante jaque de caballo',
    nivel: 6,
    rating: 2053,
    userColor: 'b',
    startFen: '8/8/8/8/P1k1K3/2p5/1pN5/1Rn5 b - - 0 82',
    overview: "Final de piezas menores real de una partida jugada en Lichess (rating 2053). El rey negro se aproxima al peón que quiere coronar y, tras un jaque de caballo, encuentra la única casilla que mantiene su plan intacto.",
    moves: [
      { color: 'b', san: 'Kb3', explain: { idea: "El rey negro avanza a b3, acercándose a apoyar el avance de su propio peón.", ventaja: "Rey activo, cerca de la zona decisiva del tablero.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Nd4+', explain: { idea: "El caballo blanco entra dando jaque, buscando ganar tiempo o desviar al rey de su plan.", ventaja: "Jaque forzado.", debilidad: "Ninguna real para blancas más allá del tiempo ganado." } },
      { color: 'b', san: 'Ka2', explain: { idea: "Única casilla que mantiene el plan negro intacto sin ceder nada.", ventaja: "El rey se mantiene cerca de la zona decisiva.", debilidad: "Ninguna real -- es la respuesta más precisa disponible." } }
    ]
  },
  {
    id: 'h04-problema-lichess-JZQf1',
    name: 'Cambio de torres seguido de un jaque que remata en la segunda fila',
    tema: 'Atracción del rey mediante cambio y jaque',
    nivel: 6,
    rating: 1865,
    userColor: 'b',
    startFen: '6k1/4qp2/p5p1/1p4N1/3b1P1P/1Q6/PP1r1R1P/5RK1 b - - 1 28',
    overview: "Posición real de una partida jugada en Lichess (rating 1865). Tras cambiar un par de torres, negras entra con la dama dando jaque y, al forzar al rey a una casilla concreta, remata capturando la torre restante también con jaque.",
    moves: [
      { color: 'b', san: 'Rxf2', explain: { idea: "La torre negra captura la torre blanca de f2, la única captura disponible en esa casilla.", ventaja: "Elimina una pareja de torres, simplificando hacia la posición que negras necesita.", debilidad: "Ninguna real, es un cambio." } },
      { color: 'w', san: 'Rxf2', explain: { idea: "Única recaptura posible para blancas.", ventaja: "Recupera la torre cambiada.", debilidad: "La torre recién recapturada en f2 queda sin ninguna defensa adicional frente a la dama negra." } },
      { color: 'b', san: 'Qe1+', explain: { idea: "La dama negra entra en e1 dando jaque.", ventaja: "Jaque forzado que dirige al rey blanco a una casilla concreta.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kg2', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda junto a su propia torre de f2, que la dama negra puede capturar directamente." } },
      { color: 'b', san: 'Qxf2+', explain: { idea: "La dama negra captura la torre blanca de f2 dando jaque, cerrando la combinación.", ventaja: "Gana una torre completa con jaque incluido, ventaja material decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  // ============================================================
  // PROBLEMAS DE AJEDREZ -- banco tactico Lichess, lote 4 (S6)
  // ============================================================
  {
    id: 'h04-problema-lichess-ZvuQ7',
    name: 'Sacrificio de caballo que desvía a la torre y abre paso al mate',
    tema: 'Desviación con sacrificio + mate de dama',
    nivel: 6,
    rating: 1810,
    userColor: 'w',
    startFen: '4rrk1/ppb2ppp/2p5/4qN2/2b4R/2P2P2/2Q1B1P1/5KB1 w - - 10 29',
    overview: "Posición real de una partida jugada en Lichess (rating 1810). El caballo blanco se sacrifica con jaque para desviar a la torre que defendía la casilla h7; una vez desviada, la dama entra directamente a dar jaque mate.",
    moves: [
      { color: 'w', san: 'Ne7+', explain: { idea: "El caballo blanco entra en e7 dando jaque directo al rey.", ventaja: "Jaque forzado que solo puede resolverse capturando el caballo, desviando a la torre de su función defensiva real.", debilidad: "Entrega el caballo -- solo se justifica por lo que viene después." } },
      { color: 'b', san: 'Rxe7', explain: { idea: "Única forma razonable de responder al jaque: la torre captura el caballo.", ventaja: "Recupera el caballo entregado.", debilidad: "Al capturar, la torre abandona la vigilancia de la casilla h7, dejándola completamente indefensa." } },
      { color: 'w', san: 'Qxh7#', explain: { idea: "La dama blanca entra en h7 dando jaque mate, sin que ninguna pieza negra pueda capturarla ni interponerse.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-x4tWa',
    name: 'Doble jaque de dama que termina ganando un alfil',
    tema: 'Jaques en cadena que ganan una pieza',
    nivel: 6,
    rating: 1817,
    userColor: 'w',
    startFen: 'r3k2r/p4ppp/2p1p3/4qb2/1b3N2/4pQ2/PP3PPP/R1B2K1R w kq - 0 14',
    overview: "Posición real de una partida jugada en Lichess (rating 1817). La dama blanca encadena dos jaques que van llevando al rey negro fuera de su zona segura, y remata capturando el alfil negro suelto.",
    moves: [
      { color: 'w', san: 'Qxc6+', explain: { idea: "La dama blanca captura el peón de c6 dando jaque.", ventaja: "Gana un peón con jaque, arrastrando al rey fuera del enroque.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Ke7', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda todavía más expuesto en el centro." } },
      { color: 'w', san: 'Qb7+', explain: { idea: "La dama blanca sigue con un segundo jaque desde b7.", ventaja: "Mantiene la iniciativa, sin dar tregua al rey negro.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kf6', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El alfil negro de b4 queda sin ninguna defensa extra." } },
      { color: 'w', san: 'Qxb4', explain: { idea: "La dama blanca captura el alfil negro de b4, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa, ampliando la ventaja ya conseguida con los peones y la iniciativa.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-gssgO',
    name: 'Jugada tranquila que gana una torre a cambio de un cambio favorable',
    tema: 'Jugada tranquila que provoca un error',
    nivel: 6,
    rating: 2075,
    userColor: 'b',
    startFen: '7q/1Q4bk/1p1p4/3P1R2/1P3Pp1/6P1/r7/5BK1 b - - 0 33',
    overview: "Posición real de una partida jugada en Lichess (rating 2075). Negras retira la dama a una casilla segura sin ninguna amenaza directa, y cuando blancas ofrece el cambio de torres, negras recaptura quedando con la mejor estructura.",
    moves: [
      { color: 'b', san: 'Qe8', explain: { idea: "La dama negra se retira a e8, a salvo de cualquier ataque directo, sin ceder la iniciativa.", ventaja: "Pieza segura, lista para reincorporarse cuando haga falta.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Re5', explain: { idea: "Blancas ofrece el cambio de torres en e5.", ventaja: "Busca simplificar la posición.", debilidad: "El cambio favorece a negras, que recapturará con el peón mejorando su propia estructura central." } },
      { color: 'b', san: 'dxe5', explain: { idea: "Negras recaptura con el peón de d6.", ventaja: "Recupera la torre cambiada y mejora la estructura de peones centrales.", debilidad: "Ninguna real -- cierra el fragmento con una posición claramente mejor para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-ACqPh',
    name: 'Infiltración de dama que gana un caballo con jaque',
    tema: 'Ataque al enroque con infiltración de dama',
    nivel: 6,
    rating: 2018,
    userColor: 'b',
    startFen: 'r1b1r1k1/ppp1qppp/8/2Ppn3/1P3Pn1/P1NBP3/6PN/R1BQ1RK1 b - - 0 13',
    overview: "Posición real de una partida jugada en Lichess (rating 2018). La dama negra entra muy cerca del rey blanco; al defenderse con el caballo, este queda expuesto y cae capturado con jaque.",
    moves: [
      { color: 'b', san: 'Qh4', explain: { idea: "La dama negra entra en h4, muy cerca del rey blanco, sin que nadie pueda capturarla de inmediato.", ventaja: "Pieza extremadamente activa, amenazando entrar todavía más.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Nf3', explain: { idea: "Blancas defiende con el caballo, tapando la entrada más directa.", ventaja: "Detiene la amenaza inmediata.", debilidad: "El caballo queda en una casilla que el propio caballo negro puede capturar con jaque." } },
      { color: 'b', san: 'Nxf3+', explain: { idea: "El caballo negro captura el caballo blanco de f3 dando jaque.", ventaja: "Gana una pieza completa con jaque incluido.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Ng7ji',
    name: 'Mate de la charretera -- el rey sin escape entre sus propias piezas',
    tema: 'Mate de la charretera (epaulette mate)',
    nivel: 6,
    rating: 1838,
    userColor: 'b',
    startFen: '8/1Q6/3p4/2p1p3/k4q2/1pKP4/6PP/3B4 b - - 2 39',
    overview: "Posición real de una partida jugada en Lichess (rating 1838). El rey blanco está flanqueado por sus propias piezas, sin ninguna casilla lateral de escape -- el patrón clásico del mate de la charretera, donde las propias piezas bloquean la huida del rey.",
    moves: [
      { color: 'b', san: 'Qc1+', explain: { idea: "La dama negra entra en c1 dando jaque.", ventaja: "Jaque forzado que dirige al rey a la única respuesta posible.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Bc2', explain: { idea: "Única forma de tapar el jaque: interponer el alfil.", ventaja: "Detiene el jaque momentáneamente.", debilidad: "El alfil interpuesto queda exactamente en la casilla que la dama negra necesita capturar para el mate." } },
      { color: 'b', san: 'Qxc2#', explain: { idea: "La dama negra captura el alfil dando jaque mate: el rey no tiene escape lateral porque sus propias piezas bloquean esas casillas -- el mate de la charretera.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-3aH47',
    name: 'El rey abandona la defensa de su peón para perseguir a la torre',
    tema: 'Jugada defensiva del rey en un final de torres y peones',
    nivel: 6,
    rating: 1954,
    userColor: 'w',
    startFen: '1r6/RP6/P4k2/4p3/8/6p1/5p2/6K1 w - - 0 59',
    overview: "Final de torres y peones real de una partida jugada en Lichess (rating 1954). Blancas reposiciona el rey y la torre buscando apoyar el avance del peón pasado, mientras negras contraataca con jaques que obligan al rey a capturar un peón propio para sobrevivir.",
    moves: [
      { color: 'w', san: 'Kg2', explain: { idea: "El rey blanco se acerca a g2, buscando mayor seguridad antes de continuar el plan de avanzar el peón pasado.", ventaja: "Rey más seguro.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rh8', explain: { idea: "La torre negra se traslada a h8, preparando entrar por la columna abierta.", ventaja: "Torre más activa.", debilidad: "Ninguna real para negras." } },
      { color: 'w', san: 'Ra8', explain: { idea: "La torre blanca entra en a8, apoyando al peón pasado en su camino a la coronación.", ventaja: "Refuerza el plan de coronar el peón de a7.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rh2+', explain: { idea: "La torre negra entra en h2 dando jaque, buscando complicar antes de que el peón blanco corone.", ventaja: "Jaque forzado, gana algo de tiempo.", debilidad: "Ninguna real para negras." } },
      { color: 'w', san: 'Kxg3', explain: { idea: "El rey blanco captura el peón negro de g3 al salir del jaque, la única forma de hacerlo sin ceder nada más.", ventaja: "Elimina una amenaza adicional mientras sale del jaque.", debilidad: "Ninguna real -- el plan de coronar el peón pasado sigue intacto." } }
    ]
  },
  {
    id: 'h04-problema-lichess-rJPsB',
    name: 'Torre activa que se infiltra y da jaque en un final de torres',
    tema: 'Torre activa en el final de torres',
    nivel: 6,
    rating: 1868,
    userColor: 'b',
    startFen: 'r7/pR6/6k1/P5p1/6Kp/7P/5P2/8 b - - 0 36',
    overview: "Final de torres real de una partida jugada en Lichess (rating 1868). La torre negra se reposiciona, gana un peón y termina infiltrándose con jaque en la segunda fila blanca.",
    moves: [
      { color: 'b', san: 'Rf8', explain: { idea: "La torre negra se traslada a f8, preparando entrar por la columna f.", ventaja: "Torre más activa.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rb4', explain: { idea: "Blancas reposiciona su propia torre a b4, buscando actividad en el flanco de dama.", ventaja: "Torre algo más activa.", debilidad: "No defiende el peón de f2, que queda expuesto." } },
      { color: 'b', san: 'Rxf2', explain: { idea: "La torre negra captura el peón de f2.", ventaja: "Gana un peón limpio.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rc4', explain: { idea: "Blancas reposiciona la torre a c4, sin recuperar el material perdido.", ventaja: "Ninguna real que compense la pérdida.", debilidad: "Ninguna adicional." } },
      { color: 'b', san: 'Rg2+', explain: { idea: "La torre negra entra en g2 dando jaque, infiltrándose en la segunda fila blanca.", ventaja: "Jaque forzado que mantiene la iniciativa además de la ventaja material ya conseguida.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-lqmjJ',
    name: 'Ganancia de un alfil tras ceder espacio en el flanco de dama',
    tema: 'Pieza colgada tras jugada de flanco',
    nivel: 6,
    rating: 1780,
    userColor: 'w',
    startFen: 'r4rk1/pp3pp1/3p4/q2Np1b1/2P1P1bp/8/PP2BQP1/R3K2R w KQ - 2 18',
    overview: "Posición real de una partida jugada en Lichess (rating 1780). Blancas avanza un peón en el flanco de dama, y cuando negras responde alejando la dama, captura directamente el alfil negro suelto en el otro extremo del tablero.",
    moves: [
      { color: 'w', san: 'b4', explain: { idea: "Blancas avanza el peón a b4, ganando espacio en el flanco de dama.", ventaja: "Gana espacio.", debilidad: "Ninguna real inmediata." } },
      { color: 'b', san: 'Qa6', explain: { idea: "Negras retira la dama a a6, evitando cualquier complicación con el peón avanzado.", ventaja: "Dama a salvo.", debilidad: "No defiende el alfil de g4, que queda completamente solo." } },
      { color: 'w', san: 'Bxg4', explain: { idea: "El alfil blanco captura el alfil negro de g4, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-903v2',
    name: 'Mate en 2 con la dama sola tras un jaque de atracción',
    tema: 'Mate en 2',
    nivel: 6,
    rating: 1879,
    userColor: 'w',
    startFen: '5k2/1N3p2/4q2b/p2p1p1R/r7/2Q5/5PP1/1K6 w - - 0 35',
    overview: "Posición real de una partida jugada en Lichess (rating 1879). Un jaque de dama obliga al rey a una única casilla, y la dama remata con jaque mate en la jugada siguiente.",
    moves: [
      { color: 'w', san: 'Qh8+', explain: { idea: "La dama blanca entra en h8 dando jaque.", ventaja: "Jaque forzado que dirige al rey exactamente a la casilla que blancas necesita.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Ke7', explain: { idea: "Única casilla legal para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda sin ninguna casilla de escape para la jugada siguiente." } },
      { color: 'w', san: 'Qd8#', explain: { idea: "La dama blanca entra en d8 dando jaque mate, apoyada por el resto de piezas blancas que ya cubrían las demás casillas de escape.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-wAez3',
    name: 'Eliminar al defensor antes de ganar la pieza que protegía',
    tema: 'Eliminación del defensor',
    nivel: 6,
    rating: 1700,
    userColor: 'w',
    startFen: '7k/1p6/2p4p/2P5/1P1Rb1PP/1r1p1NK1/3Rr3/8 w - - 1 42',
    overview: "Posición real de una partida jugada en Lichess (rating 1700). Blancas cambia primero la pieza que defendía un punto clave y, tras la recaptura obligada, captura directamente la pieza que ese defensor protegía.",
    moves: [
      { color: 'w', san: 'Rxe2', explain: { idea: "La torre blanca captura la torre negra de e2, la única pieza que de verdad defendía el alfil negro de e4.", ventaja: "Elimina al defensor clave de la posición negra.", debilidad: "Ninguna real, es un cambio." } },
      { color: 'b', san: 'dxe2', explain: { idea: "Única recaptura posible para negras.", ventaja: "Recupera la torre cambiada.", debilidad: "El alfil de e4 se queda sin ninguna defensa adicional." } },
      { color: 'w', san: 'Rxe4', explain: { idea: "La segunda torre blanca captura el alfil negro de e4, que se había quedado sin ninguna defensa tras la eliminación del defensor.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-oL2HD',
    name: 'Peón a un paso de coronar que decide el final',
    tema: 'Peón pasado a un paso de coronar',
    nivel: 6,
    rating: 1829,
    userColor: 'w',
    startFen: '6k1/5pp1/P3p1np/1N6/1K1P4/4P3/8/7r w - - 4 33',
    overview: "Final de piezas menores real de una partida jugada en Lichess (rating 1829). El peón pasado blanco llega a la séptima fila; ni el jaque de torre negro ni nada más puede evitar ya la coronación.",
    moves: [
      { color: 'w', san: 'a7', explain: { idea: "El peón blanco avanza a a7, a un solo paso de coronar.", ventaja: "Nada puede detenerlo ya de forma sencilla.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rb1+', explain: { idea: "Negras busca complicar con un jaque de torre, el único intento razonable de resistencia.", ventaja: "Gana un tempo antes de que el peón corone.", debilidad: "No detiene realmente la coronación, solo la retrasa una jugada." } },
      { color: 'w', san: 'Ka4', explain: { idea: "El rey blanco se aparta del jaque sin perder nada, dejando el peón listo para coronar en la jugada siguiente.", ventaja: "El peón sigue su camino intacto hacia la coronación.", debilidad: "Ninguna real -- decide la partida." } }
    ]
  },
  {
    id: 'h04-problema-lichess-dM6Aj',
    name: 'Jaque de alfil que atrae a la dama y permite ganarla con el caballo',
    tema: 'Atracción de la dama + horquilla de caballo',
    nivel: 6,
    rating: 1886,
    userColor: 'b',
    startFen: 'r1b2qk1/pp2bp1p/2n5/2pp2PQ/5P2/1P1P3N/PBn5/RN1K1B1R b - - 1 18',
    overview: "Posición real de una partida jugada en Lichess (rating 1886). Negras entrega el alfil con jaque para atraer a la dama blanca a una casilla concreta, y el caballo remata dando jaque y capturando la dama a continuación.",
    moves: [
      { color: 'b', san: 'Bg4+', explain: { idea: "El alfil negro entra en g4 dando jaque, ofreciéndose voluntariamente.", ventaja: "Atrae a la dama blanca a la única casilla desde la que puede capturarlo.", debilidad: "Entrega el alfil -- solo se justifica por lo que viene después." } },
      { color: 'w', san: 'Qxg4', explain: { idea: "Única forma razonable de responder al jaque: la dama captura el alfil.", ventaja: "Recupera el alfil entregado.", debilidad: "La dama queda exactamente en la casilla que el caballo negro necesita para el siguiente jaque." } },
      { color: 'b', san: 'Ne3+', explain: { idea: "El caballo negro entra en e3 dando jaque.", ventaja: "Jaque forzado que sigue dirigiendo la combinación.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kd2', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por salvar a la dama, que sigue atacada por el caballo." } },
      { color: 'b', san: 'Nxg4', explain: { idea: "El caballo negro captura la dama blanca, cerrando la combinación.", ventaja: "Gana la dama, la pieza más valiosa del tablero, sin ninguna compensación.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-ph8SQ',
    name: 'Mate en 2 con la dama infiltrada en la segunda fila',
    tema: 'Mate en 2',
    nivel: 6,
    rating: 1963,
    userColor: 'b',
    startFen: '6k1/4qpp1/p1p5/4PQ2/1PB2P1r/P5P1/3r4/2R2RK1 b - - 1 30',
    overview: "Posición real de una partida jugada en Lichess (rating 1963). Un jaque de dama obliga a interponer una torre, y la dama negra remata capturándola con jaque mate.",
    moves: [
      { color: 'b', san: 'Qa7+', explain: { idea: "La dama negra entra en a7 dando jaque.", ventaja: "Jaque forzado, dirige la combinación hacia el mate.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rf2', explain: { idea: "Única forma de tapar el jaque sin perder al rey de inmediato: interponer la torre.", ventaja: "Detiene el jaque momentáneamente.", debilidad: "La torre interpuesta queda exactamente en la casilla que la dama necesita capturar para el mate." } },
      { color: 'b', san: 'Qxf2#', explain: { idea: "La dama negra captura la torre dando jaque mate, apoyada por el resto de piezas negras que ya cubrían las demás casillas de escape.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-xYv8L',
    name: 'Jaque de dama seguido de una torre que se reagrupa a la defensa',
    tema: 'Jugada defensiva tras jaque',
    nivel: 6,
    rating: 2142,
    userColor: 'w',
    startFen: 'r7/1k4bp/2p1p1p1/2Pp4/B7/1P3Q2/1q3PPP/2R3K1 w - - 1 35',
    overview: "Posición real de una partida jugada en Lichess (rating 2142). Blancas da jaque con la dama y, tras la respuesta forzada del rey, reagrupa la torre a una columna donde puede ser útil para la defensa y el ataque.",
    moves: [
      { color: 'w', san: 'Qf7+', explain: { idea: "La dama blanca entra en f7 dando jaque.", ventaja: "Jaque forzado, gana un tiempo.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Ka6', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional -- el rey queda a salvo por ahora." } },
      { color: 'w', san: 'Rf1', explain: { idea: "La torre blanca se reagrupa a f1, quedando lista para participar tanto en la defensa como en un ataque futuro.", ventaja: "Pieza mucho más útil, coordinada con el resto del ataque blanco.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-bCQG7',
    name: 'Ruptura de peones en un final de alfiles de distinto color',
    tema: 'Ruptura de peones en final de alfiles',
    nivel: 6,
    rating: 1965,
    userColor: 'b',
    startFen: '3b4/8/1p2p1k1/1Pp1Pp2/2P3pp/4PP2/6KP/4B3 b - - 1 32',
    overview: "Final de alfiles real de una partida jugada en Lichess (rating 1965). Negras rompe la estructura de peones con jaque, avanza el rey y termina recapturando en una posición de peones mucho más activa.",
    moves: [
      { color: 'b', san: 'h3+', explain: { idea: "El peón negro avanza a h3 dando jaque.", ventaja: "Jaque forzado que gana espacio en el flanco de rey.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kg3', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional." } },
      { color: 'b', san: 'Kh5', explain: { idea: "El rey negro avanza a h5, apoyando el avance de sus propios peones.", ventaja: "Rey activo, cerca de la acción decisiva.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'fxg4+', explain: { idea: "Blancas captura el peón de g4 dando jaque, buscando algo de contrajuego.", ventaja: "Recupera algo de material.", debilidad: "No detiene el plan negro de seguir mejorando su estructura de peones." } },
      { color: 'b', san: 'fxg4', explain: { idea: "Negras recaptura con el propio peón, quedando con una estructura de peones mucho más activa.", ventaja: "Estructura de peones favorable, con clara ventaja en el final de alfiles.", debilidad: "Ninguna real -- cierra el fragmento con ventaja para negras." } }
    ]
  },
  // ============================================================
  // PROBLEMAS DE AJEDREZ -- banco tactico Lichess, lote 5 (S6)
  // ============================================================
  {
    id: 'h04-problema-lichess-nlP5G',
    name: 'Cambio de peones que deja el mejor final para negras',
    tema: 'Cambios de peones en el final',
    nivel: 6,
    rating: 2126,
    userColor: 'b',
    startFen: '8/2p5/1p1p4/2PP3k/P3P1p1/6K1/8/8 b - - 0 44',
    overview: "Final de peones real de una partida jugada en Lichess (rating 2126). Una serie de cambios de peones en ambos flancos termina dejando a negras con la mejor estructura y el rey más activo.",
    moves: [
      { color: 'b', san: 'dxc5', explain: { idea: "Negras captura el peón de c5, la única captura disponible.", ventaja: "Gana un peón y abre líneas en el flanco de dama.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'e5', explain: { idea: "Blancas avanza el peón central a e5, buscando compensación.", ventaja: "Gana algo de espacio.", debilidad: "No recupera el peón ya perdido." } },
      { color: 'b', san: 'Kg5', explain: { idea: "El rey negro avanza a g5, acercándose a la acción decisiva.", ventaja: "Rey activo, listo para intervenir en cualquier flanco.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'a5', explain: { idea: "Blancas avanza el peón a a5, buscando crear contrajuego en el flanco de dama.", ventaja: "Intenta complicar la posición.", debilidad: "Crea un nuevo objetivo que negras captura de inmediato." } },
      { color: 'b', san: 'bxa5', explain: { idea: "Negras captura el peón de a5, ampliando la ventaja de peones.", ventaja: "Ventaja material y posicional clara en el final de peones.", debilidad: "Ninguna real -- cierra el fragmento con posición ganadora." } }
    ]
  },
  {
    id: 'h04-problema-lichess-b7xPT',
    name: 'Jaque de caballo que abre paso a la captura de la dama',
    tema: 'Jaque de caballo que gana la dama',
    nivel: 6,
    rating: 2141,
    userColor: 'b',
    startFen: 'rn3Bk1/pp2q3/3pP3/2p2p2/2P1p1n1/2P3K1/P1Q1P1B1/R2R4 b - - 2 19',
    overview: "Posición real de una partida jugada en Lichess (rating 2141). Tras un cambio de peones, negras entra con el caballo dando jaque y remata capturando la dama blanca, que se había quedado sin ninguna defensa.",
    moves: [
      { color: 'b', san: 'Qg5', explain: { idea: "La dama negra se traslada a g5, amenazando entrar más adelante en la posición blanca.", ventaja: "Pieza activa.", debilidad: "Ninguna real, jugada de preparación." } },
      { color: 'w', san: 'Bxd6', explain: { idea: "Blancas captura el peón de d6, ignorando la amenaza real que se avecina.", ventaja: "Gana un peón.", debilidad: "No se ocupa de proteger la casilla c2, clave para lo que viene después." } },
      { color: 'b', san: 'Ne3+', explain: { idea: "El caballo negro entra en e3 dando jaque.", ventaja: "Jaque forzado que sigue dirigiendo la combinación.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kf2', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por defender la dama, que el caballo va a capturar en la jugada siguiente." } },
      { color: 'b', san: 'Nxc2', explain: { idea: "El caballo negro captura la dama blanca de c2, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, la pieza más valiosa del tablero.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-BJ5Uu',
    name: 'Mate en 2 con las dos torres coordinadas',
    tema: 'Mate en 2 con dos torres',
    nivel: 6,
    rating: 1705,
    userColor: 'b',
    startFen: '4r3/p2k4/P1p3N1/3p1p1p/3K1P2/4r1P1/6P1/RR6 b - - 0 33',
    overview: "Posición real de una partida jugada en Lichess (rating 1705). Un jaque de torre obliga al rey blanco a una única casilla, y la segunda torre negra remata con jaque mate.",
    moves: [
      { color: 'b', san: 'R8e4+', explain: { idea: "La torre negra entra en e4 dando jaque.", ventaja: "Jaque forzado que dirige al rey a la casilla que negras necesita.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kc5', explain: { idea: "Única casilla legal para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda sin ninguna casilla de escape para la jugada siguiente." } },
      { color: 'b', san: 'Rc4#', explain: { idea: "La segunda torre negra entra en c4 dando jaque mate, apoyada por el resto de piezas negras que ya cubrían las demás casillas de escape.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-ft0mf',
    name: 'Coronación que se cambia por la dama rival y remata ganando una torre',
    tema: 'Coronación con cambio de damas',
    nivel: 6,
    rating: 1972,
    userColor: 'b',
    startFen: 'r4rk1/p7/1p2Rpq1/2pP1R1p/8/5Q1P/PP1p1PPK/8 b - - 1 28',
    overview: "Final de peones y piezas real de una partida jugada en Lichess (rating 1972). El peón negro corona; tras el cambio de damas obligado, la nueva dama negra captura también una torre blanca suelta.",
    moves: [
      { color: 'b', san: 'd1=Q', explain: { idea: "El peón negro corona en d1, convirtiéndose en una nueva dama.", ventaja: "Recupera material decisivo de golpe.", debilidad: "La nueva dama queda expuesta a la captura de la dama blanca." } },
      { color: 'w', san: 'Qxd1', explain: { idea: "Única forma razonable de responder: la dama blanca captura a la recién coronada.", ventaja: "Elimina la nueva dama negra.", debilidad: "La propia dama blanca queda ahora en una casilla que la dama negra original puede atacar." } },
      { color: 'b', san: 'Qxf5', explain: { idea: "La dama negra original captura la torre blanca de f5, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa además de haber neutralizado la coronación con un cambio de damas equilibrado.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-F4Idw',
    name: 'Cambio de peones seguido de una carrera de reyes',
    tema: 'Carrera de reyes en el final de peones',
    nivel: 6,
    rating: 2096,
    userColor: 'b',
    startFen: '8/8/8/p2k4/P1p3p1/1PK3Pp/7P/8 b - - 0 42',
    overview: "Final de reyes y peones real de una partida jugada en Lichess (rating 2096). Tras un cambio de peones, ambos reyes se lanzan a una carrera hacia el centro del tablero.",
    moves: [
      { color: 'b', san: 'cxb3', explain: { idea: "Negras captura el peón de b3, la única captura disponible.", ventaja: "Gana un peón.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kxb3', explain: { idea: "Única recaptura posible para blancas.", ventaja: "Recupera el peón cambiado.", debilidad: "El rey blanco queda alejado del centro del tablero." } },
      { color: 'b', san: 'Kd4', explain: { idea: "El rey negro avanza a d4, ganando la carrera hacia el centro.", ventaja: "Rey mucho más activo que su homólogo blanco.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kc2', explain: { idea: "El rey blanco intenta acercarse, pero llega tarde.", ventaja: "Ninguna real que compense la desventaja de tiempo ya sufrida.", debilidad: "No alcanza al rey negro en la carrera hacia las casillas clave." } },
      { color: 'b', san: 'Kc4', explain: { idea: "El rey negro avanza a c4, consolidando la ventaja de actividad en el final.", ventaja: "Posición claramente mejor para negras en el final de reyes.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-aX79s',
    name: 'Cambio de damas tras una cadena de jaques',
    tema: 'Cambio de damas tras jaques en cadena',
    nivel: 6,
    rating: 2189,
    userColor: 'w',
    startFen: 'r2q1r1k/1p3pp1/4p2p/3pP2Q/5P2/p2PPR1R/p2K2PP/8 w - - 0 22',
    overview: "Posición real de una partida jugada en Lichess (rating 2189). Blancas reposiciona una torre y, tras dos jaques de dama negra, ambas damas terminan cambiándose en una posición favorable para blancas.",
    moves: [
      { color: 'w', san: 'Rfg3', explain: { idea: "La torre blanca se reagrupa a g3, mejorando su coordinación antes de cualquier complicación.", ventaja: "Pieza más útil.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qa5+', explain: { idea: "La dama negra entra en a5 dando jaque, buscando complicar la posición.", ventaja: "Jaque forzado, gana un tiempo.", debilidad: "Ninguna real para negras." } },
      { color: 'w', san: 'Ke2', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional." } },
      { color: 'b', san: 'Qe1+', explain: { idea: "La dama negra sigue con un segundo jaque desde e1.", ventaja: "Mantiene la iniciativa momentánea.", debilidad: "Se ofrece a ser capturada por el rey." } },
      { color: 'w', san: 'Kxe1', explain: { idea: "El rey blanco captura la dama negra, la única forma legal de responder al jaque.", ventaja: "Elimina la dama negra, quedando con una posición sólida y sin ningún peligro real.", debilidad: "Ninguna real -- cierra el fragmento con ventaja para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-RL0ts',
    name: 'Sacrificio de torre que atrae al rey al mate con la dama',
    tema: 'Atracción del rey con doble sacrificio de torre',
    nivel: 6,
    rating: 2088,
    userColor: 'b',
    startFen: '4r2k/R4p1p/5p2/4q3/PP1Q2R1/7P/2P1r1P1/5K2 b - - 2 33',
    overview: "Posición real de una partida jugada en Lichess (rating 2088). Negras entrega la torre dos veces seguidas con jaque para arrastrar al rey blanco a una casilla concreta, y remata con jaque mate de dama.",
    moves: [
      { color: 'b', san: 'Re1+', explain: { idea: "La torre negra entra en e1 dando jaque, ofreciéndose.", ventaja: "Atrae al rey blanco hacia la casilla que negras necesita.", debilidad: "Entrega la torre -- solo se justifica por lo que viene después." } },
      { color: 'w', san: 'Kf2', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey se acerca todavía más a la trampa." } },
      { color: 'b', san: 'Rf1+', explain: { idea: "La torre negra insiste con un segundo jaque desde f1, ofreciéndose de nuevo.", ventaja: "Sigue atrayendo al rey hacia la casilla exacta del mate.", debilidad: "Entrega también esta torre." } },
      { color: 'w', san: 'Kxf1', explain: { idea: "Única forma de responder al jaque: el rey captura la torre.", ventaja: "Recupera la segunda torre entregada.", debilidad: "El rey queda exactamente en la casilla que la dama negra necesita para el jaque mate." } },
      { color: 'b', san: 'Qe1#', explain: { idea: "La dama negra entra en e1 dando jaque mate, sin que ninguna pieza blanca pueda capturarla ni interponerse.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-0YH84',
    name: 'Doble sacrificio de caballo y torre que gana material con jaques',
    tema: 'Atracción del rey con doble sacrificio',
    nivel: 6,
    rating: 1818,
    userColor: 'w',
    startFen: '8/2p2k2/2n2b2/p4R2/Pp1prB2/1P3NK1/2P5/8 w - - 1 39',
    overview: "Posición real de una partida jugada en Lichess (rating 1818). Blancas entrega primero el caballo y luego la torre, ambos con jaque, arrastrando al rey negro a una posición donde el caballo remata ganando una torre adicional.",
    moves: [
      { color: 'w', san: 'Ng5+', explain: { idea: "El caballo blanco entra en g5 dando jaque, ofreciéndose.", ventaja: "Atrae al rey hacia una casilla concreta.", debilidad: "Entrega el caballo -- solo se justifica por lo que viene después." } },
      { color: 'b', san: 'Kg6', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda cerca de la zona donde blancas prepara el siguiente golpe." } },
      { color: 'w', san: 'Rxf6+', explain: { idea: "La torre blanca captura el alfil de f6 dando jaque, un segundo sacrificio.", ventaja: "Sigue atrayendo al rey, ahora también ganando una pieza en el proceso.", debilidad: "Entrega la torre a cambio." } },
      { color: 'b', san: 'Kxf6', explain: { idea: "Única forma de responder al jaque: el rey captura la torre.", ventaja: "Recupera la torre entregada.", debilidad: "El rey queda exactamente en la casilla que el caballo blanco necesita para el jaque siguiente." } },
      { color: 'w', san: 'Nxe4+', explain: { idea: "El caballo blanco captura la torre negra de e4 dando jaque.", ventaja: "Gana una torre adicional, cerrando la combinación con ventaja material decisiva pese a los sacrificios previos.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-jXayg',
    name: 'Cambio de damas seguido de jaque de alfil y mate de torre',
    tema: 'Atracción del rey + mate con torre',
    nivel: 6,
    rating: 1931,
    userColor: 'w',
    startFen: 'r1b2rk1/1p2Qppp/p7/3p1q2/2B5/2n5/P4PPP/R1B1R1K1 w - - 0 18',
    overview: "Posición real de una partida jugada en Lichess (rating 1931). Tras un cambio de damas, un jaque de alfil dirige al rey negro a la esquina, donde la torre blanca remata con jaque mate.",
    moves: [
      { color: 'w', san: 'Qxf8+', explain: { idea: "La dama blanca captura la torre negra de f8 dando jaque.", ventaja: "Gana una torre con jaque incluido.", debilidad: "Entrega la propia dama a cambio, ya que la torre estaba defendida." } },
      { color: 'b', san: 'Kxf8', explain: { idea: "Única forma de recapturar sin perder más material.", ventaja: "Recupera la torre a cambio de la dama.", debilidad: "El rey negro queda expuesto en f8, sin ninguna pieza propia cerca que lo proteja." } },
      { color: 'w', san: 'Ba3+', explain: { idea: "El alfil blanco entra en a3 dando jaque.", ventaja: "Jaque forzado que dirige al rey hacia la esquina.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kg8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda completamente encerrado en la esquina, sin ninguna vía de escape futura." } },
      { color: 'w', san: 'Re8#', explain: { idea: "La torre blanca entra en e8 dando jaque mate, apoyada por el alfil que ya cubre la diagonal.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-rhFqG',
    name: 'Sacrificio de dama con jaque que remata ganando un caballo',
    tema: 'Sacrificio de dama con jaque',
    nivel: 6,
    rating: 1724,
    userColor: 'b',
    startFen: '4r1k1/1bp2p2/3p1qp1/1p1P4/6n1/1B4NP/P4PPN/R1Q3K1 b - - 1 27',
    overview: "Posición real de una partida jugada en Lichess (rating 1724). Negras entrega la dama con jaque, y tras reagrupar el caballo, recupera una segunda dama capturando el caballo blanco que la amenazaba.",
    moves: [
      { color: 'b', san: 'Qxf2+', explain: { idea: "La dama negra captura el peón de f2 con jaque, entregándose voluntariamente.", ventaja: "Jaque forzado, aunque a costa de la propia dama.", debilidad: "Entrega la dama -- solo se justifica por lo que sigue." } },
      { color: 'w', san: 'Kh1', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional -- la dama negra sigue en el tablero, sin haber sido capturada todavía." } },
      { color: 'b', san: 'Ne3', explain: { idea: "El caballo negro se reagrupa a e3, reforzando la presión sin perder tiempo.", ventaja: "Pieza muy activa, cerca del rey blanco.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Qg1', explain: { idea: "La dama blanca se retira a g1, evitando cualquier captura directa inmediata.", ventaja: "Dama a salvo momentáneamente.", debilidad: "Deja el caballo blanco de g3 sin ninguna defensa adicional." } },
      { color: 'b', san: 'Qxg3', explain: { idea: "La dama negra captura el caballo blanco de g3, que se había quedado sin ninguna defensa.", ventaja: "Recupera material adicional, quedando con ventaja decisiva pese al sacrificio inicial.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-GIPQG',
    name: 'Carrera de peones que el rey blanco gana por un tiempo',
    tema: 'Carrera de peones en el final de reyes',
    nivel: 6,
    rating: 1885,
    userColor: 'w',
    startFen: '8/7p/4pp1K/8/3k4/5PP1/7P/8 w - - 4 50',
    overview: "Final de reyes y peones real de una partida jugada en Lichess (rating 1885). El rey blanco captura un peón suelto y gana la carrera hacia el flanco de rey, capturando también el último peón negro que quedaba.",
    moves: [
      { color: 'w', san: 'Kxh7', explain: { idea: "El rey blanco captura el peón de h7, la única captura disponible.", ventaja: "Gana un peón limpio.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'e5', explain: { idea: "Negras avanza el peón a e5, buscando crear su propio contrajuego en el otro extremo.", ventaja: "Único intento razonable de complicar la posición.", debilidad: "Llega demasiado tarde: el rey blanco ya está mucho más cerca de sus objetivos." } },
      { color: 'w', san: 'Kg6', explain: { idea: "El rey blanco avanza a g6, acercándose todavía más al resto de peones negros.", ventaja: "Rey mucho más activo que su homólogo negro.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'f5', explain: { idea: "Negras avanza otro peón a f5, el último intento razonable de crear complicaciones.", ventaja: "Ninguna real que compense la carrera ya perdida.", debilidad: "Deja el peón sin ninguna defensa extra." } },
      { color: 'w', san: 'Kxf5', explain: { idea: "El rey blanco captura también el peón de f5.", ventaja: "Gana un segundo peón, ampliando la ventaja decisiva en el final.", debilidad: "Ninguna real, cierra el fragmento con posición ganadora." } }
    ]
  },
  {
    id: 'h04-problema-lichess-hDp7t',
    name: 'Cambio de piezas que termina con la dama y la torre ganadas',
    tema: 'Serie de cambios favorables en la columna d',
    nivel: 6,
    rating: 2088,
    userColor: 'w',
    startFen: 'r1r3k1/5pp1/5n1p/p2q1b2/8/PnB2N2/4BPPP/2RQ1RK1 w - - 2 21',
    overview: "Posición real de una partida jugada en Lichess (rating 2088). Una serie de cambios forzados en el centro del tablero termina con blancas ganando la dama negra y, tras el cambio de torres, recuperando también la propia dama.",
    moves: [
      { color: 'w', san: 'Bxf6', explain: { idea: "El alfil blanco captura el caballo negro de f6, la única forma de justificar la entrega si negras recaptura con la dama.", ventaja: "Elimina una pieza defensiva clave.", debilidad: "Ninguna real, es un cambio favorable si la recaptura es con la dama." } },
      { color: 'b', san: 'Qxd1', explain: { idea: "Negras recaptura con la dama, capturando además la dama blanca de d1 que estaba indefensa.", ventaja: "Gana la dama blanca.", debilidad: "La propia dama negra queda ahora en d1, una casilla que la torre blanca puede atacar con jaque." } },
      { color: 'w', san: 'Rxc8+', explain: { idea: "La torre blanca captura la torre negra de c8 dando jaque.", ventaja: "Gana una torre con jaque, manteniendo la iniciativa pese a la pérdida de la dama.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rxc8', explain: { idea: "Única recaptura posible para negras.", ventaja: "Recupera la torre cambiada.", debilidad: "La dama negra de d1 sigue sin ninguna defensa adicional." } },
      { color: 'w', san: 'Bxd1', explain: { idea: "El alfil blanco captura la dama negra de d1, que se había quedado sin ninguna defensa.", ventaja: "Recupera la dama, dejando el balance final claramente a favor de blancas tras toda la serie de cambios.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-BQZnp',
    name: 'Cambio de alfiles que despeja el camino a un jaque decisivo',
    tema: 'Despeje de diagonal + jaque decisivo',
    nivel: 6,
    rating: 1732,
    userColor: 'b',
    startFen: 'r1b1k1nr/pppnqppp/3bp3/1N1p4/3P1B2/5N2/PPPQPPPP/R3KB1R b KQkq - 7 6',
    overview: "Posición real de una partida jugada en Lichess (rating 1732). Tras cambiar un par de alfiles, negras entra con la dama dando jaque y remata capturando un caballo suelto.",
    moves: [
      { color: 'b', san: 'Bxf4', explain: { idea: "El alfil negro captura el alfil blanco de f4, la única captura disponible.", ventaja: "Elimina una pieza defensiva clave.", debilidad: "Ninguna real, es un cambio." } },
      { color: 'w', san: 'Qxf4', explain: { idea: "Única recaptura posible para blancas.", ventaja: "Recupera el alfil cambiado.", debilidad: "La diagonal queda despejada para la dama negra." } },
      { color: 'b', san: 'Qb4+', explain: { idea: "La dama negra entra en b4 dando jaque, aprovechando la diagonal recién despejada.", ventaja: "Jaque forzado que mantiene la iniciativa.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'c3', explain: { idea: "Única forma razonable de tapar el jaque.", ventaja: "Detiene el jaque momentáneamente.", debilidad: "No defiende el caballo de b5, que queda completamente solo." } },
      { color: 'b', san: 'Qxb5', explain: { idea: "La dama negra captura el caballo blanco de b5, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-VTvGV',
    name: 'Cambio de damas seguido de doble jaque de caballo que gana la segunda dama',
    tema: 'Cambio de damas + horquilla de caballo',
    nivel: 6,
    rating: 1955,
    userColor: 'w',
    startFen: 'r2k1r2/pp2nQbp/2nN4/6q1/3P4/2P2B1b/PP4PP/R4RK1 w - - 3 18',
    overview: "Posición real de una partida jugada en Lichess (rating 1955). Tras cambiar las damas, el caballo blanco encadena dos jaques, el segundo de los cuales captura una segunda dama negra suelta.",
    moves: [
      { color: 'w', san: 'Qxf8+', explain: { idea: "La dama blanca captura la torre negra de f8 dando jaque.", ventaja: "Gana una torre con jaque incluido.", debilidad: "Entrega la propia dama a cambio, ya que la torre estaba defendida." } },
      { color: 'b', san: 'Bxf8', explain: { idea: "Única forma de recapturar sin perder más material.", ventaja: "Recupera la torre a cambio de la dama.", debilidad: "Ninguna real adicional." } },
      { color: 'w', san: 'Nf7+', explain: { idea: "El caballo blanco entra en f7 dando jaque.", ventaja: "Jaque forzado que sigue la combinación.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kc7', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por defender la segunda dama negra, que sigue en el tablero sin protección adicional." } },
      { color: 'w', san: 'Nxg5', explain: { idea: "El caballo blanco captura la segunda dama negra de g5, que se había quedado sin ninguna defensa.", ventaja: "Gana una segunda dama en la misma combinación, ventaja material decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-VQjo5',
    name: 'Doble sacrificio en el flanco de rey que termina en mate',
    tema: 'Atracción del rey con doble sacrificio + mate de torre',
    nivel: 6,
    rating: 2068,
    userColor: 'w',
    startFen: 'r4rk1/pp1q1p1p/2p1nP1Q/2b1PRp1/6P1/2p3R1/PP5P/7K w - - 0 30',
    overview: "Posición real de una partida jugada en Lichess (rating 2068). Blancas entrega primero un peón capturado con jaque y luego la propia dama, arrastrando al rey negro a una posición donde la torre remata con jaque mate.",
    moves: [
      { color: 'w', san: 'Rxg5+', explain: { idea: "La torre blanca captura el peón de g5 dando jaque.", ventaja: "Jaque forzado que empieza a abrir la posición del rey negro.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kh8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda encerrado en la esquina, sin ninguna vía de escape futura." } },
      { color: 'w', san: 'Qxh7+', explain: { idea: "La dama blanca captura el peón de h7 dando jaque, ofreciéndose a ser capturada.", ventaja: "Atrae al rey a capturarla, completando la red de mate.", debilidad: "Entrega la dama -- solo se justifica por lo que viene después." } },
      { color: 'b', san: 'Kxh7', explain: { idea: "Única forma de responder al jaque: el rey captura la dama.", ventaja: "Recupera la dama entregada.", debilidad: "El rey queda completamente solo en la esquina, sin ninguna pieza que lo proteja." } },
      { color: 'w', san: 'Rh3#', explain: { idea: "La torre blanca entra en h3 dando jaque mate, sin que ninguna pieza negra pueda capturarla ni interponerse.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  // ============================================================
  // PROBLEMAS DE AJEDREZ -- banco tactico Lichess, lote 6 (S6)
  // ============================================================
  {
    id: 'h04-problema-lichess-G5tx2',
    name: 'Serie de cambios en el centro que termina con el rey a salvo',
    tema: 'Jugada defensiva del rey tras una serie de cambios',
    nivel: 6,
    rating: 2001,
    userColor: 'b',
    startFen: 'r1bqk1nr/ppp3pp/2n2p2/1B1pN3/1b6/1P2P3/PBPP1PPP/RN1QK2R b KQkq - 0 6',
    overview: "Posición real de una partida jugada en Lichess (rating 2001), en fase de apertura. Tras una serie de capturas mutuas en el centro, negras responde al último jaque llevando el rey a una casilla segura.",
    moves: [
      { color: 'b', san: 'fxe5', explain: { idea: "Negras captura el caballo blanco de e5 con el propio peón, la única forma razonable de responder a la amenaza sobre el peón de f6.", ventaja: "Elimina una pieza avanzada blanca.", debilidad: "Ninguna real, es una recaptura natural." } },
      { color: 'w', san: 'Bxc6+', explain: { idea: "El alfil blanco captura el caballo negro de c6 dando jaque.", ventaja: "Cambio favorable con jaque, manteniendo la iniciativa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'bxc6', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera el alfil cambiado.", debilidad: "La estructura de peones del flanco de dama queda debilitada." } },
      { color: 'w', san: 'Qh5+', explain: { idea: "La dama blanca entra en h5 dando jaque, aprovechando que el rey negro todavía no ha enrocado.", ventaja: "Jaque forzado que mantiene la iniciativa blanca.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kf8', explain: { idea: "Única casilla razonable para salir del jaque sin perder más material.", ventaja: "El rey queda a salvo por ahora, sin ceder nada adicional.", debilidad: "Pierde el derecho al enroque, quedando algo incómodo para el resto de la partida." } }
    ]
  },
  {
    id: 'h04-problema-lichess-YQYPh',
    name: 'Carrera de reyes en un final de peones',
    tema: 'Carrera de reyes por los peones sueltos',
    nivel: 6,
    rating: 1769,
    userColor: 'w',
    startFen: '8/7p/6p1/Pk4P1/8/4K3/5p2/8 w - - 0 66',
    overview: "Final de peones real de una partida jugada en Lichess (rating 1769). Ambos reyes capturan un peón suelto cada uno antes de continuar la carrera hacia la zona decisiva del tablero.",
    moves: [
      { color: 'w', san: 'Kxf2', explain: { idea: "El rey blanco captura el peón negro de f2, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón limpio.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kxa5', explain: { idea: "El rey negro captura a su vez el peón blanco de a5.", ventaja: "Recupera la igualdad material.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Ke3', explain: { idea: "El rey blanco se centraliza en e3, preparando apoyar el avance de sus propios peones restantes.", ventaja: "Rey activo, bien posicionado para el resto del final.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-xDNK2',
    name: 'Cambios forzados en la última fila que terminan en tablas de material',
    tema: 'Serie de cambios forzados en el final de torres',
    nivel: 6,
    rating: 1921,
    userColor: 'w',
    startFen: '8/pRPR1pk1/6p1/7p/8/P7/2r2r2/3K4 w - - 0 49',
    overview: "Final de torres real de una partida jugada en Lichess (rating 1921). Una cadena de capturas con jaque en ambos lados del tablero termina simplificando la posición.",
    moves: [
      { color: 'w', san: 'Rxf7+', explain: { idea: "La torre blanca captura el peón de f7 dando jaque.", ventaja: "Gana un peón con jaque.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rxf7', explain: { idea: "Única recaptura posible para negras.", ventaja: "Recupera la torre cambiada.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kxc2', explain: { idea: "El rey blanco captura la torre negra de c2, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rxc7+', explain: { idea: "La torre negra captura el peón de c7 dando jaque, buscando compensación inmediata.", ventaja: "Recupera algo de material con jaque.", debilidad: "Ninguna real para negras en este movimiento concreto." } },
      { color: 'w', san: 'Rxc7+', explain: { idea: "La torre blanca recaptura dando jaque también, cerrando la serie de cambios con ventaja para blancas.", ventaja: "Mantiene la ventaja material conseguida en el intercambio general.", debilidad: "Ninguna, cierra la secuencia." } }
    ]
  },
  {
    id: 'h04-problema-lichess-kItw1',
    name: 'Un peón que avanza y se come la dama rival',
    tema: 'Peón avanzado que captura la dama',
    nivel: 6,
    rating: 1869,
    userColor: 'b',
    startFen: '8/p7/1b2q1k1/1Pp1R1np/2P2p2/6P1/1B2QPK1/8 b - - 0 41',
    overview: "Posición real de una partida jugada en Lichess (rating 1869). El peón negro avanza dando jaque y, en la jugada siguiente, captura directamente la dama blanca -- el peón más valioso de todo el tablero en ese instante.",
    moves: [
      { color: 'b', san: 'f3+', explain: { idea: "El peón negro avanza a f3 dando jaque.", ventaja: "Jaque forzado que además amenaza seguir avanzando hacia la coronación.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kg1', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna que evite lo que viene a continuación." } },
      { color: 'b', san: 'fxe2', explain: { idea: "El peón negro captura la dama blanca de e2, que se había quedado sin ninguna defensa suficiente.", ventaja: "Gana la dama, la pieza más valiosa del tablero, con un simple peón.", debilidad: "Ninguna real inmediata." } },
      { color: 'w', san: 'Rxe6+', explain: { idea: "La torre blanca captura la dama negra de e6 dando jaque, la única forma de blancas de recuperar algo de material.", ventaja: "Recupera la dama negra con jaque.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Nxe6', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera la torre, quedando con el balance final claramente a favor de negras (dama por torre).", debilidad: "Ninguna real -- cierra el fragmento con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Pto26',
    name: 'Sacrificio de dama clásico que abre camino al mate de torre',
    tema: 'Sacrificio de dama + mate de torre',
    nivel: 6,
    rating: 1976,
    userColor: 'w',
    startFen: 'r4rk1/1p1n1p1p/p1qb2p1/2pp3Q/5p2/1P1PP1R1/PBPN2PP/R5K1 w - - 0 17',
    overview: "Posición real de una partida jugada en Lichess (rating 1976). Blancas entrega la dama para arrastrar al rey negro fuera de su refugio, y remata con un mate de torre en la columna h.",
    moves: [
      { color: 'w', san: 'Qxh7+', explain: { idea: "La dama blanca captura el peón de h7 dando jaque, ofreciéndose voluntariamente.", ventaja: "Atrae al rey negro exactamente a la casilla que blancas necesita.", debilidad: "Entrega la dama -- solo se justifica por lo que viene después." } },
      { color: 'b', san: 'Kxh7', explain: { idea: "Única forma de responder al jaque: el rey captura la dama.", ventaja: "Recupera la dama entregada.", debilidad: "El rey queda completamente expuesto en la columna h." } },
      { color: 'w', san: 'Rh3+', explain: { idea: "La torre blanca entra en h3 dando jaque.", ventaja: "Jaque forzado que sigue empujando al rey.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kg8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda sin ninguna vía de escape para la jugada siguiente." } },
      { color: 'w', san: 'Rh8#', explain: { idea: "La torre blanca entra en h8 dando jaque mate, sin que ninguna pieza negra pueda capturarla ni interponerse.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-RZimt',
    name: 'La dama negra recoge dos peones con jaques antes de retirarse a salvo',
    tema: 'Dama activa que gana material con jaques',
    nivel: 6,
    rating: 1894,
    userColor: 'b',
    startFen: 'r4rk1/ppp2p1p/3q2np/8/1bBPN3/5Q1P/PPP3P1/R4RK1 b - - 1 15',
    overview: "Posición real de una partida jugada en Lichess (rating 1894). La dama negra captura un peón central con jaque, luego un segundo peón, y se retira a salvo tras el contrajuego blanco.",
    moves: [
      { color: 'b', san: 'Qxd4+', explain: { idea: "La dama negra captura el peón central de d4 dando jaque.", ventaja: "Gana un peón con jaque, ganando tiempo.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kh1', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No defiende el segundo peón de c4, que sigue expuesto." } },
      { color: 'b', san: 'Qxc4', explain: { idea: "La dama negra captura también el peón de c4.", ventaja: "Gana un segundo peón, ampliando la ventaja material.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Nf6+', explain: { idea: "El caballo blanco entra dando jaque, buscando algo de contrajuego.", ventaja: "Jaque forzado, gana un tiempo para blancas.", debilidad: "No recupera nada del material ya perdido." } },
      { color: 'b', san: 'Kh8', explain: { idea: "Única casilla razonable para salir del jaque, sin ceder nada de la ventaja ya conseguida.", ventaja: "El rey se pone a salvo con dos peones de ventaja limpia asegurados.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-rdJIk',
    name: 'Torre activa que persigue al rey con jaques consecutivos',
    tema: 'Torre activa acosando al rey en el final',
    nivel: 6,
    rating: 1718,
    userColor: 'b',
    startFen: '8/8/5k2/4R2p/4K2P/1r4P1/8/8 b - - 0 53',
    overview: "Final de torres real de una partida jugada en Lichess (rating 1718). La torre negra encadena jaques que van desplazando al rey blanco, ganando tiempo y actividad en el final.",
    moves: [
      { color: 'b', san: 'Rb4+', explain: { idea: "La torre negra entra en b4 dando jaque.", ventaja: "Jaque forzado, gana tiempo y actividad.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kd5', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey blanco queda más expuesto en el centro del tablero." } },
      { color: 'b', san: 'Rb5+', explain: { idea: "La torre negra sigue con un segundo jaque desde b5.", ventaja: "Mantiene la iniciativa y la actividad de la torre en el final.", debilidad: "Ninguna real -- la posición sigue siendo favorable para negras aunque el fragmento no llegue todavía a una conclusión material." } }
    ]
  },
  {
    id: 'h04-problema-lichess-2v1QN',
    name: 'Jaque de caballo que ataca al rey y al alfil a la vez',
    tema: 'Horquilla de caballo',
    nivel: 6,
    rating: 1703,
    userColor: 'w',
    startFen: 'r3r3/ppp2ppp/2n2k2/2b3N1/8/2P5/PP1N1PPP/R1R2K2 w - - 7 17',
    overview: "Posición real de una partida jugada en Lichess (rating 1703). El caballo blanco entra dando jaque y, en la misma jugada, ataca directamente al alfil negro -- una horquilla real que lo gana sin compensación.",
    moves: [
      { color: 'w', san: 'Nge4+', explain: { idea: "El caballo blanco entra en e4 dando jaque y, al mismo tiempo, ataca directamente al alfil negro de c5.", ventaja: "Doble amenaza real: el jaque es inmediato y el alfil queda bajo ataque sin ninguna forma de defenderlo a la vez.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kg6', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por salvar al alfil, que sigue atacado por el caballo." } },
      { color: 'w', san: 'Nxc5', explain: { idea: "El caballo blanco captura el alfil negro, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-sjXiz',
    name: 'El rey se aproxima antes de rematar con jaque mate',
    tema: 'Aproximación del rey + mate de torre',
    nivel: 6,
    rating: 1986,
    userColor: 'w',
    startFen: '6B1/R6p/7k/4n3/1P4K1/7P/pr2p3/8 w - - 2 50',
    overview: "Final de piezas real de una partida jugada en Lichess (rating 1986). Blancas mejora la posición del rey, gana el caballo negro, y a pesar de la desesperada coronación negra, remata con jaque mate.",
    moves: [
      { color: 'w', san: 'Kf5', explain: { idea: "El rey blanco avanza a f5, mejorando su posición antes de decidir el plan final.", ventaja: "Rey más activo, cerca de la acción decisiva.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Nd7', explain: { idea: "El caballo negro se retira a d7, buscando algo de seguridad.", ventaja: "Ninguna real para negras.", debilidad: "No encuentra ninguna casilla realmente segura." } },
      { color: 'w', san: 'Rxd7', explain: { idea: "La torre blanca captura el caballo negro de d7, que se había quedado sin ninguna defensa suficiente.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'a1=Q', explain: { idea: "Negras corona el último peón como intento desesperado de complicar la posición.", ventaja: "Es el único recurso que le queda a negras.", debilidad: "Llega demasiado tarde para cambiar el resultado." } },
      { color: 'w', san: 'Rxh7#', explain: { idea: "La torre blanca captura el peón de h7 dando jaque mate, apoyada por el resto de piezas blancas que ya cubrían las demás casillas de escape.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-YErlk',
    name: 'Cambio de torres seguido de una reagrupación activa',
    tema: 'Cambio de torres y reagrupación',
    nivel: 6,
    rating: 1991,
    userColor: 'b',
    startFen: '2br1r1k/pp3qpp/1np2p2/8/1bP1PPPP/1P4B1/P1BNQ3/3RK2R b K - 2 24',
    overview: "Posición real de una partida jugada en Lichess (rating 1991). Tras un cambio de torres, negras reagrupa su torre restante a la columna abierta, quedando con una posición más activa.",
    moves: [
      { color: 'b', san: 'Rxd2', explain: { idea: "La torre negra captura el caballo blanco de d2, la única captura disponible en esa casilla.", ventaja: "Gana una pieza a cambio de la torre, si blancas recaptura con la torre.", debilidad: "Ninguna real, es un cambio favorable." } },
      { color: 'w', san: 'Rxd2', explain: { idea: "Única recaptura razonable para blancas.", ventaja: "Recupera la torre cambiada.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rd8', explain: { idea: "La torre negra restante se reagrupa a d8, ocupando la columna abierta.", ventaja: "Torre mucho más activa, con presión directa sobre la columna d.", debilidad: "Ninguna real -- cierra el fragmento con una posición cómoda para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-5XjuM',
    name: 'El rey se come un alfil suelto antes del jaque de caballo',
    tema: 'Pieza colgada en el final de piezas menores',
    nivel: 6,
    rating: 2011,
    userColor: 'b',
    startFen: '8/3n1P2/8/1pBk1K2/p7/1P6/P7/8 b - - 0 44',
    overview: "Final de piezas menores real de una partida jugada en Lichess (rating 2011). El rey negro captura un alfil blanco sin ninguna defensa, y el caballo negro sigue con jaque en la jugada siguiente.",
    moves: [
      { color: 'b', san: 'Kxc5', explain: { idea: "El rey negro captura el alfil blanco de c5, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Ke6', explain: { idea: "El rey blanco avanza a e6, buscando algo de actividad tras la pérdida de material.", ventaja: "Ninguna real que compense la pérdida ya sufrida.", debilidad: "Ninguna adicional." } },
      { color: 'b', san: 'Nf8+', explain: { idea: "El caballo negro entra en f8 dando jaque.", ventaja: "Jaque forzado que mantiene la iniciativa además de la ventaja material ya conseguida.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-ZeR1l',
    name: 'Mate en 2 con la dama sola tras un jaque forzado',
    tema: 'Mate en 2',
    nivel: 6,
    rating: 1932,
    userColor: 'b',
    startFen: '6rk/p6q/1p2Q3/4Pp2/3p1P2/8/PPPB3P/R6K b - - 2 30',
    overview: "Posición real de una partida jugada en Lichess (rating 1932). Un jaque de dama obliga a interponer la propia dama, y la dama negra remata capturándola con jaque mate.",
    moves: [
      { color: 'b', san: 'Qb7+', explain: { idea: "La dama negra entra en b7 dando jaque.", ventaja: "Jaque forzado que dirige la combinación hacia el mate.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Qd5', explain: { idea: "Única forma de tapar el jaque sin perder al rey de inmediato: interponer la propia dama.", ventaja: "Detiene el jaque momentáneamente.", debilidad: "La dama interpuesta queda exactamente en la casilla que la dama negra necesita capturar para el mate." } },
      { color: 'b', san: 'Qxd5#', explain: { idea: "La dama negra captura la dama blanca dando jaque mate, apoyada por el resto de piezas negras que ya cubrían las demás casillas de escape.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-LYJ39',
    name: 'Carrera de peones en dos flancos distintos',
    tema: 'Carrera de peones en flancos opuestos',
    nivel: 6,
    rating: 1736,
    userColor: 'b',
    startFen: '8/1p6/p4k2/2PPp1p1/8/1P6/PK6/8 b - - 0 37',
    overview: "Final de peones real de una partida jugada en Lichess (rating 1736). Negras avanza sus peones del flanco de rey mientras blancas intenta contrajuego en el flanco de dama; negras termina capturando el peón blanco más avanzado.",
    moves: [
      { color: 'b', san: 'g4', explain: { idea: "Negras avanza el peón a g4, iniciando la carrera en el flanco de rey.", ventaja: "Peón mucho más rápido que cualquier respuesta blanca en ese flanco.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kc2', explain: { idea: "Blancas busca contrajuego acercando el rey al flanco de dama.", ventaja: "Único plan razonable disponible.", debilidad: "Llega demasiado tarde comparado con la velocidad del peón negro." } },
      { color: 'b', san: 'g3', explain: { idea: "Negras sigue avanzando el peón a g3.", ventaja: "Cada vez más cerca de la coronación.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'c6', explain: { idea: "Blancas avanza su propio peón a c6, el único intento razonable de crear un peligro equivalente.", ventaja: "Crea alguna amenaza en el flanco de dama.", debilidad: "Sigue siendo más lento que el peón negro." } },
      { color: 'b', san: 'bxc6', explain: { idea: "Negras captura el peón blanco de c6.", ventaja: "Elimina la única amenaza real blanca, quedando con la carrera de peones completamente ganada.", debilidad: "Ninguna real -- decide el final a favor de negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-GciZt',
    name: 'El rey esquiva el jaque de dama en un final ajustado',
    tema: 'Jugada defensiva del rey ante jaque de dama',
    nivel: 6,
    rating: 1879,
    userColor: 'b',
    startFen: '8/1Q3k2/3P3p/6p1/8/1n2KP2/2p3rP/8 b - - 4 38',
    overview: "Final de piezas real de una partida jugada en Lichess (rating 1879). El rey negro se reposiciona y, tras un jaque de dama, encuentra la única casilla que mantiene la posición defendible.",
    moves: [
      { color: 'b', san: 'Kg6', explain: { idea: "El rey negro avanza a g6, buscando mayor seguridad.", ventaja: "Rey algo más protegido.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Qe4+', explain: { idea: "La dama blanca entra dando jaque, buscando aprovechar cualquier imprecisión.", ventaja: "Jaque forzado, gana un tiempo.", debilidad: "Ninguna real para blancas más allá del tiempo ganado." } },
      { color: 'b', san: 'Kh5', explain: { idea: "Única casilla que mantiene la posición defendible para negras.", ventaja: "El rey se mantiene a salvo sin ceder nada adicional.", debilidad: "Ninguna real -- es la respuesta más precisa disponible." } }
    ]
  },
  {
    id: 'h04-problema-lichess-iBzti',
    name: 'Sacrificio de caballo que gana la calidad',
    tema: 'Sacrificio de caballo que gana la calidad',
    nivel: 6,
    rating: 2082,
    userColor: 'b',
    startFen: '2r1r1k1/5ppq/3R1n1p/p3N3/2P2P2/7P/P2Q2P1/2K1R3 b - - 7 26',
    overview: "Posición real de una partida jugada en Lichess (rating 2082). El caballo negro entra en una casilla central ofreciendo un cambio favorable; tras la captura obligada, la dama negra recupera una torre completa.",
    moves: [
      { color: 'b', san: 'Ne4', explain: { idea: "El caballo negro entra en e4, una casilla central muy fuerte, ofreciéndose al cambio.", ventaja: "Fuerza una respuesta concreta de blancas.", debilidad: "Ninguna real -- el cambio que sigue es favorable para negras." } },
      { color: 'w', san: 'Rxe4', explain: { idea: "Blancas captura el caballo con la torre, la única forma razonable de eliminarlo.", ventaja: "Elimina la pieza avanzada negra.", debilidad: "La torre queda en una casilla que la dama negra puede recapturar directamente." } },
      { color: 'b', san: 'Qxe4', explain: { idea: "La dama negra captura la torre blanca de e4.", ventaja: "Gana la calidad (torre por caballo), ventaja material clara.", debilidad: "Ninguna, cierra la combinación con ventaja para negras." } }
    ]
  },
  // ============================================================
  // PROBLEMAS DE AJEDREZ -- banco tactico Lichess, lote 7 (S6)
  // ============================================================
  {
    id: 'h04-problema-lichess-9M0N7',
    name: 'Sacrificio de torre que atrae al rey al mate de dama',
    tema: 'Atracción del rey + mate de dama',
    nivel: 6,
    rating: 1765,
    userColor: 'b',
    startFen: '1k4r1/pp5p/3q4/8/3RQp2/2N5/PP4rP/5R1K b - - 1 24',
    overview: "Posición real de una partida jugada en Lichess (rating 1765). Negras entrega la torre con jaque para atraer al rey blanco a una casilla concreta, y remata con jaque mate de dama.",
    moves: [
      { color: 'b', san: 'Rxh2+', explain: { idea: "La torre negra captura el peón de h2 dando jaque, ofreciéndose voluntariamente.", ventaja: "Atrae al rey blanco exactamente a la casilla que negras necesita.", debilidad: "Entrega la torre -- solo se justifica por lo que viene después." } },
      { color: 'w', san: 'Kxh2', explain: { idea: "Única forma de responder al jaque: el rey captura la torre.", ventaja: "Recupera la torre entregada.", debilidad: "El rey queda completamente solo, sin ninguna pieza cerca que lo proteja." } },
      { color: 'b', san: 'Qh6#', explain: { idea: "La dama negra entra en h6 dando jaque mate, sin que ninguna pieza blanca pueda capturarla ni interponerse.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-lUEYX',
    name: 'El caballo se infiltra y termina ganando la calidad',
    tema: 'Infiltración de caballo que gana la calidad',
    nivel: 6,
    rating: 2034,
    userColor: 'w',
    startFen: '3r1rk1/p3qpp1/np5p/2pQN3/8/2P5/P4PPP/3R1RK1 w - - 3 19',
    overview: "Posición real de una partida jugada en Lichess (rating 2034). El caballo blanco se infiltra hasta la última fila, y tras una serie de capturas, blancas termina con ventaja material.",
    moves: [
      { color: 'w', san: 'Nc6', explain: { idea: "El caballo blanco se infiltra en c6, una casilla muy fuerte cerca de las piezas negras.", ventaja: "Pieza extremadamente activa, amenazando entrar todavía más.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qb7', explain: { idea: "La dama negra se retira a b7, buscando evitar complicaciones directas.", ventaja: "Dama a salvo momentáneamente.", debilidad: "No defiende la torre de d8, que el caballo puede capturar en la jugada siguiente." } },
      { color: 'w', san: 'Nxd8', explain: { idea: "El caballo blanco captura la torre negra de d8.", ventaja: "Gana la calidad (torre por caballo).", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qxd5', explain: { idea: "La dama negra captura la dama blanca de d5, la única forma de recuperar algo de material.", ventaja: "Recupera la dama, equilibrando parte del material.", debilidad: "La dama negra queda en una casilla que la torre blanca puede capturar directamente." } },
      { color: 'w', san: 'Rxd5', explain: { idea: "La torre blanca captura la dama negra de d5, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, cerrando la combinación con ventaja material decisiva.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-B9SIa',
    name: 'Cambio de piezas menores que abre camino a ganar varios peones',
    tema: 'Cambio favorable + peones sueltos',
    nivel: 6,
    rating: 2086,
    userColor: 'b',
    startFen: '5rk1/5ppp/3Q1n2/3n4/1B1p2b1/P2B1N2/1PP2qPP/2K4R b - - 5 17',
    overview: "Posición real de una partida jugada en Lichess (rating 2086). Tras cambiar un caballo por un alfil, la dama negra se pasea capturando peones sueltos sin que blancas pueda evitarlo.",
    moves: [
      { color: 'b', san: 'Nxb4', explain: { idea: "El caballo negro captura el alfil blanco de b4, la única captura disponible.", ventaja: "Elimina una pieza defensiva clave.", debilidad: "Ninguna real, es un cambio." } },
      { color: 'w', san: 'Qxb4', explain: { idea: "Única recaptura posible para blancas.", ventaja: "Recupera el caballo cambiado.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qxg2', explain: { idea: "La dama negra captura el peón de g2, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rg1', explain: { idea: "Blancas reagrupa la torre a g1, sin recuperar nada del material perdido.", ventaja: "Ninguna real.", debilidad: "No defiende el caballo de f3, que sigue expuesto." } },
      { color: 'b', san: 'Qxf3', explain: { idea: "La dama negra captura también el caballo blanco de f3.", ventaja: "Gana una pieza adicional, ampliando la ventaja material a decisiva.", debilidad: "Ninguna real -- cierra el fragmento con posición ganadora para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-aQqU5',
    name: 'Mate en 1 con la dama infiltrada en el flanco de rey',
    tema: 'Mate en 1',
    nivel: 6,
    rating: 1738,
    userColor: 'b',
    startFen: '1br1r1k1/ppq2ppp/2p1pn2/2P3N1/1P1P4/P7/1BQ2PPP/R4RK1 b - - 6 17',
    overview: "Posición real de una partida jugada en Lichess (rating 1738). La dama negra ya está lista junto al rey blanco: una sola jugada resuelve la partida con jaque mate inmediato.",
    moves: [
      { color: 'b', san: 'Qxh2#', explain: { idea: "La dama negra captura el peón de h2 dando jaque mate: el rey blanco no tiene ninguna casilla de escape y ninguna pieza puede capturar la dama ni interponerse.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-RnX5s',
    name: 'Jaque que gana una torre a distancia por la misma diagonal',
    tema: 'Ataque a distancia (rayos X) que gana una torre',
    nivel: 6,
    rating: 1813,
    userColor: 'w',
    startFen: '5r1k/1p5p/3P2pb/1R1Qp3/2B1N3/1P3pPb/5P1P/r1qR2K1 w - - 7 30',
    overview: "Posición real de una partida jugada en Lichess (rating 1813). La dama blanca captura un peón con jaque y, tras la respuesta forzada, captura una torre alineada a distancia con la dama negra, ganando material en el cambio final.",
    moves: [
      { color: 'w', san: 'Qxe5+', explain: { idea: "La dama blanca captura el peón central de e5 dando jaque.", ventaja: "Gana un peón con jaque.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Bg7', explain: { idea: "Única forma razonable de tapar el jaque.", ventaja: "Detiene el jaque.", debilidad: "No defiende la torre de a1, que queda expuesta a distancia." } },
      { color: 'w', san: 'Qxa1', explain: { idea: "La dama blanca captura la torre negra de a1, alineada a distancia con la propia dama negra.", ventaja: "Gana una torre completa.", debilidad: "La dama blanca queda ahora en la misma línea que la dama negra, que puede recapturar." } },
      { color: 'b', san: 'Qxa1', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera la dama a cambio de la torre perdida.", debilidad: "La dama negra queda en una casilla que la torre blanca puede capturar directamente." } },
      { color: 'w', san: 'Rxa1', explain: { idea: "La torre blanca captura la dama negra, cerrando el cambio con ventaja material para blancas.", ventaja: "Balance final favorable: torre y dama ganadas a cambio de dama y peón, ventaja material clara.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-gq1rw',
    name: 'Jaque intermedio antes de capturar un peón suelto',
    tema: 'Jaque intermedio (zwischenzug)',
    nivel: 6,
    rating: 2046,
    userColor: 'b',
    startFen: 'r1q2kr1/pPp2p1p/3b3p/1B6/8/5N1b/PP3PP1/RN1QR1K1 b - - 0 15',
    overview: "Posición real de una partida jugada en Lichess (rating 2046). En vez de resolver la amenaza pendiente de inmediato, negras mete primero un jaque de torre, y solo después captura un peón suelto sin ninguna prisa.",
    moves: [
      { color: 'b', san: 'Rxg2+', explain: { idea: "La torre negra captura el peón de g2 dando jaque, en vez de ocuparse primero de otras cuestiones.", ventaja: "Jaque intermedio que gana un tiempo crucial.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kh1', explain: { idea: "Única casilla legal para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional -- blancas sigue sin poder ocuparse de la amenaza pendiente." } },
      { color: 'b', san: 'Qxb7', explain: { idea: "La dama negra captura el peón de b7, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón adicional, ampliando la ventaja ya conseguida con el jaque intermedio.", debilidad: "Ninguna real, cierra el fragmento con ventaja para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-OURK5',
    name: 'Avance de peón que abre la puerta a ganar un alfil',
    tema: 'Ruptura de peón + jaque que gana una pieza',
    nivel: 6,
    rating: 1828,
    userColor: 'w',
    startFen: 'r7/3q1bpk/1ppB1R1p/3pP3/1P1Pp3/4P1QP/6P1/6K1 w - - 3 29',
    overview: "Posición real de una partida jugada en Lichess (rating 1828). Blancas avanza un peón forzando su captura, entra con jaque de dama, y remata capturando el alfil negro que había quedado expuesto.",
    moves: [
      { color: 'w', san: 'e6', explain: { idea: "El peón blanco avanza a e6, ofreciéndose a ser capturado.", ventaja: "Fuerza al alfil negro a salir de una posición segura.", debilidad: "Entrega el peón -- solo se justifica por lo que viene después." } },
      { color: 'b', san: 'Bxe6', explain: { idea: "Única captura razonable para negras.", ventaja: "Recupera el peón entregado.", debilidad: "El alfil queda en una casilla expuesta a un jaque de dama." } },
      { color: 'w', san: 'Qg6+', explain: { idea: "La dama blanca entra en g6 dando jaque.", ventaja: "Jaque forzado que sigue dirigiendo la combinación.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kg8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por salvar al alfil, que sigue expuesto." } },
      { color: 'w', san: 'Rxe6', explain: { idea: "La torre blanca captura el alfil negro de e6, que se había quedado sin ninguna defensa suficiente.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-adRt1',
    name: 'Mate en 2 con el caballo abriendo la columna h',
    tema: 'Mate en 2 con sacrificio de caballo',
    nivel: 6,
    rating: 1875,
    userColor: 'b',
    startFen: '2B3k1/2P3p1/4p3/2QpP3/5p2/8/4n2P/5qRK b - - 3 45',
    overview: "Posición real de una partida jugada en Lichess (rating 1875). El caballo negro se sacrifica con jaque para abrir la columna h, y la dama remata con jaque mate.",
    moves: [
      { color: 'b', san: 'Ng3+', explain: { idea: "El caballo negro entra en g3 dando jaque, ofreciéndose voluntariamente.", ventaja: "Fuerza la captura, abriendo la columna h para la dama negra.", debilidad: "Entrega el caballo -- solo se justifica porque lleva directamente al mate." } },
      { color: 'w', san: 'hxg3', explain: { idea: "Única forma razonable de responder al jaque: capturar con el peón.", ventaja: "Recupera el caballo entregado.", debilidad: "Al capturar, la columna h queda completamente abierta para la dama negra." } },
      { color: 'b', san: 'Qh3#', explain: { idea: "La dama negra entra en h3 dando jaque mate, sin que ninguna pieza blanca pueda capturarla ni interponerse.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-E9R0e',
    name: 'Mate en 2 con la dama arrastrando al rey a la torre',
    tema: 'Mate en 2 con dama y torre',
    nivel: 6,
    rating: 1741,
    userColor: 'w',
    startFen: '3k3r/5p2/2Rp1bp1/3p4/3qP1Q1/3P3P/pr3P2/5RK1 w - - 0 27',
    overview: "Posición real de una partida jugada en Lichess (rating 1741). Un jaque de dama obliga al rey negro a salir a una casilla concreta, y la torre blanca remata con jaque mate.",
    moves: [
      { color: 'w', san: 'Qc8+', explain: { idea: "La dama blanca entra en c8 dando jaque.", ventaja: "Jaque forzado que dirige al rey exactamente a la casilla que blancas necesita.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Ke7', explain: { idea: "Única casilla legal para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda sin ninguna casilla de escape para la jugada siguiente." } },
      { color: 'w', san: 'Rc7#', explain: { idea: "La torre blanca entra en c7 dando jaque mate, apoyada por el resto de piezas blancas que ya cubrían las demás casillas de escape.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-pH1TG',
    name: 'Cambio de damas en el ataque al enroque seguido de jaque de caballo',
    tema: 'Ataque al enroque con cambio de damas',
    nivel: 6,
    rating: 1791,
    userColor: 'w',
    startFen: 'r4rk1/5p1p/pbpq1p2/3pN2b/3P4/2NQ4/PP3PPP/R4RK1 w - - 0 17',
    overview: "Posición real de una partida jugada en Lichess (rating 1791). Blancas da jaque de dama, gana el alfil defensor con el caballo, y tras el cambio de damas obligado, remata con un segundo jaque de caballo.",
    moves: [
      { color: 'w', san: 'Qg3+', explain: { idea: "La dama blanca entra en g3 dando jaque.", ventaja: "Jaque forzado que empieza a abrir la posición del rey negro.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Bg6', explain: { idea: "Negras interpone el alfil, la única forma razonable de tapar el jaque.", ventaja: "Detiene el jaque momentáneamente.", debilidad: "El alfil interpuesto queda sin ninguna defensa suficiente frente al caballo blanco." } },
      { color: 'w', san: 'Nxg6', explain: { idea: "El caballo blanco captura el alfil negro de g6, que se había quedado sin ninguna defensa suficiente.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qxg3', explain: { idea: "La dama negra captura la dama blanca, la única forma de recuperar algo de material.", ventaja: "Recupera parte del material perdido.", debilidad: "El cambio de damas no evita que el caballo blanco siga con la iniciativa." } },
      { color: 'w', san: 'Ne7+', explain: { idea: "El caballo blanco entra en e7 dando jaque, manteniendo la iniciativa pese al cambio de damas.", ventaja: "Jaque forzado que mantiene la ventaja material ya conseguida (una pieza completa).", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Hn337',
    name: 'Doble captura de peones seguida de una reagrupación defensiva',
    tema: 'Doble ganancia de peones + reagrupación',
    nivel: 6,
    rating: 2101,
    userColor: 'w',
    startFen: 'r1b2rk1/ppp3pp/8/2bpP1q1/4p3/1P2P3/PBP3PP/RN1QR1K1 w - - 3 14',
    overview: "Posición real de una partida jugada en Lichess (rating 2101). Blancas captura dos peones sueltos con jaque incluido, y tras la respuesta negra, reagrupa la torre a una casilla útil para la defensa.",
    moves: [
      { color: 'w', san: 'Qxd5+', explain: { idea: "La dama blanca captura el peón central de d5 dando jaque.", ventaja: "Gana un peón con jaque.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kh8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No defiende el segundo peón de c5, que sigue expuesto." } },
      { color: 'w', san: 'Qxc5', explain: { idea: "La dama blanca captura también el peón de c5.", ventaja: "Gana un segundo peón, ampliando la ventaja material.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Bh3', explain: { idea: "Negras reposiciona el alfil a h3, buscando complicar la posición del rey blanco.", ventaja: "Único intento razonable de contrajuego.", debilidad: "No recupera nada del material ya perdido." } },
      { color: 'w', san: 'Re2', explain: { idea: "La torre blanca se reagrupa a e2, cubriendo la segunda fila frente a cualquier intento de infiltración.", ventaja: "Posición sólida y defendida, con dos peones de ventaja ya asegurados.", debilidad: "Ninguna real -- cierra el fragmento con ventaja para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-0xQzv',
    name: 'Triple sacrificio en f6 que termina ganando la dama',
    tema: 'Sacrificio de torre y alfil que gana la dama',
    nivel: 6,
    rating: 2117,
    userColor: 'w',
    startFen: '4r2k/pp4pp/2b2pq1/2p5/2Q2R2/2B4P/PP3RPK/3r4 w - - 3 31',
    overview: "Posición real de una partida jugada en Lichess (rating 2117). Blancas entrega la torre y el alfil en la misma casilla para destruir la defensa del rey negro, terminando con la segunda torre capturando la dama.",
    moves: [
      { color: 'w', san: 'Rxf6', explain: { idea: "La torre blanca captura el peón de f6, ofreciéndose voluntariamente.", ventaja: "Empieza a destruir la estructura de peones que protege al rey negro.", debilidad: "Entrega la torre -- solo se justifica por lo que sigue." } },
      { color: 'b', san: 'gxf6', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera la torre entregada.", debilidad: "La estructura de peones cerca del rey negro queda mucho más débil." } },
      { color: 'w', san: 'Bxf6+', explain: { idea: "El alfil blanco captura el peón de f6 dando jaque, un segundo sacrificio.", ventaja: "Sigue abriendo la posición del rey negro con jaque.", debilidad: "Entrega también el alfil." } },
      { color: 'b', san: 'Qxf6', explain: { idea: "Única forma razonable de responder al jaque: la dama captura el alfil.", ventaja: "Recupera el alfil entregado.", debilidad: "La dama negra queda en f6, la misma casilla donde blancas puede rematar." } },
      { color: 'w', san: 'Rxf6', explain: { idea: "La segunda torre blanca captura la dama negra, que se había quedado sin ninguna defensa suficiente.", ventaja: "Gana la dama, cerrando la combinación con ventaja material decisiva pese a los sacrificios previos.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-BFr5q',
    name: 'Captura de dama suelta seguida de un cambio de piezas menores',
    tema: 'Dama colgada + cambio de piezas',
    nivel: 6,
    rating: 1917,
    userColor: 'b',
    startFen: '2kr1n1r/pp1Nb1R1/2p1p2p/3n3P/2PP1B1Q/8/PP3PP1/2K1R3 b - - 0 23',
    overview: "Posición real de una partida jugada en Lichess (rating 1917). Negras captura una dama blanca que se había quedado sin ninguna defensa, y tras el cambio de piezas menores que sigue, recupera también una pieza adicional.",
    moves: [
      { color: 'b', san: 'Bxh4', explain: { idea: "El alfil negro captura la dama blanca de h4, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, la pieza más valiosa del tablero.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'cxd5', explain: { idea: "Blancas captura el caballo negro de d5, la única forma de recuperar algo de material.", ventaja: "Recupera parte del material perdido.", debilidad: "No compensa ni de lejos la pérdida de la dama." } },
      { color: 'b', san: 'Rxd7', explain: { idea: "La torre negra captura el caballo blanco de d7, que se había quedado sin ninguna defensa suficiente.", ventaja: "Gana una pieza adicional, ampliando todavía más la ventaja material ya decisiva.", debilidad: "Ninguna real, cierra el fragmento con posición completamente ganadora." } }
    ]
  },
  {
    id: 'h04-problema-lichess-3xtvd',
    name: 'Cambio de caballos y damas que deja a blancas con la ventaja',
    tema: 'Cambio de piezas favorable',
    nivel: 6,
    rating: 1958,
    userColor: 'w',
    startFen: '8/3nkpp1/1p2p2p/1N6/P1P5/1nQ2P1P/3N2PK/4q3 w - - 0 39',
    overview: "Posición real de una partida jugada en Lichess (rating 1958). Blancas captura un caballo suelto y, tras el cambio de damas que sigue, recupera también la dama negra con el propio caballo.",
    moves: [
      { color: 'w', san: 'Nxb3', explain: { idea: "El caballo blanco captura el caballo negro de b3, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qxc3', explain: { idea: "La dama negra captura la dama blanca de c3, la única forma de recuperar algo de material.", ventaja: "Recupera parte del material perdido.", debilidad: "La dama negra queda en una casilla que el caballo blanco puede capturar directamente." } },
      { color: 'w', san: 'Nxc3', explain: { idea: "El caballo blanco captura la dama negra, que se había quedado sin ninguna defensa.", ventaja: "Recupera la dama, cerrando el intercambio con ventaja material clara (una pieza de más).", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-gmmjl',
    name: 'Sacrificio de calidad que reabre la lucha por el centro',
    tema: 'Sacrificio de calidad + recuperación con jaque',
    nivel: 6,
    rating: 2132,
    userColor: 'b',
    startFen: 'r2r3k/pp4pp/q1pNQ3/4Pp2/1P1P4/P3n1P1/6PP/3R1RK1 b - - 0 26',
    overview: "Posición real de una partida jugada en Lichess (rating 2132). Negras entrega la calidad para eliminar una pieza clave, y tras una serie de cambios en el centro, recupera material con jaque.",
    moves: [
      { color: 'b', san: 'Rxd6', explain: { idea: "La torre negra captura el caballo blanco de d6, la única forma de eliminar esa pieza avanzada.", ventaja: "Elimina una pieza blanca muy molesta.", debilidad: "Entrega la calidad (torre por caballo) -- solo se justifica por lo que viene después." } },
      { color: 'w', san: 'exd6', explain: { idea: "Blancas recaptura con el peón, la única forma razonable.", ventaja: "Recupera parte del material.", debilidad: "El peón resultante queda adelantado y algo débil." } },
      { color: 'b', san: 'Qe2', explain: { idea: "La dama negra se reposiciona a e2, buscando infiltrarse en la posición blanca.", ventaja: "Pieza muy activa, cerca del rey blanco.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Qxe3', explain: { idea: "La dama blanca captura el caballo negro de e3, que se había quedado sin ninguna defensa suficiente.", ventaja: "Recupera material adicional.", debilidad: "La dama blanca queda en una casilla que la dama negra puede recapturar con jaque." } },
      { color: 'b', san: 'Qxe3+', explain: { idea: "La dama negra captura la dama blanca dando jaque, recuperando el equilibrio material con la iniciativa a su favor.", ventaja: "Cambio de damas favorable con jaque, cerrando el fragmento con una posición cómoda para negras.", debilidad: "Ninguna real." } }
    ]
  },
  // ============================================================
  // PROBLEMAS DE AJEDREZ -- banco tactico Lichess, lote 8 (S6)
  // ============================================================
  {
    id: 'h04-problema-lichess-FBPu2',
    name: 'Cambio de peones y centralización del rey en el final',
    tema: 'Cambio de peones + rey activo',
    nivel: 6,
    rating: 2073,
    userColor: 'w',
    startFen: '8/8/6p1/1pk2p1p/p4P1P/PP1K2P1/8/8 w - - 0 53',
    overview: "Final de reyes y peones real de una partida jugada en Lichess (rating 2073). Tras un cambio de peones en el flanco de dama, el rey blanco se centraliza para preparar el resto del final.",
    moves: [
      { color: 'w', san: 'bxa4', explain: { idea: "Blancas captura el peón de a4, la única captura disponible.", ventaja: "Mantiene la igualdad material con una estructura más sólida.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'bxa4', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera el peón cambiado.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kc3', explain: { idea: "El rey blanco se centraliza en c3, preparando el resto del plan en el final.", ventaja: "Rey activo, bien posicionado.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-wb2lJ',
    name: 'Combinación de capturas múltiples en el punto débil d4',
    tema: 'Combinación de capturas en un punto débil',
    nivel: 6,
    rating: 1949,
    userColor: 'b',
    startFen: '2kr4/1pp2p2/1bn1p2R/4P3/p2P4/P1P1Q3/NPq1B1PP/R5K1 b - - 0 23',
    overview: "Posición real de una partida jugada en Lichess (rating 1949). Una serie de cuatro capturas seguidas en la misma casilla termina con la torre negra ganando la dama blanca, que se había quedado sin ninguna defensa.",
    moves: [
      { color: 'b', san: 'Nxd4', explain: { idea: "El caballo negro captura el peón de d4, la primera de una serie de capturas en la misma casilla.", ventaja: "Empieza a desmontar la defensa blanca de esa casilla clave.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'cxd4', explain: { idea: "Única recaptura razonable para blancas.", ventaja: "Recupera el caballo cambiado.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Bxd4', explain: { idea: "El alfil negro captura de nuevo en d4.", ventaja: "Sigue la serie de cambios favorables.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Qxd4', explain: { idea: "La dama blanca recaptura, la única forma razonable.", ventaja: "Recupera el alfil cambiado.", debilidad: "La dama blanca queda en d4, una casilla que la torre negra puede atacar directamente." } },
      { color: 'b', san: 'Rxd4', explain: { idea: "La torre negra captura la dama blanca, que se había quedado sin ninguna defensa tras toda la serie de cambios.", ventaja: "Gana la dama, cerrando la combinación con ventaja material decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-WiiPc',
    name: 'Cambio de damas que abre camino a ganar un peón central',
    tema: 'Cambio de damas con jaque + peón suelto',
    nivel: 6,
    rating: 1716,
    userColor: 'b',
    startFen: '2kr3r/bpp1B1pb/p1p5/4N3/3P2Q1/7q/PP1N1P2/R3R1K1 b - - 1 23',
    overview: "Posición real de una partida jugada en Lichess (rating 1716). Negras entrega la dama con jaque forzando el cambio, y la torre negra remata capturando un peón central suelto.",
    moves: [
      { color: 'b', san: 'Qxg4+', explain: { idea: "La dama negra captura el peón de g4 dando jaque, ofreciéndose al cambio.", ventaja: "Jaque forzado que fuerza el cambio de damas en condiciones favorables.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Nxg4', explain: { idea: "Única forma de responder al jaque: el caballo captura la dama.", ventaja: "Recupera la dama a cambio de la propia.", debilidad: "Ninguna real adicional para blancas." } },
      { color: 'b', san: 'Rxd4', explain: { idea: "La torre negra captura el peón central de d4, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón limpio tras el cambio de damas.", debilidad: "Ninguna real, cierra el fragmento con ligera ventaja para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-WDMx0',
    name: 'Sacrificio de torre que abre camino al mate de la segunda torre',
    tema: 'Mate en 2 con sacrificio de torre',
    nivel: 6,
    rating: 2030,
    userColor: 'w',
    startFen: 'r4k2/3R1r2/p2R2pn/np2Q3/4P3/8/qPP3PP/2K5 w - - 0 28',
    overview: "Posición real de una partida jugada en Lichess (rating 2030). Blancas entrega una torre con jaque, y tras la captura obligada, la segunda torre remata con jaque mate en la misma casilla.",
    moves: [
      { color: 'w', san: 'Rd8+', explain: { idea: "La torre blanca entra en d8 dando jaque, ofreciéndose voluntariamente.", ventaja: "Fuerza la captura, abriendo la posición para el remate.", debilidad: "Entrega la torre -- solo se justifica porque lleva directamente al mate." } },
      { color: 'b', san: 'Rxd8', explain: { idea: "Única forma razonable de responder al jaque: la torre negra captura.", ventaja: "Recupera la torre entregada.", debilidad: "La torre negra queda exactamente en la casilla que la segunda torre blanca necesita capturar para el mate." } },
      { color: 'w', san: 'Rxd8#', explain: { idea: "La segunda torre blanca captura en d8 dando jaque mate, apoyada por el resto de piezas blancas que ya cubrían las demás casillas de escape.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-O8PLY',
    name: 'Cambio de peones seguido de la centralización del rey',
    tema: 'Cambio de peones + rey activo en el final',
    nivel: 6,
    rating: 2028,
    userColor: 'b',
    startFen: '8/8/K7/1p4p1/1Pk3PP/8/8/8 b - - 0 64',
    overview: "Final de reyes y peones real de una partida jugada en Lichess (rating 2028). Tras un cambio de peones en el flanco de rey, negras centraliza su rey para el resto del final.",
    moves: [
      { color: 'b', san: 'gxh4', explain: { idea: "Negras captura el peón de h4, la única captura disponible.", ventaja: "Mantiene la igualdad material con mejor estructura.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'g5', explain: { idea: "Blancas avanza el peón a g5, buscando crear su propia amenaza de avance.", ventaja: "Gana algo de espacio.", debilidad: "No recupera el peón ya cambiado." } },
      { color: 'b', san: 'Kd5', explain: { idea: "El rey negro se centraliza en d5, preparando el resto del plan en el final.", ventaja: "Rey activo, bien posicionado para lo que viene.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-24RYS',
    name: 'Carrera de peones y reyes en el flanco de dama',
    tema: 'Carrera de peones y reyes',
    nivel: 6,
    rating: 2088,
    userColor: 'b',
    startFen: '8/5p2/1p6/k2pP2p/p2P3P/PPK5/8/8 b - - 0 40',
    overview: "Final de reyes y peones real de una partida jugada en Lichess (rating 2088). Tras un cambio de peones, ambos reyes se lanzan a una carrera por el flanco de dama.",
    moves: [
      { color: 'b', san: 'axb3', explain: { idea: "Negras captura el peón de b3, la única captura disponible.", ventaja: "Gana un peón.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kxb3', explain: { idea: "Única recaptura razonable para blancas.", ventaja: "Recupera el peón cambiado.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'b5', explain: { idea: "Negras avanza el peón a b5, iniciando la carrera hacia la coronación.", ventaja: "Peón más rápido que cualquier respuesta blanca inmediata.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kc2', explain: { idea: "El rey blanco se acerca, el único intento razonable de frenar el avance.", ventaja: "Único plan disponible.", debilidad: "Llega demasiado tarde comparado con la velocidad del peón negro." } },
      { color: 'b', san: 'Ka4', explain: { idea: "El rey negro avanza a a4, apoyando el avance de su propio peón y ganando la carrera.", ventaja: "Posición claramente favorable en la carrera del final.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-IEkwt',
    name: 'Dama ganada sin defensa que debe lidiar con un peligroso peón pasado',
    tema: 'Pieza colgada + defensa contra peón pasado',
    nivel: 6,
    rating: 1977,
    userColor: 'b',
    startFen: '1n1q3k/3p4/1Q1PP1pp/2p2p2/B2N1P2/8/6PP/5K2 b - - 0 31',
    overview: "Posición real de una partida jugada en Lichess (rating 1977). Negras captura una dama blanca suelta, pero debe reaccionar rápido ante un peligroso peón pasado que blancas empuja de inmediato.",
    moves: [
      { color: 'b', san: 'Qxb6', explain: { idea: "La dama negra captura la dama blanca de b6, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, la pieza más valiosa del tablero.", debilidad: "Ninguna real inmediata." } },
      { color: 'w', san: 'e7', explain: { idea: "Blancas empuja el peón pasado a e7, a un paso de coronar, el único recurso real que le queda.", ventaja: "Amenaza coronar de inmediato.", debilidad: "No recupera nada del material ya perdido si negras reacciona a tiempo." } },
      { color: 'b', san: 'Qb1+', explain: { idea: "La dama negra entra en b1 dando jaque, ganando un tiempo crucial antes de ocuparse del peón.", ventaja: "Jaque forzado que obliga a blancas a responder antes de coronar.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kf2', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional -- el peón sigue amenazando coronar en la jugada siguiente." } },
      { color: 'b', san: 'Qe4', explain: { idea: "La dama negra se reposiciona a e4, controlando la casilla de coronación del peón pasado.", ventaja: "Neutraliza la amenaza de coronación, quedando con la dama de ventaja ya asegurada.", debilidad: "Ninguna real -- cierra el fragmento con ventaja decisiva para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-AEVDi',
    name: 'Sacrificio de peón que desvía al peón rival y abre camino al rey',
    tema: 'Desviación de peón en el final de reyes',
    nivel: 6,
    rating: 2164,
    userColor: 'b',
    startFen: '8/1p4p1/4p3/1K2Pp1p/4kP2/P5PP/8/8 b - - 5 39',
    overview: "Final de reyes y peones real de una partida jugada en Lichess (rating 2164). Negras entrega un peón para desviar al peón blanco de la columna g, y el rey negro captura el peón central que queda sin protección.",
    moves: [
      { color: 'b', san: 'h4', explain: { idea: "El peón negro avanza a h4, ofreciéndose a ser capturado.", ventaja: "Desvía al peón blanco de g3 de su posición original.", debilidad: "Entrega el peón -- solo se justifica por lo que viene después." } },
      { color: 'w', san: 'gxh4', explain: { idea: "Única captura razonable para blancas.", ventaja: "Recupera el peón entregado.", debilidad: "El peón de f4 se queda sin ninguna protección adicional." } },
      { color: 'b', san: 'Kxf4', explain: { idea: "El rey negro captura el peón de f4, que se había quedado sin ninguna defensa.", ventaja: "Recupera la igualdad material con una posición de rey mucho más activa.", debilidad: "Ninguna real -- cierra el fragmento con posición favorable para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-wd2gW',
    name: 'Sacrificio de dama que fuerza el mate con dos torres',
    tema: 'Mate en 3 con sacrificio de dama',
    nivel: 6,
    rating: 2038,
    userColor: 'w',
    startFen: '1k6/p1p5/1pP2Qn1/1q6/1P1rp2p/8/P3p2P/6RK w - - 0 33',
    overview: "Posición real de una partida jugada en Lichess (rating 2038). Blancas entrega la dama con jaque, y tras una cadena de jaques de torre, remata capturando la torre negra con jaque mate.",
    moves: [
      { color: 'w', san: 'Qh8+', explain: { idea: "La dama blanca entra en h8 dando jaque, ofreciéndose voluntariamente.", ventaja: "Fuerza la captura, abriendo la posición para el ataque de las torres.", debilidad: "Entrega la dama -- solo se justifica porque lleva directamente al mate." } },
      { color: 'b', san: 'Nxh8', explain: { idea: "Única forma razonable de responder al jaque: el caballo captura la dama.", ventaja: "Recupera la dama entregada.", debilidad: "El rey negro queda completamente expuesto en la esquina." } },
      { color: 'w', san: 'Rg8+', explain: { idea: "La torre blanca entra en g8 dando jaque.", ventaja: "Jaque forzado que sigue la combinación.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rd8', explain: { idea: "Única forma de tapar el jaque sin perder al rey de inmediato: interponer la propia torre.", ventaja: "Detiene el jaque momentáneamente.", debilidad: "La torre interpuesta queda exactamente en la casilla que blancas necesita capturar para dar mate." } },
      { color: 'w', san: 'Rxd8#', explain: { idea: "La torre blanca captura la torre negra dando jaque mate, apoyada por el resto de piezas blancas que ya cubrían las demás casillas de escape.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-jVIaI',
    name: 'Doble captura de peones con jaque en un final de damas',
    tema: 'Ganancia de peones en el final de damas',
    nivel: 6,
    rating: 2040,
    userColor: 'w',
    startFen: '8/p4pk1/7p/1P4p1/2ppQ3/3P3P/2q2PPK/8 w - - 6 37',
    overview: "Final de damas y peones real de una partida jugada en Lichess (rating 2040). Blancas captura un peón central con jaque y, tras la respuesta obligada, gana un segundo peón.",
    moves: [
      { color: 'w', san: 'Qxd4+', explain: { idea: "La dama blanca captura el peón central de d4 dando jaque.", ventaja: "Gana un peón con jaque.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kg8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No defiende el segundo peón de c4, que sigue expuesto." } },
      { color: 'w', san: 'dxc4', explain: { idea: "El peón blanco captura el segundo peón de c4.", ventaja: "Gana un segundo peón, ampliando la ventaja en el final de damas.", debilidad: "Ninguna real, cierra el fragmento con ventaja para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-FeHsm',
    name: 'Peón a un paso de coronar apoyado por el alfil',
    tema: 'Peón pasado a un paso de coronar con apoyo de pieza',
    nivel: 6,
    rating: 1750,
    userColor: 'b',
    startFen: '8/8/7R/4P3/5PP1/1pk1K2P/b4P2/8 b - - 0 39',
    overview: "Final de torre contra alfil y peón real de una partida jugada en Lichess (rating 1750). El peón negro llega a la séptima fila y el alfil se reposiciona para apoyar la coronación pese al hostigamiento de la torre blanca.",
    moves: [
      { color: 'b', san: 'b2', explain: { idea: "El peón negro avanza a b2, a un solo paso de coronar.", ventaja: "Amenaza coronar de inmediato si nadie lo detiene.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rc6+', explain: { idea: "La torre blanca da jaque, el único intento razonable de ganar tiempo.", ventaja: "Jaque forzado, gana un tempo.", debilidad: "No detiene realmente el plan de coronación." } },
      { color: 'b', san: 'Bc4', explain: { idea: "El alfil negro se interpone en c4, tapando el jaque y preparando apoyar la coronación.", ventaja: "Detiene el jaque mientras sigue vigilando el plan de coronar.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rb6', explain: { idea: "La torre blanca sigue hostigando desde b6, el único recurso disponible.", ventaja: "Mantiene algo de presión.", debilidad: "No consigue detener el plan negro de fondo." } },
      { color: 'b', san: 'Bb3', explain: { idea: "El alfil negro se reposiciona a b3, controlando la casilla de coronación del propio peón.", ventaja: "Asegura la coronación en la jugada siguiente, decidiendo el final.", debilidad: "Ninguna real -- cierra el fragmento con ventaja decisiva para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-GAWsP',
    name: 'Sacrificio de dama clásico que abre camino al mate con alfil y torre',
    tema: 'Sacrificio de dama + mate con alfil y torre',
    nivel: 6,
    rating: 1882,
    userColor: 'w',
    startFen: 'r1b2rk1/p1p2p1p/2pp2pQ/2b5/8/2P2qP1/PP3P1P/R1B1R1K1 w - - 0 17',
    overview: "Posición real de una partida jugada en Lichess (rating 1882). Blancas entrega la dama para atraer al rey, y remata la combinación con jaque de alfil seguido de mate de torre.",
    moves: [
      { color: 'w', san: 'Qxf8+', explain: { idea: "La dama blanca captura la torre negra de f8 dando jaque, ofreciéndose voluntariamente.", ventaja: "Atrae al rey negro exactamente a la casilla que blancas necesita.", debilidad: "Entrega la dama -- solo se justifica por lo que viene después." } },
      { color: 'b', san: 'Kxf8', explain: { idea: "Única forma de responder al jaque: el rey captura la dama.", ventaja: "Recupera la dama entregada.", debilidad: "El rey queda completamente expuesto en la última fila." } },
      { color: 'w', san: 'Bh6+', explain: { idea: "El alfil blanco entra en h6 dando jaque.", ventaja: "Jaque forzado que dirige al rey a la única casilla posible.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kg8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda sin ninguna vía de escape para la jugada siguiente." } },
      { color: 'w', san: 'Re8#', explain: { idea: "La torre blanca entra en e8 dando jaque mate, sin que ninguna pieza negra pueda capturarla ni interponerse.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-szMi6',
    name: 'Trampa de dama envenenada que termina ganando material',
    tema: 'Trampa que gana material tras aceptar la dama envenenada',
    nivel: 6,
    rating: 1908,
    userColor: 'w',
    startFen: 'r4rk1/1p2bppp/p2p1n2/8/P3PB2/1qNQ4/1P4PP/3R1R1K w - - 0 17',
    overview: "Posición real de una partida jugada en Lichess (rating 1908). Blancas ofrece la dama a cambio de un caballo activo; tras aceptarla, negras sufre un jaque que le cuesta un alfil, y blancas termina recuperando la dama con la torre.",
    moves: [
      { color: 'w', san: 'Nd5', explain: { idea: "El caballo blanco se traslada a d5, una casilla muy fuerte, dejando la dama aparentemente indefensa.", ventaja: "Amenaza real desde una casilla dominante.", debilidad: "Deja la dama de d3 disponible para ser capturada, una trampa calculada." } },
      { color: 'b', san: 'Qxd3', explain: { idea: "Negras acepta la dama envenenada, capturando en d3.", ventaja: "Gana la dama, en apariencia la pieza más valiosa del tablero.", debilidad: "Cae en la trampa: el caballo blanco tiene un jaque devastador preparado." } },
      { color: 'w', san: 'Nxe7+', explain: { idea: "El caballo blanco captura el alfil de e7 dando jaque.", ventaja: "Recupera material y mantiene la iniciativa con jaque.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kh8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por salvar a la dama negra, que sigue en d3 sin ninguna defensa adicional." } },
      { color: 'w', san: 'Rxd3', explain: { idea: "La torre blanca captura la dama negra de d3, que se había quedado sin ninguna defensa.", ventaja: "Recupera la dama, cerrando la combinación con ventaja material decisiva (dama y alfil ganados a cambio de la propia dama).", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-l38Yi',
    name: 'Serie de cambios en la columna f que termina con ventaja de negras',
    tema: 'Serie de cambios favorables en la columna f',
    nivel: 6,
    rating: 2019,
    userColor: 'b',
    startFen: '3r1r1k/3P1Qp1/4N2p/6q1/p1B1n3/2P4b/P4RPP/5RK1 b - - 2 32',
    overview: "Posición real de una partida jugada en Lichess (rating 2019). Una cadena de capturas en la columna f y en g5 termina con negras recuperando el caballo que había quedado suelto.",
    moves: [
      { color: 'b', san: 'Rxf7', explain: { idea: "La torre negra captura la dama blanca de f7, la única forma de justificarlo si blancas recaptura con el caballo.", ventaja: "Gana la dama a cambio de la torre, un cambio muy favorable.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Nxg5', explain: { idea: "El caballo blanco recaptura en g5, la única forma razonable.", ventaja: "Recupera parte del material.", debilidad: "Ninguna real adicional." } },
      { color: 'b', san: 'Rxf2', explain: { idea: "La torre negra captura la segunda torre blanca de f2.", ventaja: "Sigue ganando material en la serie de cambios.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rxf2', explain: { idea: "Única recaptura razonable para blancas.", ventaja: "Recupera la torre cambiada.", debilidad: "El caballo blanco de g5 se queda sin ninguna defensa adicional." } },
      { color: 'b', san: 'Nxg5', explain: { idea: "El caballo negro captura el caballo blanco de g5, que se había quedado sin ninguna defensa.", ventaja: "Cierra la serie de cambios con ventaja material clara para negras (dama por torre y caballo).", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-JiQL9',
    name: 'Sacrificio de torre que desvía al rey y gana un peón adicional',
    tema: 'Desviación del rey con sacrificio de torre',
    nivel: 6,
    rating: 2160,
    userColor: 'b',
    startFen: '8/p1Q3pk/5rq1/7r/4b3/1P4B1/P4PPP/R2R2K1 b - - 0 30',
    overview: "Posición real de una partida jugada en Lichess (rating 2160). Negras entrega la torre para desviar al rey blanco, y la segunda torre remata capturando un peón suelto.",
    moves: [
      { color: 'b', san: 'Rxh2', explain: { idea: "La torre negra captura el peón de h2, ofreciéndose voluntariamente.", ventaja: "Desvía al rey blanco de la defensa del resto del tablero.", debilidad: "Entrega la torre -- solo se justifica por lo que viene después." } },
      { color: 'w', san: 'Kxh2', explain: { idea: "Única forma razonable de responder: el rey captura la torre.", ventaja: "Recupera la torre entregada.", debilidad: "El rey queda alejado de la defensa del peón de f2." } },
      { color: 'b', san: 'Rxf2', explain: { idea: "La segunda torre negra captura el peón de f2, que se había quedado sin ninguna defensa suficiente.", ventaja: "Gana un peón adicional, manteniendo la iniciativa pese a la entrega inicial.", debilidad: "Ninguna real, cierra el fragmento con posición favorable para negras." } }
    ]
  },
  // ============================================================
  // PROBLEMAS DE AJEDREZ -- banco tactico Lichess, lote 9 (S6)
  // ============================================================
  {
    id: 'h04-problema-lichess-A04Mc',
    name: 'Sacrificio de caballo que abre la puerta a ganar una torre',
    tema: 'Sacrificio de caballo con jaque',
    nivel: 6,
    rating: 1876,
    userColor: 'b',
    startFen: 'r3k1nr/1p2qNpp/p2p4/4n3/2Bb2b1/1Q6/PP3PPP/RNB1R1K1 b kq - 0 13',
    overview: "Posición real de una partida jugada en Lichess (rating 1876). Negras entrega el caballo con jaque, y tras la recaptura obligada, la dama negra remata capturando una torre con jaque.",
    moves: [
      { color: 'b', san: 'Nf3+', explain: { idea: "El caballo negro entra en f3 dando jaque, ofreciéndose voluntariamente.", ventaja: "Fuerza la recaptura con la dama, la única pieza que puede hacerlo.", debilidad: "Entrega el caballo -- solo se justifica por lo que viene después." } },
      { color: 'w', san: 'Qxf3', explain: { idea: "Única forma razonable de responder al jaque: la dama captura el caballo.", ventaja: "Recupera el caballo entregado.", debilidad: "La dama blanca queda alejada de la defensa de la torre de e1." } },
      { color: 'b', san: 'Qxe1+', explain: { idea: "La dama negra captura la torre blanca de e1 dando jaque, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa con jaque incluido.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-EDr62',
    name: 'El rey recoge peones sueltos en un final ajustado',
    tema: 'Cosecha de peones sueltos en el final de reyes',
    nivel: 6,
    rating: 1740,
    userColor: 'w',
    startFen: '8/8/p4p2/Pp1kpKp1/1P4P1/5P1P/8/8 w - - 7 50',
    overview: "Final de reyes y peones real de una partida jugada en Lichess (rating 1740). Ambos reyes capturan peones sueltos por turnos en una carrera muy ajustada.",
    moves: [
      { color: 'w', san: 'Kxf6', explain: { idea: "El rey blanco captura el peón de f6, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón limpio.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kc4', explain: { idea: "El rey negro avanza a c4, buscando compensación en el otro flanco.", ventaja: "Se acerca a sus propios objetivos.", debilidad: "No recupera nada del material ya perdido." } },
      { color: 'w', san: 'Kxg5', explain: { idea: "El rey blanco captura un segundo peón, el de g5.", ventaja: "Amplía la ventaja de peones.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kxb4', explain: { idea: "El rey negro captura a su vez el peón de b4.", ventaja: "Recupera parte de la igualdad material.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'h4', explain: { idea: "Blancas avanza el peón a h4, asegurando su propio peón pasado en el flanco de rey.", ventaja: "Mantiene la iniciativa con un peón pasado protegido.", debilidad: "Ninguna real -- cierra el fragmento con posición favorable para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-yubSe',
    name: 'Mate en 2 con la dama sola en el flanco de rey',
    tema: 'Mate en 2',
    nivel: 6,
    rating: 1704,
    userColor: 'b',
    startFen: '2R5/6pk/8/3B3b/PP2p1P1/6K1/4q2Q/8 b - - 3 44',
    overview: "Posición real de una partida jugada en Lichess (rating 1704). Un jaque de dama obliga al rey a una única casilla, y la dama remata capturando un peón con jaque mate.",
    moves: [
      { color: 'b', san: 'Qf3+', explain: { idea: "La dama negra entra en f3 dando jaque.", ventaja: "Jaque forzado que dirige al rey exactamente a la casilla que negras necesita.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kh4', explain: { idea: "Única casilla legal para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda sin ninguna casilla de escape para la jugada siguiente." } },
      { color: 'b', san: 'Qxg4#', explain: { idea: "La dama negra captura el peón de g4 dando jaque mate, apoyada por el resto de piezas negras que ya cubrían las demás casillas de escape.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Zz8xS',
    name: 'Jaque intermedio antes de recuperar la torre',
    tema: 'Jaque intermedio (zwischenzug)',
    nivel: 6,
    rating: 2169,
    userColor: 'b',
    startFen: '5rk1/1p2q1p1/p1p1R2p/5R1Q/8/1PbP3P/1PP3P1/6K1 b - - 0 28',
    overview: "Posición real de una partida jugada en Lichess (rating 2169). Negras mete primero un jaque de alfil en vez de recuperar la torre de inmediato, gana un tiempo extra, y solo después completa el cambio.",
    moves: [
      { color: 'b', san: 'Bd4+', explain: { idea: "El alfil negro entra en d4 dando jaque, en vez de recapturar de inmediato.", ventaja: "Jaque intermedio que gana un tiempo crucial antes de resolver el resto de la posición.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kf1', explain: { idea: "Única casilla legal para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional -- blancas sigue sin poder recuperar nada del material pendiente." } },
      { color: 'b', san: 'Qxe6', explain: { idea: "La dama negra captura la torre blanca de e6, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa gracias al tiempo ganado con el jaque intermedio.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rxf8+', explain: { idea: "La torre blanca captura la torre negra de f8 dando jaque, recuperando parte del material.", ventaja: "Recupera una torre con jaque.", debilidad: "Ninguna real para blancas en este movimiento concreto." } },
      { color: 'b', san: 'Kxf8', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera la torre cambiada, quedando con el balance final claramente a favor de negras.", debilidad: "Ninguna real, cierra el fragmento con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-TFBg4',
    name: 'Mate en 2 con dama y caballo coordinados',
    tema: 'Mate en 2 con dama y caballo',
    nivel: 6,
    rating: 1932,
    userColor: 'b',
    startFen: '6k1/p5r1/bp6/2np4/4n1pq/2P1RP2/PP4PN/1B1QR1K1 b - - 2 30',
    overview: "Posición real de una partida jugada en Lichess (rating 1932). Un jaque de dama obliga al rey a la esquina, y el caballo negro remata con jaque mate.",
    moves: [
      { color: 'b', san: 'Qf2+', explain: { idea: "La dama negra entra en f2 dando jaque.", ventaja: "Jaque forzado que dirige al rey exactamente a la esquina.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kh1', explain: { idea: "Única casilla legal para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda completamente encerrado en la esquina." } },
      { color: 'b', san: 'Ng3#', explain: { idea: "El caballo negro entra en g3 dando jaque mate, apoyado por la dama que ya cubría las demás casillas de escape.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-cdzwn',
    name: 'Jaque intermedio antes de ganar una torre suelta',
    tema: 'Jaque intermedio que gana una torre',
    nivel: 6,
    rating: 1852,
    userColor: 'b',
    startFen: '8/8/1R4p1/2kppp2/7P/P1PK2P1/8/8 b - - 0 41',
    overview: "Final de reyes y peones real de una partida jugada en Lichess (rating 1852). Negras mete primero un jaque de peón, y solo después captura una torre blanca que se había quedado sin defensa.",
    moves: [
      { color: 'b', san: 'e4+', explain: { idea: "El peón negro avanza a e4 dando jaque, en vez de resolver primero la otra amenaza pendiente.", ventaja: "Jaque intermedio que gana un tiempo crucial.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Ke3', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional -- la torre blanca sigue sin ninguna defensa." } },
      { color: 'b', san: 'Kxb6', explain: { idea: "El rey negro captura la torre blanca de b6, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'c4', explain: { idea: "Blancas avanza el peón a c4, el único intento razonable de crear contrajuego.", ventaja: "Único plan disponible.", debilidad: "No recupera nada del material ya perdido." } },
      { color: 'b', san: 'dxc4', explain: { idea: "Negras captura el peón de c4.", ventaja: "Gana un peón adicional, ampliando la ventaja ya decisiva.", debilidad: "Ninguna real, cierra el fragmento con posición ganadora." } }
    ]
  },
  {
    id: 'h04-problema-lichess-rKzn4',
    name: 'Torre suelta capturada seguida de un cambio de damas favorable',
    tema: 'Torre colgada + cambio de damas',
    nivel: 6,
    rating: 1963,
    userColor: 'b',
    startFen: '2r5/pk4q1/1p1r4/p1p2P2/2N2Q2/6Pp/5R1P/R5K1 b - - 2 39',
    overview: "Posición real de una partida jugada en Lichess (rating 1963). Negras captura una torre blanca suelta con jaque, y tras un segundo jaque, el cambio de damas deja a negras con ventaja material clara.",
    moves: [
      { color: 'b', san: 'Qxa1+', explain: { idea: "La dama negra captura la torre blanca de a1 dando jaque, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa con jaque incluido.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rf1', explain: { idea: "Única casilla razonable para tapar el jaque.", ventaja: "Detiene el jaque.", debilidad: "Ninguna real adicional." } },
      { color: 'b', san: 'Qd4+', explain: { idea: "La dama negra entra en d4 dando un segundo jaque.", ventaja: "Jaque forzado que mantiene la iniciativa.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Qxd4', explain: { idea: "Única forma razonable de responder al jaque: la dama blanca captura.", ventaja: "Recupera la iniciativa momentáneamente cambiando damas.", debilidad: "La dama blanca queda en una casilla que la torre negra puede recapturar directamente." } },
      { color: 'b', san: 'Rxd4', explain: { idea: "La torre negra recaptura la dama, cerrando el cambio con la torre ganada al principio como ventaja neta.", ventaja: "Ventaja material decisiva (una torre completa), cierra el fragmento con posición ganadora.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-HGOxk',
    name: 'Maniobra de rey y alfil que prepara el remate en un final técnico',
    tema: 'Maniobra de rey y alfil en el final',
    nivel: 6,
    rating: 2169,
    userColor: 'w',
    startFen: '8/5p1k/1p2pKb1/3pP1B1/3P1PP1/2p2r2/8/2R5 w - - 0 47',
    overview: "Final de alfiles y peones real de una partida jugada en Lichess (rating 2169). Blancas da jaque de torre, y tras la respuesta negra, reposiciona el rey y el alfil para consolidar la posición ganadora.",
    moves: [
      { color: 'w', san: 'Rh1+', explain: { idea: "La torre blanca entra en h1 dando jaque.", ventaja: "Jaque forzado, gana un tiempo.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kg8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional." } },
      { color: 'w', san: 'Ke7', explain: { idea: "El rey blanco avanza a e7, mejorando su posición sin ninguna prisa.", ventaja: "Rey mucho más activo, cerca de la acción decisiva.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Bh7', explain: { idea: "Negras reposiciona el alfil a h7, buscando la mejor defensa posible.", ventaja: "Único intento razonable de resistencia.", debilidad: "No detiene realmente el plan blanco de fondo." } },
      { color: 'w', san: 'Bf6', explain: { idea: "El alfil blanco se reposiciona a f6, consolidando una posición claramente ganadora.", ventaja: "Control total de las casillas clave del final, posición técnicamente decidida.", debilidad: "Ninguna real -- cierra el fragmento con ventaja decisiva para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-WLl1n',
    name: 'Mate en la esquina tras un sacrificio de torre',
    tema: 'Mate en la esquina (corner mate)',
    nivel: 6,
    rating: 2011,
    userColor: 'w',
    startFen: 'r4rk1/6pp/1pp1p3/3pN3/3P3q/2Kn1PR1/PP2B2P/6R1 w - - 0 26',
    overview: "Posición real de una partida jugada en Lichess (rating 2011). Blancas entrega la torre con jaque para arrastrar al rey a la esquina, y el caballo remata con jaque mate.",
    moves: [
      { color: 'w', san: 'Rxg7+', explain: { idea: "La torre blanca captura el peón de g7 dando jaque.", ventaja: "Gana un peón con jaque y empieza a arrastrar al rey hacia la esquina.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kh8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda encerrado en la esquina, sin ninguna vía de escape futura." } },
      { color: 'w', san: 'Rg8+', explain: { idea: "La torre blanca entra en g8 dando jaque, ofreciéndose voluntariamente.", ventaja: "Fuerza la captura, completando la red de mate.", debilidad: "Entrega la torre -- solo se justifica porque lleva directamente al mate." } },
      { color: 'b', san: 'Rxg8', explain: { idea: "Única forma razonable de responder al jaque: la torre negra captura.", ventaja: "Recupera la torre entregada.", debilidad: "El rey queda completamente solo en la esquina, sin ninguna pieza que lo proteja." } },
      { color: 'w', san: 'Nf7#', explain: { idea: "El caballo blanco entra en f7 dando jaque mate, sin que ninguna pieza negra pueda capturarlo ni interponerse.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-6nHup',
    name: 'Peón a un paso de coronar pese al contrajuego rival',
    tema: 'Peón pasado a un paso de coronar',
    nivel: 6,
    rating: 2085,
    userColor: 'w',
    startFen: '6k1/6b1/3QP1p1/p4p2/8/5qN1/5P1K/8 w - - 0 41',
    overview: "Final de damas y peones real de una partida jugada en Lichess (rating 2085). Blancas empuja su peón pasado a la séptima fila; el jaque de dama negro no impide que el rey se ponga a salvo sin ceder la ventaja.",
    moves: [
      { color: 'w', san: 'e7', explain: { idea: "El peón blanco avanza a e7, a un solo paso de coronar.", ventaja: "Amenaza coronar de inmediato.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qxf2+', explain: { idea: "La dama negra captura el peón de f2 dando jaque, el único intento razonable de complicar la posición.", ventaja: "Jaque forzado que gana algo de tiempo.", debilidad: "No detiene realmente la coronación que se avecina." } },
      { color: 'w', san: 'Kh3', explain: { idea: "El rey blanco se aparta del jaque sin perder nada, dejando el peón listo para coronar en la jugada siguiente.", ventaja: "El plan de coronación sigue intacto pese al jaque.", debilidad: "Ninguna real -- decide la partida a favor de blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-32jjf',
    name: 'Avance de peón con jaque que abre paso a ganar la dama',
    tema: 'Avance de peón con jaque que gana la dama',
    nivel: 6,
    rating: 1907,
    userColor: 'b',
    startFen: 'r4rk1/p1p2ppp/2p2n2/5N2/Q2p1q2/6N1/PP2KPPP/2R1R3 b - - 6 20',
    overview: "Posición real de una partida jugada en Lichess (rating 1907). El peón negro avanza dando jaque y, tras la respuesta forzada, la dama negra captura directamente la dama blanca suelta.",
    moves: [
      { color: 'b', san: 'd3+', explain: { idea: "El peón negro avanza a d3 dando jaque.", ventaja: "Jaque forzado que además gana espacio central.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kf1', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por defender la dama, que sigue sin ninguna protección adicional." } },
      { color: 'b', san: 'Qxa4', explain: { idea: "La dama negra captura la dama blanca de a4, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, la pieza más valiosa del tablero.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-SZGuW',
    name: 'Cambio de piezas que abre camino a ganar un caballo',
    tema: 'Cambio de piezas + pieza colgada',
    nivel: 6,
    rating: 2090,
    userColor: 'b',
    startFen: 'r4Nk1/pQ4p1/2p1b2p/3p4/4nP2/P1q5/2P3PP/R1B2RK1 b - - 0 18',
    overview: "Posición real de una partida jugada en Lichess (rating 2090). Negras entra con jaque de dama, cambia el alfil que se interpone, y tras un segundo jaque, captura un caballo suelto.",
    moves: [
      { color: 'b', san: 'Qd4+', explain: { idea: "La dama negra entra en d4 dando jaque.", ventaja: "Jaque forzado, dirige la combinación.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Be3', explain: { idea: "Blancas interpone el alfil, la única forma razonable de tapar el jaque.", ventaja: "Detiene el jaque momentáneamente.", debilidad: "El alfil interpuesto queda sin ninguna defensa suficiente." } },
      { color: 'b', san: 'Qxe3+', explain: { idea: "La dama negra captura el alfil dando un segundo jaque.", ventaja: "Gana una pieza con jaque incluido.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kh1', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por defender el caballo, que queda completamente solo." } },
      { color: 'b', san: 'Rxf8', explain: { idea: "La torre negra captura el caballo blanco de f8, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza adicional, ampliando la ventaja material ya decisiva.", debilidad: "Ninguna real, cierra el fragmento con posición ganadora." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Pnu82',
    name: 'Caballo que se infiltra y termina ganando la dama',
    tema: 'Infiltración de caballo con jaque que gana la dama',
    nivel: 6,
    rating: 1840,
    userColor: 'w',
    startFen: 'r3r1k1/ppq2pPp/8/2p4b/3B1P2/2N5/PP3QPP/R5K1 w - - 0 23',
    overview: "Posición real de una partida jugada en Lichess (rating 1840). El caballo blanco se infiltra hasta una casilla muy fuerte, entra con jaque, y tras el cambio obligado, el alfil remata capturando la dama negra.",
    moves: [
      { color: 'w', san: 'Nd5', explain: { idea: "El caballo blanco se traslada a d5, una casilla muy fuerte junto a la dama negra.", ventaja: "Pieza extremadamente activa, amenazando entrar todavía más.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qc6', explain: { idea: "La dama negra se retira a c6, evitando cualquier captura directa.", ventaja: "Dama a salvo momentáneamente.", debilidad: "No evita que el caballo siga avanzando hacia una casilla todavía más peligrosa." } },
      { color: 'w', san: 'Nf6+', explain: { idea: "El caballo blanco entra en f6 dando jaque.", ventaja: "Jaque forzado que ataca directamente a la dama negra al mismo tiempo.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qxf6', explain: { idea: "Única forma razonable de responder al jaque: la dama captura el caballo.", ventaja: "Recupera el caballo entregado.", debilidad: "La dama negra queda exactamente en la casilla que el alfil blanco necesita capturar." } },
      { color: 'w', san: 'Bxf6', explain: { idea: "El alfil blanco captura la dama negra, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, cerrando la combinación con ventaja material decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-bHUXN',
    name: 'Cambio de torres que abre camino a ganar un peón central',
    tema: 'Cambio de torres + ganancia de peón',
    nivel: 6,
    rating: 1923,
    userColor: 'w',
    startFen: '8/4k3/3Rp3/5pK1/3P1r1P/8/8/8 w - - 4 67',
    overview: "Final de torres y peones real de una partida jugada en Lichess (rating 1923). Blancas ofrece el cambio de torres con jaque y, tras la recaptura obligada, el rey captura también el peón central suelto.",
    moves: [
      { color: 'w', san: 'Rxe6+', explain: { idea: "La torre blanca captura el peón de e6 dando jaque, ofreciéndose al cambio.", ventaja: "Jaque forzado que fuerza el cambio de torres en condiciones favorables.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kxe6', explain: { idea: "Única forma de responder al jaque: el rey captura la torre.", ventaja: "Recupera la torre a cambio de la propia.", debilidad: "El rey negro queda alejado de la defensa del peón de f4." } },
      { color: 'w', san: 'Kxf4', explain: { idea: "El rey blanco captura el peón de f4, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón adicional tras el cambio de torres, quedando con ventaja clara en el final.", debilidad: "Ninguna real, cierra el fragmento con posición favorable." } }
    ]
  },
  {
    id: 'h04-problema-lichess-AkhFM',
    name: 'Mate en 2 con la pareja de alfiles',
    tema: 'Mate en 2 con dos alfiles',
    nivel: 6,
    rating: 1801,
    userColor: 'w',
    startFen: '8/7p/p1BB2pk/5p2/7P/6K1/r7/2q5 w - - 0 51',
    overview: "Posición real de una partida jugada en Lichess (rating 1801). Un jaque de alfil obliga al rey a una única casilla, y el segundo alfil remata con jaque mate.",
    moves: [
      { color: 'w', san: 'Bf8+', explain: { idea: "El alfil blanco entra en f8 dando jaque.", ventaja: "Jaque forzado que dirige al rey exactamente a la casilla que blancas necesita.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kh5', explain: { idea: "Única casilla legal para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda sin ninguna casilla de escape para la jugada siguiente." } },
      { color: 'w', san: 'Bf3#', explain: { idea: "El segundo alfil blanco entra en f3 dando jaque mate, apoyado por el resto de piezas blancas que ya cubrían las demás casillas de escape.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  // ============================================================
  // PROBLEMAS DE AJEDREZ -- banco tactico Lichess, lote 10 (S6)
  // ============================================================
  {
    id: 'h04-problema-lichess-g28Ui',
    name: 'Reposicionar el alfil antes de rematar con jaque y ganar una pieza',
    tema: 'Desviación del rey + ganancia de pieza',
    nivel: 6,
    rating: 1830,
    userColor: 'w',
    startFen: '6r1/p4p2/Pp1p3k/2pPp3/2P1P1b1/2PB4/5K2/6R1 w - - 4 37',
    overview: "Final de alfiles y torres real de una partida jugada en Lichess (rating 1830). Blancas reposiciona el alfil, entra con jaque de torre para desviar al rey negro, y remata capturando el alfil rival suelto.",
    moves: [
      { color: 'w', san: 'Be2', explain: { idea: "El alfil blanco se reposiciona a e2, preparando el resto del plan.", ventaja: "Pieza mejor colocada para lo que viene.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kh5', explain: { idea: "El rey negro avanza a h5, sin ninguna amenaza directa que lo impida.", ventaja: "Ninguna real para negras.", debilidad: "Ninguna adicional." } },
      { color: 'w', san: 'Rh1+', explain: { idea: "La torre blanca entra en h1 dando jaque.", ventaja: "Jaque forzado que desvía al rey de la defensa de su propio alfil.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kg6', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey se aleja todavía más de la defensa del alfil de g4." } },
      { color: 'w', san: 'Bxg4', explain: { idea: "El alfil blanco captura el alfil negro de g4, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-i7dNt',
    name: 'Jaque de caballo seguido de un sacrificio de peón que gana la dama',
    tema: 'Jaque de caballo + sacrificio que gana la dama',
    nivel: 6,
    rating: 1922,
    userColor: 'w',
    startFen: '7r/pp2q2p/5kp1/5P2/2Q3P1/8/P2N1P2/4n1K1 w - - 0 37',
    overview: "Posición real de una partida jugada en Lichess (rating 1922). El caballo blanco entra con jaque, y un sacrificio de peón con jaque fuerza a la dama negra a una casilla donde el caballo la captura.",
    moves: [
      { color: 'w', san: 'Ne4+', explain: { idea: "El caballo blanco entra en e4 dando jaque.", ventaja: "Jaque forzado, primer paso de la combinación.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kg7', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional." } },
      { color: 'w', san: 'f6+', explain: { idea: "El peón blanco avanza a f6 dando jaque, ofreciéndose voluntariamente.", ventaja: "Fuerza a la dama negra a capturar, dejándola en una casilla vulnerable.", debilidad: "Entrega el peón -- solo se justifica por lo que viene después." } },
      { color: 'b', san: 'Qxf6', explain: { idea: "Única forma razonable de responder al jaque: la dama captura el peón.", ventaja: "Recupera el peón entregado.", debilidad: "La dama negra queda exactamente en la casilla que el caballo blanco necesita capturar." } },
      { color: 'w', san: 'Nxf6', explain: { idea: "El caballo blanco captura la dama negra, que se había quedado sin ninguna defensa suficiente.", ventaja: "Gana la dama, cerrando la combinación con ventaja material decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-PcoES',
    name: 'Sacrificio de dama que abre camino a una coronación con jaque',
    tema: 'Sacrificio de dama + coronación con jaque',
    nivel: 6,
    rating: 2109,
    userColor: 'b',
    startFen: '4r1k1/1pp3pp/p7/3Pr3/2P1p3/1P2RP2/P2q2QP/4R2K b - - 0 33',
    overview: "Posición real de una partida jugada en Lichess (rating 2109). Negras entrega la dama con jaque, y el peón que queda avanza hasta coronar prácticamente, capturando piezas con jaque por el camino.",
    moves: [
      { color: 'b', san: 'Qxe1+', explain: { idea: "La dama negra captura la torre blanca de e1 dando jaque, ofreciéndose voluntariamente.", ventaja: "Fuerza la recaptura, abriendo la posición para el peón que sigue.", debilidad: "Entrega la dama -- solo se justifica por lo que viene después." } },
      { color: 'w', san: 'Rxe1', explain: { idea: "Única forma razonable de responder al jaque: la torre captura la dama.", ventaja: "Recupera la dama entregada.", debilidad: "Ninguna real adicional." } },
      { color: 'b', san: 'exf3', explain: { idea: "El peón negro captura el peón de f3, avanzando hacia la coronación.", ventaja: "Peón muy avanzado y peligroso, cerca de coronar.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rf1', explain: { idea: "La torre blanca se reagrupa a f1, el único intento razonable de frenar al peón.", ventaja: "Intenta controlar la casilla de coronación.", debilidad: "No consigue detener realmente el avance del peón." } },
      { color: 'b', san: 'fxg2+', explain: { idea: "El peón negro captura el peón de g2 dando jaque, a un solo paso de coronar.", ventaja: "Jaque forzado con el peón a punto de convertirse en una nueva dama.", debilidad: "Ninguna real -- decide la partida a favor de negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-721LQ',
    name: 'Carrera de coronación en ambos flancos',
    tema: 'Carrera de coronación de peones',
    nivel: 6,
    rating: 1797,
    userColor: 'b',
    startFen: '1R6/P7/1K4p1/5pkp/2r5/2p1P1PP/8/8 b - - 3 47',
    overview: "Final de peones y torres real de una partida jugada en Lichess (rating 1797). Ambos bandos empujan su propio peón hacia la coronación casi al mismo tiempo, en una carrera muy ajustada.",
    moves: [
      { color: 'b', san: 'c2', explain: { idea: "El peón negro avanza a c2, a un solo paso de coronar.", ventaja: "Amenaza convertirse en dama de inmediato.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'a8=Q', explain: { idea: "Blancas corona su propio peón en a8, ganando la carrera por un tempo.", ventaja: "Obtiene una nueva dama justo a tiempo.", debilidad: "No evita que negras corone también en la jugada siguiente." } },
      { color: 'b', san: 'c1=Q', explain: { idea: "El peón negro corona también en c1, igualando la carrera con una nueva dama propia.", ventaja: "Recupera el equilibrio material con una nueva dama, manteniendo la partida en juego.", debilidad: "Ninguna real -- ambos bandos quedan con una dama adicional tras la carrera." } }
    ]
  },
  {
    id: 'h04-problema-lichess-zzqp8',
    name: 'Cadena de jaques que desvía a la torre y gana material',
    tema: 'Desviación con jaques en cadena',
    nivel: 6,
    rating: 2121,
    userColor: 'b',
    startFen: '5r1k/p1Q5/1p4pp/4R1q1/6b1/2P2NP1/PP3K1P/R7 b - - 0 28',
    overview: "Posición real de una partida jugada en Lichess (rating 2121). Negras encadena jaques que van desviando a las piezas blancas de su función defensiva, terminando con la dama negra ganando una torre.",
    moves: [
      { color: 'b', san: 'Qd2+', explain: { idea: "La dama negra entra en d2 dando jaque.", ventaja: "Jaque forzado, primer paso de la combinación.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Re2', explain: { idea: "Única forma razonable de tapar el jaque.", ventaja: "Detiene el jaque.", debilidad: "La torre interpuesta queda desviada de su función defensiva original." } },
      { color: 'b', san: 'Rxf3+', explain: { idea: "La torre negra captura el caballo blanco de f3 dando jaque.", ventaja: "Gana una pieza con jaque incluido.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kg1', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por defender la torre de e2, que sigue expuesta." } },
      { color: 'b', san: 'Qxe2', explain: { idea: "La dama negra captura la torre blanca de e2, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre adicional, ampliando la ventaja material ya decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-VwAow',
    name: 'Reagrupación de torre seguida de un cambio de damas forzado',
    tema: 'Reagrupación + cambio de damas',
    nivel: 6,
    rating: 1721,
    userColor: 'w',
    startFen: '8/6k1/p5p1/1p1p1p1p/3r1q2/2Q4P/PP4P1/2R3K1 w - - 0 36',
    overview: "Posición real de una partida jugada en Lichess (rating 1721). Blancas reagrupa la torre a una columna útil, y tras un jaque de dama negra, el cambio de damas queda claramente a favor de blancas.",
    moves: [
      { color: 'w', san: 'Rd1', explain: { idea: "La torre blanca se reagrupa a d1, ocupando la columna abierta.", ventaja: "Torre mucho más activa, lista para el resto de la partida.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qe3+', explain: { idea: "La dama negra entra en e3 dando jaque, el único intento razonable de complicar la posición.", ventaja: "Jaque forzado, gana un tiempo.", debilidad: "Ofrece el cambio de damas en una posición ya favorable para blancas." } },
      { color: 'w', san: 'Qxe3', explain: { idea: "La dama blanca captura la dama negra, la única forma legal de responder al jaque.", ventaja: "Cambio de damas que consolida la ventaja posicional ya conseguida con la torre bien colocada.", debilidad: "Ninguna real -- cierra el fragmento con posición favorable para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-AjFfz',
    name: 'Peón que corona con jaque pese a la captura rival',
    tema: 'Coronación con jaque',
    nivel: 6,
    rating: 1784,
    userColor: 'b',
    startFen: '8/3k4/1p6/1PbKR1P1/2B2P2/3pr3/8/8 b - - 1 56',
    overview: "Final de piezas y peones real de una partida jugada en Lichess (rating 1784). El peón negro avanza a un paso de coronar; aunque blancas captura una torre a cambio, el peón corona de todas formas con jaque.",
    moves: [
      { color: 'b', san: 'd2', explain: { idea: "El peón negro avanza a d2, a un solo paso de coronar.", ventaja: "Amenaza convertirse en dama de inmediato.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rxe3', explain: { idea: "La torre blanca captura la torre negra de e3, el único intento razonable de obtener compensación.", ventaja: "Gana una torre a cambio.", debilidad: "No detiene realmente la coronación del peón." } },
      { color: 'b', san: 'd1=Q+', explain: { idea: "El peón negro corona en d1 dando jaque, convirtiéndose en una nueva dama.", ventaja: "Recupera con creces el material cambiado, quedando con una dama adicional y jaque incluido.", debilidad: "Ninguna real -- decide la partida a favor de negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-UgIPv',
    name: 'El rey bloquea la coronación y captura la pieza subida',
    tema: 'Bloqueo de la coronación en el final de peones',
    nivel: 6,
    rating: 1760,
    userColor: 'b',
    startFen: '8/8/ppp1P1kp/8/P1P1p1PK/4P3/8/8 b - - 0 37',
    overview: "Final de reyes y peones real de una partida jugada en Lichess (rating 1760). Blancas empuja su peón pasado hasta la séptima fila, pero el rey negro llega justo a tiempo para bloquear la casilla de coronación y capturar la pieza subida.",
    moves: [
      { color: 'b', san: 'b5', explain: { idea: "Negras avanza el peón a b5, ganando espacio en el otro flanco mientras blancas corre con su propio peón.", ventaja: "Mantiene su propio plan de avance.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'e7', explain: { idea: "El peón blanco avanza a e7, a un solo paso de coronar.", ventaja: "Amenaza convertirse en una nueva pieza de inmediato.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kf7', explain: { idea: "El rey negro llega justo a tiempo a f7, bloqueando la casilla de coronación.", ventaja: "Impide que el peón corone de forma útil.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'e8=R', explain: { idea: "Blancas corona de todas formas en e8, aunque la nueva pieza nace ya bajo ataque directo del rey.", ventaja: "Obtiene una nueva pieza sobre el tablero.", debilidad: "La pieza recién coronada queda inmediatamente indefensa frente al rey negro." } },
      { color: 'b', san: 'Kxe8', explain: { idea: "El rey negro captura la pieza recién coronada, neutralizando por completo el intento de blancas.", ventaja: "Elimina la amenaza de coronación sin ceder nada, quedando con posición ganadora en el final.", debilidad: "Ninguna real -- cierra el fragmento con ventaja decisiva para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-gtIb6',
    name: 'Jugada tranquila que resiste el sacrificio de dama rival',
    tema: 'Jugada tranquila que aguanta el ataque',
    nivel: 6,
    rating: 2123,
    userColor: 'b',
    startFen: '6rk/R1R1Q1pq/7p/8/B7/p5PP/5P1K/r7 b - - 8 40',
    overview: "Posición real de una partida jugada en Lichess (rating 2123). Negras juega una jugada tranquila de reposicionamiento; blancas intenta un sacrificio de dama con jaque, pero negras defiende con precisión y mantiene la posición bajo control.",
    moves: [
      { color: 'b', san: 'Qb1', explain: { idea: "La dama negra se reposiciona a b1, sin ninguna amenaza directa inmediata.", ventaja: "Prepara mejor coordinación para el resto de la partida.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Qxg7+', explain: { idea: "La dama blanca captura el peón de g7 dando jaque, buscando complicar la posición del rey negro.", ventaja: "Jaque forzado con intención de crear amenazas de mate.", debilidad: "Entrega la dama -- solo se justifica si consigue suficiente compensación." } },
      { color: 'b', san: 'Rxg7', explain: { idea: "Única forma razonable de responder al jaque: la torre captura la dama.", ventaja: "Recupera la dama entregada, quedando con ventaja material clara.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rc8+', explain: { idea: "La torre blanca entra en c8 dando jaque, el único intento razonable de mantener algo de iniciativa.", ventaja: "Jaque forzado que gana un tiempo.", debilidad: "No recupera nada del material ya perdido." } },
      { color: 'b', san: 'Rg8', explain: { idea: "La torre negra se interpone en g8, defendiendo con precisión sin ceder nada de la ventaja material ya conseguida.", ventaja: "Detiene el jaque manteniendo la ventaja decisiva.", debilidad: "Ninguna real -- cierra el fragmento con posición ganadora para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-GDIBC',
    name: 'Cambios forzados en la primera fila que dejan el rey expuesto',
    tema: 'Despeje de la primera fila con cambios forzados',
    nivel: 6,
    rating: 1835,
    userColor: 'w',
    startFen: '2b1rk2/4p2p/p7/4Q3/3P2P1/1P1q1r2/P7/R4RK1 w - - 4 35',
    overview: "Posición real de una partida jugada en Lichess (rating 1835). Una cadena de capturas con jaque en la primera fila termina con el rey blanco recapturando la dama negra en una posición simplificada.",
    moves: [
      { color: 'w', san: 'Rxf3+', explain: { idea: "La torre blanca captura la torre negra de f3 dando jaque.", ventaja: "Cambio favorable con jaque.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qxf3', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera la torre cambiada.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rf1', explain: { idea: "La torre blanca se reagrupa a f1, ofreciendo otro cambio.", ventaja: "Sigue simplificando la posición.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qxf1+', explain: { idea: "La dama negra captura la torre blanca dando jaque, la única forma razonable.", ventaja: "Gana una torre con jaque.", debilidad: "La dama queda en una casilla que el rey blanco puede capturar directamente." } },
      { color: 'w', san: 'Kxf1', explain: { idea: "El rey blanco captura la dama negra, que se había quedado sin ninguna defensa.", ventaja: "Recupera la dama, cerrando la serie de cambios con posición simplificada y equilibrada.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-HHDot',
    name: 'Cadena de jaques de dama que termina ganando una torre',
    tema: 'Ataque con la dama al rey expuesto',
    nivel: 6,
    rating: 1912,
    userColor: 'w',
    startFen: '1k5r/1b6/p1q1Q3/1p5p/8/7P/PP3PP1/5RK1 w - - 1 28',
    overview: "Posición real de una partida jugada en Lichess (rating 1912). La dama blanca encadena dos jaques que van desplazando al rey y a la dama negra, terminando con la captura de una torre suelta.",
    moves: [
      { color: 'w', san: 'Qe5+', explain: { idea: "La dama blanca entra en e5 dando jaque.", ventaja: "Jaque forzado, primer paso de la combinación.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Ka7', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional." } },
      { color: 'w', san: 'Qd4+', explain: { idea: "La dama blanca sigue con un segundo jaque desde d4.", ventaja: "Mantiene la iniciativa, sin dar tregua.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qb6', explain: { idea: "Única forma razonable de tapar el jaque: interponer la propia dama.", ventaja: "Detiene el jaque momentáneamente.", debilidad: "No defiende la torre de h8, que queda completamente sola." } },
      { color: 'w', san: 'Qxh8', explain: { idea: "La dama blanca captura la torre negra de h8, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa, cerrando la combinación con ventaja decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-60LxU',
    name: 'Cambio de damas que atrae a la torre a una casilla vulnerable',
    tema: 'Atracción con cambio de damas',
    nivel: 6,
    rating: 1837,
    userColor: 'w',
    startFen: '1r2r1k1/p4p1p/5np1/B3q3/8/2Q5/2P2PPP/R2R2K1 w - - 5 25',
    overview: "Posición real de una partida jugada en Lichess (rating 1837). Tras cambiar las damas, blancas reposiciona el alfil y, pese a la respuesta negra, termina capturando la torre que había quedado expuesta.",
    moves: [
      { color: 'w', san: 'Qxe5', explain: { idea: "La dama blanca captura la dama negra de e5, la única forma de justificarlo si negras recaptura con la torre.", ventaja: "Cambio de damas en condiciones favorables.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rxe5', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera la dama cambiada.", debilidad: "La torre queda en una casilla donde el alfil blanco puede atacarla." } },
      { color: 'w', san: 'Bc7', explain: { idea: "El alfil blanco se reposiciona a c7, atacando indirectamente la posición negra.", ventaja: "Pieza muy activa tras el cambio de damas.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rbe8', explain: { idea: "Negras reagrupa la segunda torre a e8, buscando la mejor defensa posible.", ventaja: "Intenta coordinar la defensa.", debilidad: "No evita que la torre de e5 siga expuesta al alfil blanco." } },
      { color: 'w', san: 'Bxe5', explain: { idea: "El alfil blanco captura la torre negra de e5, que se había quedado sin ninguna defensa suficiente.", ventaja: "Gana una torre completa, cerrando la combinación con ventaja decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-M4SsO',
    name: 'Doble sacrificio en el flanco de rey que termina ganando la dama',
    tema: 'Atracción del rey con doble sacrificio que gana la dama',
    nivel: 6,
    rating: 1823,
    userColor: 'b',
    startFen: 'r3k1r1/p1p2p1p/2pqbQ2/8/8/2N5/PPP2PPP/R4RK1 b q - 2 14',
    overview: "Posición real de una partida jugada en Lichess (rating 1823). Negras entrega primero la torre y luego el alfil, ambos con jaque, arrastrando al rey blanco a una posición donde la dama negra recupera la dama rival.",
    moves: [
      { color: 'b', san: 'Rxg2+', explain: { idea: "La torre negra captura el peón de g2 dando jaque, ofreciéndose voluntariamente.", ventaja: "Atrae al rey hacia una casilla concreta.", debilidad: "Entrega la torre -- solo se justifica por lo que viene después." } },
      { color: 'w', san: 'Kxg2', explain: { idea: "Única forma de responder al jaque: el rey captura la torre.", ventaja: "Recupera la torre entregada.", debilidad: "El rey queda cerca de la zona donde negras prepara el siguiente golpe." } },
      { color: 'b', san: 'Bh3+', explain: { idea: "El alfil negro entra en h3 dando jaque, un segundo sacrificio.", ventaja: "Sigue atrayendo al rey hacia la casilla que negras necesita.", debilidad: "Entrega también el alfil." } },
      { color: 'w', san: 'Kxh3', explain: { idea: "Única forma de responder al jaque: el rey captura el alfil.", ventaja: "Recupera el alfil entregado.", debilidad: "El rey queda completamente solo, lejos de cualquier pieza que lo proteja, y la dama blanca sigue sin ninguna defensa." } },
      { color: 'b', san: 'Qxf6', explain: { idea: "La dama negra captura la dama blanca de f6, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, cerrando la combinación con ventaja material decisiva pese a los sacrificios previos.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-LlQH1',
    name: 'La dama blanca resiste el contraataque y recupera la iniciativa',
    tema: 'Defensa precisa ante un contraataque de dama',
    nivel: 6,
    rating: 2017,
    userColor: 'w',
    startFen: '6k1/1p3p1p/p3pPp1/3pP2P/3P2P1/5K2/qP1Q4/8 w - - 0 28',
    overview: "Posición real de una partida jugada en Lichess (rating 2017). Blancas se infiltra con la dama, resiste dos jaques consecutivos de la dama negra, y remata capturando un peón con jaque.",
    moves: [
      { color: 'w', san: 'Qh6', explain: { idea: "La dama blanca entra en h6, muy cerca del rey negro.", ventaja: "Pieza extremadamente activa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qb3+', explain: { idea: "La dama negra entra en b3 dando jaque, el único intento razonable de contrajuego.", ventaja: "Jaque forzado que gana un tiempo.", debilidad: "No detiene realmente el ataque blanco de fondo." } },
      { color: 'w', san: 'Kf4', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "El rey se pone a salvo sin ceder nada de la iniciativa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'g5+', explain: { idea: "Negras avanza el peón a g5 dando jaque, el último intento de complicar la posición.", ventaja: "Jaque forzado, gana otro tiempo.", debilidad: "No recupera nada del ataque ya en marcha." } },
      { color: 'w', san: 'Qxg5+', explain: { idea: "La dama blanca captura el peón dando jaque, manteniendo toda la iniciativa del ataque.", ventaja: "Recupera material adicional sin ceder nada del ataque ya iniciado.", debilidad: "Ninguna real -- cierra el fragmento con posición decisiva para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-q88ua',
    name: 'Torre suelta capturada seguida de un cambio de damas favorable',
    tema: 'Torre colgada + cambio de damas',
    nivel: 6,
    rating: 1860,
    userColor: 'w',
    startFen: '3q1rk1/1B1nbpp1/4pnp1/8/2rP1BPP/2pQ4/PP3P2/1K1R3R w - - 0 22',
    overview: "Posición real de una partida jugada en Lichess (rating 1860). Blancas captura una torre suelta y, tras el cambio de damas que sigue, recupera también la dama con el peón.",
    moves: [
      { color: 'w', san: 'Qxc4', explain: { idea: "La dama blanca captura la torre negra de c4, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qb6', explain: { idea: "La dama negra se reposiciona a b6, buscando crear alguna amenaza propia.", ventaja: "Pieza activa tras la pérdida de material.", debilidad: "No recupera nada de lo ya perdido." } },
      { color: 'w', san: 'Qb3', explain: { idea: "La dama blanca se retira a b3, evitando cualquier complicación directa.", ventaja: "Consolida la ventaja material ya conseguida.", debilidad: "Ofrece el cambio de damas." } },
      { color: 'b', san: 'Qxb3', explain: { idea: "La dama negra captura la dama blanca, la única forma de intentar complicar la posición.", ventaja: "Cambia las damas.", debilidad: "Deja el balance material final claramente a favor de blancas." } },
      { color: 'w', san: 'axb3', explain: { idea: "El peón blanco recaptura la dama negra, cerrando el cambio con la torre ganada al principio como ventaja neta.", ventaja: "Ventaja material decisiva (una torre completa), cierra el fragmento con posición ganadora.", debilidad: "Ninguna real." } }
    ]
  },
  // ============================================================
  // PROBLEMAS DE AJEDREZ -- banco tactico Lichess, lote 11 (S6)
  // ============================================================
  {
    id: 'h04-problema-lichess-tXLfG',
    name: 'Jaque intermedio de caballo antes de capturar una pieza suelta',
    tema: 'Jaque intermedio (zwischenzug)',
    nivel: 6,
    rating: 2184,
    userColor: 'w',
    startFen: 'r1b1qrk1/p1pp1pp1/1p6/2bNP2Q/2P1Pn1P/8/PPP3P1/R3KR2 w Q - 0 18',
    overview: "Posición real de una partida jugada en Lichess (rating 2184). Blancas mete un jaque de caballo en vez de resolver otra cuestión pendiente, y tras la recaptura obligada, la torre remata capturando una pieza suelta.",
    moves: [
      { color: 'w', san: 'Nf6+', explain: { idea: "El caballo blanco entra en f6 dando jaque, ofreciéndose voluntariamente.", ventaja: "Jaque intermedio que gana un tiempo crucial.", debilidad: "Entrega el caballo -- solo se justifica por lo que viene después." } },
      { color: 'b', san: 'gxf6', explain: { idea: "Única forma razonable de responder al jaque: capturar con el peón.", ventaja: "Recupera el caballo entregado.", debilidad: "Ninguna real adicional." } },
      { color: 'w', san: 'Rxf4', explain: { idea: "La torre blanca captura el caballo negro de f4, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa gracias al tiempo ganado con el jaque intermedio.", debilidad: "Ninguna real, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-GAQj8',
    name: 'Reposicionamiento que despeja la torre para ganar la dama',
    tema: 'Despeje de línea que gana la dama',
    nivel: 6,
    rating: 1960,
    userColor: 'w',
    startFen: '1r2rn2/p1p1b1kp/6p1/1p4P1/3Pq3/1QP1PN1R/PP3P2/2K4R w - - 1 25',
    overview: "Posición real de una partida jugada en Lichess (rating 1960). Blancas reposiciona el caballo y la torre en silencio; cuando negras acepta el cambio de torres, el caballo remata capturando la dama.",
    moves: [
      { color: 'w', san: 'Ne5', explain: { idea: "El caballo blanco se traslada a e5, una casilla central muy fuerte.", ventaja: "Pieza muy activa, sin ninguna amenaza directa todavía.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qf5', explain: { idea: "La dama negra se reposiciona a f5, buscando mayor actividad.", ventaja: "Pieza activa.", debilidad: "Ninguna real inmediata." } },
      { color: 'w', san: 'Rf3', explain: { idea: "La torre blanca se traslada a f3, ofreciéndose aparentemente al cambio.", ventaja: "Prepara la trampa final de la combinación.", debilidad: "Entrega la torre -- solo se justifica por lo que viene después." } },
      { color: 'b', san: 'Qxf3', explain: { idea: "La dama negra captura la torre, cayendo en la trampa preparada.", ventaja: "Gana una torre, en apariencia una buena ganancia material.", debilidad: "La dama queda exactamente en la casilla que el caballo blanco necesita capturar." } },
      { color: 'w', san: 'Nxf3', explain: { idea: "El caballo blanco captura la dama negra, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, cerrando la combinación con ventaja material decisiva pese a la torre entregada.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-LgpbR',
    name: 'Sacrificio de caballo que abre la puerta a la dama',
    tema: 'Sacrificio de caballo con jaque',
    nivel: 6,
    rating: 2111,
    userColor: 'w',
    startFen: 'r4rk1/5pb1/3p3p/1p1Np1pP/p3P3/1qP3PB/1P3QPK/5R2 w - - 4 38',
    overview: "Posición real de una partida jugada en Lichess (rating 2111). Blancas entrega el caballo con jaque, y tras la recaptura obligada del alfil, la dama remata capturando la pieza que queda suelta.",
    moves: [
      { color: 'w', san: 'Nf6+', explain: { idea: "El caballo blanco entra en f6 dando jaque, ofreciéndose voluntariamente.", ventaja: "Fuerza la recaptura, abriendo la posición para el remate de la dama.", debilidad: "Entrega el caballo -- solo se justifica por lo que viene después." } },
      { color: 'b', san: 'Bxf6', explain: { idea: "Única forma razonable de responder al jaque: el alfil captura el caballo.", ventaja: "Recupera el caballo entregado.", debilidad: "El alfil queda en una casilla que la dama blanca puede capturar directamente." } },
      { color: 'w', san: 'Qxf6', explain: { idea: "La dama blanca captura el alfil negro, que se había quedado sin ninguna defensa.", ventaja: "Recupera el material entregado con ventaja adicional, cerrando la combinación con posición decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-R7Nri',
    name: 'El rey esquiva una cadena de jaques antes de recuperar la torre',
    tema: 'Jugada defensiva del rey ante jaques en cadena',
    nivel: 6,
    rating: 2200,
    userColor: 'w',
    startFen: '1r5k/3q1pR1/4p2B/p2p3p/1b1P3P/4QP2/r1PK4/6R1 w - - 4 35',
    overview: "Posición real de una partida jugada en Lichess (rating 2200). El rey blanco se reposiciona con cuidado, resiste dos jaques de torre consecutivos, y termina recuperando la torre negra que había quedado suelta.",
    moves: [
      { color: 'w', san: 'Kd1', explain: { idea: "El rey blanco se traslada a d1, buscando mayor seguridad antes de que lleguen los jaques.", ventaja: "Rey mejor protegido para lo que viene.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Ra1+', explain: { idea: "La torre negra entra en a1 dando jaque, el único intento razonable de contrajuego.", ventaja: "Jaque forzado, gana un tiempo.", debilidad: "Ninguna real para negras." } },
      { color: 'w', san: 'Ke2', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional." } },
      { color: 'b', san: 'Re1+', explain: { idea: "La torre negra insiste con un segundo jaque desde e1.", ventaja: "Sigue buscando complicaciones.", debilidad: "Se ofrece a ser capturada." } },
      { color: 'w', san: 'Rxe1', explain: { idea: "La torre blanca captura la torre negra, que se había quedado sin ninguna defensa suficiente.", ventaja: "Gana una torre completa, cerrando la secuencia con ventaja decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-3fjRs',
    name: 'Carrera de coronación entre dos peones pasados',
    tema: 'Carrera de coronación con jugada precisa del rey',
    nivel: 6,
    rating: 2098,
    userColor: 'w',
    startFen: '8/2p5/2P5/6P1/3kp3/6K1/8/8 w - - 0 47',
    overview: "Final de reyes y peones real de una partida jugada en Lichess (rating 2098). Ambos bandos empujan su propio peón hacia la coronación; blancas calcula con precisión para llegar a tiempo de detener el peón negro.",
    moves: [
      { color: 'w', san: 'g6', explain: { idea: "El peón blanco avanza a g6, iniciando su propia carrera hacia la coronación.", ventaja: "Peón muy rápido, cerca de convertirse en dama.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'e3', explain: { idea: "Negras avanza su propio peón a e3, iniciando la carrera en el otro extremo.", ventaja: "Peón también peligroso, cerca de coronar.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'g7', explain: { idea: "El peón blanco sigue avanzando a g7, a un solo paso de coronar.", ventaja: "Gana la carrera por un margen claro.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'e2', explain: { idea: "Negras avanza el peón a e2, también a un paso de coronar.", ventaja: "Mantiene su propia amenaza de coronación.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kf2', explain: { idea: "El rey blanco se acerca a f2, llegando justo a tiempo para detener al peón negro sin perder la propia carrera.", ventaja: "Controla ambas amenazas: su propio peón corona y el peón negro queda detenido.", debilidad: "Ninguna real -- decide la partida a favor de blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-1eIts',
    name: 'Sacrificio de caballo que abre paso a ganar un alfil',
    tema: 'Sacrificio de caballo con jaque en el enroque',
    nivel: 6,
    rating: 1910,
    userColor: 'w',
    startFen: 'r4rk1/ppq2p2/2p3pp/3pnNbQ/8/2P1PPB1/PP6/R3K2R w KQ - 0 21',
    overview: "Posición real de una partida jugada en Lichess (rating 1910). Blancas entrega el caballo con jaque, capturando un peón de la estructura del enroque, y la dama remata ganando un alfil suelto.",
    moves: [
      { color: 'w', san: 'Nxh6+', explain: { idea: "El caballo blanco captura el peón de h6 dando jaque, ofreciéndose voluntariamente.", ventaja: "Destruye la estructura de peones del enroque negro con jaque incluido.", debilidad: "Entrega el caballo -- solo se justifica por lo que viene después." } },
      { color: 'b', san: 'Kg7', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por defender el alfil de g5, que sigue expuesto." } },
      { color: 'w', san: 'Qxg5', explain: { idea: "La dama blanca captura el alfil negro de g5, que se había quedado sin ninguna defensa.", ventaja: "Recupera el material entregado con ventaja adicional, cerrando la combinación con posición decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-xIrkg',
    name: 'Sacrificio de caballo que fuerza el cambio de damas favorable',
    tema: 'Sacrificio de caballo + cambio de damas favorable',
    nivel: 6,
    rating: 1774,
    userColor: 'w',
    startFen: 'r2q1rk1/1p1b1p1n/p2p1P1B/2pNp2p/3nP1Pb/3P4/PPP3B1/R2Q1RK1 w - - 0 18',
    overview: "Posición real de una partida jugada en Lichess (rating 1774). Blancas entrega el caballo con jaque forzando el cambio de damas, y el peón recaptura quedando en una posición muy avanzada.",
    moves: [
      { color: 'w', san: 'Ne7+', explain: { idea: "El caballo blanco entra en e7 dando jaque, ofreciéndose voluntariamente.", ventaja: "Fuerza el cambio de damas en condiciones muy favorables.", debilidad: "Entrega el caballo -- solo se justifica por lo que viene después." } },
      { color: 'b', san: 'Qxe7', explain: { idea: "Única forma razonable de responder al jaque: la dama captura el caballo.", ventaja: "Recupera el caballo a cambio de la propia dama.", debilidad: "La dama negra queda en una casilla que el peón blanco puede capturar directamente." } },
      { color: 'w', san: 'fxe7', explain: { idea: "El peón blanco captura la dama negra, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, quedando además con un peón muy avanzado cerca de la coronación.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-25aaW',
    name: 'Reposicionamiento del alfil que resiste el jaque de dama',
    tema: 'Jugada defensiva que resiste el jaque',
    nivel: 6,
    rating: 1741,
    userColor: 'b',
    startFen: 'r1bqkb1r/ppp2ppp/8/3pP3/3Qn3/3B4/PPP2PPP/RNB1K2R b KQkq - 1 7',
    overview: "Posición real de una partida jugada en Lichess (rating 1741), en fase de apertura. Negras reposiciona el alfil con precisión, y tras el jaque de dama blanco, encuentra la mejor forma de defenderse sin ceder material.",
    moves: [
      { color: 'b', san: 'Bc5', explain: { idea: "El alfil negro se traslada a c5, desarrollando la pieza con actividad.", ventaja: "Pieza bien colocada, apuntando hacia el flanco de rey blanco.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Qa4+', explain: { idea: "La dama blanca entra en a4 dando jaque, el único intento razonable de aprovechar la posición del rey negro.", ventaja: "Jaque forzado que gana un tiempo.", debilidad: "Ninguna real para blancas más allá del tiempo ganado." } },
      { color: 'b', san: 'Bd7', explain: { idea: "El alfil negro se interpone en d7, la forma más sencilla y sólida de tapar el jaque.", ventaja: "Detiene el jaque sin ceder ningún material.", debilidad: "Ninguna real -- es la respuesta más precisa disponible." } }
    ]
  },
  {
    id: 'h04-problema-lichess-iEF39',
    name: 'El rey negro captura los peones blancos que quedan sueltos',
    tema: 'Cosecha de peones en el final de reyes',
    nivel: 6,
    rating: 2141,
    userColor: 'b',
    startFen: '8/7p/6p1/5pk1/8/2K2PPP/8/8 b - - 0 48',
    overview: "Final de reyes y peones real de una partida jugada en Lichess (rating 2141). Negras avanza su propio peón, resiste un jaque, y termina capturando los peones blancos que quedan sin ninguna defensa.",
    moves: [
      { color: 'b', san: 'f4', explain: { idea: "Negras avanza el peón a f4, ganando espacio y creando amenazas propias.", ventaja: "Peón activo, cerca de crear complicaciones.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'h4+', explain: { idea: "Blancas avanza el peón a h4 dando jaque, el único intento razonable de contrajuego.", ventaja: "Jaque forzado, gana un tiempo.", debilidad: "No detiene realmente el plan negro de fondo." } },
      { color: 'b', san: 'Kh5', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional." } },
      { color: 'w', san: 'gxf4', explain: { idea: "Blancas captura el peón de f4, la única forma de recuperar algo de material.", ventaja: "Recupera parte del material.", debilidad: "El peón blanco resultante queda sin ninguna defensa adicional." } },
      { color: 'b', san: 'Kxh4', explain: { idea: "El rey negro captura el peón de h4, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón adicional, quedando con ventaja clara en el final de reyes.", debilidad: "Ninguna real -- cierra el fragmento con posición favorable para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-c7qe0',
    name: 'Torre ganada sin defensa que debe resistir el contraataque de dama',
    tema: 'Pieza colgada + resistencia ante el contraataque',
    nivel: 6,
    rating: 2053,
    userColor: 'w',
    startFen: '4q1k1/pp3pbp/6p1/3r4/8/P6P/1P3PP1/R1BQ2K1 w - - 0 21',
    overview: "Posición real de una partida jugada en Lichess (rating 2053). Blancas captura una torre negra suelta, y tras dos jaques de dama negra buscando complicar la posición, encuentra la forma de mantener la ventaja material.",
    moves: [
      { color: 'w', san: 'Qxd5', explain: { idea: "La dama blanca captura la torre negra de d5, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa.", debilidad: "Ninguna real inmediata." } },
      { color: 'b', san: 'Qe1+', explain: { idea: "La dama negra entra en e1 dando jaque, el único intento razonable de contrajuego.", ventaja: "Jaque forzado, gana un tiempo.", debilidad: "No recupera nada del material ya perdido." } },
      { color: 'w', san: 'Kh2', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional." } },
      { color: 'b', san: 'Be5+', explain: { idea: "La dama negra sigue con un segundo jaque de alfil desde e5.", ventaja: "Sigue buscando complicaciones antes de rendirse a la ventaja material blanca.", debilidad: "Ninguna real para negras." } },
      { color: 'w', san: 'f4', explain: { idea: "Blancas tapa el jaque con el peón, manteniendo la ventaja de una torre completa sin ceder nada más.", ventaja: "Posición sólida y ganadora, con la ventaja material ya asegurada.", debilidad: "Ninguna real -- cierra el fragmento con posición decisiva para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-OBcx6',
    name: 'Dama que persigue al caballo hasta ganarlo con jaque',
    tema: 'Persecución de dama que gana una pieza',
    nivel: 6,
    rating: 2125,
    userColor: 'w',
    startFen: 'r3r1k1/p3p2p/5ppB/1p5P/n7/5NP1/1q3PK1/1Q2R3 w - - 3 39',
    overview: "Posición real de una partida jugada en Lichess (rating 2125). La dama blanca se reposiciona, sigue al caballo negro con jaque, y termina capturándolo sin que negras pueda evitarlo.",
    moves: [
      { color: 'w', san: 'Qe4', explain: { idea: "La dama blanca se traslada a e4, amenazando indirectamente al caballo negro.", ventaja: "Pieza activa, comienza a acorralar al caballo.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Nc5', explain: { idea: "El caballo negro se retira a c5, buscando una casilla más segura.", ventaja: "Aleja momentáneamente al caballo de la amenaza.", debilidad: "Sigue sin encontrar una casilla verdaderamente segura." } },
      { color: 'w', san: 'Qd5+', explain: { idea: "La dama blanca entra en d5 dando jaque, siguiendo la persecución del caballo.", ventaja: "Jaque forzado que sigue acorralando al caballo.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'e6', explain: { idea: "Negras interpone el peón, el único intento razonable de tapar el jaque.", ventaja: "Detiene el jaque momentáneamente.", debilidad: "No hace nada por salvar al caballo, que sigue sin ninguna casilla segura." } },
      { color: 'w', san: 'Qxc5', explain: { idea: "La dama blanca captura el caballo negro, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa, cerrando la persecución con ventaja decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-nDRuP',
    name: 'Sacrificio de alfil que abre camino al mate con dos torres',
    tema: 'Mate en 3 con sacrificio de alfil',
    nivel: 6,
    rating: 1811,
    userColor: 'w',
    startFen: '6rk/7p/5p1B/1pp1pP2/3p4/1P1r4/6R1/R6K w - - 0 38',
    overview: "Posición real de una partida jugada en Lichess (rating 1811). Blancas entrega el alfil con jaque, y tras una cadena de jaques de torre, remata capturando la torre negra con jaque mate.",
    moves: [
      { color: 'w', san: 'Bg7+', explain: { idea: "El alfil blanco entra en g7 dando jaque, ofreciéndose voluntariamente.", ventaja: "Fuerza la captura, abriendo la posición para el ataque de las torres.", debilidad: "Entrega el alfil -- solo se justifica porque lleva directamente al mate." } },
      { color: 'b', san: 'Rxg7', explain: { idea: "Única forma razonable de responder al jaque: la torre captura el alfil.", ventaja: "Recupera el alfil entregado.", debilidad: "El rey negro queda completamente expuesto en la esquina." } },
      { color: 'w', san: 'Ra8+', explain: { idea: "La torre blanca entra en a8 dando jaque.", ventaja: "Jaque forzado que sigue la combinación.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rg8', explain: { idea: "Única forma de tapar el jaque sin perder al rey de inmediato: interponer la propia torre.", ventaja: "Detiene el jaque momentáneamente.", debilidad: "La torre interpuesta queda exactamente en la casilla que blancas necesita capturar para dar mate." } },
      { color: 'w', san: 'Rgxg8#', explain: { idea: "La torre blanca captura la torre negra dando jaque mate, apoyada por el resto de piezas blancas que ya cubrían las demás casillas de escape.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-nmpBr',
    name: 'El caballo atrapa a la dama rival en una esquina',
    tema: 'Pieza atrapada -- caballo que caza a la dama',
    nivel: 6,
    rating: 1980,
    userColor: 'w',
    startFen: 'r1b1k2r/pp3ppp/2n1p3/3n4/3P4/P1NB1N2/1q3PPP/R2QK2R w KQkq - 0 12',
    overview: "Posición real de una partida jugada en Lichess (rating 1980), en fase de apertura. La dama negra se había aventurado demasiado dentro de la posición blanca; el caballo blanco la caza sin que tenga ninguna casilla de escape.",
    moves: [
      { color: 'w', san: 'Na4', explain: { idea: "El caballo blanco se traslada a a4, empezando a cerrar las casillas de escape de la dama negra.", ventaja: "Reduce las opciones de la dama negra, que se había aventurado demasiado.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Nc3', explain: { idea: "Negras intenta defender la dama con el caballo, buscando la única cobertura posible.", ventaja: "Único intento razonable de salvar la dama.", debilidad: "No es suficiente: la dama sigue sin ninguna casilla de escape real." } },
      { color: 'w', san: 'Nxb2', explain: { idea: "El caballo blanco captura la dama negra, que se había quedado completamente atrapada sin ninguna casilla de escape.", ventaja: "Gana la dama, la pieza más valiosa del tablero, sin ninguna compensación.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-nlHP3',
    name: 'Reposicionamiento de alfil que gana una torre con jaque',
    tema: 'Ataque a distancia que gana una torre',
    nivel: 6,
    rating: 1772,
    userColor: 'b',
    startFen: '8/1p6/p1bp1r1k/4p1pp/4P3/PqP2BPP/1P2Q1K1/5R2 b - - 6 30',
    overview: "Posición real de una partida jugada en Lichess (rating 1772). Negras reposiciona el alfil hacia una diagonal clave, y cuando blancas ignora la amenaza, captura la torre con jaque.",
    moves: [
      { color: 'b', san: 'Bb5', explain: { idea: "El alfil negro se traslada a b5, apuntando hacia la diagonal donde está la torre blanca.", ventaja: "Amenaza real sobre la torre de f1.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Qe3', explain: { idea: "La dama blanca se reposiciona a e3, sin ocuparse de la amenaza real sobre la torre.", ventaja: "Ninguna real para blancas.", debilidad: "Deja la torre de f1 sin ninguna defensa adicional." } },
      { color: 'b', san: 'Bxf1+', explain: { idea: "El alfil negro captura la torre blanca de f1 dando jaque, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa con jaque incluido.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-SfSDP',
    name: 'Doble sacrificio en f2 que destruye la defensa del rey blanco',
    tema: 'Ataque al enroque con doble sacrificio',
    nivel: 6,
    rating: 2052,
    userColor: 'b',
    startFen: '5rk1/ppN3pp/2b1p3/2bpP3/2pNn2q/2P5/PP2BPP1/R2Q1RK1 b - - 1 20',
    overview: "Posición real de una partida jugada en Lichess (rating 2052). Negras entrega primero el caballo y luego, tras la recaptura, la dama entra con jaque capturando la torre que quedaba en f2.",
    moves: [
      { color: 'b', san: 'Nxf2', explain: { idea: "El caballo negro captura el peón de f2, ofreciéndose junto al rey blanco.", ventaja: "Empieza a destruir la estructura de peones que protege al rey blanco.", debilidad: "Entrega el caballo -- solo se justifica si lo que sigue compensa de sobra." } },
      { color: 'w', san: 'Rxf2', explain: { idea: "Única forma razonable de recapturar sin perder más material de inmediato.", ventaja: "Recupera el caballo entregado.", debilidad: "La torre blanca queda en f2, una casilla que la dama negra puede atacar directamente." } },
      { color: 'b', san: 'Qxf2+', explain: { idea: "La dama negra captura la torre de f2 dando jaque.", ventaja: "Gana una torre adicional y deja al rey blanco con la estructura de peones completamente destruida.", debilidad: "Ninguna real, cierra la combinación con ventaja decisiva para negras." } }
    ]
  },
  // ============================================================
  // PROBLEMAS DE AJEDREZ -- banco tactico Lichess, lote 12 (S6)
  // Ultimo lote del pool corto de 267 (1/3/5 semijugadas).
  // ============================================================
  {
    id: 'h04-problema-lichess-eGbBP',
    name: 'Cambio de torre por alfil con jaque que abre el ataque final',
    tema: 'Cambio de torre por alfil con jaque en cadena',
    nivel: 6,
    rating: 2076,
    userColor: 'b',
    startFen: '3r1bk1/p4pp1/1pr4p/3N4/5B2/1PP2P1q/P2Q1P2/3RR1K1 b - - 3 26',
    overview: "Posición real de una partida jugada en Lichess (rating 2076). Negras entra con jaque de torre, cambia por el alfil defensor, y remata con un nuevo jaque de alfil que mantiene la iniciativa del ataque.",
    moves: [
      { color: 'b', san: 'Rg6+', explain: { idea: "La torre negra entra en g6 dando jaque.", ventaja: "Jaque forzado, primer paso de la combinación.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Bg3', explain: { idea: "Única forma razonable de tapar el jaque: interponer el alfil.", ventaja: "Detiene el jaque momentáneamente.", debilidad: "El alfil interpuesto queda expuesto a la captura de la torre." } },
      { color: 'b', san: 'Rxg3+', explain: { idea: "La torre negra captura el alfil dando un segundo jaque.", ventaja: "Gana una pieza con jaque incluido.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'fxg3', explain: { idea: "Única recaptura razonable para blancas.", ventaja: "Recupera la torre a cambio del alfil.", debilidad: "La estructura de peones cerca del rey blanco queda debilitada." } },
      { color: 'b', san: 'Bc5+', explain: { idea: "El alfil negro entra en c5 dando jaque, manteniendo la iniciativa del ataque.", ventaja: "Jaque forzado que sigue la presión sobre el rey blanco.", debilidad: "Ninguna real -- cierra el fragmento con iniciativa decisiva para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Yc6l7',
    name: 'Sacrificio de caballo que gana un peón clave junto al rey',
    tema: 'Sacrificio de caballo con jaque',
    nivel: 6,
    rating: 2043,
    userColor: 'b',
    startFen: '1r1qr1k1/pPp2ppp/2B1b3/2b5/5n2/2NP2P1/1P3P1P/R1BQR1K1 b - - 0 16',
    overview: "Posición real de una partida jugada en Lichess (rating 2043). El caballo negro entra con jaque, y tras la respuesta forzada, captura un peón defensivo clave cerca del rey blanco.",
    moves: [
      { color: 'b', san: 'Nh3+', explain: { idea: "El caballo negro entra en h3 dando jaque, ofreciéndose voluntariamente.", ventaja: "Fuerza al rey a moverse a una casilla concreta.", debilidad: "Entrega el caballo -- solo se justifica por lo que viene después." } },
      { color: 'w', san: 'Kg2', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda cerca de la zona donde el caballo negro va a seguir atacando." } },
      { color: 'b', san: 'Nxf2', explain: { idea: "El caballo negro captura el peón de f2, que se había quedado sin ninguna defensa suficiente.", ventaja: "Gana un peón clave de la defensa del rey blanco, manteniendo la iniciativa.", debilidad: "Ninguna real, cierra el fragmento con posición favorable para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-bZhu9',
    name: 'El caballo se pasea capturando piezas hasta quedar atrapado',
    tema: 'Caballo que caza varias piezas antes de quedar atrapado',
    nivel: 6,
    rating: 1968,
    userColor: 'w',
    startFen: 'r4rk1/pp4pp/3bp3/3pq2n/3N1R2/2P1P2P/PPQ3P1/R1B3K1 w - - 6 19',
    overview: "Posición real de una partida jugada en Lichess (rating 1968). El caballo blanco se reposiciona y captura una torre y después una dama, aunque termina siendo capturado él mismo tras un último jaque negro.",
    moves: [
      { color: 'w', san: 'Nf3', explain: { idea: "El caballo blanco se reposiciona a f3, preparando el resto del plan.", ventaja: "Pieza mejor colocada para lo que viene.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Nxf4', explain: { idea: "El caballo negro captura la torre blanca de f4, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa.", debilidad: "El caballo negro queda ahora en una casilla expuesta." } },
      { color: 'w', san: 'Nxe5', explain: { idea: "El caballo blanco captura la dama negra de e5, que se había quedado sin ninguna defensa.", ventaja: "Recupera con creces el material perdido, ganando la pieza más valiosa del tablero.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Nxh3+', explain: { idea: "El caballo negro captura el peón de h3 dando jaque, el último recurso disponible.", ventaja: "Jaque forzado, gana un peón adicional.", debilidad: "El caballo negro queda ahora sin ninguna casilla de escape segura." } },
      { color: 'w', san: 'gxh3', explain: { idea: "El peón blanco captura el caballo negro, que se había quedado sin ninguna defensa.", ventaja: "Cierra la secuencia con ventaja material decisiva para blancas (dama por torre y peón).", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-9yqzf',
    name: 'Cadena de jaques de torre que despeja el camino a la coronación',
    tema: 'Jaques en cadena que despejan la coronación',
    nivel: 6,
    rating: 2005,
    userColor: 'b',
    startFen: '8/8/6pp/3kP3/5KP1/R6P/p1r5/8 b - - 0 52',
    overview: "Final de torres y peones real de una partida jugada en Lichess (rating 2005). Negras encadena jaques de torre que terminan forzando el cambio de torres, dejando el camino libre para coronar el propio peón.",
    moves: [
      { color: 'b', san: 'Rc4+', explain: { idea: "La torre negra entra en c4 dando jaque.", ventaja: "Jaque forzado, primer paso de la combinación.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kf3', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional." } },
      { color: 'b', san: 'Rc3+', explain: { idea: "La torre negra sigue con un segundo jaque desde c3, ofreciéndose al cambio.", ventaja: "Fuerza el cambio de torres en el momento que negras necesita.", debilidad: "Entrega la torre -- solo se justifica por lo que viene después." } },
      { color: 'w', san: 'Rxc3', explain: { idea: "Única forma razonable de responder al jaque: la torre blanca captura.", ventaja: "Recupera la torre entregada.", debilidad: "Sin torre en el tablero, ya no puede detener al peón negro que corona." } },
      { color: 'b', san: 'a1=Q', explain: { idea: "El peón negro corona en a1, convirtiéndose en una nueva dama sin que nadie pueda impedirlo.", ventaja: "Nueva dama sobre el tablero, decidiendo la partida.", debilidad: "Ninguna real -- cierra el fragmento con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-5cTjV',
    name: 'Cadena de jaques que despeja la primera fila para ganar la torre',
    tema: 'Despeje de la primera fila con jaques en cadena',
    nivel: 6,
    rating: 1763,
    userColor: 'b',
    startFen: '6k1/p5pp/4R3/3r3q/8/1P4P1/P4PQ1/5K2 b - - 0 33',
    overview: "Posición real de una partida jugada en Lichess (rating 1763). Negras encadena jaques de torre y dama que van desviando a las piezas blancas, terminando con la torre negra ganando la torre rival.",
    moves: [
      { color: 'b', san: 'Rd1+', explain: { idea: "La torre negra entra en d1 dando jaque.", ventaja: "Jaque forzado, primer paso de la combinación.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Re1', explain: { idea: "Única forma razonable de tapar el jaque: interponer la propia torre.", ventaja: "Detiene el jaque momentáneamente.", debilidad: "La torre interpuesta queda expuesta a nuevas amenazas." } },
      { color: 'b', san: 'Qb5+', explain: { idea: "La dama negra entra en b5 dando un segundo jaque.", ventaja: "Mantiene la presión sin dar tregua al rey blanco.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kg1', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por defender la torre interpuesta, que sigue expuesta." } },
      { color: 'b', san: 'Rxe1+', explain: { idea: "La torre negra captura la torre blanca de e1 dando jaque, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa con jaque incluido.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Oeluw',
    name: 'Sacrificio de alfil a la descubierta que gana la dama',
    tema: 'Sacrificio con jaque que gana la dama',
    nivel: 6,
    rating: 1851,
    userColor: 'b',
    startFen: '4r1k1/6pp/8/5R2/1P1qb2Q/3B4/2Pp2PP/3N3K b - - 0 28',
    overview: "Posición real de una partida jugada en Lichess (rating 1851). Negras entrega el alfil con jaque, y tras la recaptura obligada, la dama negra captura directamente la dama blanca suelta.",
    moves: [
      { color: 'b', san: 'Bxg2+', explain: { idea: "El alfil negro captura el peón de g2 dando jaque, ofreciéndose voluntariamente.", ventaja: "Fuerza la recaptura del rey, abriendo la posición.", debilidad: "Entrega el alfil -- solo se justifica por lo que viene después." } },
      { color: 'w', san: 'Kxg2', explain: { idea: "Única forma razonable de responder al jaque: el rey captura el alfil.", ventaja: "Recupera el alfil entregado.", debilidad: "El rey queda alejado de la defensa de la propia dama." } },
      { color: 'b', san: 'Qxh4', explain: { idea: "La dama negra captura la dama blanca de h4, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, cerrando la combinación con ventaja material decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-EWgT1',
    name: 'Cambio de damas con jaque seguido de un doble jaque de caballo',
    tema: 'Cambio de damas + doble jaque de caballo',
    nivel: 6,
    rating: 1981,
    userColor: 'b',
    startFen: 'r5k1/pQ1n1pp1/2p4p/3p4/8/2NB1q2/PP1KR2P/8 b - - 0 24',
    overview: "Posición real de una partida jugada en Lichess (rating 1981). Negras entrega la dama con jaque forzando el cambio, y el caballo encadena dos jaques que terminan ganando una segunda dama.",
    moves: [
      { color: 'b', san: 'Qxd3+', explain: { idea: "La dama negra captura el alfil blanco de d3 dando jaque, ofreciéndose al cambio.", ventaja: "Fuerza el cambio de damas en condiciones favorables.", debilidad: "Entrega la dama -- solo se justifica por lo que viene después." } },
      { color: 'w', san: 'Kxd3', explain: { idea: "Única forma de responder al jaque: el rey captura la dama.", ventaja: "Recupera la dama a cambio del alfil.", debilidad: "El rey queda expuesto en el centro del tablero." } },
      { color: 'b', san: 'Nc5+', explain: { idea: "El caballo negro entra en c5 dando jaque.", ventaja: "Jaque forzado que sigue empujando al rey.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kd4', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda todavía más expuesto, lejos de cualquier protección." } },
      { color: 'b', san: 'Nxb7', explain: { idea: "El caballo negro captura la dama blanca de b7, que se había quedado sin ninguna defensa.", ventaja: "Gana una segunda dama en la misma combinación, ventaja material decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-uY6il',
    name: 'Avance de peón que despeja la diagonal para un jaque de alfil',
    tema: 'Despeje de diagonal con avance de peón',
    nivel: 6,
    rating: 1893,
    userColor: 'w',
    startFen: '8/p7/4kpP1/1pn5/8/PPp1K3/8/3B4 w - - 3 40',
    overview: "Final de piezas menores real de una partida jugada en Lichess (rating 1893). Blancas avanza un peón para despejar la diagonal de su propio alfil, y tras la respuesta negra, entra con jaque.",
    moves: [
      { color: 'w', san: 'b4', explain: { idea: "El peón blanco avanza a b4, despejando la diagonal para el alfil.", ventaja: "Prepara el jaque de alfil de la jugada siguiente.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Nb7', explain: { idea: "El caballo negro se retira a b7, buscando la mejor defensa disponible.", ventaja: "Único intento razonable de resistencia.", debilidad: "No detiene realmente el plan blanco de fondo." } },
      { color: 'w', san: 'Bb3+', explain: { idea: "El alfil blanco entra en b3 dando jaque, aprovechando la diagonal recién despejada.", ventaja: "Jaque forzado que mantiene la iniciativa en el final.", debilidad: "Ninguna real -- cierra el fragmento con posición favorable para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-bRi7N',
    name: 'Avance de peones que despeja el camino a la coronación',
    tema: 'Avance de peones + coronación inminente',
    nivel: 6,
    rating: 1715,
    userColor: 'w',
    startFen: 'b7/5pp1/P6p/2k2PP1/7P/8/8/6K1 w - - 0 36',
    overview: "Final de peones y alfil real de una partida jugada en Lichess (rating 1715). Blancas sacrifica un peón para abrir la columna g y, tras la respuesta negra, su peón de la columna a llega a un solo paso de coronar.",
    moves: [
      { color: 'w', san: 'f6', explain: { idea: "El peón blanco avanza a f6, ofreciéndose a ser capturado.", ventaja: "Abre la columna g para el peón blanco que queda.", debilidad: "Entrega el peón -- solo se justifica por lo que viene después." } },
      { color: 'b', san: 'gxf6', explain: { idea: "Única captura razonable para negras.", ventaja: "Recupera el peón entregado.", debilidad: "Deja la columna g completamente abierta para el peón blanco restante." } },
      { color: 'w', san: 'gxh6', explain: { idea: "El peón blanco captura el peón de h6, avanzando con fuerza hacia la coronación.", ventaja: "Peón muy avanzado y peligroso.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Be4', explain: { idea: "Negras reposiciona el alfil a e4, buscando la mejor defensa posible.", ventaja: "Único intento razonable de frenar el avance.", debilidad: "No detiene el peón de la columna a, que sigue corriendo sin vigilancia." } },
      { color: 'w', san: 'a7', explain: { idea: "El peón blanco avanza a a7, a un solo paso de coronar.", ventaja: "Nada puede detenerlo ya -- corona en la jugada siguiente.", debilidad: "Ninguna real, decide la partida." } }
    ]
  },
  {
    id: 'h04-problema-lichess-lug4l',
    name: 'Cambio de damas que abre camino a ganar una torre',
    tema: 'Cambio de damas + jaque que gana una torre',
    nivel: 6,
    rating: 2139,
    userColor: 'w',
    startFen: 'r1k2b1r/pp1n2p1/4p2p/2p1NQ2/2q5/2N5/PP1P2PP/n1BKR3 w - - 0 20',
    overview: "Posición real de una partida jugada en Lichess (rating 2139). Blancas gana la dama negra suelta, cambia damas, y tras un jaque de torre, remata capturando la torre negra restante.",
    moves: [
      { color: 'w', san: 'Nxc4', explain: { idea: "El caballo blanco captura la dama negra de c4, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, la pieza más valiosa del tablero.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'exf5', explain: { idea: "El peón negro captura la dama blanca de f5, la única forma de recuperar algo de material.", ventaja: "Recupera la dama a cambio del caballo perdido.", debilidad: "Ninguna real adicional." } },
      { color: 'w', san: 'Re8+', explain: { idea: "La torre blanca entra en e8 dando jaque.", ventaja: "Jaque forzado que mantiene la iniciativa pese al cambio de damas.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kc7', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por defender la torre de a8, que sigue expuesta." } },
      { color: 'w', san: 'Rxa8', explain: { idea: "La torre blanca captura la torre negra de a8, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre adicional, ampliando la ventaja material ya decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-GTxTS',
    name: 'Mate en 2 con el rey empujado por el peón',
    tema: 'Mate en 2 con jaque de peón',
    nivel: 6,
    rating: 1798,
    userColor: 'w',
    startFen: '8/8/7R/3p1k2/p1bb4/PrP2K2/3B2PP/8 w - - 0 37',
    overview: "Posición real de una partida jugada en Lichess (rating 1798). Un jaque de peón obliga al rey negro a una única casilla, y el alfil remata con jaque mate.",
    moves: [
      { color: 'w', san: 'g4+', explain: { idea: "El peón blanco avanza a g4 dando jaque.", ventaja: "Jaque forzado que dirige al rey exactamente a la casilla que blancas necesita.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Ke5', explain: { idea: "Única casilla legal para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda sin ninguna casilla de escape para la jugada siguiente." } },
      { color: 'w', san: 'Bf4#', explain: { idea: "El alfil blanco entra en f4 dando jaque mate, apoyado por el resto de piezas blancas que ya cubrían las demás casillas de escape.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-3f7SR',
    name: 'Cadena de jaques que desvía al alfil y termina ganando una torre',
    tema: 'Desviación con jaques en cadena',
    nivel: 6,
    rating: 1772,
    userColor: 'b',
    startFen: 'R1r3k1/5ppp/8/4P3/3P4/1qr3P1/4BPQP/6K1 b - - 6 32',
    overview: "Posición real de una partida jugada en Lichess (rating 1772). Negras encadena jaques de torre que desvían al alfil de su función defensiva, terminando con la torre negra ganando la torre blanca restante.",
    moves: [
      { color: 'b', san: 'Rc1+', explain: { idea: "La torre negra entra en c1 dando jaque.", ventaja: "Jaque forzado, primer paso de la combinación.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Bf1', explain: { idea: "Única forma razonable de tapar el jaque: interponer el alfil.", ventaja: "Detiene el jaque momentáneamente.", debilidad: "El alfil interpuesto queda desviado de su función defensiva original." } },
      { color: 'b', san: 'Rxf1+', explain: { idea: "La torre negra captura el alfil dando un segundo jaque.", ventaja: "Gana una pieza con jaque incluido.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Qxf1', explain: { idea: "Única forma razonable de responder al jaque: la dama captura la torre.", ventaja: "Recupera la torre a cambio del alfil.", debilidad: "Ninguna real adicional." } },
      { color: 'b', san: 'Rxa8', explain: { idea: "La segunda torre negra captura la torre blanca de a8, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre adicional, cerrando la combinación con ventaja material decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-XHwPd',
    name: 'Jaque de alfil que abre paso a ganar la dama con la torre',
    tema: 'Jaque de alfil que gana la dama',
    nivel: 6,
    rating: 1758,
    userColor: 'b',
    startFen: '4r1rk/pp6/5p1p/2pPb3/2P1Qn1q/1P4N1/P1B3PP/4RRK1 b - - 1 29',
    overview: "Posición real de una partida jugada en Lichess (rating 1758). El alfil negro entra con jaque, y tras la respuesta forzada, la torre negra captura la dama blanca suelta.",
    moves: [
      { color: 'b', san: 'Bd4+', explain: { idea: "El alfil negro entra en d4 dando jaque.", ventaja: "Jaque forzado que dirige al rey a la casilla que negras necesita.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kh1', explain: { idea: "Única casilla legal para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por defender la dama, que sigue sin ninguna protección adicional." } },
      { color: 'b', san: 'Rxe4', explain: { idea: "La torre negra captura la dama blanca de e4, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, la pieza más valiosa del tablero.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-oAGN3',
    name: 'Mate en 1 con la dama apoyada por el alfil',
    tema: 'Mate en 1',
    nivel: 6,
    rating: 1804,
    userColor: 'w',
    startFen: 'r1bq2k1/ppp2rp1/3p1n1B/4p3/2BnP3/2bP2Q1/PPP2PPP/R4RK1 w - - 0 12',
    overview: "Posición real de una partida jugada en Lichess (rating 1804). La dama blanca ya está lista junto al rey negro: una sola jugada, apoyada por el alfil, resuelve la partida con jaque mate.",
    moves: [
      { color: 'w', san: 'Qxg7#', explain: { idea: "La dama blanca captura el peón de g7 dando jaque mate, apoyada por el alfil que ya cubre la diagonal: el rey negro no tiene ninguna casilla de escape.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-S5VMw',
    name: 'Jaque de caballo que abre paso a ganar la dama, con jaque final de vuelta',
    tema: 'Jaque de caballo que gana la dama',
    nivel: 6,
    rating: 1859,
    userColor: 'w',
    startFen: '8/4Rpk1/5np1/3p2Np/p2q3P/P7/1rQ1KPP1/8 w - - 0 31',
    overview: "Posición real de una partida jugada en Lichess (rating 1859). El caballo blanco entra con jaque, captura la dama negra suelta, y tras el jaque de vuelta negro, recupera el material con el propio caballo.",
    moves: [
      { color: 'w', san: 'Ne6+', explain: { idea: "El caballo blanco entra en e6 dando jaque.", ventaja: "Jaque forzado que dirige al rey a la casilla que blancas necesita.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kh6', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por defender la dama, que sigue sin ninguna protección adicional." } },
      { color: 'w', san: 'Nxd4', explain: { idea: "El caballo blanco captura la dama negra de d4, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, la pieza más valiosa del tablero.", debilidad: "Ninguna real inmediata." } },
      { color: 'b', san: 'Rxc2+', explain: { idea: "La torre negra captura la dama blanca de c2 dando jaque, el único intento razonable de recuperar algo de material.", ventaja: "Recupera parte del material perdido con jaque.", debilidad: "La torre queda en una casilla que el caballo blanco puede capturar directamente." } },
      { color: 'w', san: 'Nxc2', explain: { idea: "El caballo blanco captura la torre negra, que se había quedado sin ninguna defensa.", ventaja: "Recupera también la torre, cerrando la combinación con ventaja material decisiva (dama por dama y torre).", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  // ============================================================
  // PROBLEMAS DE AJEDREZ -- banco tactico Lichess, lote 13 (S6)
  // ============================================================
  {
    id: 'h04-problema-lichess-w8yN9',
    name: 'El rey se aproxima antes de que la torre entre con jaque',
    tema: 'Aproximación del rey en el final de torres',
    nivel: 6,
    rating: 2103,
    userColor: 'w',
    startFen: '1R6/5p2/1p2k2K/p1p2p2/P1P1p3/1P3b2/7P/8 w - - 0 41',
    overview: "Final de torres real de una partida jugada en Lichess (rating 2103). Ambos reyes se centralizan y blancas remata entrando con la torre para dar jaque, ganando actividad decisiva.",
    moves: [
      { color: 'w', san: 'Kg5', explain: { idea: "El rey blanco avanza a g5, centralizándose sin ninguna prisa.", ventaja: "Rey activo, preparando el resto del plan.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Ke5', explain: { idea: "El rey negro responde centralizándose también.", ventaja: "Intenta mantener el equilibrio en el final.", debilidad: "Ninguna real que evite lo que viene después." } },
      { color: 'w', san: 'Re8+', explain: { idea: "La torre blanca entra en e8 dando jaque, aprovechando la posición ya mejorada del rey.", ventaja: "Jaque forzado que gana actividad decisiva en el final.", debilidad: "Ninguna real -- cierra el fragmento con ventaja para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-EJTdg',
    name: 'Cadena de jaques que termina ganando un alfil',
    tema: 'Jaques en cadena que ganan una pieza',
    nivel: 6,
    rating: 1754,
    userColor: 'w',
    startFen: 'r3r3/2pk3p/pn4p1/2PP1p2/8/1P3NB1/6PP/b3R1K1 w - - 0 26',
    overview: "Posición real de una partida jugada en Lichess (rating 1754). Blancas encadena tres jaques consecutivos, el último de los cuales captura un alfil que se había quedado sin ninguna defensa.",
    moves: [
      { color: 'w', san: 'c6+', explain: { idea: "El peón blanco avanza a c6 dando jaque.", ventaja: "Jaque forzado, primer paso de la combinación.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kd8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional." } },
      { color: 'w', san: 'Bh4+', explain: { idea: "El alfil blanco entra en h4 dando un segundo jaque.", ventaja: "Mantiene la iniciativa sin dar tregua.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Bf6', explain: { idea: "Única forma razonable de tapar el jaque: interponer el propio alfil.", ventaja: "Detiene el jaque momentáneamente.", debilidad: "El alfil interpuesto queda sin ninguna defensa suficiente." } },
      { color: 'w', san: 'Bxf6+', explain: { idea: "El alfil blanco captura el alfil negro dando un tercer jaque, cerrando la combinación.", ventaja: "Gana una pieza completa con jaque incluido.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-RKdxT',
    name: 'Cambio de caballos que abre camino a un jaque de alfil',
    tema: 'Cambio de piezas + jaque de alfil',
    nivel: 6,
    rating: 1844,
    userColor: 'w',
    startFen: '1r2rk2/5p1p/b2b4/p2p4/P2BpnB1/2P5/4N1RP/3R3K w - - 0 30',
    overview: "Posición real de una partida jugada en Lichess (rating 1844). Tras cambiar los caballos, el alfil blanco entra con jaque, manteniendo la iniciativa en la posición.",
    moves: [
      { color: 'w', san: 'Nxf4', explain: { idea: "El caballo blanco captura el caballo negro de f4, la única captura disponible.", ventaja: "Elimina una pieza defensiva clave.", debilidad: "Ninguna real, es un cambio." } },
      { color: 'b', san: 'Bxf4', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera el caballo cambiado.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Bc5+', explain: { idea: "El alfil blanco entra en c5 dando jaque, aprovechando la posición tras el cambio.", ventaja: "Jaque forzado que mantiene la iniciativa.", debilidad: "Ninguna real -- cierra el fragmento con posición activa para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-qnqIR',
    name: 'El caballo se reposiciona y captura un peón suelto',
    tema: 'Reposicionamiento de caballo + ganancia de peón',
    nivel: 6,
    rating: 1879,
    userColor: 'b',
    startFen: '8/1k2n3/4p3/1K1pP2p/P2P1p1P/5P2/3B4/8 b - - 4 47',
    overview: "Final de caballos real de una partida jugada en Lichess (rating 1879). Negras reposiciona el caballo a una casilla activa y, tras la respuesta blanca, captura un peón sin ninguna defensa.",
    moves: [
      { color: 'b', san: 'Nf5', explain: { idea: "El caballo negro se traslada a f5, una casilla muy activa.", ventaja: "Pieza mucho mejor colocada, lista para capturar material.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kc5', explain: { idea: "El rey blanco avanza a c5, sin ocuparse de la amenaza real del caballo.", ventaja: "Ninguna real para blancas.", debilidad: "Deja el peón de h4 sin ninguna defensa adicional." } },
      { color: 'b', san: 'Nxh4', explain: { idea: "El caballo negro captura el peón de h4, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón limpio, ampliando la ventaja en el final.", debilidad: "Ninguna real -- cierra el fragmento con posición favorable para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-ao053',
    name: 'Cambio de torres que termina con la dama capturada',
    tema: 'Cambio de torres con captura de dama',
    nivel: 6,
    rating: 1948,
    userColor: 'b',
    startFen: 'r2r2k1/2q2ppp/8/R2Qp3/1pP5/1P5P/1P3PP1/R5K1 b - - 0 29',
    overview: "Posición real de una partida jugada en Lichess (rating 1948). Negras captura la dama blanca suelta con la torre, y tras el cambio de torres con jaque, reagrupa manteniendo la ventaja material.",
    moves: [
      { color: 'b', san: 'Rxd5', explain: { idea: "La torre negra captura la dama blanca de d5, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, la pieza más valiosa del tablero.", debilidad: "Ninguna real inmediata." } },
      { color: 'w', san: 'Rxa8+', explain: { idea: "La torre blanca captura la torre negra de a8 dando jaque, el único intento razonable de recuperar algo de material.", ventaja: "Recupera una torre con jaque.", debilidad: "No compensa ni de lejos la pérdida de la dama." } },
      { color: 'b', san: 'Rd8', explain: { idea: "La torre negra se reagrupa a d8, manteniendo la ventaja material ya decisiva.", ventaja: "Posición sólida con ventaja de dama por torre.", debilidad: "Ninguna real -- cierra el fragmento con ventaja para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-NlpNb',
    name: 'Cambio de dama por torre seguido de una coronación que se cambia por otra torre',
    tema: 'Cambio de dama por torre + coronación cambiada',
    nivel: 6,
    rating: 1751,
    userColor: 'w',
    startFen: '1r3rk1/1bp1q1pp/p1p3n1/2Pp2N1/8/P1QP2P1/1B1p2BP/4R1K1 w - - 0 23',
    overview: "Posición real de una partida jugada en Lichess (rating 1751). Blancas gana una dama suelta; negras corona un peón como torre con jaque, y tras una serie de cambios, blancas recupera la torre coronada.",
    moves: [
      { color: 'w', san: 'Rxe7', explain: { idea: "La torre blanca captura la dama negra de e7, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, la pieza más valiosa del tablero.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'd1=R+', explain: { idea: "El peón negro corona en d1 como torre, dando jaque, el único recurso real disponible tras la pérdida de la dama.", ventaja: "Recupera algo de material con una nueva torre.", debilidad: "La nueva torre no compensa la pérdida de la dama." } },
      { color: 'w', san: 'Re1', explain: { idea: "La torre blanca se interpone en e1, tapando el jaque de la forma más sencilla.", ventaja: "Detiene el jaque sin ceder nada más.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rxe1+', explain: { idea: "La torre negra recién coronada captura la torre blanca dando jaque, el único intento de complicar la posición.", ventaja: "Cambia las torres, simplificando la posición.", debilidad: "No recupera nada de la ventaja material ya perdida." } },
      { color: 'w', san: 'Qxe1', explain: { idea: "La dama blanca recaptura, cerrando la secuencia con la ventaja de la dama ganada al principio intacta.", ventaja: "Ventaja material decisiva (una dama completa), cierra el fragmento con posición ganadora.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-snQOT',
    name: 'Torre activa que entra con jaque y reposiciona la dama',
    tema: 'Torre activa + reposicionamiento de dama',
    nivel: 6,
    rating: 2184,
    userColor: 'b',
    startFen: '4r1k1/pp3p1p/1q4p1/1N6/Q7/1P3PP1/P5KP/R7 b - - 0 30',
    overview: "Posición real de una partida jugada en Lichess (rating 2184). Negras entra con jaque de torre, y tras la respuesta forzada, reposiciona la dama a una casilla clave para continuar el ataque.",
    moves: [
      { color: 'b', san: 'Re2+', explain: { idea: "La torre negra entra en e2 dando jaque.", ventaja: "Jaque forzado, gana actividad y tiempo.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kh3', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda todavía más expuesto tras el jaque." } },
      { color: 'b', san: 'Qf2', explain: { idea: "La dama negra se reposiciona a f2, coordinándose con la torre para seguir presionando al rey blanco.", ventaja: "Piezas negras muy activas, con la iniciativa completa del ataque.", debilidad: "Ninguna real -- cierra el fragmento con posición decisiva para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-gx7TC',
    name: 'Sacrificio de caballo que abre camino a ganar la dama',
    tema: 'Sacrificio posicional que gana la dama',
    nivel: 6,
    rating: 2007,
    userColor: 'b',
    startFen: '3r1rk1/p1q2ppp/1p1R1n2/2p2P2/P4QP1/1P5P/5PB1/3R2K1 b - - 2 27',
    overview: "Posición real de una partida jugada en Lichess (rating 2007). Negras permite que capturen su torre para, a cambio, ganar la dama blanca en la jugada siguiente.",
    moves: [
      { color: 'b', san: 'Ne8', explain: { idea: "El caballo negro se retira a e8, dejando aparentemente la torre sin ninguna protección extra.", ventaja: "Prepara la trampa de la combinación.", debilidad: "Cede la torre -- solo se justifica por lo que viene después." } },
      { color: 'w', san: 'Rxd8', explain: { idea: "La torre blanca captura la torre negra de d8, cayendo en la trampa preparada.", ventaja: "Gana una torre, en apariencia una buena ganancia material.", debilidad: "La dama blanca queda sin ninguna defensa suficiente frente a la dama negra." } },
      { color: 'b', san: 'Qxf4', explain: { idea: "La dama negra captura la dama blanca de f4, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, cerrando la combinación con ventaja material decisiva pese a la torre entregada.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Toq4p',
    name: 'Sacrificio de caballo que abre la posición para ganar un peón adicional',
    tema: 'Sacrificio de caballo que abre la posición',
    nivel: 6,
    rating: 2023,
    userColor: 'w',
    startFen: 'rn1q1rk1/1p3p2/p2bp1p1/3p2Np/3P2P1/2N4Q/PP3P1P/R3R1K1 w - - 1 17',
    overview: "Posición real de una partida jugada en Lichess (rating 2023). Blancas entrega el caballo capturando un peón, y tras la recaptura obligada, la torre remata ganando otro peón.",
    moves: [
      { color: 'w', san: 'Nxe6', explain: { idea: "El caballo blanco captura el peón de e6, ofreciéndose voluntariamente.", ventaja: "Empieza a abrir la posición del rey negro.", debilidad: "Entrega el caballo -- solo se justifica por lo que viene después." } },
      { color: 'b', san: 'fxe6', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera el caballo entregado.", debilidad: "El peón resultante en e6 se queda sin ninguna defensa adicional." } },
      { color: 'w', san: 'Rxe6', explain: { idea: "La torre blanca captura el peón de e6, que se había quedado sin ninguna defensa.", ventaja: "Recupera el material entregado con un peón adicional de ventaja.", debilidad: "Ninguna real, cierra el fragmento con posición favorable para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-pMvIj',
    name: 'Cambio de piezas en el centro que termina con la dama capturada',
    tema: 'Cambio de piezas con ganancia de dama',
    nivel: 6,
    rating: 1848,
    userColor: 'w',
    startFen: '8/6pk/4Qp2/pp1Rn1p1/8/1q2P2P/5PK1/8 w - - 0 36',
    overview: "Posición real de una partida jugada en Lichess (rating 1848). Blancas captura un caballo suelto y, tras la respuesta negra, la torre recaptura la dama que queda expuesta.",
    moves: [
      { color: 'w', san: 'Rxe5', explain: { idea: "La torre blanca captura el caballo negro de e5, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qxe6', explain: { idea: "La dama negra captura la torre blanca de e6, el único intento razonable de recuperar algo de material.", ventaja: "Recupera una torre a cambio.", debilidad: "La dama queda en una casilla que la segunda torre blanca puede capturar directamente." } },
      { color: 'w', san: 'Rxe6', explain: { idea: "La segunda torre blanca captura la dama negra, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, cerrando la combinación con ventaja material decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-VqyV5',
    name: 'Cambio de damas que termina con un jaque de alfil y recaptura',
    tema: 'Cambio de damas + jaque de alfil',
    nivel: 6,
    rating: 1860,
    userColor: 'b',
    startFen: 'r3k2r/1b1p1ppp/p1B1p3/1p2q1B1/1b6/2N5/PP2QPPP/2R2RK1 b kq - 0 15',
    overview: "Posición real de una partida jugada en Lichess (rating 1860). Negras captura la dama blanca suelta, y tras un jaque de alfil, el rey recaptura manteniendo el balance material a su favor.",
    moves: [
      { color: 'b', san: 'Qxe2', explain: { idea: "La dama negra captura la dama blanca de e2, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, la pieza más valiosa del tablero.", debilidad: "Ninguna real inmediata." } },
      { color: 'w', san: 'Bxd7+', explain: { idea: "El alfil blanco captura el peón de d7 dando jaque, el único intento razonable de recuperar algo de material.", ventaja: "Recupera un peón con jaque.", debilidad: "No compensa ni de lejos la pérdida de la dama." } },
      { color: 'b', san: 'Kxd7', explain: { idea: "El rey negro captura el alfil, que se había quedado sin ninguna defensa.", ventaja: "Recupera también el alfil, ampliando la ventaja material ya decisiva.", debilidad: "Ninguna real -- cierra el fragmento con posición ganadora para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-arCXy',
    name: 'Cambio de peones en un final de reyes muy ajustado',
    tema: 'Cambio de peones en el final de reyes',
    nivel: 6,
    rating: 2019,
    userColor: 'b',
    startFen: '2k5/2R2p2/4p1pp/pK6/P2P1P2/8/7P/8 b - - 0 38',
    overview: "Final de reyes y peones real de una partida jugada en Lichess (rating 2019). Ambos reyes capturan piezas y peones sueltos en una secuencia de cambios que define la estructura final.",
    moves: [
      { color: 'b', san: 'Kxc7', explain: { idea: "El rey negro captura la torre blanca de c7, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kxa5', explain: { idea: "El rey blanco captura a su vez el peón de a5.", ventaja: "Recupera algo de material.", debilidad: "No compensa ni de lejos la pérdida de la torre." } },
      { color: 'b', san: 'g5', explain: { idea: "Negras avanza el peón a g5, buscando fijar la estructura de peones a su favor.", ventaja: "Mejora la estructura de peones restante.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'fxg5', explain: { idea: "Blancas captura el peón de g5, la única forma razonable de responder.", ventaja: "Recupera el peón cambiado.", debilidad: "Ninguna real adicional." } },
      { color: 'b', san: 'hxg5', explain: { idea: "Negras recaptura con el propio peón, quedando con una estructura clara y la ventaja material ya decisiva.", ventaja: "Ventaja material y posicional clara en el final.", debilidad: "Ninguna real -- cierra el fragmento con posición ganadora para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-ci3RV',
    name: 'El caballo se reposiciona en dos tiempos y gana un peón',
    tema: 'Reposicionamiento de caballo en dos tiempos',
    nivel: 6,
    rating: 1938,
    userColor: 'b',
    startFen: '8/2k5/1p6/1K1n1p1p/1PB2PpP/6P1/8/8 b - - 2 64',
    overview: "Posición real de una partida jugada en Lichess (rating 1938). El caballo negro entra con jaque, se reposiciona en silencio, y termina capturando un peón sin ninguna defensa.",
    moves: [
      { color: 'b', san: 'Nc3+', explain: { idea: "El caballo negro entra en c3 dando jaque.", ventaja: "Jaque forzado, gana un tiempo.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Ka6', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional." } },
      { color: 'b', san: 'Ne4', explain: { idea: "El caballo negro se reposiciona a e4, una casilla mucho más activa.", ventaja: "Pieza mejor colocada, cerca de nuevos objetivos.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Bf7', explain: { idea: "Blancas reposiciona el alfil a f7, sin ocuparse de la amenaza real del caballo.", ventaja: "Ninguna real para blancas.", debilidad: "Deja el peón de g3 sin ninguna defensa adicional." } },
      { color: 'b', san: 'Nxg3', explain: { idea: "El caballo negro captura el peón de g3, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón limpio, ampliando la ventaja ya conseguida.", debilidad: "Ninguna real -- cierra el fragmento con posición favorable para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-fcK8O',
    name: 'Cambio de alfiles que abre camino a ganar un peón adicional',
    tema: 'Cambio de alfiles + ganancia de peón',
    nivel: 6,
    rating: 2065,
    userColor: 'b',
    startFen: '5rk1/p3R2p/2p5/3b2p1/2pb1p2/2B4P/PPP3P1/2K2R2 b - - 1 25',
    overview: "Posición real de una partida jugada en Lichess (rating 2065). Negras cambia los alfiles y, tras la recaptura obligada, el segundo alfil remata capturando un peón suelto.",
    moves: [
      { color: 'b', san: 'Bxc3', explain: { idea: "El alfil negro captura el alfil blanco de c3, la única captura disponible.", ventaja: "Elimina una pieza defensiva clave.", debilidad: "Ninguna real, es un cambio." } },
      { color: 'w', san: 'bxc3', explain: { idea: "Única recaptura razonable para blancas.", ventaja: "Recupera el alfil cambiado.", debilidad: "El peón de g2 se queda sin ninguna defensa adicional." } },
      { color: 'b', san: 'Bxg2', explain: { idea: "El segundo alfil negro captura el peón de g2, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón adicional tras el cambio, ampliando la ventaja.", debilidad: "Ninguna real, cierra el fragmento con posición favorable para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-q3FzM',
    name: 'Cambio de alfil que abre camino a ganar la dama',
    tema: 'Cambio de pieza + ganancia de dama',
    nivel: 6,
    rating: 1785,
    userColor: 'w',
    startFen: '1k2r1r1/p1p4p/1p2Q3/8/P7/R1bqB3/5PPP/2R3K1 w - - 11 23',
    overview: "Posición real de una partida jugada en Lichess (rating 1785). Blancas cambia un alfil suelto y, tras la respuesta negra, la torre captura la dama que queda expuesta.",
    moves: [
      { color: 'w', san: 'Raxc3', explain: { idea: "La torre blanca captura el alfil negro de c3, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rxe6', explain: { idea: "La torre negra captura la dama blanca de e6, el único intento razonable de recuperar algo de material.", ventaja: "Recupera una dama a cambio.", debilidad: "La torre queda en una casilla que la segunda torre blanca puede capturar directamente." } },
      { color: 'w', san: 'Rxd3', explain: { idea: "La segunda torre blanca captura la dama negra de d3, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, cerrando la combinación con ventaja material decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  // ============================================================
  // PROBLEMAS DE AJEDREZ -- banco tactico Lichess, lote 14 (S6)
  // ============================================================
  {
    id: 'h04-problema-lichess-BHqVE',
    name: 'Reposicionamiento de torre que gana un peón y consolida la posición',
    tema: 'Reposicionamiento de torre + ganancia de peón',
    nivel: 6,
    rating: 1967,
    userColor: 'w',
    startFen: '2r2rk1/5ppp/p1pbp3/8/Q3PPn1/B1Nq4/P2P2PP/R4RK1 w - - 3 18',
    overview: "Posición real de una partida jugada en Lichess (rating 1967). Blancas reposiciona la torre a una columna activa, y tras la respuesta negra, vuelve a colocarla en una casilla clave del centro.",
    moves: [
      { color: 'w', san: 'Rf3', explain: { idea: "La torre blanca se traslada a f3, buscando mayor actividad.", ventaja: "Pieza más flexible para el resto de la partida.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qxd2', explain: { idea: "La dama negra captura el peón de d2, el único recurso real disponible.", ventaja: "Gana un peón.", debilidad: "Ninguna real para negras en este movimiento concreto." } },
      { color: 'w', san: 'Rd1', explain: { idea: "La torre blanca se reagrupa a d1, presionando la columna central.", ventaja: "Torre bien colocada, lista para presionar sobre la dama negra.", debilidad: "Ninguna real -- cierra el fragmento con posición activa para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-dIl8U',
    name: 'Cambio de torre por dama que termina igualado con una nueva captura',
    tema: 'Cambio de torre por dama',
    nivel: 6,
    rating: 1887,
    userColor: 'b',
    startFen: '5rk1/p4qp1/2P1p3/1P6/P2Q2P1/5r2/5PK1/2R2R2 b - - 0 33',
    overview: "Posición real de una partida jugada en Lichess (rating 1887). Negras ofrece la torre a cambio de la dama; tras la captura, la propia dama negra recupera la pieza recién ganada.",
    moves: [
      { color: 'b', san: 'Rf4', explain: { idea: "La torre negra entra en f4, ofreciéndose al cambio con la dama blanca.", ventaja: "Fuerza una decisión concreta a blancas.", debilidad: "Entrega la torre -- solo se justifica si la recuperación compensa." } },
      { color: 'w', san: 'Qxf4', explain: { idea: "La dama blanca captura la torre, la respuesta más natural.", ventaja: "Gana una torre completa.", debilidad: "La dama blanca queda en una casilla que la dama negra puede recapturar directamente." } },
      { color: 'b', san: 'Qxf4', explain: { idea: "La dama negra captura la dama blanca, recuperando el material entregado.", ventaja: "Cambio de dama por torre y dama, quedando con el balance final equilibrado y una posición sólida.", debilidad: "Ninguna real -- cierra el fragmento con posición estable." } }
    ]
  },
  {
    id: 'h04-problema-lichess-2z8Y8',
    name: 'Sacrificio de torre que atrae al rey y persigue con jaques',
    tema: 'Atracción del rey con sacrificio de torre',
    nivel: 6,
    rating: 2118,
    userColor: 'b',
    startFen: '5rk1/p4qb1/2p3R1/1p1p4/3P4/P1P3Pp/1PQ2P1P/4R1K1 b - - 0 28',
    overview: "Posición real de una partida jugada en Lichess (rating 2118). Blancas entrega la torre con jaque para atraer al rey negro fuera de su refugio, y sigue la persecución con un nuevo jaque de torre.",
    moves: [
      { color: 'b', san: 'Qf3', explain: { idea: "La dama negra se reposiciona a f3, preparando defender antes de lo que se avecina.", ventaja: "Pieza activa, lista para ayudar en la defensa.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rxg7+', explain: { idea: "La torre blanca captura el alfil de g7 dando jaque, ofreciéndose voluntariamente.", ventaja: "Atrae al rey negro fuera de su refugio.", debilidad: "Entrega la torre -- solo se justifica por lo que viene después." } },
      { color: 'b', san: 'Kxg7', explain: { idea: "Única forma razonable de responder al jaque: el rey captura la torre.", ventaja: "Recupera la torre entregada.", debilidad: "El rey queda completamente expuesto en el flanco de rey." } },
      { color: 'w', san: 'Re7+', explain: { idea: "La segunda torre blanca entra en e7 dando jaque, continuando la persecución.", ventaja: "Jaque forzado que mantiene la iniciativa pese a la torre entregada.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kf6', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey sigue expuesto, sin ninguna pieza propia cerca que lo proteja." } }
    ]
  },
  {
    id: 'h04-problema-lichess-vmPpp',
    name: 'Cambio de caballos que abre camino a ganar un peón adicional',
    tema: 'Cambio de piezas + ganancia de peón',
    nivel: 6,
    rating: 2070,
    userColor: 'w',
    startFen: '7r/1p1rkppp/pn2p3/1P2P3/3n4/5N1P/B1R2PP1/1R4K1 w - - 0 24',
    overview: "Posición real de una partida jugada en Lichess (rating 2070). Blancas cambia los caballos y, tras la recaptura obligada, captura un peón que había quedado sin ninguna defensa.",
    moves: [
      { color: 'w', san: 'Nxd4', explain: { idea: "El caballo blanco captura el caballo negro de d4, la única captura disponible.", ventaja: "Elimina una pieza defensiva clave.", debilidad: "Ninguna real, es un cambio." } },
      { color: 'b', san: 'Rxd4', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera el caballo cambiado.", debilidad: "El peón de a6 se queda sin ninguna defensa adicional." } },
      { color: 'w', san: 'bxa6', explain: { idea: "El peón blanco captura el peón de a6, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón adicional tras el cambio, ampliando la ventaja.", debilidad: "Ninguna real, cierra el fragmento con posición favorable para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Sb112',
    name: 'Cambio de damas forzado por un jaque y una torre bien colocada',
    tema: 'Cambio de damas forzado con jaque',
    nivel: 6,
    rating: 1756,
    userColor: 'w',
    startFen: 'r6r/p2kq2p/3p2pb/3Qp3/4P3/2R2PP1/PPP4P/4K2R w K - 7 22',
    overview: "Posición real de una partida jugada en Lichess (rating 1756). Blancas entra con jaque de dama, reagrupa la torre, y el cambio de damas que sigue queda claramente a su favor.",
    moves: [
      { color: 'w', san: 'Qb7+', explain: { idea: "La dama blanca entra en b7 dando jaque.", ventaja: "Jaque forzado, gana un tiempo.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Ke6', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional." } },
      { color: 'w', san: 'Rc7', explain: { idea: "La torre blanca se reagrupa a c7, amenazando entrar en la posición negra.", ventaja: "Pieza muy activa, coordinada con la dama.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qxc7', explain: { idea: "La dama negra captura la torre, la única forma de evitar mayores complicaciones.", ventaja: "Elimina la amenaza directa de la torre.", debilidad: "La dama negra queda en una casilla que la dama blanca puede recapturar directamente." } },
      { color: 'w', san: 'Qxc7', explain: { idea: "La dama blanca recaptura, cerrando el cambio con posición sólida y equilibrada.", ventaja: "Cambio de damas y torres favorable, posición clara para blancas.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-1kn2J',
    name: 'Jaque de alfil que se reposiciona antes de ganar un peón con jaque',
    tema: 'Reposicionamiento de alfil con jaques en cadena',
    nivel: 6,
    rating: 2189,
    userColor: 'b',
    startFen: '8/R4Bbk/3p2p1/1p5p/5PPK/2r4P/P7/8 b - - 0 39',
    overview: "Posición real de una partida jugada en Lichess (rating 2189). Negras entra con jaque de alfil, se reposiciona en silencio, y remata capturando un peón con un segundo jaque.",
    moves: [
      { color: 'b', san: 'Bf6+', explain: { idea: "El alfil negro entra en f6 dando jaque.", ventaja: "Jaque forzado, gana un tiempo.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'g5', explain: { idea: "Blancas bloquea con el peón, la única forma razonable de tapar el jaque.", ventaja: "Detiene el jaque.", debilidad: "Crea una nueva debilidad en la estructura de peones." } },
      { color: 'b', san: 'Bd4', explain: { idea: "El alfil negro se reposiciona a d4, una casilla mucho más activa.", ventaja: "Pieza mejor colocada, apuntando a nuevos objetivos.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Bxg6+', explain: { idea: "El alfil blanco captura el peón de g6 dando jaque, el único intento razonable de contrajuego.", ventaja: "Jaque forzado, recupera un peón.", debilidad: "El alfil blanco queda expuesto a la recaptura del rey." } },
      { color: 'b', san: 'Kxg6', explain: { idea: "El rey negro captura el alfil, que se había quedado sin ninguna defensa.", ventaja: "Recupera la pieza entregada, quedando con posición favorable en el final.", debilidad: "Ninguna real -- cierra el fragmento con ventaja para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Dla90',
    name: 'Caballo que se infiltra y captura un peón suelto',
    tema: 'Infiltración de caballo que gana un peón',
    nivel: 6,
    rating: 2169,
    userColor: 'w',
    startFen: '3b4/1p2k3/2p2p2/1PP2Pp1/2K1N1P1/8/8/8 w - - 1 50',
    overview: "Final de piezas real de una partida jugada en Lichess (rating 2169). El caballo blanco se infiltra hasta una casilla muy fuerte y, tras la respuesta negra, captura un peón sin ninguna defensa.",
    moves: [
      { color: 'w', san: 'Nd6', explain: { idea: "El caballo blanco se traslada a d6, una casilla muy fuerte cerca de las piezas negras.", ventaja: "Pieza extremadamente activa, amenazando entrar todavía más.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Bc7', explain: { idea: "El alfil negro se retira a c7, buscando la mejor defensa disponible.", ventaja: "Único intento razonable de resistencia.", debilidad: "No detiene realmente el plan blanco de fondo." } },
      { color: 'w', san: 'Nxb7', explain: { idea: "El caballo blanco captura el peón de b7, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón limpio, manteniendo la iniciativa en el final.", debilidad: "Ninguna real -- cierra el fragmento con posición favorable para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-IR6vb',
    name: 'Doble jaque de caballo que termina ganando una torre',
    tema: 'Doble jaque de caballo que gana una torre',
    nivel: 6,
    rating: 1865,
    userColor: 'w',
    startFen: 'r4b1r/pp1k1ppp/2p2n2/3p4/N2P4/1b4P1/1P2PPBP/R1B2RK1 w - - 0 14',
    overview: "Posición real de una partida jugada en Lichess (rating 1865). El caballo blanco entra con jaque, y tras la respuesta forzada, captura la torre negra con un segundo jaque.",
    moves: [
      { color: 'w', san: 'Nb6+', explain: { idea: "El caballo blanco entra en b6 dando jaque.", ventaja: "Jaque forzado que dirige al rey a la casilla que blancas necesita.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kc7', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por defender la torre de a8, que sigue expuesta." } },
      { color: 'w', san: 'Nxa8+', explain: { idea: "El caballo blanco captura la torre negra de a8 dando un segundo jaque, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa con jaque incluido.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-NZFyG',
    name: 'Cadena de cambios que termina con un alfil ganando material',
    tema: 'Cadena de cambios en el centro',
    nivel: 6,
    rating: 2199,
    userColor: 'w',
    startFen: '2r2rk1/pb3ppp/1p2p3/4P3/3P3P/q1nQ1NP1/P4PB1/2R2RK1 w - - 3 21',
    overview: "Posición real de una partida jugada en Lichess (rating 2199). Blancas reposiciona el caballo, resiste un jaque, y tras una serie de cambios de torres, el alfil remata capturando una pieza suelta.",
    moves: [
      { color: 'w', san: 'Ng5', explain: { idea: "El caballo blanco se traslada a g5, preparando el resto del plan.", ventaja: "Pieza más activa para lo que viene.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Ne2+', explain: { idea: "El caballo negro entra en e2 dando jaque, el único intento razonable de contrajuego.", ventaja: "Jaque forzado, gana un tiempo.", debilidad: "Entrega el caballo -- solo se justifica si lo que sigue compensa." } },
      { color: 'w', san: 'Qxe2', explain: { idea: "Única forma razonable de responder al jaque: la dama captura el caballo.", ventaja: "Recupera el caballo entregado.", debilidad: "Ninguna real adicional." } },
      { color: 'b', san: 'Rxc1', explain: { idea: "La torre negra captura la torre blanca de c1, la única forma de recuperar algo de material.", ventaja: "Recupera una torre a cambio.", debilidad: "El alfil de b7 se queda sin ninguna defensa adicional." } },
      { color: 'w', san: 'Bxb7', explain: { idea: "El alfil blanco captura el alfil negro de b7, que se había quedado sin ninguna defensa.", ventaja: "Recupera material adicional, cerrando la secuencia con ventaja para blancas.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Y2g5d',
    name: 'Cambio de torre por peón seguido de la captura de la segunda torre',
    tema: 'Cambio de torre + ganancia de la segunda torre',
    nivel: 6,
    rating: 1973,
    userColor: 'w',
    startFen: '2r5/p6P/2p3k1/1n1p4/3P4/8/4NK2/2R5 w - - 1 45',
    overview: "Posición real de una partida jugada en Lichess (rating 1973). Blancas captura un peón con jaque, y tras la respuesta negra, la torre remata capturando la segunda torre rival.",
    moves: [
      { color: 'w', san: 'Rxc6+', explain: { idea: "La torre blanca captura el peón de c6 dando jaque.", ventaja: "Gana un peón con jaque.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kxh7', explain: { idea: "Única forma razonable de responder al jaque: el rey captura el peón.", ventaja: "Recupera el peón cambiado.", debilidad: "No hace nada por defender la torre de c8, que sigue expuesta." } },
      { color: 'w', san: 'Rxc8', explain: { idea: "La torre blanca captura la torre negra de c8, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa, ampliando la ventaja material a decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-806QR',
    name: 'Cambio de damas que abre camino a la coronación',
    tema: 'Cambio de damas + avance de peón pasado',
    nivel: 6,
    rating: 1965,
    userColor: 'w',
    startFen: '1q5r/Q4ppk/4p1p1/P7/8/3P1B1P/5PK1/8 w - - 1 33',
    overview: "Final de torres y peones real de una partida jugada en Lichess (rating 1965). Blancas cambia las damas y, con la posición simplificada, avanza su propio peón pasado hacia la coronación.",
    moves: [
      { color: 'w', san: 'Qxb8', explain: { idea: "La dama blanca captura la dama negra de b8, la única captura disponible.", ventaja: "Cambio de damas que simplifica la posición a favor de blancas.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rxb8', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera la dama cambiada.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'a6', explain: { idea: "El peón blanco avanza a a6, camino a la coronación sin ninguna dama en el tablero que lo detenga.", ventaja: "Peón pasado avanzando sin oposición real.", debilidad: "Ninguna real -- cierra el fragmento con posición favorable para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-kFmlM',
    name: 'Reposicionamiento de alfil que abre camino a capturar un caballo',
    tema: 'Reposicionamiento + ganancia de pieza',
    nivel: 6,
    rating: 1812,
    userColor: 'b',
    startFen: '2r5/pp3r1k/1bp2pNp/3p4/3P3P/2P3R1/PP4P1/R6K b - - 0 23',
    overview: "Posición real de una partida jugada en Lichess (rating 1812). Negras reposiciona el alfil, y tras la respuesta blanca, el rey captura un caballo que había quedado sin ninguna defensa.",
    moves: [
      { color: 'b', san: 'Bc7', explain: { idea: "El alfil negro se traslada a c7, mejorando su posición sin ninguna prisa.", ventaja: "Pieza mejor colocada para lo que viene.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Re3', explain: { idea: "La torre blanca se reagrupa a e3, sin ocuparse de la amenaza real que se avecina.", ventaja: "Ninguna real para blancas.", debilidad: "Deja el caballo de g6 sin ninguna defensa adicional." } },
      { color: 'b', san: 'Kxg6', explain: { idea: "El rey negro captura el caballo blanco de g6, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-2IHTI',
    name: 'Sacrificio de caballo que abre camino a ganar la calidad',
    tema: 'Sacrificio de caballo con jaque que gana la calidad',
    nivel: 6,
    rating: 1756,
    userColor: 'w',
    startFen: '5rk1/1ppq3r/p5p1/4p1B1/5n2/P1PP1N2/1P4PP/4QRK1 w - - 0 24',
    overview: "Posición real de una partida jugada en Lichess (rating 1756). Blancas gana un peón, resiste un sacrificio de caballo con jaque, y tras la recaptura, la dama remata ganando la calidad.",
    moves: [
      { color: 'w', san: 'Nxe5', explain: { idea: "El caballo blanco captura el peón de e5, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón limpio.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Nh3+', explain: { idea: "El caballo negro entra en h3 dando jaque, ofreciéndose voluntariamente.", ventaja: "Fuerza la recaptura, buscando algo de compensación.", debilidad: "Entrega el caballo -- solo se justifica si lo que sigue compensa de sobra." } },
      { color: 'w', san: 'gxh3', explain: { idea: "Única forma razonable de responder al jaque: capturar con el peón.", ventaja: "Recupera el caballo entregado.", debilidad: "La estructura de peones cerca del rey queda debilitada." } },
      { color: 'b', san: 'Rxf1+', explain: { idea: "La torre negra captura la torre blanca de f1 dando jaque, la única forma de continuar la complicación.", ventaja: "Gana una torre con jaque.", debilidad: "La torre queda en una casilla que la dama blanca puede recapturar directamente." } },
      { color: 'w', san: 'Qxf1', explain: { idea: "La dama blanca recaptura, cerrando la secuencia con ventaja material clara (la calidad ganada más el peón inicial).", ventaja: "Ventaja material decisiva, cierra el fragmento con posición ganadora.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-VlHj8',
    name: 'Cambio de caballo por alfil que termina con jaque de torre',
    tema: 'Cambio de piezas + jaque de torre',
    nivel: 6,
    rating: 1822,
    userColor: 'w',
    startFen: 'r2r2k1/ppp2qbp/2nn1pp1/2Q1p3/2b1P3/2N1BN1P/PP1RBPP1/3R2K1 w - - 0 19',
    overview: "Posición real de una partida jugada en Lichess (rating 1822). Blancas gana un caballo suelto; negras recupera algo de material capturando un alfil, y la torre remata con jaque.",
    moves: [
      { color: 'w', san: 'Rxd6', explain: { idea: "La torre blanca captura el caballo negro de d6, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Bxe2', explain: { idea: "El alfil negro captura el alfil blanco de e2, la única forma de recuperar algo de material.", ventaja: "Recupera un alfil a cambio.", debilidad: "No compensa del todo la pérdida del caballo." } },
      { color: 'w', san: 'Rxd8+', explain: { idea: "La torre blanca captura la torre negra de d8 dando jaque, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre adicional con jaque, ampliando la ventaja material ya decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-VEmNT',
    name: 'Avance de peón que fuerza una serie de cambios en el flanco de rey',
    tema: 'Avance de peón + cambio de piezas',
    nivel: 6,
    rating: 2059,
    userColor: 'b',
    startFen: 'r1b1k1nr/1pq1nppp/1b6/pP1pN3/P4B2/2P3P1/4PP1P/RN1QKB1R b KQkq - 2 10',
    overview: "Posición real de una partida jugada en Lichess (rating 2059). Negras avanza un peón buscando complicaciones; blancas responde capturando un peón, y negras recaptura ganando un alfil.",
    moves: [
      { color: 'b', san: 'g5', explain: { idea: "Negras avanza el peón a g5, buscando ganar espacio y crear complicaciones en el flanco de rey.", ventaja: "Gana espacio y presiona la posición blanca.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Nxf7', explain: { idea: "El caballo blanco captura el peón de f7, el único intento razonable de contrajuego.", ventaja: "Gana un peón.", debilidad: "No se ocupa de la amenaza real que sigue pendiente." } },
      { color: 'b', san: 'gxf4', explain: { idea: "Negras captura el alfil blanco de f4, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa, ampliando la ventaja pese al peón perdido.", debilidad: "Ninguna real -- cierra el fragmento con posición favorable para negras." } }
    ]
  },
  // ============================================================
  // PROBLEMAS DE AJEDREZ -- banco tactico Lichess, lote 15 (S6)
  // ============================================================
  {
    id: 'h04-problema-lichess-i7DFU',
    name: 'Dama y caballo se coordinan para amenazar el flanco de rey',
    tema: 'Coordinación de dama y caballo en el ataque',
    nivel: 6,
    rating: 1717,
    userColor: 'w',
    startFen: 'r2q1rk1/pb1nbp2/1p2p1p1/2ppP2Q/5B1P/P1P1PN2/1P3PP1/R3K2R w KQ - 0 15',
    overview: "Posición real de una partida jugada en Lichess (rating 1717). Blancas infiltra la dama cerca del rey negro y reagrupa el caballo para reforzar la amenaza sobre el enroque.",
    moves: [
      { color: 'w', san: 'Qh6', explain: { idea: "La dama blanca entra en h6, muy cerca del rey negro.", ventaja: "Pieza extremadamente activa, amenazando entrar todavía más.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Re8', explain: { idea: "Negras reagrupa la torre a e8, buscando la mejor defensa disponible.", ventaja: "Intenta reforzar la defensa.", debilidad: "No detiene realmente la amenaza que se avecina." } },
      { color: 'w', san: 'Ng5', explain: { idea: "El caballo blanco se traslada a g5, reforzando la amenaza directa sobre el rey negro.", ventaja: "Coordinación completa entre dama y caballo, con amenazas muy peligrosas sobre el enroque.", debilidad: "Ninguna real -- cierra el fragmento con posición decisiva para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-rmXcu',
    name: 'Jaque de dama que abre paso a capturar un peón con jaque',
    tema: 'Jaque de dama que gana un peón central',
    nivel: 6,
    rating: 1982,
    userColor: 'b',
    startFen: '1k4r1/pp6/2p3bQ/2P4P/1P1pP1q1/3P2N1/P6K/6R1 b - - 0 36',
    overview: "Posición real de una partida jugada en Lichess (rating 1982). Negras entra con jaque de dama, y tras la respuesta forzada, el alfil remata capturando un peón central con jaque.",
    moves: [
      { color: 'b', san: 'Qh4+', explain: { idea: "La dama negra entra en h4 dando jaque.", ventaja: "Jaque forzado que dirige al rey a la casilla que negras necesita.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kg2', explain: { idea: "Única casilla legal para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por defender el peón de e4, que sigue expuesto." } },
      { color: 'b', san: 'Bxe4+', explain: { idea: "El alfil negro captura el peón de e4 dando jaque, que se había quedado sin ninguna defensa suficiente.", ventaja: "Gana un peón con jaque incluido, manteniendo la iniciativa.", debilidad: "Ninguna real -- cierra el fragmento con posición favorable para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-fgo4X',
    name: 'Cambio de torre por dama que termina con el alfil ganando la calidad',
    tema: 'Cambio de torre por dama + ganancia de calidad',
    nivel: 6,
    rating: 1834,
    userColor: 'w',
    startFen: 'k1rr4/Bp2RQbp/1Pp2qp1/p2p3n/8/5P2/P1P3PP/1R5K w - - 2 28',
    overview: "Posición real de una partida jugada en Lichess (rating 1834). Blancas captura un peón suelto; negras recupera con la dama, y tras una serie de cambios, el alfil remata ganando la torre restante.",
    moves: [
      { color: 'w', san: 'Rxb7', explain: { idea: "La torre blanca captura el peón de b7, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón limpio.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qxf7', explain: { idea: "La dama negra captura la dama blanca de f7, la única forma de recuperar algo de material.", ventaja: "Recupera la dama a cambio.", debilidad: "La dama negra queda en una casilla que la torre blanca puede recapturar directamente." } },
      { color: 'w', san: 'Rxf7', explain: { idea: "La torre blanca recaptura, cerrando el cambio de damas con un peón de ventaja adicional.", ventaja: "Ventaja material clara tras el cambio.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rb8', explain: { idea: "Negras reagrupa la torre a b8, buscando la mejor defensa posible.", ventaja: "Único intento razonable de resistencia.", debilidad: "No detiene realmente el plan blanco de fondo." } },
      { color: 'w', san: 'Bxb8', explain: { idea: "El alfil blanco captura la torre negra, que se había quedado sin ninguna defensa.", ventaja: "Gana la calidad adicional, ampliando la ventaja ya conseguida a decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-ry5O8',
    name: 'Cambio de dama por caballo que termina en una serie de capturas en la última fila',
    tema: 'Serie de cambios en la última fila',
    nivel: 6,
    rating: 1785,
    userColor: 'b',
    startFen: 'r1bRqrk1/p1Q2ppp/np2p3/4P3/4B3/5N2/PPP2PPP/2K4R b - - 4 15',
    overview: "Posición real de una partida jugada en Lichess (rating 1785). Negras captura la dama blanca suelta con el caballo, y una cadena de cambios en la última fila termina con negras recuperando el balance material.",
    moves: [
      { color: 'b', san: 'Nxc7', explain: { idea: "El caballo negro captura la dama blanca de c7, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, la pieza más valiosa del tablero.", debilidad: "Ninguna real inmediata." } },
      { color: 'w', san: 'Rxe8', explain: { idea: "La torre blanca captura la torre negra de e8, el único intento razonable de recuperar algo de material.", ventaja: "Recupera una torre a cambio.", debilidad: "No compensa ni de lejos la pérdida de la dama." } },
      { color: 'b', san: 'Rxe8', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera la torre cambiada.", debilidad: "Ninguna real adicional." } },
      { color: 'w', san: 'Bxa8', explain: { idea: "El alfil blanco captura la torre negra de a8, buscando recuperar algo más de material.", ventaja: "Gana una torre adicional.", debilidad: "El alfil queda en una casilla que el caballo negro puede recapturar directamente." } },
      { color: 'b', san: 'Nxa8', explain: { idea: "El caballo negro captura el alfil, cerrando la secuencia con la dama ganada al principio como ventaja neta decisiva.", ventaja: "Ventaja material decisiva (una dama completa), cierra el fragmento con posición ganadora.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-awcmq',
    name: 'Cambio de caballos que abre camino a ganar un peón central',
    tema: 'Cambio de piezas + ganancia de peón central',
    nivel: 6,
    rating: 1802,
    userColor: 'w',
    startFen: 'r3r1k1/4bpp1/4bn1p/2p5/3q1N1B/1PpPQN2/p4PPP/K2R2R1 w - - 2 27',
    overview: "Posición real de una partida jugada en Lichess (rating 1802). Blancas cambia los caballos y, tras la recaptura obligada, la dama remata capturando el peón central que queda expuesto.",
    moves: [
      { color: 'w', san: 'Nxd4', explain: { idea: "El caballo blanco captura el peón de d4, la única captura disponible.", ventaja: "Gana un peón central.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'cxd4', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera el caballo cambiado.", debilidad: "El peón resultante en d4 se queda sin ninguna defensa adicional." } },
      { color: 'w', san: 'Qxd4', explain: { idea: "La dama blanca captura el peón de d4, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón adicional, ampliando la ventaja ya conseguida.", debilidad: "Ninguna real, cierra el fragmento con posición favorable para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Rt8cU',
    name: 'Cadena de jaques de dama y alfil que arrastran al rey',
    tema: 'Jaques en cadena de dama y alfil',
    nivel: 6,
    rating: 1873,
    userColor: 'w',
    startFen: 'r1bq2r1/pp1n1kpQ/4np2/3p1p2/5B2/2N3R1/PP4PP/R5K1 w - - 2 20',
    overview: "Posición real de una partida jugada en Lichess (rating 1873). Blancas encadena un jaque de dama y un jaque de alfil que van desplazando al rey negro fuera de cualquier refugio seguro.",
    moves: [
      { color: 'w', san: 'Qg6+', explain: { idea: "La dama blanca entra en g6 dando jaque.", ventaja: "Jaque forzado, primer paso de la combinación.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kf8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda en una casilla donde el alfil blanco puede seguir con la persecución." } },
      { color: 'w', san: 'Bd6+', explain: { idea: "El alfil blanco entra en d6 dando un segundo jaque, manteniendo la iniciativa del ataque.", ventaja: "Jaque forzado que sigue sin dar tregua al rey negro.", debilidad: "Ninguna real -- cierra el fragmento con posición decisiva para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-5rzFs',
    name: 'Ruptura central que desencadena una serie de cambios en la columna d',
    tema: 'Ruptura central con serie de cambios',
    nivel: 6,
    rating: 1925,
    userColor: 'b',
    startFen: '1k1r4/pp4p1/1q1rppNp/3n3P/3R4/P1P3P1/1P1Q1P2/K2R4 b - - 6 27',
    overview: "Posición real de una partida jugada en Lichess (rating 1925). Negras rompe el centro y una cadena de capturas en la columna d termina con negras recuperando toda la ventaja material.",
    moves: [
      { color: 'b', san: 'e5', explain: { idea: "Negras avanza el peón a e5, rompiendo la estructura central.", ventaja: "Abre líneas y crea amenazas directas sobre las piezas blancas.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rxd5', explain: { idea: "La torre blanca captura el caballo negro de d5, la única forma de responder a la ruptura.", ventaja: "Gana una pieza a cambio.", debilidad: "La torre queda en una casilla que negras puede recapturar directamente." } },
      { color: 'b', san: 'Rxd5', explain: { idea: "La torre negra recaptura en d5.", ventaja: "Recupera la torre cambiada.", debilidad: "Ninguna real adicional." } },
      { color: 'w', san: 'Qxd5', explain: { idea: "La dama blanca captura la torre negra de d5, la única forma de mantener algo de equilibrio.", ventaja: "Recupera una torre a cambio.", debilidad: "La dama queda en una casilla que la segunda torre negra puede recapturar directamente." } },
      { color: 'b', san: 'Rxd5', explain: { idea: "La segunda torre negra captura la dama blanca, cerrando la serie de cambios con ventaja material decisiva para negras.", ventaja: "Ventaja material decisiva (dama por torre y caballo), cierra el fragmento con posición ganadora.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-ANz2V',
    name: 'Sacrificio de alfil que abre paso a ganar un segundo alfil',
    tema: 'Sacrificio con jaque que gana una pieza',
    nivel: 6,
    rating: 1718,
    userColor: 'b',
    startFen: '4r1k1/2p2pp1/p1pbr3/5q1p/1P1P1P2/PQ2B1Pb/3N2NP/R4RK1 b - - 0 24',
    overview: "Posición real de una partida jugada en Lichess (rating 1718). Negras entrega el alfil capturando un caballo, y tras la recaptura obligada, la torre remata capturando el segundo alfil blanco.",
    moves: [
      { color: 'b', san: 'Bxg2', explain: { idea: "El alfil negro captura el caballo blanco de g2, ofreciéndose voluntariamente.", ventaja: "Gana una pieza y fuerza la recaptura del rey.", debilidad: "Entrega el alfil -- solo se justifica por lo que viene después." } },
      { color: 'w', san: 'Kxg2', explain: { idea: "Única forma razonable de responder: el rey captura el alfil.", ventaja: "Recupera el alfil entregado.", debilidad: "El rey queda alejado de la defensa del segundo alfil." } },
      { color: 'b', san: 'Rxe3', explain: { idea: "La torre negra captura el segundo alfil blanco de e3, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza adicional, quedando con ventaja material decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Ed0Wy',
    name: 'Avance de peones que empuja al rey y crea un peón muy peligroso',
    tema: 'Avance de peones con jaque en el final',
    nivel: 6,
    rating: 1832,
    userColor: 'w',
    startFen: '8/5k2/1bp1N3/1p2KPP1/pn6/8/8/8 w - - 0 47',
    overview: "Final de peones real de una partida jugada en Lichess (rating 1832). Blancas avanza dos peones consecutivos, el primero con jaque, creando una pareja de peones muy peligrosa cerca del rey negro.",
    moves: [
      { color: 'w', san: 'g6+', explain: { idea: "El peón blanco avanza a g6 dando jaque.", ventaja: "Jaque forzado que gana espacio en el flanco de rey.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Ke8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda alejado del centro, sin poder ayudar a detener los peones blancos." } },
      { color: 'w', san: 'f6', explain: { idea: "El peón blanco avanza también a f6, formando una pareja de peones muy peligrosa cerca del rey negro.", ventaja: "Peones conectados y avanzados, muy difíciles de contener sin la ayuda del rey.", debilidad: "Ninguna real -- cierra el fragmento con posición decisiva para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-3WP0l',
    name: 'Reposicionamiento de dama que abre camino a ganar la dama rival',
    tema: 'Reposicionamiento + ganancia de dama',
    nivel: 6,
    rating: 1767,
    userColor: 'w',
    startFen: 'r2qr1k1/1p1bBppp/p3p3/3p4/7R/1Pn2N2/1PP2PPP/3QR1K1 w - - 0 18',
    overview: "Posición real de una partida jugada en Lichess (rating 1767). Blancas reposiciona la dama sin ninguna amenaza directa; cuando negras responde sin ocuparse de la defensa, el alfil remata capturando la dama.",
    moves: [
      { color: 'w', san: 'Qd3', explain: { idea: "La dama blanca se reposiciona a d3, sin ninguna amenaza directa inmediata.", ventaja: "Prepara mejor coordinación con el resto de piezas.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Ne4', explain: { idea: "El caballo negro se traslada a e4, sin ocuparse de la defensa real de su propia dama.", ventaja: "Ninguna real para negras.", debilidad: "Deja la dama de d8 sin ninguna defensa suficiente." } },
      { color: 'w', san: 'Bxd8', explain: { idea: "El alfil blanco captura la dama negra de d8, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, la pieza más valiosa del tablero.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-CddQq',
    name: 'Cambio de torres seguido de un segundo jaque que gana la calidad',
    tema: 'Cambio de torres + jaque que gana la calidad',
    nivel: 6,
    rating: 1805,
    userColor: 'w',
    startFen: '2kr3r/pppq1pp1/5np1/3pb3/8/1P2PB2/PBPQ1PP1/R3K2R w KQ - 2 15',
    overview: "Posición real de una partida jugada en Lichess (rating 1805). Blancas cambia las torres; negras recupera con el alfil, y la segunda torre blanca remata con jaque ganando material adicional.",
    moves: [
      { color: 'w', san: 'Rxh8', explain: { idea: "La torre blanca captura la torre negra de h8, la única captura disponible.", ventaja: "Cambio favorable de torres.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Bxb2', explain: { idea: "El alfil negro captura el peón de b2, la única forma de recuperar algo de material.", ventaja: "Recupera un peón a cambio.", debilidad: "No hace nada por defender la torre de d8, que sigue expuesta." } },
      { color: 'w', san: 'Rxd8+', explain: { idea: "La segunda torre blanca captura la torre negra de d8 dando jaque, que se había quedado sin ninguna defensa.", ventaja: "Gana una segunda torre con jaque, ampliando la ventaja material a decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-MioiT',
    name: 'Reposicionamiento de dama que fuerza ganar un caballo',
    tema: 'Reposicionamiento de dama + ganancia de caballo',
    nivel: 6,
    rating: 1843,
    userColor: 'b',
    startFen: '8/6k1/2N3p1/3qprb1/2Q4p/1P4P1/P4P1P/5RK1 b - - 1 32',
    overview: "Posición real de una partida jugada en Lichess (rating 1843). Negras reposiciona la dama de forma tranquila; cuando blancas responde sin resolver la amenaza real, el peón captura el caballo suelto.",
    moves: [
      { color: 'b', san: 'Qf3', explain: { idea: "La dama negra se reposiciona a f3, sin ninguna amenaza directa inmediata.", ventaja: "Pieza muy activa, cerca de la posición blanca.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Nd4', explain: { idea: "El caballo blanco se traslada a d4, sin ocuparse de la amenaza real que pende sobre él.", ventaja: "Ninguna real para blancas.", debilidad: "Se ofrece como objetivo sin ninguna defensa adicional." } },
      { color: 'b', san: 'exd4', explain: { idea: "El peón negro captura el caballo blanco, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-d3BXx',
    name: 'Cambio de damas que abre camino a ganar un caballo',
    tema: 'Cambio de damas + ganancia de pieza',
    nivel: 6,
    rating: 2067,
    userColor: 'w',
    startFen: 'r4rk1/3N1pp1/p1b1p2p/1p6/1Q2P3/2bR4/PPP2PqP/1K1R4 w - - 0 23',
    overview: "Posición real de una partida jugada en Lichess (rating 2067). Blancas captura el alfil que defendía a la dama negra, gana el caballo tras la recaptura, y reagrupa la torre para consolidar la ventaja.",
    moves: [
      { color: 'w', san: 'Qxc3', explain: { idea: "La dama blanca captura el alfil negro de c3, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Bxd7', explain: { idea: "El alfil negro captura el caballo blanco de d7, la única forma de recuperar algo de material.", ventaja: "Recupera un caballo a cambio.", debilidad: "No compensa del todo la pérdida ya sufrida." } },
      { color: 'w', san: 'Rg3', explain: { idea: "La torre blanca se reagrupa a g3, consolidando la ventaja material ya conseguida.", ventaja: "Posición sólida con ventaja material clara.", debilidad: "Ninguna real -- cierra el fragmento con posición favorable para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-1VSzN',
    name: 'Cambio de damas con jaque que deja el mejor final de alfiles',
    tema: 'Cambio de damas con jaque',
    nivel: 6,
    rating: 2011,
    userColor: 'b',
    startFen: '1k4r1/1p2b3/p3N1rp/P2Qp3/R7/qP4P1/5P1P/5RK1 b - - 3 27',
    overview: "Posición real de una partida jugada en Lichess (rating 2011). Negras ofrece el cambio de damas; blancas acepta con jaque, y el alfil negro recaptura quedando con un final favorable.",
    moves: [
      { color: 'b', san: 'Qd6', explain: { idea: "La dama negra se reposiciona a d6, ofreciendo el cambio de damas.", ventaja: "Busca simplificar hacia un final favorable.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Qxd6+', explain: { idea: "La dama blanca captura la dama negra dando jaque, la respuesta más natural.", ventaja: "Acepta el cambio con jaque incluido.", debilidad: "La dama blanca queda en una casilla que el alfil negro puede recapturar directamente." } },
      { color: 'b', san: 'Bxd6', explain: { idea: "El alfil negro recaptura, cerrando el cambio de damas con un final de piezas menores favorable para negras.", ventaja: "Final ventajoso tras el cambio, con mejor estructura y actividad de piezas.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-WRQvm',
    name: 'Cambio de piezas en el flanco de rey que deja la dama muy activa',
    tema: 'Cambio de piezas + dama activa',
    nivel: 6,
    rating: 1978,
    userColor: 'b',
    startFen: 'r1bq1rk1/1ppn1pp1/p2b2nB/4p3/2B1P3/2N2N2/PPPQ1PPP/3R1RK1 b - - 0 12',
    overview: "Posición real de una partida jugada en Lichess (rating 1978). Negras cambia un alfil por un peón, blancas recaptura con la dama, y negras reposiciona la propia dama a una casilla muy activa.",
    moves: [
      { color: 'b', san: 'gxh6', explain: { idea: "Negras captura el alfil blanco de h6 con el propio peón, la única captura disponible.", ventaja: "Elimina una pieza activa blanca.", debilidad: "Ninguna real, es un cambio." } },
      { color: 'w', san: 'Qxh6', explain: { idea: "La dama blanca recaptura, la única forma razonable.", ventaja: "Recupera el material cambiado.", debilidad: "Ninguna real adicional." } },
      { color: 'b', san: 'Qf6', explain: { idea: "La dama negra se reposiciona a f6, muy activa y cerca de la posición blanca.", ventaja: "Pieza extremadamente activa, lista para seguir presionando.", debilidad: "Ninguna real -- cierra el fragmento con posición cómoda para negras." } }
    ]
  },
  // ============================================================
  // PROBLEMAS DE AJEDREZ -- banco tactico Lichess, lote 16 (S6)
  // ============================================================
  {
    id: 'h04-problema-lichess-JdRhh',
    name: 'Reposicionamiento de dama que gana una torre suelta',
    tema: 'Reposicionamiento + ganancia de torre',
    nivel: 6,
    rating: 2199,
    userColor: 'b',
    startFen: '1r1k1r2/4qpQ1/b1p1pN2/b2pP3/p2P3P/N4R2/1PP2PP1/2K4R b - - 0 21',
    overview: "Posición real de una partida jugada en Lichess (rating 2199). Negras reposiciona la dama; cuando blancas responde sin defender lo suficiente, captura la torre que queda expuesta y reagrupa la dama para consolidar la ventaja.",
    moves: [
      { color: 'b', san: 'Qb4', explain: { idea: "La dama negra se reposiciona a b4, presionando la posición blanca.", ventaja: "Pieza muy activa, amenazando entrar todavía más.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rb3', explain: { idea: "La torre blanca se traslada a b3, ofreciéndose aparentemente para defender.", ventaja: "Intenta tapar la amenaza.", debilidad: "Entrega la torre -- solo se justifica si compensa lo que sigue." } },
      { color: 'b', san: 'axb3', explain: { idea: "Negras captura la torre blanca, que se había quedado sin ninguna defensa suficiente.", ventaja: "Gana una torre completa.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'c3', explain: { idea: "Blancas avanza el peón a c3, el único intento razonable de crear contrajuego.", ventaja: "Busca algo de actividad tras la pérdida de material.", debilidad: "No recupera nada de lo ya perdido." } },
      { color: 'b', san: 'Qe7', explain: { idea: "La dama negra se reagrupa a e7, consolidando la ventaja material ya conseguida.", ventaja: "Posición sólida con ventaja de una torre completa.", debilidad: "Ninguna real -- cierra el fragmento con posición ganadora para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-FzMX4',
    name: 'Cambio de piezas en el centro que termina con blancas ganando un caballo',
    tema: 'Cambio de piezas en el centro',
    nivel: 6,
    rating: 2052,
    userColor: 'w',
    startFen: 'r1b1k2r/ppq2ppp/8/3p4/3nn3/1B2RP1P/PPP2bP1/RNBQ3K w kq - 5 16',
    overview: "Posición real de una partida jugada en Lichess (rating 2052). Blancas gana un caballo suelto; negras recupera la calidad, y tras el enroque, blancas remata capturando otro caballo.",
    moves: [
      { color: 'w', san: 'Qxd4', explain: { idea: "La dama blanca captura el caballo negro de d4, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Bxe3', explain: { idea: "El alfil negro captura la torre blanca de e3, la única forma de recuperar algo de material.", ventaja: "Recupera la calidad a cambio.", debilidad: "El alfil queda en una casilla que la dama blanca puede recapturar directamente." } },
      { color: 'w', san: 'Qxe3', explain: { idea: "La dama blanca recaptura, manteniendo la ventaja material ya conseguida.", ventaja: "Ventaja material clara tras el cambio.", debilidad: "Ninguna real adicional." } },
      { color: 'b', san: 'O-O', explain: { idea: "Negras enroca, poniendo al rey a salvo.", ventaja: "Rey seguro pese a la posición ya complicada.", debilidad: "No recupera nada del material ya perdido." } },
      { color: 'w', san: 'fxe4', explain: { idea: "El peón blanco captura el caballo negro de e4, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza adicional, ampliando la ventaja material a decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Z85FS',
    name: 'Cambio de torre por dama que termina con el alfil recuperando material',
    tema: 'Cambio de torre por dama',
    nivel: 6,
    rating: 2110,
    userColor: 'b',
    startFen: '3r1rk1/pp3p2/3Q1bpp/2p5/2P1P3/5N2/Pq2BPPP/1R3RK1 b - - 2 17',
    overview: "Posición real de una partida jugada en Lichess (rating 2110). Negras captura la dama blanca suelta con la torre; blancas recupera con su propia torre, y el alfil negro remata capturándola.",
    moves: [
      { color: 'b', san: 'Rxd6', explain: { idea: "La torre negra captura la dama blanca de d6, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, la pieza más valiosa del tablero.", debilidad: "Ninguna real inmediata." } },
      { color: 'w', san: 'Rxb2', explain: { idea: "La torre blanca captura la torre negra de b2, la única forma de recuperar algo de material.", ventaja: "Recupera una torre a cambio.", debilidad: "La torre blanca queda en una casilla que el alfil negro puede recapturar directamente." } },
      { color: 'b', san: 'Bxb2', explain: { idea: "El alfil negro captura la torre blanca, cerrando la secuencia con la dama ganada al principio como ventaja neta.", ventaja: "Ventaja material decisiva (una dama completa), cierra el fragmento con posición ganadora.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-jkLht',
    name: 'Cambio de damas que termina con blancas ganando un caballo con jaque',
    tema: 'Cambio de damas + ganancia de caballo',
    nivel: 6,
    rating: 1748,
    userColor: 'w',
    startFen: '7k/1p5p/3p4/1Qqnp3/4Pp2/8/PPK1B3/8 w - - 2 34',
    overview: "Posición real de una partida jugada en Lichess (rating 1748). Blancas captura una dama suelta, y tras un jaque de caballo negro, recupera también esa pieza sin ceder nada de la ventaja.",
    moves: [
      { color: 'w', san: 'Qxc5', explain: { idea: "La dama blanca captura la dama negra de c5, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, la pieza más valiosa del tablero.", debilidad: "Ninguna real inmediata." } },
      { color: 'b', san: 'Ne3+', explain: { idea: "El caballo negro entra en e3 dando jaque, el único intento razonable de complicar la posición.", ventaja: "Jaque forzado, gana un tiempo.", debilidad: "Entrega el caballo -- solo se justifica si consigue algo a cambio." } },
      { color: 'w', san: 'Qxe3', explain: { idea: "La dama blanca captura el caballo, que se había quedado sin ninguna defensa.", ventaja: "Recupera también el caballo, cerrando la combinación con ventaja material decisiva (una dama completa).", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Mrn4f',
    name: 'Serie de cambios de torres que termina con la dama recuperando el balance',
    tema: 'Serie de cambios de torres',
    nivel: 6,
    rating: 1848,
    userColor: 'w',
    startFen: '2rr4/Bp1q1k1p/3bp1p1/4Q3/1P4P1/5P2/7P/2RR3K w - - 0 33',
    overview: "Posición real de una partida jugada en Lichess (rating 1848). Una cadena de cuatro capturas en las columnas centrales termina con blancas recuperando el balance material con la dama.",
    moves: [
      { color: 'w', san: 'Rxc8', explain: { idea: "La torre blanca captura la torre negra de c8, la única captura disponible.", ventaja: "Cambio favorable de torres.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qxc8', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera la torre cambiada.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rxd6', explain: { idea: "La segunda torre blanca captura el alfil negro de d6, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza adicional.", debilidad: "La torre queda en una casilla que la torre negra restante puede recapturar directamente." } },
      { color: 'b', san: 'Rxd6', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera la torre cambiada.", debilidad: "La torre negra queda en una casilla que la dama blanca puede capturar directamente." } },
      { color: 'w', san: 'Qxd6', explain: { idea: "La dama blanca captura la torre negra, cerrando la secuencia con ventaja material clara (el alfil ganado en el intercambio general).", ventaja: "Ventaja material decisiva, cierra el fragmento con posición ganadora.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-GTV5f',
    name: 'Cambio de caballo por alfil que termina con la dama ganando otro alfil',
    tema: 'Cambio de piezas + ganancia de alfil',
    nivel: 6,
    rating: 1920,
    userColor: 'w',
    startFen: 'r5k1/pp1bq1r1/6nQ/3p4/3P4/3B2P1/PPP5/2K4R w - - 0 24',
    overview: "Posición real de una partida jugada en Lichess (rating 1920). Blancas cambia un caballo por un alfil suelto; negras reposiciona el propio alfil, y la dama remata capturándolo.",
    moves: [
      { color: 'w', san: 'Bxg6', explain: { idea: "El alfil blanco captura el caballo negro de g6, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Bh3', explain: { idea: "El alfil negro se reposiciona a h3, buscando algo de contrajuego.", ventaja: "Pieza activa, cerca del rey blanco.", debilidad: "Se ofrece sin ninguna defensa adicional." } },
      { color: 'w', san: 'Qxh3', explain: { idea: "La dama blanca captura el alfil negro, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza adicional, ampliando la ventaja material a decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-6xyB1',
    name: 'Reposicionamiento de dama que termina en jaque decisivo',
    tema: 'Reposicionamiento de dama + jaque decisivo',
    nivel: 6,
    rating: 1832,
    userColor: 'w',
    startFen: 'r7/3bkpp1/p3p3/2bpP3/1p5r/8/4BPP1/1Q1R2K1 w - - 0 25',
    overview: "Posición real de una partida jugada en Lichess (rating 1832). Blancas reposiciona la dama con tranquilidad, y tras la respuesta negra, entra con jaque manteniendo toda la iniciativa.",
    moves: [
      { color: 'w', san: 'Qc1', explain: { idea: "La dama blanca se reposiciona a c1, sin ninguna amenaza directa inmediata.", ventaja: "Prepara mejor coordinación para el resto de la partida.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rc8', explain: { idea: "Negras reagrupa la torre a c8, buscando la mejor defensa disponible.", ventaja: "Intenta reforzar la posición.", debilidad: "No detiene realmente el plan blanco de fondo." } },
      { color: 'w', san: 'Qg5+', explain: { idea: "La dama blanca entra en g5 dando jaque, manteniendo toda la iniciativa del ataque.", ventaja: "Jaque forzado que sigue la presión sobre el rey negro.", debilidad: "Ninguna real -- cierra el fragmento con posición decisiva para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-c925e',
    name: 'Cambio de peón por caballo que abre paso a un jaque de caballo',
    tema: 'Cambio de piezas + jaque de caballo',
    nivel: 6,
    rating: 1742,
    userColor: 'w',
    startFen: 'r5k1/1b1n2pp/1pn2p2/1P1N4/8/3BP3/5PPP/3R2K1 w - - 1 27',
    overview: "Posición real de una partida jugada en Lichess (rating 1742). Blancas cambia un caballo suelto, negras recaptura con el alfil, y el caballo blanco remata con jaque.",
    moves: [
      { color: 'w', san: 'bxc6', explain: { idea: "El peón blanco captura el caballo negro de c6, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Bxc6', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera parte del material perdido.", debilidad: "Ninguna real adicional." } },
      { color: 'w', san: 'Ne7+', explain: { idea: "El caballo blanco entra en e7 dando jaque, manteniendo la iniciativa pese al cambio.", ventaja: "Jaque forzado que mantiene la ventaja material ya conseguida.", debilidad: "Ninguna real -- cierra el fragmento con posición favorable para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-6A9wq',
    name: 'Jaque de dama que abre paso a ganar un caballo suelto',
    tema: 'Jaque de dama + ganancia de caballo',
    nivel: 6,
    rating: 1895,
    userColor: 'w',
    startFen: 'rnbq1k1r/ppp1b2p/6p1/3B3Q/4n3/8/PPPP1PPP/RNB1K2R w KQ - 0 9',
    overview: "Posición real de una partida jugada en Lichess (rating 1895), en fase de apertura. Blancas entra con jaque de dama, y tras la respuesta forzada, el alfil remata capturando un caballo suelto.",
    moves: [
      { color: 'w', san: 'Qh6+', explain: { idea: "La dama blanca entra en h6 dando jaque.", ventaja: "Jaque forzado que dirige al rey a la casilla que blancas necesita.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Ke8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por defender el caballo de e4, que sigue expuesto." } },
      { color: 'w', san: 'Bxe4', explain: { idea: "El alfil blanco captura el caballo negro de e4, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-BGuoW',
    name: 'Reposicionamiento de dama que termina en un cambio favorable',
    tema: 'Reposicionamiento de dama + cambio favorable',
    nivel: 6,
    rating: 2102,
    userColor: 'b',
    startFen: 'r3r1k1/4ppb1/p1Nq2p1/B2P3p/2P2nn1/P2B2N1/5P2/1R1Q1R1K b - - 5 25',
    overview: "Posición real de una partida jugada en Lichess (rating 2102). Negras reposiciona la dama; blancas captura un caballo suelto, y el peón negro recaptura la dama que queda expuesta.",
    moves: [
      { color: 'b', san: 'Qf6', explain: { idea: "La dama negra se reposiciona a f6, presionando la posición blanca.", ventaja: "Pieza muy activa.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Qxg4', explain: { idea: "La dama blanca captura el caballo negro de g4, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "La dama blanca queda en una casilla que el peón negro puede recapturar directamente." } },
      { color: 'b', san: 'hxg4', explain: { idea: "El peón negro captura la dama blanca, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, cerrando la combinación con ventaja material decisiva pese al caballo perdido.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-S7Lg8',
    name: 'Sacrificio de torre que atrae a la dama a una casilla vulnerable',
    tema: 'Sacrificio de torre que gana la dama',
    nivel: 6,
    rating: 2173,
    userColor: 'b',
    startFen: 'r4rk1/1p4p1/p3p1Qp/2Pp4/BP1P1p1P/6Pq/4RP2/5RK1 b - - 2 28',
    overview: "Posición real de una partida jugada en Lichess (rating 2173). Negras entrega la torre para atraer a la dama blanca a una casilla concreta, y el peón remata capturándola.",
    moves: [
      { color: 'b', san: 'Rf6', explain: { idea: "La torre negra se traslada a f6, ofreciéndose voluntariamente a la dama blanca.", ventaja: "Atrae a la dama blanca a la casilla exacta que negras necesita.", debilidad: "Entrega la torre -- solo se justifica por lo que viene después." } },
      { color: 'w', san: 'Qxf6', explain: { idea: "La dama blanca captura la torre, la respuesta más natural.", ventaja: "Gana una torre completa.", debilidad: "La dama blanca queda en una casilla que el peón negro puede recapturar directamente." } },
      { color: 'b', san: 'gxf6', explain: { idea: "El peón negro captura la dama blanca, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, cerrando la combinación con ventaja material decisiva pese a la torre entregada.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Dew8R',
    name: 'Sacrificio de torre que abre paso a ganar la dama',
    tema: 'Sacrificio de torre con jaque que gana la dama',
    nivel: 6,
    rating: 1706,
    userColor: 'b',
    startFen: '1k3rr1/1pp5/1Q6/5p2/3Pq3/1PP3B1/2P2R1P/R5K1 b - - 0 28',
    overview: "Posición real de una partida jugada en Lichess (rating 1706). Negras entrega la torre con jaque capturando un alfil, y tras la recaptura obligada, el peón remata capturando la dama blanca.",
    moves: [
      { color: 'b', san: 'Rxg3+', explain: { idea: "La torre negra captura el alfil blanco de g3 dando jaque, ofreciéndose voluntariamente.", ventaja: "Gana una pieza y fuerza la recaptura del rey.", debilidad: "Entrega la torre -- solo se justifica por lo que viene después." } },
      { color: 'w', san: 'hxg3', explain: { idea: "Única forma razonable de responder al jaque: el peón captura la torre.", ventaja: "Recupera la torre entregada.", debilidad: "La dama blanca queda sin ninguna defensa suficiente frente al peón negro." } },
      { color: 'b', san: 'cxb6', explain: { idea: "El peón negro captura la dama blanca, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, cerrando la combinación con ventaja material decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-mYL6V',
    name: 'Cadena de jaques de dama que persigue al rey negro',
    tema: 'Jaques en cadena de dama',
    nivel: 6,
    rating: 1812,
    userColor: 'w',
    startFen: '6k1/p1Q2p1p/bp2p1p1/4P3/3PNb2/3q1P2/P4BP1/6K1 w - - 2 30',
    overview: "Posición real de una partida jugada en Lichess (rating 1812). La dama blanca encadena dos jaques consecutivos que van desplazando al rey negro sin ninguna posibilidad real de escape seguro.",
    moves: [
      { color: 'w', san: 'Qd8+', explain: { idea: "La dama blanca entra en d8 dando jaque.", ventaja: "Jaque forzado, primer paso de la combinación.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kg7', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda en una casilla donde la dama blanca puede seguir con la persecución." } },
      { color: 'w', san: 'Qf6+', explain: { idea: "La dama blanca sigue con un segundo jaque desde f6, sin dar ningún respiro al rey negro.", ventaja: "Jaque forzado que mantiene la iniciativa completa del ataque.", debilidad: "Ninguna real -- cierra el fragmento con posición decisiva para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-U4Tl4',
    name: 'Cambio de alfiles que abre camino a ganar un segundo alfil',
    tema: 'Cambio de alfiles + ganancia de pieza',
    nivel: 6,
    rating: 2169,
    userColor: 'w',
    startFen: '1rr3k1/1b3p2/p2pp1p1/2p1b1B1/4P2Q/2N5/PqPN2P1/5RK1 w - - 0 27',
    overview: "Posición real de una partida jugada en Lichess (rating 2169). Blancas reposiciona el alfil ofreciendo el cambio; negras acepta, y la dama remata capturando el alfil que queda expuesto.",
    moves: [
      { color: 'w', san: 'Bf6', explain: { idea: "El alfil blanco se traslada a f6, ofreciéndose al cambio con el alfil negro.", ventaja: "Fuerza una decisión concreta a negras.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Bxf6', explain: { idea: "El alfil negro captura, la respuesta más natural.", ventaja: "Gana un alfil a cambio.", debilidad: "El alfil negro queda en una casilla que la dama blanca puede recapturar directamente." } },
      { color: 'w', san: 'Qxf6', explain: { idea: "La dama blanca recaptura, que se había quedado sin ninguna defensa suficiente para negras.", ventaja: "Recupera la pieza cambiada con ventaja adicional, quedando con posición favorable.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-TKtKw',
    name: 'Reposicionamiento de dama que gana un peón con jaque',
    tema: 'Reposicionamiento de dama + jaque que gana un peón',
    nivel: 6,
    rating: 1952,
    userColor: 'w',
    startFen: 'r3k2r/1p3pp1/2bBp1p1/p2pP3/6Q1/P1q5/2P2PPP/R2R2K1 w kq - 2 19',
    overview: "Posición real de una partida jugada en Lichess (rating 1952). Blancas reposiciona la dama cerca del rey negro, y tras la respuesta negra, captura un peón con jaque.",
    moves: [
      { color: 'w', san: 'Qg5', explain: { idea: "La dama blanca se traslada a g5, muy cerca del rey negro.", ventaja: "Pieza extremadamente activa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'f6', explain: { idea: "Negras avanza el peón a f6, buscando alejar a la dama blanca.", ventaja: "Intenta ganar espacio y expulsar a la dama.", debilidad: "No defiende el peón de g6, que queda expuesto." } },
      { color: 'w', san: 'Qxg6+', explain: { idea: "La dama blanca captura el peón de g6 dando jaque, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón con jaque, manteniendo la iniciativa.", debilidad: "Ninguna real -- cierra el fragmento con posición decisiva para blancas." } }
    ]
  },
  // ============================================================
  // PROBLEMAS DE AJEDREZ -- banco tactico Lichess, lote 17 (S6)
  // ============================================================
  {
    id: 'h04-problema-lichess-uEujm',
    name: 'Cambio de piezas menores seguido de un reagrupamiento de torres',
    tema: 'Cambio de piezas + reagrupamiento de torre',
    nivel: 6,
    rating: 2097,
    userColor: 'w',
    startFen: 'r3kb1r/1p1b1ppp/p3p1n1/3p4/3q1B2/2NB2Q1/PP3PPP/R3R1K1 w kq - 8 16',
    overview: "Posición real de una partida jugada en Lichess (rating 2097). Blancas cambia un alfil por un caballo, y tras la recaptura obligada, reagrupa la torre a una columna central.",
    moves: [
      { color: 'w', san: 'Bxg6', explain: { idea: "El alfil blanco captura el caballo negro de g6, la única captura disponible.", ventaja: "Elimina una pieza defensiva clave.", debilidad: "Ninguna real, es un cambio." } },
      { color: 'b', san: 'hxg6', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera el alfil cambiado.", debilidad: "La estructura de peones del enroque negro queda algo debilitada." } },
      { color: 'w', san: 'Rad1', explain: { idea: "La torre blanca se reagrupa a d1, ocupando la columna central abierta.", ventaja: "Torre mucho más activa, lista para presionar el resto de la partida.", debilidad: "Ninguna real -- cierra el fragmento con posición cómoda para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-zAPDq',
    name: 'Jaque de torre seguido de un cambio de damas y una captura de torre',
    tema: 'Jaque + cambio de damas + ganancia de torre',
    nivel: 6,
    rating: 2154,
    userColor: 'w',
    startFen: '3rk3/pB3p1p/2N2bpQ/6q1/3r4/8/P5PP/5RK1 w - - 2 32',
    overview: "Posición real de una partida jugada en Lichess (rating 2154). Blancas entra con jaque de torre, cambia las damas, y el caballo remata capturando una torre suelta.",
    moves: [
      { color: 'w', san: 'Re1+', explain: { idea: "La torre blanca entra en e1 dando jaque.", ventaja: "Jaque forzado, gana un tiempo.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kd7', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda alejado de la defensa del resto del tablero." } },
      { color: 'w', san: 'Qxg5', explain: { idea: "La dama blanca captura la dama negra de g5, la única forma de justificarlo si negras recaptura con el alfil.", ventaja: "Cambio de damas en condiciones favorables.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Bxg5', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera la dama cambiada.", debilidad: "La torre de d4 se queda sin ninguna defensa adicional." } },
      { color: 'w', san: 'Nxd4', explain: { idea: "El caballo blanco captura la torre negra de d4, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa, ampliando la ventaja material a decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-y73F9',
    name: 'Torre activa que persigue al rey con jaques encadenados',
    tema: 'Torre activa acosando al rey',
    nivel: 6,
    rating: 2130,
    userColor: 'b',
    startFen: '3r2k1/R4pp1/p4q1p/1p6/7P/PQ4P1/1P3P2/6K1 b - - 0 29',
    overview: "Posición real de una partida jugada en Lichess (rating 2130). La torre negra se reposiciona, y tras la respuesta blanca, entra con jaque encadenando la iniciativa con un jaque de dama.",
    moves: [
      { color: 'b', san: 'Rd2', explain: { idea: "La torre negra se traslada a d2, presionando la segunda fila blanca.", ventaja: "Torre muy activa, cerca del rey blanco.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Qe3', explain: { idea: "La dama blanca se reposiciona a e3, buscando defender con más solidez.", ventaja: "Intenta reforzar la posición.", debilidad: "No detiene realmente la presión de la torre negra." } },
      { color: 'b', san: 'Rd1+', explain: { idea: "La torre negra entra en d1 dando jaque.", ventaja: "Jaque forzado que mantiene la iniciativa.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kg2', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda todavía más expuesto tras el jaque." } },
      { color: 'b', san: 'Qc6+', explain: { idea: "La dama negra entra en c6 dando un segundo jaque, manteniendo toda la iniciativa del ataque.", ventaja: "Jaque forzado que sigue sin dar tregua al rey blanco.", debilidad: "Ninguna real -- cierra el fragmento con posición decisiva para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-fR9JR',
    name: 'Reposicionamiento de torre que termina en un cambio de damas',
    tema: 'Reposicionamiento de torre + cambio de damas',
    nivel: 6,
    rating: 1746,
    userColor: 'w',
    startFen: '3r4/2p2b1p/5kp1/2B1qp2/1Q6/3P3P/6P1/5RK1 w - - 3 35',
    overview: "Posición real de una partida jugada en Lichess (rating 1746). Blancas reposiciona la torre; negras cambia las damas con jaque, y blancas recaptura manteniendo una posición sólida.",
    moves: [
      { color: 'w', san: 'Re1', explain: { idea: "La torre blanca se traslada a e1, ocupando la columna central.", ventaja: "Torre bien colocada, presionando el centro.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qxe1+', explain: { idea: "La dama negra captura la torre dando jaque, la única forma de evitar mayores complicaciones.", ventaja: "Cambia la torre por la dama, simplificando la posición.", debilidad: "Ninguna real para negras en este movimiento concreto." } },
      { color: 'w', san: 'Qxe1', explain: { idea: "La dama blanca recaptura, cerrando el cambio con posición sólida y equilibrada.", ventaja: "Cambio de piezas mayores favorable, posición clara para blancas.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-6XASQ',
    name: 'Cambio de dama por torre que termina con la dama ganando una segunda torre',
    tema: 'Cambio de dama por torre + ganancia de torre',
    nivel: 6,
    rating: 2016,
    userColor: 'w',
    startFen: '4r2k/p1q4B/1pb2pQp/3p4/8/4P3/P2n2PP/2R3K1 w - - 0 32',
    overview: "Posición real de una partida jugada en Lichess (rating 2016). Blancas entrega la dama con jaque capturando una torre, y tras la recaptura obligada, la segunda torre remata ganando otra torre.",
    moves: [
      { color: 'w', san: 'Qxe8+', explain: { idea: "La dama blanca captura la torre negra de e8 dando jaque, ofreciéndose voluntariamente.", ventaja: "Gana una torre y fuerza la recaptura.", debilidad: "Entrega la dama -- solo se justifica por lo que viene después." } },
      { color: 'b', san: 'Bxe8', explain: { idea: "Única forma razonable de responder al jaque: el alfil captura la dama.", ventaja: "Recupera la dama entregada.", debilidad: "La torre de c7 se queda sin ninguna defensa adicional." } },
      { color: 'w', san: 'Rxc7', explain: { idea: "La torre blanca captura la torre negra de c7, que se había quedado sin ninguna defensa.", ventaja: "Recupera material adicional, cerrando la secuencia con ventaja para blancas.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-GvuPZ',
    name: 'Cambio de torres en la columna central que termina con la dama recapturando',
    tema: 'Cambio de torres en la columna central',
    nivel: 6,
    rating: 1701,
    userColor: 'w',
    startFen: '3r4/pp6/5pk1/4P1q1/2P5/2P2QP1/PP5P/3r1RK1 w - - 1 37',
    overview: "Final de torres y damas real de una partida jugada en Lichess (rating 1701). Una cadena de tres capturas en la columna d termina con la dama blanca recuperando la posición.",
    moves: [
      { color: 'w', san: 'Rxd1', explain: { idea: "La torre blanca captura la torre negra de d1, la única captura disponible.", ventaja: "Cambio favorable de torres.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rxd1+', explain: { idea: "La segunda torre negra recaptura dando jaque, la única forma razonable.", ventaja: "Recupera la torre cambiada con jaque.", debilidad: "La torre queda en una casilla que la dama blanca puede recapturar directamente." } },
      { color: 'w', san: 'Qxd1', explain: { idea: "La dama blanca recaptura, cerrando la serie de cambios con posición sólida y equilibrada.", ventaja: "Cambio de piezas mayores completo, posición clara para blancas.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-t8jr0',
    name: 'Reposicionamiento de dama que gana un peón con jaque',
    tema: 'Reposicionamiento de dama + jaque que gana un peón',
    nivel: 6,
    rating: 1926,
    userColor: 'b',
    startFen: 'r3kb1r/ppp2ppp/2n3b1/3q4/3P4/PP1pPPPN/1B1N3P/R2QK2R b KQkq - 2 13',
    overview: "Posición real de una partida jugada en Lichess (rating 1926). Negras reposiciona la dama; blancas responde sin resolver la amenaza real, y negras captura un peón con jaque.",
    moves: [
      { color: 'b', san: 'Qe6', explain: { idea: "La dama negra se reposiciona a e6, sin ninguna amenaza directa inmediata.", ventaja: "Pieza activa, preparando el siguiente golpe.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Nf4', explain: { idea: "El caballo blanco se traslada a f4, sin ocuparse de la amenaza real que pende sobre él.", ventaja: "Ninguna real para blancas.", debilidad: "Deja el peón de e3 sin ninguna defensa adicional." } },
      { color: 'b', san: 'Qxe3+', explain: { idea: "La dama negra captura el peón de e3 dando jaque, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón con jaque, manteniendo la iniciativa.", debilidad: "Ninguna real -- cierra el fragmento con posición favorable para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-mysfs',
    name: 'Reagrupamiento de torres que abre paso a ganar la dama',
    tema: 'Reagrupamiento de torres + ganancia de dama',
    nivel: 6,
    rating: 2096,
    userColor: 'b',
    startFen: 'r4rk1/pp3p2/5p1p/2pp4/5Pq1/1P1PQpP1/P1P2P1P/R3R1K1 b - - 1 19',
    overview: "Posición real de una partida jugada en Lichess (rating 2096). Negras reagrupa las torres, resiste el avance de un peón, reposiciona la dama, y remata capturando la dama blanca suelta.",
    moves: [
      { color: 'b', san: 'Rae8', explain: { idea: "La torre negra se reagrupa a e8, doblando torres en la columna central.", ventaja: "Coordinación completa entre ambas torres.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'h3', explain: { idea: "Blancas avanza el peón a h3, buscando algo de espacio en el flanco de rey.", ventaja: "Gana algo de espacio.", debilidad: "Ninguna real que compense lo que viene después." } },
      { color: 'b', san: 'Qh5', explain: { idea: "La dama negra se reposiciona a h5, muy activa cerca del rey blanco.", ventaja: "Pieza extremadamente activa.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kh2', explain: { idea: "El rey blanco se traslada a h2, sin ocuparse de la amenaza real que pende sobre la dama.", ventaja: "Ninguna real para blancas.", debilidad: "Deja la dama de e3 sin ninguna defensa adicional." } },
      { color: 'b', san: 'Rxe3', explain: { idea: "La torre negra captura la dama blanca de e3, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, la pieza más valiosa del tablero.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-FX7bS',
    name: 'Cadena de cambios en g2 que termina con el rey recapturando',
    tema: 'Serie de cambios en la misma casilla',
    nivel: 6,
    rating: 1889,
    userColor: 'w',
    startFen: 'r3k2r/1bp1p1b1/pnqpPnpp/1p3p2/5P1B/P1NB1N2/1PP1Q1PP/R4R1K w kq - 2 19',
    overview: "Posición real de una partida jugada en Lichess (rating 1889). Blancas reposiciona el caballo; negras entrega la dama con jaque, y una cadena de recapturas en g2 termina con el rey blanco recuperando la posición.",
    moves: [
      { color: 'w', san: 'Nd4', explain: { idea: "El caballo blanco se traslada a d4, preparando el resto del plan.", ventaja: "Pieza mejor colocada para lo que viene.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qxg2+', explain: { idea: "La dama negra captura el peón de g2 dando jaque, ofreciéndose voluntariamente.", ventaja: "Fuerza la recaptura, buscando complicar la posición.", debilidad: "Entrega la dama -- solo se justifica si lo que sigue compensa." } },
      { color: 'w', san: 'Qxg2', explain: { idea: "Única forma razonable de responder al jaque: la dama blanca captura.", ventaja: "Recupera la dama entregada.", debilidad: "La dama blanca queda en una casilla que el alfil negro puede recapturar con jaque." } },
      { color: 'b', san: 'Bxg2+', explain: { idea: "El alfil negro captura la dama blanca dando jaque, recuperando el material entregado.", ventaja: "Cambio de damas completo, con jaque incluido.", debilidad: "El alfil queda en una casilla que el rey blanco puede recapturar directamente." } },
      { color: 'w', san: 'Kxg2', explain: { idea: "El rey blanco captura el alfil, cerrando la secuencia con posición equilibrada tras el cambio de damas.", ventaja: "Posición sólida tras la serie de cambios.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Tzofq',
    name: 'Cambio de dama por torre seguido de un cambio de piezas menores',
    tema: 'Cambio de dama por torre + cambio de piezas',
    nivel: 6,
    rating: 2076,
    userColor: 'b',
    startFen: 'r1b2r1k/ppq1ppb1/2p4N/P3R1Q1/2Bp2p1/2N5/1PP2PPP/R5K1 b - - 0 18',
    overview: "Posición real de una partida jugada en Lichess (rating 2076). Negras captura una torre suelta con la dama; blancas reposiciona la propia dama, y negras remata ganando un caballo.",
    moves: [
      { color: 'b', san: 'Qxe5', explain: { idea: "La dama negra captura la torre blanca de e5, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Qh4', explain: { idea: "La dama blanca se reposiciona a h4, buscando algo de contrajuego.", ventaja: "Pieza activa tras la pérdida de material.", debilidad: "No recupera nada de lo ya perdido." } },
      { color: 'b', san: 'Bxh6', explain: { idea: "El alfil negro captura el caballo blanco de h6, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza adicional, ampliando la ventaja material a decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-LwFgK',
    name: 'Cambio de damas que abre paso a un jaque de alfil',
    tema: 'Cambio de damas + jaque de alfil',
    nivel: 6,
    rating: 1957,
    userColor: 'b',
    startFen: '1r2k2r/p2qppbp/6p1/2p2nPB/2P5/2NQ4/PP2PP2/1RB1K2R b Kk - 0 21',
    overview: "Posición real de una partida jugada en Lichess (rating 1957). Negras captura la dama blanca suelta, y tras la recaptura obligada, el alfil remata capturando un caballo con jaque.",
    moves: [
      { color: 'b', san: 'Qxd3', explain: { idea: "La dama negra captura la dama blanca de d3, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, la pieza más valiosa del tablero.", debilidad: "Ninguna real inmediata." } },
      { color: 'w', san: 'exd3', explain: { idea: "Única recaptura razonable para blancas.", ventaja: "Recupera la dama a cambio.", debilidad: "El caballo de c3 se queda sin ninguna defensa adicional." } },
      { color: 'b', san: 'Bxc3+', explain: { idea: "El alfil negro captura el caballo blanco de c3 dando jaque, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza adicional con jaque, ampliando la ventaja material a decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-jSXfq',
    name: 'Avance de peón que abre camino a ganar un caballo',
    tema: 'Avance de peón + ganancia de caballo',
    nivel: 6,
    rating: 1706,
    userColor: 'b',
    startFen: 'b3qr1k/6pp/5n2/1P1pp3/1b2p3/1BN1P2P/2R1QPPB/6K1 b - - 3 27',
    overview: "Posición real de una partida jugada en Lichess (rating 1706). Negras avanza un peón central; blancas reposiciona la dama sin defender lo suficiente, y el alfil negro remata capturando un caballo suelto.",
    moves: [
      { color: 'b', san: 'd4', explain: { idea: "Negras avanza el peón a d4, ganando espacio en el centro.", ventaja: "Gana espacio y presiona la posición blanca.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Qc4', explain: { idea: "La dama blanca se reposiciona a c4, sin ocuparse de la amenaza real que pende sobre el caballo.", ventaja: "Ninguna real para blancas.", debilidad: "Deja el caballo de c3 sin ninguna defensa adicional." } },
      { color: 'b', san: 'Bxc3', explain: { idea: "El alfil negro captura el caballo blanco de c3, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-dq9kQ',
    name: 'Sacrificio de peón que abre camino a un cambio de damas',
    tema: 'Ganancia de peón + cambio de damas',
    nivel: 6,
    rating: 1854,
    userColor: 'w',
    startFen: '3r1rk1/1R2Qp1p/2p3p1/p7/P7/2qn1R1P/5PP1/6K1 w - - 0 28',
    overview: "Posición real de una partida jugada en Lichess (rating 1854). Blancas captura un peón suelto; negras busca contrajuego con jaque de dama, y blancas recaptura manteniendo la ventaja.",
    moves: [
      { color: 'w', san: 'Rxf7', explain: { idea: "La torre blanca captura el peón de f7, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón limpio.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qe1+', explain: { idea: "La dama negra entra en e1 dando jaque, el único intento razonable de complicar la posición.", ventaja: "Jaque forzado, gana un tiempo.", debilidad: "Se ofrece a ser capturada." } },
      { color: 'w', san: 'Qxe1', explain: { idea: "La dama blanca captura la dama negra, que se había quedado sin ninguna defensa suficiente.", ventaja: "Gana la dama, cerrando la combinación con ventaja material decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-9JRmF',
    name: 'El rey se pone a salvo antes de que la dama gane un alfil suelto',
    tema: 'Jugada de seguridad del rey + ganancia de alfil',
    nivel: 6,
    rating: 1985,
    userColor: 'w',
    startFen: 'r3r1k1/ppp2ppp/2p5/5b2/8/2NPPQ2/PPP3P1/R3RK1q w - - 1 19',
    overview: "Posición real de una partida jugada en Lichess (rating 1985). Blancas pone al rey a salvo; negras reposiciona la dama sin defender lo suficiente, y blancas remata capturando un alfil suelto.",
    moves: [
      { color: 'w', san: 'Ke2', explain: { idea: "El rey blanco se traslada a e2, buscando mayor seguridad antes de continuar.", ventaja: "Rey más seguro para el resto de la partida.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qh6', explain: { idea: "La dama negra se reposiciona a h6, sin ocuparse de la amenaza real que pende sobre el alfil.", ventaja: "Ninguna real para negras.", debilidad: "Deja el alfil de f5 sin ninguna defensa adicional." } },
      { color: 'w', san: 'Qxf5', explain: { idea: "La dama blanca captura el alfil negro de f5, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-baT1T',
    name: 'Cambio de torre por peón que desencadena una serie de jaques y cambios',
    tema: 'Serie de jaques y cambios en el flanco de rey',
    nivel: 6,
    rating: 2163,
    userColor: 'w',
    startFen: '6rk/5p1n/p7/1pp1p2R/7Q/2Pq2rP/PP3P2/4R1K1 w - - 0 30',
    overview: "Posición real de una partida jugada en Lichess (rating 2163). Blancas cambia una torre por un peón, y una cadena de jaques de torre negra termina con la dama blanca recapturando en una posición simplificada.",
    moves: [
      { color: 'w', san: 'fxg3', explain: { idea: "El peón blanco captura la torre negra de g3, la única captura disponible.", ventaja: "Cambio favorable para blancas.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rxg3+', explain: { idea: "La torre negra recaptura dando jaque, la única forma razonable.", ventaja: "Recupera la torre cambiada con jaque.", debilidad: "Ninguna real para negras en este movimiento concreto." } },
      { color: 'w', san: 'Kh2', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda todavía más expuesto tras el jaque." } },
      { color: 'b', san: 'Rxh3+', explain: { idea: "La torre negra sigue con un segundo jaque, capturando otro peón.", ventaja: "Mantiene la iniciativa, ganando material adicional.", debilidad: "La torre queda en una casilla que la dama blanca puede recapturar directamente." } },
      { color: 'w', san: 'Qxh3', explain: { idea: "La dama blanca recaptura, cerrando la serie de cambios con posición equilibrada tras todos los intercambios.", ventaja: "Posición sólida tras la serie de jaques y cambios.", debilidad: "Ninguna real." } }
    ]
  },
  // ============================================================
  // PROBLEMAS DE AJEDREZ -- banco tactico Lichess, lote 18 (S6)
  // Ultimo lote del pool corto de 267 (1/3/5 semijugadas).
  // Con este lote se completan las 267 entradas del pool corto.
  // ============================================================
  {
    id: 'h04-problema-lichess-map3J',
    name: 'Reposicionamiento de alfil que abre paso a ganar un peón con jaque',
    tema: 'Reposicionamiento de alfil + jaque que gana un peón',
    nivel: 6,
    rating: 1844,
    userColor: 'b',
    startFen: '8/1Q2bppk/p3p2p/3n4/5q2/P1BR1P2/5P1P/R6K b - - 2 26',
    overview: "Posición real de una partida jugada en Lichess (rating 1844). Negras reposiciona el alfil; blancas responde sin defender lo suficiente, y la dama negra remata capturando un peón con jaque.",
    moves: [
      { color: 'b', san: 'Bd6', explain: { idea: "El alfil negro se reposiciona a d6, presionando la diagonal hacia el rey blanco.", ventaja: "Pieza muy activa, coordinada con la dama.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kg2', explain: { idea: "El rey blanco se traslada a g2, sin ocuparse de la amenaza real que se avecina.", ventaja: "Ninguna real para blancas.", debilidad: "Deja el peón de h2 sin ninguna defensa suficiente." } },
      { color: 'b', san: 'Qxh2+', explain: { idea: "La dama negra captura el peón de h2 dando jaque, que se había quedado sin ninguna defensa suficiente.", ventaja: "Gana un peón con jaque, manteniendo la iniciativa del ataque.", debilidad: "Ninguna real -- cierra el fragmento con posición decisiva para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-02FTV',
    name: 'Cambio de alfiles que desencadena una serie de capturas en el flanco de rey',
    tema: 'Cambio de alfiles con serie de capturas',
    nivel: 6,
    rating: 2052,
    userColor: 'w',
    startFen: 'r1q1k3/pppb4/3p2r1/3Ppnn1/1PP3p1/P1NBQ3/5PPN/R4RK1 w q - 0 21',
    overview: "Posición real de una partida jugada en Lichess (rating 2052). Blancas cambia los alfiles, avanza un peón, y una cadena de capturas en el flanco de rey termina con el caballo blanco recuperando la posición.",
    moves: [
      { color: 'w', san: 'Bxf5', explain: { idea: "El alfil blanco captura el caballo negro de f5, la única captura disponible.", ventaja: "Elimina una pieza activa negra.", debilidad: "Ninguna real, es un cambio." } },
      { color: 'b', san: 'Bxf5', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera el alfil cambiado.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'f4', explain: { idea: "El peón blanco avanza a f4, buscando abrir líneas en el flanco de rey.", ventaja: "Gana espacio y prepara nuevas amenazas.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'gxf3', explain: { idea: "Negras captura el peón de f3, la única forma de responder al avance.", ventaja: "Gana un peón a cambio.", debilidad: "El peón resultante se queda sin ninguna defensa adicional." } },
      { color: 'w', san: 'Nxf3', explain: { idea: "El caballo blanco recaptura, cerrando la secuencia con posición sólida y equilibrada.", ventaja: "Posición estable tras la serie de cambios en el flanco de rey.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-23etJ',
    name: 'El caballo se reposiciona y captura un peón suelto',
    tema: 'Reposicionamiento de caballo + ganancia de peón',
    nivel: 6,
    rating: 1858,
    userColor: 'b',
    startFen: '8/6pp/2K5/6k1/2B1n1P1/7P/8/8 b - - 2 44',
    overview: "Final de piezas real de una partida jugada en Lichess (rating 1858). Negras reposiciona el caballo a una casilla activa; blancas responde sin defender lo suficiente, y el caballo remata capturando un peón suelto.",
    moves: [
      { color: 'b', san: 'Nf2', explain: { idea: "El caballo negro se traslada a f2, una casilla muy activa.", ventaja: "Pieza mucho mejor colocada, lista para capturar material.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kd6', explain: { idea: "El rey blanco avanza a d6, sin ocuparse de la amenaza real del caballo.", ventaja: "Ninguna real para blancas.", debilidad: "Deja el peón de h3 sin ninguna defensa adicional." } },
      { color: 'b', san: 'Nxh3', explain: { idea: "El caballo negro captura el peón de h3, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón limpio, ampliando la ventaja en el final.", debilidad: "Ninguna real -- cierra el fragmento con posición favorable para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Kg3t1',
    name: 'Cambio de alfiles con jaque que abre camino a ganar la dama',
    tema: 'Cambio de alfiles con jaque + ganancia de dama',
    nivel: 6,
    rating: 1996,
    userColor: 'b',
    startFen: 'rr6/B1k1bppp/Q1p1p3/3pP3/2P1q1P1/5NPP/PP6/R4RK1 b - - 0 24',
    overview: "Posición real de una partida jugada en Lichess (rating 1996). Negras entra con jaque de alfil ofreciendo el cambio; tras la recaptura, la torre negra remata capturando la dama blanca suelta.",
    moves: [
      { color: 'b', san: 'Bc5+', explain: { idea: "El alfil negro entra en c5 dando jaque, ofreciéndose al cambio.", ventaja: "Jaque forzado que fuerza una decisión concreta.", debilidad: "Entrega el alfil -- solo se justifica por lo que viene después." } },
      { color: 'w', san: 'Bxc5', explain: { idea: "El alfil blanco captura, la respuesta más natural.", ventaja: "Gana un alfil a cambio.", debilidad: "No se ocupa de la defensa real de la dama, que queda expuesta." } },
      { color: 'b', san: 'Rxa6', explain: { idea: "La torre negra captura la dama blanca de a6, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, cerrando la combinación con ventaja material decisiva pese al alfil entregado.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-lgCAj',
    name: 'Ganancia de peón seguida de un cambio de damas forzado',
    tema: 'Ganancia de peón + cambio de damas forzado',
    nivel: 6,
    rating: 1970,
    userColor: 'w',
    startFen: '4r3/ppp2pk1/5rp1/2p1p1q1/4P3/3PR1p1/PPP1QPK1/7R w - - 0 30',
    overview: "Posición real de una partida jugada en Lichess (rating 1970). Blancas captura un peón suelto, reposiciona la torre, y tras un jaque de dama negra, el cambio de damas queda a su favor.",
    moves: [
      { color: 'w', san: 'Rxg3', explain: { idea: "La torre blanca captura el peón de g3, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón limpio.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qf4', explain: { idea: "La dama negra se reposiciona a f4, presionando la posición blanca.", ventaja: "Pieza activa, buscando compensación.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rg4', explain: { idea: "La torre blanca se reagrupa a g4, defendiendo con precisión.", ventaja: "Mantiene la ventaja material ya conseguida.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qf3+', explain: { idea: "La dama negra entra en f3 dando jaque, el único intento razonable de complicar la posición.", ventaja: "Jaque forzado, gana un tiempo.", debilidad: "Se ofrece a ser capturada." } },
      { color: 'w', san: 'Qxf3', explain: { idea: "La dama blanca captura la dama negra, que se había quedado sin ninguna defensa suficiente.", ventaja: "Gana la dama, cerrando la combinación con ventaja material decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-b5B6p',
    name: 'Jaque de caballo que abre paso a ganar la dama',
    tema: 'Jaque de caballo que gana la dama',
    nivel: 6,
    rating: 1725,
    userColor: 'b',
    startFen: 'r2qk2r/1p3pp1/2p4p/p1QBp3/1n1P2P1/1P2P2P/PB1P1P2/R3K1NR b KQkq - 0 15',
    overview: "Posición real de una partida jugada en Lichess (rating 1725). El caballo negro entra con jaque, y tras la respuesta forzada, captura la dama blanca que se había quedado sin ninguna defensa.",
    moves: [
      { color: 'b', san: 'Nd3+', explain: { idea: "El caballo negro entra en d3 dando jaque.", ventaja: "Jaque forzado que dirige al rey a la casilla que negras necesita.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Ke2', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por defender la dama, que sigue sin ninguna protección adicional." } },
      { color: 'b', san: 'Nxc5', explain: { idea: "El caballo negro captura la dama blanca de c5, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, la pieza más valiosa del tablero.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-SQEIw',
    name: 'Cambio de caballo por alfil que abre paso a ganar un segundo alfil',
    tema: 'Cambio de piezas + ganancia de alfil',
    nivel: 6,
    rating: 1801,
    userColor: 'w',
    startFen: 'r2q1rk1/3bbppp/4p3/3nQ1B1/2B5/5R2/PP3PPP/3R2K1 w - - 1 18',
    overview: "Posición real de una partida jugada en Lichess (rating 1801). Blancas cambia el caballo negro por el propio alfil; negras reposiciona la torre, y el alfil blanco remata capturando el segundo alfil negro.",
    moves: [
      { color: 'w', san: 'Bxd5', explain: { idea: "El alfil blanco captura el caballo negro de d5, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Ra5', explain: { idea: "La torre negra se reposiciona a a5, buscando la mejor defensa disponible.", ventaja: "Único intento razonable de resistencia.", debilidad: "No detiene el plan blanco de fondo." } },
      { color: 'w', san: 'Bxe7', explain: { idea: "El alfil blanco captura el segundo alfil negro de e7, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza adicional, ampliando la ventaja material a decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-5wEWm',
    name: 'Sacrificio de alfil con jaque que fuerza al rey a salir de su refugio',
    tema: 'Sacrificio de alfil con jaque en el enroque',
    nivel: 6,
    rating: 1859,
    userColor: 'w',
    startFen: 'r2qkbnr/pb1ppppp/1pn5/8/2B1P3/5N2/PB3PPP/RN1Q1RK1 w kq - 4 8',
    overview: "Posición real de una partida jugada en Lichess (rating 1859). Blancas entrega el alfil capturando un peón con jaque, y tras la recaptura obligada del rey, el caballo remata con un nuevo jaque.",
    moves: [
      { color: 'w', san: 'Bxf7+', explain: { idea: "El alfil blanco captura el peón de f7 dando jaque, ofreciéndose voluntariamente.", ventaja: "Atrae al rey negro fuera de la seguridad del enroque.", debilidad: "Entrega el alfil -- solo se justifica por lo que viene después." } },
      { color: 'b', san: 'Kxf7', explain: { idea: "Única forma razonable de responder al jaque: el rey captura el alfil.", ventaja: "Recupera el alfil entregado.", debilidad: "El rey queda completamente expuesto en el centro del tablero." } },
      { color: 'w', san: 'Ng5+', explain: { idea: "El caballo blanco entra en g5 dando jaque, manteniendo la iniciativa del ataque.", ventaja: "Jaque forzado que sigue empujando al rey negro expuesto.", debilidad: "Ninguna real -- cierra el fragmento con posición decisiva para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-v5RuY',
    name: 'Jaque de dama que abre paso a ganar un caballo suelto',
    tema: 'Jaque de dama + ganancia de caballo',
    nivel: 6,
    rating: 1878,
    userColor: 'w',
    startFen: 'r1bqk2r/pp2bppp/4p3/4P3/5nP1/2N2N2/PP5P/R2QKB1R w KQkq - 0 13',
    overview: "Posición real de una partida jugada en Lichess (rating 1878), en fase de apertura. Blancas entra con jaque de dama, y tras la respuesta forzada, captura un caballo que se había quedado sin ninguna defensa.",
    moves: [
      { color: 'w', san: 'Qa4+', explain: { idea: "La dama blanca entra en a4 dando jaque.", ventaja: "Jaque forzado que dirige la combinación.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Bd7', explain: { idea: "Única forma razonable de tapar el jaque: interponer el alfil.", ventaja: "Detiene el jaque.", debilidad: "No hace nada por defender el caballo de f4, que sigue expuesto." } },
      { color: 'w', san: 'Qxf4', explain: { idea: "La dama blanca captura el caballo negro de f4, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna, cierra la combinación con ventaja decisiva." } }
    ]
  },
  {
    id: 'h04-problema-lichess-1QENX',
    name: 'Mate en 2 con la torre empujando al rey a la esquina',
    tema: 'Mate en 2 con torre',
    nivel: 6,
    rating: 1995,
    userColor: 'w',
    startFen: '2r5/1p2n3/p2p1r1p/3Pp1k1/P1P1B3/1P5R/5pK1/7R w - - 4 40',
    overview: "Posición real de una partida jugada en Lichess (rating 1995). Un jaque de torre obliga al rey a una única casilla, y la misma torre remata con jaque mate.",
    moves: [
      { color: 'w', san: 'Rg3+', explain: { idea: "La torre blanca entra en g3 dando jaque.", ventaja: "Jaque forzado que dirige al rey exactamente a la casilla que blancas necesita.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kf4', explain: { idea: "Única casilla legal para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda sin ninguna casilla de escape para la jugada siguiente." } },
      { color: 'w', san: 'Rh4#', explain: { idea: "La torre blanca entra en h4 dando jaque mate, apoyada por el resto de piezas blancas que ya cubrían las demás casillas de escape.", ventaja: "Jaque mate: fin inmediato de la partida.", debilidad: "Ninguna: es el resultado final de la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-dXPJ4',
    name: 'Sacrificio de caballo que abre paso a ganar una torre',
    tema: 'Sacrificio de caballo con jaque que gana una torre',
    nivel: 6,
    rating: 1789,
    userColor: 'w',
    startFen: '8/2r3p1/6kp/2p1R3/2P1N1P1/5P1P/6K1/4r3 w - - 1 37',
    overview: "Posición real de una partida jugada en Lichess (rating 1789). Blancas entra con jaque de torre, sacrifica el caballo con un segundo jaque, y remata capturando una torre suelta.",
    moves: [
      { color: 'w', san: 'Re6+', explain: { idea: "La torre blanca entra en e6 dando jaque.", ventaja: "Jaque forzado, primer paso de la combinación.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kf7', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda en una casilla donde el caballo blanco puede seguir con la persecución." } },
      { color: 'w', san: 'Ng5+', explain: { idea: "El caballo blanco entra en g5 dando jaque, ofreciéndose voluntariamente.", ventaja: "Fuerza la captura, ganando un tiempo crucial.", debilidad: "Entrega el caballo -- solo se justifica por lo que viene después." } },
      { color: 'b', san: 'hxg5', explain: { idea: "Única forma razonable de responder al jaque: capturar con el peón.", ventaja: "Recupera el caballo entregado.", debilidad: "La torre de e1 se queda sin ninguna defensa adicional." } },
      { color: 'w', san: 'Rxe1', explain: { idea: "La torre blanca captura la torre negra de e1, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa, cerrando la combinación con ventaja material decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-8msYb',
    name: 'Ruptura de peones en el flanco de rey que abre camino a ganar una torre',
    tema: 'Ruptura de peones que gana una torre',
    nivel: 6,
    rating: 2078,
    userColor: 'b',
    startFen: '8/r4p2/4p1p1/2k4p/P4R1P/5PP1/6K1/8 b - - 2 37',
    overview: "Posición real de una partida jugada en Lichess (rating 2078). Negras rompe la estructura de peones blanca en el flanco de rey; tras una serie de cambios, captura la torre que queda expuesta.",
    moves: [
      { color: 'b', san: 'f5', explain: { idea: "Negras avanza el peón a f5, iniciando la ruptura de la estructura de peones blanca.", ventaja: "Empieza a abrir líneas hacia el rey blanco.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'g4', explain: { idea: "Blancas avanza el peón a g4, buscando mantener la estructura cerrada.", ventaja: "Intenta frenar el plan negro.", debilidad: "Crea nuevas debilidades en la estructura de peones." } },
      { color: 'b', san: 'e5', explain: { idea: "Negras avanza también el peón a e5, ampliando la ruptura en el centro.", ventaja: "Abre todavía más líneas a favor de negras.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'gxf5', explain: { idea: "Blancas captura el peón de f5, la única forma razonable de responder.", ventaja: "Gana un peón a cambio.", debilidad: "Deja la torre de f1 sin ninguna defensa adicional." } },
      { color: 'b', san: 'exf4', explain: { idea: "Negras captura la torre blanca de f4, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa, cerrando la combinación con ventaja material decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  // ============================================================
  // GRANDES PARTIDAS -- ampliacion con solucion larga, Lichess (S6)
  // Lote 1 de 3 (33 posiciones totales de 7/9/11 semijugadas,
  // descartadas del pool corto de Problemas de ajedrez por no
  // encajar con el patron de "problema corto" -- ver ANNEX_H04.md).
  // ============================================================
  {
    id: 'h04-problema-lichess-xdLHg',
    name: 'Cambio de torres en el centro que abre paso a una carrera de peones',
    tema: 'Cambio de torres + carrera de peones en el final',
    nivel: 5,
    rating: 1951,
    userColor: 'b',
    startFen: '6k1/3r4/4pppP/8/1R1P1KP1/8/8/8 b - - 2 77',
    overview: "Posición real de una partida jugada en Lichess (rating 1951). Una serie de cambios con jaque en el centro simplifica hacia un final de peones donde ambos bandos empujan sus propios peones pasados.",
    moves: [
      { color: 'b', san: 'Rxd4+', explain: { idea: "La torre negra captura el peón de d4 dando jaque, ofreciéndose al cambio.", ventaja: "Gana un peón y fuerza el cambio de torres en condiciones favorables.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rxd4', explain: { idea: "Única forma razonable de responder al jaque: la torre blanca recaptura.", ventaja: "Recupera la torre a cambio.", debilidad: "Ninguna real adicional." } },
      { color: 'b', san: 'e5+', explain: { idea: "Negras avanza el peón a e5 dando jaque, iniciando la lucha por el centro.", ventaja: "Jaque forzado que gana espacio.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Ke3', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional." } },
      { color: 'b', san: 'exd4+', explain: { idea: "Negras captura el peón de d4 dando un segundo jaque.", ventaja: "Gana un peón adicional con jaque.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kxd4', explain: { idea: "El rey blanco recaptura, la única forma razonable de responder.", ventaja: "Recupera el peón cambiado.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kh7', explain: { idea: "El rey negro se traslada a h7, apoyando el avance de sus propios peones.", ventaja: "Rey activo, cerca de la zona decisiva del tablero.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'g5', explain: { idea: "Blancas avanza el peón a g5, buscando crear complicaciones en el flanco de rey.", ventaja: "Único intento razonable de contrajuego.", debilidad: "No detiene realmente el plan negro de fondo." } },
      { color: 'b', san: 'fxg5', explain: { idea: "Negras captura el peón de g5, manteniendo la ventaja ya conseguida en el final.", ventaja: "Posición favorable en el final de peones, con ventaja material y estructural.", debilidad: "Ninguna real -- cierra el fragmento con posición ganadora para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-i6ahx',
    name: 'Cambio de torres seguido de una cadena de jaques que termina ganando la dama',
    tema: 'Cambio de torres + cadena de jaques que gana la dama',
    nivel: 5,
    rating: 1823,
    userColor: 'w',
    startFen: '2rr4/pp4kp/1b3pp1/3nq3/3p1N1P/1Q4P1/4PPK1/B1R2R2 w - - 4 30',
    overview: "Posición real de una partida jugada en Lichess (rating 1823). Blancas cambia las torres; negras encadena varios jaques que van ganando material, terminando con la captura de la dama blanca.",
    moves: [
      { color: 'w', san: 'Rxc8', explain: { idea: "La torre blanca captura la torre negra de c8, la única captura disponible.", ventaja: "Cambio de torres.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qe4+', explain: { idea: "La dama negra entra en e4 dando jaque, el único intento razonable de responder.", ventaja: "Jaque forzado, recupera algo de iniciativa.", debilidad: "Ninguna real para negras en este movimiento concreto." } },
      { color: 'w', san: 'f3', explain: { idea: "Blancas interpone el peón, la única forma razonable de tapar el jaque.", ventaja: "Detiene el jaque.", debilidad: "No hace nada por defender el caballo de f4, que sigue expuesto." } },
      { color: 'b', san: 'Nxf4+', explain: { idea: "El caballo negro captura el peón de f4 dando jaque.", ventaja: "Gana un peón con jaque incluido.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'gxf4', explain: { idea: "Única recaptura razonable para blancas.", ventaja: "Recupera el caballo cambiado.", debilidad: "El peón de e2 se queda sin ninguna defensa adicional." } },
      { color: 'b', san: 'Qxe2+', explain: { idea: "La dama negra captura el peón de e2 dando jaque.", ventaja: "Gana un peón adicional con jaque.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rf2', explain: { idea: "La torre blanca se interpone, la única forma razonable de tapar el jaque.", ventaja: "Detiene el jaque momentáneamente.", debilidad: "La torre interpuesta queda expuesta a la captura de la dama." } },
      { color: 'b', san: 'Qxf2+', explain: { idea: "La dama negra captura la torre dando jaque, que se había quedado sin ninguna defensa suficiente.", ventaja: "Gana una torre adicional con jaque.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kxf2', explain: { idea: "El rey blanco captura la dama negra, la única forma legal de responder al jaque.", ventaja: "Recupera la dama, cerrando la secuencia con posición equilibrada tras toda la serie de cambios.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-noc3M',
    name: 'Cambio de torres en un final de peones muy ajustado',
    tema: 'Cambio de torres en el final de peones',
    nivel: 5,
    rating: 1888,
    userColor: 'b',
    startFen: '8/1pk5/2p5/1PPr4/8/1RK5/8/8 b - - 0 51',
    overview: "Final de torres y peones real de una partida jugada en Lichess (rating 1888). Una serie de capturas con jaque simplifica hacia un final de reyes y peones muy igualado.",
    moves: [
      { color: 'b', san: 'Rxc5+', explain: { idea: "La torre negra captura el peón de c5 dando jaque.", ventaja: "Gana un peón con jaque.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kd4', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional." } },
      { color: 'b', san: 'Rxb5', explain: { idea: "La torre negra captura otro peón, el de b5.", ventaja: "Gana un segundo peón, ampliando la ventaja.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rxb5', explain: { idea: "La torre blanca recaptura, ofreciendo el cambio de torres.", ventaja: "Simplifica hacia un final más manejable.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'cxb5', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera la torre cambiada, quedando con la ventaja de peones ya conseguida.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kc5', explain: { idea: "El rey blanco avanza a c5, buscando frenar a los peones negros restantes.", ventaja: "Rey activo, defendiendo el flanco.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'b4', explain: { idea: "Negras avanza el peón a b4, buscando crear un peón pasado.", ventaja: "Amenaza avanzar hacia la coronación.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kxb4', explain: { idea: "El rey blanco captura el peón, la única forma razonable de detenerlo.", ventaja: "Elimina la amenaza inmediata.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kb6', explain: { idea: "El rey negro avanza a b6, manteniendo la iniciativa en el final.", ventaja: "Posición activa en el final de reyes y peones.", debilidad: "Ninguna real -- cierra el fragmento con posición equilibrada pero favorable para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-qDD1y',
    name: 'Coronación cambiada que abre paso a una carrera de peones en el flanco de rey',
    tema: 'Coronación cambiada + carrera de peones',
    nivel: 5,
    rating: 2118,
    userColor: 'w',
    startFen: '8/6pp/8/1p1k1PPP/8/4K3/2p5/8 w - - 0 48',
    overview: "Final de reyes y peones real de una partida jugada en Lichess (rating 2118). Tras neutralizar la coronación negra, blancas empuja sus propios peones del flanco de rey en una carrera hacia la coronación.",
    moves: [
      { color: 'w', san: 'Kd2', explain: { idea: "El rey blanco se traslada a d2, acercándose a detener el peón negro avanzado.", ventaja: "Prepara la captura de la nueva dama negra en la jugada siguiente.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'c1=Q+', explain: { idea: "El peón negro corona en c1 dando jaque, el único recurso disponible.", ventaja: "Obtiene una nueva dama sobre el tablero.", debilidad: "La nueva dama nace ya bajo ataque directo del rey blanco." } },
      { color: 'w', san: 'Kxc1', explain: { idea: "El rey blanco captura la dama recién coronada, neutralizando por completo el intento de negras.", ventaja: "Elimina la amenaza de coronación sin ceder nada.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kd6', explain: { idea: "El rey negro avanza a d6, buscando defender el resto de su posición.", ventaja: "Rey más centralizado.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'f6', explain: { idea: "Blancas avanza el peón a f6, iniciando su propia carrera hacia la coronación.", ventaja: "Peón pasado avanzando sin oposición real.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'gxf6', explain: { idea: "Única captura razonable para negras.", ventaja: "Recupera el peón cambiado.", debilidad: "Ninguna real adicional." } },
      { color: 'w', san: 'g6', explain: { idea: "Blancas avanza el segundo peón a g6, ampliando la pareja de peones pasados.", ventaja: "Peones conectados y muy peligrosos.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'hxg6', explain: { idea: "Única captura razonable para negras.", ventaja: "Recupera el peón cambiado.", debilidad: "Ninguna real adicional." } },
      { color: 'w', san: 'h6', explain: { idea: "Blancas avanza el tercer peón a h6, manteniendo la presión de la mayoría de peones en el flanco de rey.", ventaja: "Sigue con la iniciativa decisiva en el final.", debilidad: "Ninguna real -- cierra el fragmento con posición favorable para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-8jNFD',
    name: 'Jaque de dama que fuerza un cambio de damas y termina ganando una torre',
    tema: 'Jaque de dama + cambio de damas + ganancia de torre',
    nivel: 5,
    rating: 2187,
    userColor: 'w',
    startFen: '4rr2/1pp2qk1/p2p2pp/3P1n2/2P1NP2/8/PPQ4P/4R1RK w - - 0 24',
    overview: "Posición real de una partida jugada en Lichess (rating 2187). Blancas entra con jaque de dama, sacrifica el caballo con jaque, cambia las damas, y remata capturando una torre suelta.",
    moves: [
      { color: 'w', san: 'Qc3+', explain: { idea: "La dama blanca entra en c3 dando jaque.", ventaja: "Jaque forzado, primer paso de la combinación.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kh7', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional." } },
      { color: 'w', san: 'Nf6+', explain: { idea: "El caballo blanco entra en f6 dando jaque, ofreciéndose voluntariamente.", ventaja: "Fuerza la recaptura con la dama, preparando el cambio de damas.", debilidad: "Entrega el caballo -- solo se justifica por lo que viene después." } },
      { color: 'b', san: 'Qxf6', explain: { idea: "Única forma razonable de responder al jaque: la dama negra captura.", ventaja: "Recupera el caballo entregado.", debilidad: "La dama negra queda en una casilla que la dama blanca puede recapturar directamente." } },
      { color: 'w', san: 'Qxf6', explain: { idea: "La dama blanca recaptura, ofreciendo el cambio de damas.", ventaja: "Simplifica la posición hacia un final favorable.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rxf6', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera la dama cambiada.", debilidad: "La torre de e8 se queda sin ninguna defensa adicional." } },
      { color: 'w', san: 'Rxe8', explain: { idea: "La torre blanca captura la torre negra de e8, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa, cerrando la combinación con ventaja material decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-xZnuP',
    name: 'Cambio de torres seguido de una cadena de jaques que gana material',
    tema: 'Cambio de torres + cadena de jaques',
    nivel: 5,
    rating: 1714,
    userColor: 'b',
    startFen: '2rr2k1/p5pp/5p2/1q1pP3/1P2n3/1P2P2P/P5P1/1NR1QRK1 b - - 0 29',
    overview: "Posición real de una partida jugada en Lichess (rating 1714). Negras cambia las torres, reposiciona el caballo, y una cadena de jaques termina con negras recuperando la dama.",
    moves: [
      { color: 'b', san: 'Rxc1', explain: { idea: "La torre negra captura la torre blanca de c1, la única captura disponible.", ventaja: "Cambio de torres.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Qxc1', explain: { idea: "Única recaptura razonable para blancas.", ventaja: "Recupera la torre cambiada.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Ng3', explain: { idea: "El caballo negro se reposiciona a g3, una casilla activa cerca del rey blanco.", ventaja: "Pieza muy activa, amenazando entrar todavía más.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rf2', explain: { idea: "La torre blanca se reagrupa a f2, buscando defender con más solidez.", ventaja: "Intenta reforzar la posición.", debilidad: "No detiene realmente la amenaza del caballo negro." } },
      { color: 'b', san: 'Ne2+', explain: { idea: "El caballo negro entra en e2 dando jaque.", ventaja: "Jaque forzado que mantiene la iniciativa.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rxe2', explain: { idea: "La torre blanca captura el caballo, la única forma razonable de responder al jaque.", ventaja: "Elimina la pieza que daba jaque.", debilidad: "La torre queda en una casilla que la dama negra puede recapturar directamente." } },
      { color: 'b', san: 'Qxe2', explain: { idea: "La dama negra captura la torre, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa, cerrando la combinación con ventaja material decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-KSfJd',
    name: 'Cambio de torres que desemboca en un final de reyes muy técnico',
    tema: 'Cambio de torres + final de reyes',
    nivel: 5,
    rating: 2136,
    userColor: 'b',
    startFen: '8/8/5Rk1/4P2p/5r1P/p6K/P7/8 b - - 0 38',
    overview: "Final de torres y peones real de una partida jugada en Lichess (rating 2136). Un cambio de torres simplifica la posición hacia un final de reyes puro, donde ambos bandos maniobran por la mejor casilla.",
    moves: [
      { color: 'b', san: 'Rxf6', explain: { idea: "La torre negra captura la torre blanca de f6, la única captura disponible.", ventaja: "Cambio de torres.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'exf6', explain: { idea: "Única recaptura razonable para blancas.", ventaja: "Recupera la torre cambiada.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kxf6', explain: { idea: "El rey negro captura el peón de f6, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón, quedando con ventaja en el final de reyes.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kg2', explain: { idea: "El rey blanco se traslada a g2, buscando la mejor posición defensiva.", ventaja: "Rey más protegido.", debilidad: "Ninguna real que compense la desventaja material ya existente." } },
      { color: 'b', san: 'Ke5', explain: { idea: "El rey negro avanza a e5, centralizándose para el resto del final.", ventaja: "Rey activo, con ventaja material y posicional.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kf3', explain: { idea: "El rey blanco avanza a f3, buscando frenar el avance negro.", ventaja: "Único plan razonable disponible.", debilidad: "No detiene realmente la ventaja negra de fondo." } },
      { color: 'b', san: 'Kf5', explain: { idea: "El rey negro avanza a f5, manteniendo la iniciativa y la ventaja en el final.", ventaja: "Posición claramente favorable en el final de reyes.", debilidad: "Ninguna real -- cierra el fragmento con ventaja para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Dra8h',
    name: 'Maniobra de rey, alfil y caballo que persigue al rey rival hasta acorralarlo',
    tema: 'Maniobra de piezas menores acorralando al rey',
    nivel: 5,
    rating: 2083,
    userColor: 'w',
    startFen: '4k3/R7/8/3KpN2/5b2/7p/8/7r w - - 2 51',
    overview: "Final de piezas real de una partida jugada en Lichess (rating 2083). Blancas coordina el rey, la torre y el caballo en una larga maniobra que persigue al rey negro hasta dejarlo sin ninguna casilla segura.",
    moves: [
      { color: 'w', san: 'Ke6', explain: { idea: "El rey blanco avanza a e6, centralizándose sin ninguna prisa.", ventaja: "Rey activo, preparando el resto del plan.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Bg5', explain: { idea: "El alfil negro se reposiciona a g5, buscando la mejor defensa disponible.", ventaja: "Intenta cubrir casillas clave.", debilidad: "No detiene realmente el plan blanco de fondo." } },
      { color: 'w', san: 'Ra8+', explain: { idea: "La torre blanca entra en a8 dando jaque.", ventaja: "Jaque forzado que empieza a acorralar al rey negro.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Bd8', explain: { idea: "Única forma razonable de tapar el jaque: interponer el alfil.", ventaja: "Detiene el jaque momentáneamente.", debilidad: "El alfil interpuesto queda expuesto a la captura de la torre." } },
      { color: 'w', san: 'Nd6+', explain: { idea: "El caballo blanco entra en d6 dando jaque, sumándose a la persecución.", ventaja: "Jaque forzado que mantiene la iniciativa completa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kf8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda todavía más acorralado." } },
      { color: 'w', san: 'Rxd8+', explain: { idea: "La torre blanca captura el alfil interpuesto dando jaque, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa con jaque incluido.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kg7', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey sigue sin ninguna casilla realmente segura." } },
      { color: 'w', san: 'Nf5+', explain: { idea: "El caballo blanco entra en f5 dando jaque, continuando la persecución.", ventaja: "Jaque forzado que mantiene al rey negro completamente acorralado.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kh7', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey queda en la esquina, sin ninguna vía de escape futura." } },
      { color: 'w', san: 'Rd7+', explain: { idea: "La torre blanca entra en d7 dando jaque, cerrando la red de persecución con ventaja decisiva ya asegurada (pieza de más y ataque continuo).", ventaja: "Jaque forzado que mantiene la posición completamente ganadora.", debilidad: "Ninguna real -- cierra el fragmento con posición decisiva para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-aFM9R',
    name: 'Serie de cambios en la última fila que termina con el caballo ganando la dama',
    tema: 'Serie de cambios en la última fila',
    nivel: 5,
    rating: 1889,
    userColor: 'w',
    startFen: 'rq2kb1r/5pp1/2b4p/1N1pp3/Q1n1n3/2P2N2/1P2BPPP/R1B2RK1 w kq - 2 17',
    overview: "Posición real de una partida jugada en Lichess (rating 1889). Una cadena de cuatro capturas en la última fila termina con el caballo blanco entrando con jaque y capturando la dama negra.",
    moves: [
      { color: 'w', san: 'Qxa8', explain: { idea: "La dama blanca captura la torre negra de a8, la única captura disponible.", ventaja: "Gana una torre.", debilidad: "Ninguna real, es un cambio en marcha." } },
      { color: 'b', san: 'Bxa8', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera la dama a cambio de la torre.", debilidad: "El alfil queda en una casilla que la torre blanca puede recapturar directamente." } },
      { color: 'w', san: 'Rxa8', explain: { idea: "La torre blanca recaptura, ofreciendo el cambio de damas.", ventaja: "Simplifica hacia una posición favorable.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qxa8', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera la torre cambiada.", debilidad: "Ninguna real adicional." } },
      { color: 'w', san: 'Nc7+', explain: { idea: "El caballo blanco entra en c7 dando jaque, aprovechando la posición ya simplificada.", ventaja: "Jaque forzado que ataca directamente a la dama negra.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kd7', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por salvar a la dama, que sigue atacada por el caballo." } },
      { color: 'w', san: 'Nxa8', explain: { idea: "El caballo blanco captura la dama negra, que se había quedado sin ninguna defensa.", ventaja: "Gana la dama, cerrando la combinación con ventaja material decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-GT5p8',
    name: 'Ruptura de peones en el centro que abre paso a una carrera en el flanco de dama',
    tema: 'Ruptura central + carrera de peones',
    nivel: 5,
    rating: 2082,
    userColor: 'b',
    startFen: '8/8/1p6/p1pp4/P1P1k3/1PP5/4K3/8 b - - 1 48',
    overview: "Final de reyes y peones real de una partida jugada en Lichess (rating 2082). Negras rompe la estructura central y, tras una serie de cambios, ambos bandos empujan peones pasados en el flanco de dama.",
    moves: [
      { color: 'b', san: 'd4', explain: { idea: "Negras avanza el peón a d4, rompiendo la estructura central.", ventaja: "Abre líneas y crea un peón pasado potencial.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'cxd4', explain: { idea: "Blancas captura el peón, la única forma razonable de responder.", ventaja: "Elimina la amenaza inmediata.", debilidad: "Ninguna real adicional." } },
      { color: 'b', san: 'cxd4', explain: { idea: "Negras recaptura, manteniendo la iniciativa central.", ventaja: "Peón pasado y protegido en el centro.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kd2', explain: { idea: "El rey blanco se traslada a d2, buscando controlar el avance del peón pasado.", ventaja: "Rey bien colocado para el resto del final.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'd3', explain: { idea: "Negras avanza el peón a d3, cada vez más cerca de la coronación.", ventaja: "Peón muy avanzado y peligroso.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'b4', explain: { idea: "Blancas avanza el peón a b4, buscando crear su propio contrajuego en el flanco de dama.", ventaja: "Intenta crear una amenaza equivalente.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'axb4', explain: { idea: "Negras captura el peón de b4, la única forma razonable de responder.", ventaja: "Elimina la amenaza blanca.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'a5', explain: { idea: "Blancas avanza el peón a a5, el último intento razonable de crear un peón pasado propio.", ventaja: "Único plan disponible.", debilidad: "Sigue siendo más lento que el peón pasado negro del centro." } },
      { color: 'b', san: 'bxa5', explain: { idea: "Negras captura el peón de a5, cerrando la secuencia con ventaja decisiva en la carrera de peones.", ventaja: "Ventaja material y posicional clara, con el peón pasado central mucho más avanzado.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-HItxq',
    name: 'Carrera de reyes en un final de peones puro',
    tema: 'Carrera de reyes en el final de peones',
    nivel: 5,
    rating: 1895,
    userColor: 'w',
    startFen: '8/8/7p/5K2/7P/5k2/8/8 w - - 1 54',
    overview: "Final de reyes y peones real de una partida jugada en Lichess (rating 1895). Blancas avanza su peón pasado mientras el rey se lanza a capturar los peones negros restantes, ganando la carrera de reyes.",
    moves: [
      { color: 'w', san: 'h5', explain: { idea: "El peón blanco avanza a h5, camino a la coronación.", ventaja: "Peón pasado avanzando sin oposición directa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Ke3', explain: { idea: "El rey negro avanza a e3, buscando compensación en el otro extremo del tablero.", ventaja: "Único plan razonable disponible.", debilidad: "No detiene el avance del peón blanco." } },
      { color: 'w', san: 'Kg6', explain: { idea: "El rey blanco avanza a g6, apoyando el avance de su propio peón.", ventaja: "Rey activo, cerca de la coronación.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Ke4', explain: { idea: "El rey negro sigue avanzando a e4, ganando algo de tiempo en su propio plan.", ventaja: "Rey activo en el otro flanco.", debilidad: "No alcanza a tiempo para detener el plan blanco." } },
      { color: 'w', san: 'Kxh6', explain: { idea: "El rey blanco captura el peón de h6, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón adicional, ampliando la ventaja decisiva en la carrera.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kf5', explain: { idea: "El rey negro avanza a f5, buscando alcanzar al rey blanco.", ventaja: "Único intento razonable de complicar la carrera.", debilidad: "Llega demasiado tarde comparado con la ventaja blanca ya asegurada." } },
      { color: 'w', san: 'Kg7', explain: { idea: "El rey blanco avanza a g7, apoyando la coronación inminente del peón pasado.", ventaja: "Posición completamente ganadora, con el peón a punto de coronar sin oposición real.", debilidad: "Ninguna real -- decide la partida a favor de blancas." } }
    ]
  },
  // ============================================================
  // GRANDES PARTIDAS -- ampliacion con solucion larga, lote 2 de 3 (S6)
  // ============================================================
  {
    id: 'h04-problema-lichess-YzOTj',
    name: 'Cambio de torres que desemboca en una carrera de reyes',
    tema: 'Cambio de torres + carrera de reyes',
    nivel: 5,
    rating: 1924,
    userColor: 'b',
    startFen: '8/8/2k4K/p1r3R1/8/P7/8/8 b - - 0 54',
    overview: "Final de torres y peones real de una partida jugada en Lichess (rating 1924). Tras cambiar las torres, ambos reyes se lanzan a una larga carrera por el flanco de dama.",
    moves: [
      { color: 'b', san: 'Rxg5', explain: { idea: "La torre negra captura la torre blanca de g5, la única captura disponible.", ventaja: "Cambio de torres.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kxg5', explain: { idea: "Única recaptura razonable para blancas.", ventaja: "Recupera la torre cambiada.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kb5', explain: { idea: "El rey negro avanza a b5, iniciando la carrera hacia el flanco de dama.", ventaja: "Rey activo, con ventaja de tiempo en la carrera.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kf4', explain: { idea: "El rey blanco avanza a f4, buscando compensación en el otro extremo.", ventaja: "Único plan razonable disponible.", debilidad: "Pierde la carrera del flanco de dama." } },
      { color: 'b', san: 'Ka4', explain: { idea: "El rey negro sigue avanzando a a4, cada vez más cerca de los peones blancos.", ventaja: "Ventaja clara en la carrera.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Ke3', explain: { idea: "El rey blanco avanza a e3, sin poder alcanzar a tiempo.", ventaja: "Ninguna real que compense la carrera ya perdida.", debilidad: "Llega demasiado tarde." } },
      { color: 'b', san: 'Kxa3', explain: { idea: "El rey negro captura el peón de a3, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón, ampliando la ventaja decisiva en la carrera.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kd2', explain: { idea: "El rey blanco avanza a d2, buscando la mejor defensa posible.", ventaja: "Único intento razonable de resistencia.", debilidad: "No detiene realmente el plan negro de fondo." } },
      { color: 'b', san: 'Kb2', explain: { idea: "El rey negro avanza a b2, con posición completamente ganadora en el final de reyes y peones.", ventaja: "Ventaja decisiva, con el rey mucho más activo y un peón de más.", debilidad: "Ninguna real -- cierra el fragmento con posición ganadora para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-y9ka6',
    name: 'Jaque de alfil que abre paso a ganar un caballo, seguido de un cambio de peones',
    tema: 'Jaque de alfil + ganancia de caballo + cambio de peones',
    nivel: 5,
    rating: 2048,
    userColor: 'b',
    startFen: '2b5/4k3/3p4/3Pp3/2KP4/8/PP2N3/8 b - - 0 55',
    overview: "Posición real de una partida jugada en Lichess (rating 2048). Negras entra con jaque de alfil, gana un caballo suelto, y tras un cambio de peones, el rey negro se centraliza con ventaja.",
    moves: [
      { color: 'b', san: 'Ba6+', explain: { idea: "El alfil negro entra en a6 dando jaque.", ventaja: "Jaque forzado, primer paso de la combinación.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kb4', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "No hace nada por defender el caballo de e2, que sigue expuesto." } },
      { color: 'b', san: 'Bxe2', explain: { idea: "El alfil negro captura el caballo blanco de e2, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza completa.", debilidad: "Ninguna real inmediata." } },
      { color: 'w', san: 'dxe5', explain: { idea: "Blancas captura el peón de e5, la única forma de recuperar algo de material.", ventaja: "Recupera un peón a cambio.", debilidad: "No compensa ni de lejos la pérdida del caballo." } },
      { color: 'b', san: 'dxe5', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera el peón cambiado.", debilidad: "Ninguna real adicional." } },
      { color: 'w', san: 'Kc5', explain: { idea: "El rey blanco avanza a c5, buscando la mejor defensa disponible.", ventaja: "Único intento razonable de resistencia.", debilidad: "No detiene el plan negro de fondo." } },
      { color: 'b', san: 'Kd7', explain: { idea: "El rey negro avanza a d7, consolidando la ventaja material ya conseguida.", ventaja: "Posición sólida con ventaja de una pieza completa.", debilidad: "Ninguna real -- cierra el fragmento con posición ganadora para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-93haP',
    name: 'Cadena de jaques de dama y torre que persigue al rey sin ningún respiro',
    tema: 'Jaques en cadena de dama y torre',
    nivel: 5,
    rating: 2177,
    userColor: 'w',
    startFen: 'k6r/p7/1p6/3rq3/6p1/3R4/2Q4P/1R5K w - - 0 39',
    overview: "Posición real de una partida jugada en Lichess (rating 2177). Blancas encadena una larga serie de jaques de dama y torre, incluyendo un cambio de torre por peón, sin dar ningún respiro al rey negro.",
    moves: [
      { color: 'w', san: 'Qc6+', explain: { idea: "La dama blanca entra en c6 dando jaque.", ventaja: "Jaque forzado, primer paso de la combinación.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kb8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional." } },
      { color: 'w', san: 'Rxb6+', explain: { idea: "La torre blanca captura el peón de b6 dando jaque, ofreciéndose voluntariamente.", ventaja: "Gana un peón y sigue la persecución con jaque.", debilidad: "Entrega la torre -- solo se justifica por lo que viene después." } },
      { color: 'b', san: 'axb6', explain: { idea: "Única forma razonable de responder al jaque: el peón negro captura.", ventaja: "Recupera la torre entregada.", debilidad: "La estructura de peones cerca del rey queda más débil." } },
      { color: 'w', san: 'Qxb6+', explain: { idea: "La dama blanca captura el peón dando jaque, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón adicional con jaque, manteniendo la persecución.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kc8', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "El rey sigue sin ningún refugio real." } },
      { color: 'w', san: 'Qc6+', explain: { idea: "La dama blanca sigue con un nuevo jaque desde c6.", ventaja: "Mantiene la iniciativa completa sin dar tregua.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qc7', explain: { idea: "Negras interpone la dama, la única forma razonable de tapar el jaque.", ventaja: "Detiene el jaque momentáneamente.", debilidad: "No resuelve la presión general sobre el rey." } },
      { color: 'w', san: 'Qa8+', explain: { idea: "La dama blanca entra en a8 dando un nuevo jaque, manteniendo la posición completamente dominante.", ventaja: "Jaque forzado que sigue la persecución con ventaja decisiva ya asegurada.", debilidad: "Ninguna real -- cierra el fragmento con posición ganadora para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-6Mqhd',
    name: 'Cambio de caballos que desencadena una carrera de coronación',
    tema: 'Cambio de piezas + carrera de coronación',
    nivel: 5,
    rating: 2172,
    userColor: 'b',
    startFen: '8/2p5/p2p4/1p2P3/4P1kn/2P2N1p/P1P2K1P/8 b - - 0 45',
    overview: "Posición real de una partida jugada en Lichess (rating 2172). Negras cambia los caballos; blancas empuja un peón hacia la coronación, y el caballo negro remata capturando el peón con jaque.",
    moves: [
      { color: 'b', san: 'Nxf3', explain: { idea: "El caballo negro captura el caballo blanco de f3, la única captura disponible.", ventaja: "Elimina una pieza defensiva clave.", debilidad: "Ninguna real, es un cambio." } },
      { color: 'w', san: 'e6', explain: { idea: "Blancas avanza el peón a e6, buscando crear un peón pasado peligroso.", ventaja: "Peón avanzado, camino a la coronación.", debilidad: "No recupera el caballo cambiado." } },
      { color: 'b', san: 'Ng5', explain: { idea: "El caballo negro se reposiciona a g5, buscando controlar la casilla de coronación.", ventaja: "Pieza bien colocada para frenar el peón.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'e7', explain: { idea: "Blancas avanza el peón a e7, a un solo paso de coronar.", ventaja: "Amenaza convertirse en una nueva dama.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Nxe4+', explain: { idea: "El caballo negro captura el peón de e4 dando jaque, recuperando material mientras mantiene la vigilancia sobre el peón avanzado.", ventaja: "Gana un peón con jaque, sin dejar de controlar la coronación.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Ke2', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional." } },
      { color: 'b', san: 'Nf6', explain: { idea: "El caballo negro se reposiciona a f6, controlando por completo la casilla de coronación del peón blanco.", ventaja: "Neutraliza la amenaza de coronación, quedando con ventaja material y posicional.", debilidad: "Ninguna real -- cierra el fragmento con posición favorable para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-OkL4Y',
    name: 'Avance de peón que prepara un caballo activo que termina ganando una torre',
    tema: 'Avance de peón + caballo activo que gana material',
    nivel: 5,
    rating: 1877,
    userColor: 'b',
    startFen: 'r3qrk1/2p2pp1/ppNb1n1p/5b2/2QPn3/4PN2/PP2BPPP/R1B2RK1 b - - 2 15',
    overview: "Posición real de una partida jugada en Lichess (rating 1877). Negras avanza un peón, reposiciona el caballo, cambia el alfil, y remata capturando una torre suelta con el caballo.",
    moves: [
      { color: 'b', san: 'b5', explain: { idea: "Negras avanza el peón a b5, ganando espacio en el flanco de dama.", ventaja: "Gana espacio.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Qc2', explain: { idea: "La dama blanca se reposiciona a c2, sin ocuparse de la amenaza real que se avecina.", ventaja: "Ninguna real para blancas.", debilidad: "Ninguna adicional." } },
      { color: 'b', san: 'Ng3', explain: { idea: "El caballo negro se traslada a g3, una casilla muy activa cerca del rey blanco.", ventaja: "Pieza extremadamente activa.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Bd3', explain: { idea: "El alfil blanco se traslada a d3, buscando la mejor defensa disponible.", ventaja: "Intenta cubrir casillas clave.", debilidad: "No detiene realmente la amenaza del caballo." } },
      { color: 'b', san: 'Bxd3', explain: { idea: "El alfil negro captura el alfil blanco, la única forma de eliminar esa pieza defensiva.", ventaja: "Elimina una pieza defensiva clave.", debilidad: "Ninguna real, es un cambio." } },
      { color: 'w', san: 'Qxd3', explain: { idea: "Única recaptura razonable para blancas.", ventaja: "Recupera el alfil cambiado.", debilidad: "La torre de f1 se queda sin ninguna defensa adicional." } },
      { color: 'b', san: 'Nxf1', explain: { idea: "El caballo negro captura la torre blanca de f1, que se había quedado sin ninguna defensa.", ventaja: "Gana una torre completa, cerrando la combinación con ventaja material decisiva.", debilidad: "Ninguna, cierra la combinación." } }
    ]
  },
  {
    id: 'h04-problema-lichess-4eWUa',
    name: 'Cambio de alfil por torre que desencadena una serie de reposicionamientos',
    tema: 'Cambio de alfil por torre + reposicionamientos',
    nivel: 5,
    rating: 2173,
    userColor: 'w',
    startFen: '1R2B3/rR3pkp/4p1p1/3pP3/4nP2/6PK/7P/r7 w - - 10 45',
    overview: "Posición real de una partida jugada en Lichess (rating 2173). Blancas cambia el alfil por un peón y una torre, reposiciona la propia torre, y remata capturando otro peón con el alfil restante.",
    moves: [
      { color: 'w', san: 'Bxf7', explain: { idea: "El alfil blanco captura el peón de f7, la única captura disponible.", ventaja: "Gana un peón.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Rxb7', explain: { idea: "La torre negra captura el alfil, la única forma de recuperar algo de material.", ventaja: "Recupera un alfil a cambio.", debilidad: "La torre queda en una casilla que la segunda torre blanca puede recapturar directamente." } },
      { color: 'w', san: 'Rxb7', explain: { idea: "La torre blanca recaptura, cerrando el cambio con posición equilibrada.", ventaja: "Balance material sólido tras el cambio.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Nc5', explain: { idea: "Negras reposiciona el caballo a c5, buscando la mejor actividad posible.", ventaja: "Pieza más activa.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Rc7', explain: { idea: "La torre blanca se reagrupa a c7, presionando la séptima fila.", ventaja: "Torre muy activa, con iniciativa clara.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kf8', explain: { idea: "El rey negro se traslada a f8, buscando la mejor defensa disponible.", ventaja: "Único intento razonable de consolidar la posición.", debilidad: "No detiene realmente la iniciativa blanca." } },
      { color: 'w', san: 'Bxg6', explain: { idea: "El segundo alfil blanco captura el peón de g6, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón adicional, ampliando la ventaja ya conseguida.", debilidad: "Ninguna real, cierra el fragmento con posición favorable para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-4jKJU',
    name: 'Cadena de maniobras de caballo y alfil que termina en jaque',
    tema: 'Maniobra de caballo y alfil en el final',
    nivel: 5,
    rating: 2009,
    userColor: 'w',
    startFen: 'r2r4/ppk2pbp/2pn1np1/4p3/5B2/1PN2P1P/P4PB1/2RR2K1 w - - 0 17',
    overview: "Final de piezas menores real de una partida jugada en Lichess (rating 2009). Blancas gana un peón, maniobra el caballo con jaque, cambia por un alfil, y remata con un nuevo jaque de caballo.",
    moves: [
      { color: 'w', san: 'Bxe5', explain: { idea: "El alfil blanco captura el peón de e5, que se había quedado sin ninguna defensa.", ventaja: "Gana un peón limpio.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Ne8', explain: { idea: "El caballo negro se retira a e8, buscando la mejor defensa disponible.", ventaja: "Único intento razonable de resistencia.", debilidad: "No recupera nada del material ya perdido." } },
      { color: 'w', san: 'Nb5+', explain: { idea: "El caballo blanco entra en b5 dando jaque.", ventaja: "Jaque forzado que mantiene la iniciativa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Kb6', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional." } },
      { color: 'w', san: 'Nxd6', explain: { idea: "El caballo blanco captura el caballo negro de d6, que se había quedado sin ninguna defensa.", ventaja: "Gana una pieza adicional.", debilidad: "El caballo queda en una casilla que el alfil negro puede recapturar directamente." } },
      { color: 'b', san: 'Bxe5', explain: { idea: "El alfil negro recaptura, la única forma de recuperar algo de material.", ventaja: "Recupera el caballo a cambio.", debilidad: "Ninguna real adicional." } },
      { color: 'w', san: 'Nc4+', explain: { idea: "El caballo blanco entra en c4 dando jaque, manteniendo la ventaja material ya conseguida (un peón de más).", ventaja: "Jaque forzado que sigue la iniciativa con ventaja decisiva.", debilidad: "Ninguna real -- cierra el fragmento con posición favorable para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-czYrX',
    name: 'Cambio de alfiles que desencadena una carrera de peones hasta la coronación',
    tema: 'Cambio de alfiles + carrera de coronación',
    nivel: 5,
    rating: 1806,
    userColor: 'b',
    startFen: '8/8/8/7p/4KN2/5P1k/8/2b5 b - - 0 48',
    overview: "Final de reyes y peones real de una partida jugada en Lichess (rating 1806). Tras cambiar los alfiles, ambos bandos se lanzan a una larga carrera de peones que termina con negras coronando primero.",
    moves: [
      { color: 'b', san: 'Bxf4', explain: { idea: "El alfil negro captura el alfil blanco de f4, la única captura disponible.", ventaja: "Cambio de alfiles.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kxf4', explain: { idea: "Única recaptura razonable para blancas.", ventaja: "Recupera el alfil cambiado.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'h4', explain: { idea: "Negras avanza el peón a h4, iniciando la carrera hacia la coronación.", ventaja: "Peón pasado avanzando sin oposición directa.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Kg5', explain: { idea: "El rey blanco avanza a g5, buscando frenar el avance del peón negro.", ventaja: "Único intento razonable de defensa.", debilidad: "No consigue detener realmente el plan negro de fondo." } },
      { color: 'b', san: 'Kg3', explain: { idea: "El rey negro avanza a g3, apoyando el avance de su propio peón.", ventaja: "Rey activo, protegiendo la coronación.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'f4', explain: { idea: "Blancas avanza su propio peón a f4, buscando crear su propia amenaza equivalente.", ventaja: "Intenta igualar la carrera.", debilidad: "Sigue siendo más lento que el peón negro, ya muy avanzado." } },
      { color: 'b', san: 'h3', explain: { idea: "Negras sigue avanzando el peón a h3, cada vez más cerca de la coronación.", ventaja: "Ventaja clara en la carrera.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'f5', explain: { idea: "Blancas avanza el peón a f5, el único intento razonable de mantener alguna esperanza.", ventaja: "Sigue con su propio plan de avance.", debilidad: "Llega demasiado tarde comparado con la ventaja negra." } },
      { color: 'b', san: 'h2', explain: { idea: "Negras avanza el peón a h2, a un solo paso de coronar.", ventaja: "Corona en la jugada siguiente sin ninguna oposición.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'f6', explain: { idea: "Blancas avanza el último peón a f6, el único recurso que le queda.", ventaja: "Ninguna real que cambie el resultado ya decidido.", debilidad: "Llega demasiado tarde." } },
      { color: 'b', san: 'h1=Q', explain: { idea: "El peón negro corona en h1, convirtiéndose en una nueva dama y decidiendo la partida.", ventaja: "Nueva dama sobre el tablero, con ventaja decisiva asegurada.", debilidad: "Ninguna real -- cierra el fragmento con posición ganadora para negras." } }
    ]
  },
  {
    id: 'h04-problema-lichess-reGLA',
    name: 'Serie de cambios de piezas mayores en la primera fila',
    tema: 'Serie de cambios de piezas mayores',
    nivel: 5,
    rating: 1927,
    userColor: 'b',
    startFen: '4r2k/ppb3p1/5p2/3p4/3P2bN/2P1q1P1/PPQ4P/R3R2K b - - 1 34',
    overview: "Posición real de una partida jugada en Lichess (rating 1927). Una cadena de seis capturas en la primera fila termina con negras recuperando material tras el cambio general de piezas.",
    moves: [
      { color: 'b', san: 'Qxe1+', explain: { idea: "La dama negra captura la torre blanca de e1 dando jaque, ofreciéndose al cambio.", ventaja: "Gana una torre y fuerza la recaptura.", debilidad: "Entrega la dama -- solo se justifica por lo que viene después." } },
      { color: 'w', san: 'Rxe1', explain: { idea: "Única forma razonable de responder al jaque: la torre blanca recaptura.", ventaja: "Recupera la dama a cambio de la torre.", debilidad: "La torre blanca queda en una casilla que la torre negra puede recapturar directamente." } },
      { color: 'b', san: 'Rxe1+', explain: { idea: "La torre negra recaptura dando jaque, la única forma razonable.", ventaja: "Recupera la torre cambiada con jaque.", debilidad: "Ninguna real adicional." } },
      { color: 'w', san: 'Kg2', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional." } },
      { color: 'b', san: 'Re2+', explain: { idea: "La torre negra entra en e2 dando un segundo jaque.", ventaja: "Jaque forzado que mantiene la iniciativa.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Qxe2', explain: { idea: "La dama blanca captura la torre, la única forma razonable de responder al jaque.", ventaja: "Elimina la torre que daba jaque.", debilidad: "La dama queda en una casilla que el alfil negro puede recapturar directamente." } },
      { color: 'b', san: 'Bxe2', explain: { idea: "El alfil negro recaptura, cerrando la serie de cambios con posición equilibrada tras todos los intercambios.", ventaja: "Balance material sólido tras la larga secuencia de cambios.", debilidad: "Ninguna real." } }
    ]
  },
  {
    id: 'h04-problema-lichess-KYQvh',
    name: 'Avance de peón que abre camino a un cambio de torres y un jaque de dama',
    tema: 'Avance de peón + cambio de torres + jaque de dama',
    nivel: 5,
    rating: 2154,
    userColor: 'w',
    startFen: '2r1r3/1p3k2/p1bp2p1/3N1pq1/2P5/1PQ3PP/P5BK/4R3 w - - 4 28',
    overview: "Posición real de una partida jugada en Lichess (rating 2154). Blancas avanza un peón, cambia las torres, reposiciona la dama, y remata con un jaque que mantiene la iniciativa.",
    moves: [
      { color: 'w', san: 'h4', explain: { idea: "El peón blanco avanza a h4, ganando espacio en el flanco de rey.", ventaja: "Gana espacio y prepara el ataque.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Qd8', explain: { idea: "La dama negra se reposiciona a d8, buscando la mejor defensa disponible.", ventaja: "Intenta reforzar la posición.", debilidad: "No detiene realmente el plan blanco de fondo." } },
      { color: 'w', san: 'Rxe8', explain: { idea: "La torre blanca captura la torre negra de e8, la única captura disponible.", ventaja: "Cambio de torres.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Bxe8', explain: { idea: "Única recaptura razonable para negras.", ventaja: "Recupera la torre cambiada.", debilidad: "Ninguna real." } },
      { color: 'w', san: 'Qh8', explain: { idea: "La dama blanca entra en h8, muy cerca del rey negro.", ventaja: "Pieza extremadamente activa.", debilidad: "Ninguna real." } },
      { color: 'b', san: 'Bc6', explain: { idea: "El alfil negro se reposiciona a c6, buscando la mejor defensa disponible.", ventaja: "Intenta cubrir casillas clave.", debilidad: "No detiene realmente la amenaza blanca." } },
      { color: 'w', san: 'Qh7+', explain: { idea: "La dama blanca entra en h7 dando jaque, manteniendo toda la iniciativa del ataque.", ventaja: "Jaque forzado que sigue la presión decisiva sobre el rey negro.", debilidad: "Ninguna real -- cierra el fragmento con posición ganadora para blancas." } }
    ]
  },
  {
    id: 'h04-problema-lichess-Si7iV',
    name: 'Sacrificio de torre y caballo que desencadena una serie de cambios en el flanco de rey',
    tema: 'Doble sacrificio + serie de cambios',
    nivel: 5,
    rating: 2075,
    userColor: 'b',
    startFen: '4r1k1/pR4p1/2p3qp/4n3/P1P4P/4P3/1B2Q1P1/5K2 b - - 0 33',
    overview: "Posición real de una partida jugada en Lichess (rating 2075). Negras entra con jaque de torre, sacrifica el caballo con jaque, y una cadena de cambios termina con la dama recapturando en una posición equilibrada.",
    moves: [
      { color: 'b', san: 'Rf8+', explain: { idea: "La torre negra entra en f8 dando jaque, ofreciéndose voluntariamente.", ventaja: "Fuerza al rey a la única casilla posible.", debilidad: "Entrega la torre -- solo se justifica por lo que viene después." } },
      { color: 'w', san: 'Kg1', explain: { idea: "Única casilla razonable para salir del jaque.", ventaja: "Ninguna real.", debilidad: "Ninguna adicional." } },
      { color: 'b', san: 'Nf3+', explain: { idea: "El caballo negro entra en f3 dando jaque, ofreciéndose también.", ventaja: "Jaque forzado que sigue la combinación.", debilidad: "Entrega el caballo -- solo se justifica por lo que sigue." } },
      { color: 'w', san: 'Qxf3', explain: { idea: "Única forma razonable de responder al jaque: la dama captura el caballo.", ventaja: "Recupera el caballo entregado.", debilidad: "La dama blanca queda en una casilla que la torre negra puede recapturar directamente." } },
      { color: 'b', san: 'Rxf3', explain: { idea: "La torre negra recaptura, la única forma razonable.", ventaja: "Recupera la dama a cambio de la torre.", debilidad: "La torre queda en una casilla que la segunda torre blanca puede recapturar directamente." } },
      { color: 'w', san: 'Rxg7+', explain: { idea: "La torre blanca captura el peón de g7 dando jaque, buscando recuperar algo de material.", ventaja: "Gana un peón con jaque.", debilidad: "La torre queda en una casilla que la dama negra puede recapturar directamente." } },
      { color: 'b', san: 'Qxg7', explain: { idea: "La dama negra recaptura, cerrando la serie de cambios con posición equilibrada tras todos los sacrificios.", ventaja: "Balance material sólido tras la larga secuencia de intercambios.", debilidad: "Ninguna real." } }
    ]
  },
]
