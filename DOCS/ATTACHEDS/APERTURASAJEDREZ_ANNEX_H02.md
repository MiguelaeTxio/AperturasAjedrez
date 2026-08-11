# Anexo — Hito 02: Repertorio completo de blancas y escandinava completa

## COMPLETADAS

Ninguna todavía — hito recién abierto en S1 (ver cierre de Hito 01 en
`APERTURASAJEDREZ_ANNEX_H01.md`).

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

1. Cerrar con Miguel Ángel qué variantes concretas de blancas entran
   en el repertorio además de la línea principal ya jugable (p. ej.
   Gambito de Dama Aceptado, Defensa Eslava, Defensa Ortodoxa con
   ...Nbd7) — cuántas y cuáles, para no redactar de más ni de menos.
2. Redactar esas líneas en `repertoire.js` (con `explain` por jugada)
   y sus entradas correspondientes en `RepertoireCatalog.kt`.
3. Redactar la escandinava completa de negras contra 1.e4 (líneas
   principales: 2...Qxd5 y 2...Nf6) con el mismo formato.
4. Build en verde y verificación en dispositivo real.
