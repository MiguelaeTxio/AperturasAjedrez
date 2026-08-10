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

## INCIDENCIA ABIERTA — repertorio de negras

Miguel Ángel indicó: "normalmente contesto con la defensa
escandinava a la apertura española". Esas dos aperturas no pueden
ser la misma línea: la española (1.e4 e5 2.Cf3 Cc6 3.Ab5) asume que
las negras ya jugaron 1...e5, mientras que la escandinava es
precisamente 1...d5 como respuesta a 1.e4 — una línea alternativa a
1...e5, no una respuesta dentro de ella.

Pendiente de que Miguel Ángel aclare una de estas dos lecturas (o
la que corresponda):

1. El repertorio de negras contra 1.e4 es siempre 1...d5
   (escandinava), y la española como tal nunca se produce en las
   partidas de Miguel Ángel porque no juega 1...e5 — en ese caso no
   hay nada que entrenar "contra la española" específicamente.
2. Miguel Ángel quiere entrenar también qué responder si el rival
   juega la española (lo cual implica jugar 1...e5, una segunda
   línea de negras distinta de la escandinava).

## HOJA DE RUTA — Hito 01

- [ ] Cerrar la incidencia anterior con Miguel Ángel.
- [ ] Definir el resto del repertorio (aperturas adicionales,
      profundidad de líneas, si se registra progreso).
- [ ] Decidir motor de validación de jugadas (motor embebido de
      terceros vs. validador propio simple).
- [ ] Implementar tablero interactivo mínimo (una sola línea jugable:
      Gambito de Dama con blancas) para validar el flujo completo
      antes de añadir el resto de aperturas.
