// build_tree.js -- Migracion de REPERTOIRE_LINES (lineas planas) +
// TRAMPAS_LINES (trampas) a un bosque de arboles de variantes.
//
// Principio de diseno (cerrado con Miguel Angel, H01 reapertura S7):
// - El arbol se construye por FUSION DE PREFIJOS puramente derivada de
//   los datos ya verificados -- ninguna familia se asigna a mano. Dos
//   lineas que empiezan igual (mismo san+color en la misma jugada)
//   comparten el mismo nodo; donde divergen, se bifurcan.
// - Las trampas se fusionan DESPUES del arbol de libro: se camina por
//   el arbol existente mientras la trampa coincide con una jugada de
//   libro ya presente, y en el primer punto de divergencia se cuelga
//   una rama nueva marcada kind:'trap' (nunca se marca 'book').
// - Ningun nodo se fusiona en silencio si dos lineas comparten
//   posicion pero difieren en la explicacion -- se aborta con detalle
//   del conflicto.
// - Verificacion final: cada camino raiz->hoja del arbol resultante
//   (de libro y de trampa) se reproduce con chess.js real desde la
//   jugada 1 y se compara letra a letra contra la secuencia original
//   de la linea/trampa de la que procede. Si alguna de las 32
//   secuencias (lineas + trampas) no coincide exactamente, el
//   script aborta sin escribir el fichero de salida.

'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ---------------------------------------------------------------
// RUTAS -- este script vive en scripts/, las fuentes reales estan en
// app/src/main/assets/www/js/. Se ejecuta con:
//   node scripts/build_repertoire_tree.js
// desde la raiz del repositorio.
// ---------------------------------------------------------------
const ASSETS_JS_DIR = path.join(__dirname, '..', 'app', 'src', 'main', 'assets', 'www', 'js');

// ---------------------------------------------------------------
// 1) Cargar chess.js real (mismo patron que el resto del proyecto:
//    global.window = {}; el propio fichero hace window.Chess = Chess)
// ---------------------------------------------------------------
global.window = {};
require(path.join(ASSETS_JS_DIR, 'chess.js'));
const ChessCtor = global.window.Chess;
if (typeof ChessCtor !== 'function') {
  throw new Error('chess.js no expuso window.Chess -- abortando.');
}

// ---------------------------------------------------------------
// 2) Cargar REPERTOIRE_LINES y TRAMPAS_LINES ejecutando los ficheros
//    reales tal cual (son scripts de navegador que declaran "var X",
//    no modulos CommonJS -- se evaluan en un sandbox y se leen las
//    variables globales resultantes, sin tocar ni una coma de los
//    ficheros de origen).
// ---------------------------------------------------------------
function loadGlobalVar (absPath, varName) {
  const code = fs.readFileSync(absPath, 'utf8');
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: absPath });
  if (!Array.isArray(sandbox[varName])) {
    throw new Error(`${absPath} no definio ${varName} como array -- abortando.`);
  }
  return sandbox[varName];
}

const REPERTOIRE_LINES = loadGlobalVar(path.join(ASSETS_JS_DIR, 'repertoire.js'), 'REPERTOIRE_LINES');
const TRAMPAS_LINES = loadGlobalVar(path.join(ASSETS_JS_DIR, 'trampas.js'), 'TRAMPAS_LINES');

console.log(`Cargadas ${REPERTOIRE_LINES.length} lineas de repertoire.js`);
console.log(`Cargadas ${TRAMPAS_LINES.length} trampas de trampas.js`);

// ---------------------------------------------------------------
// 3) Asignacion estable de color por variante nombrada (punto 4,
//    opcion B cerrada: color fijo por nombre, nunca por posicion).
//    Hash determinista del nombre -> indice de paleta, para que anadir
//    variantes en el futuro nunca requiera tocar una tabla a mano.
// ---------------------------------------------------------------
const PALETTE_SIZE = 12; // numero de colores distintos disponibles en la UI (a definir visualmente en el bloque de UI)
function stableColorId (name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = (h * 31 + name.charCodeAt(i)) >>> 0;
  }
  return h % PALETTE_SIZE;
}

// ---------------------------------------------------------------
// 4) Construccion del arbol de libro por fusion de prefijos.
// ---------------------------------------------------------------
let nextNodeSeq = 0;
function makeNode (ply) {
  return {
    _seq: nextNodeSeq++,
    san: null,
    color: null,
    explain: null,
    kind: 'book',
    children: [],
    lineIds: new Set(), // lineas (de repertoire) que atraviesan este nodo
    trap: null,
    ply: ply
  };
}

function explainsEqual (a, b) {
  if (!a || !b) return a === b;
  return a.idea === b.idea && a.ventaja === b.ventaja && a.debilidad === b.debilidad;
}

// Un arbol por cada primera jugada distinta (raiz virtual con hijos
// = primeras jugadas). Esto agrupa automaticamente por familia real
// de apertura sin que nadie tenga que decidir la agrupacion a mano.
const forestRoot = makeNode(-1); // raiz virtual, nunca se serializa como jugada

function findChild (node, san, color) {
  return node.children.find(c => c.san === san && c.color === color && c.kind === 'book');
}

// ---------------------------------------------------------------
// 3.5) Tabla de resolucion de conflictos -- CONFIRMADA con Miguel
//    Angel (sesion S7, reapertura H01). Criterio: en un nodo que
//    ahora es realmente compartido por varias variantes/familias, la
//    explicacion describe la POSICION, nunca una rama futura concreta
//    -- nunca silenciosa, queda aqui explicita y auditable para quien
//    lea el fichero.
// ---------------------------------------------------------------
const EXPLAIN_OVERRIDES = [
  {
    path: ['d4'],
    explain: {
      idea: 'Ocupa el centro y abre la diagonal del alfil de dama.',
      ventaja: 'Controla e5 y c5, y prepara un desarrollo rapido sin comprometerse todavia con el plan concreto (Gambito de Dama, Sistema Londres, Trompowsky...).',
      debilidad: 'Ninguna real a este nivel; es la jugada mas solida y flexible para empezar.'
    }
  },
  {
    path: ['d4', 'd5'],
    explain: {
      idea: 'Negras responden en el centro con la misma logica: ocupar y no ceder espacio.',
      ventaja: 'Mantiene la simetria y no debilita ninguna casilla.',
      debilidad: 'Dificulta el desarrollo del alfil de casillas claras de negras, que queda encerrado tras la cadena de peones.'
    }
  },
  {
    path: ['d4', 'Nf6'],
    explain: {
      idea: 'Desarrolla la pieza mas natural sin definir todavia la estructura de peones central.',
      ventaja: 'Maxima flexibilidad; negras puede optar por varias estructuras (fianchetto con g6, Catalana con e6, Nimzo/Bogo con e6 y Bb4...) segun lo que juegue blancas.',
      debilidad: 'Permite la clavada inmediata del Trompowsky (Bg5), aunque no supone un problema real con buen juego.'
    }
  },
  {
    path: ['d4', 'd5', 'c4'],
    explain: {
      idea: 'El Gambito de Dama: blancas ofrecen el peon c4 para atacar el centro de negras desde el flanco.',
      ventaja: 'Si negras capturan (dxc4), blancas recuperan el peon con facilidad y quedan con mejor desarrollo; si negras sostienen d5, blancas ganan tiempo y espacio en el flanco de dama.',
      debilidad: 'Cede momentaneamente el control exclusivo del centro y abre ligeramente la posicion del rey mientras no se ha enrocado.'
    }
  },
  {
    path: ['d4', 'd5', 'c4', 'e6'],
    explain: {
      idea: 'Sostiene d5 sin capturar en c4, dejando abierta la opcion de transponer a varios sistemas (Ortodoxa, Tarrasch, Semi-Tarrasch...) segun la siguiente jugada.',
      ventaja: 'Posicion solida y flexible, la mas fiable estadisticamente para negras contra 1.d4.',
      debilidad: 'El alfil de casillas claras de negras queda temporalmente encerrado tras la cadena de peones e6-d5; liberarlo (o abrir el centro, en el caso del Tarrasch) es uno de los planes centrales de negras en el medio juego.'
    }
  },
  {
    path: ['d4', 'd5', 'c4', 'e6', 'Nc3'],
    explain: {
      idea: 'Desarrolla una pieza y refuerza el control sobre d5, manteniendo abiertas varias continuaciones (Bg5, cambio en d5, e3...) segun el plan que se elija despues.',
      ventaja: 'Pieza activa que no bloquea el peon c4 y sirve de base para varios planes (ataque directo con Bg5, cambio en d5 con minoria de peones, o desarrollo solido con e3).',
      debilidad: 'Ninguna relevante en este orden de jugadas.'
    }
  },
  {
    path: ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6'],
    explain: {
      idea: 'Desarrolla la pieza mas natural, presionando e4 y preparando el enroque corto.',
      ventaja: 'Jugada solida que no compromete nada y acelera la seguridad del rey.',
      debilidad: 'Ninguna relevante; es la respuesta mas natural en la posicion.'
    }
  },
  {
    path: ['d4', 'd5', 'c4', 'e6', 'Nc3', 'Nf6', 'Bg5'],
    explain: {
      idea: 'Clava el caballo de f6 contra la dama, aumentando la presion sobre el centro y sobre d5.',
      ventaja: 'Pieza activa fuera de la cadena de peones antes de que quede encerrada, y prepara e3 seguido de un desarrollo rapido.',
      debilidad: 'El alfil puede acabar siendo blanco de ...h6 y ...g5 mas adelante si negras busca contrajuego agresivo, aunque no es una amenaza inmediata.'
    }
  },
  {
    path: ['d4', 'd5', 'c4', 'c6'],
    explain: {
      idea: 'Defensa Eslava: sostiene d5 sin encerrar el alfil de casillas claras, dejando abierta la opcion de transponer a la Semi-Eslava con ...e6 mas adelante.',
      ventaja: 'Posicion muy solida y flexible, base de dos sistemas distintos (Eslava pura y Semi-Eslava) segun como continue negras.',
      debilidad: 'Tapa momentaneamente la casilla natural de desarrollo del caballo de dama (b8), que tendra que salir por d7 en vez de c6.'
    }
  },
  {
    path: ['d4', 'd5', 'c4', 'c6', 'Nf3'],
    explain: {
      idea: 'Desarrolla una pieza y prepara el enroque corto sin comprometerse aun con el plan concreto (Nc3, cxd5...).',
      ventaja: 'Jugada flexible que sirve tanto para la Eslava pura como para la Semi-Eslava, manteniendo varias opciones de plan abiertas.',
      debilidad: 'Ninguna relevante.'
    }
  },
  {
    path: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3'],
    explain: {
      idea: 'Desarrolla la ultima pieza menor del flanco de dama y refuerza el centro.',
      ventaja: 'Pieza activa que apoya un futuro e4 o presiona d5 de nuevo.',
      debilidad: 'Permite a negras capturar en c4 y sostener el peon de mas con ...b5, el plan principal de la Eslava.'
    }
  },
  {
    path: ['e4'],
    explain: {
      idea: 'Ocupa el centro y abre la diagonal de la dama y del alfil de rey.',
      ventaja: 'Jugada mas popular a todos los niveles, maxima actividad inmediata para las piezas.',
      debilidad: 'Ninguna real a este nivel; es una de las dos jugadas principales para empezar la partida.'
    }
  },
  {
    path: ['e4', 'd5'],
    explain: {
      idea: 'Escandinava: negras ataca el peon e4 de inmediato en vez de responder de forma simetrica o cerrada.',
      ventaja: 'Fuerza a blancas a definir la estructura central en la jugada 2, sacando la partida del terreno mas teorico de otras defensas.',
      debilidad: 'Tras el cambio de peones, la dama de negras tendra que salir pronto y blancas puede ganar tiempo atacandola con piezas menores.'
    }
  },
  {
    path: ['e4', 'd5', 'exd5'],
    explain: {
      idea: 'Captura el peon ofrecido; casi siempre la respuesta principal.',
      ventaja: 'Gana un peon de forma momentanea y obliga a negras a recapturar, casi siempre con la dama.',
      debilidad: 'Ninguna; es la continuacion practicamente obligada para no perder tiempo defendiendo e4.'
    }
  },
  {
    path: ['e4', 'd5', 'exd5', 'Qxd5'],
    explain: {
      idea: 'Recaptura con la dama, la unica pieza que puede hacerlo de inmediato.',
      ventaja: 'Recupera el material y desarrolla la dama a una casilla central, aunque tendra que moverse de nuevo pronto.',
      debilidad: 'La dama queda expuesta en el centro, blanco facil para Nc3 con ganancia de tiempo -- el precio principal de toda la Escandinava.'
    }
  },
  {
    path: ['e4', 'd5', 'exd5', 'Qxd5', 'Nc3'],
    explain: {
      idea: 'Desarrolla una pieza atacando la dama de negras, ganando un tiempo de desarrollo gratis.',
      ventaja: 'Pieza activa con tiempo ganado; es la razon principal por la que 2...Qxd5 exige mas precision que otras defensas.',
      debilidad: 'Ninguna; es la jugada mas natural y fuerte en la posicion.'
    }
  }
];

function findOverride (pathSans) {
  const key = pathSans.join('|');
  return EXPLAIN_OVERRIDES.find(o => o.path.join('|') === key);
}

const appliedOverrides = new Set();
const explainConflicts = [];

function mergeBookLine (line) {
  let cursor = forestRoot;
  const pathSoFar = [];
  line.moves.forEach((mv, idx) => {
    pathSoFar.push(mv.san);
    const override = findOverride(pathSoFar);
    const effectiveExplain = override ? override.explain : mv.explain;

    let child = findChild(cursor, mv.san, mv.color);
    if (!child) {
      child = makeNode(idx);
      child.san = mv.san;
      child.color = mv.color;
      child.explain = effectiveExplain;
      cursor.children.push(child);
    } else if (!explainsEqual(child.explain, effectiveExplain)) {
      if (override) {
        // No deberia pasar: si hay override, todas las lineas que
        // pasan por aqui deben quedar con el mismo texto canonico.
        explainConflicts.push({
          ply: idx + 1, san: mv.san, color: mv.color, pathSans: pathSoFar.slice(),
          existingLineId: [...child.lineIds][0], existingExplain: child.explain,
          newLineId: line.id, newExplain: effectiveExplain, note: 'CONFLICTO PESE A OVERRIDE -- revisar tabla'
        });
      } else {
        explainConflicts.push({
          ply: idx + 1, san: mv.san, color: mv.color, pathSans: pathSoFar.slice(),
          existingLineId: [...child.lineIds][0], existingExplain: child.explain,
          newLineId: line.id, newExplain: effectiveExplain
        });
      }
    }
    if (override) appliedOverrides.add(pathSoFar.join('|'));
    child.lineIds.add(line.id);
    cursor = child;
  });
  cursor.leafOf = { lineId: line.id, name: line.name, userColor: line.userColor, overview: line.overview };
}

REPERTOIRE_LINES.forEach(mergeBookLine);

if (explainConflicts.length > 0) {
  console.error(`\n*** ${explainConflicts.length} CONFLICTO(S) DE EXPLICACION SIN RESOLVER -- no se fusiona nada en silencio ***\n`);
  explainConflicts.forEach((c, i) => {
    console.error(`[${i + 1}] ${c.note || ''} Jugada ${c.ply} (${c.color} ${c.san}) -- posicion: ${c.pathSans.join(' ')}`);
    console.error(`    Ya fusionada por "${c.existingLineId}": ${JSON.stringify(c.existingExplain)}`);
    console.error(`    Nueva en "${c.newLineId}":            ${JSON.stringify(c.newExplain)}`);
    console.error('');
  });
  process.exit(1);
}

console.log(`\nTabla de resolucion aplicada en ${appliedOverrides.size} posiciones compartidas (de ${EXPLAIN_OVERRIDES.length} definidas).`);
if (appliedOverrides.size !== EXPLAIN_OVERRIDES.length) {
  const unused = EXPLAIN_OVERRIDES.filter(o => !appliedOverrides.has(o.path.join('|')));
  console.warn('AVISO -- overrides definidos que no se usaron en ninguna linea real (revisar si sobran):', unused.map(o => o.path.join(' ')));
}

// ---------------------------------------------------------------
// 5) Marcar variantName en el nodo mas temprano donde la linea queda
//    identificada de forma inequivoca (transicion de "varias lineas
//    posibles" a "una sola linea posible" atravesando ese nodo).
// ---------------------------------------------------------------
function annotateVariantNames (node, parentLineCount) {
  node.children.forEach(child => {
    if (child.kind !== 'book') return;
    const childLineCount = child.lineIds.size;
    if (childLineCount === 1 && parentLineCount !== 1) {
      const onlyLineId = [...child.lineIds][0];
      const line = REPERTOIRE_LINES.find(l => l.id === onlyLineId);
      child.variantName = line.name;
      child.variantColorId = stableColorId(line.name);
    }
    annotateVariantNames(child, childLineCount);
  });
}
annotateVariantNames(forestRoot, 0);

// ---------------------------------------------------------------
// 6) Fusionar trampas: caminar por el arbol de libro mientras
//    coincida, y en la primera divergencia colgar una rama nueva
//    kind:'trap' con la metadata de la trampa.
// ---------------------------------------------------------------
const TRAP_COLOR_ID = 'trap'; // constante fuera de la paleta normal, nunca colisiona con stableColorId (numerico)

function isErrorMove (mv) {
  // Marcador real ya presente en trampas.js (verificado: las 6
  // trampas lo usan de forma consistente) -- la jugada que realmente
  // pierde la partida, a diferencia de las jugadas de preparacion que
  // la rodean y que son indistinguibles de libro.
  return !!(mv.explain && typeof mv.explain.idea === 'string' && mv.explain.idea.indexOf('ERROR') === 0);
}

function mergeTrap (trapLine) {
  let cursor = forestRoot;
  let divergedAt = -1;
  const pathSoFar = [];

  for (let idx = 0; idx < trapLine.moves.length; idx++) {
    const mv = trapLine.moves[idx];
    pathSoFar.push(mv.san);
    const override = findOverride(pathSoFar);
    const effectiveExplain = override ? override.explain : mv.explain;

    if (divergedAt === -1) {
      // Todavia dentro del arbol de libro: mientras la jugada
      // coincida con una jugada de libro ya existente Y no sea la
      // jugada marcada como ERROR, se reutiliza el nodo de libro tal
      // cual (con su propio texto canonico) -- NO se bifurca solo
      // porque el estilo narrativo de trampas.js sea distinto. Solo
      // diverge de verdad donde no hay jugada de libro que coincida,
      // o donde la jugada es el error real de la trampa.
      const bookChild = findChild(cursor, mv.san, mv.color);
      const trapChild = cursor.children.find(c => c.san === mv.san && c.color === mv.color && c.kind === 'trap' && c.trap.id === trapLine.id);

      if (trapChild) {
        cursor = trapChild;
        continue;
      }

      if (bookChild && !isErrorMove(mv)) {
        cursor = bookChild;
        continue;
      }

      // Diverge aqui: o no hay jugada de libro que coincida, o es el
      // error real de la trampa (aunque coincida con una jugada de
      // libro existente en san+color -- no deberia pasar en la
      // practica, pero si pasara, el error manda).
      divergedAt = idx;
    }

    // A partir de la divergencia, todos los nodos son nuevos y
    // exclusivos de esta trampa (no se comparten con otras).
    const node = makeNode(idx);
    node.san = mv.san;
    node.color = mv.color;
    node.explain = effectiveExplain;
    node.kind = 'trap';
    node.isError = isErrorMove(mv);
    // Id explicita y unica por trampa+jugada -- evita colision con un
    // nodo de libro que por casualidad comparta el mismo san en el
    // mismo padre (ya ocurrio en la migracion real: "Nbd7" es a la vez
    // jugada de libro en h01 y jugada de divergencia de la Trampa del
    // Elefante bajo el mismo nodo padre).
    node.idOverride = 'trap__' + trapLine.id + '__' + idx;
    node.trap = { id: trapLine.id, tipo: trapLine.tipo, name: trapLine.name };
    node.variantName = idx === divergedAt ? trapLine.name : undefined;
    if (node.variantName) node.variantColorId = TRAP_COLOR_ID;
    cursor.children.push(node);
    cursor = node;
  }

  if (divergedAt === -1) {
    throw new Error(
      `CONFLICTO: la trampa "${trapLine.id}" coincide con el arbol de libro en ` +
      `todas sus jugadas -- no hay ningun punto de divergencia real. Revisar el ` +
      `contenido de trampas.js, algo esta mal.`
    );
  }

  cursor.leafOf = { trapId: trapLine.id, name: trapLine.name, userColor: trapLine.userColor, overview: trapLine.overview, tipo: trapLine.tipo };
  console.log(`  Trampa "${trapLine.id}" fusionada -- diverge en la jugada ${divergedAt + 1} (${trapLine.moves[divergedAt].san}).`);
}

console.log('\nFusionando trampas en el arbol de libro:');
TRAMPAS_LINES.forEach(mergeTrap);

// ---------------------------------------------------------------
// 7) VERIFICACION -- reconstruir cada camino raiz->hoja y comparar
//    contra la secuencia original con chess.js real desde la jugada 1.
// ---------------------------------------------------------------
function collectLeafPaths (node, pathSoFar, out) {
  if (node.leafOf) {
    out.push({ leafOf: node.leafOf, path: pathSoFar.slice() });
  }
  node.children.forEach(child => {
    collectLeafPaths(child, pathSoFar.concat([child]), out);
  });
}

const leafPaths = [];
collectLeafPaths(forestRoot, [], leafPaths);

console.log(`\nVerificando ${leafPaths.length} caminos raiz->hoja con chess.js real...`);

let originalById = new Map();
REPERTOIRE_LINES.forEach(l => originalById.set(l.id, l.moves));
TRAMPAS_LINES.forEach(l => originalById.set(l.id, l.moves));

let failures = [];
leafPaths.forEach(({ leafOf, path }) => {
  const originalId = leafOf.lineId || leafOf.trapId;
  const originalMoves = originalById.get(originalId);

  if (!originalMoves) {
    failures.push(`${originalId}: no se encontro la secuencia original para comparar.`);
    return;
  }
  if (originalMoves.length !== path.length) {
    failures.push(`${originalId}: longitud distinta -- original ${originalMoves.length} jugadas, arbol ${path.length} jugadas.`);
    return;
  }

  const chess = new ChessCtor();
  const pathSoFar = [];
  for (let i = 0; i < path.length; i++) {
    const node = path[i];
    const orig = originalMoves[i];
    pathSoFar.push(node.san);

    if (node.san !== orig.san || node.color !== orig.color) {
      failures.push(`${originalId}: jugada ${i + 1} no coincide -- arbol ${node.color}/${node.san}, original ${orig.color}/${orig.san}.`);
      break;
    }

    const override = findOverride(pathSoFar);
    if (node.kind === 'book') {
      // Tramo de libro reutilizado por la trampa (jugada de
      // preparacion, no el error): el texto correcto es el canonico
      // del arbol de libro (con o sin override), NUNCA el texto
      // propio que tenia trampas.js para esa jugada -- eso es
      // precisamente la correccion aplicada. Solo se exige que la
      // jugada en si sea identica y legal.
    } else if (override) {
      if (!explainsEqual(node.explain, override.explain)) {
        failures.push(`${originalId}: jugada ${i + 1} (${node.san}) -- el nodo NO lleva el texto canonico esperado del override.`);
        break;
      }
    } else if (!explainsEqual(node.explain, orig.explain)) {
      failures.push(`${originalId}: jugada ${i + 1} (${node.san}) tiene explicacion distinta a la original (y no hay override que lo justifique).`);
      break;
    }

    let move;
    try {
      move = chess.move(node.san);
    } catch (e) {
      failures.push(`${originalId}: jugada ${i + 1} (${node.san}) es ILEGAL segun chess.js real -- ${e.message}`);
      break;
    }
    if (!move) {
      failures.push(`${originalId}: jugada ${i + 1} (${node.san}) rechazada por chess.js sin excepcion.`);
      break;
    }
  }
});

if (failures.length > 0) {
  console.error('\n*** VERIFICACION FALLIDA -- no se escribe ningun fichero de salida ***\n');
  failures.forEach(f => console.error(' - ' + f));
  process.exit(1);
}

console.log(`OK -- las ${leafPaths.length} secuencias (${REPERTOIRE_LINES.length} lineas + ${TRAMPAS_LINES.length} trampas) verificadas letra a letra y legales con chess.js real.`);

// ---------------------------------------------------------------
// 8) Comprobacion de cobertura: todo lineId/trapId original debe
//    aparecer exactamente una vez como hoja en el arbol -- ni se
//    pierde contenido ni se duplica.
// ---------------------------------------------------------------
const expectedIds = new Set([...REPERTOIRE_LINES.map(l => l.id), ...TRAMPAS_LINES.map(l => l.id)]);
const foundIds = new Set(leafPaths.map(lp => lp.leafOf.lineId || lp.leafOf.trapId));

const missing = [...expectedIds].filter(id => !foundIds.has(id));
const unexpected = [...foundIds].filter(id => !expectedIds.has(id));
if (missing.length || unexpected.length) {
  console.error('*** COBERTURA INCOMPLETA ***');
  if (missing.length) console.error('  Faltan en el arbol:', missing);
  if (unexpected.length) console.error('  Sobran en el arbol:', unexpected);
  process.exit(1);
}
if (foundIds.size !== expectedIds.size) {
  console.error('*** IDS DUPLICADOS COMO HOJA EN EL ARBOL ***');
  process.exit(1);
}
console.log(`OK -- cobertura exacta: ${expectedIds.size} ids originales, ${foundIds.size} hojas en el arbol, sin perdidas ni duplicados.`);

// ---------------------------------------------------------------
// 9) Serializar el bosque (quitando campos internos de construccion:
//    _seq, lineIds como Set) a JSON para inspeccion + a JS final.
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// 9.7) Color(es) de usuario alcanzables desde cada nodo. Necesario
//    porque una misma raiz (p. ej. "d4") puede llevar a hojas
//    entrenadas desde userColor distinto (Gambito de Dama = blancas,
//    pero las defensas de H03 contra 1.d4 que no sea Gambito de Dama
//    = negras) -- el motor necesita saber, en cada nodo, si sigue
//    siendo valido para el color que se esta entrenando en esa
//    sesion, para no mezclar ramas de sesiones distintas al elegir
//    la jugada del rival.
// ---------------------------------------------------------------
function computeUserColors (node) {
  const colors = new Set();
  if (node.leafOf) colors.add(node.leafOf.userColor);
  node.children.forEach(child => {
    computeUserColors(child);
    child.userColors.forEach(uc => colors.add(uc));
  });
  node.userColors = colors;
  return colors;
}
forestRoot.children.forEach(computeUserColors);

function serialize (node, pathSans) {
  const out = {};
  if (node.san !== null) {
    const myPath = pathSans.concat([node.san]);
    out.id = node.idOverride || myPath.join('__');
    out.san = node.san;
    out.color = node.color;
    out.explain = node.explain;
    out.kind = node.kind;
    out.userColors = [...node.userColors].sort();
    if (node.kind === 'trap') {
      out.trap = node.trap;
      if (node.isError) out.isError = true;
    }
    if (node.variantName) {
      out.variantName = node.variantName;
      out.variantColorId = node.variantColorId;
    }
    if (node.leafOf) out.leafOf = node.leafOf;
    if (node.children.length) {
      out.children = node.children.map(c => serialize(c, myPath));
    }
    return out;
  }
  // Nodo raiz virtual (no se serializa como jugada, solo sus hijos).
  if (node.children.length) {
    out.children = node.children.map(c => serialize(c, pathSans));
  }
  return out;
}

const forestOut = forestRoot.children.map(c => serialize(c, []));

// ---------------------------------------------------------------
// 9.5) Verificar que los ids de nodo (ruta de sans) son unicos en
//    todo el bosque -- nunca asumir la unicidad sin comprobarla.
// ---------------------------------------------------------------
const seenIds = new Map();
(function checkIdsUnique (nodes) {
  nodes.forEach(n => {
    if (seenIds.has(n.id)) {
      console.error(`*** ID DE NODO DUPLICADO: "${n.id}" ***`);
      process.exit(1);
    }
    seenIds.set(n.id, true);
    if (n.children) checkIdsUnique(n.children);
  });
})(forestOut);
console.log(`OK -- ${seenIds.size} ids de nodo, todos unicos.`);

// ---------------------------------------------------------------
// 9.8) Familias entrenables (raiz + color de usuario), derivadas del
//    propio arbol -- nunca escritas a mano en el selector nativo, para
//    que una futura ampliacion de contenido no pueda dejar el
//    selector desactualizado en silencio. Solo el TITULO de cada
//    familia es curado a mano (no se puede derivar de forma fiable),
//    y se verifica que la tabla de titulos cubre EXACTAMENTE las
//    familias reales -- ni de mas ni de menos.
// ---------------------------------------------------------------
const FAMILY_TITLES = {
  'd4|w': 'Gambito de Dama',
  'd4|b': 'Defensas contra el Sistema Londres, Trompowsky y Catalana',
  'e4|b': 'Defensa Escandinava',
  'c4|b': 'Defensa contra la Apertura Inglesa',
  'Nf3|b': 'Defensa contra la Apertura Reti',
  'b3|b': 'Defensa contra el Sistema Larsen',
  'f4|b': 'Defensa contra la Apertura Bird'
};

function collectLeavesForColor (node, color, out) {
  out = out || [];
  if (node.leafOf && node.kind === 'book' && node.leafOf.userColor === color) out.push(node.leafOf.name);
  (node.children || []).forEach(c => collectLeavesForColor(c, color, out));
  return out;
}

const realFamilyKeys = new Set();
const families = [];
forestOut.forEach(root => {
  root.userColors.forEach(color => {
    const key = root.san + '|' + color;
    realFamilyKeys.add(key);
    families.push({
      id: 'family__' + root.san + '__' + color,
      rootSan: root.san,
      userColor: color,
      title: FAMILY_TITLES[key],
      leafCount: collectLeavesForColor(root, color).length
    });
  });
});

const missingTitles = families.filter(f => !f.title);
if (missingTitles.length) {
  console.error('*** FALTA TITULO DE FAMILIA (edita FAMILY_TITLES) ***');
  missingTitles.forEach(f => console.error('  ' + f.rootSan + '|' + f.userColor));
  process.exit(1);
}
const staleTitles = Object.keys(FAMILY_TITLES).filter(k => !realFamilyKeys.has(k));
if (staleTitles.length) {
  console.error('*** TITULOS DE FAMILIA OBSOLETOS EN FAMILY_TITLES (ya no existen en el arbol) ***');
  staleTitles.forEach(k => console.error('  ' + k));
  process.exit(1);
}
console.log(`OK -- ${families.length} familias entrenables, todas con titulo (ninguna huerfana, ninguna obsoleta).`);

// ---------------------------------------------------------------
// 9.9) Variantes practicables por familia (para el modo dirigido del
//    selector nativo): toda hoja de libro (variante nombrada) y toda
//    hoja de trampa (secuencia completa documentada), agrupadas por
//    familia real. Mismo criterio: derivado del arbol, nunca a mano.
// ---------------------------------------------------------------
function collectVariantsForFamily (node, color, out) {
  out = out || [];
  if (node.leafOf && node.leafOf.userColor === color) {
    out.push({
      nodeId: node.id,
      title: node.leafOf.name,
      isTrap: node.kind === 'trap',
      trapTipo: node.kind === 'trap' ? node.leafOf.tipo : null
    });
  }
  (node.children || []).forEach(c => collectVariantsForFamily(c, color, out));
  return out;
}

families.forEach(f => {
  const root = forestOut.find(r => r.san === f.rootSan);
  f.variants = collectVariantsForFamily(root, f.userColor);
});


// ---------------------------------------------------------------
// 10) Escribir como fichero JS de runtime (mismo patron que
//    repertoire.js/trampas.js: "var NOMBRE = [...]" cargado por
//    index.html vía <script>), no JSON -- así el resultado queda
//    listo para que lo consuma game.js sin paso de conversion
//    adicional. Cabecera generada automaticamente, nunca editar a
//    mano: si hace falta cambiar algo, se cambia el dato de origen
//    (repertoire.js/trampas.js) o la tabla EXPLAIN_OVERRIDES de este
//    script, y se vuelve a ejecutar.
// ---------------------------------------------------------------
const OUTPUT_PATH = path.join(ASSETS_JS_DIR, 'repertoire_tree.js');
const header =
  '// repertoire_tree.js -- GENERADO AUTOMATICAMENTE por scripts/build_repertoire_tree.js.\n' +
  '// NO EDITAR A MANO: cualquier cambio se pierde en la siguiente ejecucion del\n' +
  '// script. Para cambiar contenido, edita repertoire.js/trampas.js (fuente de\n' +
  '// las jugadas y explicaciones) o la tabla EXPLAIN_OVERRIDES del script (para\n' +
  '// nodos compartidos por varias variantes), y vuelve a ejecutar:\n' +
  '//   node scripts/build_repertoire_tree.js\n' +
  '// Verificado letra a letra y con jugadas legales reales de chess.js en cada\n' +
  '// generacion -- ver la salida del script para el detalle de la verificacion.\n' +
  '//\n' +
  '// Estructura de cada nodo:\n' +
  '//   san, color        -- la jugada y quien la juega (\'w\'/\'b\')\n' +
  '//   explain           -- {idea, ventaja, debilidad}\n' +
  '//   kind              -- \'book\' (jugada de repertorio) | \'trap\' (rama de trampa)\n' +
  '//   trap              -- {id, tipo, name} solo si kind===\'trap\'\n' +
  '//   variantName       -- nombre de la variante/trampa, solo en el nodo donde\n' +
  '//                        queda identificada de forma inequivoca\n' +
  '//   variantColorId    -- indice de color estable (0-11) para variantes de\n' +
  '//                        libro, o la cadena \'trap\' para trampas (color fuera\n' +
  '//                        de la paleta normal, siempre el mismo)\n' +
  '//   leafOf            -- metadata de cierre de linea/trampa (name, overview,\n' +
  '//                        userColor, lineId o trapId/tipo), solo en las hojas\n' +
  '//   children          -- array de nodos hijos (ausente si es hoja sin mas)\n' +
  '\n' +
  'var REPERTOIRE_TREE = ' + JSON.stringify(forestOut, null, 2) + ';\n\n' +
  '// Familias entrenables (raiz + color de usuario) -- derivadas del\n' +
  '// arbol de arriba, con titulo curado a mano en el propio script.\n' +
  '// Consumidas por el selector nativo (OpeningFamilyCatalog.kt via\n' +
  '// el mismo espacio de ids, o directamente si algun dia se lee desde\n' +
  '// JS). Ver EstructurasCatalog.kt-style cross-check si aplica.\n' +
  'var REPERTOIRE_FAMILIES = ' + JSON.stringify(families, null, 2) + ';\n';

fs.writeFileSync(OUTPUT_PATH, header);

console.log(`\nEscrito ${OUTPUT_PATH}`);
console.log(`${forestOut.length} arboles raiz (una por cada primera jugada distinta). Raices: ${forestOut.map(r => r.san).join(', ')}`);

// ---------------------------------------------------------------
// 11) Generar tambien el catalogo Kotlin del selector nativo, desde
//    el mismo array "families" -- una sola fuente de verdad, nunca
//    dos catalogos mantenidos por separado que puedan divergir.
// ---------------------------------------------------------------
function kt (s) {
  return String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

const KOTLIN_OUTPUT_PATH = path.join(__dirname, '..', 'app', 'src', 'main', 'java', 'com', 'miguelaetxio', 'aperturasajedrez', 'data', 'OpeningFamilyCatalog.kt');

let kotlinSrc = '';
kotlinSrc += 'package com.miguelaetxio.aperturasajedrez.data\n\n';
kotlinSrc += '// GENERADO AUTOMATICAMENTE por scripts/build_repertoire_tree.js -- NO EDITAR A MANO.\n';
kotlinSrc += '// Cualquier cambio se pierde en la siguiente ejecucion del script. Para\n';
kotlinSrc += '// cambiar el titulo de una familia, edita FAMILY_TITLES en el script y\n';
kotlinSrc += '// vuelve a ejecutar "node scripts/build_repertoire_tree.js".\n';
kotlinSrc += '//\n';
kotlinSrc += '// Catalogo de familias de apertura entrenables (raiz + color de\n';
kotlinSrc += '// usuario) para el selector nativo del modo arbol (H01, S7). Cada\n';
kotlinSrc += '// familia lleva ademas la lista de variantes/trampas practicables por\n';
kotlinSrc += '// separado en modo dirigido (nodeId real del arbol JS).\n\n';
kotlinSrc += 'data class OpeningVariantEntry(\n';
kotlinSrc += '    val nodeId: String,\n';
kotlinSrc += '    val title: String,\n';
kotlinSrc += '    val isTrap: Boolean,\n';
kotlinSrc += '    val trapTipo: String?\n';
kotlinSrc += ')\n\n';
kotlinSrc += 'data class OpeningFamilyEntry(\n';
kotlinSrc += '    val id: String,\n';
kotlinSrc += '    val rootSan: String,\n';
kotlinSrc += '    val userColor: String,\n';
kotlinSrc += '    val title: String,\n';
kotlinSrc += '    val variants: List<OpeningVariantEntry>\n';
kotlinSrc += ')\n\n';
kotlinSrc += 'object OpeningFamilyCatalog {\n';
kotlinSrc += '    val entries: List<OpeningFamilyEntry> = listOf(\n';
families.forEach((f, fi) => {
  kotlinSrc += '        OpeningFamilyEntry(\n';
  kotlinSrc += `            id = "${kt(f.id)}",\n`;
  kotlinSrc += `            rootSan = "${kt(f.rootSan)}",\n`;
  kotlinSrc += `            userColor = "${kt(f.userColor)}",\n`;
  kotlinSrc += `            title = "${kt(f.title)}",\n`;
  kotlinSrc += '            variants = listOf(\n';
  f.variants.forEach((v, vi) => {
    kotlinSrc += '                OpeningVariantEntry(' +
      `nodeId = "${kt(v.nodeId)}", title = "${kt(v.title)}", isTrap = ${v.isTrap}, ` +
      `trapTipo = ${v.trapTipo ? '"' + kt(v.trapTipo) + '"' : 'null'})` +
      (vi < f.variants.length - 1 ? ',\n' : '\n');
  });
  kotlinSrc += '            )\n';
  kotlinSrc += '        )' + (fi < families.length - 1 ? ',\n' : '\n');
});
kotlinSrc += '    )\n';
kotlinSrc += '}\n';

fs.writeFileSync(KOTLIN_OUTPUT_PATH, kotlinSrc);
console.log(`Escrito ${KOTLIN_OUTPUT_PATH} (${families.length} familias, ${families.reduce((s, f) => s + f.variants.length, 0)} variantes/trampas en total).`);
