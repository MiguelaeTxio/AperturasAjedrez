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
    name: 'Mate elemental con torre -- la tecnica de la caja',
    userColor: 'w',
    startFen: '4k3/7R/3K4/8/8/8/8/8 w - - 0 1',
    overview: 'Tecnica basica que hay que dominar antes que cualquier ' +
      'otro final con torre: dar mate con rey y torre contra rey ' +
      'solo. La torre encierra al rey rival en una franja del ' +
      'tablero (aqui ya esta confinado a la octava fila) mientras el ' +
      'rey propio se acerca tomando siempre la oposicion directa ' +
      '(misma columna, dos filas de distancia) para birlarle al rey ' +
      'rival las casillas de la septima fila. Cuando el rey rival ' +
      'queda arrinconado, la torre da jaque mate en la misma fila en ' +
      'la que esta encerrado.',
    moves: [
      {
        color: 'w',
        san: 'Ke6',
        explain: {
          idea: 'El rey blanco avanza a tomar la oposicion directa con el rey negro (misma columna, dos filas de distancia).',
          ventaja: 'Con la oposicion, el rey negro no puede ocupar ninguna casilla de la septima fila cercana: la torre ya cubre toda esa fila y el rey blanco refuerza justo las casillas centrales.',
          debilidad: 'Ninguna: es la jugada tipica de acercamiento, sin ningun riesgo porque el rey negro esta solo.'
        }
      },
      {
        color: 'b',
        san: 'Kd8',
        explain: {
          idea: 'El rey negro se ve obligado a desplazarse lateralmente por la octava fila: no puede bajar a la septima (la torre la controla entera) ni quedarse enfrente del rey blanco.',
          ventaja: 'Ninguna practica: es la unica forma de no quedarse sin jugadas legales.',
          debilidad: 'Cada vez que el rey negro se desplaza lateralmente, el rey blanco puede perseguirlo retomando la oposicion en la nueva columna.'
        }
      },
      {
        color: 'w',
        san: 'Rh8+',
        explain: {
          idea: 'La torre da jaque por la octava fila, empujando al rey negro hacia el lado donde el rey blanco tiene mas control.',
          ventaja: 'Reduce las casillas disponibles del rey negro en la octava fila a una sola direccion.',
          debilidad: 'Momentaneo: la torre deja de cubrir la septima fila mientras esta en la octava, pero el rey blanco ya cubre las casillas relevantes junto al rey negro.'
        }
      },
      {
        color: 'b',
        san: 'Kc7',
        explain: {
          idea: 'Unica casilla legal: las demas estan cubiertas por el jaque de la torre o por el rey blanco.',
          ventaja: 'Ninguna: jugada totalmente forzada.',
          debilidad: 'El rey negro se aleja del centro, facilitando que el rey blanco lo siga acorralando hacia una esquina.'
        }
      },
      {
        color: 'w',
        san: 'Kd5',
        explain: {
          idea: 'El rey blanco avanza en diagonal, acercandose sin perder el control de la zona central.',
          ventaja: 'Prepara retomar la oposicion directa en la columna donde se encuentre el rey negro.',
          debilidad: 'Ninguna: acercamiento tipico sin riesgo alguno frente a un rey solo.'
        }
      },
      {
        color: 'b',
        san: 'Kd7',
        explain: {
          idea: 'El rey negro vuelve hacia el centro, buscando la maxima libertad posible.',
          ventaja: 'Recupera algo de espacio frente a la esquina.',
          debilidad: 'Se coloca justo en la columna del rey blanco, cediendole la oposicion directa en la siguiente jugada.'
        }
      },
      {
        color: 'w',
        san: 'Rh7+',
        explain: {
          idea: 'Con la oposicion ya lograda (misma columna, dos filas), la torre da jaque para empujar al rey negro de vuelta a la octava fila.',
          ventaja: 'El rey blanco, en oposicion directa, cubre las tres casillas de la septima fila adyacentes: el rey negro no tiene mas remedio que retroceder.',
          debilidad: 'Ninguna: es exactamente el mecanismo que hace avanzar la tecnica.'
        }
      },
      {
        color: 'b',
        san: 'Kd8',
        explain: {
          idea: 'Vuelta forzada a la octava fila: las tres casillas de la septima estan cubiertas por el rey blanco.',
          ventaja: 'Ninguna: jugada obligada.',
          debilidad: 'El rey negro sigue perdiendo terreno fila a fila.'
        }
      },
      {
        color: 'w',
        san: 'Kd6',
        explain: {
          idea: 'El rey blanco ocupa la oposicion directa exactamente delante del rey negro, ya en la propia octava fila menos dos.',
          ventaja: 'Deja al rey negro sin ninguna casilla en la septima fila cercana y lo obliga a moverse lateralmente otra vez.',
          debilidad: 'Ninguna.'
        }
      },
      {
        color: 'b',
        san: 'Kc8',
        explain: {
          idea: 'Unico lado disponible: el otro (Ke8) tambien seria posible en general, pero aqui el rey negro se desplaza hacia el ala de dama.',
          ventaja: 'Ninguna practica.',
          debilidad: 'El rey blanco puede seguirlo sin perder ni una jugada, manteniendo siempre la oposicion.'
        }
      },
      {
        color: 'w',
        san: 'Kc6',
        explain: {
          idea: 'El rey blanco retoma la oposicion directa en la nueva columna, siguiendo al rey negro sin darle respiro.',
          ventaja: 'Vuelve a dejar sin casillas de septima fila al rey negro.',
          debilidad: 'Ninguna.'
        }
      },
      {
        color: 'b',
        san: 'Kb8',
        explain: {
          idea: 'El rey negro sigue huyendo hacia la esquina, unica direccion que le queda libre.',
          ventaja: 'Ninguna practica.',
          debilidad: 'Se acerca cada vez mas a la esquina, donde el mate es inevitable.'
        }
      },
      {
        color: 'w',
        san: 'Kb6',
        explain: {
          idea: 'Oposicion directa una vez mas, esta vez ya muy cerca del borde del tablero.',
          ventaja: 'El rey negro se va quedando sin espacio: solo le queda la columna a o volver sobre sus pasos.',
          debilidad: 'Ninguna.'
        }
      },
      {
        color: 'b',
        san: 'Ka8',
        explain: {
          idea: 'El rey negro se refugia en la esquina, el ultimo rincon que le queda.',
          ventaja: 'Ninguna: es zugzwang puro, cualquier casilla disponible lleva a la misma situacion.',
          debilidad: 'La esquina es precisamente donde el mate con torre resulta mas facil de ejecutar: el rey blanco ya cubre las dos casillas de escape relevantes.'
        }
      },
      {
        color: 'w',
        san: 'Rh8#',
        explain: {
          idea: 'La torre da jaque mate por la octava fila: el rey negro no puede capturarla (esta lejos), no puede bloquear (no hay pieza que lo haga) y no tiene ninguna casilla libre.',
          ventaja: 'Jaque mate: el rey blanco, en oposicion directa, cubre las unicas dos casillas de escape (a7 y b7) mientras la torre cubre toda la octava fila.',
          debilidad: 'Ninguna: es el resultado final de la tecnica de oposicion y acorralamiento.'
        }
      }
    ]
  },
  {
    id: 'h04-final-mate-dama',
    name: 'Mate elemental con dama -- acorralar sin ahogar',
    userColor: 'w',
    startFen: '8/8/8/4k3/8/8/8/K6Q w - - 0 1',
    overview: 'La dama es la pieza mas poderosa para dar mate a un rey ' +
      'solo, pero tambien la mas facil de convertir en ahogado por ' +
      'descuido: si la dama se acerca demasiado sin apoyo del rey ' +
      'propio, puede dejar al rey rival sin jugadas legales sin que ' +
      'sea jaque. La tecnica segura: la dama va reduciendo el ' +
      'espacio del rey rival manteniendose siempre a distancia de ' +
      'caballo (nunca pegada a el sin necesidad), empujandolo hacia ' +
      'el borde; despues el rey propio se acerca, y el mate final ' +
      'llega siempre con jaque, nunca con una jugada tranquila que ' +
      'pueda ahogar.',
    moves: [
      {
        color: 'w',
        san: 'Qc6',
        explain: {
          idea: 'La dama se coloca a distancia de caballo del rey negro, reduciendo su espacio sin quedar a su alcance.',
          ventaja: 'Recorta de golpe buena parte del tablero: controla toda la columna c, la sexta fila y varias diagonales.',
          debilidad: 'Ninguna: al no estar adyacente al rey rival, no hay ningun riesgo de perder la dama.'
        }
      },
      {
        color: 'b',
        san: 'Kf5',
        explain: {
          idea: 'El rey negro busca la maxima libertad restante dentro del espacio que le deja la dama.',
          ventaja: 'Se mantiene lo mas centralizado posible.',
          debilidad: 'Cada vez tiene menos casillas disponibles: la dama puede seguir recortando el espacio a distancia de caballo.'
        }
      },
      {
        color: 'w',
        san: 'Qd6',
        explain: {
          idea: 'Nueva reduccion del espacio, otra vez a distancia de caballo del rey negro.',
          ventaja: 'El rey negro pierde otra franja de casillas sin que la dama corra ningun peligro.',
          debilidad: 'Ninguna.'
        }
      },
      {
        color: 'b',
        san: 'Kg5',
        explain: {
          idea: 'El rey negro sigue buscando espacio, ahora desplazandose hacia el flanco de rey.',
          ventaja: 'Se aleja de la dama todo lo posible dentro de sus opciones.',
          debilidad: 'Se va acercando al borde del tablero, donde el mate es mas facil de ejecutar.'
        }
      },
      {
        color: 'w',
        san: 'Qe6',
        explain: {
          idea: 'Tercera reduccion de espacio consecutiva, siempre a distancia de caballo, sin dar jaque innecesariamente.',
          ventaja: 'El rey negro queda cada vez mas confinado hacia la columna h.',
          debilidad: 'Ninguna.'
        }
      },
      {
        color: 'b',
        san: 'Kh5',
        explain: {
          idea: 'El rey negro llega a la columna del borde, sin mas espacio hacia ese lado.',
          ventaja: 'Ninguna practica: es la ultima casilla disponible en esa direccion.',
          debilidad: 'Queda pegado al borde, la zona donde el mate con dama y rey se ejecuta con mas facilidad.'
        }
      },
      {
        color: 'w',
        san: 'Qf6',
        explain: {
          idea: 'La dama sigue recortando espacio a distancia de caballo, dejando al rey negro con una unica casilla legal.',
          ventaja: 'El rey negro queda practicamente inmovilizado sin que la dama corra ningun riesgo.',
          debilidad: 'Ninguna.'
        }
      },
      {
        color: 'b',
        san: 'Kg4',
        explain: {
          idea: 'Unica casilla legal disponible.',
          ventaja: 'Ninguna: jugada totalmente forzada.',
          debilidad: 'El rey negro queda aislado en el centro del flanco de rey, sin ninguna pieza que lo ayude.'
        }
      },
      {
        color: 'w',
        san: 'Kb2',
        explain: {
          idea: 'Con el rey negro ya muy limitado por la dama, empieza el segundo tiempo de la tecnica: acercar el rey propio para apoyar el mate final.',
          ventaja: 'La dama sola normalmente no puede dar mate sin ayuda del rey (salvo posiciones muy concretas de borde); hay que traerlo cuanto antes.',
          debilidad: 'Ninguna: el rey negro no tiene ninguna pieza con la que aprovechar este tiempo.'
        }
      },
      {
        color: 'b',
        san: 'Kh3',
        explain: {
          idea: 'El rey negro se desplaza dentro del reducido espacio que le queda, buscando alejarse del rey blanco que se acerca.',
          ventaja: 'Ninguna practica.',
          debilidad: 'Se adentra aun mas en la zona de la esquina, donde el mate sera mas rapido.'
        }
      },
      {
        color: 'w',
        san: 'Kc3',
        explain: {
          idea: 'El rey blanco continua su marcha de aproximacion.',
          ventaja: 'Cada paso acerca el momento en que podra apoyar el jaque mate final.',
          debilidad: 'Ninguna.'
        }
      },
      {
        color: 'b',
        san: 'Kh2',
        explain: {
          idea: 'El rey negro se acerca a la esquina, la unica zona que le queda con algo de espacio.',
          ventaja: 'Ninguna practica.',
          debilidad: 'La esquina es precisamente donde resulta mas facil darle mate con dama y rey.'
        }
      },
      {
        color: 'w',
        san: 'Kd2',
        explain: {
          idea: 'El rey blanco sigue acercandose en diagonal.',
          ventaja: 'Gana tiempo sin que el rey negro pueda hacer nada para evitarlo.',
          debilidad: 'Ninguna.'
        }
      },
      {
        color: 'b',
        san: 'Kh1',
        explain: {
          idea: 'El rey negro se refugia en la esquina, el ultimo rincon disponible.',
          ventaja: 'Ninguna practica.',
          debilidad: 'A partir de aqui hay que tener mucho cuidado: acercar el rey blanco de cualquier manera podria ahogar en vez de dar mate, si la dama ya cubre todas las casillas sin dar jaque.'
        }
      },
      {
        color: 'w',
        san: 'Ke2',
        explain: {
          idea: 'El rey blanco sigue acercandose, todavia sin invadir las casillas que necesita cubrir la dama para el mate final.',
          ventaja: 'Se prepara para apoyar el jaque mate sin arriesgar un ahogado.',
          debilidad: 'Ninguna, siempre que la siguiente jugada de la dama sea con jaque y no una jugada tranquila.'
        }
      },
      {
        color: 'b',
        san: 'Kg1',
        explain: {
          idea: 'El rey negro se desplaza dentro de la esquina, buscando cualquier resquicio.',
          ventaja: 'Ninguna practica.',
          debilidad: 'Sigue sin ninguna pieza propia que pueda ayudarlo: el mate es cuestion de pocas jugadas mas.'
        }
      },
      {
        color: 'w',
        san: 'Kf3',
        explain: {
          idea: 'El rey blanco se acerca por el lado correcto sin quedar adyacente al rey negro ni tapar las casillas que la dama necesitara para el mate.',
          ventaja: 'Evita el error tipico de este final (por ejemplo, colocar el rey en f1 con la dama en f2 ahogaria a negras); aqui se mantiene la distancia justa.',
          debilidad: 'Ninguna.'
        }
      },
      {
        color: 'b',
        san: 'Kh1',
        explain: {
          idea: 'El rey negro vuelve a la esquina, sin ninguna alternativa real.',
          ventaja: 'Ninguna practica.',
          debilidad: 'Ninguna casilla le queda fuera de la esquina.'
        }
      },
      {
        color: 'w',
        san: 'Kg3',
        explain: {
          idea: 'El rey blanco toma la ultima casilla de apoyo necesaria, controlando las casillas de escape junto a la esquina.',
          ventaja: 'Deja al rey negro con una unica jugada legal posible.',
          debilidad: 'Ninguna.'
        }
      },
      {
        color: 'b',
        san: 'Kg1',
        explain: {
          idea: 'Unica casilla legal: el rey negro queda completamente acorralado en la esquina.',
          ventaja: 'Ninguna: jugada totalmente forzada.',
          debilidad: 'A partir de aqui cualquier jaque de la dama por la primera fila, apoyado por el rey blanco, es mate.'
        }
      },
      {
        color: 'w',
        san: 'Qa1#',
        explain: {
          idea: 'La dama da jaque mate por la primera fila, con el rey blanco controlando las casillas f1/f2/g2 cercanas a la esquina.',
          ventaja: 'Jaque mate: el rey negro no puede capturar la dama (esta lejos), no hay pieza que bloquee el jaque y no le queda ninguna casilla libre.',
          debilidad: 'Ninguna: es el resultado final de la tecnica de acorralamiento sin ahogar.'
        }
      }
    ]
  }
)

