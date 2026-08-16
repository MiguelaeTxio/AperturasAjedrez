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
        // Nota S6: quedan pendientes mas lotes de "Problemas de ajedrez"
        // (252 restantes de las 267 del pool corto) y las 33 posiciones
        // de solucion larga como ampliacion de Grandes Partidas -- ver
        // ANNEX_H04.md, hoja de ruta.
    )
}
