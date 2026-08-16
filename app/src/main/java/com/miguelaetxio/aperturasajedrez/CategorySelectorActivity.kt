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
 * S8/S9: los tres niveles de ProblemasCatalog (Iniciacion, Grandes
 * Partidas, Problemas de ajedrez) son distintos -- Miguel Angel
 * senalo explicitamente que no quiere elegir de una lista, quiere que
 * al entrar se sirva directamente el primer problema y, al
 * resolverlo, el siguiente, sin ningun paso intermedio, y que el
 * orden se baraje en cada sesion para no memorizar por posicion. Por
 * eso estos tres botones NO pasan por OpeningSelectorActivity: cada
 * uno lanza BoardActivity directamente con la cola completa de su
 * nivel -- ver loadLine()/onLineComplete() en game.js para el avance
 * automatico dentro de la sesion.
 *
 * S6 (segunda reapertura de H04 via PCH): se anade el tercer boton
 * (Problemas de ajedrez, Nivel.LICHESS) siguiendo el mismo patron
 * exacto -- ver ANNEX_H04.md.
 *
 * S6 (navegacion, tras la ampliacion a 267 problemas): Miguel Angel
 * senalo que, con el volumen creciente del banco, "aleatorio" no
 * basta -- quiere avance sin repetir (saltando los ya resueltos),
 * navegacion manual libre (anterior/siguiente/primero/ultimo/ir a un
 * numero concreto), marcapaginas persistente y favoritos. Esto aplica
 * SOLO a Problemas de ajedrez (Nivel.LICHESS) -- Iniciacion y Grandes
 * Partidas, por su volumen pequeno (14 y 40), mantienen el
 * comportamiento anterior (cola barajada, sin navegacion). Por eso
 * Problemas de ajedrez ya no se baraja (shuffled()) -- la navegacion
 * por numero de problema exige un orden fijo -- y se marca como
 * navegable via EXTRA_NAV_CATEGORY, que game.js usa como clave de
 * marcapaginas/favoritos (ver TrainingBridge.kt).
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
        findViewById<Button>(R.id.categoryIniciacionButton).setOnClickListener {
            startProblemSession(Nivel.NINOS)
        }
        findViewById<Button>(R.id.categoryGrandesPartidasButton).setOnClickListener {
            startProblemSession(Nivel.TORNEO)
        }
        findViewById<Button>(R.id.categoryProblemasAjedrezButton).setOnClickListener {
            startProblemSession(Nivel.LICHESS)
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

    private fun startProblemSession(nivel: Nivel) {
        val esNavegable = nivel == Nivel.LICHESS
        // S9 (Iniciacion/Grandes Partidas): shuffled() baraja el orden
        // en cada entrada a la sesion. S6 (Problemas de ajedrez):
        // orden fijo del catalogo -- la navegacion por numero de
        // problema lo exige.
        val ids = ProblemasCatalog.entries
            .filter { it.nivel == nivel }
            .map { it.id }
            .let { if (esNavegable) it else it.shuffled() }
        val intent = Intent(this, BoardActivity::class.java)
            .putStringArrayListExtra(BoardActivity.EXTRA_LINE_QUEUE, ArrayList(ids))
        if (esNavegable) {
            intent.putExtra(BoardActivity.EXTRA_NAV_CATEGORY, NAV_CATEGORY_PROBLEMAS_AJEDREZ)
        }
        startActivity(intent)
    }

    companion object {
        private const val NAV_CATEGORY_PROBLEMAS_AJEDREZ = "problemas_ajedrez"
    }
}
