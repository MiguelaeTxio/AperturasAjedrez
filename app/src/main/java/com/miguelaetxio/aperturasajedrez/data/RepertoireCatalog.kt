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
        )
    )
}
