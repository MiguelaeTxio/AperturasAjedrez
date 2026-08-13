package com.miguelaetxio.aperturasajedrez

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.miguelaetxio.aperturasajedrez.data.EstructurasCatalog
import com.miguelaetxio.aperturasajedrez.data.FinalesCatalog
import com.miguelaetxio.aperturasajedrez.data.Nivel
import com.miguelaetxio.aperturasajedrez.data.OpeningEntry
import com.miguelaetxio.aperturasajedrez.data.ProblemasCatalog
import com.miguelaetxio.aperturasajedrez.data.RepertoireCatalog
import com.miguelaetxio.aperturasajedrez.data.TrampasCatalog

/**
 * Selector generico de contenido de entrenamiento. Filtra el catalogo
 * segun EXTRA_CATEGORY (H04) -- CATEGORY_LINES (por defecto, si no se
 * recibe el extra, para no romper flujos que aun lancen esta Activity
 * sin categoria), CATEGORY_ENDGAMES o CATEGORY_PROBLEMS. OpeningAdapter
 * es generico sobre OpeningEntry, asi que FinalEntry/ProblemEntry se
 * adaptan a esa forma antes de pasarlos -- ver mapeo mas abajo.
 */
class OpeningSelectorActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_opening_selector)

        val category = intent.getStringExtra(EXTRA_CATEGORY) ?: CATEGORY_LINES
        val entries: List<OpeningEntry> = when (category) {
            CATEGORY_ENDGAMES -> FinalesCatalog.entries.map {
                OpeningEntry(id = it.id, title = it.title, subtitle = it.subtitle)
            }
            CATEGORY_PROBLEMS -> ProblemasCatalog.entries
                .sortedBy { it.nivel.ordinal }
                .map {
                    OpeningEntry(
                        id = it.id,
                        title = it.title,
                        subtitle = it.nivel.etiqueta + " · " + it.tema
                    )
                }
            CATEGORY_TRAMPAS -> TrampasCatalog.entries
                .map {
                    OpeningEntry(
                        id = it.id,
                        title = it.title,
                        subtitle = it.tipo.etiqueta + " · " + it.subtitle
                    )
                }
            CATEGORY_ESTRUCTURAS -> EstructurasCatalog.entries
                .map {
                    OpeningEntry(
                        id = it.id,
                        title = it.title,
                        subtitle = it.familia.etiqueta + " · " + it.subtitle
                    )
                }
            else -> RepertoireCatalog.entries
        }

        val list = findViewById<RecyclerView>(R.id.openingList)
        list.layoutManager = LinearLayoutManager(this)
        list.adapter = OpeningAdapter(entries) { entry ->
            val intent = Intent(this, BoardActivity::class.java)
                .putExtra(BoardActivity.EXTRA_LINE_ID, entry.id)
            startActivity(intent)
        }

        // S7: boton de sesion secuencial, solo para Problemas por
        // ahora -- recorre en orden los problemas de Nivel.TORNEO
        // (1700-2200) sin volver a esta lista entre uno y el
        // siguiente. Ver loadLine()/onLineComplete() en game.js.
        val sessionButton = findViewById<Button>(R.id.sessionModeButton)
        if (category == CATEGORY_PROBLEMS) {
            val torneoIds = ProblemasCatalog.entries
                .filter { it.nivel == Nivel.TORNEO }
                .map { it.id }
            if (torneoIds.isNotEmpty()) {
                sessionButton.text = getString(R.string.session_mode_problems)
                sessionButton.visibility = android.view.View.VISIBLE
                sessionButton.setOnClickListener {
                    val intent = Intent(this, BoardActivity::class.java)
                        .putStringArrayListExtra(
                            BoardActivity.EXTRA_LINE_QUEUE,
                            ArrayList(torneoIds)
                        )
                    startActivity(intent)
                }
            }
        }
    }

    companion object {
        const val EXTRA_CATEGORY = "extra_category"
        const val CATEGORY_LINES = "linea"
        const val CATEGORY_ENDGAMES = "final"
        const val CATEGORY_PROBLEMS = "problema"
        const val CATEGORY_TRAMPAS = "trampa"
        const val CATEGORY_ESTRUCTURAS = "estructura"
    }
}
