# Anexo — Hito 01: Fundamentos y repertorio base

## COMPLETADAS

- Repositorio inicializado en modo NewFlow (GitHub-directo, sin
  PythonAnywhere/SWAP/sftp para código ni documentación).
- Estructura mínima de proyecto Android creada (Gradle Kotlin DSL,
  actividad única de arranque).
- Workflow de GitHub Actions (`build-and-deploy.yml`) creado para
  compilación en la nube y despliegue a PythonAnywhere.
- Repertorio de blancas fijado: Gambito de Dama (1.d4 d5 2.c4), única
  línea a entrenar con blancas.
- Pipeline de CI/CD verificado de punta a punta: secrets configurados
  (`PA_API_TOKEN`, `PA_USERNAME`, `WEBAPP_DOMAIN`), fallo inicial por
  falta de icono adaptativo (`mipmap/ic_launcher`) diagnosticado y
  corregido, workflow en verde (compilación + subida a PythonAnywhere
  + reload del webapp).

## INCIDENCIA CERRADA — repertorio de negras

Miguel Ángel confirmó la lectura 1: el repertorio de negras contra
1.e4 es siempre 1...d5 (escandinava), sin excepción — la apertura
española no llega a producirse en sus partidas porque no juega
1...e5. Repertorio completo:

- **Blancas:** siempre Gambito de Dama (1.d4 d5 2.c4) — se estudian
  sus variantes desde el punto de vista de blancas.
- **Negras contra 1.e4:** siempre defensa escandinava (1...d5) —
  primera línea a estudiar en profundidad, con todas sus variantes.
- **Negras contra el resto de aperturas de blancas:** cobertura de
  las defensas más habituales, empezando por las más jugadas en la
  práctica, tras cerrar el estudio de la escandinava. Orden y
  alcance concretos pendientes de definir con Miguel Ángel llegado
  ese punto.

Requisito explícito de UI: el tablero es visual e interactivo, nunca
solo texto. Decisión técnica tomada — ver §2 de `MASTER_DOCUMENT.md`
(`WebView` + `chessboard.js` + `chess.js` embebidos como assets
locales).

## HOJA DE RUTA — Hito 01

- [x] Cerrar la incidencia del repertorio de negras.
- [x] Decidir el enfoque de tablero/validación de jugadas.
- [ ] Definir profundidad de líneas y si se registra progreso
      (aciertos/fallos por línea).
- [ ] Implementar tablero interactivo mínimo (una sola línea jugable:
      Gambito de Dama con blancas) para validar el flujo completo
      antes de añadir el resto de aperturas.
