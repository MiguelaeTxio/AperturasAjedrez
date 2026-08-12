# Anexo — Hito 06: Estructuras de peones y planes de medio juego

## APERTURA DEL HITO (PCH, sesión S5 de H05, continuidad de sesión)

Abierto mediante PCH explícito de Miguel Ángel, dentro de la misma
sesión de chat que S5 de H05. Motivado por conversación pedagógica
sobre qué le falta al proyecto a nivel de ajedrez: el repertorio y
las trampas cubren muy bien "qué jugar" en cada jugada concreta, pero
nada explica el plan de medio juego que viene después de la apertura.
Diseño cerrado con Miguel Ángel antes de escribir código, sin
implementación todavía en este hito.

## OBJETIVO

Enseñar el **plan de medio juego** asociado a las estructuras de
peones que aparecen de verdad en el repertorio ya existente (no
estructuras genéricas de cualquier apertura) -- qué hacer en las
15-20 jugadas que siguen a la apertura memorizada, no solo las
primeras 8-10 jugadas que ya cubre `repertoire.js`.

## DISEÑO CERRADO CON MIGUEL ÁNGEL (3 puntos, sesión de diseño previa)

1. **Acceso**: quinta categoría independiente en el menú
   ("Estructuras"), con su propio selector -- **no** colgada de cada
   línea de origen. Mismo patrón que Líneas/Finales/Problemas/
   Trampas.
2. **Interactividad**: ambas opciones a la vez, no una u otra:
   - Texto explicativo del plan + diagrama estático de la posición
     típica.
   - Demostración jugable de la ejecución del plan, jugada a jugada.
3. **Alcance de contenido**: empezar por las estructuras ya
   localizadas en el repertorio actual (ver más abajo), y en una
   sesión posterior revisar `h03-*` (Londres, Inglesa, Réti,
   Trompowsky, Larsen, Bird) por si hay más antes de darlo por
   cerrado.

## ARQUITECTURA DE MOTOR (decisión técnica cerrada, sin diseño nuevo)

Igual que en H04/H05: **no hace falta ningún modo de motor nuevo**.
Las dos opciones de interactividad ya están cubiertas por
infraestructura existente, verificada en el código actual:

- El campo `overview` de cualquier línea ya se renderiza como texto
  explicativo en la UI (`game.js:321`, `elOverview.textContent =
  line.overview`) -- cubre la parte de "texto explicativo".
- El campo `startFen` ya permite arrancar una línea en mitad de una
  partida en vez de en la posición inicial (usado en `finales.js`
  desde H04) -- el tablero se renderiza directamente en esa posición
  al abrir la línea, cubriendo la parte de "diagrama estático" sin
  ningún componente nuevo.
- El propio motor de línea fija (mover, comparar contra la jugada
  esperada, resaltar casillas, diálogo de 3 fallos) ya reproduce
  cualquier secuencia de jugadas modelo -- cubre la parte de
  "demostración jugable": Miguel Ángel practica ejecutar el plan
  (por ejemplo, todo el ataque de minoría b4-b5-bxc6, o la maniobra
  típica del bando fuerte contra el IQP) de la misma forma que ya
  practica una línea de apertura o una trampa.

Conclusión: **una estructura es exactamente una línea más**, mismo
objeto que `REPERTOIRE_LINES`/`FINALES_LINES`/`PROBLEMAS_LINES`/
`TRAMPAS_LINES` (`startFen`, `userColor`, `overview`, `moves` con
`idea`/`ventaja`/`debilidad` por jugada -- aquí el campo `idea` de
cada jugada lleva el peso pedagógico del plan, jugada a jugada).
Campo nuevo respecto al resto de catálogos: `familia` (ver más
abajo), solo para clasificar/mostrar en el selector nativo -- no
afecta al motor JS. Mismo patrón que `tipo` en `TrampasCatalog.kt`.

Ficheros a crear/tocar (mismo patrón que H05, sin sorpresas):

- `app/src/main/assets/www/js/estructuras.js` (nuevo):
  `ESTRUCTURAS_LINES`, ids con prefijo `h06-estructura-`.
- `app/src/main/assets/www/index.html`: cargar `estructuras.js`
  antes de `game.js`.
- `app/src/main/assets/www/js/game.js`: añadir `ESTRUCTURAS_LINES` a
  la concatenación de `allLines()`.
- `app/src/main/java/.../data/EstructurasCatalog.kt` (nuevo): enum
  `Familia`, `EstructuraEntry`, entradas con ids idénticos a
  `estructuras.js` (verificación cruzada JS/Kotlin igual que en H05).
- `OpeningSelectorActivity.kt`: rama `CATEGORY_ESTRUCTURAS`.
- `CategorySelectorActivity.kt`: quinto botón,
  `categoryEstructurasButton`.
- `activity_category_selector.xml`: quinto botón, constraints
  reencadenadas (Trampas -> Estructuras -> bottom de parent).
- `strings.xml`: string `category_estructuras`.

## ESTRUCTURAS IDENTIFICADAS EN EL REPERTORIO REAL (punto de partida)

Localizadas en `repertoire.js` (25 líneas revisadas). Cada una
aparece en 1-3 líneas del repertorio ya existente -- no son
estructuras genéricas, todas anclan a líneas reales que Miguel Ángel
ya entrena:

1. **Peón de dama aislado (IQP)** -- aparece en
   `h02-gambito-dama-aceptado`, `h02-defensa-tarrasch` y
   `h02-semi-tarrasch`. Plan del bando fuerte (piezas activas,
   presión sobre la columna/diagonal que mira al peón aislado,
   ocupar el bloqueo en la casilla delante del peón) y del bando
   débil (cambiar piezas para llegar a un final favorable, buscar el
   avance d4-d5 en el momento oportuno).
2. **Estructura Carlsbad / ataque de minoría** -- `h02-qgd-cambio`.
   El plan clásico b4-b5 contra la cadena de peones negra en el
   flanco de dama, buscando crear una debilidad permanente (peón
   atrasado o aislado) tras el cambio bxc6/dxc6.
3. **Estructura Meran** -- `h02-semi-eslava-meran`. Cadena de peones
   central, ruptura típica ...c5 (o e4 para blancas según el bando),
   lucha por la casilla e5/e4.
4. **Estructura Catalana** -- `h03-catalana`. Fianchetto del alfil de
   rey, presión a largo plazo sobre la diagonal larga y el flanco de
   dama, plan de recuperar el peón de c4 sin apresurarse.

Pendiente de ampliar (punto 3 del diseño): revisar `h03-londres-*`,
`h03-inglesa-*`, `h03-reti-fianchetto-doble`, `h03-trompowsky`,
`h03-larsen`, `h03-bird` en una sesión posterior por si hay
estructuras adicionales igual de recurrentes antes de cerrar el
alcance definitivo.

## VERIFICACIÓN (mismo rigor que H04/H05, sin excepción)

Cada `moves[]` de demostración se verifica con `chess.js` real
(`node` + `window.Chess`), reproduciendo la secuencia completa desde
el `startFen` correspondiente, igual que las trampas de H05 y los
finales de H04. El contenido pedagógico (`overview`, `idea` por
jugada) se redacta con criterio ajedrecístico general, sin necesidad
de fuente externa para el plan en sí (a diferencia de las trampas,
que exigían fuente/nombre documentado) -- pero si se cita una
partida modelo concreta o un plan atribuido a un autor/escuela
determinada, esa atribución sí debe verificarse antes de escribirse,
mismo criterio de "no inventar" que rige todo el proyecto.

## HOJA DE RUTA PARA LA SIGUIENTE SESIÓN

1. Elegir el `startFen` de cada una de las 4 estructuras (la posición
   típica en la que se reconoce la estructura, no necesariamente el
   final exacto de la línea de repertorio de la que procede) y
   redactar el `overview` de cada una (explicación del plan a nivel
   general, antes de la secuencia jugada a jugada).
2. Construir la secuencia de demostración (`moves[]`) de cada
   estructura -- una línea modelo corta (8-12 jugadas) que ejecute el
   plan típico, con `idea`/`ventaja`/`debilidad` por jugada igual que
   el resto de catálogos.
3. Verificar las 4 secuencias con `chess.js` real desde el
   `startFen` correspondiente.
4. Construir la arquitectura completa (fichero de datos, quinta
   categoría del menú, `EstructurasCatalog.kt`, rama en
   `OpeningSelectorActivity`) -- reutilizando el motor tal cual, sin
   diseño nuevo, mismo patrón exacto que H05.
5. Commit por lotes verificados, build verde en GitHub Actions tras
   cada lote, sin acumular trabajo sin commitear -- mismo criterio ya
   establecido en H01-H05.
6. Si el tiempo de sesión lo permite: revisar `h03-*` (punto 3 del
   diseño) por estructuras adicionales antes de dar el hito por
   completado.
