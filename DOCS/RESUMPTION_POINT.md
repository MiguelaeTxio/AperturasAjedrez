# RESUMPTION_POINT — AperturasAjedrez

**Hito EN PROGRESO:** Hito 01 — Fundamentos y repertorio base
(`DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H01.md`) -- **reabierto por
PCH en S6**, tras dar por completado el Hito 04.

## Próximos pasos concretos

Ver "REAPERTURA VÍA PCH (S6)" y "HOJA DE RUTA PARA LA SIGUIENTE
SESIÓN" en el anexo del Hito 01 -- no se duplica aquí. Resumen de una
línea: Miguel Ángel señaló que la mecánica de entrenamiento de
aperturas es demasiado rígida (línea plana de principio a fin, sin
variantes, sin nombre de rama, sin colores) frente al objetivo real
del proyecto -- aprender una apertura completa con sus variantes, no
una única secuencia memorizada. **Sin ninguna decisión técnica
cerrada todavía** -- la próxima sesión empieza con una sesión de
diseño (modelo de datos del árbol de variantes, mecánica de juego
libre, criterio de color por rama, alcance de la migración) antes de
tocar ningún código, como es norma en este proyecto.

## Decisiones/incidencias pendientes de confirmar con Miguel Ángel que no son hoja de ruta técnica

Ninguna pendiente de H01. Hito 04 (Problemas de ajedrez) dado por
completado en S6 tras prueba real en dispositivo y corrección de
todas las incidencias encontradas -- ver cierre completo en
`ANNEX_H04.md`. Hito 05 (trampas) y Hito 06 (estructuras) siguen
PAUSADOS con sus hojas de ruta intactas, a la espera de reactivación
futura -- ninguno de los dos tiene relación con la reapertura de H01.

## Nota de contexto

Hito 01 y Hito 02 completados en S1 (17 líneas, Gambito de Dama +
Escandinava). En S2 se cerró el alcance de Hito 03 y se redactaron 8
de sus 9 líneas finales. En S3 se añadió la novena línea de H03
(Inglesa Simétrica pura, 1.c4 c5), cerrando el hito con 26 líneas
totales en el repertorio, y se abrió el Hito 04 vía PCH. En S4 se
cerró el Hito 04 por completo (finales, problemas, corrección de
técnica de mates, modo de práctica libre) y se abrió el Hito 05
(trampas de apertura) con investigación inicial ya realizada. En S5
se verificaron y construyeron 6 trampas reales de H05 (arquitectura
completa, build verde), se descartó una séptima mal atribuida, se
investigó sin resultado aprovechable una ampliación con trampas de la
Escandinava Moderna, y -- a partir de una conversación pedagógica
sobre qué le falta al proyecto -- se abrió el Hito 06 (estructuras de
peones y planes de medio juego) vía PCH, con diseño ya cerrado. En S6
(sesión larga) se reabrió H04 vía PCH desde H06 (pausado de nuevo, sin
tocar) para reconstruir por completo la sección de Problemas de
ajedrez tras investigar el patrón real de Chess.com/Lichess: se
corrigió un error de arquitectura (selector con filtros que
contradecía una decisión ya cerrada), se resolvió un bug real (14
problemas de Iniciación desconectados del menú), se construyeron y
verificaron 267 problemas nuevos más 33 posiciones de ampliación de
Grandes Partidas (321 entradas totales, todas verificadas con
`chess.js` real), y tras la prueba en dispositivo real se corrigieron
varias incidencias más (ambigüedad de "rating", bug del botón
reiniciar con pieza cogida, bug real de excepciones de `chess.js` en
jugadas ilegales, indicador de turno, modo toque-toque restaurado
como función real) y se añadió un sistema completo de
navegación/avance sin repetir/marcapáginas/favoritos. Con H04 dado
por completado, se reabrió H01 vía PCH para la reconstrucción del
motor de aperturas con árbol de variantes -- ver el detalle completo
en `DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H01.md`,
`DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H02.md`,
`DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H03.md`,
`DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H04.md`,
`DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H05.md` y
`DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H06.md`.
