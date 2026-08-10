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
 */
class BoardActivity : AppCompatActivity() {

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_board)

        val lineId = intent.getStringExtra(EXTRA_LINE_ID)
            ?: com.miguelaetxio.aperturasajedrez.data.RepertoireCatalog.entries.first().id

        val webView = findViewById<WebView>(R.id.boardWebView)
        webView.settings.javaScriptEnabled = true
        webView.settings.allowFileAccess = true
        webView.addJavascriptInterface(TrainingBridge(this, webView), "AndroidBridge")

        val url = Uri.parse("file:///android_asset/www/index.html")
            .buildUpon()
            .appendQueryParameter("line", lineId)
            .build()
        webView.loadUrl(url.toString())
    }

    companion object {
        const val EXTRA_LINE_ID = "extra_line_id"
    }
}
