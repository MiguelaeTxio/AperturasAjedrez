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
]
