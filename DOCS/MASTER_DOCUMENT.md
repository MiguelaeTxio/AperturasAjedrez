# Documento Maestro: Proyecto AperturasAjedrez

---
## 1. Visión General del Proyecto

App Android de entrenamiento personal de aperturas de ajedrez.
Miguel Ángel practica contra el motor un repertorio fijo y reducido
de aperturas propias, en vez de un estudio genérico de teoría:

- **Con blancas:** siempre Gambito de Dama (1.d4 d5 2.c4) — única
  línea a entrenar con blancas por ahora, para simplificar.
- **Con negras:** repertorio pendiente de cerrar — ver incidencia
  abierta en el anexo del Hito 01 (aclarar si la respuesta a la
  apertura española se entrena aparte de la defensa escandinava,
  dado que ambas no pueden ser la misma línea contra 1.e4/1.e4 e5).

El resto del repertorio (aperturas adicionales, variantes a cubrir,
profundidad de las líneas) queda pendiente de definir con Miguel
Ángel.

## 2. Arquitectura Técnica

- Android nativo, Kotlin, Gradle Kotlin DSL.
- Sin backend propio — la app es autocontenida (motor de reglas +
  repertorio embebido). Pendiente de decidir si se usa un motor de
  ajedrez de terceros embebido (p. ej. Stockfish vía JNI) o un
  validador de reglas propio más simple, en función de la
  profundidad de entrenamiento que se busque.
- Persistencia local pendiente de definir (progreso de aciertos/fallos
  por línea, si se quiere llevar seguimiento).

## 3. Hoja de Ruta Estratégica

### Hito 01 — Fundamentos y repertorio base (EN PROGRESO)
(Ver anexo `DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H01.md`)

## 4. Directrices Técnicas Vinculantes

- §4.1 — Antes de codificar sobre un archivo existente, releerlo
  directamente del clon local en el turno actual (nunca inferir su
  contenido de memoria de turnos anteriores).
- §4.2 — Pendiente de definir (NavGraph / estructura de navegación)
  en cuanto haya más de una pantalla.
- §4.7 — Ningún archivo de código lleva como primera línea un
  comentario con su propia ruta.
