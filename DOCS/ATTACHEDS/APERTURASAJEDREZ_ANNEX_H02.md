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
- Las 15 líneas totales verificadas jugada a jugada con chess.js
  antes de escribirlas.
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

## RITMO DE TRABAJO (S1)

Miguel Ángel corrigió el ritmo inicial: no hay que parar a instalar y
probar cada bloque pequeño en el móvil. Se van encadenando commits y
builds en verde de forma continua, clasificando las líneas por
familias de apertura, y solo se avisa para probar en dispositivo real
cuando Miguel Ángel lo pida explícitamente — no después de cada lote.

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
