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
- Segundo lote (S1, sin pausa a verificar en dispositivo — ver nota
  de ritmo de trabajo más abajo): Contragambito Albin, Defensa
  Chigorin y Semi-Eslava (Variante Meran) completan las respuestas
  principales de negras contra 2.c4 dentro de la familia Gambito de
  Dama; Escandinava Moderna (2...Nf6) añade la segunda rama principal
  de la familia escandinava.
- Tercer lote: Defensa Ortodoxa clásica (...Nbd7, plan Bg5-Nf3),
  Defensa Báltica (2...Bf5) y Defensa Simétrica (2...c5) completan la
  familia Gambito de Dama; Escandinava con retirada moderna 3...Qd6
  añade la tercera línea de la familia escandinava.
- Cuarto lote: Defensa Tarrasch (peón de dama aislado, sistema
  Fianchetto) y Defensa Marshall (2...Nf6 inmediato) cierran los
  huecos que quedaban en la familia Gambito de Dama. Con esto, la
  familia cubre las respuestas de negras contra 2.c4 más relevantes a
  nivel de club y de teoría (Rehusado + Cambio, Aceptado, Eslava +
  Semi-Eslava/Meran, Ortodoxa clásica, Chigorin, Albin, Báltica,
  Simétrica, Tarrasch, Marshall).
- Quinto lote: Semi-Tarrasch (híbrido Ortodoxa/Tarrasch, recaptura
  con caballo en vez de peón aislado) completa la familia Gambito de
  Dama; retirada ultra-sólida 3...Qd8 añade la cuarta rama de la
  familia escandinava (junto a Qa5, Qd6, Nf6 -- cubre ya las
  retiradas de dama más jugadas en la práctica más la vía de
  desarrollo directo).
- Las 17 líneas totales verificadas jugada a jugada con chess.js
  antes de escribirlas.
- Selector nativo (`RepertoireCatalog.kt`) actualizado con las 16
  entradas nuevas, mismos ids que `repertoire.js`.

### CIERRE DEL HITO (S1)

Hito 02 dado por completado en S1: ambas familias del alcance
(Gambito de Dama y Escandinava) cubren ya las respuestas más
relevantes a nivel de teoría y de club — Miguel Ángel confirmó
explícitamente el cierre ("lo hacemos en orden, cerramos, acometemos
H03 y luego H04") sin pedir más profundidad en este hito por ahora.
Motor de entrenamiento generalizado a ambos bandos, con las 17 líneas
totales verificadas y build en verde de principio a fin en cada
lote. El hito EN PROGRESO pasa a Hito 03 — ver `MASTER_DOCUMENT.md`
§3 y `APERTURASAJEDREZ_ANNEX_H03.md`. Hito 04 (finales de partida +
problemas de ajedrez) queda acordado y en cola, después de H03.

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

## RITMO DE TRABAJO (S1)

Miguel Ángel corrigió el ritmo inicial: no hay que parar a instalar y
probar cada bloque pequeño en el móvil. Se van encadenando commits y
builds en verde de forma continua, clasificando las líneas por
familias de apertura, y solo se avisa para probar en dispositivo real
cuando Miguel Ángel lo pida explícitamente — no después de cada lote.

## HOJA DE RUTA PARA LA SIGUIENTE SESIÓN

Hito cerrado (ver "CIERRE DEL HITO" arriba). Si en el futuro se
retoma para añadir más profundidad (sub-variantes dentro de líneas ya
existentes, u otras aperturas que no sean 1.d4/Gambito de Dama ni
1.e4/Escandinava), habrá que concertar antes con Miguel Ángel el
alcance concreto — no reanudar sin más "metiendo líneas" de motu
proprio.
