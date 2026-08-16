package com.miguelaetxio.aperturasajedrez

import android.annotation.SuppressLint
import android.net.Uri
import android.os.Bundle
import android.webkit.WebView
import androidx.appcompat.app.AppCompatActivity

/**
 * Pantalla del tablero interactivo. Recibe la linea a entrenar via
 * EXTRA_LINE_ID (elegida en OpeningSelectorActivity) y la pasa al
 * WebView como query param -- ver selectedLineId() en game.js.
 *
 * S7: alternativamente puede recibir EXTRA_LINE_QUEUE, una lista de
 * ids (modo sesion secuencial) que se pasa como query param "queue"
 * -- ver selectedQueueIds() en game.js. Si llega la cola, tiene
 * prioridad sobre EXTRA_LINE_ID.
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

        val lineQueue = intent.getStringArrayListExtra(EXTRA_LINE_QUEUE)
        val lineId = intent.getStringExtra(EXTRA_LINE_ID)
            ?: com.miguelaetxio.aperturasajedrez.data.RepertoireCatalog.entries.first().id
        val navCategory = intent.getStringExtra(EXTRA_NAV_CATEGORY)

        val webView = findViewById<WebView>(R.id.boardWebView)
        webView.settings.javaScriptEnabled = true
        webView.settings.allowFileAccess = true
        webView.addJavascriptInterface(TrainingBridge(this, webView), "AndroidBridge")

        val urlBuilder = Uri.parse("file:///android_asset/www/index.html")
            .buildUpon()
        if (lineQueue != null && lineQueue.isNotEmpty()) {
            urlBuilder.appendQueryParameter("queue", lineQueue.joinToString(","))
        } else {
            urlBuilder.appendQueryParameter("line", lineId)
        }
        if (navCategory != null) {
            urlBuilder.appendQueryParameter("navcat", navCategory)
        }
        webView.loadUrl(urlBuilder.build().toString())
    }

    companion object {
        const val EXTRA_LINE_ID = "extra_line_id"
        const val EXTRA_LINE_QUEUE = "extra_line_queue"
        const val EXTRA_NAV_CATEGORY = "extra_nav_category"
    }
}
