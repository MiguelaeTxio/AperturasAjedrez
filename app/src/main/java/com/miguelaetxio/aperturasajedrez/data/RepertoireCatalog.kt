package com.miguelaetxio.aperturasajedrez.data

/**
 * Metadatos de cada linea del repertorio para el selector nativo
 * (OpeningSelectorActivity). El id debe coincidir exactamente con el
 * id declarado en app/src/main/assets/www/js/repertoire.js -- son dos
 * listas separadas a proposito (una nativa para el selector, otra en
 * JS para el motor de entrenamiento dentro del WebView), pero
 * comparten el mismo espacio de identificadores.
 *
 * Hito 01: una unica linea real. El resto (variantes de blancas y
 * escandinava de negras) se anaden en el Hito 02 -- el selector ya
 * queda preparado para listarlas sin cambios de arquitectura.
 */
data class OpeningEntry(
    val id: String,
    val title: String,
    val subtitle: String
)

object RepertoireCatalog {
    val entries: List<OpeningEntry> = listOf(
        OpeningEntry(
            id = "h01-gambito-dama-rehusado",
            title = "Gambito de Dama Rehusado",
            subtitle = "Linea principal con blancas -- 1.d4 d5 2.c4 e6"
        ),
        OpeningEntry(
            id = "h02-gambito-dama-aceptado",
            title = "Gambito de Dama Aceptado",
            subtitle = "Sistema Alekhine con blancas -- 1.d4 d5 2.c4 dxc4"
        ),
        OpeningEntry(
            id = "h02-defensa-eslava",
            title = "Defensa Eslava",
            subtitle = "Linea principal con blancas -- 1.d4 d5 2.c4 c6"
        ),
        OpeningEntry(
            id = "h02-qgd-cambio",
            title = "Gambito de Dama Rehusado -- Variante de Cambio",
            subtitle = "Con blancas -- 1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.cxd5"
        ),
        OpeningEntry(
            id = "h02-escandinava-principal",
            title = "Escandinava -- linea principal",
            subtitle = "Con negras contra 1.e4 -- 1.e4 d5 2.exd5 Qxd5"
        )
    )
}
