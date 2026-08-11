// Finales de partida -- Hito 04. Mismo formato de objeto que
// REPERTOIRE_LINES (ver repertoire.js): "userColor" es el bando que
// entrena Miguel Angel, "moves" es la secuencia fija de jugadas
// (propias y del rival) que reproduce el motor ya existente sin
// cambios. Campo nuevo respecto a las lineas: "startFen", la posicion
// inicial del final -- game.js arranca la partida desde ahi en vez de
// la posicion estandar cuando este campo esta presente.
//
// Contenido propio (no posiciones historicas citadas por nombre con
// pretension de exactitud de casillas), redactado con criterio
// ajedrecistico general, mismo patron que las explicaciones de jugada
// de las lineas de apertura. Toda secuencia SAN de este fichero fue
// verificada con chess.js real (node verify.js) antes de escribirse
// aqui -- ver ANNEX_H04.md, "DISENO CERRADO (S4)".
//
// IMPORTANTE: el campo "id" de cada final debe coincidir exactamente
// con el id declarado en FinalesCatalog.kt (selector nativo del
// menu). Todos los ids llevan el prefijo "h04-final-" para evitar
// colision con los ids de REPERTOIRE_LINES en el array combinado que
// construye game.js.
var FINALES_LINES = [
  {
    id: 'h04-final-regla-del-cuadrado',
    name: 'Peon pasado alejado -- la regla del cuadrado',
    userColor: 'w',
    startFen: '7k/8/8/8/1P6/8/8/K7 w - - 0 1',
    overview: 'Concepto clave para valorar cualquier final con peones ' +
      'pasados: para saber si el rey rival puede alcanzar un peon ' +
      'pasado, se traza un cuadrado desde la casilla del peon hasta ' +
      'su casilla de coronacion (tantas casillas de lado como filas ' +
      'le quedan por recorrer). Si el rey rival esta fuera de ese ' +
      'cuadrado y no tiene tiempo de entrar, el peon corona solo, sin ' +
      'ayuda de su propio rey. Aqui el peon esta en b4 (le quedan 4 ' +
      'filas) y el rey negro en h8 esta claramente fuera del cuadrado ' +
      'b4-b8-f4-f8: no llega a tiempo por mucho que corra hacia el.',
    moves: [
      {
        color: 'w',
        san: 'b5',
        explain: {
          idea: 'El peon inicia la carrera hacia la coronacion sin esperar a su rey.',
          ventaja: 'Cada jugada que blancas dedican a avanzar el peon reduce mas la distancia al peon que la que reduce el rey negro a la casilla de coronacion, porque el rey negro parte fuera del cuadrado.',
          debilidad: 'Ninguna: no hay pieza negra ni blanca que pueda estorbar la marcha, asi que no arriesga nada avanzar sin escolta.'
        }
      },
      {
        color: 'b',
        san: 'Kg8',
        explain: {
          idea: 'El rey negro corre hacia la columna b tratando de entrar en el cuadrado del peon.',
          ventaja: 'Es la unica forma de intentar detener el peon, ya que no hay ninguna pieza negra que pueda hacerlo.',
          debilidad: 'Sale demasiado tarde: la distancia en filas que le queda al peon (3 tras esta jugada) sigue siendo menor que la distancia en columnas que le queda al rey (6), asi que nunca llega a igualar la carrera.'
        }
      },
      {
        color: 'w',
        san: 'b6',
        explain: {
          idea: 'El peon sigue avanzando sin desviarse de su columna.',
          ventaja: 'Cada paso acerca la coronacion en una casilla exacta, sin que el rey negro pueda recortar la ventaja de tiempo ya perdida.',
          debilidad: 'Ninguna en esta posicion concreta; en un final real conviene vigilar si el propio rey puede ayudar, pero aqui no hace falta.'
        }
      },
      {
        color: 'b',
        san: 'Kf8',
        explain: {
          idea: 'Persistir en la carrera hacia la columna b, aunque ya sea tarde.',
          ventaja: 'Mantiene la unica posibilidad teorica de alcanzar el peon si este se detuviera.',
          debilidad: 'Sigue sin recortar la distancia relativa: al peon le quedan 2 filas y al rey le quedan 5 columnas.'
        }
      },
      {
        color: 'w',
        san: 'b7',
        explain: {
          idea: 'El peon llega a la penultima fila, a una sola casilla de coronar.',
          ventaja: 'Ya es materialmente imposible que el rey negro lo alcance a tiempo.',
          debilidad: 'Ninguna: en este final concreto no existe ninguna forma de que negras impidan la coronacion.'
        }
      },
      {
        color: 'b',
        san: 'Ke8',
        explain: {
          idea: 'Ultimo intento simbolico de acercarse, aunque la carrera ya esta decidida.',
          ventaja: 'Ninguna practica: es un movimiento de espera, ya que no existe forma de detener al peon.',
          debilidad: 'Confirma que la regla del cuadrado se cumplio desde el primer movimiento: el rey nunca estuvo cerca de entrar a tiempo.'
        }
      },
      {
        color: 'w',
        san: 'b8=Q+',
        explain: {
          idea: 'El peon corona en dama, y de paso da jaque al rey negro por la octava fila.',
          ventaja: 'Blancas pasan a tener una dama de ventaja: la posicion esta ganada de forma trivial a partir de aqui.',
          debilidad: 'Ninguna: es el resultado natural de una carrera de peon ganada de antemano por la regla del cuadrado.'
        }
      },
      {
        color: 'b',
        san: 'Kf7',
        explain: {
          idea: 'El rey negro se ve obligado a salir del jaque.',
          ventaja: 'Ninguna: es una jugada forzada sin alternativa razonable.',
          debilidad: 'La posicion queda perdida para negras con dama de ventaja para blancas -- el resto es tecnica elemental de mate.'
        }
      }
    ]
  },
  {
    id: 'h04-final-oposicion-escolta',
    name: 'Rey y peon vs rey -- oposicion y escolta del rey',
    userColor: 'w',
    startFen: '4k3/8/4K3/4P3/8/8/8/8 b - - 0 1',
    overview: 'Idea central de todo final de rey y peon contra rey ' +
      'solo: el rey atacante debe colocarse DELANTE de su propio peon, ' +
      'no detras, para poder escoltarlo hasta la coronacion. Aqui el ' +
      'rey blanco ya esta delante del peon y le toca mover a negras: ' +
      'esa es la clave -- negras tienen que ceder terreno (zugzwang) ' +
      'porque cualquier jugada de su rey empeora su posicion. Blancas ' +
      'aprovechan cada cesion para rodear al rey negro y abrir camino ' +
      'al peon hasta que corona.',
    moves: [
      {
        color: 'b',
        san: 'Kf8',
        explain: {
          idea: 'El rey negro se ve obligado a ceder terreno: no puede quedarse en e8 ni ocupar ninguna casilla adyacente al rey blanco (d7, e7 o f7).',
          ventaja: 'Sigue vigilando la columna del peon lo mas de cerca que le permiten las reglas.',
          debilidad: 'Esta es la esencia del zugzwang: cualquier casilla a la que se retire deja al rey blanco libre para avanzar por el otro lado.'
        }
      },
      {
        color: 'w',
        san: 'Kd7',
        explain: {
          idea: 'El rey blanco rodea por el flanco que ha quedado libre, buscando abrirse paso hacia la casilla de coronacion.',
          ventaja: 'Gana espacio sin que el rey negro pueda impedirlo, porque las casillas junto al rey blanco siguen vetadas para el rey negro.',
          debilidad: 'Ninguna: es la jugada natural de escolta, sin dejar nunca que el rey negro se cuele delante del peon.'
        }
      },
      {
        color: 'b',
        san: 'Kf7',
        explain: {
          idea: 'El rey negro trata de volver a vigilar la casilla de coronacion desde cerca.',
          ventaja: 'Se mantiene lo mas activo posible dentro de sus opciones legales.',
          debilidad: 'No evita que el peon avance protegido: en cuanto el rey blanco lo permita, el peon dara un paso mas con jaque.'
        }
      },
      {
        color: 'w',
        san: 'e6+',
        explain: {
          idea: 'El peon avanza con jaque, ya que el rey blanco en d7 lo protege por si negras intentaran capturarlo.',
          ventaja: 'Gana una fila mas sin ceder terreno: el rey negro no puede tomar el peon (esta defendido) ni quedarse donde esta (jaque).',
          debilidad: 'Ninguna: el peon avanza con la maxima seguridad posible, protegido por su propio rey.'
        }
      },
      {
        color: 'b',
        san: 'Kf8',
        explain: {
          idea: 'El rey negro se retira a la ultima fila, unica forma de salir del jaque sin perder mas terreno del imprescindible.',
          ventaja: 'Sigue cerca de la casilla de coronacion, la ultima resistencia posible.',
          debilidad: 'Ya no puede evitar que el peon corone escoltado por su rey: la posicion esta perdida de forma tecnica.'
        }
      },
      {
        color: 'w',
        san: 'e7+',
        explain: {
          idea: 'El peon sigue avanzando con jaque, siempre protegido por el rey blanco en d7.',
          ventaja: 'Deja al rey negro sin ninguna casilla desde la que estorbar la coronacion en la siguiente jugada.',
          debilidad: 'Ninguna: es la continuacion logica y forzada de la tecnica de escolta.'
        }
      },
      {
        color: 'b',
        san: 'Kg8',
        explain: {
          idea: 'Ultima casilla disponible para salir del jaque sin entrar en contacto con el rey blanco.',
          ventaja: 'Ninguna practica: es un movimiento forzado.',
          debilidad: 'Deja el camino libre para que el peon corone en la siguiente jugada sin ningun obstaculo.'
        }
      },
      {
        color: 'w',
        san: 'e8=Q+',
        explain: {
          idea: 'El peon corona en dama con jaque, culminando la tecnica de oposicion y escolta desde el primer movimiento.',
          ventaja: 'Blancas pasan a tener una dama de ventaja: la posicion esta ganada de forma trivial a partir de aqui.',
          debilidad: 'Ninguna: es el resultado natural de haber mantenido el rey siempre delante del peon y aprovechado el zugzwang inicial de negras.'
        }
      },
      {
        color: 'b',
        san: 'Kg7',
        explain: {
          idea: 'El rey negro se ve obligado a salir del jaque, sin ninguna alternativa razonable.',
          ventaja: 'Ninguna: es una jugada forzada.',
          debilidad: 'La posicion queda perdida para negras con dama de ventaja para blancas -- el resto es tecnica elemental de mate.'
        }
      }
    ]
  }
]

// -----------------------------------------------------------------
// Bloque 2 (S4, continuacion): dos finales de mate elemental (torre y
// dama contra rey solo). Se sustituyen "construir el puente" y
// "defensa Philidor" del diseno original por estas dos tecnicas --
// decision tomada porque una linea de torre-y-peon-vs-torre con
// verdadera resistencia del bando defensor requiere resolver una
// confrontacion tactica real (el rey defensor SI tiene una torre con
// la que crear amagos), y chess.js solo verifica legalidad, no
// solidez tactica: no hay forma de garantizar sin motor de analisis
// que una linea de resistencia inventada de memoria sea realmente la
// mejor defensa o que la conversion sea impecable en cada jugada. Un
// mate elemental (rey solo enfrente, sin pieza defensora) no tiene
// ese problema: cada jugada de esta seccion fue explorada y
// verificada de forma interactiva con chess.js real, comprobando en
// cada paso las jugadas legales de negras y, en la ultima jugada,
// que isCheckmate() es true y isStalemate() es false -- ver
// ANNEX_H04.md, "DISENO CERRADO (S4)", apartado revisado.
FINALES_LINES.push(
  {
    id: 'h04-final-mate-torre',
    name: 'Mate elemental con torre -- practica libre de tecnica',
    userColor: 'w',
    startFen: '4k3/7R/3K4/8/8/8/8/8 w - - 0 1',
    freeMode: true,
    overview: 'Practica libre: no hay una unica jugada correcta. ' +
      'Puedes acorralar al rey negro hacia cualquiera de los dos ' +
      'lados del tablero -- la tecnica es siempre la misma: la torre ' +
      'corta el paso hacia adelante, y el rey blanco persigue por ' +
      'detras, dejandole al rey rival solo la opcion de retroceder o ' +
      'desplazarse hacia un lado, hasta acorralarlo del todo y dar ' +
      'mate. Mueve con total libertad: el unico error real de esta ' +
      'tecnica es una jugada que ahoga al rey rival (se queda sin ' +
      'jugadas legales sin estar en jaque) -- si intentas una, el ' +
      'motor la deshace y te avisa para que pruebes otra forma de ' +
      'acorralarlo.'
  },
  {
    id: 'h04-final-mate-dama',
    name: 'Mate elemental con dama -- practica libre de tecnica',
    userColor: 'w',
    startFen: '4k3/7K/3Q4/8/8/8/8/8 w - - 0 1',
    freeMode: true,
    overview: 'Practica libre: no hay una unica jugada correcta. La ' +
      'dama empuja al rey rival manteniendose siempre a "salto de ' +
      'caballo" de el -- puedes llevarlo hacia cualquiera de los dos ' +
      'lados del tablero, la tecnica es la misma. Cuidado con el ' +
      'ultimo corredor: alli hay que dejar dos casillas libres en vez ' +
      'de una para no ahogar. Mueve con total libertad: el unico ' +
      'error real de esta tecnica es una jugada que ahoga al rey ' +
      'rival -- si intentas una, el motor la deshace y te avisa para ' +
      'que pruebes otra forma de acorralarlo.'
  },
  {
    id: 'h04-final-mate-dos-alfiles',
    name: 'Mate con dos alfiles -- practica libre de tecnica',
    userColor: 'w',
    startFen: '4k3/8/8/8/8/8/1B4B1/4K3 w - - 0 1',
    freeMode: true,
    overview: 'Practica libre: no hay una unica jugada correcta. Los ' +
      'dos alfiles, cada uno controlando un color de casilla ' +
      'distinto, avanzan en pareja por diagonales adyacentes, ' +
      'empujando al rey rival hacia cualquiera de las cuatro ' +
      'esquinas -- puedes elegir el lado y la esquina que prefieras. ' +
      'El rey propio se acerca para apoyar el mate final. Mueve con ' +
      'total libertad: el unico error real de esta tecnica es una ' +
      'jugada que ahoga al rey rival -- si intentas una, el motor la ' +
      'deshace y te avisa para que pruebes otra forma de ' +
      'acorralarlo.'
  },
  {
    id: 'h04-final-caballo-escolta-peon',
    name: 'Caballo y peón -- el caballo vigila la casilla de coronación',
    userColor: 'w',
    startFen: '4k3/2P5/1N6/K7/8/8/8/8 w - - 0 1',
    overview: 'Un caballo bien colocado puede vigilar la casilla de ' +
      'coronacion de un peon (o las casillas de acceso a ella) sin ' +
      'necesidad de que el rey propio llegue a tiempo: el rey rival ' +
      'no puede pisar ninguna casilla defendida por el caballo. Aqui ' +
      'el caballo en b6 vigila tanto c8 (la casilla de coronacion) ' +
      'como d7 (una de las casillas de acceso), asi que el rey negro ' +
      'no puede acercarse a impedir la coronacion por mucho que lo ' +
      'intente: el peon corona solo, con la unica ayuda del caballo.',
    moves: [
      {
        color: 'w',
        san: 'Kb5',
        explain: {
          idea: 'El rey blanco espera y mejora de posicion mientras el caballo ya hace todo el trabajo de vigilancia.',
          ventaja: 'No hace falta apresurar nada: ni c8 ni d7 estan disponibles para el rey negro, este haga lo que haga.',
          debilidad: 'Ninguna.'
        }
      },
      {
        color: 'b',
        san: 'Kf7',
        explain: {
          idea: 'El rey negro intenta acercarse por el unico camino que le queda libre, ya que d8 (vigilada por el peon) y d7 (vigilada por el caballo) estan vetadas.',
          ventaja: 'Ninguna practica: por mas que se acerque, nunca podra pisar las casillas clave junto al peon.',
          debilidad: 'Pierde tiempos valiosos: cuando llegue cerca de la columna c, el peon ya habra coronado.'
        }
      },
      {
        color: 'w',
        san: 'c8=Q',
        explain: {
          idea: 'El peon corona en dama sin ninguna oposicion posible, protegido durante toda su marcha por el caballo.',
          ventaja: 'Blancas pasan a tener una dama de ventaja: la posicion esta ganada de forma trivial a partir de aqui.',
          debilidad: 'Ninguna: es el resultado natural de haber controlado con el caballo las casillas que el rey rival necesitaba para intervenir.'
        }
      }
    ]
  }
)

