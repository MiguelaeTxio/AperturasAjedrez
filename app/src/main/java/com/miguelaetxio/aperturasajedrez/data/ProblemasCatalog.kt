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
        )
        // Nota S6: aqui se anadiran, en lotes verificados, las 33
        // posiciones de Lichess de solucion larga (ampliacion de
        // Grandes Partidas) y, con nivel = Nivel.LICHESS, las 267
        // entradas nuevas del banco "Problemas de ajedrez" -- ver
        // ANNEX_H04.md, hoja de ruta.
    )
}
