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
 * combinado dentro de game.js. El "tema" (clasificacion tactica) se
 * muestra como subtitulo en el selector.
 */
data class ProblemEntry(
    val id: String,
    val title: String,
    val tema: String
)

object ProblemasCatalog {
    val entries: List<ProblemEntry> = listOf(
        ProblemEntry(
            id = "h04-problema-horquilla-caballo",
            title = "Horquilla de caballo",
            tema = "Horquilla"
        ),
        ProblemEntry(
            id = "h04-problema-clavada-caballo",
            title = "Clavada absoluta",
            tema = "Clavada"
        ),
        ProblemEntry(
            id = "h04-problema-descubierta-caballo",
            title = "Jaque a la descubierta",
            tema = "Ataque a la descubierta"
        ),
        ProblemEntry(
            id = "h04-problema-desviacion-dama",
            title = "Desviación de la dama defensora",
            tema = "Desviación"
        ),
        ProblemEntry(
            id = "h04-problema-atraccion-peon",
            title = "Atracción del rey a una casilla forzada",
            tema = "Atracción"
        ),
        ProblemEntry(
            id = "h04-problema-doble-ataque-torre",
            title = "Doble ataque de torre",
            tema = "Doble ataque de torre"
        ),
        ProblemEntry(
            id = "h04-problema-mate-en-1",
            title = "Mate en 1: la fila trasera",
            tema = "Mate en 1"
        ),
        ProblemEntry(
            id = "h04-problema-mate-en-2",
            title = "Mate en 2: la última casilla",
            tema = "Mate en 2"
        ),
        ProblemEntry(
            id = "h04-problema-sobrecarga-torre",
            title = "Sobrecarga de la torre defensora",
            tema = "Sobrecarga"
        ),
        ProblemEntry(
            id = "h04-problema-subpromocion-caballo",
            title = "Subpromoción a caballo con jaque",
            tema = "Promoción forzada"
        )
    )
}
