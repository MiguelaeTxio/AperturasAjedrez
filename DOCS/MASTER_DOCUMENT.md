# Documento Maestro: Proyecto AperturasAjedrez

---
## 1. Visión General del Proyecto

App Android de entrenamiento personal de aperturas de ajedrez.
Miguel Ángel practica contra el motor un repertorio fijo y reducido
de aperturas propias, en vez de un estudio genérico de teoría:

- **Con blancas:** siempre Gambito de Dama (1.d4 d5 2.c4) — única
  apertura a entrenar con blancas. Se estudian sus variantes desde
  el punto de vista de blancas (cómo responder a las distintas
  defensas de las negras: Aceptado, Rehusado, Eslava, etc.).
- **Con negras, contra 1.e4:** siempre defensa escandinava (1...d5) —
  primera línea a estudiar en profundidad, con todas sus variantes.
- **Con negras, contra el resto de primeras jugadas de blancas**
  (cualquier cosa que no sea 1.e4): cobertura de las defensas más
  habituales, empezando por las más jugadas en la práctica, una vez
  cerrado el estudio de la escandinava. Orden y alcance concretos
  pendientes de definir con Miguel Ángel cuando llegue ese punto.

El resto del repertorio (profundidad de líneas, si se registra
progreso) queda pendiente de definir con Miguel Ángel.

## 2. Arquitectura Técnica

- Android nativo, Kotlin, Gradle Kotlin DSL.
- **Tablero: interactivo y visual, nunca solo texto** (requisito
  explícito de Miguel Ángel). Decisión técnica: `WebView` embebido
  con `chessboard.js` (renderizado/interacción del tablero) +
  `chess.js` (validación de reglas y generación de jugadas legales),
  ambas librerías empaquetadas como assets locales de la app
  (`app/src/main/assets/`) — sin llamada a red en tiempo de
  ejecución, funciona offline. El puente Kotlin↔JS vía
  `WebView.addJavascriptInterface` para leer la jugada elegida por
  Miguel Ángel y compararla contra la línea de repertorio esperada.
  Alternativa descartada: motor nativo tipo Stockfish vía JNI —
  innecesario, aquí no hace falta un motor que juegue, solo validar
  reglas y comparar contra líneas fijas ya conocidas.
- **Mecánica de entrenamiento (cerrada S1, ver incidencia en el
  anexo de H01):** el motor auto-juega el bando contrario con una
  pequeña pausa/animación antes de mover; Miguel Ángel mueve su
  bando y la app compara contra la jugada esperada — acierto suma
  acierto y encadena la jugada automática del rival, fallo suma
  fallo y permite reintentar; a los 3 fallos seguidos en la misma
  jugada se revela la jugada correcta con un diálogo bloqueante
  (hay que cerrarlo a mano) con el mensaje "torpe como una oruga" y
  se continúa la línea. Toda jugada (propia o del motor)
  resalta con color la casilla de origen y la de destino.
- Repertorio embebido como datos de la app (líneas de apertura en
  notación algebraica/FEN), sin backend propio.
- Persistencia local del progreso: contador entero de aciertos y de
  fallos acumulados por línea (sin fecha ni racha por ahora — ver
  incidencia cerrada S1 en `DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H01.md`).
- **Navegación (cerrada S1):** `MenuActivity` (launcher) → *Entrenar*
  lleva a `OpeningSelectorActivity` (lista nativa, `RecyclerView`,
  preparada para más entradas aunque H01 solo tenga una línea real) →
  al elegir una línea abre `BoardActivity` (el `WebView` del tablero)
  con esa línea como parámetro. *Ajustes* lleva a `SettingsActivity`.
- **Explicación de jugadas (cerrada S1):** cada jugada del repertorio
  lleva asociada una explicación (idea, ventaja principal, debilidad/
  riesgo principal), redactada por Claude con criterio ajedrecístico
  general. Se muestra en el tablero justo después de jugarse esa
  jugada (propia, del motor, o revelada tras 3 fallos).
- **Actualizaciones (cerrada S1, dentro de Ajustes):** mismo patrón
  que MiMoo — manifiesto `manifest.json` (`versionCode`/`versionName`/
  `apkUrl`) publicado como Release en GitHub junto al APK, leído vía
  el alias `releases/latest/download/manifest.json`, descarga con
  `FileProvider` + instalación con `Intent(ACTION_VIEW)`. Repositorio
  de Releases **propio**: `AperturasAjedrezReleases` — nunca el
  `AndroidReleases` de MiMoo, porque el alias `latest` apunta a la
  Release más reciente de todo el repositorio y compartirlo rompería
  el checker de ambas apps. Sin Retrofit/Hilt (arquitectura ligera
  que ya tenía MiMoo de antes y esta app no): `HttpURLConnection` +
  `Handler` puro. Comprueba `canRequestPackageInstalls()` antes de
  lanzar la instalación (bug real ya sufrido y corregido en MiMoo
  H07: sin esa comprobación, el Intent no hace nada si falta el
  permiso).

## 3. Hoja de Ruta Estratégica

### Hito 01 — Fundamentos y repertorio base (EN PROGRESO)
(Ver anexo `DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H01.md`)

**Reapertura vía PCH (S6):** Miguel Ángel señaló, al cierre de la
sesión, que la mecánica de entrenamiento de aperturas actual
(heredada de S1, ver anexo) es demasiado rígida para el objetivo real
-- "la idea original era aprender una apertura y sus movimientos, lo
que tenemos es coger una línea de apertura y poner los movimientos
desde el principio hasta el final sin más, sin posibilidad de
estudiar variantes, sin explicación de si el movimiento elegido está
recogido o no". Verificado real en el código antes de escribir esto:
cada entrada de `repertoire.js`/`RepertoireCatalog.kt` es una lista
plana e independiente de jugadas de principio a fin -- líneas que
comparten las mismas jugadas iniciales (p. ej. todas las variantes
del Gambito de Dama) están completamente duplicadas entre sí, sin
ninguna estructura de árbol compartida, y el motor de línea fija solo
sabe comparar contra "la siguiente jugada esperada" de una única
secuencia, sin ningún concepto de variante ni de nombre de rama.
Pendiente de diseño completo con Miguel Ángel al empezar la siguiente
sesión -- ver hoja de ruta en el anexo H01, todavía sin arquitectura
técnica cerrada (solo el objetivo de producto, tal como lo planteó
Miguel Ángel).

### Hito 02 — Repertorio completo de blancas y escandinava completa (COMPLETADO)
(Ver anexo `DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H02.md`)
Todas las variantes del Gambito de Dama con blancas (Aceptado,
Rehusado, Eslava...) y todas las variantes de la escandinava con
negras contra 1.e4.

### Hito 03 — Defensas de negras contra el resto de aperturas de blancas (COMPLETADO)
(Ver anexo `DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H03.md`)
Cobertura de las defensas más habituales contra cualquier primera
jugada de blancas que no sea 1.e4, empezando por las más jugadas en
la práctica. 9 líneas finales cubriendo las 5 familias del alcance
(Londres, Inglesa+Catalán, Reti, Trompowsky, flancos menores), todas
por encima de la profundidad media de H01/H02.

### Hito 04 — Entrenamiento de finales de partida y sección de problemas (COMPLETADO)
(Ver anexo `DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H04.md`)
Acordado con Miguel Ángel al cierre de Hito 02, para después de
Hito 03. Dos bloques nuevos de contenido, reutilizando la mecánica de
entrenamiento existente donde encaje:
- **Finales de partida**: cada final carga su propia posición inicial
  (FEN) en vez de partir siempre de la posición inicial de la
  partida. Los finales de mate elemental (torre, dama, dos alfiles)
  usan un modo de motor nuevo, "práctica libre de técnica"
  (`freeMode`, ver anexo): sin jugada única esperada, el usuario
  mueve con libertad y el motor solo impide la jugada que ahoga al
  rival. El resto de finales y las líneas de apertura siguen usando
  el motor de línea fija original.
- **Problemas de ajedrez**: posición suelta + solución corta,
  anclados en patrones y partidas reales documentadas (mate de
  Legal, de Anastasia, de Boden con partida real completa, mate
  sofocado / Legado de Philidor), clasificados por tema y por nivel
  de dificultad (1 a 4). Reutiliza el motor de línea fija tal cual,
  sin necesitar ningún modo nuevo.

**Reapertura vía PCH (S6):** Miguel Ángel señaló que la sección de
Problemas, aunque correcta, no se parece a un banco de problemas real
(comparado con Chess.com/Lichess) -- ver anexo H04 para el detalle
completo de la investigación y el diseño cerrado. Bloque de partidas
reales (antes "Nivel.TORNEO") se conserva y se amplía; bloque de
problemas se reconstruye desde la base pública de Lichess.
**Reapertura cerrada en S6:** 267 problemas nuevos (banco táctico
verificado) + 33 posiciones de solución larga ampliando Grandes
Partidas, 321 entradas totales en el hito, todas verificadas con
`chess.js` real. Tras uso real en dispositivo: corregida ambigüedad
de "rating" (dificultad del problema, no ELO de jugadores), corregido
bug real del botón reiniciar con pieza cogida, añadido sistema de
navegación/avance sin repetir/marcapáginas/favoritos, corregido bug
real de chess.js (lanza excepción en vez de null en jugadas ilegales
-- rompía el flujo al soltar en la misma casilla), añadido indicador
"Juegan blancas/negras", y restaurado el modo toque-toque como
función real e independiente del arrastre. **Dado por completado en
S6** -- ver hoja de ruta cerrada en el anexo.

### Hito 05 — Trampas en las aperturas (PAUSADO)
(Ver anexo `DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H05.md`)
Sección de trampas de apertura ligadas al repertorio ya existente
(Gambito de Dama con blancas, Escandinava y demás defensas con
negras) -- no trampas genéricas, solo las que aparecen dentro de las
líneas que Miguel Ángel ya juega. Dos categorías: ofensivas (las que
puede tender él) y defensivas (las que debe reconocer y evitar). 6
trampas verificadas con `chess.js` real, arquitectura completa
construida (cuarta categoría del menú) y build verde confirmado.
Pausado pendiente de verificación en dispositivo real por Miguel
Ángel.

### Hito 06 — Estructuras de peones y planes de medio juego (PAUSADO)
(Ver anexo `DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H06.md`)
Sección de estructuras de peones y sus planes de medio juego
asociados, ancladas al repertorio ya existente (IQP, Carlsbad/ataque
de minoría, Meran, Catalana) -- no estructuras genéricas de cualquier
apertura. Quinta categoría del menú, con texto explicativo +
diagrama estático (reutilizando `overview`/`startFen` ya existentes)
y demostración jugable del plan (reutilizando el motor de línea fija
tal cual, sin diseño nuevo). Diseño cerrado con Miguel Ángel;
contenido y arquitectura pendientes de construir. Pausado por PCH
explícito de Miguel Ángel en S6, antes de empezar la construcción,
para retomar H04 (ver anexo H04). Hoja de ruta intacta a la espera de
reactivación.

## 4. Directrices Técnicas Vinculantes

- §4.1 — Antes de codificar sobre un archivo existente, releerlo
  directamente del clon local en el turno actual (nunca inferir su
  contenido de memoria de turnos anteriores).
- §4.2 — Navegación resuelta en H01: `MenuActivity` (launcher) →
  `OpeningSelectorActivity` → `BoardActivity`; `SettingsActivity`
  aparte. Sin `NavGraph`/Jetpack Navigation -- Activities e Intents
  explícitos, arquitectura deliberadamente ligera acorde al tamaño de
  la app (ver `MASTER_DOCUMENT.md` §2, "Navegación").
- §4.7 — Ningún archivo de código lleva como primera línea un
  comentario con su propia ruta.
