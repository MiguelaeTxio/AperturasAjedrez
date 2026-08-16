package com.miguelaetxio.aperturasajedrez.data

/**
 * Metadatos de cada problema tactico para el selector nativo. El id
 * debe coincidir exactamente con el id declarado en
 * app/src/main/assets/www/js/problemas.js -- mismo patron que
 * RepertoireCatalog/FinalesCatalog, ver ANNEX_H04.md.
 *
 * Todos los ids de problemas llevan el prefijo "h04-problema-" para
 * evitar colision con lineas y finales al buscar en el array
 * combinado dentro de game.js.
 *
 * S7: la base original de 4 niveles (1-4) se quedaba muy por debajo
 * del rango que necesita entrenar Miguel Angel (ELO 1700-2200) y la
 * progresion no reflejaba una diferencia de dificultad real relevante
 * para el. Se colapsaron esos problemas en una unica etiqueta honesta
 * (NINOS) y se anadio TORNEO con partidas reales completas.
 *
 * S6 (segunda reapertura del hito via PCH): Miguel Angel senalo que
 * la seccion de problemas no se parecia a un banco de problemas real
 * (comparado con Chess.com/Lichess) -- posicion suelta, solucion
 * corta, clasificada por tema tactico real y rating. Se investigo el
 * patron real y se importaron problemas verificados desde la base
 * publica de Lichess (database.lichess.org, CC0), anadiendo el nivel
 * LICHESS. Las posiciones de solucion larga (7/9/11 semijugadas) que
 * no encajan con el patron de "problema corto" se incorporaron a
 * TORNEO en vez de descartarse (decision explicita de Miguel Angel:
 * "ya que las tenemos no las vamos a tirar").
 *
 * Los tres niveles se sirven cada uno con su propio boton en
 * CategorySelectorActivity, directo a BoardActivity con la cola
 * barajada -- Miguel Angel senalo explicitamente en S8 que no quiere
 * elegir de una lista de problemas, y en S9 que el orden se baraja en
 * cada sesion para no memorizar por posicion. Ningun nivel usa
 * OpeningSelectorActivity.
 */
enum class Nivel(val etiqueta: String) {
    NINOS("Iniciación -- problemas para niños hasta 10 años"),
    TORNEO("Grandes Partidas -- táctica real de torneo (1700-2200)"),
    LICHESS("Problemas de ajedrez -- banco táctico verificado (1700-2200)")
}

data class ProblemEntry(
    val id: String,
    val title: String,
    val tema: String,
    val nivel: Nivel,
    val rating: Int? = null
)

object ProblemasCatalog {
    val entries: List<ProblemEntry> = listOf(
        // ---- Iniciación -- problemas para niños hasta 10 años (S7, ex Niveles 1-4) ----
        ProblemEntry(
            id = "h04-problema-mate-legal",
            title = "El Mate de Legal -- la clavada que no era tal",
            tema = "Clavada falsa (partida real, 1750)",
            nivel = Nivel.NINOS
        ),
        ProblemEntry(
            id = "h04-problema-horquilla-caballo",
            title = "Horquilla de caballo",
            tema = "Horquilla",
            nivel = Nivel.NINOS
        ),
        ProblemEntry(
            id = "h04-problema-mate-en-1",
            title = "Mate en 1: la fila trasera",
            tema = "Mate en 1",
            nivel = Nivel.NINOS
        ),
        ProblemEntry(
            id = "h04-problema-mate-anastasia",
            title = "Mate de Anastasia",
            tema = "Mate con nombre propio",
            nivel = Nivel.NINOS
        ),
        ProblemEntry(
            id = "h04-problema-clavada-caballo",
            title = "Clavada absoluta",
            tema = "Clavada",
            nivel = Nivel.NINOS
        ),
        ProblemEntry(
            id = "h04-problema-descubierta-caballo",
            title = "Jaque a la descubierta",
            tema = "Ataque a la descubierta",
            nivel = Nivel.NINOS
        ),
        ProblemEntry(
            id = "h04-problema-doble-ataque-torre",
            title = "Doble ataque de torre",
            tema = "Doble ataque de torre",
            nivel = Nivel.NINOS
        ),
        ProblemEntry(
            id = "h04-problema-mate-boden",
            title = "Mate de Boden -- la Inmortal Peruana",
            tema = "Mate con nombre propio (partida real, 1934)",
            nivel = Nivel.NINOS
        ),
        ProblemEntry(
            id = "h04-problema-sobrecarga-torre",
            title = "Sobrecarga de la torre defensora",
            tema = "Sobrecarga",
            nivel = Nivel.NINOS
        ),
        ProblemEntry(
            id = "h04-problema-desviacion-dama",
            title = "Desviación de la dama defensora",
            tema = "Desviación",
            nivel = Nivel.NINOS
        ),
        ProblemEntry(
            id = "h04-problema-mate-en-2",
            title = "Mate en 2: la última casilla",
            tema = "Mate en 2",
            nivel = Nivel.NINOS
        ),
        ProblemEntry(
            id = "h04-problema-mate-sofocado",
            title = "Mate sofocado -- el Legado de Philidor",
            tema = "Mate sofocado (partida clásica, doc. desde 1497)",
            nivel = Nivel.NINOS
        ),
        ProblemEntry(
            id = "h04-problema-atraccion-peon",
            title = "Atracción a una casilla forzada",
            tema = "Atracción",
            nivel = Nivel.NINOS
        ),
        ProblemEntry(
            id = "h04-problema-subpromocion-caballo",
            title = "Subpromoción a caballo con jaque",
            tema = "Promoción forzada",
            nivel = Nivel.NINOS
        ),
        // ---- Grandes Partidas -- táctica real de torneo, 1700-2200 (S7) ----
        ProblemEntry(
            id = "h04-problema-mate-reti-tartakower",
            title = "Reti vs Tartakower -- la miniatura más famosa de la historia",
            tema = "Sacrificio de dama + mate (partida real, Viena 1910)",
            nivel = Nivel.TORNEO
        ),
        ProblemEntry(
            id = "h04-problema-inmortal-anderssen",
            title = "La Partida Inmortal -- Anderssen vs Kieseritzky",
            tema = "Sacrificio de dama + mate puro (partida real, Londres 1851)",
            nivel = Nivel.TORNEO
        ),
        ProblemEntry(
            id = "h04-problema-molino-torre-lasker",
            title = "El Molino -- Torre vs Lasker",
            tema = "Jaque a la descubierta en cadena (partida real, Moscú 1925)",
            nivel = Nivel.TORNEO
        ),
        ProblemEntry(
            id = "h04-problema-opera-morphy",
            title = "La Partida de la Ópera -- Morphy vs Duque de Brunswick",
            tema = "Sacrificio de dama + mate con torre (partida real, París 1858)",
            nivel = Nivel.TORNEO
        ),
        ProblemEntry(
            id = "h04-problema-perenne-anderssen",
            title = "La Partida Perenne -- Anderssen vs Dufresne",
            tema = "Sacrificio de dama + mate con dos alfiles (partida real, Berlín 1852)",
            nivel = Nivel.TORNEO
        ),
        ProblemEntry(
            id = "h04-problema-lluvia-oro-marshall",
            title = "La Lluvia de Oro -- Levitsky vs Marshall",
            tema = "Sacrificio de dama triple e irrechazable (partida real, Breslau 1912)",
            nivel = Nivel.TORNEO
        ),
        ProblemEntry(
            id = "h04-problema-inmortal-rubinstein",
            title = "La Inmortal de Rubinstein -- Rotlewi vs Rubinstein",
            tema = "Doble sacrificio de torre y dama (partida real, Lodz 1907)",
            nivel = Nivel.TORNEO
        ),
        // ---- Problemas de ajedrez -- banco tactico Lichess, lote 1 de varios (S6) ----
        ProblemEntry(
            id = "h04-problema-lichess-ykesE",
            title = "Jaque que aleja al rey y deja una pieza colgada",
            tema = "Pieza colgada tras jaque forzado",
            nivel = Nivel.LICHESS,
            rating = 1748
        ),
        ProblemEntry(
            id = "h04-problema-lichess-NqiJs",
            title = "Sacrificio de calidad para desnudar al rey blanco",
            tema = "Ataque al rey con entrega de material",
            nivel = Nivel.LICHESS,
            rating = 2173
        ),
        ProblemEntry(
            id = "h04-problema-lichess-WlrCx",
            title = "Cambio de torres seguido de jaque que gana la segunda torre",
            tema = "Skewer -- ataque a distancia sobre dos piezas alineadas",
            nivel = Nivel.LICHESS,
            rating = 1901
        ),
        ProblemEntry(
            id = "h04-problema-lichess-8lgKs",
            title = "Jaque a la descubierta que gana la dama",
            tema = "Ataque a la descubierta",
            nivel = Nivel.LICHESS,
            rating = 1859
        ),
        ProblemEntry(
            id = "h04-problema-lichess-IEddA",
            title = "Cadena de jaques que arrastra al rey lejos de su torre",
            tema = "Desviación mediante jaques en cadena",
            nivel = Nivel.LICHESS,
            rating = 2003
        ),
        ProblemEntry(
            id = "h04-problema-lichess-GUI2f",
            title = "Recuperar la pieza y entrar con jaque",
            tema = "Pieza colgada + jaque de caballo",
            nivel = Nivel.LICHESS,
            rating = 1718
        ),
        ProblemEntry(
            id = "h04-problema-lichess-qLPPB",
            title = "Sacrificio de caballo para abrir la columna del peón pasado",
            tema = "Sacrificio para coronar",
            nivel = Nivel.LICHESS,
            rating = 1952
        ),
        ProblemEntry(
            id = "h04-problema-lichess-TzaYa",
            title = "Mate en 1 con la torre ya infiltrada",
            tema = "Mate en 1",
            nivel = Nivel.LICHESS,
            rating = 1749
        ),
        ProblemEntry(
            id = "h04-problema-lichess-XnmNN",
            title = "Torre que se sacrifica para arrastrar al rey al mate",
            tema = "Mate en 2 con atracción de torre",
            nivel = Nivel.LICHESS,
            rating = 1793
        ),
        ProblemEntry(
            id = "h04-problema-lichess-JGKE5",
            title = "Jaque de alfil que abre la puerta al mate con torre",
            tema = "Mate en 3 con ataque de alfil y torre",
            nivel = Nivel.LICHESS,
            rating = 1864
        ),
        ProblemEntry(
            id = "h04-problema-lichess-i223v",
            title = "Atracción del rey con sacrificio de torre para rematar con la dama",
            tema = "Atracción del rey + mate con dama",
            nivel = Nivel.LICHESS,
            rating = 1793
        ),
        ProblemEntry(
            id = "h04-problema-lichess-kPRMK",
            title = "Doble sacrificio en f2 que abre el rey blanco",
            tema = "Ataque al rey en el flanco de rey",
            nivel = Nivel.LICHESS,
            rating = 1771
        ),
        ProblemEntry(
            id = "h04-problema-lichess-JNTkc",
            title = "Cadena de jaques de dama que termina ganando una torre",
            tema = "Ataque con la dama al rey expuesto",
            nivel = Nivel.LICHESS,
            rating = 1950
        ),
        ProblemEntry(
            id = "h04-problema-lichess-Pd5wv",
            title = "Cambio de torres seguido de un alfil que se cuela hasta capturar la última",
            tema = "Infiltración de alfil tras cambio de torres",
            nivel = Nivel.LICHESS,
            rating = 2070
        ),
        ProblemEntry(
            id = "h04-problema-lichess-4B1n1",
            title = "Jaque intermedio de caballo antes de capturar la torre",
            tema = "Jaque intermedio (zwischenzug)",
            nivel = Nivel.LICHESS,
            rating = 1864
        ),
        // ---- Problemas de ajedrez -- banco tactico Lichess, lote 2 de varios (S6) ----
        ProblemEntry(
            id = "h04-problema-lichess-e0rv2",
            title = "Clavada absoluta que condena a la dama",
            tema = "Clavada absoluta",
            nivel = Nivel.LICHESS,
            rating = 2001
        ),
        ProblemEntry(
            id = "h04-problema-lichess-VesSW",
            title = "Pareja de peones pasados que corren hacia la coronación",
            tema = "Peón pasado avanzado",
            nivel = Nivel.LICHESS,
            rating = 2100
        ),
        ProblemEntry(
            id = "h04-problema-lichess-sLTOx",
            title = "Mate en 2 con la dama sola",
            tema = "Mate en 2",
            nivel = Nivel.LICHESS,
            rating = 2039
        ),
        ProblemEntry(
            id = "h04-problema-lichess-DYSlo",
            title = "Sacrificio de torre y horquilla de caballo con jaque",
            tema = "Atracción del rey + horquilla de caballo",
            nivel = Nivel.LICHESS,
            rating = 1980
        ),
        ProblemEntry(
            id = "h04-problema-lichess-bFldI",
            title = "Sacrificio de dama que destruye la defensa del rey blanco",
            tema = "Ataque al enroque con sacrificio de dama",
            nivel = Nivel.LICHESS,
            rating = 1959
        ),
        ProblemEntry(
            id = "h04-problema-lichess-Cm6Pq",
            title = "El Molino -- jaque a la descubierta en cadena",
            tema = "Molino -- jaque a la descubierta en cadena",
            nivel = Nivel.LICHESS,
            rating = 1933
        ),
        ProblemEntry(
            id = "h04-problema-lichess-Mv7Qi",
            title = "Dos torres colgadas, una tras otra",
            tema = "Piezas colgadas",
            nivel = Nivel.LICHESS,
            rating = 1927
        ),
        ProblemEntry(
            id = "h04-problema-lichess-tuguo",
            title = "Cambio de torres y jugada tranquila que decide la partida",
            tema = "Despeje de columna + jugada tranquila decisiva",
            nivel = Nivel.LICHESS,
            rating = 2175
        ),
        ProblemEntry(
            id = "h04-problema-lichess-OVhPV",
            title = "Cadena de capturas con jaque que arrasa el centro",
            tema = "Desviación mediante jaques",
            nivel = Nivel.LICHESS,
            rating = 1784
        ),
        ProblemEntry(
            id = "h04-problema-lichess-l8hsK",
            title = "Pareja de peones pasados conectados que deciden el final",
            tema = "Peones pasados conectados",
            nivel = Nivel.LICHESS,
            rating = 2003
        ),
        ProblemEntry(
            id = "h04-problema-lichess-e9sBZ",
            title = "Maniobra de dama que deja un caballo colgado",
            tema = "Pieza colgada tras maniobra de dama",
            nivel = Nivel.LICHESS,
            rating = 2125
        ),
        ProblemEntry(
            id = "h04-problema-lichess-AjQQJ",
            title = "Torre activa que acosa al rey blanco sin tregua",
            tema = "Torre activa acosando al rey",
            nivel = Nivel.LICHESS,
            rating = 1991
        ),
        ProblemEntry(
            id = "h04-problema-lichess-2Iwcz",
            title = "Cambios forzados que dejan un caballo colgado",
            tema = "Cambios que dejan una pieza colgada",
            nivel = Nivel.LICHESS,
            rating = 1702
        ),
        ProblemEntry(
            id = "h04-problema-lichess-OGNVL",
            title = "Jaque a la descubierta desesperado que pierde la dama",
            tema = "Jaque a la descubierta que gana la dama",
            nivel = Nivel.LICHESS,
            rating = 1883
        ),
        ProblemEntry(
            id = "h04-problema-lichess-ahJ7v",
            title = "Dos peones limpios ganados a cambio de nada",
            tema = "Peones sueltos con jaques en cadena",
            nivel = Nivel.LICHESS,
            rating = 2036
        ),
        // ---- Problemas de ajedrez -- banco tactico Lichess, lote 3 de varios (S6) ----
        ProblemEntry(
            id = "h04-problema-lichess-SoVfe",
            title = "Ganar una pieza y enrocar a salvo en la misma combinación",
            tema = "Enroque que pone al rey a salvo tras ganar material",
            nivel = Nivel.LICHESS,
            rating = 1956
        ),
        ProblemEntry(
            id = "h04-problema-lichess-ajnHD",
            title = "Rey centralizado que prepara ganar la calidad",
            tema = "Rey activo + ganancia de calidad",
            nivel = Nivel.LICHESS,
            rating = 2171
        ),
        ProblemEntry(
            id = "h04-problema-lichess-Jt6AB",
            title = "Cambio de alfiles seguido de un jaque que gana el caballo",
            tema = "Horquilla de dama con jaque",
            nivel = Nivel.LICHESS,
            rating = 1770
        ),
        ProblemEntry(
            id = "h04-problema-lichess-TzuOi",
            title = "Jaque de dama que ataca al rey y al caballo a la vez",
            tema = "Horquilla de dama (jaque + ataque doble en la misma fila)",
            nivel = Nivel.LICHESS,
            rating = 1905
        ),
        ProblemEntry(
            id = "h04-problema-lichess-Ifth5",
            title = "Doble jaque de dama y caballo que termina ganando la dama rival",
            tema = "Horquilla de caballo con jaque",
            nivel = Nivel.LICHESS,
            rating = 2027
        ),
        ProblemEntry(
            id = "h04-problema-lichess-Iedeo",
            title = "Ruptura de peones que crea un pasado decisivo",
            tema = "Ruptura de peones en el final",
            nivel = Nivel.LICHESS,
            rating = 1729
        ),
        ProblemEntry(
            id = "h04-problema-lichess-cYenw",
            title = "Reposicionar la torre antes de ganar un peón con jaque",
            tema = "Torre reposicionada que gana un peón con jaque",
            nivel = Nivel.LICHESS,
            rating = 2143
        ),
        ProblemEntry(
            id = "h04-problema-lichess-DexMu",
            title = "Serie de cambios en la columna d que termina con la dama infiltrada",
            tema = "Serie de cambios que abren la última fila",
            nivel = Nivel.LICHESS,
            rating = 1962
        ),
        ProblemEntry(
            id = "h04-problema-lichess-veHYi",
            title = "El rey busca refugio del jaque de torre",
            tema = "Jugada defensiva del rey en el final",
            nivel = Nivel.LICHESS,
            rating = 1964
        ),
        ProblemEntry(
            id = "h04-problema-lichess-kS3Wz",
            title = "Rey que se come el peón rival antes de coronar el propio",
            tema = "Peón pasado con apoyo del rey",
            nivel = Nivel.LICHESS,
            rating = 1960
        ),
        ProblemEntry(
            id = "h04-problema-lichess-IKzCR",
            title = "Cadena de jaques que termina ganando una torre",
            tema = "Jaques en cadena que ganan una torre",
            nivel = Nivel.LICHESS,
            rating = 2068
        ),
        ProblemEntry(
            id = "h04-problema-lichess-SGfi1",
            title = "Rey que recupera material y avanza en el final de peones",
            tema = "Rey activo en el final de peones",
            nivel = Nivel.LICHESS,
            rating = 2095
        ),
        ProblemEntry(
            id = "h04-problema-lichess-Tcg5p",
            title = "Mate en 2 con el caballo abriendo camino",
            tema = "Mate en 2 con caballo y torre",
            nivel = Nivel.LICHESS,
            rating = 1707
        ),
        ProblemEntry(
            id = "h04-problema-lichess-kp2p6",
            title = "El rey esquiva el jaque de caballo en un final de peones",
            tema = "Jugada defensiva del rey ante jaque de caballo",
            nivel = Nivel.LICHESS,
            rating = 2053
        ),
        ProblemEntry(
            id = "h04-problema-lichess-JZQf1",
            title = "Cambio de torres seguido de un jaque que remata en la segunda fila",
            tema = "Atracción del rey mediante cambio y jaque",
            nivel = Nivel.LICHESS,
            rating = 1865
        ),
        // ---- Problemas de ajedrez -- banco tactico Lichess, lote 4 de varios (S6) ----
        ProblemEntry(
            id = "h04-problema-lichess-ZvuQ7",
            title = "Sacrificio de caballo que desvía a la torre y abre paso al mate",
            tema = "Desviación con sacrificio + mate de dama",
            nivel = Nivel.LICHESS,
            rating = 1810
        ),
        ProblemEntry(
            id = "h04-problema-lichess-x4tWa",
            title = "Doble jaque de dama que termina ganando un alfil",
            tema = "Jaques en cadena que ganan una pieza",
            nivel = Nivel.LICHESS,
            rating = 1817
        ),
        ProblemEntry(
            id = "h04-problema-lichess-gssgO",
            title = "Jugada tranquila que gana una torre a cambio de un cambio favorable",
            tema = "Jugada tranquila que provoca un error",
            nivel = Nivel.LICHESS,
            rating = 2075
        ),
        ProblemEntry(
            id = "h04-problema-lichess-ACqPh",
            title = "Infiltración de dama que gana un caballo con jaque",
            tema = "Ataque al enroque con infiltración de dama",
            nivel = Nivel.LICHESS,
            rating = 2018
        ),
        ProblemEntry(
            id = "h04-problema-lichess-Ng7ji",
            title = "Mate de la charretera -- el rey sin escape entre sus propias piezas",
            tema = "Mate de la charretera (epaulette mate)",
            nivel = Nivel.LICHESS,
            rating = 1838
        ),
        ProblemEntry(
            id = "h04-problema-lichess-3aH47",
            title = "El rey abandona la defensa de su peón para perseguir a la torre",
            tema = "Jugada defensiva del rey en un final de torres y peones",
            nivel = Nivel.LICHESS,
            rating = 1954
        ),
        ProblemEntry(
            id = "h04-problema-lichess-rJPsB",
            title = "Torre activa que se infiltra y da jaque en un final de torres",
            tema = "Torre activa en el final de torres",
            nivel = Nivel.LICHESS,
            rating = 1868
        ),
        ProblemEntry(
            id = "h04-problema-lichess-lqmjJ",
            title = "Ganancia de un alfil tras ceder espacio en el flanco de dama",
            tema = "Pieza colgada tras jugada de flanco",
            nivel = Nivel.LICHESS,
            rating = 1780
        ),
        ProblemEntry(
            id = "h04-problema-lichess-903v2",
            title = "Mate en 2 con la dama sola tras un jaque de atracción",
            tema = "Mate en 2",
            nivel = Nivel.LICHESS,
            rating = 1879
        ),
        ProblemEntry(
            id = "h04-problema-lichess-wAez3",
            title = "Eliminar al defensor antes de ganar la pieza que protegía",
            tema = "Eliminación del defensor",
            nivel = Nivel.LICHESS,
            rating = 1700
        ),
        ProblemEntry(
            id = "h04-problema-lichess-oL2HD",
            title = "Peón a un paso de coronar que decide el final",
            tema = "Peón pasado a un paso de coronar",
            nivel = Nivel.LICHESS,
            rating = 1829
        ),
        ProblemEntry(
            id = "h04-problema-lichess-dM6Aj",
            title = "Jaque de alfil que atrae a la dama y permite ganarla con el caballo",
            tema = "Atracción de la dama + horquilla de caballo",
            nivel = Nivel.LICHESS,
            rating = 1886
        ),
        ProblemEntry(
            id = "h04-problema-lichess-ph8SQ",
            title = "Mate en 2 con la dama infiltrada en la segunda fila",
            tema = "Mate en 2",
            nivel = Nivel.LICHESS,
            rating = 1963
        ),
        ProblemEntry(
            id = "h04-problema-lichess-xYv8L",
            title = "Jaque de dama seguido de una torre que se reagrupa a la defensa",
            tema = "Jugada defensiva tras jaque",
            nivel = Nivel.LICHESS,
            rating = 2142
        ),
        ProblemEntry(
            id = "h04-problema-lichess-bCQG7",
            title = "Ruptura de peones en un final de alfiles de distinto color",
            tema = "Ruptura de peones en final de alfiles",
            nivel = Nivel.LICHESS,
            rating = 1965
        ),
        // ---- Problemas de ajedrez -- banco tactico Lichess, lote 5 de varios (S6) ----
        ProblemEntry(
            id = "h04-problema-lichess-nlP5G",
            title = "Cambio de peones que deja el mejor final para negras",
            tema = "Cambios de peones en el final",
            nivel = Nivel.LICHESS,
            rating = 2126
        ),
        ProblemEntry(
            id = "h04-problema-lichess-b7xPT",
            title = "Jaque de caballo que abre paso a la captura de la dama",
            tema = "Jaque de caballo que gana la dama",
            nivel = Nivel.LICHESS,
            rating = 2141
        ),
        ProblemEntry(
            id = "h04-problema-lichess-BJ5Uu",
            title = "Mate en 2 con las dos torres coordinadas",
            tema = "Mate en 2 con dos torres",
            nivel = Nivel.LICHESS,
            rating = 1705
        ),
        ProblemEntry(
            id = "h04-problema-lichess-ft0mf",
            title = "Coronación que se cambia por la dama rival y remata ganando una torre",
            tema = "Coronación con cambio de damas",
            nivel = Nivel.LICHESS,
            rating = 1972
        ),
        ProblemEntry(
            id = "h04-problema-lichess-F4Idw",
            title = "Cambio de peones seguido de una carrera de reyes",
            tema = "Carrera de reyes en el final de peones",
            nivel = Nivel.LICHESS,
            rating = 2096
        ),
        ProblemEntry(
            id = "h04-problema-lichess-aX79s",
            title = "Cambio de damas tras una cadena de jaques",
            tema = "Cambio de damas tras jaques en cadena",
            nivel = Nivel.LICHESS,
            rating = 2189
        ),
        ProblemEntry(
            id = "h04-problema-lichess-RL0ts",
            title = "Sacrificio de torre que atrae al rey al mate con la dama",
            tema = "Atracción del rey con doble sacrificio de torre",
            nivel = Nivel.LICHESS,
            rating = 2088
        ),
        ProblemEntry(
            id = "h04-problema-lichess-0YH84",
            title = "Doble sacrificio de caballo y torre que gana material con jaques",
            tema = "Atracción del rey con doble sacrificio",
            nivel = Nivel.LICHESS,
            rating = 1818
        ),
        ProblemEntry(
            id = "h04-problema-lichess-jXayg",
            title = "Cambio de damas seguido de jaque de alfil y mate de torre",
            tema = "Atracción del rey + mate con torre",
            nivel = Nivel.LICHESS,
            rating = 1931
        ),
        ProblemEntry(
            id = "h04-problema-lichess-rhFqG",
            title = "Sacrificio de dama con jaque que remata ganando un caballo",
            tema = "Sacrificio de dama con jaque",
            nivel = Nivel.LICHESS,
            rating = 1724
        ),
        ProblemEntry(
            id = "h04-problema-lichess-GIPQG",
            title = "Carrera de peones que el rey blanco gana por un tiempo",
            tema = "Carrera de peones en el final de reyes",
            nivel = Nivel.LICHESS,
            rating = 1885
        ),
        ProblemEntry(
            id = "h04-problema-lichess-hDp7t",
            title = "Cambio de piezas que termina con la dama y la torre ganadas",
            tema = "Serie de cambios favorables en la columna d",
            nivel = Nivel.LICHESS,
            rating = 2088
        ),
        ProblemEntry(
            id = "h04-problema-lichess-BQZnp",
            title = "Cambio de alfiles que despeja el camino a un jaque decisivo",
            tema = "Despeje de diagonal + jaque decisivo",
            nivel = Nivel.LICHESS,
            rating = 1732
        ),
        ProblemEntry(
            id = "h04-problema-lichess-VTvGV",
            title = "Cambio de damas seguido de doble jaque de caballo que gana la segunda dama",
            tema = "Cambio de damas + horquilla de caballo",
            nivel = Nivel.LICHESS,
            rating = 1955
        ),
        ProblemEntry(
            id = "h04-problema-lichess-VQjo5",
            title = "Doble sacrificio en el flanco de rey que termina en mate",
            tema = "Atracción del rey con doble sacrificio + mate de torre",
            nivel = Nivel.LICHESS,
            rating = 2068
        ),
        // ---- Problemas de ajedrez -- banco tactico Lichess, lote 6 de varios (S6) ----
        ProblemEntry(
            id = "h04-problema-lichess-G5tx2",
            title = "Serie de cambios en el centro que termina con el rey a salvo",
            tema = "Jugada defensiva del rey tras una serie de cambios",
            nivel = Nivel.LICHESS,
            rating = 2001
        ),
        ProblemEntry(
            id = "h04-problema-lichess-YQYPh",
            title = "Carrera de reyes en un final de peones",
            tema = "Carrera de reyes por los peones sueltos",
            nivel = Nivel.LICHESS,
            rating = 1769
        ),
        ProblemEntry(
            id = "h04-problema-lichess-xDNK2",
            title = "Cambios forzados en la última fila que terminan en tablas de material",
            tema = "Serie de cambios forzados en el final de torres",
            nivel = Nivel.LICHESS,
            rating = 1921
        ),
        ProblemEntry(
            id = "h04-problema-lichess-kItw1",
            title = "Un peón que avanza y se come la dama rival",
            tema = "Peón avanzado que captura la dama",
            nivel = Nivel.LICHESS,
            rating = 1869
        ),
        ProblemEntry(
            id = "h04-problema-lichess-Pto26",
            title = "Sacrificio de dama clásico que abre camino al mate de torre",
            tema = "Sacrificio de dama + mate de torre",
            nivel = Nivel.LICHESS,
            rating = 1976
        ),
        ProblemEntry(
            id = "h04-problema-lichess-RZimt",
            title = "La dama negra recoge dos peones con jaques antes de retirarse a salvo",
            tema = "Dama activa que gana material con jaques",
            nivel = Nivel.LICHESS,
            rating = 1894
        ),
        ProblemEntry(
            id = "h04-problema-lichess-rdJIk",
            title = "Torre activa que persigue al rey con jaques consecutivos",
            tema = "Torre activa acosando al rey en el final",
            nivel = Nivel.LICHESS,
            rating = 1718
        ),
        ProblemEntry(
            id = "h04-problema-lichess-2v1QN",
            title = "Jaque de caballo que ataca al rey y al alfil a la vez",
            tema = "Horquilla de caballo",
            nivel = Nivel.LICHESS,
            rating = 1703
        ),
        ProblemEntry(
            id = "h04-problema-lichess-sjXiz",
            title = "El rey se aproxima antes de rematar con jaque mate",
            tema = "Aproximación del rey + mate de torre",
            nivel = Nivel.LICHESS,
            rating = 1986
        ),
        ProblemEntry(
            id = "h04-problema-lichess-YErlk",
            title = "Cambio de torres seguido de una reagrupación activa",
            tema = "Cambio de torres y reagrupación",
            nivel = Nivel.LICHESS,
            rating = 1991
        ),
        ProblemEntry(
            id = "h04-problema-lichess-5XjuM",
            title = "El rey se come un alfil suelto antes del jaque de caballo",
            tema = "Pieza colgada en el final de piezas menores",
            nivel = Nivel.LICHESS,
            rating = 2011
        ),
        ProblemEntry(
            id = "h04-problema-lichess-ZeR1l",
            title = "Mate en 2 con la dama sola tras un jaque forzado",
            tema = "Mate en 2",
            nivel = Nivel.LICHESS,
            rating = 1932
        ),
        ProblemEntry(
            id = "h04-problema-lichess-LYJ39",
            title = "Carrera de peones en dos flancos distintos",
            tema = "Carrera de peones en flancos opuestos",
            nivel = Nivel.LICHESS,
            rating = 1736
        ),
        ProblemEntry(
            id = "h04-problema-lichess-GciZt",
            title = "El rey esquiva el jaque de dama en un final ajustado",
            tema = "Jugada defensiva del rey ante jaque de dama",
            nivel = Nivel.LICHESS,
            rating = 1879
        ),
        ProblemEntry(
            id = "h04-problema-lichess-iBzti",
            title = "Sacrificio de caballo que gana la calidad",
            tema = "Sacrificio de caballo que gana la calidad",
            nivel = Nivel.LICHESS,
            rating = 2082
        ),
        // Nota S6: quedan pendientes mas lotes de "Problemas de ajedrez"
        // (177 restantes de las 267 del pool corto) y las 33 posiciones
        // de solucion larga como ampliacion de Grandes Partidas -- ver
        // ANNEX_H04.md, hoja de ruta.
    )
}
