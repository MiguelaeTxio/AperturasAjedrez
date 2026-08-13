package com.miguelaetxio.aperturasajedrez

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import com.miguelaetxio.aperturasajedrez.data.Nivel
import com.miguelaetxio.aperturasajedrez.data.ProblemasCatalog

/**
 * Pantalla intermedia de "Entrenar" (H04): elegir categoria antes de
 * abrir el selector de contenido. Lineas, Finales, Trampas y
 * Estructuras reutilizan OpeningSelectorActivity con un catalogo
 * distinto segun la categoria (ver EXTRA_CATEGORY).
 *
 * S8: Problemas es distinto -- Miguel Angel senalo explicitamente que
 * no quiere elegir de una lista, quiere que al entrar se sirva
 * directamente el primer problema y, al resolverlo, el siguiente, sin
 * ningun paso intermedio. Por eso este boton NO pasa por
 * OpeningSelectorActivity: lanza BoardActivity directamente con la
 * cola completa de Nivel.TORNEO (1700-2200) en el orden del catalogo
 * -- ver loadLine()/onLineComplete() en game.js para el avance
 * automatico dentro de la sesion.
 */
class CategorySelectorActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_category_selector)

        findViewById<Button>(R.id.categoryLinesButton).setOnClickListener {
            openSelector(OpeningSelectorActivity.CATEGORY_LINES)
        }
        findViewById<Button>(R.id.categoryEndgamesButton).setOnClickListener {
            openSelector(OpeningSelectorActivity.CATEGORY_ENDGAMES)
        }
        findViewById<Button>(R.id.categoryProblemsButton).setOnClickListener {
            startProblemSession()
        }
        findViewById<Button>(R.id.categoryTrampasButton).setOnClickListener {
            openSelector(OpeningSelectorActivity.CATEGORY_TRAMPAS)
        }
        findViewById<Button>(R.id.categoryEstructurasButton).setOnClickListener {
            openSelector(OpeningSelectorActivity.CATEGORY_ESTRUCTURAS)
        }
    }

    private fun openSelector(category: String) {
        val intent = Intent(this, OpeningSelectorActivity::class.java)
            .putExtra(OpeningSelectorActivity.EXTRA_CATEGORY, category)
        startActivity(intent)
    }

    private fun startProblemSession() {
        // S9: Miguel Angel senalo que empezar siempre por el mismo
        // problema en el mismo orden lo vuelve memorizable en vez de
        // servir para reconocer patrones de verdad. shuffled() baraja
        // el orden en cada entrada a la sesion.
        val torneoIds = ProblemasCatalog.entries
            .filter { it.nivel == Nivel.TORNEO }
            .map { it.id }
            .shuffled()
        val intent = Intent(this, BoardActivity::class.java)
            .putStringArrayListExtra(BoardActivity.EXTRA_LINE_QUEUE, ArrayList(torneoIds))
        startActivity(intent)
    }
}
