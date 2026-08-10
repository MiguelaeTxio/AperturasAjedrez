package com.miguelaetxio.aperturasajedrez

import android.net.Uri
import android.os.Bundle
import android.widget.Button
import android.widget.ProgressBar
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.miguelaetxio.aperturasajedrez.update.UpdateCheckResult
import com.miguelaetxio.aperturasajedrez.update.UpdateChecker
import com.miguelaetxio.aperturasajedrez.update.UpdateManifest

class SettingsActivity : AppCompatActivity() {

    private lateinit var updateChecker: UpdateChecker
    private lateinit var currentVersionText: TextView
    private lateinit var checkUpdateButton: Button
    private lateinit var updateProgress: ProgressBar
    private lateinit var updateStatusText: TextView
    private lateinit var installUpdateButton: Button

    private var pendingManifest: UpdateManifest? = null
    private var pendingApkUri: Uri? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_settings)

        updateChecker = UpdateChecker(this)
        currentVersionText = findViewById(R.id.currentVersionText)
        checkUpdateButton = findViewById(R.id.checkUpdateButton)
        updateProgress = findViewById(R.id.updateProgress)
        updateStatusText = findViewById(R.id.updateStatusText)
        installUpdateButton = findViewById(R.id.installUpdateButton)

        currentVersionText.text = getString(
            R.string.settings_current_version,
            BuildConfig.VERSION_NAME,
            BuildConfig.VERSION_CODE
        )

        checkUpdateButton.setOnClickListener { onCheckUpdateClicked() }
        installUpdateButton.setOnClickListener { onInstallClicked() }
    }

    override fun onResume() {
        super.onResume()
        // Al volver de Ajustes del sistema tras conceder el permiso de
        // "instalar apps desconocidas", reintenta directamente en vez
        // de obligar a Miguel Angel a pulsar Instalar dos veces.
        if (pendingApkUri != null && updateChecker.ensureInstallPermissionOrRedirect()) {
            onInstallClicked()
        }
    }

    private fun onCheckUpdateClicked() {
        checkUpdateButton.isEnabled = false
        installUpdateButton.visibility = android.view.View.GONE
        updateStatusText.text = getString(R.string.settings_checking)
        updateChecker.checkForUpdate(BuildConfig.VERSION_CODE) { result ->
            checkUpdateButton.isEnabled = true
            when (result) {
                is UpdateCheckResult.UpToDate -> {
                    updateStatusText.text = getString(R.string.settings_up_to_date)
                }
                is UpdateCheckResult.UpdateAvailable -> {
                    pendingManifest = result.manifest
                    updateStatusText.text = getString(
                        R.string.settings_update_available,
                        result.manifest.versionName
                    )
                    startDownload(result.manifest)
                }
                is UpdateCheckResult.Error -> {
                    updateStatusText.text = getString(
                        R.string.settings_update_error,
                        result.message
                    )
                }
            }
        }
    }

    private fun startDownload(manifest: UpdateManifest) {
        updateProgress.visibility = android.view.View.VISIBLE
        updateProgress.isIndeterminate = true
        updateChecker.downloadApk(
            manifest,
            onProgress = { downloaded, total ->
                if (total > 0) {
                    updateProgress.isIndeterminate = false
                    updateProgress.max = 100
                    updateProgress.progress = ((downloaded * 100) / total).toInt()
                }
            },
            onSuccess = { uri ->
                pendingApkUri = uri
                updateProgress.visibility = android.view.View.GONE
                updateStatusText.text = getString(R.string.settings_download_complete)
                installUpdateButton.visibility = android.view.View.VISIBLE
            },
            onError = { message ->
                updateProgress.visibility = android.view.View.GONE
                updateStatusText.text = getString(R.string.settings_update_error, message)
            }
        )
    }

    private fun onInstallClicked() {
        val uri = pendingApkUri ?: return
        if (!updateChecker.ensureInstallPermissionOrRedirect()) {
            updateStatusText.text = getString(R.string.settings_grant_install_permission)
            return
        }
        updateChecker.launchInstall(uri)
    }
}
