# Anexo — Hito 02: Repertorio completo de blancas y escandinava completa

## COMPLETADAS

- Motor de entrenamiento generalizado para soportar ambos bandos
  (`userColor` por línea en `repertoire.js`, orientación del tablero
  y turno inicial resueltos en consecuencia en `game.js`) -- hasta
  H01 solo sabia entrenar con blancas.
- 3 líneas nuevas de blancas añadidas (con explicación por jugada):
  Gambito de Dama Aceptado (Sistema Alekhine), Defensa Eslava (línea
  principal), Gambito de Dama Rehusado -- Variante de Cambio.
- Primera línea de la escandinava de negras contra 1.e4 añadida
  (2...Qxd5 3.Nc3 Qa5, línea principal).
- Las 5 líneas totales (1 de H01 + 4 nuevas) verificadas jugada a
  jugada con chess.js antes de escribirlas.
- Selector nativo (`RepertoireCatalog.kt`) actualizado con las 4
  entradas nuevas, mismos ids que `repertoire.js`.

## ALCANCE

Definido en `MASTER_DOCUMENT.md` §1 y §3: variantes adicionales del
repertorio de blancas a partir del Gambito de Dama (1.d4 d5 2.c4) ya
cerrado, y la escandinava completa como respuesta de negras a 1.e4.
Reutiliza sin cambios de arquitectura lo cerrado en H01: selector
nativo (`RepertoireCatalog.kt`), formato de línea con explicación por
jugada (`repertoire.js`), mecánica de entrenamiento (3 intentos,
resalte de casillas, registro de aciertos/fallos por línea).

Redacción de líneas y explicaciones a cargo de Claude, con criterio
ajedrecístico general (acuerdo cerrado en H01, no se repite la
pregunta por cada línea nueva).

## HOJA DE RUTA PARA LA SIGUIENTE SESIÓN

1. ~~Cerrar con Miguel Ángel qué variantes concretas...~~ -- resuelto:
   "hay que meterlas todas, vamos ya a empezar e ir metiendo" (S1).
   Seguir añadiendo variantes de blancas (p. ej. Defensa Ortodoxa
   clásica con ...Nbd7, Defensa Semi-Eslava, Contragambito Albin) y
   más líneas de la escandinava (2...Nf6, 3...Qxd5) de forma
   incremental, sesión a sesión.
2. Build en verde y verificación en dispositivo real de las 4 líneas
   nuevas (selector con 5 entradas, escandinava entrenable con
   negras -- primera vez que se prueba ese lado del motor).
3. Seguir iterando: cada bloque nuevo de líneas se redacta, se
   verifica con chess.js, se compila y se prueba en dispositivo antes
   de pasar al siguiente.
