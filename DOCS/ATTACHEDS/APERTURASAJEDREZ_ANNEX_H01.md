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
  (`PA_API_TOKEN`, `PA_USERNAME`, `WEBAPP_DOMAIN`), fallo inicial por
  falta de icono adaptativo (`mipmap/ic_launcher`) diagnosticado y
  corregido, workflow en verde (compilación + subida a PythonAnywhere
  + reload del webapp).

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

## HOJA DE RUTA PARA LA SIGUIENTE SESIÓN

La primera sesión formal del proyecto (vía `newflow-android-pisa`)
arranca directamente con esto, sin que falte nada por definir a nivel
de producto:

1. Definir profundidad de líneas y si se registra progreso
   (aciertos/fallos por línea) — única decisión de producto que
   sigue abierta.
2. Implementar el tablero interactivo (`WebView` + `chessboard.js` +
   `chess.js` como assets locales, puente `addJavascriptInterface`
   — ver §2 de `MASTER_DOCUMENT.md`) con una única línea jugable de
   principio a fin: el Gambito de Dama con blancas.
3. Verificar el flujo completo (jugada elegida → validación contra
   la línea esperada → feedback visual) con esa única línea antes de
   añadir el resto de variantes de blancas o la escandinava de
   negras (eso ya es Hito 02).
4. Compilar y verificar vía el workflow `build-and-deploy.yml` (ya
   probado en verde en la inicialización) tras el primer commit de
   código real.
