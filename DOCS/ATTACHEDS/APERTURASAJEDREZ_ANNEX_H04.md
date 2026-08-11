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
- **Alcance exacto pendiente de definir con Miguel Ángel** (qué
  finales, cuántos problemas, cómo se integran en el menú) — ver
  `MASTER_DOCUMENT.md` §3, tal cual quedó acordado en el cierre de
  H02. No se ha concertado ningún detalle adicional en la sesión de
  apertura de este hito (S3): el PCH se limitó a mover el marcador de
  `EN PROGRESO`, sin sesión de diseño todavía.

## HOJA DE RUTA PARA LA SIGUIENTE SESIÓN

1. **Sesión de diseño (obligatoria antes de escribir código)**, según
   el patrón ya establecido en el proyecto ("diseño primero, código
   después"): cerrar con Miguel Ángel, para ambos bloques:
   - Finales: cuántos, cuáles (fase de peones, torres, finales de
     piezas menores...), con qué bando entrena Miguel Ángel en cada
     uno, profundidad de la explicación por jugada (mismo formato
     idea/ventaja/debilidad que en las líneas, o uno adaptado a
     finales).
   - Problemas: cuántos, clasificación por tema, cómo se verifica que
     la solución es correcta (chess.js validando la secuencia
     completa de la solución, no solo la primera jugada), qué pasa
     tras fallar (mismo diálogo bloqueante de 3 fallos que en líneas,
     o mecánica propia de problemas).
   - Integración en el menú: si "Entrenar" pasa a tener 3 opciones
     (Líneas / Finales / Problemas) o si se abre una entrada nueva en
     `MenuActivity`.
2. Una vez cerrado el diseño, redactar el primer lote de contenido
   (finales o problemas, el que Miguel Ángel priorice primero) con el
   mismo rigor de verificación ya establecido en H01-H03: toda
   secuencia SAN pasa por `node verify.js "..."` con chess.js real
   antes de escribirse en el repertorio.
3. Commit + build en verde tras cada lote cerrado, sin acumular
   trabajo sin commitear — mismo criterio que H03.
