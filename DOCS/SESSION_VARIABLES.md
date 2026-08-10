# APERTURASAJEDREZ — VARIABLES DE SESIÓN (NewFlow Android)

*Formato reconciliado con el de MiMoo en S1 (ver incidencia cerrada
en `DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H01.md`) para no tener
discrepancias entre proyectos Android de la plataforma.*

| Variable | Valor |
|---|---|
| `PROJECT_ID` | AperturasAjedrez |
| `ANDROID_APP_NAME` | AperturasAjedrez |
| `ANDROID_PACKAGE` | `com.miguelaetxio.aperturasajedrez` |
| `ANDROID_GITHUB_REPO` | `https://github.com/MiguelaeTxio/AperturasAjedrez.git` |
| `ANDROID_GITHUB_OWNER` | MiguelaeTxio |
| `ANDROID_GITHUB_BRANCH` | main |
| `MASTER_DOCUMENT_PATH` | `DOCS/MASTER_DOCUMENT.md` |
| `RESUMPTION_POINT_PATH` | `DOCS/RESUMPTION_POINT.md` |
| `APK_DEPLOY_PATH` (PythonAnywhere, gestionado por el workflow) | `/home/MiguelAeTxio/ANDROID/AperturasAjedrez/apk/AperturasAjedrez.apk` |
| `RELEASES_REPO` (Releases públicas para el checker de actualizaciones, propio de este proyecto — nunca `AndroidReleases` de MiMoo) | `https://github.com/MiguelaeTxio/AperturasAjedrezReleases` |

## Secrets de GitHub Actions (no vive el valor aquí, solo el nombre)

- `PA_API_TOKEN`
- `PA_USERNAME`
- `DEBUG_KEYSTORE_BASE64` (añadido S1 — keystore de debug fija, misma
  convención que MiMoo, para que las actualizaciones no rompan la
  firma entre builds)
- `RELEASES_REPO_TOKEN` (añadido S1 — permiso *Contents: Read and
  write* únicamente sobre `AperturasAjedrezReleases`, usado por
  `softprops/action-gh-release` para publicar el APK y `manifest.json`
  de cada build)

## Notas

- El token de GitHub para `newflow-android-edit` **nunca** vive en
  este archivo ni en ningún otro archivo del repositorio — solo en
  memoria de comandos puntuales de la sesión activa.
- Este proyecto no tiene enrutador de anexos aparte (`ANNEX_ROUTER.md`):
  el estado del hito EN PROGRESO vive en la tabla de
  `MASTER_DOCUMENT.md`, igual que el resto de proyectos NewFlow sin
  enrutador propio.
