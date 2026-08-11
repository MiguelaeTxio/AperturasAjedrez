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
2. **Problemas de ajedrez**: mecánica distinta a la de líneas/finales
   — posición suelta + solución corta (encontrar la jugada o 2-3
   jugadas que ganan material o dan mate), sin la parte de "el motor
   responde y sigues jugando la partida entera". Clasificados por
   tema (clavada, horquilla, mate en 2, desviación...).

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

### Finales — alcance
6 finales, contenido propio (no posiciones históricas citadas por
nombre con pretensión de exactitud de casillas, para no arriesgar una
atribución incorrecta), cubriendo las categorías fundamentales de
técnica de conversión/defensa que todo jugador de club necesita, en
progresión de dificultad y alternando el bando que entrena Miguel
Ángel (para practicar tanto conversión como defensa):

1. Peón pasado alejado -- regla del cuadrado (blancas). **CERRADO S4.**
2. Rey y peón vs rey -- oposición y escolta del rey al peón (blancas).
   **CERRADO S4.**
3. Torre y peón vs torre -- técnica de "construir el puente" (blancas)
   -- pendiente.
4. Torre y peón vs torre -- defensa por la tercera fila (negras) --
   pendiente.
5. Final de alfiles de distinto color -- defender con inferioridad
   material (negras) -- pendiente.
6. Final de caballos -- triangulación y zugzwang (blancas) --
   pendiente.

Formato de explicación por jugada: **idéntico** al de las líneas
(`idea`/`ventaja`/`debilidad` por jugada) -- se reutiliza tal cual, sin
formato adaptado especial para finales.

### Problemas — alcance (diseño cerrado, contenido pendiente)
10 problemas de posición suelta + solución corta (1-3 jugadas),
clasificados por tema: horquilla, clavada, ataque a la descubierta,
desviación, atracción, doble ataque de torre, mate en 1, mate en 2,
sobrecarga, promoción forzada. Verificación: secuencia completa de la
solución (todas las jugadas, propias y de respuesta forzada) validada
con `chess.js` real vía `verify.js`, no solo la primera jugada. Tras
fallar: se reutiliza el mismo diálogo bloqueante de 3 fallos ("torpe
como una oruga") ya existente -- decisión tomada para no introducir un
mecanismo nuevo de UI cuando el ya existente cubre la necesidad sin
cambios.

### Integración en el menú (CERRADO S4, implementado)
"Entrenar" pasa a abrir una pantalla intermedia de categoría
(`CategorySelectorActivity`) con tres opciones: Líneas / Finales /
Problemas. Líneas y Finales reutilizan `OpeningSelectorActivity` con
un catálogo distinto según la categoría elegida (`RepertoireCatalog`
vs `FinalesCatalog`, nuevo); Problemas queda como opción deshabilitada
("Próximamente") hasta que se implemente su modo propio de
verificación multi-jugada.

### Arquitectura de motor (CERRADO S4, implementado)
`game.js` (compartido, sin duplicar) ahora admite un campo opcional
`startFen` por línea: si está presente, `new window.Chess(startFen)` y
`board.position(startFen)` en vez de la posición inicial estándar. Las
líneas de apertura no llevan `startFen` (usan la posición inicial por
defecto, sin cambios). Los finales viven en `finales.js`
(`FINALES_LINES`), array nuevo con la misma estructura de objeto que
`REPERTOIRE_LINES`; `findLine()` en `game.js` busca en la concatenación
de ambos arrays por `id`, sin necesidad de parámetro de categoría en
la URL del WebView (los ids de finales llevan el prefijo `h04-final-`
para evitar colisión).

## HOJA DE RUTA PARA LA SIGUIENTE SESIÓN

1. Redactar los 4 finales restantes (torres x2, alfiles, caballos),
   con el mismo rigor de verificación: toda secuencia SAN pasa por
   `node verify.js "..."` con chess.js real antes de escribirse en
   `finales.js`. Commit tras cerrar cada lote, sin acumular trabajo
   sin commitear.
2. Redactar los 10 problemas de `PROBLEMS.md`/estructura de datos
   nueva (a definir el nombre de fichero al llegar a este bloque) y
   construir el modo de verificación multi-jugada en `BoardActivity`/
   `game.js` (o una `Activity` nueva si el modo de líneas/finales no
   encaja sin forzarlo).
3. Habilitar la opción "Problemas" en `CategorySelectorActivity` una
   vez tenga contenido y motor propio.
