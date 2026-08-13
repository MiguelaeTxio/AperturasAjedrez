package com.miguelaetxio.aperturasajedrez.data

/**
 * Metadatos de cada problema tactico para el selector nativo
 * (OpeningSelectorActivity, categoria "problema"). El id debe
 * coincidir exactamente con el id declarado en
 * app/src/main/assets/www/js/problemas.js -- mismo patron que
 * RepertoireCatalog/FinalesCatalog, ver ANNEX_H04.md.
 *
 * Todos los ids de problemas llevan el prefijo "h04-problema-" para
 * evitar colision con lineas y finales al buscar en el array
 * combinado dentro de game.js. Campo "nivel" (ver [Nivel]) anadido en
 * el rediseno posterior a la primera version: la base se reconstruyo
 * con patrones y partidas reales documentadas (mate de Legal, mate de
 * Anastasia, mate de Boden -- partida completa real--, mate sofocado
 * / Legado de Philidor), organizados por dificultad real en vez de un
 * unico bloque uniforme.
 *
 * S7: Miguel Angel senalo que, pese a ese rediseno, los 15 problemas
 * originales (los de abajo con etiqueta "ninos") se quedan muy por
 * debajo de lo que necesita entrenar (ELO 1700-2200), y que la falsa
 * progresion en 4 niveles no reflejaba una diferencia de dificultad
 * real relevante para el. Se colapsan esos 15 en una sola etiqueta
 * honesta -- decision suya, literal -- y se anade [Nivel.TORNEO] con
 * 3 partidas reales completas y muy documentadas (Reti-Tartakower
 * 1910, la Inmortal de Anderssen 1851, el Molino de Torre-Lasker
 * 1925), ver la cabecera de problemas.js.
 */
enum class Nivel(val etiqueta: String) {
    NINOS("Problemas para niños hasta 10 años"),
    TORNEO("Táctica real de torneo (1700-2200)")
}

data class ProblemEntry(
    val id: String,
    val title: String,
    val tema: String,
    val nivel: Nivel
)

object ProblemasCatalog {
    val entries: List<ProblemEntry> = listOf(
        // ---- Problemas para niños hasta 10 años (S7, ex Niveles 1-4) ----
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
        // ---- Táctica real de torneo, 1700-2200 (S7) ----
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
        )
    )
}

