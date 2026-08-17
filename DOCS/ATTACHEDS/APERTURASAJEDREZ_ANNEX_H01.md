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

## INCIDENCIA CERRADA — menú, selector, explicaciones y actualizaciones (S1)

Tras probar el mecanizado del tablero en dispositivo real, Miguel
Ángel pidió ampliar el alcance más allá de la única línea plana de
H01: menú de navegación, selector de aperturas (preparado aunque solo
haya una entrada real), explicación de cada jugada (idea/ventaja/
debilidad) y, dentro de Ajustes, búsqueda e instalación de
actualizaciones. Decisiones cerradas:

- **Explicaciones de jugada:** las redacta Claude con criterio
  ajedrecístico general (idea, ventaja principal, debilidad/riesgo
  principal por jugada), sin fuente externa concreta indicada por
  Miguel Ángel.
- **Selector de aperturas:** se monta ya como pantalla propia
  (`OpeningSelectorActivity`, `RecyclerView`), aunque de momento solo
  liste la única línea de H01 — sin cambios de arquitectura
  pendientes para cuando se añadan las demás en H02.
- **Actualizaciones:** mismo patrón que MiMoo (manifiesto
  `manifest.json` con `versionCode`/`versionName`/`apkUrl`, alias de
  GitHub `releases/latest/download/manifest.json`, descarga vía
  `FileProvider` + `Intent(ACTION_VIEW)`), pero con un repositorio de
  Releases **propio** (`AperturasAjedrezReleases`), nunca el
  `AndroidReleases` de MiMoo — compartirlo rompería el alias `latest`
  para ambas apps, ya que apunta a la Release más reciente de todo el
  repositorio sin distinguir proyecto. Nuevo secret en este repo:
  `RELEASES_REPO_TOKEN` (permiso *Contents: Read and write* sobre
  `AperturasAjedrezReleases` únicamente).
- Corregido de antemano un bug real que MiMoo sufrió y documentó en
  H07: sin comprobar `canRequestPackageInstalls()` antes de lanzar el
  Intent de instalación, este no hace absolutamente nada si falta el
  permiso — `UpdateChecker.ensureInstallPermissionOrRedirect()` lo
  comprueba primero y manda a Miguel Ángel a Ajustes del sistema si
  falta.
- Arquitectura deliberadamente ligera: sin Retrofit/Hilt para el
  checker de actualizaciones (`HttpURLConnection` + `Handler`) — la
  app no tiene esa arquitectura y no se justifica introducirla solo
  para esto, a diferencia de MiMoo que ya la tenía de antes.

## REAPERTURA VÍA PCH (S6)

Al cierre de una sesión larga (H04 dado por completado), Miguel Ángel
señaló que la mecánica de entrenamiento de aperturas -- la base
misma del Hito 01, sin tocar desde S1 -- se queda corta frente al
objetivo real del proyecto. Cita textual: *"la idea original era
aprender una apertura y sus movimientos, lo que tenemos, una línea
con sus movimientos rígido, sin posibilidad alguna de estudiar las
variantes, sin explicaciones, lo que es coger una línea de apertura y
poner los movimientos desde el principio hasta el final sin más. La
idea es aprender una apertura, cuando se elija un movimiento decir si
está recogida esa variante o no, como se llama, usar colores para
distinguir las ramas, etc."*

**Verificado real en el código antes de escribir esto** (no se asume
nada): cada entrada de `repertoire.js` / `RepertoireCatalog.kt` es
una lista plana e independiente de jugadas de principio a fin. Líneas
que comparten las mismas jugadas iniciales (p. ej. todas las
variantes del Gambito de Dama, que arrancan igual 1.d4 d5 2.c4) están
completamente duplicadas entre sí -- no existe ninguna estructura de
árbol compartida. El motor de línea fija (`onDrop`/`processUserMove`
en `game.js`) solo sabe comparar la jugada del usuario contra "la
siguiente jugada esperada" de una única secuencia (`currentExpected()`
avanzando por `line.moves` con `moveIndex`) -- no tiene ningún
concepto de variante, de rama, ni de nombre de línea más allá del
`name` de la línea completa.

### Lo pedido por Miguel Ángel (textual, sin reinterpretar)

1. Aprender una **apertura** (con todas sus variantes), no una única
   línea rígida de principio a fin.
2. Al elegir un movimiento, la app debe decir **si esa variante está
   recogida** en el repertorio o no.
3. Si está recogida, decir **cómo se llama** esa variante.
4. **Usar colores para distinguir las ramas** (ramificaciones del
   árbol de variantes).
5. "etc." -- Miguel Ángel dejó la puerta abierta a más requisitos que
   surjan al diseñar esto con detalle; no inventar ninguno por
   iniciativa propia, preguntar en la próxima sesión.

### Lo que NO está cerrado todavía (a diferencia del resto de hitos
de este proyecto, aquí no hay ninguna decisión técnica tomada más
allá de lo textual de arriba -- toca **diseño antes de código**, como
siempre, empezando la siguiente sesión desde cero en este punto):

- Modelo de datos: cómo se representa un árbol de variantes en vez de
  una lista plana (¿nodos con hijos? ¿reutilizar el `repertoire.js`
  actual con un campo nuevo de bifurcación? ¿fichero nuevo por
  apertura?).
- Mecánica de juego: ¿el usuario puede desviarse libremente de
  cualquier variante conocida en cualquier momento, y la app solo
  informa (sin bloquear), o sigue habiendo algún tipo de límite?
- Qué pasa cuando el usuario juega una jugada que **no** está
  recogida en ninguna variante del repertorio -- ¿se le avisa de que
  "sale del libro"? ¿se sigue explorando la posición igualmente sin
  más restricción?
- Cómo se decide y se muestra el color de cada rama (¿un color fijo
  por variante nombrada? ¿un color que se asigna dinámicamente la
  primera vez que dos variantes se bifurcan?).
- Alcance: ¿esto aplica de entrada a todo el repertorio ya construido
  (H01+H02+H03, Gambito de Dama completo + Escandinava completa +
  defensas contra el resto de aperturas), o se empieza por una
  apertura piloto para validar el diseño antes de migrar todo?
- Impacto en el registro de progreso actual (aciertos/fallos por
  línea) -- ¿sigue teniendo sentido por línea, o pasa a ser por
  variante/nodo del árbol?

## HOJA DE RUTA PARA LA SIGUIENTE SESIÓN

1. Sesión de diseño con Miguel Ángel (sin escribir código hasta
   cerrar todos los puntos abiertos de arriba) para convertir la
   petición textual en una arquitectura concreta: modelo de datos del
   árbol de variantes, mecánica de juego libre con detección de
   variante, criterio de color por rama, y alcance del primer lote de
   migración.
2. Una vez cerrado el diseño, migrar el repertorio existente (o el
   subconjunto piloto acordado) del formato de líneas planas actual
   al nuevo modelo, verificando con `chess.js` real cada variante
   igual que se ha hecho siempre en este proyecto.
3. Construir la UI de color por rama y el aviso de variante
   reconocida/no reconocida.

## CIERRE DEL HITO (S1)

Hito 01 dado por completado en S1: mecanizado de entrenamiento
verificado en dispositivo real (jugada → validación → feedback,
3 fallos → revelación bloqueante, resalte de casillas, registro de
progreso), navegación completa (menú → selector → tablero → ajustes),
explicaciones de jugada, y sistema de actualizaciones end-to-end
funcionando. El hito EN PROGRESO pasa a Hito 02 — ver
`MASTER_DOCUMENT.md` §3 y `APERTURASAJEDREZ_ANNEX_H02.md`.
