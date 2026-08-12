# Anexo — Hito 05: Trampas en las aperturas

## COMPLETADAS EN S4

Hito abierto vía PCH al cierre de H04, dentro de la misma sesión S4.
Trabajo realizado en esta sesión, íntegramente de investigación y
diseño (sin código ni contenido verificado todavía):

- Revisión del repertorio real (`repertoire.js`) para anclar la
  búsqueda de trampas a las líneas que Miguel Ángel juega de verdad,
  en vez de trampas genéricas de cualquier apertura.
- Investigación en fuentes reales (Wikipedia, Chess.com,
  TheChessWorld, Chess-Teacher, Chessable, ChessDoctrine, House of
  Staunton) de 7 trampas documentadas, ligadas al Gambito de Dama
  (bloque blancas) y a la Escandinava (bloque negras) -- ver detalle
  en "INVESTIGACIÓN REALIZADA" más abajo. Ninguna inventada.
- Decisión de diseño cerrada: clasificación en dos categorías
  (ofensivas/defensivas) y arquitectura de motor (una trampa es
  exactamente una línea más, sin modo nuevo, solo un campo `tipo`
  para el selector) -- ver "ARQUITECTURA DE MOTOR" más abajo.
- Sin verificación con `chess.js` todavía: las 7 trampas están
  identificadas y citadas por fuente, pero ninguna se ha reproducido
  aún desde el primer movimiento con el motor real -- ese es el
  primer paso de la hoja de ruta de la siguiente sesión.

## OBJETIVO

Añadir una sección de **trampas de apertura** ligada directamente al
repertorio ya existente (Gambito de Dama con blancas, Escandinava y
demás defensas con negras) -- no trampas genéricas de cualquier
apertura, sino trampas que aparecen de verdad dentro de las líneas
que Miguel Ángel ya juega o puede encontrarse jugándolas.

Dos categorías, porque una trampa de apertura tiene dos caras útiles
de entrenar:

- **Ofensivas**: trampas que Miguel Ángel puede tender él mismo --
  si el rival responde con la jugada tentadora pero incorrecta, cae
  en una línea perdedora. Se entrena jugando el lado que tiende la
  trampa, con el motor jugando la respuesta que "pica".
- **Defensivas**: trampas que un rival puede tenderle a él -- el
  objetivo es reconocer la jugada tentadora que en realidad pierde
  material o la partida, y saber qué jugar en su lugar. Se entrena
  jugando el lado que debe evitar la trampa: el motor tienta con la
  jugada peligrosa disponible, y la línea muestra por qué NO hay que
  jugarla, seguida de la continuación correcta.

## INVESTIGACIÓN REALIZADA (S4, sesión de preparación)

Búsqueda en fuentes reales (Wikipedia, chess.com, TheChessWorld,
Chess-Teacher, Chessable, ChessDoctrine, House of Staunton) de
trampas documentadas en las aperturas ya presentes en
`repertoire.js`. Ninguna trampa de este anexo está inventada --
todas tienen nombre propio o fuente identificable, a verificar con
`chess.js` real (reproduciendo la línea completa desde el primer
movimiento, mismo rigor que los problemas reales de H04) antes de
escribirse en el fichero de datos.

### Bloque blancas -- Gambito de Dama y su árbol

1. **Trampa del Elefante (Elephant Trap)** -- DEFENSIVA. Rehusado,
   línea 4...Nbd7: si blancas capturan ingenuamente en d5 pensando
   que ganan un peón (la aparente clavada Ag5 sobre el caballo f6
   parece impedir la recaptura), negras juegan ...Nxd5! ignorando la
   clavada y ganan una pieza. Fuente: Wikipedia
   ("Queen's Gambit Declined, Elephant Trap"), TheChessWorld.
2. **Trampa Rubinstein** -- OFENSIVA. Rehusado, Defensa Ortodoxa:
   blancas ganan un peón con Nxd5 porque la dama negra queda
   atrapada en el borde por el alfil en c7 tras la recaptura. Fuente:
   Wikipedia ("Queen's Gambit Declined, Rubinstein Trap").
3. **Trampa de la Cambridge Springs** -- DEFENSIVA. Tras 7.Nd2 Bb4
   8.Qc2 O-O, la jugada tentadora 9.Bd3?? pierde una pieza a un
   zwischenzug (9...dxc4! amenazando ...Qxg5, y si 10.Bxf6 cxd3!
   intermedia antes de recapturar). Fuente: Wikipedia
   ("Queen's Gambit Declined, Cambridge Springs Defense").
4. **Trampa Lasker en el Contragambito Albin** -- DEFENSIVA, la más
   importante de este bloque por lo fácil que es caer en ella sin
   saberlo: tras 1.d4 d5 2.c4 e5 3.dxe5 d4, la jugada natural 4.e3??
   pierde la dama. Regla a memorizar: nunca jugar e3 en esa posición
   concreta. Fuente: House of Staunton, múltiples manuales de
   apertura.
5. **Trampa del alfil en la Eslava (Bf4 + e4)** -- OFENSIVA. Tras
   1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.cxd5 cxd5 5.Nc3 Nc6 6.Bf4, si negras
   juega descuidadamente ...e6, blancas golpea con 7.e4! ganando
   material tras 7...dxe4 8.Nxe4 (el caballo f6 queda clavado y la
   posición negra se derrumba). Fuente: guía de la Defensa Eslava
   (precisesports.com), contrastada con la teoría estándar de la
   variante de cambio.

### Bloque negras -- Escandinava

6. **Gambito Leonhardt (4.b4!?)** -- DEFENSIVA para quien juega la
   Escandinava clásica (2...Qxd5 3.Nc3 Qa5): blancas puede ofrecer
   un peón con 4.b4!?, y si negras sigue el plan natural (...Qxb4,
   Nb5, ...Qa5, Bc4, ...c6??) cae en un sacrificio de alfil en f7 con
   ataque decisivo. Hay que conocer la secuencia para saber qué
   evitar (...c6 en el momento equivocado) y qué jugar en su lugar.
   Fuente: Chess-Teacher (dos artículos independientes, coincidentes
   en la línea).
7. **Bxf7+ tras 6...c6 o 6...a6 (Escandinava Moderna)** -- DEFENSIVA,
   crítica para la línea 2...Nf6 ya presente en el repertorio: dos
   jugadas que parecen naturales (consolidar con ...c6 o echar al
   caballo con ...a6) pierden ambas al mismo truco táctico
   (Bxf7+ seguido de Qh5+ con ataque ganador). Fuente: Chess-Teacher
   ("Crush the Scandinavian Defense in 8 Moves").
8. A revisar/ampliar en la sesión de contenido: variantes trampa
   señaladas por GM Igor Smirnov (Remote Chess Academy, vídeo "Top 10
   Scandinavian Defense Opening Traps for Black") ligadas
   concretamente a la Escandinava Moderna (2...Nf6) ya presente en el
   repertorio -- localizar las líneas exactas con fuente adicional
   antes de escribirlas, ya que el vídeo no da el FEN/PGN por
   escrito.

## ARQUITECTURA DE MOTOR (decisión cerrada, sin diseño nuevo)

Una trampa **es exactamente una línea más**: mismo objeto que
`REPERTOIRE_LINES`/`FINALES_LINES`/`PROBLEMAS_LINES` (`startFen`
opcional si la trampa arranca en mitad de una apertura ya conocida,
`userColor`, `moves` con `idea`/`ventaja`/`debilidad` por jugada). No
hace falta ningún modo de motor nuevo -- ni `freeMode` (aquí sí hay
una única jugada "correcta" que aprender en cada punto de la trampa,
a diferencia de los mates elementales de H04) ni ninguna otra
mecánica. Se reutiliza el motor de línea fija tal cual.

Campo nuevo respecto a líneas/finales/problemas: `tipo` (`'ofensiva'`
o `'defensiva'`), solo para mostrar/clasificar en el selector nativo
-- no afecta al motor JS.

Ficheros: `trampas.js` nuevo (`TRAMPAS_LINES`), ids con prefijo
`h05-trampa-`. `game.js` añade `TRAMPAS_LINES` a la concatenación de
`allLines()`. Cuarta categoría en `CategorySelectorActivity`
("Trampas"), con `TrampasCatalog.kt` nuevo y su propia rama en
`OpeningSelectorActivity` (`CATEGORY_TRAMPAS`).

## VERIFICACIÓN (obligatoria, sin excepción)

Mismo rigor que los problemas reales de H04: cada trampa se
reproduce **desde el primer movimiento de la apertura real** con
`node verify.js` (o exploración interactiva si hay alguna
bifurcación con más de una respuesta razonable del rival), no solo
se copia el FEN final de la fuente. Las jugadas "trampa" (el error
del rival) y su castigo se verifican igual que cualquier jugada de
línea. Si alguna trampa investigada no puede verificarse limpiamente
con `chess.js` real al construirla, se descarta o se ajusta antes de
escribirse -- no se fuerza contenido no verificado, mismo criterio
aplicado durante todo H04.

## HOJA DE RUTA PARA LA SIGUIENTE SESIÓN

1. Verificar con `chess.js` real las 7 trampas ya identificadas con
   fuente (bloque blancas 1-5, bloque negras 6-7), reproduciendo cada
   apertura completa desde el primer movimiento antes de escribirla
   en `trampas.js`.
2. Investigar y verificar 2-3 trampas adicionales de la Escandinava
   Moderna (punto 8 de la investigación) si el tiempo de sesión lo
   permite, o dejarlas para un lote posterior.
3. Construir la arquitectura (cuarta categoría, `TrampasCatalog.kt`,
   rama en `OpeningSelectorActivity`, `trampas.js` cargado en
   `index.html`) -- reutilizando el motor tal cual, sin diseño nuevo.
4. Commit por lotes verificados, build verde en GitHub Actions tras
   cada lote, sin acumular trabajo sin commitear -- mismo criterio ya
   establecido en H01-H04.
