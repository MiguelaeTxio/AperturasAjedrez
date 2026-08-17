package com.miguelaetxio.aperturasajedrez

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.miguelaetxio.aperturasajedrez.data.OpeningEntry
import com.miguelaetxio.aperturasajedrez.data.OpeningFamilyCatalog

/**
 * Primer paso del selector del modo arbol de aperturas (S7, reapertura
 * H01): elegir familia (raiz + color de usuario) antes de decidir
 * entre recorrido completo o una variante/trampa concreta -- ver
 * OpeningVariantSelectorActivity para el segundo paso.
 *
 * OpeningFamilyCatalog.kt esta generado automaticamente por
 * scripts/build_repertoire_tree.js desde el mismo arbol que consume
 * game.js -- nunca se mantiene a mano por separado.
 *
 * Reutiliza el layout y el adapter genericos de siempre
 * (activity_opening_selector.xml / OpeningAdapter sobre OpeningEntry),
 * sin necesidad de ningun XML ni adapter nuevo.
 */
class OpeningFamilySelectorActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_opening_selector)

        val entries = OpeningFamilyCatalog.entries.map {
            val plural = if (it.variants.size == 1) "variante" else "variantes"
            OpeningEntry(
                id = it.id,
                title = it.title,
                subtitle = it.variants.size.toString() + " " + plural + " documentadas"
            )
        }

        val list = findViewById<RecyclerView>(R.id.openingList)
        list.layoutManager = LinearLayoutManager(this)
        list.adapter = OpeningAdapter(entries) { entry ->
            val intent = Intent(this, OpeningVariantSelectorActivity::class.java)
                .putExtra(OpeningVariantSelectorActivity.EXTRA_FAMILY_ID, entry.id)
            startActivity(intent)
        }
    }
}
