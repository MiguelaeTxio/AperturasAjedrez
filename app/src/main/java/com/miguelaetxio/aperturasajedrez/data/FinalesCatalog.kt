package com.miguelaetxio.aperturasajedrez.data

/**
 * Metadatos de cada final de partida para el selector nativo
 * (OpeningSelectorActivity, categoria "final"). El id debe coincidir
 * exactamente con el id declarado en
 * app/src/main/assets/www/js/finales.js -- mismo patron que
 * RepertoireCatalog/repertoire.js, ver ANNEX_H04.md.
 *
 * Todos los ids de finales llevan el prefijo "h04-final-" para evitar
 * colision con los ids de lineas al buscar en el array combinado
 * dentro de game.js.
 */
data class FinalEntry(
    val id: String,
    val title: String,
    val subtitle: String
)

object FinalesCatalog {
    val entries: List<FinalEntry> = listOf(
        FinalEntry(
            id = "h04-final-regla-del-cuadrado",
            title = "Peón pasado alejado -- la regla del cuadrado",
            subtitle = "Con blancas -- técnica de conversión, carrera de peón"
        ),
        FinalEntry(
            id = "h04-final-oposicion-escolta",
            title = "Rey y peón vs rey -- oposición y escolta del rey",
            subtitle = "Con blancas -- técnica de conversión, final de peones"
        ),
        FinalEntry(
            id = "h04-final-mate-torre",
            title = "Mate elemental con torre -- práctica libre",
            subtitle = "Con blancas -- practica la técnica sin jugada única, rey y torre vs rey solo"
        ),
        FinalEntry(
            id = "h04-final-mate-dama",
            title = "Mate elemental con dama -- práctica libre",
            subtitle = "Con blancas -- practica la técnica sin jugada única, rey y dama vs rey solo"
        ),
        FinalEntry(
            id = "h04-final-mate-dos-alfiles",
            title = "Mate con dos alfiles -- práctica libre",
            subtitle = "Con blancas -- practica la técnica sin jugada única, rey y dos alfiles vs rey solo"
        ),
        FinalEntry(
            id = "h04-final-caballo-escolta-peon",
            title = "Caballo y peón -- el caballo vigila la casilla de coronación",
            subtitle = "Con blancas -- técnica de conversión, caballo y peón vs rey"
        )
        // Los 6 finales del alcance cerrado en S4 quedan completos --
        // ver ANNEX_H04.md, "DISEÑO CERRADO (S4)".
    )
}
