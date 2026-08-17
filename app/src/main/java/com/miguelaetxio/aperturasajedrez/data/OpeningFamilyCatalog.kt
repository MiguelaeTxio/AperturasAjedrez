package com.miguelaetxio.aperturasajedrez.data

// GENERADO AUTOMATICAMENTE por scripts/build_repertoire_tree.js -- NO EDITAR A MANO.
// Cualquier cambio se pierde en la siguiente ejecucion del script. Para
// cambiar el titulo de una familia, edita FAMILY_TITLES en el script y
// vuelve a ejecutar "node scripts/build_repertoire_tree.js".
//
// Catalogo de familias de apertura entrenables (raiz + color de
// usuario) para el selector nativo del modo arbol (H01, S7). Cada
// familia lleva ademas la lista de variantes/trampas practicables por
// separado en modo dirigido (nodeId real del arbol JS).

data class OpeningVariantEntry(
    val nodeId: String,
    val title: String,
    val isTrap: Boolean,
    val trapTipo: String?
)

data class OpeningFamilyEntry(
    val id: String,
    val rootSan: String,
    val userColor: String,
    val title: String,
    val variants: List<OpeningVariantEntry>
)

object OpeningFamilyCatalog {
    val entries: List<OpeningFamilyEntry> = listOf(
        OpeningFamilyEntry(
            id = "family__d4__b",
            rootSan = "d4",
            userColor = "b",
            title = "Defensas contra el Sistema Londres, Trompowsky y Catalana",
            variants = listOf(
                OpeningVariantEntry(nodeId = "d4__d5__Bf4__Nf6__e3__e6__Nf3__Bd6__Bg3__O-O__Bd3__c5__c3__Nc6__Nbd2__Qc7__O-O__b6", title = "Sistema Londres -- respuesta clasica con Bd6", isTrap = false, trapTipo = null),
                OpeningVariantEntry(nodeId = "d4__Nf6__Bf4__g6__e3__Bg7__Nf3__O-O__h3__d6__Be2__Nbd7__O-O__c5__c3__b6", title = "Sistema Londres -- respuesta moderna con fianchetto g6", isTrap = false, trapTipo = null),
                OpeningVariantEntry(nodeId = "d4__Nf6__c4__e6__g3__d5__Bg2__Be7__Nf3__O-O__O-O__dxc4__Qc2__a6__Qxc4__b5", title = "Inglesa -- Catalan (transposicion via 1.d4 Nf6 2.c4 e6 3.g3 d5)", isTrap = false, trapTipo = null),
                OpeningVariantEntry(nodeId = "d4__Nf6__Bg5__e6__e4__h6__Bxf6__Qxf6__Nc3__d6__Nf3__Nd7__Qd2__g6__O-O-O__Bg7", title = "Trompowsky -- respuesta solida con ...e6", isTrap = false, trapTipo = null)
            )
        ),
        OpeningFamilyEntry(
            id = "family__d4__w",
            rootSan = "d4",
            userColor = "w",
            title = "Gambito de Dama",
            variants = listOf(
                OpeningVariantEntry(nodeId = "d4__d5__c4__e6__Nc3__Nf6__Bg5__Be7__e3__O-O", title = "Gambito de Dama Rehusado -- linea principal", isTrap = false, trapTipo = null),
                OpeningVariantEntry(nodeId = "d4__d5__c4__e6__Nc3__Nf6__Bg5__Nbd7__e3__Be7__Nf3__O-O", title = "Defensa Ortodoxa -- linea clasica", isTrap = false, trapTipo = null),
                OpeningVariantEntry(nodeId = "trap__h05-trampa-elefante__17", title = "Trampa del Elefante (Elephant Trap)", isTrap = true, trapTipo = "defensiva"),
                OpeningVariantEntry(nodeId = "trap__h05-trampa-cambridge-springs__21", title = "Trampa de la Cambridge Springs", isTrap = true, trapTipo = "defensiva"),
                OpeningVariantEntry(nodeId = "d4__d5__c4__e6__Nc3__Nf6__cxd5__exd5__Bg5__Be7__e3__O-O", title = "Gambito de Dama Rehusado -- Variante de Cambio", isTrap = false, trapTipo = null),
                OpeningVariantEntry(nodeId = "d4__d5__c4__e6__Nc3__Nf6__Nf3__c5__cxd5__Nxd5__e4__Nxc3", title = "Semi-Tarrasch", isTrap = false, trapTipo = null),
                OpeningVariantEntry(nodeId = "d4__d5__c4__e6__Nc3__c5__cxd5__exd5__Nf3__Nc6__g3__Nf6", title = "Defensa Tarrasch", isTrap = false, trapTipo = null),
                OpeningVariantEntry(nodeId = "d4__d5__c4__dxc4__Nf3__Nf6__e3__e6__Bxc4__c5__O-O__a6", title = "Gambito de Dama Aceptado -- Sistema Alekhine", isTrap = false, trapTipo = null),
                OpeningVariantEntry(nodeId = "d4__d5__c4__c6__Nf3__Nf6__Nc3__dxc4__a4__Bf5__e3__e6", title = "Defensa Eslava -- linea principal", isTrap = false, trapTipo = null),
                OpeningVariantEntry(nodeId = "d4__d5__c4__c6__Nf3__Nf6__Nc3__e6__e3__Nbd7__Bd3__dxc4", title = "Semi-Eslava -- Variante Meran", isTrap = false, trapTipo = null),
                OpeningVariantEntry(nodeId = "trap__h05-trampa-eslava-bf4-e4__14", title = "Trampa del alfil en la Eslava (Bf4 + e4)", isTrap = true, trapTipo = "ofensiva"),
                OpeningVariantEntry(nodeId = "d4__d5__c4__e5__dxe5__d4__Nf3__Nc6__g3__Be6__Bg2__Qd7", title = "Contragambito Albin -- respuesta principal", isTrap = false, trapTipo = null),
                OpeningVariantEntry(nodeId = "trap__h05-trampa-lasker-albin__13", title = "Trampa Lasker en el Contragambito Albin", isTrap = true, trapTipo = "defensiva"),
                OpeningVariantEntry(nodeId = "d4__d5__c4__Nc6__Nf3__Bg4__cxd5__Bxf3__gxf3__Qxd5__e3__e5", title = "Defensa Chigorin -- respuesta principal", isTrap = false, trapTipo = null),
                OpeningVariantEntry(nodeId = "d4__d5__c4__Bf5__Nc3__e6__Nf3__Nf6__Qb3__Qc8__Bg5__c6", title = "Defensa Baltica", isTrap = false, trapTipo = null),
                OpeningVariantEntry(nodeId = "d4__d5__c4__c5__cxd5__Qxd5__Nc3__Qd6__Nf3__Nf6__e4__cxd4", title = "Defensa Simetrica (2...c5)", isTrap = false, trapTipo = null),
                OpeningVariantEntry(nodeId = "d4__d5__c4__Nf6__cxd5__Nxd5__Nf3__g6__e4__Nb6__Nc3__Bg7", title = "Defensa Marshall (2...Nf6)", isTrap = false, trapTipo = null),
                OpeningVariantEntry(nodeId = "trap__h05-trampa-rubinstein__26", title = "Trampa Rubinstein", isTrap = true, trapTipo = "ofensiva")
            )
        ),
        OpeningFamilyEntry(
            id = "family__e4__b",
            rootSan = "e4",
            userColor = "b",
            title = "Defensa Escandinava",
            variants = listOf(
                OpeningVariantEntry(nodeId = "e4__d5__exd5__Qxd5__Nc3__Qa5__d4__Nf6__Nf3__c6__Bc4__Bf5", title = "Escandinava -- linea principal (2...Qxd5)", isTrap = false, trapTipo = null),
                OpeningVariantEntry(nodeId = "trap__h05-trampa-leonhardt__12", title = "Gambito Leonhardt (4.b4!?)", isTrap = true, trapTipo = "defensiva"),
                OpeningVariantEntry(nodeId = "e4__d5__exd5__Qxd5__Nc3__Qd6__d4__Nf6__Nf3__a6__g3__b5", title = "Escandinava -- retirada moderna (3...Qd6)", isTrap = false, trapTipo = null),
                OpeningVariantEntry(nodeId = "e4__d5__exd5__Qxd5__Nc3__Qd8__d4__Nf6__Nf3__Bg4__h3__Bh5", title = "Escandinava -- retirada ultra-solida (3...Qd8)", isTrap = false, trapTipo = null),
                OpeningVariantEntry(nodeId = "e4__d5__exd5__Nf6__d4__Nxd5__Nf3__g6__c4__Nb6__Nc3__Bg7", title = "Escandinava Moderna (2...Nf6)", isTrap = false, trapTipo = null)
            )
        ),
        OpeningFamilyEntry(
            id = "family__c4__b",
            rootSan = "c4",
            userColor = "b",
            title = "Defensa contra la Apertura Inglesa",
            variants = listOf(
                OpeningVariantEntry(nodeId = "c4__e5__Nc3__Nf6__Nf3__Nc6__g3__d5__cxd5__Nxd5__Bg2__Nb6__O-O__Be7__d3__O-O", title = "Inglesa -- respuesta simetrica tipo Siciliana Inversa", isTrap = false, trapTipo = null),
                OpeningVariantEntry(nodeId = "c4__c5__Nf3__Nf6__g3__g6__Bg2__Bg7__Nc3__Nc6__O-O__O-O__d4__cxd4__Nxd4__Nxd4__Qxd4__d6", title = "Inglesa -- respuesta simetrica pura con doble fianchetto (1.c4 c5)", isTrap = false, trapTipo = null)
            )
        ),
        OpeningFamilyEntry(
            id = "family__Nf3__b",
            rootSan = "Nf3",
            userColor = "b",
            title = "Defensa contra la Apertura Reti",
            variants = listOf(
                OpeningVariantEntry(nodeId = "Nf3__d5__g3__Nf6__Bg2__e6__O-O__Be7__d3__O-O__Nbd2__c5__e4__Nc6__Re1__b5", title = "Reti -- estructura de fianchetto simetrico", isTrap = false, trapTipo = null)
            )
        ),
        OpeningFamilyEntry(
            id = "family__b3__b",
            rootSan = "b3",
            userColor = "b",
            title = "Defensa contra el Sistema Larsen",
            variants = listOf(
                OpeningVariantEntry(nodeId = "b3__e5__Bb2__Nc6__e3__Nf6__Bb5__Bd6__Ne2__O-O__O-O__Re8__d4__exd4__Nxd4", title = "Larsen (1.b3) -- respuesta central con ...e5", isTrap = false, trapTipo = null)
            )
        ),
        OpeningFamilyEntry(
            id = "family__f4__b",
            rootSan = "f4",
            userColor = "b",
            title = "Defensa contra la Apertura Bird",
            variants = listOf(
                OpeningVariantEntry(nodeId = "f4__d5__Nf3__Nf6__e3__g6__Be2__Bg7__O-O__O-O__d3__c5__Ne5__Nc6__Nxc6__bxc6", title = "Bird (1.f4) -- respuesta con ...d5 y fianchetto de rey", isTrap = false, trapTipo = null)
            )
        )
    )
}
