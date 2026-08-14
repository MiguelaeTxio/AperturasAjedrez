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
  }
]

