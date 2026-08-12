package com.miguelaetxio.aperturasajedrez.data

/**
 * Metadatos de cada estructura de peones para el selector nativo
 * (OpeningSelectorActivity, categoria "estructura"). El id debe
 * coincidir exactamente con el id declarado en
 * app/src/main/assets/www/js/estructuras.js -- mismo patron que
 * RepertoireCatalog/FinalesCatalog/ProblemasCatalog/TrampasCatalog,
 * ver ANNEX_H06.md.
 *
 * Todos los ids de estructuras llevan el prefijo "h06-estructura-"
 * para evitar colision con lineas, finales, problemas y trampas al
 * buscar en el array combinado dentro de game.js. Campo nuevo
 * respecto al resto de catalogos: "familia" (ver [Familia]), solo
 * para clasificar/mostrar en el selector nativo -- no afecta al
 * motor JS, mismo patron que "tipo" en TrampasCatalog.kt.
 *
 * CORRECCION S6: el IQP quedo anclado unicamente en
 * h02-defensa-tarrasch tras verificar que las otras dos lineas
 * citadas en el diseno original del hito no producen IQP real -- ver
 * la cabecera de estructuras.js y ANNEX_H06.md, sesion S6.
 */
enum class Familia(val etiqueta: String) {
    IQP("Peón de dama aislado (IQP)"),
    CARLSBAD("Carlsbad / Ataque de minoría"),
    MERAN("Meran"),
    CATALANA("Catalana")
}

data class EstructuraEntry(
    val id: String,
    val title: String,
    val subtitle: String,
    val familia: Familia
)

object EstructurasCatalog {
    val entries: List<EstructuraEntry> = listOf(
        EstructuraEntry(
            id = "h06-estructura-iqp",
            title = "Peón de Dama Aislado (IQP)",
            subtitle = "Sistema Fianchetto vs Defensa Tarrasch",
            familia = Familia.IQP
        ),
        EstructuraEntry(
            id = "h06-estructura-carlsbad",
            title = "Estructura Carlsbad",
            subtitle = "Ataque de minoría — Variante de Cambio",
            familia = Familia.CARLSBAD
        ),
        EstructuraEntry(
            id = "h06-estructura-meran",
            title = "Estructura Meran",
            subtitle = "Contragambito y ruptura central con e4",
            familia = Familia.MERAN
        ),
        EstructuraEntry(
            id = "h06-estructura-catalana",
            title = "Estructura Catalana",
            subtitle = "Presión en la diagonal larga — Catalán Aceptado",
            familia = Familia.CATALANA
        )
    )
}
