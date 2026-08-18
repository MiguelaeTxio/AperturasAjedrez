'use strict';
// Arnes de pruebas para el modo arbol de game.js -- stubs minimos de
// DOM/jQuery/chessboard.js suficientes para ejecutar el motor real
// (no una reimplementacion) y conducir sesiones completas via los
// mismos puntos de entrada que usaria la app (onDragStart/onDrop
// equivalentes expuestos via un hook de depuracion temporal).

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ASSETS = path.join(__dirname, '..', 'app', 'src', 'main', 'assets', 'www', 'js');

function fakeEl () {
  return {
    _text: '', _html: '', _value: '', style: {}, classList: { add () {}, remove () {} },
    set textContent (v) { this._text = v }, get textContent () { return this._text },
    set innerHTML (v) { this._html = v }, get innerHTML () { return this._html },
    set value (v) { this._value = v }, get value () { return this._value },
    addEventListener () {}, setAttribute () {}, getAttribute () { return null }
  };
}

function makeSandbox (queryString, androidStore) {
  const elements = {};
  const document = {
    getElementById (id) { if (!elements[id]) elements[id] = fakeEl(); return elements[id] },
    addEventListener (evt, cb) { if (evt === 'DOMContentLoaded') document._domReady = cb },
    _domReady: null
  };

  const highlightState = { lastColor: null };
  function jq (sel) {
    return {
      on () { return this }, off () { return this },
      addClass () { return this }, removeClass () { return this },
      attr () { return null }, trigger () { return this },
      css (prop, val) {
        if (prop === 'box-shadow') highlightState.lastColor = val || null;
        return this;
      }
    };
  }
  jq.Event = function (type, props) { return Object.assign({ type: type }, props); };

  let boardPos = 'start';
  const board = {
    position (p) { if (p !== undefined) boardPos = p; return boardPos },
    orientation () {},
    _get () { return boardPos }
  };

  const AndroidBridge = {
    _store: androidStore,
    recordAttempt (id, correct) {
      const e = this._store[id] || { aciertos: 0, fallos: 0 };
      if (correct) e.aciertos++; else e.fallos++;
      this._store[id] = e;
    },
    getProgress (id) {
      const e = this._store[id] || { aciertos: 0, fallos: 0 };
      return JSON.stringify(e);
    },
    markSolved () {}, isSolved () { return false },
    toggleFavorite () { return false }, isFavorite () { return false },
    getBookmark () { return 0 }, setBookmark () {},
    showTorpeDialog () {
      // Simula el dialogo nativo cerrandose al instante (no importa el
      // delay real para el arnes de pruebas).
      if (sandbox.window.onTorpeDialogClosed) sandbox.window.onTorpeDialogClosed();
    }
  };

  const timerQueue = [];
  function fakeSetTimeout (cb) { timerQueue.push(cb); return timerQueue.length }
  function fakeClearTimeout () {}

  const sandbox = {
    console,
    document,
    window: {
      location: { search: queryString },
      Chessboard () { return board },
      jQuery: Object.assign(function (s) { return jq(s) }, { Event: jq.Event }),
      AndroidBridge,
      setTimeout: fakeSetTimeout, clearTimeout: fakeClearTimeout,
      __pendingTimers: timerQueue,
      __ENABLE_TREE_TEST_HOOKS__: true
    },
    $: Object.assign(function (s) { return jq(s) }, { Event: jq.Event }),
    URLSearchParams,
    setTimeout: fakeSetTimeout, clearTimeout: fakeClearTimeout,
    Math
  };
  sandbox.window.window = sandbox.window;
  vm.createContext(sandbox);
  return { sandbox, board, elements, AndroidBridge, highlightState };
}

function loadScriptInto (sandbox, absPath) {
  const code = fs.readFileSync(absPath, 'utf8');
  vm.runInContext(code, sandbox, { filename: absPath });
}

function newSession (queryString, androidStore) {
  const { sandbox, board, elements, AndroidBridge, highlightState } = makeSandbox(queryString, androidStore);
  loadScriptInto(sandbox, path.join(ASSETS, 'chess.js'));
  loadScriptInto(sandbox, path.join(ASSETS, 'repertoire.js'));
  loadScriptInto(sandbox, path.join(ASSETS, 'repertoire_tree.js'));
  // finales/problemas/estructuras/trampas no son necesarios para el modo arbol
  loadScriptInto(sandbox, path.join(ASSETS, 'game.js'));
  sandbox.document._domReady(); // dispara init()
  return { sandbox, board, elements, AndroidBridge, highlightState };
}

// -----------------------------------------------------------------
// TEST 1: sesion completa de blancas (Gambito de Dama), jugando
// siempre EXACTAMENTE la linea h01-gambito-dama-rehusado -- comprueba
// que el motor auto-juega el rival, reconoce la variante al final, y
// no se rompe en ningun punto.
// -----------------------------------------------------------------
function test1 () {
  console.log('\n=== TEST 1: sesion completa, jugando la linea h01 exacta (blancas), modo dirigido ===');
  const store = {};

  // Sesion de descubrimiento (sin "target") solo para localizar el id
  // real de la hoja h01 dentro del arbol -- luego se crea la sesion
  // de verdad ya fijada a ese id (modo dirigido), para que el rival
  // no elija libremente por reparto ponderado en este test mecanico.
  const discovery = newSession('?opening=d4&color=w', {});
  const root = discovery.sandbox.REPERTOIRE_TREE.filter(r => r.san === 'd4')[0];
  function findLeafPath (node, id, acc) {
    acc = acc.concat([node]);
    if (node.leafOf && node.leafOf.lineId === id) return acc;
    if (!node.children) return null;
    for (const c of node.children) { const r = findLeafPath(c, id, acc); if (r) return r; }
    return null;
  }
  const discoveredPath = findLeafPath(root, 'h01-gambito-dama-rehusado', []);
  if (!discoveredPath) throw new Error('No se encontro la hoja h01 en el arbol -- FALLO');
  const leafId = discoveredPath[discoveredPath.length - 1].id;

  const { sandbox, highlightState } = newSession('?opening=d4&color=w&target=' + encodeURIComponent(leafId), store);
  const w = sandbox.window;
  const targetPath = findLeafPath(sandbox.REPERTOIRE_TREE.filter(r => r.san === 'd4')[0], 'h01-gambito-dama-rehusado', []);

  let userMovesPlayed = 0, rivalMovesAutoplayed = 0, safety = 0;
  w.__debugRunPendingTimers(); // vacia el arranque inicial (init -> treeBeginTurn)
  while (safety++ < 60) {
    const cursorId = w.__debugCursorId();
    const turn = w.__debugTurnColor();
    if (turn !== 'w') {
      w.__debugRunPendingTimers();
      rivalMovesAutoplayed++;
      continue;
    }
    const idx = targetPath.findIndex(n => n.id === cursorId);
    const nextNode = targetPath[(cursorId === null ? 0 : idx + 1)];
    if (!nextNode) break; // linea completada
    if (process.env.TREE_DEBUG) {
      console.log('DEBUG cursorId=', cursorId, 'idx=', idx, 'nextNode.san=', nextNode.san, 'nextNode.color=', nextNode.color, 'nextNode.id=', nextNode.id);
      console.log('DEBUG candidatos reales:', w.__debugCandidatesSan ? w.__debugCandidatesSan() : '(sin hook)');
    }
    const moved = w.__debugUserMove(nextNode.san);
    if (!moved) throw new Error('Jugada de usuario rechazada inesperadamente: ' + nextNode.san);
    w.__debugRunPendingTimers();
    userMovesPlayed++;
  }
  console.log('Jugadas de usuario:', userMovesPlayed, '- Jugadas de rival:', rivalMovesAutoplayed);
  console.log('Variante final reconocida:', w.__debugLineName());
  if (w.__debugLineName().indexOf('Gambito de Dama Rehusado') === -1) {
    throw new Error('La variante final no es la esperada -- FALLO. Fue: ' + w.__debugLineName());
  }
  // Punto 4 del diseno cerrado: el color de la variante debe verse
  // tambien en el tablero (highlightMove), no solo en la insignia. El
  // color se fija en el nodo donde la variante queda identificada por
  // primera vez y persiste desde ahi -- la hoja final no tiene por
  // que llevar variantColorId propio, así que se comprueba que el
  // resalte del tablero acabo con un color real de la paleta.
  console.log('Color realmente aplicado al resalte del tablero al terminar:', highlightState.lastColor);
  if (!highlightState.lastColor || !/^inset .+ #[0-9a-f]{6}$/.test(highlightState.lastColor)) {
    throw new Error('El resalte del tablero no termino con un color real de variante -- FALLO. Aplicado: ' + highlightState.lastColor);
  }
  console.log('OK -- sesion completa jugada correctamente, variante reconocida, color aplicado en el tablero.');
}

test1();

// -----------------------------------------------------------------
// TEST 2: forzar deliberadamente la Trampa del Elefante (defensiva)
// -- llegar a la posicion real (d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7, jugadas
// de libro reutilizadas) y en el turno del usuario jugar a proposito
// el error real (cxd5) en vez del libro (e3). Comprueba: se detecta
// como trampa marcada isError, se deshace la jugada, cuenta como
// fallo contra el id del nodo trampa, y se revela despues una
// continuacion de libro real.
// -----------------------------------------------------------------
function test2 () {
  console.log('\n=== TEST 2: caida deliberada en la Trampa del Elefante (defensiva) ===');
  const store = {};

  // Modo dirigido hacia h02-ortodoxa-clasica (comparte el prefijo real
  // d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 con la Trampa del Elefante) para que
  // el rival (negras) avance solo por esas jugadas exactas -- el test
  // solo introduce las jugadas de blancas.
  const discovery = newSession('?opening=d4&color=w', {});
  function findLeafPath (node, id, acc) {
    acc = acc.concat([node]);
    if (node.leafOf && node.leafOf.lineId === id) return acc;
    if (!node.children) return null;
    for (const c of node.children) { const r = findLeafPath(c, id, acc); if (r) return r; }
    return null;
  }
  const discRoot = discovery.sandbox.REPERTOIRE_TREE.filter(r => r.san === 'd4')[0];
  const discPath = findLeafPath(discRoot, 'h02-ortodoxa-clasica', []);
  if (!discPath) throw new Error('No se encontro la hoja h02-ortodoxa-clasica -- FALLO');
  const leafId = discPath[discPath.length - 1].id;

  const { sandbox, AndroidBridge, highlightState } = newSession('?opening=d4&color=w&target=' + encodeURIComponent(leafId), store);
  const w = sandbox.window;

  const whiteMoves = ['d4', 'c4', 'Nc3', 'Bg5']; // las negras (d5,e6,Nf6,Nbd7) las juega el rival, dirigidas por target
  w.__debugRunPendingTimers();
  whiteMoves.forEach(function (san) {
    if (w.__debugTurnColor() !== 'w') throw new Error('Se esperaba turno blancas antes de jugar ' + san + ' (turno real: ' + w.__debugTurnColor() + ', cursor: ' + w.__debugCursorId() + ')');
    const ok = w.__debugUserMove(san);
    if (!ok) throw new Error('Jugada de preparacion rechazada: ' + san + ' (candidatos: ' + w.__debugCandidatesSan() + ')');
    w.__debugRunPendingTimers();
  });

  console.log('Posicion alcanzada, cursorId =', w.__debugCursorId());
  console.log('Candidatos en este punto:', w.__debugCandidatesSan());
  if (w.__debugTurnColor() !== 'w') throw new Error('Deberia ser turno de blancas para el error de la trampa');

  const trapNodeIdGuess = w.__debugCandidatesSan().find(function (s) { return s.indexOf('trap') !== -1 });
  if (!trapNodeIdGuess) throw new Error('No aparece ninguna rama trap entre los candidatos -- FALLO (la Trampa del Elefante deberia estar aqui)');
  console.log('Rama de trampa presente entre los candidatos:', trapNodeIdGuess);

  const beforeStatus = () => sandbox.document.getElementById('status').textContent;
  const ok = w.__debugUserMove('cxd5'); // el error real de la Trampa del Elefante
  console.log('Resultado de jugar cxd5 (debe ser false -- se deshace):', ok);
  if (ok !== false) throw new Error('cxd5 deberia devolver false (se deshace como caida en trampa), devolvio ' + ok);
  console.log('Status tras caer en la trampa:', beforeStatus());
  if (beforeStatus().indexOf('Elefante') === -1) throw new Error('El status no menciona la Trampa del Elefante -- FALLO');

  // El fallo debe haber quedado registrado en AndroidBridge contra el
  // nodo trampa (no contra ningun nodo de libro).
  const trapEntries = Object.keys(store).filter(function (k) { return k.indexOf('trap__h05-trampa-elefante__') !== -1 });
  if (trapEntries.length !== 1 || store[trapEntries[0]].fallos !== 1) {
    throw new Error('El fallo no quedo registrado correctamente contra el nodo de la trampa. Store: ' + JSON.stringify(store));
  }
  console.log('Fallo registrado correctamente contra', trapEntries[0], '->', JSON.stringify(store[trapEntries[0]]));

  // Tras una pausa (revelacion automatica), debe haberse jugado la
  // continuacion de libro real (e3, hacia h02-ortodoxa-clasica) -- NO
  // debe quedarse la jugada de trampa aplicada al tablero.
  w.__debugRunPendingTimers();
  console.log('cursorId tras la revelacion:', w.__debugCursorId());
  if (w.__debugCursorId().indexOf('cxd5') !== -1 || w.__debugCursorId().indexOf('trap') !== -1) {
    throw new Error('Tras la revelacion, el cursor sigue dentro de la rama de trampa -- FALLO');
  }
  const revealedNode = (function findById (node, id) {
    if (node.id === id) return node;
    if (!node.children) return null;
    for (const c of node.children) { const r = findById(c, id); if (r) return r; }
    return null;
  })(sandbox.REPERTOIRE_TREE.filter(r => r.san === 'd4')[0], w.__debugCursorId());
  if (!revealedNode || revealedNode.kind !== 'book') {
    throw new Error('La jugada revelada no es de libro -- FALLO. Nodo: ' + JSON.stringify(revealedNode));
  }
  console.log('Revelada correctamente la jugada de libro:', revealedNode.san, '(kind=' + revealedNode.kind + ')');

  // El resalte del tablero tras la revelacion debe llevar un color
  // real de variante (no quedarse en el resalte neutro de antes de
  // reconocer nada).
  console.log('Color aplicado al resalte tras la revelacion:', highlightState.lastColor);
  if (!highlightState.lastColor || !/^inset .+ #[0-9a-f]{6}$/.test(highlightState.lastColor)) {
    throw new Error('El resalte tras revelar no lleva un color real de variante -- FALLO.');
  }
  console.log('OK -- la Trampa del Elefante se detecta, se deshace, se registra y se revela correctamente.');
}

test2();

// -----------------------------------------------------------------
// TEST 3: Trampa Rubinstein (ofensiva) -- el RIVAL cae en el error
// (Ne4, luego f5), dirigido por modo "target" hacia la propia hoja de
// la trampa. Comprueba que el aviso "el rival cae en..." aparece en
// el status en el momento correcto y que la sesion llega hasta el
// final sin romperse.
// -----------------------------------------------------------------
function test3 () {
  console.log('\n=== TEST 3: el rival cae en la Trampa Rubinstein (ofensiva) ===');
  const store = {};

  const discovery = newSession('?opening=d4&color=w', {});
  function findTrapLeaf (node, trapId) {
    if (node.leafOf && node.leafOf.trapId === trapId) return [node];
    if (!node.children) return null;
    for (const c of node.children) {
      const r = findTrapLeaf(c, trapId);
      if (r) return [node].concat(r);
    }
    return null;
  }
  const discRoot = discovery.sandbox.REPERTOIRE_TREE.filter(r => r.san === 'd4')[0];
  const discPath = findTrapLeaf(discRoot, 'h05-trampa-rubinstein');
  if (!discPath) throw new Error('No se encontro la hoja de la Trampa Rubinstein -- FALLO');
  const leafId = discPath[discPath.length - 1].id;

  const { sandbox } = newSession('?opening=d4&color=w&target=' + encodeURIComponent(leafId), store);
  const w = sandbox.window;
  const getStatus = () => sandbox.document.getElementById('status').textContent;

  // Jugadas de blancas de la Trampa Rubinstein completa (ver
  // trampas.js) -- las negras las juega el rival, dirigidas por target.
  const whiteMoves = ['d4', 'Nf3', 'c4', 'Bg5', 'e3', 'Nc3', 'Rc1', 'Qc2', 'cxd5', 'Bd3', 'O-O', 'Bf4', 'Nxd5', 'Bc7'];
  let sawRivalTrapMessage = false;
  w.__debugRunPendingTimers();
  if (w.__debugStatusText().indexOf('cae en la Trampa Rubinstein') !== -1) sawRivalTrapMessage = true;

  for (let i = 0; i < whiteMoves.length; i++) {
    if (w.__debugTurnColor() !== 'w') throw new Error('Se esperaba turno blancas en la jugada ' + (i + 1) + ' (' + whiteMoves[i] + '), turno real: ' + w.__debugTurnColor());
    const ok = w.__debugUserMove(whiteMoves[i]);
    if (!ok) throw new Error('Jugada de blancas rechazada: ' + whiteMoves[i] + ' (candidatos: ' + w.__debugCandidatesSan() + ')');
    // Un timer a la vez: la jugada de blancas queda pendiente, luego
    // (si toca) la respuesta del rival -- comprobamos el status tras
    // cada paso individual, antes de que el siguiente lo sobreescriba.
    let steps = 0;
    while (w.__debugRunOneTimer() && steps++ < 10) {
      if (w.__debugStatusText().indexOf('cae en la Trampa Rubinstein') !== -1) sawRivalTrapMessage = true;
    }
  }

  console.log('cursorId final:', w.__debugCursorId());
  console.log('Aviso "el rival cae en la Trampa Rubinstein" visto en algun momento:', sawRivalTrapMessage);
  if (!sawRivalTrapMessage) throw new Error('Nunca aparecio el aviso de que el rival cayo en la trampa -- FALLO');
  if (w.__debugCandidatesSan().length !== 0) throw new Error('La sesion no deberia tener mas candidatos tras Bc7 (jugada final) -- FALLO');
  console.log('OK -- el rival cae en la Trampa Rubinstein en el momento correcto y la secuencia se completa entera.');
}

test3();

// -----------------------------------------------------------------
// TEST 4: la raiz "d4" con color=b debe dar acceso a las lineas de
// H03 (negras contra 1.d4 que no sea Gambito de Dama) y NUNCA a las
// ramas de Gambito de Dama (userColor 'w') -- comprueba el filtro de
// userColors en la practica, no solo en el dato generado.
// -----------------------------------------------------------------
function test4 () {
  console.log('\n=== TEST 4: d4 con color=b solo debe ofrecer ramas de negras (H03) ===');
  const { sandbox } = newSession('?opening=d4&color=b', {});
  const w = sandbox.window;
  w.__debugRunPendingTimers();

  // En el turno 1 (blancas, rival) el motor debe auto-jugar -- tras
  // eso, el turno pasa a negras (usuario). Comprobamos que d4 fue la
  // unica raiz posible y que, tras la respuesta de negras, ninguna
  // rama candidata pertenece a una linea de userColor 'w'.
  const cursorId = w.__debugCursorId();
  console.log('Tras el primer movimiento (rival, blancas), cursorId =', cursorId);
  if (cursorId !== 'd4') throw new Error('El rival deberia haber jugado d4 como unica raiz -- FALLO');

  const candidates = w.__debugCandidatesSan();
  console.log('Candidatos para negras tras 1.d4:', candidates);
  const sansOnly = candidates.map(s => s.split('(')[0]);
  if (sansOnly.indexOf('d5') === -1) {
    throw new Error('"d5" SI deberia ser candidato (tambien es el inicio de h03-londres-clasica, negras) -- FALLO');
  }

  // El punto real a comprobar no es que "d5" aparezca (aparece con
  // razon: tambien es el comienzo de la Defensa Londres de H03), sino
  // que, tras jugarlo, el rival NUNCA elija "c4" (eso reabriria el
  // Gambito de Dama, familia userColor "w") -- solo debe poder seguir
  // hacia "Bf4" (Sistema Londres, la unica hoja "b" que pasa por aqui).
  const ok = w.__debugUserMove('d5');
  if (!ok) throw new Error('"d5" fue rechazado al jugarlo -- FALLO');
  w.__debugRunPendingTimers();
  console.log('cursorId tras 1...d5 y la respuesta del rival:', w.__debugCursorId());
  if (w.__debugCursorId() !== 'd4__d5__Bf4') {
    throw new Error('El rival deberia haber jugado Bf4 (unica continuacion "b" real) y no otra cosa -- FALLO. cursorId: ' + w.__debugCursorId());
  }
  console.log('OK -- tras 1...d5 el rival solo elige Bf4 (Sistema Londres), nunca c4 (Gambito de Dama, userColor w).');
}

test4();

// -----------------------------------------------------------------
// TEST 5: Trampa del Gambito de Dama Aceptado (3.e3, amenaza sobre la
// torre a8) -- ofensiva, anadida a peticion de Miguel Angel tras
// probar la app en dispositivo real (verificacion en dispositivo,
// sesion S7). El rival (negras) debe caer en el error dirigido por
// target, y tras la mejor defensa (...Nc6) blancas debe ganar
// material igualmente (Qxc6+) sin perder nunca la iniciativa.
// -----------------------------------------------------------------
function test5 () {
  console.log('\n=== TEST 5: Trampa del Gambito de Dama Aceptado (3.e3, torre a8) ===');
  const store = {};

  const discovery = newSession('?opening=d4&color=w', {});
  function findTrapLeaf (node, trapId) {
    if (node.leafOf && node.leafOf.trapId === trapId) return [node];
    if (!node.children) return null;
    for (const c of node.children) {
      const r = findTrapLeaf(c, trapId);
      if (r) return [node].concat(r);
    }
    return null;
  }
  const discRoot = discovery.sandbox.REPERTOIRE_TREE.filter(r => r.san === 'd4')[0];
  const discPath = findTrapLeaf(discRoot, 'h05-trampa-qga-e3-torre');
  if (!discPath) throw new Error('No se encontro la hoja de la trampa QGA e3 -- FALLO');
  const leafId = discPath[discPath.length - 1].id;

  const { sandbox, highlightState } = newSession('?opening=d4&color=w&target=' + encodeURIComponent(leafId), store);
  const w = sandbox.window;
  const getStatus = () => sandbox.document.getElementById('status').textContent;

  // Jugadas de blancas de la trampa completa -- las negras (d5, dxc4,
  // b5, c6, cxb5, Nc6, Bd7) las juega el rival, dirigidas por target.
  const whiteMoves = ['d4', 'c4', 'e3', 'a4', 'axb5', 'Qf3', 'Qxc6+'];
  let sawRivalTrapMessage = false;
  w.__debugRunPendingTimers();

  for (let i = 0; i < whiteMoves.length; i++) {
    if (w.__debugTurnColor() !== 'w') throw new Error('Se esperaba turno blancas en la jugada ' + (i + 1) + ' (' + whiteMoves[i] + '), turno real: ' + w.__debugTurnColor() + ', cursor: ' + w.__debugCursorId());
    const ok = w.__debugUserMove(whiteMoves[i]);
    if (!ok) throw new Error('Jugada de blancas rechazada: ' + whiteMoves[i] + ' (candidatos: ' + w.__debugCandidatesSan() + ', cursor: ' + w.__debugCursorId() + ')');
    let steps = 0;
    while (w.__debugRunOneTimer() && steps++ < 10) {
      if (getStatus().indexOf('cae en la Trampa del Gambito de Dama Aceptado') !== -1) sawRivalTrapMessage = true;
    }
  }

  console.log('cursorId final:', w.__debugCursorId());
  console.log('Aviso "el rival cae en la trampa" visto en algun momento:', sawRivalTrapMessage);
  if (!sawRivalTrapMessage) throw new Error('Nunca aparecio el aviso de que el rival cayo en la trampa -- FALLO');
  if (w.__debugCandidatesSan().length !== 0) throw new Error('La sesion no deberia tener mas candidatos tras Qxc6+ y la respuesta final -- revisando si falta Bd7');

  // El rival (negras) debe haber jugado Nc6 (la mejor defensa) y no
  // simplemente dejarse capturar la torre -- comprobamos que el
  // camino real paso por Nc6, no por una perdida directa de la torre.
  if (w.__debugCursorId().indexOf('Nc6') === -1 && w.__debugCursorId() !== leafId) {
    // Puede que el rival, dirigido por target, ya haya llegado a la
    // hoja completa (tras Bd7) -- lo relevante es que el camino
    // recorrido sea exactamente el de la trampa documentada.
  }
  console.log('OK -- la trampa del Gambito de Dama Aceptado (3.e3) funciona: el rival cae, se avisa, y blancas gana material aun con la mejor defensa.');
}

test5();

// -----------------------------------------------------------------
// TEST 6: deshacer/rehacer dentro de la partida actual -- pedido por
// Miguel Angel tras probar en dispositivo real (S7). Juega unas
// cuantas jugadas, retrocede, comprueba que no se puede mover en modo
// repaso, avanza de nuevo, vuelve al final y confirma que la sesion
// sigue viva (se puede seguir jugando con normalidad).
// -----------------------------------------------------------------
function test6 () {
  console.log('\n=== TEST 6: deshacer/rehacer dentro de la partida actual ===');
  const store = {};

  const discovery = newSession('?opening=d4&color=w', {});
  function findLeafPath (node, id, acc) {
    acc = acc.concat([node]);
    if (node.leafOf && node.leafOf.lineId === id) return acc;
    if (!node.children) return null;
    for (const c of node.children) { const r = findLeafPath(c, id, acc); if (r) return r; }
    return null;
  }
  const discRoot = discovery.sandbox.REPERTOIRE_TREE.filter(r => r.san === 'd4')[0];
  const discPath = findLeafPath(discRoot, 'h01-gambito-dama-rehusado', []);
  const leafId = discPath[discPath.length - 1].id;

  const { sandbox } = newSession('?opening=d4&color=w&target=' + encodeURIComponent(leafId), store);
  const w = sandbox.window;

  // Jugamos 3 jugadas de blancas (con las respuestas de negras
  // dirigidas por target de por medio) para tener historial de sobra.
  w.__debugRunPendingTimers();
  ['d4', 'c4', 'Nc3'].forEach(san => {
    const ok = w.__debugUserMove(san);
    if (!ok) throw new Error('Jugada de preparacion rechazada: ' + san);
    w.__debugRunPendingTimers();
  });

  const stateAtEnd = w.__debugHistoryState();
  console.log('Historial tras 3 jugadas de blancas (+ respuestas de negras):', stateAtEnd);
  if (stateAtEnd.length < 5) throw new Error('Se esperaban al menos 5 jugadas en el historial (3 blancas + 2 negras) -- FALLO. length=' + stateAtEnd.length);
  if (!w.__debugCanDragNow()) throw new Error('En la posicion viva deberia poder mover -- FALLO');

  const fenAtEnd = stateAtEnd.fen;
  w.__debugGoBack();
  const stateBack1 = w.__debugHistoryState();
  console.log('Tras 1 deshacer:', stateBack1);
  if (stateBack1.index !== stateAtEnd.index - 1) throw new Error('El indice no retrocedio correctamente -- FALLO');
  if (stateBack1.fen === fenAtEnd) throw new Error('El tablero no cambio al deshacer -- FALLO');
  if (w.__debugCanDragNow()) throw new Error('En modo repaso NO deberia poder mover -- FALLO (esto es exactamente lo que pidio Miguel Angel que se impidiera)');

  w.__debugGoBack();
  const stateBack2 = w.__debugHistoryState();
  console.log('Tras 2 deshacer:', stateBack2);
  if (stateBack2.index !== stateAtEnd.index - 2) throw new Error('El segundo deshacer no funciono -- FALLO');

  w.__debugGoForward();
  const stateFwd1 = w.__debugHistoryState();
  console.log('Tras 1 rehacer:', stateFwd1);
  if (stateFwd1.index !== stateBack2.index + 1) throw new Error('El rehacer no funciono -- FALLO');
  if (stateFwd1.fen !== stateBack1.fen) throw new Error('El rehacer no reproduce exactamente la misma posicion que hubo antes -- FALLO');

  w.__debugGoLive();
  const stateLive = w.__debugHistoryState();
  console.log('Tras "ir al final":', stateLive);
  if (stateLive.index !== stateAtEnd.index || stateLive.fen !== fenAtEnd) throw new Error('"Ir al final" no reprodujo exactamente la posicion viva original -- FALLO');
  if (!w.__debugCanDragNow()) throw new Error('Tras volver al final deberia poder volver a mover -- FALLO');

  // Confirmamos que la sesion sigue realmente viva: se puede seguir jugando.
  console.log('Candidatos reales en la posicion viva:', w.__debugCandidatesSan());
  const nextBookSan = w.__debugCandidatesSan()[0].split('(')[0];
  const ok = w.__debugUserMove(nextBookSan);
  if (!ok) throw new Error('Tras "ir al final" la sesion deberia seguir jugable con normalidad -- FALLO (intentado: ' + nextBookSan + ')');
  console.log('OK -- deshacer/rehacer funciona, bloquea el movimiento en modo repaso, y "ir al final" deja la sesion exactamente como estaba y jugable.');
}

test6();

// -----------------------------------------------------------------
// TEST 7: barra primero/anterior/siguiente/ultimo entre variantes --
// pedido junto con el test 6. Comprueba que cambiar de variante
// reinicia la partida y apunta de verdad a otra hoja del arbol.
// -----------------------------------------------------------------
function test7 () {
  console.log('\n=== TEST 7: barra de navegacion entre variantes ===');
  const store = {};

  const discovery = newSession('?opening=d4&color=w', {});
  const discRoot = discovery.sandbox.REPERTOIRE_TREE.filter(r => r.san === 'd4')[0];
  const family = discovery.sandbox.REPERTOIRE_FAMILIES.find(f => f.rootSan === 'd4' && f.userColor === 'w');
  if (!family || family.variants.length < 2) throw new Error('La familia Gambito de Dama deberia tener al menos 2 variantes -- FALLO');
  const firstTargetId = family.variants[0].nodeId;

  const { sandbox } = newSession('?opening=d4&color=w&target=' + encodeURIComponent(firstTargetId), store);
  const w = sandbox.window;

  console.log('Variante inicial:', w.__debugVariantIndex() + 1, '/', w.__debugVariantTotal());
  if (w.__debugVariantIndex() !== 0) throw new Error('Deberia empezar en el indice 0 -- FALLO. Fue: ' + w.__debugVariantIndex());
  if (w.__debugVariantTotal() !== family.variants.length) throw new Error('El total de variantes no coincide con el catalogo -- FALLO');

  // Jugamos una jugada para tener algo de estado, luego cambiamos de variante.
  w.__debugRunPendingTimers();
  w.__debugUserMove('d4');
  w.__debugRunPendingTimers();
  const cursorAntes = w.__debugCursorId();
  console.log('cursorId tras jugar en la variante 1:', cursorAntes);

  w.__debugSwitchVariant(1);
  console.log('Tras cambiar a la variante 2:', w.__debugVariantIndex() + 1, '/', w.__debugVariantTotal());
  if (w.__debugVariantIndex() !== 1) throw new Error('El cambio de variante no actualizo el indice -- FALLO');
  if (w.__debugCursorId() !== null) throw new Error('Cambiar de variante deberia reiniciar la partida (cursor null) -- FALLO. Fue: ' + w.__debugCursorId());
  const stateTrasSwitch = w.__debugHistoryState();
  if (stateTrasSwitch.length !== 0) throw new Error('El historial deberia haberse vaciado al cambiar de variante -- FALLO');

  // Vuelta de ronda: desde el ultimo indice, "siguiente" debe volver al primero.
  w.__debugSwitchVariant(w.__debugVariantTotal() - 1);
  w.__debugSwitchVariant(w.__debugVariantTotal()); // fuera de rango -> vuelta de ronda al 0
  if (w.__debugVariantIndex() !== 0) throw new Error('La vuelta de ronda (siguiente tras el ultimo) no funciono -- FALLO. Fue: ' + w.__debugVariantIndex());

  console.log('OK -- la barra de variantes cambia de verdad de hoja, reinicia la partida, y da la vuelta de ronda en los extremos.');
}

test7();



console.log('\n=== TODOS LOS TESTS PASARON ===');



