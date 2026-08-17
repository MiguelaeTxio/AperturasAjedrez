package com.miguelaetxio.aperturasajedrez

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.miguelaetxio.aperturasajedrez.data.EstructurasCatalog
import com.miguelaetxio.aperturasajedrez.data.FinalesCatalog
import com.miguelaetxio.aperturasajedrez.data.OpeningEntry

/**
 * Selector generico de contenido de entrenamiento. Filtra el catalogo
 * segun EXTRA_CATEGORY (H04) -- CATEGORY_ENDGAMES o
 * CATEGORY_ESTRUCTURAS. OpeningAdapter es generico sobre OpeningEntry,
 * asi que FinalEntry/EstructuraEntry se adaptan a esa forma antes de
 * pasarlos -- ver mapeo mas abajo.
 *
 * S7 (reapertura H01, PCH): CATEGORY_LINES y CATEGORY_TRAMPAS se
 * retiran. Las lineas de apertura pasan a vivir en el arbol de
 * variantes nuevo (REPERTOIRE_TREE) con su propio selector de dos
 * pasos -- ver OpeningFamilySelectorActivity/
 * OpeningVariantSelectorActivity. Las trampas quedaron integradas
 * como ramas de ese mismo arbol -- ya no existe una categoria
 * separada para ellas.
 *
 * S8: CATEGORY_PROBLEMS ya NO pasa por aqui -- Miguel Angel senalo
 * explicitamente que no quiere elegir de una lista de problemas,
 * quiere que se sirva el primero directamente y, al resolverlo, el
 * siguiente. CategorySelectorActivity lanza BoardActivity
 * directamente con la cola completa en EXTRA_LINE_QUEUE para esa
 * categoria (ver startProblemSession() alli). La constante
 * CATEGORY_PROBLEMS se mantiene por si en el futuro hace falta un
 * selector suelto de depuracion, pero hoy nada la usa.
 */
class OpeningSelectorActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_opening_selector)

        val category = intent.getStringExtra(EXTRA_CATEGORY) ?: CATEGORY_ENDGAMES
        val entries: List<OpeningEntry> = when (category) {
            CATEGORY_ESTRUCTURAS -> EstructurasCatalog.entries
                .map {
                    OpeningEntry(
                        id = it.id,
                        title = it.title,
                        subtitle = it.familia.etiqueta + " · " + it.subtitle
                    )
                }
            else -> FinalesCatalog.entries.map {
                OpeningEntry(id = it.id, title = it.title, subtitle = it.subtitle)
            }
        }

        val list = findViewById<RecyclerView>(R.id.openingList)
        list.layoutManager = LinearLayoutManager(this)
        list.adapter = OpeningAdapter(entries) { entry ->
            val intent = Intent(this, BoardActivity::class.java)
                .putExtra(BoardActivity.EXTRA_LINE_ID, entry.id)
            startActivity(intent)
        }
    }

    companion object {
        const val EXTRA_CATEGORY = "extra_category"
        const val CATEGORY_ENDGAMES = "final"
        const val CATEGORY_PROBLEMS = "problema"
        const val CATEGORY_ESTRUCTURAS = "estructura"
    }
}
