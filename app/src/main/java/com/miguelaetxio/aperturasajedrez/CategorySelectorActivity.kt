package com.miguelaetxio.aperturasajedrez

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity

/**
 * Pantalla intermedia de "Entrenar" (H04): elegir categoria antes de
 * abrir el selector de contenido. Lineas, Finales y Problemas
 * reutilizan OpeningSelectorActivity con un catalogo distinto segun
 * la categoria (ver EXTRA_CATEGORY) -- Problemas resulto no necesitar
 * ningun motor propio: la mecanica de "linea/final" (secuencia fija
 * de jugadas, oponente auto-jugado, dialogo de 3 fallos) ya cubre por
 * completo la mecanica de un problema de posicion suelta + solucion
 * corta -- ver ANNEX_H04.md, seccion "DISENO CERRADO (S4)".
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
            openSelector(OpeningSelectorActivity.CATEGORY_PROBLEMS)
        }
        findViewById<Button>(R.id.categoryTrampasButton).setOnClickListener {
            openSelector(OpeningSelectorActivity.CATEGORY_TRAMPAS)
        }
    }

    private fun openSelector(category: String) {
        val intent = Intent(this, OpeningSelectorActivity::class.java)
            .putExtra(OpeningSelectorActivity.EXTRA_CATEGORY, category)
        startActivity(intent)
    }
}
