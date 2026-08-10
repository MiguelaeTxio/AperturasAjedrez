# Anexo — Hito 01: Fundamentos y repertorio base

## COMPLETADAS

- Repositorio inicializado en modo NewFlow (GitHub-directo, sin
  PythonAnywhere/SWAP/sftp para código ni documentación).
- Estructura mínima de proyecto Android creada (Gradle Kotlin DSL,
  actividad única de arranque).
- Workflow de GitHub Actions (`build-and-deploy.yml`) creado para
  compilación en la nube y despliegue a PythonAnywhere.
- Repertorio de blancas fijado: Gambito de Dama (1.d4 d5 2.c4), única
  línea a entrenar con blancas.
- Pipeline de CI/CD verificado de punta a punta: secrets configurados
  (`PA_API_TOKEN`, `PA_USERNAME`), fallo inicial por falta de icono
  adaptativo (`mipmap/ic_launcher`) diagnosticado y corregido,
  workflow en verde (compilación + subida a PythonAnywhere). El
  patrón de despliegue original (ruta Django + reload) se reconcilió
  con la convención real de MiMoo en S1 — ver incidencia cerrada más
  abajo.

## INCIDENCIA CERRADA — repertorio de negras

Miguel Ángel confirmó la lectura 1: el repertorio de negras contra
1.e4 es siempre 1...d5 (escandinava), sin excepción — la apertura
española no llega a producirse en sus partidas porque no juega
1...e5. Repertorio completo:

- **Blancas:** siempre Gambito de Dama (1.d4 d5 2.c4) — se estudian
  sus variantes desde el punto de vista de blancas.
- **Negras contra 1.e4:** siempre defensa escandinava (1...d5) —
  primera línea a estudiar en profundidad, con todas sus variantes.
- **Negras contra el resto de aperturas de blancas:** cobertura de
  las defensas más habituales, empezando por las más jugadas en la
  práctica, tras cerrar el estudio de la escandinava. Orden y
  alcance concretos pendientes de definir con Miguel Ángel llegado
  ese punto.

Requisito explícito de UI: el tablero es visual e interactivo, nunca
solo texto. Decisión técnica tomada — ver §2 de `MASTER_DOCUMENT.md`
(`WebView` + `chessboard.js` + `chess.js` embebidos como assets
locales).

## COMPLETADAS FUERA DE SESIÓN DE PROYECTO — creación inicial

⚠️ Todo lo anterior (apertura de repositorio + inicialización) se
acometió **fuera del ciclo formal de sesión de proyecto**: no hubo
`newflow-android-pisa` (el proyecto no existía aún) ni PAH Momento 1,
en un hilo de chat cuyo contexto inicial era otro proyecto
(`System`). Queda registrado aquí explícitamente para que quede
trazado, aunque no encaje en el formato habitual de "COMPLETADAS EN
S0XX" de una sesión numerada — la numeración de sesiones de este
proyecto empieza en la primera sesión real vía `newflow-android-pisa`.

## INCIDENCIA CERRADA — registro de progreso y mecánica de entrenamiento (S1)

Miguel Ángel confirmó, en la primera sesión formal (S1):

- **Registro de progreso:** aciertos y fallos **acumulados por
  línea** (contador entero de cada uno, sin fecha ni racha por
  ahora — se podrá añadir en el futuro sin romper el modelo de
  datos si el contador simple resulta insuficiente).
- **Mecánica de entrenamiento por línea:**
  1. El motor auto-juega el bando contrario, con una pequeña
     pausa/animación antes de mover (no instantáneo).
  2. Miguel Ángel mueve su bando (blancas en el Gambito de Dama) en
     el tablero.
  3. La app compara la jugada contra la esperada en la línea:
     - **Acierto** → suma acierto de la línea, el tablero avanza y
       el motor auto-juega de inmediato la siguiente jugada rival.
     - **Fallo** → suma fallo de la línea, feedback visual, permite
       reintentar la misma jugada.
  4. **Tras 3 fallos seguidos en la misma jugada:** se revela la
     jugada correcta y se muestra un **diálogo bloqueante** (no un
     Toast/Snackbar que desaparezca solo) con la insignia/mensaje
     humorístico **"torpe como una oruga"** — Miguel Ángel tiene que
     cerrarlo explícitamente para continuar. Al cerrarlo, la línea
     sigue con la jugada revelada ya aplicada.
  5. Al completar la línea: feedback de "línea completada".
- **Feedback visual (toda jugada, propia o del motor):** resalte de
  color en la casilla de origen y en la casilla de destino de la
  última pieza movida (estilo estándar `chessboard.js` con overlay
  de color sobre las casillas, no solo highlight de la pieza).

Con esto no queda ninguna decisión de producto abierta para empezar
a codificar el tablero.

## INCIDENCIA CERRADA — reconciliación de convención de despliegue con MiMoo (S1)

La inicialización del repositorio (fuera de sesión formal, ver más
abajo) copió un patrón de despliegue descartado: subida a una ruta
servida por Django (`panel/static/panel/apk/...`) más un paso de
"reload web app" con el secret `WEBAPP_DOMAIN`. Miguel Ángel detectó
la discrepancia comparando contra la estructura real de MiMoo en
PythonAnywhere (captura de `/home/MiguelAeTxio/ANDROID/MiMoo/`, con
`apk/` como subcarpeta directa, sin backend Django de por medio).

Corregido para igualar la convención real y ya probada de MiMoo:

- **Despliegue:** subida directa a
  `/home/MiguelAeTxio/ANDROID/AperturasAjedrez/apk/AperturasAjedrez.apk`
  vía la API de archivos de PythonAnywhere. Sin paso de reload — no
  hay ninguna aplicación Django sirviendo el archivo, así que no hay
  nada que recargar. Retirados el uso de `WEBAPP_DOMAIN`.
- **`versionCode` dinámico:** recibido como `-PversionCode=N` desde
  el workflow (`github.run_number`, siempre creciente) en vez de un
  valor fijo en `build.gradle.kts` — sin esto, Android bloquea las
  actualizaciones.
- **Keystore de debug fija:** el workflow restaura siempre la misma
  keystore (secret `DEBUG_KEYSTORE_BASE64`, generada en S1) antes de
  compilar, y `signingConfigs.debug` en `build.gradle.kts` apunta a
  ella de forma explícita — sin esto, cada runner efímero firmaría
  con una keystore distinta y la siguiente actualización se
  rechazaría por "conflicto con un paquete".
- `DOCS/SESSION_VARIABLES.md` reescrito con el mismo formato que el
  de MiMoo (`APK_DEPLOY_PATH`, lista de secrets con nombre pero sin
  valor).

## HOJA DE RUTA PARA LA SIGUIENTE SESIÓN

La primera sesión formal del proyecto (vía `newflow-android-pisa`)
arranca directamente con esto, sin que falte nada por definir a nivel
de producto:

1. ~~Definir profundidad de líneas y si se registra progreso~~ —
   cerrado en S1, ver "INCIDENCIA CERRADA" arriba.
2. Implementar el tablero interactivo (`WebView` + `chessboard.js` +
   `chess.js` como assets locales, puente `addJavascriptInterface`
   — ver §2 de `MASTER_DOCUMENT.md`) con una única línea jugable de
   principio a fin: el Gambito de Dama con blancas, siguiendo la
   mecánica de entrenamiento cerrada arriba (auto-juego del motor
   con pausa, 3 intentos, resalte de casillas, registro de
   aciertos/fallos por línea).
3. Verificar el flujo completo (jugada elegida → validación contra
   la línea esperada → feedback visual) con esa única línea antes de
   añadir el resto de variantes de blancas o la escandinava de
   negras (eso ya es Hito 02).
4. Compilar y verificar vía el workflow `build-and-deploy.yml` (ya
   probado en verde en la inicialización) tras el primer commit de
   código real.
