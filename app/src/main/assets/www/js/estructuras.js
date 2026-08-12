// Estructuras de peones y planes de medio juego -- Hito 06. Mismo
// formato de objeto que REPERTOIRE_LINES/FINALES_LINES/
// PROBLEMAS_LINES/TRAMPAS_LINES ("userColor" es el bando que
// entrena Miguel Angel en esta demostracion, "moves" es la secuencia
// fija que reproduce el motor ya existente sin cambios). No hace
// falta ningun modo de motor nuevo -- ver "ARQUITECTURA DE MOTOR" en
// DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H06.md.
//
// Cada estructura usa "startFen" (igual que finales.js desde H04)
// para arrancar directamente en la posicion tipica en la que se
// reconoce la estructura, en vez de la posicion inicial -- no
// necesariamente el final exacto de la linea de repertorio de la que
// procede. Campo nuevo respecto al resto de catalogos: "familia",
// solo para clasificar/mostrar en el selector nativo
// (EstructurasCatalog.kt) -- no afecta al motor JS, mismo patron que
// "tipo" en trampas.js.
//
// Cada estructura esta anclada a una linea real de repertoire.js,
// verificada reproduciendo la secuencia completa (apertura + tramo de
// demostracion) con chess.js real (node + window.Chess):
//   - IQP            -> h02-defensa-tarrasch (startFen tras 6...Nf6)
//   - Carlsbad       -> h02-qgd-cambio (startFen tras 6...O-O)
//   - Meran          -> h02-semi-eslava-meran (startFen tras 8...dxc4)
//   - Catalana       -> h03-catalana (startFen tras 12...b5)
//
// CORRECCION S6 sobre el planteamiento original del anexo: el IQP se
// ancla unicamente en h02-defensa-tarrasch. Las otras dos lineas
// citadas en el diseno original (h02-gambito-dama-aceptado,
// h02-semi-tarrasch) no producen IQP al releer sus jugadas reales --
// el Semi-Tarrasch recaptura con el caballo precisamente para EVITAR
// el peon aislado, y el Aceptado nunca llega a esa estructura dentro
// de las jugadas registradas. Ver ANNEX_H06.md, sesion S6.
//
// NOTA sobre "userColor" en la Catalana: la linea de repertorio
// h03-catalana entrena a Miguel Angel con negras (defendiendo el
// Catalan). Esta demostracion, en cambio, se plantea con userColor
// 'w' a proposito: el plan descrito en el diseno cerrado (presion en
// la diagonal larga, recuperacion paciente del peon c4) es el plan
// de blancas, y el objetivo pedagogico de esta seccion es entender
// ese plan en si mismo -- exactamente lo que Miguel Angel necesita
// reconocer cuando lo sufre como negras en su repertorio real.
//
// IMPORTANTE: el campo "id" de cada estructura debe coincidir
// exactamente con el id declarado en EstructurasCatalog.kt. Todos los
// ids llevan el prefijo "h06-estructura-" para evitar colision en el
// array combinado que construye game.js.
var ESTRUCTURAS_LINES = [

  {
    id: 'h06-estructura-iqp',
    name: 'Peon de Dama Aislado (IQP) -- Sistema Fianchetto vs Tarrasch',
    familia: 'iqp',
    userColor: 'w',
    startFen: 'r1bqkb1r/pp3ppp/2n2n2/2pp4/3P4/2N2NP1/PP2PP1P/R1BQKB1R w KQkq - 1 7',
    overview: 'Estructura del peon de dama aislado (IQP), la mas ' +
      'estudiada de todo el ajedrez clasico moderno. Surge en la ' +
      'Defensa Tarrasch cuando negras acepta el peon de d5 aislado a ' +
      'cambio de piezas muy activas. El bando fuerte (aqui blancas) ' +
      'juega contra el peon a distancia: fianchetto de rey, columna ' +
      'c, y un caballo buscando un puesto avanzado en e5 o c5, todo ' +
      'apuntando a explotar la debilidad estructural a largo plazo o ' +
      'forzar un final favorable. El bando debil busca compensacion ' +
      'dinamica mientras las piezas esten activas, y cambiar piezas ' +
      'cuando la actividad ya no compense el peon debil.',
    moves: [
      { color: 'w', san: 'Bg2', explain: { idea: 'Completa el fianchetto de rey, colocando el alfil en la diagonal larga que apunta directamente hacia el peon aislado de d5.', ventaja: 'Presion a distancia sobre d5 sin comprometer ninguna pieza a un intercambio inmediato.', debilidad: 'Ninguna; es la pieza clave de todo el plan contra el IQP.' } },
      { color: 'b', san: 'Be7', explain: { idea: 'Negras completa el desarrollo del alfil de rey, preparando el enroque antes de decidir el plan de piezas activas.', ventaja: 'Jugada solida que no compromete nada.', debilidad: 'No resuelve el problema estructural del peon aislado, que sigue siendo un objetivo a largo plazo.' } },
      { color: 'w', san: 'O-O', explain: { idea: 'Pone el rey a salvo antes de iniciar la presion activa sobre el peon debil.', ventaja: 'Seguridad del rey resuelta, listo para maniobrar con las piezas mayores.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'O-O', explain: { idea: 'Negras tambien enroca, completando la seguridad del rey antes del medio juego.', ventaja: 'Rey seguro.', debilidad: 'Ninguna inmediata.' } },
      { color: 'w', san: 'Bg5', explain: { idea: 'Clava el caballo de f6, uno de los defensores naturales de d5, sumando presion indirecta sobre la casilla.', ventaja: 'Pieza activa fuera de la cadena de peones que incomoda el desarrollo de negras.', debilidad: 'Puede romperse con ...Be6 o ...h6 sin perdida de tiempo real para negras.' } },
      { color: 'b', san: 'Be6', explain: { idea: 'Negras desarrolla el alfil de dama a una casilla activa, defendiendo d5 una vez mas.', ventaja: 'Pieza activa fuera de la cadena de peones, tipico de la compensacion dinamica del Tarrasch.', debilidad: 'El peon d5 sigue siendo un objetivo fijo pese a la defensa adicional.' } },
      { color: 'w', san: 'Rc1', explain: { idea: 'Coloca la torre en la columna semiabierta, sumando presion indirecta sobre el flanco de dama.', ventaja: 'Pieza mayor bien colocada dentro del plan de presion a distancia.', debilidad: 'Ninguna inmediata.' } },
      { color: 'b', san: 'Rc8', explain: { idea: 'Negras responde ocupando tambien la columna c, evitando quedarse pasivo ante la presion de blancas.', ventaja: 'Mantiene el equilibrio de piezas activas, esencia de la compensacion del Tarrasch.', debilidad: 'Ninguna inmediata.' } },
      { color: 'w', san: 'Na4', explain: { idea: 'El caballo se dirige hacia c5, una casilla fuerte desde la que hostigar piezas negras y reforzar la presion sobre d5.', ventaja: 'Reubica una pieza aparentemente pasiva hacia un puesto avanzado muy molesto para negras.', debilidad: 'El caballo queda momentaneamente fuera de juego en el borde del tablero mientras completa la maniobra.' } },
      { color: 'b', san: 'b6', explain: { idea: 'Negras evita que el caballo se instale comodamente en c5, cubriendo la casilla de antemano.', ventaja: 'Jugada profilactica que neutraliza la amenaza inmediata del caballo.', debilidad: 'Debilita ligeramente las casillas oscuras del flanco de dama (c6), otro objetivo a largo plazo para blancas.' } },
      { color: 'w', san: 'Ne5', explain: { idea: 'El caballo ocupa una casilla central avanzada, sumando otra pieza a la presion sobre el complejo del peon debil.', ventaja: 'Puesto avanzado fuerte, dificil de expulsar sin conceder mas debilidades.', debilidad: 'Puede ser cambiado con ...Nxe5, simplificando la posicion.' } },
      { color: 'b', san: 'Bd6', explain: { idea: 'Negras ofrece el cambio del caballo avanzado, buscando aliviar la presion mediante intercambios en vez de sostener una posicion cada vez mas pasiva.', ventaja: 'Plan tipico del bando debil en el IQP: cambiar piezas para acercarse a un final mas manejable.', debilidad: 'Cede el control de e5 de forma definitiva si blancas no cambia.' } }
    ]
  },

  {
    id: 'h06-estructura-carlsbad',
    name: 'Estructura Carlsbad -- Ataque de Minoria (Variante de Cambio)',
    familia: 'carlsbad',
    userColor: 'w',
    startFen: 'rnbq1rk1/ppp1bppp/5n2/3p2B1/3P4/2N1P3/PP3PPP/R2QKBNR w KQ - 1 7',
    overview: 'Estructura Carlsbad, surgida tras el cambio voluntario ' +
      'en d5 de la Variante de Cambio del Gambito de Dama Rehusado. ' +
      'El plan de blancas es el clasico ataque de minoria: avanzar ' +
      'b4-b5 contra la cadena de peones a7-b7-c7 de negras para ' +
      'forzar una debilidad permanente (un peon atrasado o aislado en ' +
      'el flanco de dama) tras el cambio en c6. Negras busca ' +
      'contrajuego en el otro extremo del tablero, normalmente ' +
      'reagrupando piezas hacia el flanco de rey para preparar una ' +
      'ruptura central con ...e5.',
    moves: [
      { color: 'w', san: 'Nf3', explain: { idea: 'Completa el desarrollo de piezas menores antes de iniciar el plan de peones en el flanco de dama.', ventaja: 'Jugada natural que no compromete nada.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'Nbd7', explain: { idea: 'Negras desarrolla el segundo caballo, reforzando el control central antes de decidir su plan propio.', ventaja: 'Pieza activa que participa en la defensa de la estructura.', debilidad: 'Ninguna inmediata.' } },
      { color: 'w', san: 'Bd3', explain: { idea: 'Coloca el alfil en su diagonal mas activa, apuntando hacia el flanco de rey de negras.', ventaja: 'Pieza bien situada para el resto de la partida.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'c6', explain: { idea: 'Negras refuerza el peon d5 y consolida la estructura tipica de Carlsbad antes del medio juego.', ventaja: 'Estructura solida sin debilidades inmediatas.', debilidad: 'Cede definitivamente cualquier opcion de ruptura central con ...c5, dejando el contrajuego de negras limitado al flanco de rey o al centro con ...e5 mas adelante.' } },
      { color: 'w', san: 'O-O', explain: { idea: 'Pone el rey a salvo antes de iniciar el plan de peones en el flanco de dama.', ventaja: 'Seguridad del rey resuelta.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'Re8', explain: { idea: 'Negras centraliza la torre, preparando una futura ruptura central con ...e5 como contrajuego frente al plan de minoria de blancas.', ventaja: 'Pieza bien situada para el contrajuego central.', debilidad: 'Ninguna inmediata.' } },
      { color: 'w', san: 'Qc2', explain: { idea: 'Conecta las torres y prepara la maniobra de las piezas mayores hacia el flanco de dama antes de avanzar los peones.', ventaja: 'Jugada flexible que no compromete nada mas.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'Nf8', explain: { idea: 'Maniobra tipica de Carlsbad: el caballo se reubica para reforzar el flanco de rey y apoyar un futuro ...e5.', ventaja: 'Reagrupa la pieza hacia el sector donde negras buscara el contrajuego.', debilidad: 'Pierde un tiempo respecto a un desarrollo directo.' } },
      { color: 'w', san: 'Rab1', explain: { idea: 'Coloca la torre detras del peon b, preparando literalmente el avance b4-b5, el plan central de todo el sistema.', ventaja: 'Pieza mayor lista para apoyar el avance decisivo.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'Ne6', explain: { idea: 'El caballo continua su maniobra hacia una casilla central activa, presionando indirectamente sobre d4.', ventaja: 'Pieza bien situada tras la maniobra.', debilidad: 'Ninguna inmediata.' } },
      { color: 'w', san: 'b4', explain: { idea: 'Inicia formalmente el ataque de minoria: el objetivo es llegar hasta b5 para forzar un cambio que deje una debilidad permanente en la estructura de peones negra.', ventaja: 'Plan claro y de bajo riesgo, tipico de la Variante de Cambio.', debilidad: 'Ninguna inmediata; el avance no debilita nada en el propio campo de blancas.' } },
      { color: 'b', san: 'a6', explain: { idea: 'Negras intenta frenar el avance b4-b5 ganando control extra sobre la casilla b5.', ventaja: 'Retrasa momentaneamente el plan de blancas.', debilidad: 'No lo detiene de forma definitiva -- blancas puede preparar a4 para romper igualmente, o redirigir el plan hacia el centro si negras se pasa de pasivo.' } }
    ]
  },

  {
    id: 'h06-estructura-meran',
    name: 'Estructura Meran -- Contragambito y Ruptura Central',
    familia: 'meran',
    userColor: 'w',
    startFen: 'r1bqkb1r/pp1n1ppp/2p1pn2/8/2pP4/2NBPN2/PP3PPP/R1BQK2R w KQkq - 0 7',
    overview: 'Estructura Meran, una de las mas dinamicas de toda la ' +
      'Semi-Eslava. Negras acepta capturar el peon de c4 y ' +
      'contragambitea de inmediato con ...b5, ganando espacio en el ' +
      'flanco de dama a cambio de debilitar ligeramente sus propias ' +
      'casillas negras. Blancas responde con el plan mas ambicioso: ' +
      'luchar directamente por el centro con e4 (y despues e5 si la ' +
      'posicion lo permite), buscando abrir lineas antes de que ' +
      'negras complete su desarrollo, en vez de perder tiempo ' +
      'intentando recuperar el espacio cedido en el flanco de dama.',
    moves: [
      { color: 'w', san: 'Bxc4', explain: { idea: 'Recupera el peon capturado por negras, con el alfil ya bien situado en la diagonal b1-h7.', ventaja: 'Iguala el material sin perder tiempo de desarrollo.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'b5', explain: { idea: 'El contragambito caracteristico de la Meran: negras gana espacio y tiempo atacando el alfil, a cambio de debilitar ligeramente las casillas negras.', ventaja: 'Iniciativa momentanea y espacio en el flanco de dama.', debilidad: 'Debilita las casillas c5 y c6, un factor a largo plazo que blancas puede explotar mas adelante.' } },
      { color: 'w', san: 'Bd3', explain: { idea: 'Retira el alfil a una casilla igualmente activa sin perder tiempo, manteniendo la presion sobre el flanco de rey de negras.', ventaja: 'Pieza bien colocada sin conceder ningun tiempo real.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'Bb7', explain: { idea: 'Negras completa el fianchetto del alfil de dama, apoyando el avance de peones del flanco de dama.', ventaja: 'Pieza activa bien situada para el resto de la partida.', debilidad: 'Ninguna inmediata.' } },
      { color: 'w', san: 'O-O', explain: { idea: 'Pone el rey a salvo antes de decidir el plan central definitivo.', ventaja: 'Seguridad del rey resuelta.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'a6', explain: { idea: 'Refuerza el avance de peones del flanco de dama, sosteniendo b5 de forma definitiva antes de completar el desarrollo.', ventaja: 'Consolida el espacio ganado en el flanco de dama.', debilidad: 'Jugada lenta que no desarrolla ninguna pieza nueva.' } },
      { color: 'w', san: 'e4', explain: { idea: 'La ruptura central caracteristica del plan de blancas en la Meran: en vez de jugar con lentitud en el flanco de dama, blancas lucha directamente por el centro mientras negras aun no ha completado el desarrollo.', ventaja: 'Centro amplio e iniciativa directa, el plan mas ambicioso y respetado contra la Meran.', debilidad: 'Compromete la estructura central de forma definitiva; si el ataque no llega a tiempo, negras puede quedar con buen juego gracias al espacio ganado en el flanco de dama.' } },
      { color: 'b', san: 'c5', explain: { idea: 'Negras contraataca de inmediato el centro extendido de blancas en vez de dejarle avanzar con comodidad.', ventaja: 'Cuestiona la estructura central de blancas antes de que se consolide.', debilidad: 'Abre lineas en una posicion donde el rey negro aun no esta completamente seguro.' } },
      { color: 'w', san: 'e5', explain: { idea: 'Blancas avanza ganando espacio y tiempo sobre el caballo de f6, continuando el plan de ataque central iniciado con e4.', ventaja: 'Espacio central decisivo y tiempo sobre una pieza negra.', debilidad: 'El peon avanzado puede convertirse el mismo en un objetivo si negras logra rodearlo con piezas.' } },
      { color: 'b', san: 'cxd4', explain: { idea: 'Negras resuelve la tension en el flanco de dama capturando en el centro, en vez de dejar que blancas decida cuando cambiar.', ventaja: 'Abre la posicion en el momento que negras elige, con piezas ya bien situadas para el medio juego resultante.', debilidad: 'La estructura de peones queda totalmente definida y ambos bandos deben jugar con precision tactica a partir de aqui.' } }
    ]
  },

  {
    id: 'h06-estructura-catalana',
    name: 'Estructura Catalana -- Presion en la Diagonal Larga',
    familia: 'catalana',
    userColor: 'w',
    startFen: 'rnbq1rk1/2p1bppp/p3pn2/1p6/2QP4/5NP1/PP2PPBP/RNB2RK1 w - - 0 9',
    overview: 'Estructura Catalana, una de las armas mas solidas y ' +
      'modernas a nivel de elite contra estructuras de dama. El alfil ' +
      'de rey fianchettado en g2 presiona la diagonal larga y el ' +
      'flanco de dama de negras durante toda la partida. Cuando ' +
      'negras acepta el peon de c4 (Catalan Aceptado), blancas no se ' +
      'apresura a recuperarlo: completa el desarrollo, recupera el ' +
      'peon con comodidad (Qc2-Qxc4) y despues cuestiona con a4 la ' +
      'cadena de peones que negras uso para sostener el peon de mas, ' +
      'dejando una debilidad duradera en el flanco de dama. Se ' +
      'demuestra aqui el plan desde el lado de blancas -- el que ' +
      'ejerce la presion -- para entender bien la amenaza que Miguel ' +
      'Angel debe gestionar cuando entrena esta linea con negras en ' +
      'el repertorio.',
    moves: [
      { color: 'w', san: 'Qd3', explain: { idea: 'Reubica la dama a una casilla activa, lejos de una posible molestia y siempre apuntando hacia el flanco de dama.', ventaja: 'Pieza bien colocada sin perder tiempo real.', debilidad: 'Ninguna inmediata.' } },
      { color: 'b', san: 'Bb7', explain: { idea: 'Negras completa el fianchetto del alfil de dama, la pieza natural para contrarrestar la presion del alfil de g2 sobre la misma diagonal.', ventaja: 'Pieza activa que disputa la diagonal larga.', debilidad: 'Ninguna inmediata.' } },
      { color: 'w', san: 'Bf4', explain: { idea: 'Desarrolla el ultimo alfil hacia una diagonal activa, completando el desarrollo antes de decidir el plan definitivo.', ventaja: 'Pieza activa fuera de la cadena de peones.', debilidad: 'Ninguna inmediata.' } },
      { color: 'b', san: 'Nbd7', explain: { idea: 'Negras desarrolla el ultimo caballo, completando la movilizacion de piezas menores antes del medio juego.', ventaja: 'Jugada solida y natural.', debilidad: 'Ninguna inmediata.' } },
      { color: 'w', san: 'Rfd1', explain: { idea: 'Centraliza la torre en la columna d, sumando presion sobre el centro y preparando la maniobra de las piezas mayores.', ventaja: 'Pieza bien situada de cara al medio juego.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'Rc8', explain: { idea: 'Negras ocupa la unica columna semiabierta a su disposicion, buscando contrajuego antes de que blancas complete toda su presion.', ventaja: 'Pieza activa en la unica columna abierta relevante.', debilidad: 'Ninguna inmediata.' } },
      { color: 'w', san: 'a4', explain: { idea: 'El plan tipico de blancas contra la estructura Catalana Aceptada: cuestionar de inmediato la cadena de peones ...a6-b5 que negras uso para sostener el peon de mas.', ventaja: 'Presion inmediata sobre el flanco de dama, sumandose a la ya existente en la diagonal larga.', debilidad: 'Ninguna inmediata; abre la columna a pero blancas ya controla la iniciativa.' } },
      { color: 'b', san: 'bxa4', explain: { idea: 'Negras se ve obligada a definir la tension capturando, ya que sostener la cadena de peones no es posible por mas tiempo.', ventaja: 'Resuelve la tension inmediata sin perder mas tiempo.', debilidad: 'La estructura de peones del flanco de dama queda debilitada de forma permanente (peon a4 aislado, casillas b5/c5 debiles), la esencia de la ventaja duradera de blancas en el Catalan Aceptado.' } }
    ]
  }

]
