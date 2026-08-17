package com.miguelaetxio.aperturasajedrez

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.miguelaetxio.aperturasajedrez.data.OpeningEntry
import com.miguelaetxio.aperturasajedrez.data.OpeningFamilyCatalog

/**
 * Segundo paso del selector del modo arbol de aperturas (S7, reapertura
 * H01): dentro de la familia elegida (EXTRA_FAMILY_ID), ofrece el
 * recorrido completo (modo por defecto, punto 2 del diseno cerrado --
 * el motor prioriza la rama menos practicada) como primera entrada de
 * la lista, seguido de cada variante y trampa documentada para
 * practicarla en concreto (modo dirigido -- ver EXTRA_OPENING_TARGET
 * en BoardActivity).
 *
 * El sentinel ID_FULL_TOUR nunca coincide con un nodeId real del arbol
 * (los nodeId son rutas de jugadas o "trap__<id>__<indice>", nunca
 * este valor exacto), asi que distinguir "recorrido completo" del
 * resto es seguro por simple comparacion de id.
 */
class OpeningVariantSelectorActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_opening_selector)

        val familyId = intent.getStringExtra(EXTRA_FAMILY_ID)
        val family = OpeningFamilyCatalog.entries.first { it.id == familyId }

        val fullTourEntry = OpeningEntry(
            id = ID_FULL_TOUR,
            title = getString(R.string.opening_family_full_tour),
            subtitle = getString(R.string.opening_family_full_tour_subtitle)
        )
        val variantEntries = family.variants.map {
            OpeningEntry(
                id = it.nodeId,
                title = it.title,
                subtitle = when {
                    it.isTrap && it.trapTipo == "ofensiva" -> "Trampa ofensiva -- la tiendes tú"
                    it.isTrap -> "Trampa defensiva -- reconócela y evítala"
                    else -> "Variante"
                }
            )
        }

        val list = findViewById<RecyclerView>(R.id.openingList)
        list.layoutManager = LinearLayoutManager(this)
        list.adapter = OpeningAdapter(listOf(fullTourEntry) + variantEntries) { entry ->
            val intent = Intent(this, BoardActivity::class.java)
                .putExtra(BoardActivity.EXTRA_OPENING_ROOT, family.rootSan)
                .putExtra(BoardActivity.EXTRA_OPENING_COLOR, family.userColor)
            if (entry.id != ID_FULL_TOUR) {
                intent.putExtra(BoardActivity.EXTRA_OPENING_TARGET, entry.id)
            }
            startActivity(intent)
        }
    }

    companion object {
        const val EXTRA_FAMILY_ID = "extra_family_id"
        private const val ID_FULL_TOUR = "__full_tour__"
    }
}
