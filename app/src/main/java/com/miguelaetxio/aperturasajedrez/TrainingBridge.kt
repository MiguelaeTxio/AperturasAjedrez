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
 *
 * S6 (navegacion de Problemas de ajedrez, ver ANNEX_H04.md): se anade
 * persistencia de "resuelto" por problema (para el avance sin repetir
 * -- salta los ya resueltos), "favorito" por problema, y
 * "marcapaginas" (indice recordado) por categoria navegable. Todo en
 * el mismo SharedPreferences, mismo patron de clave que
 * aciertos/fallos.
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
    fun markSolved(lineId: String) {
        prefs.edit().putBoolean(resueltoKey(lineId), true).apply()
    }

    @JavascriptInterface
    fun isSolved(lineId: String): Boolean =
        prefs.getBoolean(resueltoKey(lineId), false)

    @JavascriptInterface
    fun toggleFavorite(lineId: String): Boolean {
        val nuevoValor = !prefs.getBoolean(favoritoKey(lineId), false)
        prefs.edit().putBoolean(favoritoKey(lineId), nuevoValor).apply()
        return nuevoValor
    }

    @JavascriptInterface
    fun isFavorite(lineId: String): Boolean =
        prefs.getBoolean(favoritoKey(lineId), false)

    @JavascriptInterface
    fun getBookmark(category: String): Int =
        prefs.getInt(marcapaginasKey(category), 0)

    @JavascriptInterface
    fun setBookmark(category: String, index: Int) {
        prefs.edit().putInt(marcapaginasKey(category), index).apply()
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
    private fun resueltoKey(lineId: String) = "${lineId}_resuelto"
    private fun favoritoKey(lineId: String) = "${lineId}_favorito"
    private fun marcapaginasKey(category: String) = "${category}_marcapaginas"

    companion object {
        private const val PREFS_NAME = "training_progress"
    }
}
