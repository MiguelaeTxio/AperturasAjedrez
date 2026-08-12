package com.miguelaetxio.aperturasajedrez.data

/**
 * Metadatos de cada trampa de apertura para el selector nativo
 * (OpeningSelectorActivity, categoria "trampa"). El id debe
 * coincidir exactamente con el id declarado en
 * app/src/main/assets/www/js/trampas.js -- mismo patron que
 * RepertoireCatalog/FinalesCatalog/ProblemasCatalog, ver ANNEX_H05.md.
 *
 * Todos los ids de trampas llevan el prefijo "h05-trampa-" para
 * evitar colision con lineas, finales y problemas al buscar en el
 * array combinado dentro de game.js. Campo nuevo respecto al resto de
 * catalogos: "tipo" (ver [Tipo]) -- ofensiva (la tiende Miguel Angel)
 * o defensiva (Miguel Angel debe reconocerla y evitarla).
 *
 * INCIDENCIA S5: la investigacion de S4 identifico 7 trampas con
 * fuente, pero la numero 7 (atribuida a la Escandinava Moderna
 * 2...Nf6) resulto ser la misma trampa que la numero 6 mal
 * etiquetada -- se descarto al no poder verificarse tal como estaba
 * descrita. Quedan 6 trampas reales en este catalogo. Ver
 * ANNEX_H05.md para el detalle completo.
 */
enum class Tipo(val etiqueta: String) {
    OFENSIVA("Ofensiva -- la tiendes tú"),
    DEFENSIVA("Defensiva -- reconócela y evítala")
}

data class TrampaEntry(
    val id: String,
    val title: String,
    val subtitle: String,
    val tipo: Tipo
)

object TrampasCatalog {
    val entries: List<TrampaEntry> = listOf(
        // ---- Bloque blancas -- Gambito de Dama ----
        TrampaEntry(
            id = "h05-trampa-elefante",
            title = "Trampa del Elefante (Elephant Trap)",
            subtitle = "Gambito de Dama Rehusado -- 4...Nbd7",
            tipo = Tipo.DEFENSIVA
        ),
        TrampaEntry(
            id = "h05-trampa-rubinstein",
            title = "Trampa Rubinstein",
            subtitle = "Defensa Ortodoxa -- dama atrapada tras Nxd5",
            tipo = Tipo.OFENSIVA
        ),
        TrampaEntry(
            id = "h05-trampa-cambridge-springs",
            title = "Trampa de la Cambridge Springs",
            subtitle = "Zwischenzug tras 9.Bd3?? dxc4!",
            tipo = Tipo.DEFENSIVA
        ),
        TrampaEntry(
            id = "h05-trampa-lasker-albin",
            title = "Trampa Lasker en el Contragambito Albin",
            subtitle = "Nunca 4.e3?? -- subpromoción decisiva",
            tipo = Tipo.DEFENSIVA
        ),
        TrampaEntry(
            id = "h05-trampa-eslava-bf4-e4",
            title = "Trampa del alfil en la Eslava (Bf4 + e4)",
            subtitle = "Variante de Cambio -- 6...e6? 7.e4!",
            tipo = Tipo.OFENSIVA
        ),
        // ---- Bloque negras -- Escandinava ----
        TrampaEntry(
            id = "h05-trampa-leonhardt",
            title = "Gambito Leonhardt (4.b4!?)",
            subtitle = "Escandinava clásica -- evita 6...c6??",
            tipo = Tipo.DEFENSIVA
        )
    )
}
