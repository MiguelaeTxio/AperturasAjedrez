# Anexo — Hito 04: Entrenamiento de finales de partida y sección de problemas

## OBJETIVO

Dos bloques nuevos de contenido de entrenamiento, acordados con
Miguel Ángel en líneas generales al cierre del Hito 02 (ver
`MASTER_DOCUMENT.md` §3), abiertos formalmente como hito activo tras
el cierre de H03 en S3:

1. **Finales de partida**: cada final carga su propia posición
   inicial (FEN) en vez de partir siempre de la posición inicial de
   la partida — el resto del motor (jugada esperada, el rival
   responde, feedback, resaltado de casillas, diálogo de 3 fallos) se
   reutiliza tal cual, sin cambios de arquitectura.
2. **Problemas de ajedrez**: posición suelta + solución corta (1-5
   jugadas que ganan material o dan mate), clasificados por tema
   (clavada, horquilla, mate en 2, desviación...). *Nota: pese a lo
   que se preveía al abrir el hito, en la práctica no rompen el
   patrón de líneas/finales — ver sección "DISEÑO CERRADO (S4)",
   apartado Problemas, para el hallazgo concreto.*

## CONTEXTO TÉCNICO

- Arquitectura ya validada en H01-H03: `WebView` + `chessboard.js` +
  `chess.js` como assets locales, puente Kotlin↔JS vía
  `addJavascriptInterface`. Los finales de partida encajan de forma
  directa en `repertoire.js` (o un fichero nuevo equivalente) cargando
  el FEN inicial en vez de la posición de salida estándar.
- Los problemas de ajedrez rompen el patrón "una línea = una partida
  completa jugada contra el motor": necesitan su propia estructura de
  datos (posición + solución corta) y probablemente una pantalla o
  modo distinto en `BoardActivity`, o una `Activity` nueva — a decidir
  en la sesión de diseño (ver Paso 1 de la hoja de ruta).
- Persistencia local de progreso (contador de aciertos/fallos) —
  criterio ya usado en líneas — se extiende a ambos bloques nuevos,
  salvo que Miguel Ángel decida un criterio distinto para problemas
  (p. ej. no tiene sentido un contador de "fallos seguidos con
  diálogo bloqueante" en un problema suelto de mate en 2).

## DISEÑO CERRADO (S4)

Miguel Ángel delegó explícitamente el diseño pedagógico completo de
este hito en Claude ("el experto en pedagogía ajedrecística eres tú"),
sin sesión de cierre de alcance punto por punto. Decisiones tomadas
con criterio ajedrecístico propio, mismo patrón ya usado para redactar
las explicaciones de jugada en H01-H03:

### Finales — alcance (revisado en esta misma sesión, ver nota más abajo)
6 finales, contenido propio (no posiciones históricas citadas por
nombre con pretensión de exactitud de casillas, para no arriesgar una
atribución incorrecta), cubriendo las categorías fundamentales de
técnica de conversión/defensa que todo jugador de club necesita, en
progresión de dificultad y alternando el bando que entrena Miguel
Ángel (para practicar tanto conversión como defensa):

1. Peón pasado alejado -- regla del cuadrado (blancas). **CERRADO S4.**
2. Rey y peón vs rey -- oposición y escolta del rey al peón (blancas).
   **CERRADO S4.**
3. Mate elemental con torre -- técnica de la caja (blancas). **CERRADO
   S4 -- sustituye a "torre y peón vs torre: construir el puente".**
4. Mate elemental con dama -- acorralar sin ahogar (blancas).
   **CERRADO S4 -- sustituye a "torre y peón vs torre: defensa por la
   tercera fila".**
5. Mate con dos alfiles -- caminar en pareja hacia la esquina
   (blancas). **CERRADO S4 -- sustituye a "final de alfiles de
   distinto color: defender con inferioridad material".**
6. Caballo y peón -- el caballo vigila la casilla de coronación
   (blancas). **CERRADO S4 -- sustituye a "final de caballos:
   triangulación y zugzwang".**

**Los 6 finales del hito quedan completos y verificados en S4.**

**Nota sobre la revisión de items 3 y 4 (misma sesión S4):** el diseño
original citaba "construir el puente" (técnica tipo Lucena) y "defensa
por la tercera fila" (técnica tipo Philidor), ambas con resistencia
real del bando defensor (torre negra activa creando jaques/bloqueos).
Al intentar construir esas líneas a mano, Claude encontró más de una
vez recursos tácticos reales para negras que invalidaban la secuencia
planeada (p. ej. una torre negra capturando gratis la torre blanca en
una variante, o un rey negro escapando de un supuesto mate que en
realidad no lo era) -- `chess.js` solo verifica legalidad de jugadas,
nunca solidez táctica ni si una jugada es realmente la mejor defensa,
así que no hay forma de garantizar sin motor de análisis que una línea
de resistencia inventada de memoria sea correcta en cada paso. Un mate
elemental (rey solo enfrente, sin pieza defensora) no tiene ese
problema: no hay contrajuego posible, así que toda la secuencia se
pudo explorar y verificar de forma interactiva con `chess.js` real
-- en cada jugada se comprobaron las jugadas legales de negras
disponibles, y en la jugada final se comprobó explícitamente
`isCheckmate() === true` y `isStalemate() === false` (esto último
importante: una primera versión de "mate con dama" resultó ser
ahogado real, detectado y corregido antes de escribirse en
`finales.js`). Items 5 y 6 se replantearon en consecuencia, evitando
plantearlos como final con resistencia real del bando defensor:

- El final de alfiles pasó a ser un mate elemental (rey y dos alfiles
  contra rey solo) en vez de un final defensivo con alfiles de ambos
  bandos -- mismo motivo que items 3 y 4: sin pieza defensora, no hay
  contrajuego que verificar, solo legalidad y jaque mate real.
- El final de caballos NO se planteó como mate con dos caballos
  porque es un hecho ajedrecístico bien establecido que dos caballos
  solos no pueden forzar mate contra un rey solo con defensa correcta
  (salvo posiciones anómalas puntuales) -- intentarlo habría sido
  enseñar una técnica que en general no funciona. Se sustituyó por una
  técnica de conversión real y sólida: un solo caballo controlando la
  casilla de coronación de un peón (y sus casillas de acceso), que
  tampoco tiene pieza defensora rival y es perfectamente verificable.

Los 6 finales del hito quedaron cerrados con este planteamiento
revisado; no queda ningún final pendiente.

Formato de explicación por jugada: **idéntico** al de las líneas
(`idea`/`ventaja`/`debilidad` por jugada) -- se reutiliza tal cual, sin
formato adaptado especial para finales.

### Problemas — alcance (CERRADO S4, implementado; REDISEÑADO en
sesión posterior)
Primera versión: 10 problemas de posición suelta + solución corta
(1-5 jugadas), clasificados por tema. Verificación: secuencia
completa de la solución validada con `chess.js` real vía `verify.js`
(exploración interactiva cuando había pieza defensora rival con
contrajuego real). Tras fallar: diálogo bloqueante de 3 fallos ("torpe
como una oruga").

**Corrección S4 (sesión posterior): base real, con niveles.** Miguel
Ángel señaló dos fallos de fondo en la primera versión: (1) contenido
inventado por Claude desde cero, de nivel demasiado básico, sin
ningún anclaje en fuentes reales; (2) sin niveles de dificultad, todo
mezclado en un mismo bloque uniforme. Corrección aplicada:

- Los problemas más representativos de cada nivel se anclan en
  **patrones y partidas reales y documentadas**, verificadas
  reproduciendo la apertura/partida completa desde cero con
  `chess.js` (no solo copiando el FEN final de la fuente): el Mate de
  Legal (patrón documentado desde 1750), el Mate de Anastasia (patrón
  con nombre propio desde la novela de 1803), el Mate de Boden con la
  partida real completa "Inmortal Peruana" (Canal-NN, Budapest 1934),
  y el mate sofocado / "Legado de Philidor" (documentado desde el
  manuscrito de Lucena de 1497, fijado en la literatura por Philidor
  en 1749).
- Los 10 problemas de la primera versión (tácticamente sólidos y
  correctamente verificados — el fallo no era de corrección, era de
  nivel y procedencia) se conservan pero se reclasifican por
  dificultad real en vez de presentarse como un bloque uniforme.
- Campo nuevo: `nivel` (1 Iniciación / 2 Intermedio / 3 Avanzado / 4
  Experto), además del ya existente `tema`. Ambos son solo metadatos
  para el selector nativo (`ProblemasCatalog.kt`, con `enum Nivel`) —
  no afectan al motor JS.

Total: **14 problemas** (3 · 4 · 4 · 3 por nivel). Los 4 anclados en
partidas/patrones reales quedan citados con su fuente en el propio
`overview` del problema, visible para Miguel Ángel en la app.

**Hallazgo (se mantiene): los problemas no necesitaron ningún motor
propio.** El diseño original (ver CONTEXTO TÉCNICO más arriba)
anticipaba que los problemas "rompen el patrón" de líneas/finales y
necesitarían una pantalla o `Activity` nueva. En la práctica, un
problema es exactamente una línea/final más: una posición inicial
(`startFen`) más una secuencia fija de jugadas (`moves`, con el mismo
formato `idea`/`ventaja`/`debilidad`) que el motor reproduce igual que
cualquier línea de apertura o final, terminando cuando el array de
jugadas se agota. Los 14 problemas viven en `problemas.js`
(`PROBLEMAS_LINES`), con ids con prefijo `h04-problema-`; `game.js`
busca en la concatenación de `REPERTOIRE_LINES` + `FINALES_LINES` +
`PROBLEMAS_LINES`.

### Integración en el menú (CERRADO S4, implementado)
"Entrenar" pasa a abrir una pantalla intermedia de categoría
(`CategorySelectorActivity`) con tres opciones: Líneas / Finales /
Problemas. Las tres reutilizan `OpeningSelectorActivity` con un
catálogo distinto según la categoría elegida (`RepertoireCatalog`,
`FinalesCatalog` o `ProblemasCatalog`, este último con el `tema` como
subtítulo en el selector).

### Arquitectura de motor (CERRADO S4, implementado)
`game.js` (compartido, sin duplicar) admite un campo opcional
`startFen` por línea: si está presente, `new window.Chess(startFen)` y
`board.position(startFen)` en vez de la posición inicial estándar. Las
líneas de apertura no llevan `startFen` (usan la posición inicial por
defecto, sin cambios). Los finales viven en `finales.js`
(`FINALES_LINES`) y los problemas en `problemas.js`
(`PROBLEMAS_LINES`), ambos con la misma estructura de objeto que
`REPERTOIRE_LINES`; `findLine()` en `game.js` busca en la
concatenación de los tres arrays por `id`, sin necesidad de parámetro
de categoría en la URL del WebView (ids con prefijo `h04-final-` o
`h04-problema-` para evitar colisión).

### Corrección S4 (sesión posterior): modo "práctica libre de técnica"
Miguel Ángel detectó un fallo de planteamiento en los finales de mate
elemental (torre, dama, dos alfiles): la mecánica de "línea fija con
jugada esperada" (heredada de las líneas de apertura, donde SÍ hay una
única jugada correcta) es incorrecta para estas técnicas, porque se
puede acorralar al rey rival hacia cualquiera de los dos lados del
tablero -- no hay una única jugada buena. El motor estaba marcando
como fallo jugadas perfectamente válidas de la misma técnica, y
aceptando como "la buena" precisamente la más lenta.

Corrección: nuevo campo `line.freeMode` en `game.js`. Cuando
`freeMode === true`, el motor abandona por completo el patrón de
"jugada esperada": el usuario mueve su bando con total libertad
(cualquier jugada legal), el rey rival solitario se juega solo (una
respuesta legal cualquiera entre las disponibles, sin "mejor defensa"
que memorizar, ya que un rey solo no tiene forma de defenderse
activamente), y el motor solo interviene para impedir el único error
real de la técnica: una jugada que ahoga al rey rival (se detecta con
`chess.isStalemate()` tras la jugada; si ocurre, se deshace y se avisa
sin revelar ninguna "jugada correcta", porque no existe una única).
Al llegar a jaque mate se registra acierto; cada ahogado bloqueado
cuenta como fallo -- se reutiliza `AndroidBridge.recordAttempt` tal
cual, sin cambios en Kotlin. No se reutiliza el diálogo "torpe como
una oruga" (es específico de revelar una jugada esperada única, que
aquí no existe).

Los 3 finales de mate elemental (torre, dama, dos alfiles) pasan a
`freeMode: true`, con arrays `moves` eliminados. Los otros 3 finales
(regla del cuadrado, oposición y escolta del rey, caballo escoltando
un peón) mantienen el formato de línea fija -- son carreras/técnicas
de conversión con una progresión única razonable, sin la ambigüedad
de "qué lado elegir" que sí tienen los mates con pieza mayor/menor.

## HITO 04 CERRADO EN CONTENIDO (S4)

Los 6 finales y los 10 problemas quedan completos, verificados con
`chess.js` real y con build verde en GitHub Actions. Queda pendiente
solo la valoración con Miguel Ángel de si el hito se da por cerrado
(PCH hacia el siguiente hito) o se amplía el alcance.

## NOTA — S7 (posterior a S4, no recogida en su momento en este anexo)

Miguel Ángel señaló que los 14 problemas de nivel 1-4 se quedan muy
por debajo del rango que necesita entrenar (ELO 1700-2200), y que la
progresión en 4 niveles no reflejaba una diferencia de dificultad
real relevante para él. Se colapsaron esos problemas en una sola
etiqueta honesta ("Nivel.NINOS") y se añadió
un bloque nuevo "Nivel.TORNEO" con partidas reales completas y muy
documentadas (Réti-Tartakower 1910, Partida Inmortal, Molino de
Torre-Lasker, Ópera de Morphy, Partida Perenne de Anderssen-Dufresne,
Lluvia de Oro de Levitsky-Marshall, Inmortal de Rubinstein — 7 en
total). Este cambio vive en el código (`problemas.js`,
`ProblemasCatalog.kt`) pero no había quedado registrado aquí — se
deja constancia ahora, al reabrir el hito.

**Corrección de recuento (S6):** el comentario de cabecera de S7 en
`problemas.js` decía "15 tras sumar uno más", pero el recuento real en
`ProblemasCatalog.kt` (`nivel = Nivel.NINOS`) son **14** problemas de
Iniciación, no 15 -- verificado con `grep -c` sobre el fichero real
antes de escribir nada más. El comentario de S7 no se corrige aquí
(no forma parte del alcance de esta sesión), pero este anexo usa el
recuento real verificado, no el del comentario.

## REAPERTURA VÍA PCH (S6) — INVESTIGACIÓN Y DISEÑO CERRADO

Miguel Ángel señaló que la sección de problemas (nivel Iniciación),
aunque táctica y verificada correctamente, no se parece a lo que se
entiende por "problema de ajedrez" en las plataformas de referencia
(Chess.com, Lichess): posición suelta con solución corta y forzada
(1-5 jugadas), clasificada por **tema táctico real** (fork, pin,
skewer, discoveredAttack, deflection, hangingPiece, sacrifice, mates
con nombre, mateIn1-5...) y por **rating numérico**, no por una
etiqueta narrativa única. Las partidas reales (antes "Nivel.TORNEO")
sí encajan con el concepto de partida completa y no tienen este
problema -- se conservan y se amplían.

### Diseño cerrado con Miguel Ángel (S6)

1. **Tres secciones diferenciadas** dentro de la categoría
   "Problemas" del selector nativo:
   - **Iniciación** -- los 14 problemas actuales de `Nivel.NINOS`, sin
     tocar contenido.
   - **Grandes Partidas** -- los 7 actuales de `Nivel.TORNEO`, más las
     33 posiciones de Lichess descartadas del bloque nuevo por tener
     solución larga (7/9/11 semijugadas -- ver más abajo), en vez de
     descartarlas.
   - **Problemas de ajedrez** (nueva) -- banco de problemas reales
     importados de la base pública de Lichess.
2. **Clasificación replicando Lichess**: tema táctico real (primera
   etiqueta táctica no genérica de la columna `Themes`, ignorando las
   etiquetas de contexto/dificultad que Lichess mezcla en el mismo
   campo -- `middlegame`, `endgame`, `opening`, `short`, `long`,
   `veryLong`, `advantage`, `crushing`, `master`, `masterVsMaster`, que
   no son un tema táctico) y rating numérico como segundo eje,
   filtrables de forma independiente.
3. **Fuente y volumen**: base pública `database.lichess.org`
   (`lichess_db_puzzle.csv.zst`, licencia CC0), filtrada por Miguel
   Ángel en su Termux por rating 1700-2200 con muestreo aleatorio por
   reservorio a 300 filas, subida como
   `lichess_filtrado_1700_2200.csv`. Verificación técnica completa
   con `chess.js` real (conversión UCI→SAN desde el `startFen`
   correcto -- la posición tras la primera jugada de la columna
   `Moves`, que es la que abre el problema, no el FEN original de
   Lichess que es la posición previa a esa jugada): **300/300 filas
   verificadas sin errores**. Distribución real: 3 filas de 1
   semijugada, 140 de 3, 124 de 5, 20 de 7, 10 de 9, 3 de 11.
   - Las **267 filas de 1/3/5 semijugadas** -- solución corta, el
     patrón real de "problema" -- entran en la sección nueva
     "Problemas de ajedrez", sin cap: se usan las 267, no una
     selección reducida.
   - Las **33 filas de 7/9/11 semijugadas** -- combinaciones más
     largas, más cercanas al patrón de partida -- se incorporan a
     "Grandes Partidas" en vez de descartarse (decisión explícita de
     Miguel Ángel: "ya que las tenemos no las vamos a tirar").
   - JSON intermedio con las 300 filas ya convertidas (`startFen`,
     `userColor`, secuencia SAN por jugada, `isMate`, `Themes`,
     `Rating`) generado en `/home/claude/verify/verified_puzzles.json`
     durante la verificación de S6 -- punto de partida para escribir
     el contenido pedagógico (`idea`/`ventaja`/`debilidad` por
     jugada), no forma parte del repositorio.

### Arquitectura (decisión técnica cerrada, sin diseño nuevo de motor)

Mismo hallazgo que el resto del hito: un problema de Lichess es
exactamente una línea más (`startFen`, `userColor`, `overview`,
`moves` con `idea`/`ventaja`/`debilidad` por jugada) -- no hace falta
ningún modo de motor nuevo, ni para "Problemas de ajedrez" ni para las
33 incorporaciones a "Grandes Partidas". Cambia la clasificación en el
catálogo nativo y **la forma de servirlo**, corrigiendo una suposición
inicial errónea de esta misma sesión:

**Hallazgo real (S6, tras leer el código antes de tocar nada):**
"Problemas" no usa un selector de lista -- desde S8 Miguel Ángel
señaló explícitamente que no quiere elegir de una lista de problemas,
y `CategorySelectorActivity` lanza `BoardActivity` directo con la cola
completa barajada (S9, `shuffled()`), sin pasar nunca por
`OpeningSelectorActivity`. Además, el botón único "Problemas" solo
filtraba `Nivel.TORNEO` -- los 14 problemas de `Nivel.NINOS` estaban
en los datos pero huérfanos, sin ningún botón que los sirviera. La
propuesta inicial de esta sesión (selector de lista con filtros de
tema/rating elegibles) contradecía S8 y no se llegó a construir;
corregida antes de escribir código definitivo.

**Diseño corregido y ya implementado:**
- `Nivel` pasa de dos a tres valores (`NINOS`/`TORNEO`/`LICHESS`),
  cada uno con su propia etiqueta. `ProblemEntry` gana un campo
  `rating: Int? = null` (metadato, no filtro elegible).
- `CategorySelectorActivity` pasa de un botón "Problemas" a tres:
  Iniciación (`Nivel.NINOS`), Grandes Partidas (`Nivel.TORNEO`),
  Problemas de ajedrez (`Nivel.LICHESS`). `startProblemSession()` se
  generaliza para aceptar el `Nivel` como parámetro -- mismo
  mecanismo de cola barajada para los tres, sin selector de lista.
  Resuelve de paso el bug real de los 14 de Iniciación huérfanos.
- `activity_category_selector.xml`: tres botones nuevos encadenados
  entre Finales y Trampas; `strings.xml` con las tres etiquetas.
- `problemas.js`: se mantiene como único fichero (`PROBLEMAS_LINES`),
  las 267+33 entradas nuevas se añaden con prefijo de id
  `h04-problema-lichess-{PuzzleId}` para evitar colisión.
- Sin cambios en `game.js` ni en `OpeningSelectorActivity.kt` (las
  tres categorías de Problemas nunca pasan por ahí).

### Verificación (mismo rigor que el resto del hito)

Cada secuencia UCI→SAN ya verificada con `chess.js` real desde el
`startFen` correcto (hecho en S6, ver JSON intermedio arriba). Queda
pendiente redactar `idea`/`ventaja`/`debilidad` por jugada con
criterio ajedrecístico general (mismo patrón que Iniciación/Grandes
Partidas) y, cuando el `Themes` original cite un tema con nombre
propio o una partida de jugador identificable (`GameUrl` con partida
de titulado), no inventar atribución -- si no se puede verificar el
nombre real de los jugadores, queda como partida anónima con el link
de Lichess como referencia, sin inventar autoría.

## HOJA DE RUTA PARA LA SIGUIENTE SESIÓN

**Lote 1 de "Problemas de ajedrez" CERRADO en esta sesión (S6):** 15
entradas (`h04-problema-lichess-*`) con `idea`/`ventaja`/`debilidad`
por jugada, repartidas por tema táctico real (fork/pin/skewer/
discoveredAttack/deflection/hangingPiece/sacrifice/mateIn1-3/
attraction/kingsideAttack/exposedKing/quietMove/intermezzo).
Verificación en tres capas: (1) `chess.js` real desde el `startFen`
correcto al filtrar el CSV, (2) reconstrucción completa del bloque
generado antes de insertarlo en `problemas.js`, (3) recorrido de las
36 entradas totales del fichero (14 Iniciación + 7 Grandes Partidas +
15 Lichess nuevas) tras la inserción. IDs cruzados JS↔Kotlin: 36/36
coinciden exactamente. Build verde pendiente de confirmar tras el
commit de este lote (ver historial de Actions).

**Lote 2 de "Problemas de ajedrez" CERRADO en esta sesión (S6):** 15
entradas más (`h04-problema-lichess-*`), 30 en total tras los lotes 1
y 2. Mismo criterio de verificación en tres capas y mismo criterio de
etiquetado honesto: cuando la etiqueta primaria de Lichess (`Themes`)
no se correspondía con el motivo táctico realmente visible en la
secuencia de jugadas mostrada (p. ej. una etiqueta "fork" o "skewer"
de Lichess que en realidad correspondía a otra fase de la partida no
incluida en la solución corta), el campo `tema` se redactó para
describir con precisión lo que de verdad ocurre en las jugadas, en
vez de repetir la etiqueta de origen sin comprobar que encajaba -- ver
`fork`→"Clavada absoluta" (`e0rv2`) y `skewer`→"Peones sueltos con
jaques en cadena" (`ahJ7v`) como ejemplos concretos de esta
corrección. 51/51 entradas totales de `problemas.js` verificadas de
nuevo tras la inserción, ids cruzados JS↔Kotlin coinciden
exactamente.

**Corrección de criterio (S6, lote 13):** los lotes 1-12 solo
seleccionaban candidatas con un tema táctico real no genérico
(fork/pin/skewer/etc.), descartando de facto las que solo tenían
etiquetas de contexto de Lichess (`advantage`, `crushing`, `short`...)
sin darles ninguna etiqueta descriptiva propia. Esto dejaba 87
candidatas sin usar, no 5 como se creía. Corregido: a partir del lote
13 se usan también esas candidatas, con un `tema` redactado a partir
del contenido real de la secuencia (igual criterio que las
correcciones de etiquetado ya aplicadas en lotes anteriores), no de
la etiqueta de Lichess ausente.

1. Continuar con los lotes siguientes de "Problemas de ajedrez": 27
   entradas restantes de las 267 del pool corto (1/3/5 semijugadas) --
   suficiente para dos últimos lotes cortos, a partir del JSON
   intermedio ya verificado (`/home/claude/verify/verified_puzzles.json`
   -- no forma parte del repositorio, hay que regenerarlo o pedir el
   CSV de nuevo si se pierde entre sesiones).
2. Añadir las 33 posiciones de solución larga (7/9/11 semijugadas)
   como ampliación de "Grandes Partidas" (`Nivel.TORNEO`), mismo
   criterio de verificación y de "no inventar autoría" (partidas
   anónimas de Lichess, sin nombre de jugador, con `GameUrl` como
   referencia).
3. Prueba en dispositivo real de todo el hito (finales, Iniciación,
   Grandes Partidas ampliadas, Problemas de ajedrez) -- Miguel Ángel
   pedirá la instalación cuando quiera probarlo.
4. Con todo cerrado, valorar con Miguel Ángel si el Hito 04 queda
   completo de nuevo (PCH de vuelta hacia H06, que queda pausado con
   su hoja de ruta intacta) o si se amplía más el alcance.
