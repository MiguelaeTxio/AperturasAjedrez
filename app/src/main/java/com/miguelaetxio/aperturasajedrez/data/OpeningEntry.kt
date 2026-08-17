package com.miguelaetxio.aperturasajedrez.data

/**
 * Tipo compartido por los selectores nativos de contenido de
 * entrenamiento (Finales, Estructuras, y el selector de familias/
 * variantes del arbol de aperturas) para alimentar OpeningAdapter de
 * forma generica -- ver FinalesCatalog/EstructurasCatalog/
 * OpeningFamilyCatalog.
 *
 * S7 (reapertura H01, PCH): antes vivia en RepertoireCatalog.kt junto
 * al catalogo de las 26 lineas planas del repertorio, que se retira
 * en esta misma sesion (el repertorio pasa a vivir en el arbol de
 * variantes, REPERTOIRE_TREE, con su propio selector -- ver
 * OpeningFamilySelectorActivity/OpeningVariantSelectorActivity). El
 * tipo se traslada aqui, a su propio fichero, para que no dependa de
 * un catalogo que ya no existe.
 */
data class OpeningEntry(
    val id: String,
    val title: String,
    val subtitle: String
)
