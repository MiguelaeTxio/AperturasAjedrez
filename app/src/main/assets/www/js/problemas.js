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
  }
]
