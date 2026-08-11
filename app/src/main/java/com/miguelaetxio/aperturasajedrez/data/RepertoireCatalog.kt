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
        ),
        OpeningEntry(
            id = "h02-contragambito-albin",
            title = "Contragambito Albin",
            subtitle = "Con blancas -- 1.d4 d5 2.c4 e5"
        ),
        OpeningEntry(
            id = "h02-defensa-chigorin",
            title = "Defensa Chigorin",
            subtitle = "Con blancas -- 1.d4 d5 2.c4 Nc6"
        ),
        OpeningEntry(
            id = "h02-semi-eslava-meran",
            title = "Semi-Eslava -- Variante Meran",
            subtitle = "Con blancas -- 1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3 e6"
        ),
        OpeningEntry(
            id = "h02-escandinava-moderna",
            title = "Escandinava Moderna",
            subtitle = "Con negras contra 1.e4 -- 1.e4 d5 2.exd5 Nf6"
        ),
        OpeningEntry(
            id = "h02-ortodoxa-clasica",
            title = "Defensa Ortodoxa -- linea clasica",
            subtitle = "Con blancas -- 1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.Bg5 Nbd7"
        ),
        OpeningEntry(
            id = "h02-defensa-baltica",
            title = "Defensa Baltica",
            subtitle = "Con blancas -- 1.d4 d5 2.c4 Bf5"
        ),
        OpeningEntry(
            id = "h02-defensa-simetrica",
            title = "Defensa Simetrica",
            subtitle = "Con blancas -- 1.d4 d5 2.c4 c5"
        ),
        OpeningEntry(
            id = "h02-escandinava-qd6",
            title = "Escandinava -- retirada moderna 3...Qd6",
            subtitle = "Con negras contra 1.e4 -- 1.e4 d5 2.exd5 Qxd5 3.Nc3 Qd6"
        ),
        OpeningEntry(
            id = "h02-defensa-tarrasch",
            title = "Defensa Tarrasch",
            subtitle = "Con blancas -- 1.d4 d5 2.c4 e6 3.Nc3 c5"
        ),
        OpeningEntry(
            id = "h02-defensa-marshall",
            title = "Defensa Marshall",
            subtitle = "Con blancas -- 1.d4 d5 2.c4 Nf6"
        ),
        OpeningEntry(
            id = "h02-semi-tarrasch",
            title = "Semi-Tarrasch",
            subtitle = "Con blancas -- 1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.Nf3 c5"
        ),
        OpeningEntry(
            id = "h02-escandinava-qd8",
            title = "Escandinava -- retirada ultra-solida 3...Qd8",
            subtitle = "Con negras contra 1.e4 -- 1.e4 d5 2.exd5 Qxd5 3.Nc3 Qd8"
        ),
        OpeningEntry(
            id = "h03-londres-clasica",
            title = "Sistema Londres -- respuesta clasica con Bd6",
            subtitle = "Con negras -- 1.d4 d5 2.Bf4 Nf6 3.e3 e6 4.Nf3 Bd6"
        ),
        OpeningEntry(
            id = "h03-londres-fianchetto",
            title = "Sistema Londres -- respuesta moderna con fianchetto g6",
            subtitle = "Con negras -- 1.d4 Nf6 2.Bf4 g6 3.e3 Bg7"
        )
    )
}
