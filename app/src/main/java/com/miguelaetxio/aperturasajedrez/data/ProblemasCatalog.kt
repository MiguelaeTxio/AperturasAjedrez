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
 * combinado dentro de game.js. Campo "nivel" (1-4, ver [Nivel])
 * anadido en el rediseno posterior a la primera version: la base se
 * reconstruyo con patrones y partidas reales documentadas (mate de
 * Legal, mate de Anastasia, mate de Boden -- partida completa real--,
 * mate sofocado / Legado de Philidor), organizados por dificultad
 * real en vez de un unico bloque uniforme.
 */
enum class Nivel(val etiqueta: String) {
    INICIACION("Nivel 1 -- Iniciación"),
    INTERMEDIO("Nivel 2 -- Intermedio"),
    AVANZADO("Nivel 3 -- Avanzado"),
    EXPERTO("Nivel 4 -- Experto")
}

data class ProblemEntry(
    val id: String,
    val title: String,
    val tema: String,
    val nivel: Nivel
)

object ProblemasCatalog {
    val entries: List<ProblemEntry> = listOf(
        // ---- Nivel 1: Iniciación ----
        ProblemEntry(
            id = "h04-problema-mate-legal",
            title = "El Mate de Legal -- la clavada que no era tal",
            tema = "Clavada falsa (partida real, 1750)",
            nivel = Nivel.INICIACION
        ),
        ProblemEntry(
            id = "h04-problema-horquilla-caballo",
            title = "Horquilla de caballo",
            tema = "Horquilla",
            nivel = Nivel.INICIACION
        ),
        ProblemEntry(
            id = "h04-problema-mate-en-1",
            title = "Mate en 1: la fila trasera",
            tema = "Mate en 1",
            nivel = Nivel.INICIACION
        ),
        // ---- Nivel 2: Intermedio ----
        ProblemEntry(
            id = "h04-problema-mate-anastasia",
            title = "Mate de Anastasia",
            tema = "Mate con nombre propio",
            nivel = Nivel.INTERMEDIO
        ),
        ProblemEntry(
            id = "h04-problema-clavada-caballo",
            title = "Clavada absoluta",
            tema = "Clavada",
            nivel = Nivel.INTERMEDIO
        ),
        ProblemEntry(
            id = "h04-problema-descubierta-caballo",
            title = "Jaque a la descubierta",
            tema = "Ataque a la descubierta",
            nivel = Nivel.INTERMEDIO
        ),
        ProblemEntry(
            id = "h04-problema-doble-ataque-torre",
            title = "Doble ataque de torre",
            tema = "Doble ataque de torre",
            nivel = Nivel.INTERMEDIO
        ),
        // ---- Nivel 3: Avanzado ----
        ProblemEntry(
            id = "h04-problema-mate-boden",
            title = "Mate de Boden -- la Inmortal Peruana",
            tema = "Mate con nombre propio (partida real, 1934)",
            nivel = Nivel.AVANZADO
        ),
        ProblemEntry(
            id = "h04-problema-sobrecarga-torre",
            title = "Sobrecarga de la torre defensora",
            tema = "Sobrecarga",
            nivel = Nivel.AVANZADO
        ),
        ProblemEntry(
            id = "h04-problema-desviacion-dama",
            title = "Desviación de la dama defensora",
            tema = "Desviación",
            nivel = Nivel.AVANZADO
        ),
        ProblemEntry(
            id = "h04-problema-mate-en-2",
            title = "Mate en 2: la última casilla",
            tema = "Mate en 2",
            nivel = Nivel.AVANZADO
        ),
        // ---- Nivel 4: Experto ----
        ProblemEntry(
            id = "h04-problema-mate-sofocado",
            title = "Mate sofocado -- el Legado de Philidor",
            tema = "Mate sofocado (partida clásica, doc. desde 1497)",
            nivel = Nivel.EXPERTO
        ),
        ProblemEntry(
            id = "h04-problema-atraccion-peon",
            title = "Atracción a una casilla forzada",
            tema = "Atracción",
            nivel = Nivel.EXPERTO
        ),
        ProblemEntry(
            id = "h04-problema-subpromocion-caballo",
            title = "Subpromoción a caballo con jaque",
            tema = "Promoción forzada",
            nivel = Nivel.EXPERTO
        )
    )
}
