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
            title = "Mate elemental con torre -- la técnica de la caja",
            subtitle = "Con blancas -- técnica básica, rey y torre vs rey solo"
        ),
        FinalEntry(
            id = "h04-final-mate-dama",
            title = "Mate elemental con dama -- acorralar sin ahogar",
            subtitle = "Con blancas -- técnica básica, rey y dama vs rey solo"
        )
        // Pendientes (ver ANNEX_H04.md, HOJA DE RUTA): finales con
        // resistencia real del bando defensor (alfiles, caballos,
        // torre y peon vs torre con contrajuego) -- alcance revisado
        // en S4, ver "DISENO CERRADO (S4), revision".
    )
}
