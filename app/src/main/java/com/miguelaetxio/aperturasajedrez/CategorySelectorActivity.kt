package com.miguelaetxio.aperturasajedrez

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity

/**
 * Pantalla intermedia de "Entrenar" (H04): elegir categoria antes de
 * abrir el selector de contenido. Lineas y Finales reutilizan
 * OpeningSelectorActivity con un catalogo distinto segun la categoria
 * (ver EXTRA_CATEGORY). Problemas queda deshabilitado hasta que tenga
 * motor propio de verificacion multi-jugada -- ver ANNEX_H04.md,
 * seccion "DISENO CERRADO (S4)".
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
        // Problemas: sin contenido ni motor propio todavia -- boton
        // deshabilitado en el layout (android:enabled="false").
    }

    private fun openSelector(category: String) {
        val intent = Intent(this, OpeningSelectorActivity::class.java)
            .putExtra(OpeningSelectorActivity.EXTRA_CATEGORY, category)
        startActivity(intent)
    }
}
