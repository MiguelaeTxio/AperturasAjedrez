// Problemas tacticos -- Hito 04. Mismo formato de objeto que
// REPERTOIRE_LINES/FINALES_LINES: "userColor" es el bando que
// entrena Miguel Angel, "moves" es la secuencia fija de la solucion
// (propias y del rival) que reproduce el motor ya existente sin
// cambios -- ver ANNEX_H04.md, "DISENO CERRADO (S4)". Campo nuevo
// respecto a lineas y finales: "tema", la clasificacion tactica del
// problema (horquilla, clavada, etc.), usada solo para mostrar/
// clasificar en el selector nativo (ProblemasCatalog.kt).
//
// Contenido propio, redactado con criterio ajedrecistico general.
// Toda secuencia SAN de este fichero fue verificada con chess.js real
// (node verify.js, o exploracion interactiva jugada a jugada cuando
// habia una pieza defensora rival con posible contrajuego) antes de
// escribirse aqui -- misma disciplina aplicada a los finales de esta
// sesion.
//
// IMPORTANTE: el campo "id" de cada problema debe coincidir
// exactamente con el id declarado en ProblemasCatalog.kt (selector
// nativo del menu). Todos los ids llevan el prefijo "h04-problema-"
// para evitar colision en el array combinado que construye game.js.
var PROBLEMAS_LINES = [
  {
    id: 'h04-problema-horquilla-caballo',
    name: 'Horquilla de caballo',
    tema: 'Horquilla',
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
    id: 'h04-problema-clavada-caballo',
    name: 'Clavada absoluta',
    tema: 'Clavada',
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
    id: 'h04-problema-desviacion-dama',
    name: 'Desviación de la dama defensora',
    tema: 'Desviación',
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
    id: 'h04-problema-atraccion-peon',
    name: 'Atracción del rey a una casilla forcada',
    tema: 'Atracción',
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
    id: 'h04-problema-doble-ataque-torre',
    name: 'Doble ataque de torre',
    tema: 'Doble ataque de torre',
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
  {
    id: 'h04-problema-mate-en-1',
    name: 'Mate en 1: la fila trasera',
    tema: 'Mate en 1',
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
  {
    id: 'h04-problema-mate-en-2',
    name: 'Mate en 2: la última casilla',
    tema: 'Mate en 2',
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
  {
    id: 'h04-problema-sobrecarga-torre',
    name: 'Sobrecarga de la torre defensora',
    tema: 'Sobrecarga',
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
    id: 'h04-problema-subpromocion-caballo',
    name: 'Subpromoción a caballo con jaque',
    tema: 'Promoción forzada',
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
