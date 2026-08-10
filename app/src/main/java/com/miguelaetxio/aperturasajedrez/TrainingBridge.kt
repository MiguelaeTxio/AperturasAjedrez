package com.miguelaetxio.aperturasajedrez

import android.app.AlertDialog
import android.content.Context
import android.content.SharedPreferences
import android.os.Handler
import android.os.Looper
import android.webkit.JavascriptInterface
import android.webkit.WebView
import org.json.JSONObject

/**
 * Puente expuesto al WebView como `AndroidBridge`. Todo metodo anotado
 * con @JavascriptInterface corre en el hilo del WebView (no en el hilo
 * de UI), asi que cualquier interaccion con la UI (AlertDialog) o con
 * el propio WebView se despacha al hilo principal via [mainHandler].
 *
 * Registro de progreso: contador de aciertos/fallos acumulados por
 * linea, sin fecha ni racha (decision cerrada S1 -- ver
 * DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H01.md).
 */
class TrainingBridge(
    private val context: Context,
    private val webView: WebView
) {
    private val prefs: SharedPreferences =
        context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
    private val mainHandler = Handler(Looper.getMainLooper())

    @JavascriptInterface
    fun recordAttempt(lineId: String, correct: Boolean) {
        val key = if (correct) aciertosKey(lineId) else fallosKey(lineId)
        val current = prefs.getInt(key, 0)
        prefs.edit().putInt(key, current + 1).apply()
    }

    @JavascriptInterface
    fun getProgress(lineId: String): String {
        val aciertos = prefs.getInt(aciertosKey(lineId), 0)
        val fallos = prefs.getInt(fallosKey(lineId), 0)
        return JSONObject()
            .put("aciertos", aciertos)
            .put("fallos", fallos)
            .toString()
    }

    @JavascriptInterface
    fun showTorpeDialog() {
        mainHandler.post {
            AlertDialog.Builder(context)
                .setTitle("Torpe como una oruga")
                .setMessage("Tres fallos seguidos en esta jugada. Se revela la jugada correcta.")
                .setCancelable(false)
                .setPositiveButton("Entendido") { dialog, _ ->
                    dialog.dismiss()
                    webView.evaluateJavascript(
                        "window.onTorpeDialogClosed && window.onTorpeDialogClosed();",
                        null
                    )
                }
                .show()
        }
    }

    private fun aciertosKey(lineId: String) = "${lineId}_aciertos"
    private fun fallosKey(lineId: String) = "${lineId}_fallos"

    companion object {
        private const val PREFS_NAME = "training_progress"
    }
}
