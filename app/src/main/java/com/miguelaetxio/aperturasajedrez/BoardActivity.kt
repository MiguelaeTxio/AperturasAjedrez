package com.miguelaetxio.aperturasajedrez

import android.annotation.SuppressLint
import android.net.Uri
import android.os.Bundle
import android.webkit.WebView
import androidx.appcompat.app.AppCompatActivity

/**
 * Pantalla del tablero interactivo. Dos caminos posibles:
 *
 * - Modo arbol de aperturas (S7, H01): recibe EXTRA_OPENING_ROOT
 *   (primera jugada de la familia, p.ej. "d4") + EXTRA_OPENING_COLOR
 *   ("w"/"b", que lado entrena Miguel Angel) y, opcionalmente,
 *   EXTRA_OPENING_TARGET (id de nodo real del arbol -- modo dirigido a
 *   una variante o trampa concreta). Se pasan tal cual como query
 *   params "opening"/"color"/"target" -- ver isTreeMode en game.js.
 *   Tiene prioridad sobre los dos caminos siguientes si esta presente.
 *
 * - Modo linea/cola (finales, problemas, estructuras): EXTRA_LINE_ID o
 *   EXTRA_LINE_QUEUE, como siempre -- ver selectedLineId()/
 *   selectedQueueIds() en game.js.
 *
 * S6 (navegacion de Problemas de ajedrez, ver ANNEX_H04.md): puede
 * recibir ademas EXTRA_NAV_CATEGORY, una clave de categoria navegable
 * (p.ej. "problemas_ajedrez") que se pasa como query param "navcat".
 * Cuando llega, game.js activa la barra de navegacion (primero/
 * anterior/siguiente/ultimo/ir al numero/favoritos) sobre la cola
 * recibida en EXTRA_LINE_QUEUE, que en ese caso debe venir en orden
 * fijo del catalogo, sin barajar.
 */
class BoardActivity : AppCompatActivity() {

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_board)

        val openingRoot = intent.getStringExtra(EXTRA_OPENING_ROOT)
        val openingColor = intent.getStringExtra(EXTRA_OPENING_COLOR)
        val openingTarget = intent.getStringExtra(EXTRA_OPENING_TARGET)
        val lineQueue = intent.getStringArrayListExtra(EXTRA_LINE_QUEUE)
        val lineId = intent.getStringExtra(EXTRA_LINE_ID)
        val navCategory = intent.getStringExtra(EXTRA_NAV_CATEGORY)

        val webView = findViewById<WebView>(R.id.boardWebView)
        webView.settings.javaScriptEnabled = true
        webView.settings.allowFileAccess = true
        webView.addJavascriptInterface(TrainingBridge(this, webView), "AndroidBridge")

        val urlBuilder = Uri.parse("file:///android_asset/www/index.html")
            .buildUpon()
        if (openingRoot != null) {
            urlBuilder.appendQueryParameter("opening", openingRoot)
            urlBuilder.appendQueryParameter("color", openingColor ?: "w")
            if (openingTarget != null) {
                urlBuilder.appendQueryParameter("target", openingTarget)
            }
        } else if (lineQueue != null && lineQueue.isNotEmpty()) {
            urlBuilder.appendQueryParameter("queue", lineQueue.joinToString(","))
        } else {
            // Fallback defensivo: no deberia ocurrir en un flujo real
            // (todo selector pasa "opening", "queue" o "line"), pero si
            // llegara una Intent malformada, evita un WebView en blanco
            // cargando la primera estructura del catalogo en vez de
            // fallar en silencio de forma menos visible.
            urlBuilder.appendQueryParameter(
                "line",
                lineId ?: com.miguelaetxio.aperturasajedrez.data.EstructurasCatalog.entries.first().id
            )
        }
        if (navCategory != null) {
            urlBuilder.appendQueryParameter("navcat", navCategory)
        }
        webView.loadUrl(urlBuilder.build().toString())
    }

    companion object {
        const val EXTRA_OPENING_ROOT = "extra_opening_root"
        const val EXTRA_OPENING_COLOR = "extra_opening_color"
        const val EXTRA_OPENING_TARGET = "extra_opening_target"
        const val EXTRA_LINE_ID = "extra_line_id"
        const val EXTRA_LINE_QUEUE = "extra_line_queue"
        const val EXTRA_NAV_CATEGORY = "extra_nav_category"
    }
}
