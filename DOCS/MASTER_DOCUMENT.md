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
- Repertorio embebido como datos de la app (líneas de apertura en
  notación algebraica/FEN), sin backend propio.
- Persistencia local pendiente de definir (progreso de aciertos/fallos
  por línea, si se quiere llevar seguimiento).

## 3. Hoja de Ruta Estratégica

### Hito 01 — Fundamentos y repertorio base (EN PROGRESO)
(Ver anexo `DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H01.md`)

### Hito 02 — Repertorio completo de blancas y escandinava completa (PENDIENTE)
Todas las variantes del Gambito de Dama con blancas (Aceptado,
Rehusado, Eslava...) y todas las variantes de la escandinava con
negras contra 1.e4.

### Hito 03 — Defensas de negras contra el resto de aperturas de blancas (PENDIENTE)
Cobertura de las defensas más habituales contra cualquier primera
jugada de blancas que no sea 1.e4, empezando por las más jugadas en
la práctica. Alcance y orden a definir con Miguel Ángel al llegar
a este hito.

## 4. Directrices Técnicas Vinculantes

- §4.1 — Antes de codificar sobre un archivo existente, releerlo
  directamente del clon local en el turno actual (nunca inferir su
  contenido de memoria de turnos anteriores).
- §4.2 — Pendiente de definir (NavGraph / estructura de navegación)
  en cuanto haya más de una pantalla.
- §4.7 — Ningún archivo de código lleva como primera línea un
  comentario con su propia ruta.
