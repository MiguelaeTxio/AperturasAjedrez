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
     jugada correcta y se muestra la insignia/mensaje humorístico
     **"torpe como una oruga"**, luego continúa la línea con la
     jugada revelada ya aplicada.
  5. Al completar la línea: feedback de "línea completada".
- **Feedback visual (toda jugada, propia o del motor):** resalte de
  color en la casilla de origen y en la casilla de destino de la
  última pieza movida (estilo estándar `chessboard.js` con overlay
  de color sobre las casillas, no solo highlight de la pieza).

Con esto no queda ninguna decisión de producto abierta para empezar
a codificar el tablero.

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
