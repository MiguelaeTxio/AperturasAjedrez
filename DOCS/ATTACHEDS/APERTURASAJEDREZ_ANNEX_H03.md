# Anexo — Hito 03: Defensas de negras contra el resto de aperturas de blancas

## COMPLETADAS

### COMPLETADAS EN S3

- **Decisión de cierre de H03 sin prueba en dispositivo**: por
  directriz explícita de Miguel Ángel (repetida en esta sesión), H03
  se cierra sin pasar por prueba en móvil de las 9 líneas del hito;
  las builds se commitean y verifican en verde vía GitHub Actions, la
  validación en dispositivo real queda fuera del criterio de cierre.
- **Criterio de profundidad y cobertura resuelto por Claude** (rol de
  experto ajedrecístico, según instrucción explícita de Miguel Ángel
  de que esa decisión corresponde al modelo): comparando la
  profundidad media de las 8 líneas de S2 (~15,6 semijugadas) contra
  la de H01/H02 (~12 semijugadas), se concluyó que no hace falta
  ampliar profundidad en ninguna familia ya cubierta. Se detectó un
  hueco real de **cobertura** (no de profundidad) en el bloque
  Inglesa: faltaba la Inglesa Simétrica pura (1.c4 c5), la respuesta
  más jugada en la práctica contra 1.c4 a todos los niveles, no
  cubierta por las líneas ya existentes de Siciliana Inversa (...e5)
  ni por el Catalán.
- **Novena línea añadida**: `h03-inglesa-simetrica` — Inglesa,
  respuesta simétrica pura con doble fianchetto (1.c4 c5 Nf3 Nf6 g3
  g6 Bg2 Bg7 Nc3 Nc6 O-O O-O d4 cxd4 Nxd4 Nxd4 Qxd4 d6, 18
  semijugadas), con `explain` idea/ventaja/debilidad por jugada,
  mismo formato que el resto de H03. Añadida a `repertoire.js` y a su
  entrada correspondiente en `RepertoireCatalog.kt`.
- **Verificación**: secuencia SAN verificada con chess.js (`node
  verify.js`), tanto de forma aislada como extraída directamente del
  archivo tras la edición. Sincronía de ids comprobada entre
  `repertoire.js` y `RepertoireCatalog.kt`: 26 líneas totales, sin
  duplicados, coincidencia 1:1.
- **Build en verde** en GitHub Actions tras el commit y push de la
  novena línea, confirmado vía API REST con el token de sesión.
- **H03 dado por completado** con Miguel Ángel (PCH) tras esta
  decisión — repertorio total tras H03: **26 líneas** (17 de
  H01/H02 + 9 de H03). Se abre el Hito 04 (ver
  `DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H04.md`).

### COMPLETADAS EN S2

- **Alcance de H03 cerrado con Miguel Ángel**: 5 familias y orden de
  trabajo (ver sección ALCANCE), decidido por frecuencia real en la
  práctica y peso de tendencias modernas. El Catalán se integró como
  línea propia dentro del bloque Inglesa por su transposición natural,
  y las aperturas de flanco menores (Larsen 1.b3, Bird 1.f4) se
  incluyeron en el alcance final; 1.g3 puro queda cubierto por
  transposición vía las líneas de Reti/Inglesa ya redactadas, sin
  línea dedicada propia.
- **8 líneas nuevas redactadas** en `repertoire.js` y sus entradas en
  `RepertoireCatalog.kt` (formato idéntico a H01/H02: `userColor`,
  `explain` con idea/ventaja/debilidad por jugada), todas con
  `userColor: 'b'` (entrenamiento con negras, como corresponde a este
  hito):
  - `h03-londres-clasica` — Sistema Londres, respuesta clásica con Bd6.
  - `h03-londres-fianchetto` — Sistema Londres, respuesta moderna con
    fianchetto g6.
  - `h03-inglesa-inversa-siciliana` — Inglesa, respuesta simétrica tipo
    Siciliana Inversa.
  - `h03-catalana` — Catalán Aceptado con ...a6 y ...b5 (línea propia
    dentro del bloque Inglesa).
  - `h03-reti-fianchetto-doble` — Reti, estructura de fianchetto
    simétrico tipo King's Indian Attack invertido.
  - `h03-trompowsky` — Ataque Trompowsky, respuesta sólida con ...e6.
  - `h03-larsen` — Larsen (1.b3), respuesta central con ...e5.
  - `h03-bird` — Bird (1.f4), respuesta con ...d5 y fianchetto de rey.
- **Verificación**: todas las secuencias SAN se verificaron con
  chess.js (`node verify.js "..."`) en un entorno Node local antes de
  escribirse en `repertoire.js`, mismo procedimiento que H01/H02. Se
  detectaron y corrigieron dos errores de diseño antes de escribir
  código real: una recaptura ilegal en una línea de Londres descartada
  (Bd3 sin pieza que pudiera recapturar en d3 tras ...Bxd3 — la línea
  se rediseñó por completo evitando el cambio prematuro de alfiles) y
  un error de sintaxis en el script de verificación (excepciones de
  chess.js no capturadas en la primera versión de `verify.js`).
- **4 builds en verde consecutivos** en GitHub Actions, uno tras cada
  lote (Londres → Inglesa+Catalán → Reti → Trompowsky+Larsen+Bird),
  confirmados vía API REST con el token de sesión.
- Repertorio total tras esta sesión: **25 líneas** (17 de H01/H02 + 8
  nuevas de H03), IDs sincronizados y verificados sin discrepancias
  entre `repertoire.js` y `RepertoireCatalog.kt` tras cada lote.
- Pendiente de prueba en dispositivo real (Miguel Ángel no lo pidió
  durante la sesión, según el ritmo de trabajo acordado en H02).

## ALCANCE

**Cerrado con Miguel Ángel en S2.** Cobertura de las defensas con
negras contra cualquier primera jugada de blancas que no sea 1.e4 (ya
cubierta por la familia Escandinava en H02) ni el Gambito de Dama
1.d4 d5 2.c4 con blancas (ya cubierto en H02). Familias y orden de
trabajo, según frecuencia real en la práctica y peso de tendencias
modernas:

1. **Sistema Londres** (1.d4 seguido de Bf4) — prioridad alta: apertura
   moderna en fuerte auge, bajo requerimiento teórico para blancas.
   **COMPLETADO EN S2** (2 líneas).
2. **Inglesa** (1.c4), incluyendo el **Catalán** (1.d4 Nf6 2.c4 g3)
   como línea propia dentro de este mismo bloque, por su transposición
   natural con la Inglesa. **COMPLETADO EN S2** (2 líneas).
3. **Reti** (1.Nf3 sin transponer a 1.d4/1.c4). **COMPLETADO EN S2**
   (1 línea).
4. **Ataque Trompowsky** (1.d4 seguido de 2.Bg5). **COMPLETADO EN S2**
   (1 línea).
5. **Aperturas de flanco menores**: 1.b3 (Larsen), 1.f4 (Bird), 1.g3.
   **COMPLETADO EN S2** (2 líneas: Larsen y Bird; 1.g3 puro cubierto
   por transposición, sin línea dedicada).

Profundidad de variantes por familia: mismo criterio ya aplicado en
H01/H02, sin límite fijo predefinido — se cubre lo necesario para
que la línea tenga sentido práctico y una explicación completa por
jugada.

## HITO CERRADO — SIN HOJA DE RUTA PENDIENTE

Los tres puntos que quedaron abiertos al cierre de S2 se resolvieron
en S3:

1. **Prueba en dispositivo real** — descartada como criterio de
   cierre por directriz explícita de Miguel Ángel; no forma parte del
   proceso de validación de este hito.
2. **Ampliar profundidad** — resuelto por Claude (rol de experto
   ajedrecístico): las líneas ya superaban el estándar de H01/H02, no
   hacía falta profundidad adicional; se detectó y corrigió en su
   lugar un hueco de cobertura (Inglesa Simétrica pura), ya cerrado
   con la novena línea.
3. **Cierre de H03 y apertura de H04** — hecho vía PCH en S3. Ver
   `DOCS/ATTACHEDS/APERTURASAJEDREZ_ANNEX_H04.md` para la hoja de
   ruta del nuevo hito activo.

