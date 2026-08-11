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

### Problemas — alcance (CERRADO S4, implementado)
10 problemas de posición suelta + solución corta (1-5 jugadas),
clasificados por tema: horquilla, clavada, ataque a la descubierta,
desviación, atracción, doble ataque de torre, mate en 1, mate en 2,
sobrecarga, promoción forzada. Verificación: secuencia completa de la
solución (todas las jugadas, propias y de respuesta forzada) validada
con `chess.js` real vía `verify.js`, no solo la primera jugada —
además, en los problemas con pieza defensora rival capaz de crear
contrajuego real (desviación, atracción, sobrecarga, subpromoción), la
secuencia se exploró de forma interactiva con el script de exploración
en vez de simularse de memoria, igual que con los finales de torre y
dama. Tras fallar: se reutiliza el mismo diálogo bloqueante de 3
fallos ("torpe como una oruga") ya existente.

**Hallazgo de esta sesión: los problemas no necesitaron ningún motor
propio.** El diseño original (ver CONTEXTO TÉCNICO más arriba)
anticipaba que los problemas "rompen el patrón" de líneas/finales y
necesitarían una pantalla o `Activity` nueva. En la práctica, un
problema es exactamente una línea/final más: una posición inicial
(`startFen`) más una secuencia fija de jugadas (`moves`, con el mismo
formato `idea`/`ventaja`/`debilidad`) que el motor reproduce igual que
cualquier línea de apertura o final, terminando cuando el array de
jugadas se agota. La única diferencia real es un campo nuevo, `tema`,
usado solo para clasificar y mostrar en el selector nativo — no afecta
al motor JS en absoluto. Los 10 problemas viven en `problemas.js`
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

## HITO 04 CERRADO EN CONTENIDO (S4)

Los 6 finales y los 10 problemas quedan completos, verificados con
`chess.js` real y con build verde en GitHub Actions. Queda pendiente
solo la valoración con Miguel Ángel de si el hito se da por cerrado
(PCH hacia el siguiente hito) o se amplía el alcance.

## HOJA DE RUTA PARA LA SIGUIENTE SESIÓN

1. Prueba en dispositivo real de finales y problemas (Miguel Ángel
   pedirá la instalación cuando quiera probarlo; no instalar por
   iniciativa propia sin que lo pida — mismo criterio ya usado en
   H01-H03).
2. Con los 6 finales y los 10 problemas cerrados, valorar con Miguel
   Ángel si el Hito 04 queda completo o si se amplía el alcance
   (más finales, más problemas, u otro contenido) antes de cerrarlo
   con PCH hacia el Hito 05.
