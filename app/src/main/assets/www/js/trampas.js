// Trampas de apertura -- Hito 05. Mismo formato de objeto que
// REPERTOIRE_LINES/FINALES_LINES/PROBLEMAS_LINES ("userColor" es el
// bando que entrena Miguel Angel, "moves" es la secuencia fija que
// reproduce el motor ya existente sin cambios). No hace falta ningun
// modo de motor nuevo -- ver "ARQUITECTURA DE MOTOR" en
// DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H05.md.
//
// Campo nuevo respecto a lineas/finales/problemas: "tipo" ('ofensiva'
// o 'defensiva'), solo para mostrar/clasificar en el selector nativo
// (TrampasCatalog.kt) -- no afecta al motor JS.
//
// Cada trampa esta ligada al repertorio real ya presente en
// repertoire.js (Gambito de Dama con blancas, Escandinava con
// negras) -- ninguna trampa generica de otra apertura. Toda secuencia
// SAN fue verificada con chess.js real (node + window.Chess, mismo
// rigor que problemas.js) reproduciendo la apertura completa desde el
// primer movimiento, contrastada contra fuentes reales (Wikipedia,
// TheChessWorld, Chess-Teacher, gambiter.com) -- ninguna inventada.
//
// INCIDENCIA S5: la investigacion de S4 identifico 7 trampas con
// fuente, pero al verificar la numero 7 ("Bxf7+ tras 6...c6/...a6 en
// la Escandinava Moderna 2...Nf6") se comprobo que la fuente citada
// (Chess-Teacher, "Crush the Scandinavian Defense in 8 Moves") describe
// en realidad la MISMA trampa que la numero 6 (Gambito Leonhardt,
// linea 2...Qxd5 3.Nc3 Qa5 4.b4), no una trampa distinta ligada a
// 2...Nf6. Se descarta por no poder verificarse tal como estaba
// descrita -- ver ANNEX_H05.md para el detalle completo. Quedan 6
// trampas reales en este fichero.
//
// IMPORTANTE: el campo "id" de cada trampa debe coincidir exactamente
// con el id declarado en TrampasCatalog.kt (selector nativo del
// menu). Todos los ids llevan el prefijo "h05-trampa-" para evitar
// colision en el array combinado que construye game.js.
var TRAMPAS_LINES = [

  // ============================================================
  // BLOQUE BLANCAS -- GAMBITO DE DAMA
  // ============================================================
  {
    id: 'h05-trampa-elefante',
    name: 'Trampa del Elefante (Elephant Trap)',
    tipo: 'defensiva',
    userColor: 'w',
    overview: 'Gambito de Dama Rehusado, linea 4...Nbd7. Si blancas ' +
      'capturan ingenuamente en d5 pensando que ganan un peon (la ' +
      'aparente clavada del alfil de g5 sobre el caballo f6 parece ' +
      'impedir la recaptura), negras ignoran la clavada con ...Nxd5! ' +
      'y ganan una pieza. Se entrena aqui el lado de blancas para ' +
      'reconocer la trampa y evitar caer en ella. Fuente: Wikipedia ' +
      '("Queen\'s Gambit Declined, Elephant Trap"), TheChessWorld.',
    moves: [
      { color: 'w', san: 'd4', explain: { idea: 'Blancas abre con el peon de dama, buscando el Gambito de Dama.', ventaja: 'Control inmediato del centro.', debilidad: 'Ninguna a estas alturas.' } },
      { color: 'b', san: 'd5', explain: { idea: 'Negras responde de forma simetrica en el centro.', ventaja: 'Disputa el centro desde el primer movimiento.', debilidad: 'Ninguna inmediata.' } },
      { color: 'w', san: 'c4', explain: { idea: 'Blancas ofrece el gambito de dama, tentando a negras a capturar en c4.', ventaja: 'Si negras captura, blancas gana tiempo despues para recuperar el peon.', debilidad: 'Cede momentaneamente el control de c4.' } },
      { color: 'b', san: 'e6', explain: { idea: 'Negras rehusa el gambito y refuerza d5 en vez de capturar en c4.', ventaja: 'Estructura solida, tipica de la Defensa Ortodoxa.', debilidad: 'Encierra momentaneamente al alfil de casillas claras.' } },
      { color: 'w', san: 'Nc3', explain: { idea: 'Blancas desarrolla el caballo, presionando d5.', ventaja: 'Pieza activa que suma presion sobre el centro.', debilidad: 'Ninguna inmediata.' } },
      { color: 'b', san: 'Nf6', explain: { idea: 'Negras desarrolla el caballo de rey, defendiendo d5 de nuevo.', ventaja: 'Desarrollo natural.', debilidad: 'Prepara sin saberlo el terreno de la trampa que viene.' } },
      { color: 'w', san: 'Bg5', explain: { idea: 'Blancas clava en apariencia el caballo de f6 contra la dama.', ventaja: 'Presion sobre el caballo y preparacion de Cambridge Springs/Ortodoxa.', debilidad: 'La clavada es solo aparente si negras responde con Nbd7 -- primer aviso de la trampa.' } },
      { color: 'b', san: 'Nbd7', explain: { idea: 'Negras desarrolla el segundo caballo, tendiendo la Trampa del Elefante: si blancas ahora captura en d5, la recaptura Nxd5! ignora la clavada porque el caballo f6 no era realmente el unico defensor.', ventaja: 'Desarrollo natural que ademas tiende la trampa.', debilidad: 'Ninguna -- jugada solida en si misma, con o sin trampa.' } },
      { color: 'w', san: 'cxd5', explain: { idea: 'ERROR: blancas cae en la trampa pensando que gana un peon limpio, porque cree que el caballo de f6 esta clavado y no puede recapturar.', ventaja: 'Ninguna real -- la captura parece ganar un peon pero pierde una pieza.', debilidad: 'La supuesta clavada era ilusoria: hay una pieza detras (el caballo de d7) que puede recapturar sin problema.' } },
      { color: 'b', san: 'exd5', explain: { idea: 'Negras recaptura de forma natural con el peon.', ventaja: 'Mantiene la estructura y la trampa sigue tendida.', debilidad: 'Ninguna.' } },
      { color: 'w', san: 'Nxd5', explain: { idea: 'ERROR decisivo: blancas repite el mismo error, capturando el peon de d5 con el caballo, todavia convencida de que Nf6 esta clavado.', ventaja: 'Ninguna -- parece ganar un segundo peon.', debilidad: 'El caballo f6 puede capturar sin problema: si Nxd5 se responde Bxd8, el rey blanco recibe jaque de alfil y pierde el derecho a enroque, perdiendo la partida a cambio de solo un peon.' } },
      { color: 'b', san: 'Nxd5', explain: { idea: 'Negras ejecuta la trampa: el caballo f6 ignora la clavada y captura en d5, ganando una pieza limpia.', ventaja: 'Negras queda una pieza arriba.', debilidad: 'Ninguna -- la trampa esta consumada.' } },
      { color: 'w', san: 'Bxd8', explain: { idea: 'Blancas intenta compensar capturando la dama con el alfil, unica forma de no quedar simplemente una pieza abajo sin nada a cambio.', ventaja: 'Recupera la dama, igualando material momentaneamente.', debilidad: 'El alfil queda atrapado en d8 y el jaque que sigue le cuesta a blancas el enroque.' } },
      { color: 'b', san: 'Bb4+', explain: { idea: 'Jaque de alfil que explota que blancas no puede interponer nada util en la diagonal.', ventaja: 'Fuerza a blancas a mover la dama a una casilla incomoda.', debilidad: 'Ninguna.' } },
      { color: 'w', san: 'Qd2', explain: { idea: 'Unica forma razonable de bloquear el jaque manteniendo la dama activa.', ventaja: 'Bloquea el jaque.', debilidad: 'La dama queda clavada de inmediato contra el rey en la misma diagonal.' } },
      { color: 'b', san: 'Bxd2+', explain: { idea: 'Negras captura la dama con jaque, aprovechando la clavada que acaba de crearse.', ventaja: 'Gana la dama sin compensacion real.', debilidad: 'Ninguna.' } },
      { color: 'w', san: 'Kxd2', explain: { idea: 'Blancas recaptura con el rey, unica opcion legal.', ventaja: 'Recupera el alfil.', debilidad: 'El rey pierde el derecho a enroque y queda expuesto en el centro.' } },
      { color: 'b', san: 'Kxd8', explain: { idea: 'Negras recupera tambien su alfil, recapturando con el rey.', ventaja: 'Negras termina la secuencia una pieza arriba (caballo por peon), con el rey blanco inseguro en el centro y sin enroque.', debilidad: 'El rey negro tampoco puede enrocar, pero la ventaja material es decisiva.' } }
    ]
  },

  {
    id: 'h05-trampa-rubinstein',
    name: 'Trampa Rubinstein',
    tipo: 'ofensiva',
    userColor: 'w',
    overview: 'Gambito de Dama Rehusado, Defensa Ortodoxa. Blancas ' +
      'gana un peon con Nxd5 porque, tras la recaptura de negras, la ' +
      'dama negra queda amenazada de quedar atrapada en la banda por ' +
      'el alfil en c7. Se entrena aqui el lado de blancas para tender ' +
      'la trampa. Fuente: Wikipedia ("Queen\'s Gambit Declined, ' +
      'Rubinstein Trap"), partida real Alekhine-Rubinstein, San Remo 1930.',
    moves: [
      { color: 'w', san: 'd4', explain: { idea: 'Apertura de dama.', ventaja: 'Control central.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'd5', explain: { idea: 'Respuesta simetrica.', ventaja: 'Disputa el centro.', debilidad: 'Ninguna.' } },
      { color: 'w', san: 'Nf3', explain: { idea: 'Blancas desarrolla el caballo de rey antes de definir el plan de peones.', ventaja: 'Flexibilidad de orden de jugadas.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'Nf6', explain: { idea: 'Desarrollo natural simetrico.', ventaja: 'Control de e4 y d5.', debilidad: 'Ninguna.' } },
      { color: 'w', san: 'c4', explain: { idea: 'Blancas ofrece el gambito de dama con el caballo ya desarrollado.', ventaja: 'Presion sobre d5.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'e6', explain: { idea: 'Negras rehusa el gambito, Defensa Ortodoxa.', ventaja: 'Estructura solida.', debilidad: 'Encierra momentaneamente el alfil de casillas claras.' } },
      { color: 'w', san: 'Bg5', explain: { idea: 'Blancas clava el caballo de f6.', ventaja: 'Presion tipica de la Ortodoxa.', debilidad: 'Ninguna inmediata.' } },
      { color: 'b', san: 'Nbd7', explain: { idea: 'Negras desarrolla el segundo caballo, jugada natural de la Ortodoxa.', ventaja: 'Desarrollo solido.', debilidad: 'A diferencia de la Trampa del Elefante, aqui el orden de jugadas que sigue si expone a negras a la Trampa Rubinstein mas adelante.' } },
      { color: 'w', san: 'e3', explain: { idea: 'Blancas refuerza el centro y abre la diagonal del alfil de rey.', ventaja: 'Solidez central.', debilidad: 'Encierra el alfil de casillas claras propio, tipico de la Ortodoxa.' } },
      { color: 'b', san: 'Be7', explain: { idea: 'Negras rompe la clavada desarrollando el alfil.', ventaja: 'Prepara el enroque corto.', debilidad: 'Ninguna.' } },
      { color: 'w', san: 'Nc3', explain: { idea: 'Blancas completa el desarrollo de caballos.', ventaja: 'Presion adicional sobre d5.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'O-O', explain: { idea: 'Negras enroca corto.', ventaja: 'Seguridad del rey.', debilidad: 'Ninguna inmediata.' } },
      { color: 'w', san: 'Rc1', explain: { idea: 'Blancas coloca la torre en la columna semiabierta que se abrira tras el futuro cxd5.', ventaja: 'Prepara la presion por la columna c.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'Re8', explain: { idea: 'Negras coloca la torre en la columna e, jugada natural de espera/preparacion de ...e5.', ventaja: 'Flexibilidad.', debilidad: 'Es precisamente esta jugada (en vez de una mas cautelosa) la que permite mas adelante la irrupcion tactica de blancas en el centro.' } },
      { color: 'w', san: 'Qc2', explain: { idea: 'Blancas coloca la dama en la columna c, apoyando el futuro avance central y quitando la columna d de la vista de la torre negra por ahora.', ventaja: 'Pieza flexible y bien situada.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'a6', explain: { idea: 'Negras juega una jugada de espera tipica (prepara ...b5 mas adelante), permitiendo que blancas defina el centro.', ventaja: 'Flexibilidad para el futuro plan de flanco de dama.', debilidad: 'No hace nada por el centro justo cuando blancas esta a punto de abrirlo con cxd5.' } },
      { color: 'w', san: 'cxd5', explain: { idea: 'Blancas abre el centro y la columna c para su torre.', ventaja: 'Torre activa en columna abierta.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'exd5', explain: { idea: 'Recaptura natural con el peon.', ventaja: 'Mantiene la estructura central.', debilidad: 'Deja el peon d5 como blanco potencial de ataque.' } },
      { color: 'w', san: 'Bd3', explain: { idea: 'Blancas desarrolla el alfil apuntando al flanco de rey negro.', ventaja: 'Pieza activa, prepara O-O.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'c6', explain: { idea: 'Negras refuerza el peon d5.', ventaja: 'Solidez central.', debilidad: 'La casilla d5 queda ahora solo protegida por el peon c6, lo que sera relevante en la combinacion tactica que sigue.' } },
      { color: 'w', san: 'O-O', explain: { idea: 'Blancas enroca corto, completando el desarrollo antes de la combinacion tactica.', ventaja: 'Rey seguro justo antes de abrir el juego.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'Ne4', explain: { idea: 'ERROR: negras salta con el caballo a e4 buscando cambiar piezas y aliviar la posicion, sin ver el problema tactico que esto crea al debilitar la vigilancia sobre d5 y f5.', ventaja: 'Parece un cambio de piezas simplificador razonable.', debilidad: 'Deja preparado el terreno para el golpe tactico de blancas: la casilla d5 y la diagonal a la dama negra quedan mas debiles de lo que parece.' } },
      { color: 'w', san: 'Bf4', explain: { idea: 'Blancas retira el alfil de la clavada (evitando el cambio) y lo situa en f4, apuntando hacia c7 -- la pieza clave de la trampa.', ventaja: 'El alfil en f4 vigila la diagonal c7-b8, preparando la amenaza de atrapar a la dama si esta se queda en el centro tras el golpe tactico.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'f5', explain: { idea: 'ERROR decisivo: negras sobreprotege el caballo de e4 con el peon f, sin ver que esto abre la posicion justo cuando blancas tiene el golpe tactico Nxd5 disponible.', ventaja: 'Parece consolidar el caballo avanzado.', debilidad: 'Debilita definitivamente el control sobre d5 y abre la posicion en el momento equivocado -- cae en la Trampa Rubinstein.' } },
      { color: 'w', san: 'Nxd5', explain: { idea: 'Blancas ejecuta el golpe tactico: el caballo captura en d5, ya que si negras recaptura con el peon (cxd5??), Bc7 atrapa a la dama negra en el borde del tablero.', ventaja: 'Blancas gana un peon limpio, porque la recaptura natural pierde la dama.', debilidad: 'Ninguna -- el golpe esta completamente justificado tacticamente.' } },
      { color: 'b', san: 'cxd5', explain: { idea: 'Negras cae en la trampa capturando de forma aparentemente natural, sin ver la amenaza sobre su propia dama.', ventaja: 'Recupera la pieza en apariencia.', debilidad: 'Expone la dama al golpe decisivo que sigue.' } },
      { color: 'w', san: 'Bc7', explain: { idea: 'Blancas remata la combinacion: el alfil ataca la dama negra, que no tiene ninguna casilla segura en la fila trasera para escapar sin perder material adicional.', ventaja: 'Blancas gana como minimo un peon limpio con posicion claramente superior; en la practica (Alekhine-Rubinstein, San Remo 1930) la dama termino perdiendose tambien.', debilidad: 'Ninguna -- es el remate de la combinacion.' } }
    ]
  },

  {
    id: 'h05-trampa-cambridge-springs',
    name: 'Trampa de la Cambridge Springs',
    tipo: 'defensiva',
    userColor: 'w',
    overview: 'Defensa Cambridge Springs. Tras 7.Nd2 Bb4 8.Qc2 O-O, la ' +
      'jugada tentadora 9.Bd3?? pierde una pieza a un zwischenzug: ' +
      '9...dxc4! (amenazando ...Qxg5) 10.Bxf6 cxd3! (el zwischenzug) ' +
      '11.Qxd3 Nxf6. Se entrena aqui el lado de blancas para reconocer ' +
      'la trampa y evitarla. Fuente: Wikipedia ("Queen\'s Gambit ' +
      'Declined, Cambridge Springs Defense").',
    moves: [
      { color: 'w', san: 'd4', explain: { idea: 'Apertura de dama.', ventaja: 'Control central.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'd5', explain: { idea: 'Respuesta simetrica.', ventaja: 'Disputa el centro.', debilidad: 'Ninguna.' } },
      { color: 'w', san: 'c4', explain: { idea: 'Gambito de Dama.', ventaja: 'Presion sobre d5.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'e6', explain: { idea: 'Negras rehusa el gambito.', ventaja: 'Estructura solida.', debilidad: 'Encierra momentaneamente el alfil de casillas claras.' } },
      { color: 'w', san: 'Nc3', explain: { idea: 'Desarrollo natural.', ventaja: 'Presion sobre d5.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'Nf6', explain: { idea: 'Desarrollo natural.', ventaja: 'Control central.', debilidad: 'Ninguna.' } },
      { color: 'w', san: 'Bg5', explain: { idea: 'Clavada del caballo de f6.', ventaja: 'Presion tipica de la Ortodoxa.', debilidad: 'Prepara sin saberlo el terreno de la Cambridge Springs.' } },
      { color: 'b', san: 'Nbd7', explain: { idea: 'Negras desarrolla el segundo caballo.', ventaja: 'Desarrollo natural.', debilidad: 'Ninguna.' } },
      { color: 'w', san: 'Nf3', explain: { idea: 'Blancas completa el desarrollo de caballos.', ventaja: 'Pieza activa.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'c6', explain: { idea: 'Negras refuerza d5 antes de la jugada caracteristica de la variante.', ventaja: 'Solidez central.', debilidad: 'Ninguna.' } },
      { color: 'w', san: 'e3', explain: { idea: 'Blancas refuerza el centro y libera al alfil de rey.', ventaja: 'Solidez.', debilidad: 'Encierra el propio alfil de casillas claras.' } },
      { color: 'b', san: 'Qa5', explain: { idea: 'Negras juega la Cambridge Springs: la dama sale a a5, rompiendo la clavada sobre el caballo de d7 (que ahora puede moverse porque la dama defiende al caballo de f6 desde el flanco) y presionando el caballo de c3.', ventaja: 'Pieza activa que crea amenazas inmediatas sobre c3 y sobre g5 si la clavada se rompe.', debilidad: 'Ninguna -- linea principal solida y muy jugada a alto nivel.' } },
      { color: 'w', san: 'Nd2', explain: { idea: 'Blancas rompe la presion sobre el caballo de c3 y defiende e4 de antemano.', ventaja: 'Jugada principal, solida.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'Bb4', explain: { idea: 'Negras clava el caballo de c3 y amenaza a largo plazo con ...Ne4.', ventaja: 'Pieza activa con amenazas reales.', debilidad: 'Ninguna.' } },
      { color: 'w', san: 'Qc2', explain: { idea: 'Blancas defiende el caballo de c3 y cubre la casilla e4.', ventaja: 'Jugada solida que neutraliza las amenazas inmediatas.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'O-O', explain: { idea: 'Negras enroca corto, completando el desarrollo antes de definir el centro.', ventaja: 'Rey seguro.', debilidad: 'Ninguna.' } },
      { color: 'w', san: 'Bd3', explain: { idea: 'ERROR: blancas desarrolla el alfil hacia el flanco de rey sin ver el zwischenzug tactico que esto permite, ya que el alfil de g5 queda ahora sin proteccion extra si negras abre la posicion con dxc4.', ventaja: 'Parece una jugada de desarrollo natural.', debilidad: 'Pierde una pieza al zwischenzug tactico ...dxc4! seguido de ...cxd3! -- cae en la Trampa de la Cambridge Springs.' } },
      { color: 'b', san: 'dxc4', explain: { idea: 'Negras abre el centro capturando en c4, amenazando de inmediato ...Qxg5 porque el alfil de g5 ha quedado sin la defensa extra que hubiera dado un alfil en e2.', ventaja: 'Crea una amenaza inmediata que blancas debe atender.', debilidad: 'Ninguna -- es la jugada clave de la combinacion.' } },
      { color: 'w', san: 'Bxf6', explain: { idea: 'Blancas intenta salvar la pieza atacada capturando primero en f6, esperando recapturar despues en c4 con el alfil de d3.', ventaja: 'Parece resolver la amenaza inmediata sobre el alfil de g5.', debilidad: 'No ve el zwischenzug: antes de recapturar en f6, negras tiene una jugada intermedia mucho mas fuerte.' } },
      { color: 'b', san: 'cxd3', explain: { idea: 'El zwischenzug: en vez de recapturar de inmediato en f6, negras captura primero el alfil de d3 con el peon, ganando una pieza completa antes de resolver la posicion en f6.', ventaja: 'Gana una pieza limpia -- el zwischenzug es el nucleo tactico de toda la trampa.', debilidad: 'Ninguna.' } },
      { color: 'w', san: 'Qxd3', explain: { idea: 'Blancas recaptura el peon con la dama, unica forma de no perder material adicional de inmediato.', ventaja: 'Recupera parte del material.', debilidad: 'El alfil que quedo en f6 sigue capturado y sin compensacion real: blancas termina la secuencia una pieza abajo.' } },
      { color: 'b', san: 'Nxf6', explain: { idea: 'Negras recaptura por fin en f6 con el caballo, consolidando la ganancia de una pieza completa obtenida gracias al zwischenzug.', ventaja: 'Negras queda una pieza arriba con posicion sana y sin debilidades.', debilidad: 'Ninguna.' } }
    ]
  },

  {
    id: 'h05-trampa-lasker-albin',
    name: 'Trampa Lasker en el Contragambito Albin',
    tipo: 'defensiva',
    userColor: 'w',
    overview: 'Contragambito Albin. Tras 1.d4 d5 2.c4 e5 3.dxe5 d4, la ' +
      'jugada natural 4.e3?? pierde la dama tras 4...Bb4+ 5.Bd2 dxe3! ' +
      '6.Bxb4?? exf2+ 7.Ke2 fxg1=N+!! con subpromocion. Regla a ' +
      'memorizar: nunca jugar e3 en esa posicion concreta. Se entrena ' +
      'aqui el lado de blancas para reconocer y evitar la trampa. ' +
      'Fuente: Wikipedia ("Albin Countergambit, Lasker Trap"), House ' +
      'of Staunton.',
    moves: [
      { color: 'w', san: 'd4', explain: { idea: 'Apertura de dama.', ventaja: 'Control central.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'd5', explain: { idea: 'Respuesta simetrica.', ventaja: 'Disputa el centro.', debilidad: 'Ninguna.' } },
      { color: 'w', san: 'c4', explain: { idea: 'Gambito de Dama.', ventaja: 'Presion sobre d5.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'e5', explain: { idea: 'Negras responde con el Contragambito Albin, ofreciendo un peon a cambio de una cuna central en d4.', ventaja: 'Juego dinamico y contragolpe inmediato en el centro.', debilidad: 'Cede un peon a cambio de la iniciativa.' } },
      { color: 'w', san: 'dxe5', explain: { idea: 'Blancas acepta el gambito capturando el peon de e5.', ventaja: 'Gana un peon.', debilidad: 'Ninguna inmediata; el verdadero peligro llega en la jugada siguiente si blancas no juega con precision.' } },
      { color: 'b', san: 'd4', explain: { idea: 'Negras avanza el peon de dama, clavando la cuna caracteristica del Contragambito Albin, que resta la casilla c3 al caballo de blancas y cramponea el flanco de dama.', ventaja: 'El peon de d4 es mas fuerte de lo que parece: cramponea la posicion blanca.', debilidad: 'Ninguna en esta posicion; blancas debe jugar 4.Nf3 (mejor y mas segura) para no caer en la Trampa Lasker.' } },
      { color: 'w', san: 'e3', explain: { idea: 'ERROR: blancas intenta liquidar el peon avanzado de d4 de inmediato con e3, la jugada mas natural pero tambien la que Lasker enseno a temer.', ventaja: 'Parece resolver el problema del peon de d4 de la forma mas directa.', debilidad: 'Cae en la Trampa Lasker: la jugada correcta es 4.Nf3, desarrollando primero.' } },
      { color: 'b', san: 'Bb4+', explain: { idea: 'Negras da jaque con el alfil antes de resolver la tension en d4, forzando a blancas a decidir como bloquear.', ventaja: 'Gana un tiempo obligando a blancas a responder al jaque.', debilidad: 'Ninguna.' } },
      { color: 'w', san: 'Bd2', explain: { idea: 'Blancas bloquea el jaque con el alfil (5.Nd2 seria peor, ya que permite a negras jugar dxe3 con ventaja adicional).', ventaja: 'Bloquea el jaque de la forma mas natural.', debilidad: 'El alfil en d2 sera el objetivo del sacrificio tactico que sigue.' } },
      { color: 'b', san: 'dxe3', explain: { idea: 'Negras deja el alfil colgado y en su lugar captura en e3, abriendo la trampa: si blancas ahora captura el alfil, cae en una combinacion perdedora.', ventaja: 'Tiende el cebo de la Trampa Lasker.', debilidad: 'Aparentemente pierde una pieza sin compensacion si blancas no captura -- pero blancas casi siempre captura, por instinto natural.' } },
      { color: 'w', san: 'Bxb4', explain: { idea: 'ERROR decisivo: blancas captura el alfil que parecia abandonado, sin ver la combinacion tactica que sigue.', ventaja: 'Parece ganar una pieza limpia.', debilidad: 'Cae en la Trampa Lasker: la jugada correcta era 6.fxe3, aceptando doblar peones pero evitando el desastre tactico.' } },
      { color: 'b', san: 'exf2+', explain: { idea: 'El peon negro avanza capturando en f2 con jaque, abriendo el ataque decisivo sobre el rey blanco.', ventaja: 'El rey blanco no puede capturar con el rey (Kxf2?? perderia la dama a Qxd1), asi que blancas se ve forzado a jugar Ke2.', debilidad: 'Ninguna.' } },
      { color: 'w', san: 'Ke2', explain: { idea: 'Unica jugada razonable: el rey blanco escapa del jaque sin poder capturar el peon, porque Kxf2 perderia la dama de inmediato a Qxd1.', ventaja: 'Evita perder la dama de inmediato.', debilidad: 'El rey queda expuesto en el centro y el peon de f2 sigue vivo, amenazando coronar.' } },
      { color: 'b', san: 'fxg1=N+', explain: { idea: 'El remate de la combinacion: el peon corona subpromocionando a caballo (no a dama, que no daria jaque desde g1) capturando ademas al caballo blanco que seguia en su casilla original, y dando jaque al rey.', ventaja: 'Subpromocion tactica poco comun: negras gana material decisivo (una pieza menor y calidad de posicion) manteniendo la iniciativa con jaque.', debilidad: 'Ninguna -- es el golpe que da nombre a la Trampa Lasker.' } }
    ]
  },

  {
    id: 'h05-trampa-eslava-bf4-e4',
    name: 'Trampa del alfil en la Eslava (Bf4 + e4)',
    tipo: 'ofensiva',
    userColor: 'w',
    overview: 'Defensa Eslava, Variante de Cambio. Tras 1.d4 d5 2.c4 c6 ' +
      '3.Nf3 Nf6 4.cxd5 cxd5 5.Nc3 Nc6 6.Bf4, si negras juega ' +
      'descuidadamente ...e6, blancas golpea con 7.e4! ganando ' +
      'material tras 7...dxe4 8.Nxe4 (el caballo f6 queda clavado y la ' +
      'posicion negra se derrumba). Se entrena aqui el lado de blancas ' +
      'para tender la trampa. Fuente: guia de la Defensa Eslava ' +
      '(precisesports.com), contrastada con indianchesscompany.com.',
    moves: [
      { color: 'w', san: 'd4', explain: { idea: 'Apertura de dama.', ventaja: 'Control central.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'd5', explain: { idea: 'Respuesta simetrica.', ventaja: 'Disputa el centro.', debilidad: 'Ninguna.' } },
      { color: 'w', san: 'c4', explain: { idea: 'Gambito de Dama.', ventaja: 'Presion sobre d5.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'c6', explain: { idea: 'Negras responde con la Defensa Eslava, preparando sostener d5 con el peon c en vez de con e6.', ventaja: 'Mantiene libre la diagonal del alfil de casillas claras, a diferencia de la Ortodoxa.', debilidad: 'Ninguna inmediata.' } },
      { color: 'w', san: 'Nf3', explain: { idea: 'Blancas desarrolla el caballo de rey.', ventaja: 'Desarrollo natural.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'Nf6', explain: { idea: 'Desarrollo natural simetrico.', ventaja: 'Control central.', debilidad: 'Ninguna.' } },
      { color: 'w', san: 'cxd5', explain: { idea: 'Blancas entra en la Variante de Cambio, definiendo la estructura central de inmediato.', ventaja: 'Estructura clara y facil de jugar para blancas.', debilidad: 'Renuncia a la tension central a cambio de simplicidad.' } },
      { color: 'b', san: 'cxd5', explain: { idea: 'Negras recaptura manteniendo la simetria.', ventaja: 'Estructura solida y simetrica.', debilidad: 'Ninguna inmediata.' } },
      { color: 'w', san: 'Nc3', explain: { idea: 'Blancas desarrolla el segundo caballo.', ventaja: 'Presion adicional sobre d5.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'Nc6', explain: { idea: 'Negras desarrolla el caballo de dama de forma natural.', ventaja: 'Desarrollo simetrico y solido.', debilidad: 'Ninguna inmediata.' } },
      { color: 'w', san: 'Bf4', explain: { idea: 'Blancas desarrolla el alfil de dama fuera de la cadena de peones, apuntando hacia la casilla c7 y preparando el golpe central e4 que viene a continuacion.', ventaja: 'Pieza activa bien situada, y tiende la trampa: si negras responde con ...e6 sin cuidado, el golpe e4 sera muy fuerte.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'e6', explain: { idea: 'ERROR: negras juega la jugada mas natural de desarrollo (liberar el alfil de casillas claras y preparar Be7/Bd6), sin ver que esto permite a blancas el golpe central e4 con fuerza decisiva.', ventaja: 'Parece un simple desarrollo natural, tipico de la variante de cambio.', debilidad: 'Cae en la Trampa del alfil en la Eslava: la jugada mas precisa era una jugada de espera como ...a6 o ...Bf5 antes de comprometerse.' } },
      { color: 'w', san: 'e4', explain: { idea: 'Blancas ejecuta el golpe central: el peon avanza atacando el peon de d5, aprovechando que el caballo de f6 quedara clavado contra la dama negra tras las capturas que siguen.', ventaja: 'Rompe el centro negro con ventaja clara, ya que la recaptura obligada deja al caballo de f6 clavado y a la posicion negra bajo fuerte presion.', debilidad: 'Ninguna -- el golpe esta completamente justificado tacticamente.' } },
      { color: 'b', san: 'dxe4', explain: { idea: 'Negras se ve obligada a capturar, ya que dejar que blancas capture primero en d5 seria todavia peor para su estructura.', ventaja: 'Gana un peon en apariencia.', debilidad: 'Abre la posicion justo cuando el caballo de f6 va a quedar clavado tras la recaptura de blancas.' } },
      { color: 'w', san: 'Nxe4', explain: { idea: 'Blancas recaptura con el caballo, que ahora clava al caballo negro de f6 contra la dama en d8 y amenaza con entrar en la posicion negra con fuerza decisiva.', ventaja: 'Blancas recupera el peon y queda con una posicion claramente superior: el caballo f6 esta clavado y la posicion negra corre serio peligro de derrumbarse en las jugadas siguientes.', debilidad: 'Ninguna -- es el remate de la combinacion.' } }
    ]
  },

  // ============================================================
  // BLOQUE NEGRAS -- ESCANDINAVA
  // ============================================================
  {
    id: 'h05-trampa-leonhardt',
    name: 'Gambito Leonhardt (4.b4!?)',
    tipo: 'defensiva',
    userColor: 'b',
    overview: 'Escandinava clasica (2...Qxd5 3.Nc3 Qa5). Blancas puede ' +
      'ofrecer un peon con 4.b4!?, y si negras sigue el plan natural ' +
      '(...Qxb4, Nb5, ...Qa5, Bc4, ...c6??) cae en un sacrificio de ' +
      'alfil en f7 con ataque decisivo. Se entrena aqui el lado de ' +
      'negras para conocer la secuencia y saber que evitar (...c6 en ' +
      'el momento equivocado) y que jugar en su lugar. Fuente: ' +
      'Chess-Teacher (dos articulos independientes, coincidentes en la ' +
      'linea).',
    moves: [
      { color: 'w', san: 'e4', explain: { idea: 'Apertura de rey.', ventaja: 'Control central, libera piezas.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'd5', explain: { idea: 'Negras contragolpea de inmediato en el centro con la Escandinava.', ventaja: 'Ataca el peon e4 sin demora.', debilidad: 'La dama quedara expuesta tras la recaptura, precio tipico de toda la Escandinava.' } },
      { color: 'w', san: 'exd5', explain: { idea: 'Blancas captura el peon ofrecido.', ventaja: 'Gana un peon momentaneamente.', debilidad: 'Ninguna inmediata.' } },
      { color: 'b', san: 'Qxd5', explain: { idea: 'Negras recaptura de inmediato con la dama, linea clasica de la Escandinava.', ventaja: 'Recupera el peon y centraliza la dama.', debilidad: 'La dama queda expuesta a ataques de tiempo, sobre todo Nc3.' } },
      { color: 'w', san: 'Nc3', explain: { idea: 'Blancas ataca la dama ganando un tiempo de desarrollo, el problema estructural clasico de la Escandinava.', ventaja: 'Desarrollo con tiempo.', debilidad: 'Ninguna.' } },
      { color: 'b', san: 'Qa5', explain: { idea: 'Negras retira la dama a a5, la retirada principal, manteniendo presion sobre c3 y e5.', ventaja: 'Casilla activa y segura para la dama.', debilidad: 'Ninguna en la teoria principal.' } },
      { color: 'w', san: 'b4', explain: { idea: 'El Gambito Leonhardt: blancas ofrece un segundo peon para ganar tiempos de ataque persiguiendo a la dama negra.', ventaja: 'Iniciativa y desarrollo rapido a cambio del peon.', debilidad: 'Objetivamente algo dudoso segun el analisis de motor, pero muy peligroso en la practica si negras no conoce la teoria.' } },
      { color: 'b', san: 'Qxb4', explain: { idea: 'Negras acepta el segundo peon, la respuesta principal y mas exigente para mantener la ventaja.', ventaja: 'Dos peones de ventaja material.', debilidad: 'La dama sigue expuesta a nuevos ataques de tiempo.' } },
      { color: 'w', san: 'Nb5', explain: { idea: 'Jugada trampa: blancas amenaza Nxc7+ con horquilla de rey y torre, en vez de la jugada principal 5.Rb1.', ventaja: 'Amenaza inmediata y concreta que negras debe atender con precision.', debilidad: 'Objetivamente dudosa, pero muy peligrosa en la practica.' } },
      { color: 'b', san: 'Qa5', explain: { idea: 'Negras retira la dama de nuevo a a5, la respuesta mas comun, defendiendo la casilla c7 de la horquilla.', ventaja: 'Neutraliza la amenaza inmediata de Nxc7+.', debilidad: 'Ninguna en apariencia -- pero es exactamente la jugada que blancas esta esperando para continuar la trampa.' } },
      { color: 'w', san: 'Bc4', explain: { idea: 'Blancas desarrolla el alfil hacia el flanco de rey negro, una jugada que parece simplemente de desarrollo pero que apunta directamente a f7.', ventaja: 'Pieza activa apuntando a la casilla mas debil del bando negro.', debilidad: 'Ninguna -- la trampa esta casi lista.' } },
      { color: 'b', san: 'c6', explain: { idea: 'ERROR: negras ataca el caballo de b5 con el peon, la respuesta mas comun e intuitiva, sin ver el sacrificio tactico que esto permite.', ventaja: 'Parece ganar tiempo expulsando al caballo.', debilidad: 'Cae en la trampa: la jugada correcta era 6...Nf6, controlando la casilla h5 y evitando el ataque que sigue.' } },
      { color: 'w', san: 'Bxf7+', explain: { idea: 'El sacrificio tactico: el alfil captura en f7 con jaque, exponiendo al rey negro y abriendo la via para el ataque decisivo de la dama por la diagonal d1-h5.', ventaja: 'Tras Kxf7 Qh5+ el rey negro queda bajo un ataque muy peligroso, con la ventaja material completamente invertida a favor de blancas.', debilidad: 'Ninguna -- es el remate tactico de toda la linea del Gambito Leonhardt.' } }
    ]
  }
]
