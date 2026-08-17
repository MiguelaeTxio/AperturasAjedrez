// repertoire_tree.js -- GENERADO AUTOMATICAMENTE por scripts/build_repertoire_tree.js.
// NO EDITAR A MANO: cualquier cambio se pierde en la siguiente ejecucion del
// script. Para cambiar contenido, edita repertoire.js/trampas.js (fuente de
// las jugadas y explicaciones) o la tabla EXPLAIN_OVERRIDES del script (para
// nodos compartidos por varias variantes), y vuelve a ejecutar:
//   node scripts/build_repertoire_tree.js
// Verificado letra a letra y con jugadas legales reales de chess.js en cada
// generacion -- ver la salida del script para el detalle de la verificacion.
//
// Estructura de cada nodo:
//   san, color        -- la jugada y quien la juega ('w'/'b')
//   explain           -- {idea, ventaja, debilidad}
//   kind              -- 'book' (jugada de repertorio) | 'trap' (rama de trampa)
//   trap              -- {id, tipo, name} solo si kind==='trap'
//   variantName       -- nombre de la variante/trampa, solo en el nodo donde
//                        queda identificada de forma inequivoca
//   variantColorId    -- indice de color estable (0-11) para variantes de
//                        libro, o la cadena 'trap' para trampas (color fuera
//                        de la paleta normal, siempre el mismo)
//   leafOf            -- metadata de cierre de linea/trampa (name, overview,
//                        userColor, lineId o trapId/tipo), solo en las hojas
//   children          -- array de nodos hijos (ausente si es hoja sin mas)

var REPERTOIRE_TREE = [
  {
    "id": "d4",
    "san": "d4",
    "color": "w",
    "explain": {
      "idea": "Ocupa el centro y abre la diagonal del alfil de dama.",
      "ventaja": "Controla e5 y c5, y prepara un desarrollo rapido sin comprometerse todavia con el plan concreto (Gambito de Dama, Sistema Londres, Trompowsky...).",
      "debilidad": "Ninguna real a este nivel; es la jugada mas solida y flexible para empezar."
    },
    "kind": "book",
    "userColors": [
      "b",
      "w"
    ],
    "children": [
      {
        "id": "d4__d5",
        "san": "d5",
        "color": "b",
        "explain": {
          "idea": "Negras responden en el centro con la misma logica: ocupar y no ceder espacio.",
          "ventaja": "Mantiene la simetria y no debilita ninguna casilla.",
          "debilidad": "Dificulta el desarrollo del alfil de casillas claras de negras, que queda encerrado tras la cadena de peones."
        },
        "kind": "book",
        "userColors": [
          "b",
          "w"
        ],
        "children": [
          {
            "id": "d4__d5__c4",
            "san": "c4",
            "color": "w",
            "explain": {
              "idea": "El Gambito de Dama: blancas ofrecen el peon c4 para atacar el centro de negras desde el flanco.",
              "ventaja": "Si negras capturan (dxc4), blancas recuperan el peon con facilidad y quedan con mejor desarrollo; si negras sostienen d5, blancas ganan tiempo y espacio en el flanco de dama.",
              "debilidad": "Cede momentaneamente el control exclusivo del centro y abre ligeramente la posicion del rey mientras no se ha enrocado."
            },
            "kind": "book",
            "userColors": [
              "w"
            ],
            "children": [
              {
                "id": "d4__d5__c4__e6",
                "san": "e6",
                "color": "b",
                "explain": {
                  "idea": "Sostiene d5 sin capturar en c4, dejando abierta la opcion de transponer a varios sistemas (Ortodoxa, Tarrasch, Semi-Tarrasch...) segun la siguiente jugada.",
                  "ventaja": "Posicion solida y flexible, la mas fiable estadisticamente para negras contra 1.d4.",
                  "debilidad": "El alfil de casillas claras de negras queda temporalmente encerrado tras la cadena de peones e6-d5; liberarlo (o abrir el centro, en el caso del Tarrasch) es uno de los planes centrales de negras en el medio juego."
                },
                "kind": "book",
                "userColors": [
                  "w"
                ],
                "children": [
                  {
                    "id": "d4__d5__c4__e6__Nc3",
                    "san": "Nc3",
                    "color": "w",
                    "explain": {
                      "idea": "Desarrolla una pieza y refuerza el control sobre d5, manteniendo abiertas varias continuaciones (Bg5, cambio en d5, e3...) segun el plan que se elija despues.",
                      "ventaja": "Pieza activa que no bloquea el peon c4 y sirve de base para varios planes (ataque directo con Bg5, cambio en d5 con minoria de peones, o desarrollo solido con e3).",
                      "debilidad": "Ninguna relevante en este orden de jugadas."
                    },
                    "kind": "book",
                    "userColors": [
                      "w"
                    ],
                    "children": [
                      {
                        "id": "d4__d5__c4__e6__Nc3__Nf6",
                        "san": "Nf6",
                        "color": "b",
                        "explain": {
                          "idea": "Desarrolla la pieza mas natural, presionando e4 y preparando el enroque corto.",
                          "ventaja": "Jugada solida que no compromete nada y acelera la seguridad del rey.",
                          "debilidad": "Ninguna relevante; es la respuesta mas natural en la posicion."
                        },
                        "kind": "book",
                        "userColors": [
                          "w"
                        ],
                        "children": [
                          {
                            "id": "d4__d5__c4__e6__Nc3__Nf6__Bg5",
                            "san": "Bg5",
                            "color": "w",
                            "explain": {
                              "idea": "Clava el caballo de f6 contra la dama, aumentando la presion sobre el centro y sobre d5.",
                              "ventaja": "Pieza activa fuera de la cadena de peones antes de que quede encerrada, y prepara e3 seguido de un desarrollo rapido.",
                              "debilidad": "El alfil puede acabar siendo blanco de ...h6 y ...g5 mas adelante si negras busca contrajuego agresivo, aunque no es una amenaza inmediata."
                            },
                            "kind": "book",
                            "userColors": [
                              "w"
                            ],
                            "children": [
                              {
                                "id": "d4__d5__c4__e6__Nc3__Nf6__Bg5__Be7",
                                "san": "Be7",
                                "color": "b",
                                "explain": {
                                  "idea": "Rompe la clavada preparando el enroque sin debilitar la estructura de peones con ...h6 tan pronto.",
                                  "ventaja": "Desarrollo solido, mantiene la posicion flexible y lista para enrocar en la siguiente jugada.",
                                  "debilidad": "Deja pasar la opcion mas combativa ...h6 seguido de ...O-O; ambas son teoria principal."
                                },
                                "kind": "book",
                                "userColors": [
                                  "w"
                                ],
                                "variantName": "Gambito de Dama Rehusado -- linea principal",
                                "variantColorId": 11,
                                "children": [
                                  {
                                    "id": "d4__d5__c4__e6__Nc3__Nf6__Bg5__Be7__e3",
                                    "san": "e3",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Abre la diagonal del alfil de rey y refuerza d4, preparando el desarrollo del resto de piezas menores.",
                                      "ventaja": "Jugada solida y flexible que no compromete la estructura y deja varias opciones abiertas (Bd3 o Be2, Nf3, enroque corto).",
                                      "debilidad": "Encierra temporalmente al propio alfil de casillas claras de blancas, simetrico al problema que tiene negras con el suyo."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "w"
                                    ],
                                    "children": [
                                      {
                                        "id": "d4__d5__c4__e6__Nc3__Nf6__Bg5__Be7__e3__O-O",
                                        "san": "O-O",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Pone el rey a salvo y conecta las torres antes de decidir el plan de medio juego.",
                                          "ventaja": "Seguridad del rey resuelta; a partir de aqui negras puede pensar en ...h6, ...b6 o el plan clasico de minoria en el flanco de dama.",
                                          "debilidad": "Ninguna; es la jugada mas natural para completar el desarrollo basico."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "w"
                                        ],
                                        "leafOf": {
                                          "lineId": "h01-gambito-dama-rehusado",
                                          "name": "Gambito de Dama Rehusado -- linea principal",
                                          "userColor": "w",
                                          "overview": "Blancas ceden el centro de peones a cambio de desarrollo rapido y presion sobre d5. Negras rehusan el gambito sosteniendo d5 con e6, a costa de encerrar temporalmente su alfil de casillas claras. Es la base clasica de todo el repertorio de dama de blancas: solida, poco arriesgada, y con planes de medio juego muy estudiados (minoria de peones en el flanco de dama, ataque central con e3-e4 tras completar el desarrollo)."
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "d4__d5__c4__e6__Nc3__Nf6__Bg5__Nbd7",
                                "san": "Nbd7",
                                "color": "b",
                                "explain": {
                                  "idea": "Defensa Ortodoxa clasica: desarrolla el caballo de dama por d7 en vez de romper la clavada de inmediato, preparando recapturar en f6 con la pieza si hace falta.",
                                  "ventaja": "Desarrollo solido y flexible que mantiene varias opciones (...Be7, ...h6, ...c6) abiertas para mas adelante.",
                                  "debilidad": "Deja la clavada sin resolver un turno mas, aunque no supone ningun riesgo inmediato."
                                },
                                "kind": "book",
                                "userColors": [
                                  "w"
                                ],
                                "variantName": "Defensa Ortodoxa -- linea clasica",
                                "variantColorId": 7,
                                "children": [
                                  {
                                    "id": "d4__d5__c4__e6__Nc3__Nf6__Bg5__Nbd7__e3",
                                    "san": "e3",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Abre la diagonal del alfil de rey y refuerza d4, preparando el desarrollo del resto de piezas menores.",
                                      "ventaja": "Jugada solida y flexible que deja varias opciones abiertas (Nf3, Bd3 o Be2, Rc1).",
                                      "debilidad": "Encierra temporalmente al propio alfil de casillas claras de blancas."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "w"
                                    ],
                                    "children": [
                                      {
                                        "id": "d4__d5__c4__e6__Nc3__Nf6__Bg5__Nbd7__e3__Be7",
                                        "san": "Be7",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Rompe la clavada preparando el enroque, ya con el caballo de dama desarrollado en d7 como apoyo.",
                                          "ventaja": "Desarrollo solido y completo, listo para enrocar en la siguiente jugada.",
                                          "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "w"
                                        ],
                                        "children": [
                                          {
                                            "id": "d4__d5__c4__e6__Nc3__Nf6__Bg5__Nbd7__e3__Be7__Nf3",
                                            "san": "Nf3",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Desarrolla la ultima pieza menor del flanco de rey y prepara el enroque corto.",
                                              "ventaja": "Jugada solida que completa el desarrollo antes de decidir el plan de medio juego.",
                                              "debilidad": "Ninguna relevante."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "w"
                                            ],
                                            "children": [
                                              {
                                                "id": "d4__d5__c4__e6__Nc3__Nf6__Bg5__Nbd7__e3__Be7__Nf3__O-O",
                                                "san": "O-O",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Pone el rey a salvo y conecta las torres antes de decidir el plan de medio juego.",
                                                  "ventaja": "Seguridad del rey resuelta.",
                                                  "debilidad": "Ninguna; es la jugada mas natural para completar el desarrollo basico."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "w"
                                                ],
                                                "leafOf": {
                                                  "lineId": "h02-ortodoxa-clasica",
                                                  "name": "Defensa Ortodoxa -- linea clasica",
                                                  "userColor": "w",
                                                  "overview": "Familia Gambito de Dama: el plan mas tradicional y solido de todos contra el Rehusado. Negras desarrolla el caballo de dama por d7 (en vez de jugar la Variante de Cambio o transponer a la Eslava), y blancas responde con el desarrollo clasico Bg5-Nf3, reservando la torre para la columna c y el plan de minoria de peones para mas adelante en el medio juego."
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "id": "trap__h05-trampa-elefante__8",
                                    "san": "cxd5",
                                    "color": "w",
                                    "explain": {
                                      "idea": "ERROR: blancas cae en la trampa pensando que gana un peon limpio, porque cree que el caballo de f6 esta clavado y no puede recapturar.",
                                      "ventaja": "Ninguna real -- la captura parece ganar un peon pero pierde una pieza.",
                                      "debilidad": "La supuesta clavada era ilusoria: hay una pieza detras (el caballo de d7) que puede recapturar sin problema."
                                    },
                                    "kind": "trap",
                                    "userColors": [
                                      "w"
                                    ],
                                    "trap": {
                                      "id": "h05-trampa-elefante",
                                      "tipo": "defensiva",
                                      "name": "Trampa del Elefante (Elephant Trap)"
                                    },
                                    "isError": true,
                                    "variantName": "Trampa del Elefante (Elephant Trap)",
                                    "variantColorId": "trap",
                                    "children": [
                                      {
                                        "id": "trap__h05-trampa-elefante__9",
                                        "san": "exd5",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Negras recaptura de forma natural con el peon.",
                                          "ventaja": "Mantiene la estructura y la trampa sigue tendida.",
                                          "debilidad": "Ninguna."
                                        },
                                        "kind": "trap",
                                        "userColors": [
                                          "w"
                                        ],
                                        "trap": {
                                          "id": "h05-trampa-elefante",
                                          "tipo": "defensiva",
                                          "name": "Trampa del Elefante (Elephant Trap)"
                                        },
                                        "children": [
                                          {
                                            "id": "trap__h05-trampa-elefante__10",
                                            "san": "Nxd5",
                                            "color": "w",
                                            "explain": {
                                              "idea": "ERROR decisivo: blancas repite el mismo error, capturando el peon de d5 con el caballo, todavia convencida de que Nf6 esta clavado.",
                                              "ventaja": "Ninguna -- parece ganar un segundo peon.",
                                              "debilidad": "El caballo f6 puede capturar sin problema: si Nxd5 se responde Bxd8, el rey blanco recibe jaque de alfil y pierde el derecho a enroque, perdiendo la partida a cambio de solo un peon."
                                            },
                                            "kind": "trap",
                                            "userColors": [
                                              "w"
                                            ],
                                            "trap": {
                                              "id": "h05-trampa-elefante",
                                              "tipo": "defensiva",
                                              "name": "Trampa del Elefante (Elephant Trap)"
                                            },
                                            "isError": true,
                                            "children": [
                                              {
                                                "id": "trap__h05-trampa-elefante__11",
                                                "san": "Nxd5",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Negras ejecuta la trampa: el caballo f6 ignora la clavada y captura en d5, ganando una pieza limpia.",
                                                  "ventaja": "Negras queda una pieza arriba.",
                                                  "debilidad": "Ninguna -- la trampa esta consumada."
                                                },
                                                "kind": "trap",
                                                "userColors": [
                                                  "w"
                                                ],
                                                "trap": {
                                                  "id": "h05-trampa-elefante",
                                                  "tipo": "defensiva",
                                                  "name": "Trampa del Elefante (Elephant Trap)"
                                                },
                                                "children": [
                                                  {
                                                    "id": "trap__h05-trampa-elefante__12",
                                                    "san": "Bxd8",
                                                    "color": "w",
                                                    "explain": {
                                                      "idea": "Blancas intenta compensar capturando la dama con el alfil, unica forma de no quedar simplemente una pieza abajo sin nada a cambio.",
                                                      "ventaja": "Recupera la dama, igualando material momentaneamente.",
                                                      "debilidad": "El alfil queda atrapado en d8 y el jaque que sigue le cuesta a blancas el enroque."
                                                    },
                                                    "kind": "trap",
                                                    "userColors": [
                                                      "w"
                                                    ],
                                                    "trap": {
                                                      "id": "h05-trampa-elefante",
                                                      "tipo": "defensiva",
                                                      "name": "Trampa del Elefante (Elephant Trap)"
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "trap__h05-trampa-elefante__13",
                                                        "san": "Bb4+",
                                                        "color": "b",
                                                        "explain": {
                                                          "idea": "Jaque de alfil que explota que blancas no puede interponer nada util en la diagonal.",
                                                          "ventaja": "Fuerza a blancas a mover la dama a una casilla incomoda.",
                                                          "debilidad": "Ninguna."
                                                        },
                                                        "kind": "trap",
                                                        "userColors": [
                                                          "w"
                                                        ],
                                                        "trap": {
                                                          "id": "h05-trampa-elefante",
                                                          "tipo": "defensiva",
                                                          "name": "Trampa del Elefante (Elephant Trap)"
                                                        },
                                                        "children": [
                                                          {
                                                            "id": "trap__h05-trampa-elefante__14",
                                                            "san": "Qd2",
                                                            "color": "w",
                                                            "explain": {
                                                              "idea": "Unica forma razonable de bloquear el jaque manteniendo la dama activa.",
                                                              "ventaja": "Bloquea el jaque.",
                                                              "debilidad": "La dama queda clavada de inmediato contra el rey en la misma diagonal."
                                                            },
                                                            "kind": "trap",
                                                            "userColors": [
                                                              "w"
                                                            ],
                                                            "trap": {
                                                              "id": "h05-trampa-elefante",
                                                              "tipo": "defensiva",
                                                              "name": "Trampa del Elefante (Elephant Trap)"
                                                            },
                                                            "children": [
                                                              {
                                                                "id": "trap__h05-trampa-elefante__15",
                                                                "san": "Bxd2+",
                                                                "color": "b",
                                                                "explain": {
                                                                  "idea": "Negras captura la dama con jaque, aprovechando la clavada que acaba de crearse.",
                                                                  "ventaja": "Gana la dama sin compensacion real.",
                                                                  "debilidad": "Ninguna."
                                                                },
                                                                "kind": "trap",
                                                                "userColors": [
                                                                  "w"
                                                                ],
                                                                "trap": {
                                                                  "id": "h05-trampa-elefante",
                                                                  "tipo": "defensiva",
                                                                  "name": "Trampa del Elefante (Elephant Trap)"
                                                                },
                                                                "children": [
                                                                  {
                                                                    "id": "trap__h05-trampa-elefante__16",
                                                                    "san": "Kxd2",
                                                                    "color": "w",
                                                                    "explain": {
                                                                      "idea": "Blancas recaptura con el rey, unica opcion legal.",
                                                                      "ventaja": "Recupera el alfil.",
                                                                      "debilidad": "El rey pierde el derecho a enroque y queda expuesto en el centro."
                                                                    },
                                                                    "kind": "trap",
                                                                    "userColors": [
                                                                      "w"
                                                                    ],
                                                                    "trap": {
                                                                      "id": "h05-trampa-elefante",
                                                                      "tipo": "defensiva",
                                                                      "name": "Trampa del Elefante (Elephant Trap)"
                                                                    },
                                                                    "children": [
                                                                      {
                                                                        "id": "trap__h05-trampa-elefante__17",
                                                                        "san": "Kxd8",
                                                                        "color": "b",
                                                                        "explain": {
                                                                          "idea": "Negras recupera tambien su alfil, recapturando con el rey.",
                                                                          "ventaja": "Negras termina la secuencia una pieza arriba (caballo por peon), con el rey blanco inseguro en el centro y sin enroque.",
                                                                          "debilidad": "El rey negro tampoco puede enrocar, pero la ventaja material es decisiva."
                                                                        },
                                                                        "kind": "trap",
                                                                        "userColors": [
                                                                          "w"
                                                                        ],
                                                                        "trap": {
                                                                          "id": "h05-trampa-elefante",
                                                                          "tipo": "defensiva",
                                                                          "name": "Trampa del Elefante (Elephant Trap)"
                                                                        },
                                                                        "leafOf": {
                                                                          "trapId": "h05-trampa-elefante",
                                                                          "name": "Trampa del Elefante (Elephant Trap)",
                                                                          "userColor": "w",
                                                                          "overview": "Gambito de Dama Rehusado, linea 4...Nbd7. Si blancas capturan ingenuamente en d5 pensando que ganan un peon (la aparente clavada del alfil de g5 sobre el caballo f6 parece impedir la recaptura), negras ignoran la clavada con ...Nxd5! y ganan una pieza. Se entrena aqui el lado de blancas para reconocer la trampa y evitar caer en ella. Fuente: Wikipedia (\"Queen's Gambit Declined, Elephant Trap\"), TheChessWorld.",
                                                                          "tipo": "defensiva"
                                                                        }
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "id": "trap__h05-trampa-cambridge-springs__8",
                                    "san": "Nf3",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Blancas completa el desarrollo de caballos.",
                                      "ventaja": "Pieza activa.",
                                      "debilidad": "Ninguna."
                                    },
                                    "kind": "trap",
                                    "userColors": [
                                      "w"
                                    ],
                                    "trap": {
                                      "id": "h05-trampa-cambridge-springs",
                                      "tipo": "defensiva",
                                      "name": "Trampa de la Cambridge Springs"
                                    },
                                    "variantName": "Trampa de la Cambridge Springs",
                                    "variantColorId": "trap",
                                    "children": [
                                      {
                                        "id": "trap__h05-trampa-cambridge-springs__9",
                                        "san": "c6",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Negras refuerza d5 antes de la jugada caracteristica de la variante.",
                                          "ventaja": "Solidez central.",
                                          "debilidad": "Ninguna."
                                        },
                                        "kind": "trap",
                                        "userColors": [
                                          "w"
                                        ],
                                        "trap": {
                                          "id": "h05-trampa-cambridge-springs",
                                          "tipo": "defensiva",
                                          "name": "Trampa de la Cambridge Springs"
                                        },
                                        "children": [
                                          {
                                            "id": "trap__h05-trampa-cambridge-springs__10",
                                            "san": "e3",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Blancas refuerza el centro y libera al alfil de rey.",
                                              "ventaja": "Solidez.",
                                              "debilidad": "Encierra el propio alfil de casillas claras."
                                            },
                                            "kind": "trap",
                                            "userColors": [
                                              "w"
                                            ],
                                            "trap": {
                                              "id": "h05-trampa-cambridge-springs",
                                              "tipo": "defensiva",
                                              "name": "Trampa de la Cambridge Springs"
                                            },
                                            "children": [
                                              {
                                                "id": "trap__h05-trampa-cambridge-springs__11",
                                                "san": "Qa5",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Negras juega la Cambridge Springs: la dama sale a a5, rompiendo la clavada sobre el caballo de d7 (que ahora puede moverse porque la dama defiende al caballo de f6 desde el flanco) y presionando el caballo de c3.",
                                                  "ventaja": "Pieza activa que crea amenazas inmediatas sobre c3 y sobre g5 si la clavada se rompe.",
                                                  "debilidad": "Ninguna -- linea principal solida y muy jugada a alto nivel."
                                                },
                                                "kind": "trap",
                                                "userColors": [
                                                  "w"
                                                ],
                                                "trap": {
                                                  "id": "h05-trampa-cambridge-springs",
                                                  "tipo": "defensiva",
                                                  "name": "Trampa de la Cambridge Springs"
                                                },
                                                "children": [
                                                  {
                                                    "id": "trap__h05-trampa-cambridge-springs__12",
                                                    "san": "Nd2",
                                                    "color": "w",
                                                    "explain": {
                                                      "idea": "Blancas rompe la presion sobre el caballo de c3 y defiende e4 de antemano.",
                                                      "ventaja": "Jugada principal, solida.",
                                                      "debilidad": "Ninguna."
                                                    },
                                                    "kind": "trap",
                                                    "userColors": [
                                                      "w"
                                                    ],
                                                    "trap": {
                                                      "id": "h05-trampa-cambridge-springs",
                                                      "tipo": "defensiva",
                                                      "name": "Trampa de la Cambridge Springs"
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "trap__h05-trampa-cambridge-springs__13",
                                                        "san": "Bb4",
                                                        "color": "b",
                                                        "explain": {
                                                          "idea": "Negras clava el caballo de c3 y amenaza a largo plazo con ...Ne4.",
                                                          "ventaja": "Pieza activa con amenazas reales.",
                                                          "debilidad": "Ninguna."
                                                        },
                                                        "kind": "trap",
                                                        "userColors": [
                                                          "w"
                                                        ],
                                                        "trap": {
                                                          "id": "h05-trampa-cambridge-springs",
                                                          "tipo": "defensiva",
                                                          "name": "Trampa de la Cambridge Springs"
                                                        },
                                                        "children": [
                                                          {
                                                            "id": "trap__h05-trampa-cambridge-springs__14",
                                                            "san": "Qc2",
                                                            "color": "w",
                                                            "explain": {
                                                              "idea": "Blancas defiende el caballo de c3 y cubre la casilla e4.",
                                                              "ventaja": "Jugada solida que neutraliza las amenazas inmediatas.",
                                                              "debilidad": "Ninguna."
                                                            },
                                                            "kind": "trap",
                                                            "userColors": [
                                                              "w"
                                                            ],
                                                            "trap": {
                                                              "id": "h05-trampa-cambridge-springs",
                                                              "tipo": "defensiva",
                                                              "name": "Trampa de la Cambridge Springs"
                                                            },
                                                            "children": [
                                                              {
                                                                "id": "trap__h05-trampa-cambridge-springs__15",
                                                                "san": "O-O",
                                                                "color": "b",
                                                                "explain": {
                                                                  "idea": "Negras enroca corto, completando el desarrollo antes de definir el centro.",
                                                                  "ventaja": "Rey seguro.",
                                                                  "debilidad": "Ninguna."
                                                                },
                                                                "kind": "trap",
                                                                "userColors": [
                                                                  "w"
                                                                ],
                                                                "trap": {
                                                                  "id": "h05-trampa-cambridge-springs",
                                                                  "tipo": "defensiva",
                                                                  "name": "Trampa de la Cambridge Springs"
                                                                },
                                                                "children": [
                                                                  {
                                                                    "id": "trap__h05-trampa-cambridge-springs__16",
                                                                    "san": "Bd3",
                                                                    "color": "w",
                                                                    "explain": {
                                                                      "idea": "ERROR: blancas desarrolla el alfil hacia el flanco de rey sin ver el zwischenzug tactico que esto permite, ya que el alfil de g5 queda ahora sin proteccion extra si negras abre la posicion con dxc4.",
                                                                      "ventaja": "Parece una jugada de desarrollo natural.",
                                                                      "debilidad": "Pierde una pieza al zwischenzug tactico ...dxc4! seguido de ...cxd3! -- cae en la Trampa de la Cambridge Springs."
                                                                    },
                                                                    "kind": "trap",
                                                                    "userColors": [
                                                                      "w"
                                                                    ],
                                                                    "trap": {
                                                                      "id": "h05-trampa-cambridge-springs",
                                                                      "tipo": "defensiva",
                                                                      "name": "Trampa de la Cambridge Springs"
                                                                    },
                                                                    "isError": true,
                                                                    "children": [
                                                                      {
                                                                        "id": "trap__h05-trampa-cambridge-springs__17",
                                                                        "san": "dxc4",
                                                                        "color": "b",
                                                                        "explain": {
                                                                          "idea": "Negras abre el centro capturando en c4, amenazando de inmediato ...Qxg5 porque el alfil de g5 ha quedado sin la defensa extra que hubiera dado un alfil en e2.",
                                                                          "ventaja": "Crea una amenaza inmediata que blancas debe atender.",
                                                                          "debilidad": "Ninguna -- es la jugada clave de la combinacion."
                                                                        },
                                                                        "kind": "trap",
                                                                        "userColors": [
                                                                          "w"
                                                                        ],
                                                                        "trap": {
                                                                          "id": "h05-trampa-cambridge-springs",
                                                                          "tipo": "defensiva",
                                                                          "name": "Trampa de la Cambridge Springs"
                                                                        },
                                                                        "children": [
                                                                          {
                                                                            "id": "trap__h05-trampa-cambridge-springs__18",
                                                                            "san": "Bxf6",
                                                                            "color": "w",
                                                                            "explain": {
                                                                              "idea": "Blancas intenta salvar la pieza atacada capturando primero en f6, esperando recapturar despues en c4 con el alfil de d3.",
                                                                              "ventaja": "Parece resolver la amenaza inmediata sobre el alfil de g5.",
                                                                              "debilidad": "No ve el zwischenzug: antes de recapturar en f6, negras tiene una jugada intermedia mucho mas fuerte."
                                                                            },
                                                                            "kind": "trap",
                                                                            "userColors": [
                                                                              "w"
                                                                            ],
                                                                            "trap": {
                                                                              "id": "h05-trampa-cambridge-springs",
                                                                              "tipo": "defensiva",
                                                                              "name": "Trampa de la Cambridge Springs"
                                                                            },
                                                                            "children": [
                                                                              {
                                                                                "id": "trap__h05-trampa-cambridge-springs__19",
                                                                                "san": "cxd3",
                                                                                "color": "b",
                                                                                "explain": {
                                                                                  "idea": "El zwischenzug: en vez de recapturar de inmediato en f6, negras captura primero el alfil de d3 con el peon, ganando una pieza completa antes de resolver la posicion en f6.",
                                                                                  "ventaja": "Gana una pieza limpia -- el zwischenzug es el nucleo tactico de toda la trampa.",
                                                                                  "debilidad": "Ninguna."
                                                                                },
                                                                                "kind": "trap",
                                                                                "userColors": [
                                                                                  "w"
                                                                                ],
                                                                                "trap": {
                                                                                  "id": "h05-trampa-cambridge-springs",
                                                                                  "tipo": "defensiva",
                                                                                  "name": "Trampa de la Cambridge Springs"
                                                                                },
                                                                                "children": [
                                                                                  {
                                                                                    "id": "trap__h05-trampa-cambridge-springs__20",
                                                                                    "san": "Qxd3",
                                                                                    "color": "w",
                                                                                    "explain": {
                                                                                      "idea": "Blancas recaptura el peon con la dama, unica forma de no perder material adicional de inmediato.",
                                                                                      "ventaja": "Recupera parte del material.",
                                                                                      "debilidad": "El alfil que quedo en f6 sigue capturado y sin compensacion real: blancas termina la secuencia una pieza abajo."
                                                                                    },
                                                                                    "kind": "trap",
                                                                                    "userColors": [
                                                                                      "w"
                                                                                    ],
                                                                                    "trap": {
                                                                                      "id": "h05-trampa-cambridge-springs",
                                                                                      "tipo": "defensiva",
                                                                                      "name": "Trampa de la Cambridge Springs"
                                                                                    },
                                                                                    "children": [
                                                                                      {
                                                                                        "id": "trap__h05-trampa-cambridge-springs__21",
                                                                                        "san": "Nxf6",
                                                                                        "color": "b",
                                                                                        "explain": {
                                                                                          "idea": "Negras recaptura por fin en f6 con el caballo, consolidando la ganancia de una pieza completa obtenida gracias al zwischenzug.",
                                                                                          "ventaja": "Negras queda una pieza arriba con posicion sana y sin debilidades.",
                                                                                          "debilidad": "Ninguna."
                                                                                        },
                                                                                        "kind": "trap",
                                                                                        "userColors": [
                                                                                          "w"
                                                                                        ],
                                                                                        "trap": {
                                                                                          "id": "h05-trampa-cambridge-springs",
                                                                                          "tipo": "defensiva",
                                                                                          "name": "Trampa de la Cambridge Springs"
                                                                                        },
                                                                                        "leafOf": {
                                                                                          "trapId": "h05-trampa-cambridge-springs",
                                                                                          "name": "Trampa de la Cambridge Springs",
                                                                                          "userColor": "w",
                                                                                          "overview": "Defensa Cambridge Springs. Tras 7.Nd2 Bb4 8.Qc2 O-O, la jugada tentadora 9.Bd3?? pierde una pieza a un zwischenzug: 9...dxc4! (amenazando ...Qxg5) 10.Bxf6 cxd3! (el zwischenzug) 11.Qxd3 Nxf6. Se entrena aqui el lado de blancas para reconocer la trampa y evitarla. Fuente: Wikipedia (\"Queen's Gambit Declined, Cambridge Springs Defense\").",
                                                                                          "tipo": "defensiva"
                                                                                        }
                                                                                      }
                                                                                    ]
                                                                                  }
                                                                                ]
                                                                              }
                                                                            ]
                                                                          }
                                                                        ]
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "d4__d5__c4__e6__Nc3__Nf6__cxd5",
                            "san": "cxd5",
                            "color": "w",
                            "explain": {
                              "idea": "Variante de Cambio: fija la estructura de peones antes de que negras decida como recapturar.",
                              "ventaja": "Define el plan de medio juego con claridad: minoria de peones en el flanco de dama (b4-b5) contra la estructura resultante.",
                              "debilidad": "Renuncia a la tension central que mantiene la linea principal; algunos jugadores de blancas prefieren mantener mas opciones sin definir la estructura tan pronto."
                            },
                            "kind": "book",
                            "userColors": [
                              "w"
                            ],
                            "variantName": "Gambito de Dama Rehusado -- Variante de Cambio",
                            "variantColorId": 4,
                            "children": [
                              {
                                "id": "d4__d5__c4__e6__Nc3__Nf6__cxd5__exd5",
                                "san": "exd5",
                                "color": "b",
                                "explain": {
                                  "idea": "Recaptura manteniendo un peon en d5 y las dos torres conectadas por la columna e abierta para el rival, la recaptura mas comun.",
                                  "ventaja": "Estructura solida y simetrica, sin debilidades inmediatas.",
                                  "debilidad": "La columna c queda semiabierta para blancas, base del plan de minoria de peones que viene a continuacion."
                                },
                                "kind": "book",
                                "userColors": [
                                  "w"
                                ],
                                "children": [
                                  {
                                    "id": "d4__d5__c4__e6__Nc3__Nf6__cxd5__exd5__Bg5",
                                    "san": "Bg5",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Clava el caballo de f6 y mantiene la presion sobre el centro antes de completar el desarrollo.",
                                      "ventaja": "Pieza activa fuera de la cadena de peones, preparando e3 y el plan de minoria con b4.",
                                      "debilidad": "Ninguna inmediata; jugada estandar del plan."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "w"
                                    ],
                                    "children": [
                                      {
                                        "id": "d4__d5__c4__e6__Nc3__Nf6__cxd5__exd5__Bg5__Be7",
                                        "san": "Be7",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Rompe la clavada preparando el enroque sin debilitar la estructura con ...h6 tan pronto.",
                                          "ventaja": "Desarrollo solido, lista para enrocar en la siguiente jugada.",
                                          "debilidad": "Deja pasar la opcion mas combativa ...h6 seguido de ...O-O; ambas son teoria principal."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "w"
                                        ],
                                        "children": [
                                          {
                                            "id": "d4__d5__c4__e6__Nc3__Nf6__cxd5__exd5__Bg5__Be7__e3",
                                            "san": "e3",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Completa el desarrollo del centro y prepara Bd3, dejando el plan de minoria (b4-b5) para mas adelante tras el enroque.",
                                              "ventaja": "Jugada solida y flexible tipica de toda la Variante de Cambio.",
                                              "debilidad": "Encierra temporalmente al propio alfil de dama, ya reubicado en g5."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "w"
                                            ],
                                            "children": [
                                              {
                                                "id": "d4__d5__c4__e6__Nc3__Nf6__cxd5__exd5__Bg5__Be7__e3__O-O",
                                                "san": "O-O",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Pone el rey a salvo antes del medio juego, donde vendra el plan de minoria de blancas.",
                                                  "ventaja": "Seguridad del rey resuelta.",
                                                  "debilidad": "Ninguna; es la jugada mas natural para completar el desarrollo basico."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "w"
                                                ],
                                                "leafOf": {
                                                  "lineId": "h02-qgd-cambio",
                                                  "name": "Gambito de Dama Rehusado -- Variante de Cambio",
                                                  "userColor": "w",
                                                  "overview": "Blancas cambia en d5 de forma voluntaria (cxd5) para fijar la estructura de peones y jugar contra la debilidad resultante en el flanco de dama de negras con el plan clasico de minoria de peones (b4-b5). Es una alternativa mas estrategica y menos tactica que la linea principal del Rehusado, muy popular en la practica de club por lo clara que es la idea de medio juego."
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "d4__d5__c4__e6__Nc3__Nf6__Nf3",
                            "san": "Nf3",
                            "color": "w",
                            "explain": {
                              "idea": "Desarrolla y prepara el enroque corto antes de que negras decida su plan concreto en el centro.",
                              "ventaja": "Jugada solida y flexible.",
                              "debilidad": "Ninguna relevante."
                            },
                            "kind": "book",
                            "userColors": [
                              "w"
                            ],
                            "variantName": "Semi-Tarrasch",
                            "variantColorId": 11,
                            "children": [
                              {
                                "id": "d4__d5__c4__e6__Nc3__Nf6__Nf3__c5",
                                "san": "c5",
                                "color": "b",
                                "explain": {
                                  "idea": "Semi-Tarrasch: ahora si contraataca el centro, pero con el caballo ya en f6, listo para recapturar en d5 con la pieza en vez de quedarse con un peon aislado.",
                                  "ventaja": "Evita el peon de dama aislado tipico del Tarrasch puro, a cambio de piezas activas igualmente.",
                                  "debilidad": "Cede tiempo a blancas para ocupar el centro con e4 tras el cambio en d5."
                                },
                                "kind": "book",
                                "userColors": [
                                  "w"
                                ],
                                "children": [
                                  {
                                    "id": "d4__d5__c4__e6__Nc3__Nf6__Nf3__c5__cxd5",
                                    "san": "cxd5",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Cambia en el centro antes de que negras pueda recapturar a su gusto.",
                                      "ventaja": "Fuerza a negras a recapturar con el caballo, abriendo la posibilidad de ganar un tiempo con e4 despues.",
                                      "debilidad": "Ninguna; es la continuacion mas natural y fuerte."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "w"
                                    ],
                                    "children": [
                                      {
                                        "id": "d4__d5__c4__e6__Nc3__Nf6__Nf3__c5__cxd5__Nxd5",
                                        "san": "Nxd5",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Recaptura con el caballo, evitando el peon aislado del Tarrasch puro -- la diferencia clave del Semi-Tarrasch.",
                                          "ventaja": "Sin peon debil en la estructura, a cambio de una pieza bien colocada en el centro.",
                                          "debilidad": "El caballo en d5 sera blanco de e4 en la siguiente jugada, perdiendo un tiempo."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "w"
                                        ],
                                        "children": [
                                          {
                                            "id": "d4__d5__c4__e6__Nc3__Nf6__Nf3__c5__cxd5__Nxd5__e4",
                                            "san": "e4",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Ataca el caballo de d5 ganando espacio y tiempo, el plan principal de blancas contra el Semi-Tarrasch.",
                                              "ventaja": "Centro amplio y tiempo ganado sobre el caballo rival.",
                                              "debilidad": "Ninguna relevante; es la continuacion mas ambiciosa y fuerte."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "w"
                                            ],
                                            "children": [
                                              {
                                                "id": "d4__d5__c4__e6__Nc3__Nf6__Nf3__c5__cxd5__Nxd5__e4__Nxc3",
                                                "san": "Nxc3",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Cambia el caballo antes de retirarlo, simplificando la posicion en vez de perder otro tiempo con la retirada.",
                                                  "ventaja": "Resuelve de inmediato la amenaza sobre el caballo sin conceder mas tiempos.",
                                                  "debilidad": "Cede el par de alfiles potencial a cambio de la simplificacion, aunque es una concesion menor y muy jugada en la practica."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "w"
                                                ],
                                                "leafOf": {
                                                  "lineId": "h02-semi-tarrasch",
                                                  "name": "Semi-Tarrasch",
                                                  "userColor": "w",
                                                  "overview": "Familia Gambito de Dama: un hibrido entre la Ortodoxa y el Tarrasch -- negras desarrolla primero el caballo de rey y solo despues juega ...c5, recapturando en d5 con el caballo en vez de quedarse con un peon aislado de peon. Blancas responde ocupando el centro con e4 y ganando un tiempo sobre el caballo, una ventaja de desarrollo tipica de todo el plan principal."
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "d4__d5__c4__e6__Nc3__c5",
                        "san": "c5",
                        "color": "b",
                        "explain": {
                          "idea": "Defensa Tarrasch: en vez de encerrar el alfil con mas peones, negras contraataca el centro de inmediato, aceptando quedarse con un peon aislado en d5 a cambio de piezas muy activas.",
                          "ventaja": "Piezas libres y activas desde el principio, una estructura con mucho contrajuego dinamico pese al peon debil.",
                          "debilidad": "El peon d5 quedara aislado tras los cambios en el centro, un objetivo a largo plazo para blancas durante toda la partida."
                        },
                        "kind": "book",
                        "userColors": [
                          "w"
                        ],
                        "variantName": "Defensa Tarrasch",
                        "variantColorId": 4,
                        "children": [
                          {
                            "id": "d4__d5__c4__e6__Nc3__c5__cxd5",
                            "san": "cxd5",
                            "color": "w",
                            "explain": {
                              "idea": "Define la estructura antes de que negras pueda recapturar a su gusto, forzando el peon aislado.",
                              "ventaja": "Fija de inmediato la debilidad estructural que negras acepto al jugar ...c5.",
                              "debilidad": "Ninguna; es la continuacion mas natural y fuerte."
                            },
                            "kind": "book",
                            "userColors": [
                              "w"
                            ],
                            "children": [
                              {
                                "id": "d4__d5__c4__e6__Nc3__c5__cxd5__exd5",
                                "san": "exd5",
                                "color": "b",
                                "explain": {
                                  "idea": "Recaptura con el peon, quedando con el peon aislado de dama tipico de toda la Defensa Tarrasch.",
                                  "ventaja": "Piezas muy activas y espacio central pese al peon debil, la esencia de toda la apuesta del Tarrasch.",
                                  "debilidad": "El peon d5 aislado sera un objetivo constante para blancas, especialmente en los finales."
                                },
                                "kind": "book",
                                "userColors": [
                                  "w"
                                ],
                                "children": [
                                  {
                                    "id": "d4__d5__c4__e6__Nc3__c5__cxd5__exd5__Nf3",
                                    "san": "Nf3",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Desarrolla y controla d4 y e5, casillas clave para presionar el peon aislado mas adelante.",
                                      "ventaja": "Pieza bien colocada dentro del plan de presionar el IQP a distancia.",
                                      "debilidad": "Ninguna relevante."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "w"
                                    ],
                                    "children": [
                                      {
                                        "id": "d4__d5__c4__e6__Nc3__c5__cxd5__exd5__Nf3__Nc6",
                                        "san": "Nc6",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Desarrolla y refuerza el peon d5, sosteniendo la estructura central activa de negras.",
                                          "ventaja": "Pieza activa que participa en la lucha central.",
                                          "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "w"
                                        ],
                                        "children": [
                                          {
                                            "id": "d4__d5__c4__e6__Nc3__c5__cxd5__exd5__Nf3__Nc6__g3",
                                            "san": "g3",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Sistema Fianchetto contra el Tarrasch: prepara Bg2 para presionar el peon d5 aislado desde la larga diagonal, el plan mas solido y menos comprometido de todos contra esta defensa.",
                                              "ventaja": "Presion constante y de largo alcance sobre el peon debil sin arriesgar nada ni entrar en las lineas mas tacticas y complicadas del Tarrasch.",
                                              "debilidad": "Cede algo de tiempo mientras negras completa su desarrollo, aunque el plan compensa sobradamente a la larga gracias a la debilidad permanente del peon d5."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "w"
                                            ],
                                            "children": [
                                              {
                                                "id": "d4__d5__c4__e6__Nc3__c5__cxd5__exd5__Nf3__Nc6__g3__Nf6",
                                                "san": "Nf6",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Completa el desarrollo de piezas menores y prepara el enroque corto.",
                                                  "ventaja": "Jugada solida que no compromete nada.",
                                                  "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "w"
                                                ],
                                                "leafOf": {
                                                  "lineId": "h02-defensa-tarrasch",
                                                  "name": "Defensa Tarrasch",
                                                  "userColor": "w",
                                                  "overview": "Familia Gambito de Dama: negras acepta un peon de dama aislado (IQP) a cambio de piezas muy activas y espacio central, una de las estructuras mas estudiadas de todo el ajedrez clasico. Blancas responde con el plan mas solido y menos comprometido: el Sistema Fianchetto (g3-Bg2), presionando el peon aislado a distancia sin tener que memorizar las lineas mas tacticas del Tarrasch."
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "d4__d5__c4__dxc4",
                "san": "dxc4",
                "color": "b",
                "explain": {
                  "idea": "Gambito de Dama Aceptado: negras se quedan con el peon de mas y sueltan el centro.",
                  "ventaja": "Un peon extra de forma inmediata y sin complicaciones tacticas.",
                  "debilidad": "Cede el centro y el tiempo de desarrollo; el peon c4 no se puede sostener a largo plazo y blancas lo recuperara con ventaja de espacio."
                },
                "kind": "book",
                "userColors": [
                  "w"
                ],
                "variantName": "Gambito de Dama Aceptado -- Sistema Alekhine",
                "variantColorId": 11,
                "children": [
                  {
                    "id": "d4__d5__c4__dxc4__Nf3",
                    "san": "Nf3",
                    "color": "w",
                    "explain": {
                      "idea": "Desarrolla sin prisa por recuperar el peon todavia -- primero completar el desarrollo.",
                      "ventaja": "Controla e5 y d4, y prepara el enroque corto rapido.",
                      "debilidad": "Deja el peon c4 en manos de negras un turno mas, aunque no supone ningun riesgo real."
                    },
                    "kind": "book",
                    "userColors": [
                      "w"
                    ],
                    "children": [
                      {
                        "id": "d4__d5__c4__dxc4__Nf3__Nf6",
                        "san": "Nf6",
                        "color": "b",
                        "explain": {
                          "idea": "Desarrollo natural, presiona e4 y prepara el enroque.",
                          "ventaja": "Jugada solida que no compromete nada.",
                          "debilidad": "No hace nada por sostener el peon c4, que blancas recuperara pronto sin esfuerzo."
                        },
                        "kind": "book",
                        "userColors": [
                          "w"
                        ],
                        "children": [
                          {
                            "id": "d4__d5__c4__dxc4__Nf3__Nf6__e3",
                            "san": "e3",
                            "color": "w",
                            "explain": {
                              "idea": "Abre la diagonal del alfil de rey para poder recuperar el peon c4 con Bxc4 la siguiente jugada.",
                              "ventaja": "Jugada flexible que prepara el enroque corto y no compromete nada mas.",
                              "debilidad": "Encierra momentaneamente al propio alfil de dama, igual que en el Rehusado."
                            },
                            "kind": "book",
                            "userColors": [
                              "w"
                            ],
                            "children": [
                              {
                                "id": "d4__d5__c4__dxc4__Nf3__Nf6__e3__e6",
                                "san": "e6",
                                "color": "b",
                                "explain": {
                                  "idea": "Completa el desarrollo del centro y abre la diagonal de su propio alfil de rey.",
                                  "ventaja": "Jugada solida que prepara el enroque.",
                                  "debilidad": "Sigue sin defender el peon c4, que blancas captura en la siguiente jugada sin ninguna compensacion para negras."
                                },
                                "kind": "book",
                                "userColors": [
                                  "w"
                                ],
                                "children": [
                                  {
                                    "id": "d4__d5__c4__dxc4__Nf3__Nf6__e3__e6__Bxc4",
                                    "san": "Bxc4",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Recupera el peon con una pieza ya desarrollada y con tiempo de sobra.",
                                      "ventaja": "Blancas iguala el material y queda con mejor desarrollo y mas espacio en el centro -- la esencia de todo el plan del Sistema Alekhine.",
                                      "debilidad": "Ninguna; es el objetivo de todo el plan desde la jugada 3."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "w"
                                    ],
                                    "children": [
                                      {
                                        "id": "d4__d5__c4__dxc4__Nf3__Nf6__e3__e6__Bxc4__c5",
                                        "san": "c5",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Contraataca el centro de blancas en vez de quedarse pasivo.",
                                          "ventaja": "Plan mas activo que limitarse a desarrollar sin mas; cuestiona d4 de inmediato.",
                                          "debilidad": "Puede dejar la estructura de peones algo suelta si blancas juega con precision (dxc5 seguido de recuperar el peon con ventaja de desarrollo)."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "w"
                                        ],
                                        "children": [
                                          {
                                            "id": "d4__d5__c4__dxc4__Nf3__Nf6__e3__e6__Bxc4__c5__O-O",
                                            "san": "O-O",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Pone el rey a salvo antes de decidir como responder a c5.",
                                              "ventaja": "Jugada solida que no compromete nada y deja las opciones abiertas (Qe2, Rd1, dxc5).",
                                              "debilidad": "Ninguna; es la jugada mas natural para completar la seguridad del rey."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "w"
                                            ],
                                            "children": [
                                              {
                                                "id": "d4__d5__c4__dxc4__Nf3__Nf6__e3__e6__Bxc4__c5__O-O__a6",
                                                "san": "a6",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Prepara ...b5 para ganar espacio en el flanco de dama y darle mas margen al alfil de casillas claras.",
                                                  "ventaja": "Jugada flexible tipica del Aceptado, prepara expansion en el flanco de dama.",
                                                  "debilidad": "Jugada lenta que no desarrolla ninguna pieza; blancas puede aprovechar el tiempo con Qe2 o Rd1 presionando el centro."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "w"
                                                ],
                                                "leafOf": {
                                                  "lineId": "h02-gambito-dama-aceptado",
                                                  "name": "Gambito de Dama Aceptado -- Sistema Alekhine",
                                                  "userColor": "w",
                                                  "overview": "Negras capturan el peon c4 en vez de sostener d5. Blancas no se apresuran a recuperarlo: desarrollan primero (Nf3, e3, Bxc4) y dejan que negras gaste tiempo defendiendo el peon de mas, para acabar con mejor centro y mas espacio. Es el plan mas solido contra el Aceptado, frente a alternativas mas agresivas como 3.e4."
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "trap__h05-trampa-qga-e3-torre__4",
                    "san": "e3",
                    "color": "w",
                    "explain": {
                      "idea": "Blancas prepara recuperar el peon c4 con el alfil de f1, en vez del Sistema Alekhine (3.Nf3) mas conocido.",
                      "ventaja": "Jugada modesta y solida, jugada entre otros por Anatoly Karpov, que de paso tiende la trampa clasica si negras intenta sostener el peon de mas.",
                      "debilidad": "Ninguna real a este nivel."
                    },
                    "kind": "trap",
                    "userColors": [
                      "w"
                    ],
                    "trap": {
                      "id": "h05-trampa-qga-e3-torre",
                      "tipo": "ofensiva",
                      "name": "Trampa del Gambito de Dama Aceptado (3.e3, amenaza sobre la torre a8)"
                    },
                    "variantName": "Trampa del Gambito de Dama Aceptado (3.e3, amenaza sobre la torre a8)",
                    "variantColorId": "trap",
                    "children": [
                      {
                        "id": "trap__h05-trampa-qga-e3-torre__5",
                        "san": "b5",
                        "color": "b",
                        "explain": {
                          "idea": "ERROR: negras intenta sostener el peon de mas defendiendolo con el peon b -- el error tipico de esta trampa, documentada desde 1604 (Alessandro Salvio).",
                          "ventaja": "Parece defender el peon c4 de forma natural.",
                          "debilidad": "Debilita irremediablemente el flanco de dama y abre la diagonal a8-h1, origen de todos los problemas que siguen."
                        },
                        "kind": "trap",
                        "userColors": [
                          "w"
                        ],
                        "trap": {
                          "id": "h05-trampa-qga-e3-torre",
                          "tipo": "ofensiva",
                          "name": "Trampa del Gambito de Dama Aceptado (3.e3, amenaza sobre la torre a8)"
                        },
                        "isError": true,
                        "children": [
                          {
                            "id": "trap__h05-trampa-qga-e3-torre__6",
                            "san": "a4",
                            "color": "w",
                            "explain": {
                              "idea": "Blancas ataca de inmediato el peon b5 recien avanzado.",
                              "ventaja": "Fuerza a negras a decidir entre ceder mas terreno o comprometerse todavia mas.",
                              "debilidad": "Ninguna."
                            },
                            "kind": "trap",
                            "userColors": [
                              "w"
                            ],
                            "trap": {
                              "id": "h05-trampa-qga-e3-torre",
                              "tipo": "ofensiva",
                              "name": "Trampa del Gambito de Dama Aceptado (3.e3, amenaza sobre la torre a8)"
                            },
                            "children": [
                              {
                                "id": "trap__h05-trampa-qga-e3-torre__7",
                                "san": "c6",
                                "color": "b",
                                "explain": {
                                  "idea": "ERROR: negras defiende el peon b5 con el peon c, continuando el mismo plan equivocado.",
                                  "ventaja": "Parece sostener la cadena de peones del flanco de dama.",
                                  "debilidad": "Es precisamente la jugada que permite a blancas abrir la diagonal a8-h1 con axb5 y lanzar la combinacion."
                                },
                                "kind": "trap",
                                "userColors": [
                                  "w"
                                ],
                                "trap": {
                                  "id": "h05-trampa-qga-e3-torre",
                                  "tipo": "ofensiva",
                                  "name": "Trampa del Gambito de Dama Aceptado (3.e3, amenaza sobre la torre a8)"
                                },
                                "isError": true,
                                "children": [
                                  {
                                    "id": "trap__h05-trampa-qga-e3-torre__8",
                                    "san": "axb5",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Blancas abre la diagonal a8-h1 capturando en b5.",
                                      "ventaja": "Prepara el golpe tactico Qf3.",
                                      "debilidad": "Ninguna."
                                    },
                                    "kind": "trap",
                                    "userColors": [
                                      "w"
                                    ],
                                    "trap": {
                                      "id": "h05-trampa-qga-e3-torre",
                                      "tipo": "ofensiva",
                                      "name": "Trampa del Gambito de Dama Aceptado (3.e3, amenaza sobre la torre a8)"
                                    },
                                    "children": [
                                      {
                                        "id": "trap__h05-trampa-qga-e3-torre__9",
                                        "san": "cxb5",
                                        "color": "b",
                                        "explain": {
                                          "idea": "ERROR decisivo: negras recaptura con el peon c, sin ver que esto deja la diagonal a8-h1 totalmente abierta hacia su propia torre.",
                                          "ventaja": "Recupera el peon, parece mantener el material equilibrado.",
                                          "debilidad": "La torre de a8 queda expuesta al golpe tactico Qf3 -- cae en la trampa."
                                        },
                                        "kind": "trap",
                                        "userColors": [
                                          "w"
                                        ],
                                        "trap": {
                                          "id": "h05-trampa-qga-e3-torre",
                                          "tipo": "ofensiva",
                                          "name": "Trampa del Gambito de Dama Aceptado (3.e3, amenaza sobre la torre a8)"
                                        },
                                        "isError": true,
                                        "children": [
                                          {
                                            "id": "trap__h05-trampa-qga-e3-torre__10",
                                            "san": "Qf3",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Blancas ejecuta el golpe: la dama entra en la diagonal a8-h1 amenazando directamente la torre de a8.",
                                              "ventaja": "Amenaza ganar la torre sin compensacion si negras no encuentra la defensa exacta.",
                                              "debilidad": "Ninguna -- el golpe esta completamente justificado tacticamente."
                                            },
                                            "kind": "trap",
                                            "userColors": [
                                              "w"
                                            ],
                                            "trap": {
                                              "id": "h05-trampa-qga-e3-torre",
                                              "tipo": "ofensiva",
                                              "name": "Trampa del Gambito de Dama Aceptado (3.e3, amenaza sobre la torre a8)"
                                            },
                                            "children": [
                                              {
                                                "id": "trap__h05-trampa-qga-e3-torre__11",
                                                "san": "Nc6",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Unica defensa razonable: el caballo bloquea la diagonal e interpone entre la dama y la torre.",
                                                  "ventaja": "Evita la perdida directa de la torre.",
                                                  "debilidad": "El caballo queda atacado por la dama sin ninguna pieza que lo defienda -- negras salva la torre a cambio de perder igualmente una pieza menor."
                                                },
                                                "kind": "trap",
                                                "userColors": [
                                                  "w"
                                                ],
                                                "trap": {
                                                  "id": "h05-trampa-qga-e3-torre",
                                                  "tipo": "ofensiva",
                                                  "name": "Trampa del Gambito de Dama Aceptado (3.e3, amenaza sobre la torre a8)"
                                                },
                                                "children": [
                                                  {
                                                    "id": "trap__h05-trampa-qga-e3-torre__12",
                                                    "san": "Qxc6+",
                                                    "color": "w",
                                                    "explain": {
                                                      "idea": "Blancas captura el caballo con jaque, la pieza que interpuso negras para salvar la torre.",
                                                      "ventaja": "Gana una pieza menor limpia, con jaque de propina.",
                                                      "debilidad": "Ninguna -- incluso jugando la mejor defensa disponible, negras no puede evitar quedar con clara desventaja material."
                                                    },
                                                    "kind": "trap",
                                                    "userColors": [
                                                      "w"
                                                    ],
                                                    "trap": {
                                                      "id": "h05-trampa-qga-e3-torre",
                                                      "tipo": "ofensiva",
                                                      "name": "Trampa del Gambito de Dama Aceptado (3.e3, amenaza sobre la torre a8)"
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "trap__h05-trampa-qga-e3-torre__13",
                                                        "san": "Bd7",
                                                        "color": "b",
                                                        "explain": {
                                                          "idea": "Negras bloquea el jaque con el alfil, la unica forma de interponerse, atacando de paso a la dama para obligarla a retirarse.",
                                                          "ventaja": "Obliga a la dama blanca a moverse de nuevo, ganando un tiempo relativo.",
                                                          "debilidad": "No compensa la pieza perdida -- negras queda con clara desventaja material pese a haber jugado la defensa mas precisa disponible."
                                                        },
                                                        "kind": "trap",
                                                        "userColors": [
                                                          "w"
                                                        ],
                                                        "trap": {
                                                          "id": "h05-trampa-qga-e3-torre",
                                                          "tipo": "ofensiva",
                                                          "name": "Trampa del Gambito de Dama Aceptado (3.e3, amenaza sobre la torre a8)"
                                                        },
                                                        "leafOf": {
                                                          "trapId": "h05-trampa-qga-e3-torre",
                                                          "name": "Trampa del Gambito de Dama Aceptado (3.e3, amenaza sobre la torre a8)",
                                                          "userColor": "w",
                                                          "overview": "Gambito de Dama Aceptado. En vez de la linea principal 3.Nf3 (Sistema Alekhine), blancas juega 3.e3, jugada modesta jugada entre otros por Anatoly Karpov, que tienta a negras a sostener el peon de mas con ...b5 y ...c6. Si negras cae en la tentacion, 6.Qf3! entra en la diagonal a8-h1 y amenaza directamente la torre de a8: si negras encuentra la unica defensa (...Nc6) evita perder la torre, pero blancas gana igualmente una pieza menor (7.Qxc6+) y queda con clara ventaja material -- negras nunca sale indemne. Se entrena aqui el lado de blancas para tender la trampa. Documentada desde 1604 (Alessandro Salvio); fuente moderna: Wikipedia (\"Queen's Gambit Accepted\"), contrastada con TheChessWorld y Chess-Teacher.",
                                                          "tipo": "ofensiva"
                                                        }
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "d4__d5__c4__c6",
                "san": "c6",
                "color": "b",
                "explain": {
                  "idea": "Defensa Eslava: sostiene d5 sin encerrar el alfil de casillas claras, dejando abierta la opcion de transponer a la Semi-Eslava con ...e6 mas adelante.",
                  "ventaja": "Posicion muy solida y flexible, base de dos sistemas distintos (Eslava pura y Semi-Eslava) segun como continue negras.",
                  "debilidad": "Tapa momentaneamente la casilla natural de desarrollo del caballo de dama (b8), que tendra que salir por d7 en vez de c6."
                },
                "kind": "book",
                "userColors": [
                  "w"
                ],
                "children": [
                  {
                    "id": "d4__d5__c4__c6__Nf3",
                    "san": "Nf3",
                    "color": "w",
                    "explain": {
                      "idea": "Desarrolla una pieza y prepara el enroque corto sin comprometerse aun con el plan concreto (Nc3, cxd5...).",
                      "ventaja": "Jugada flexible que sirve tanto para la Eslava pura como para la Semi-Eslava, manteniendo varias opciones de plan abiertas.",
                      "debilidad": "Ninguna relevante."
                    },
                    "kind": "book",
                    "userColors": [
                      "w"
                    ],
                    "children": [
                      {
                        "id": "d4__d5__c4__c6__Nf3__Nf6",
                        "san": "Nf6",
                        "color": "b",
                        "explain": {
                          "idea": "Desarrollo natural, presiona e4 y prepara el enroque.",
                          "ventaja": "Jugada solida que no compromete nada.",
                          "debilidad": "Ninguna relevante; es la respuesta mas natural en la posicion."
                        },
                        "kind": "book",
                        "userColors": [
                          "w"
                        ],
                        "children": [
                          {
                            "id": "d4__d5__c4__c6__Nf3__Nf6__Nc3",
                            "san": "Nc3",
                            "color": "w",
                            "explain": {
                              "idea": "Desarrolla la ultima pieza menor del flanco de dama y refuerza el centro.",
                              "ventaja": "Pieza activa que apoya un futuro e4 o presiona d5 de nuevo.",
                              "debilidad": "Permite a negras capturar en c4 y sostener el peon de mas con ...b5, el plan principal de la Eslava."
                            },
                            "kind": "book",
                            "userColors": [
                              "w"
                            ],
                            "children": [
                              {
                                "id": "d4__d5__c4__c6__Nf3__Nf6__Nc3__dxc4",
                                "san": "dxc4",
                                "color": "b",
                                "explain": {
                                  "idea": "A diferencia del Aceptado, aqui negras si puede sostener el peon de mas gracias a que el alfil de casillas claras ya esta libre.",
                                  "ventaja": "Peon de mas con posibilidades reales de conservarlo tras ...b5.",
                                  "debilidad": "Cede el centro por completo; si blancas juega con precision (a4) puede evitar que negras sostenga el peon comodamente."
                                },
                                "kind": "book",
                                "userColors": [
                                  "w"
                                ],
                                "variantName": "Defensa Eslava -- linea principal",
                                "variantColorId": 5,
                                "children": [
                                  {
                                    "id": "d4__d5__c4__c6__Nf3__Nf6__Nc3__dxc4__a4",
                                    "san": "a4",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Evita que negras juegue ...b5 para sostener el peon c4, forzando la devolucion del peon mas adelante.",
                                      "ventaja": "Jugada clave del plan principal contra la Eslava: le quita a negras su plan mas natural.",
                                      "debilidad": "Debilita ligeramente la casilla b4 y compromete el flanco de dama, aunque es un precio asumido en toda la teoria principal."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "w"
                                    ],
                                    "children": [
                                      {
                                        "id": "d4__d5__c4__c6__Nf3__Nf6__Nc3__dxc4__a4__Bf5",
                                        "san": "Bf5",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Saca el alfil de casillas claras antes de que quede encerrado por ...e6, aprovechando la ventaja estructural de la Eslava frente al Rehusado.",
                                          "ventaja": "Pieza activa fuera de la cadena de peones, apuntando al flanco de rey de blancas.",
                                          "debilidad": "El alfil puede convertirse en objetivo de Nh4 o Qb3 mas adelante en algunas variantes, aunque no es una amenaza inmediata aqui."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "w"
                                        ],
                                        "children": [
                                          {
                                            "id": "d4__d5__c4__c6__Nf3__Nf6__Nc3__dxc4__a4__Bf5__e3",
                                            "san": "e3",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Prepara Bxc4 para recuperar el peon con desarrollo, igual que en el Aceptado.",
                                              "ventaja": "Jugada solida y flexible que abre la diagonal del alfil de rey.",
                                              "debilidad": "Encierra temporalmente al propio alfil de dama, ya reubicado fuera en la practica gracias al orden de jugadas."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "w"
                                            ],
                                            "children": [
                                              {
                                                "id": "d4__d5__c4__c6__Nf3__Nf6__Nc3__dxc4__a4__Bf5__e3__e6",
                                                "san": "e6",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Completa el desarrollo del centro y prepara el enroque, dejando ya colocado el alfil fuera de la cadena de peones.",
                                                  "ventaja": "Estructura solida con el problema del alfil ya resuelto, a diferencia del Rehusado.",
                                                  "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "w"
                                                ],
                                                "leafOf": {
                                                  "lineId": "h02-defensa-eslava",
                                                  "name": "Defensa Eslava -- linea principal",
                                                  "userColor": "w",
                                                  "overview": "Negras sostiene d5 con c6 en vez de e6, dejando libre desde el principio la diagonal del alfil de casillas claras (el problema estructural del Rehusado). A cambio, el peon c6 tapa la salida natural del caballo de dama. Es la respuesta mas solida y popular contra 1.d4 a nivel de club y profesional."
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "d4__d5__c4__c6__Nf3__Nf6__Nc3__e6",
                                "san": "e6",
                                "color": "b",
                                "explain": {
                                  "idea": "Semi-Eslava: combina ...c6 ya jugado con ...e6, liberando la diagonal del alfil de rey aunque encerrando de nuevo el de casillas claras -- la eleccion consciente entre las dos estructuras.",
                                  "ventaja": "Estructura elastica y muy solida, terreno de la teoria mas moderna y respetada contra 1.d4.",
                                  "debilidad": "Vuelve a encerrar el alfil de casillas claras, el mismo problema estructural que en el Rehusado puro, aunque compensado por la solidez general del sistema."
                                },
                                "kind": "book",
                                "userColors": [
                                  "w"
                                ],
                                "variantName": "Semi-Eslava -- Variante Meran",
                                "variantColorId": 8,
                                "children": [
                                  {
                                    "id": "d4__d5__c4__c6__Nf3__Nf6__Nc3__e6__e3",
                                    "san": "e3",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Completa el desarrollo del centro y prepara Bd3, el plan clasico de blancas en la Meran.",
                                      "ventaja": "Jugada solida y flexible, deja las opciones de flanco de dama (a3, b4) abiertas para mas adelante.",
                                      "debilidad": "Encierra temporalmente al propio alfil de dama."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "w"
                                    ],
                                    "children": [
                                      {
                                        "id": "d4__d5__c4__c6__Nf3__Nf6__Nc3__e6__e3__Nbd7",
                                        "san": "Nbd7",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Desarrolla el caballo de dama por d7, unica casilla disponible ya que c6 esta ocupado por el peon.",
                                          "ventaja": "Pieza que apoya un futuro ...dxc4 y ...b5, el plan caracteristico de la Meran.",
                                          "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "w"
                                        ],
                                        "children": [
                                          {
                                            "id": "d4__d5__c4__c6__Nf3__Nf6__Nc3__e6__e3__Nbd7__Bd3",
                                            "san": "Bd3",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Desarrolla el alfil a su diagonal mas activa antes de que negras defina el centro con ...dxc4.",
                                              "ventaja": "Pieza bien colocada, apuntando al flanco de rey de negras y lista para recapturar en c4 si hace falta.",
                                              "debilidad": "Ninguna inmediata; jugada estandar del plan Meran."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "w"
                                            ],
                                            "children": [
                                              {
                                                "id": "d4__d5__c4__c6__Nf3__Nf6__Nc3__e6__e3__Nbd7__Bd3__dxc4",
                                                "san": "dxc4",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Variante Meran: negras captura el peon central justo antes de que blancas pueda evitarlo, preparando el contragambito ...b5 a continuacion.",
                                                  "ventaja": "Peon de mas momentaneo y la base del plan mas afilado y respetado de toda la Semi-Eslava.",
                                                  "debilidad": "Cede el centro por completo; si blancas recaptura con precision (Bxc4) seguido de e4, puede obtener una fuerte iniciativa central."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "w"
                                                ],
                                                "leafOf": {
                                                  "lineId": "h02-semi-eslava-meran",
                                                  "name": "Semi-Eslava -- Variante Meran",
                                                  "userColor": "w",
                                                  "overview": "Familia Gambito de Dama / Eslava: negras combina ...c6 y ...e6 en el mismo sistema, la estructura mas solida y elastica contra 1.d4 a nivel de elite. Blancas desarrolla con naturalidad y dirige la partida hacia la Variante Meran, donde negras captura en c4 y contragambitea de inmediato con ...b5, generando partidas muy ricas de plan y con juego en ambos flancos."
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "trap__h05-trampa-eslava-bf4-e4__6",
                            "san": "cxd5",
                            "color": "w",
                            "explain": {
                              "idea": "Blancas entra en la Variante de Cambio, definiendo la estructura central de inmediato.",
                              "ventaja": "Estructura clara y facil de jugar para blancas.",
                              "debilidad": "Renuncia a la tension central a cambio de simplicidad."
                            },
                            "kind": "trap",
                            "userColors": [
                              "w"
                            ],
                            "trap": {
                              "id": "h05-trampa-eslava-bf4-e4",
                              "tipo": "ofensiva",
                              "name": "Trampa del alfil en la Eslava (Bf4 + e4)"
                            },
                            "variantName": "Trampa del alfil en la Eslava (Bf4 + e4)",
                            "variantColorId": "trap",
                            "children": [
                              {
                                "id": "trap__h05-trampa-eslava-bf4-e4__7",
                                "san": "cxd5",
                                "color": "b",
                                "explain": {
                                  "idea": "Negras recaptura manteniendo la simetria.",
                                  "ventaja": "Estructura solida y simetrica.",
                                  "debilidad": "Ninguna inmediata."
                                },
                                "kind": "trap",
                                "userColors": [
                                  "w"
                                ],
                                "trap": {
                                  "id": "h05-trampa-eslava-bf4-e4",
                                  "tipo": "ofensiva",
                                  "name": "Trampa del alfil en la Eslava (Bf4 + e4)"
                                },
                                "children": [
                                  {
                                    "id": "trap__h05-trampa-eslava-bf4-e4__8",
                                    "san": "Nc3",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Blancas desarrolla el segundo caballo.",
                                      "ventaja": "Presion adicional sobre d5.",
                                      "debilidad": "Ninguna."
                                    },
                                    "kind": "trap",
                                    "userColors": [
                                      "w"
                                    ],
                                    "trap": {
                                      "id": "h05-trampa-eslava-bf4-e4",
                                      "tipo": "ofensiva",
                                      "name": "Trampa del alfil en la Eslava (Bf4 + e4)"
                                    },
                                    "children": [
                                      {
                                        "id": "trap__h05-trampa-eslava-bf4-e4__9",
                                        "san": "Nc6",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Negras desarrolla el caballo de dama de forma natural.",
                                          "ventaja": "Desarrollo simetrico y solido.",
                                          "debilidad": "Ninguna inmediata."
                                        },
                                        "kind": "trap",
                                        "userColors": [
                                          "w"
                                        ],
                                        "trap": {
                                          "id": "h05-trampa-eslava-bf4-e4",
                                          "tipo": "ofensiva",
                                          "name": "Trampa del alfil en la Eslava (Bf4 + e4)"
                                        },
                                        "children": [
                                          {
                                            "id": "trap__h05-trampa-eslava-bf4-e4__10",
                                            "san": "Bf4",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Blancas desarrolla el alfil de dama fuera de la cadena de peones, apuntando hacia la casilla c7 y preparando el golpe central e4 que viene a continuacion.",
                                              "ventaja": "Pieza activa bien situada, y tiende la trampa: si negras responde con ...e6 sin cuidado, el golpe e4 sera muy fuerte.",
                                              "debilidad": "Ninguna."
                                            },
                                            "kind": "trap",
                                            "userColors": [
                                              "w"
                                            ],
                                            "trap": {
                                              "id": "h05-trampa-eslava-bf4-e4",
                                              "tipo": "ofensiva",
                                              "name": "Trampa del alfil en la Eslava (Bf4 + e4)"
                                            },
                                            "children": [
                                              {
                                                "id": "trap__h05-trampa-eslava-bf4-e4__11",
                                                "san": "e6",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "ERROR: negras juega la jugada mas natural de desarrollo (liberar el alfil de casillas claras y preparar Be7/Bd6), sin ver que esto permite a blancas el golpe central e4 con fuerza decisiva.",
                                                  "ventaja": "Parece un simple desarrollo natural, tipico de la variante de cambio.",
                                                  "debilidad": "Cae en la Trampa del alfil en la Eslava: la jugada mas precisa era una jugada de espera como ...a6 o ...Bf5 antes de comprometerse."
                                                },
                                                "kind": "trap",
                                                "userColors": [
                                                  "w"
                                                ],
                                                "trap": {
                                                  "id": "h05-trampa-eslava-bf4-e4",
                                                  "tipo": "ofensiva",
                                                  "name": "Trampa del alfil en la Eslava (Bf4 + e4)"
                                                },
                                                "isError": true,
                                                "children": [
                                                  {
                                                    "id": "trap__h05-trampa-eslava-bf4-e4__12",
                                                    "san": "e4",
                                                    "color": "w",
                                                    "explain": {
                                                      "idea": "Blancas ejecuta el golpe central: el peon avanza atacando el peon de d5, aprovechando que el caballo de f6 quedara clavado contra la dama negra tras las capturas que siguen.",
                                                      "ventaja": "Rompe el centro negro con ventaja clara, ya que la recaptura obligada deja al caballo de f6 clavado y a la posicion negra bajo fuerte presion.",
                                                      "debilidad": "Ninguna -- el golpe esta completamente justificado tacticamente."
                                                    },
                                                    "kind": "trap",
                                                    "userColors": [
                                                      "w"
                                                    ],
                                                    "trap": {
                                                      "id": "h05-trampa-eslava-bf4-e4",
                                                      "tipo": "ofensiva",
                                                      "name": "Trampa del alfil en la Eslava (Bf4 + e4)"
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "trap__h05-trampa-eslava-bf4-e4__13",
                                                        "san": "dxe4",
                                                        "color": "b",
                                                        "explain": {
                                                          "idea": "Negras se ve obligada a capturar, ya que dejar que blancas capture primero en d5 seria todavia peor para su estructura.",
                                                          "ventaja": "Gana un peon en apariencia.",
                                                          "debilidad": "Abre la posicion justo cuando el caballo de f6 va a quedar clavado tras la recaptura de blancas."
                                                        },
                                                        "kind": "trap",
                                                        "userColors": [
                                                          "w"
                                                        ],
                                                        "trap": {
                                                          "id": "h05-trampa-eslava-bf4-e4",
                                                          "tipo": "ofensiva",
                                                          "name": "Trampa del alfil en la Eslava (Bf4 + e4)"
                                                        },
                                                        "children": [
                                                          {
                                                            "id": "trap__h05-trampa-eslava-bf4-e4__14",
                                                            "san": "Nxe4",
                                                            "color": "w",
                                                            "explain": {
                                                              "idea": "Blancas recaptura con el caballo, que ahora clava al caballo negro de f6 contra la dama en d8 y amenaza con entrar en la posicion negra con fuerza decisiva.",
                                                              "ventaja": "Blancas recupera el peon y queda con una posicion claramente superior: el caballo f6 esta clavado y la posicion negra corre serio peligro de derrumbarse en las jugadas siguientes.",
                                                              "debilidad": "Ninguna -- es el remate de la combinacion."
                                                            },
                                                            "kind": "trap",
                                                            "userColors": [
                                                              "w"
                                                            ],
                                                            "trap": {
                                                              "id": "h05-trampa-eslava-bf4-e4",
                                                              "tipo": "ofensiva",
                                                              "name": "Trampa del alfil en la Eslava (Bf4 + e4)"
                                                            },
                                                            "leafOf": {
                                                              "trapId": "h05-trampa-eslava-bf4-e4",
                                                              "name": "Trampa del alfil en la Eslava (Bf4 + e4)",
                                                              "userColor": "w",
                                                              "overview": "Defensa Eslava, Variante de Cambio. Tras 1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.cxd5 cxd5 5.Nc3 Nc6 6.Bf4, si negras juega descuidadamente ...e6, blancas golpea con 7.e4! ganando material tras 7...dxe4 8.Nxe4 (el caballo f6 queda clavado y la posicion negra se derrumba). Se entrena aqui el lado de blancas para tender la trampa. Fuente: guia de la Defensa Eslava (precisesports.com), contrastada con indianchesscompany.com.",
                                                              "tipo": "ofensiva"
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "d4__d5__c4__e5",
                "san": "e5",
                "color": "b",
                "explain": {
                  "idea": "Contragambito Albin: en vez de defender o capturar en c4, negras contraataca de inmediato el centro con su propio gambito.",
                  "ventaja": "Jugada muy agresiva que busca sacar a blancas de la teoria mas conocida y crear complicaciones rapidas.",
                  "debilidad": "Objetivamente arriesgada: si blancas responde con precision (como en esta linea), negras queda con menos espacio y un peon avanzado que puede volverse debil en vez de fuerte."
                },
                "kind": "book",
                "userColors": [
                  "w"
                ],
                "variantName": "Contragambito Albin -- respuesta principal",
                "variantColorId": 10,
                "children": [
                  {
                    "id": "d4__d5__c4__e5__dxe5",
                    "san": "dxe5",
                    "color": "w",
                    "explain": {
                      "idea": "Acepta el gambito capturando el peon ofrecido; la respuesta mas natural y fuerte.",
                      "ventaja": "Gana un peon de forma momentanea sin ningun riesgo inmediato.",
                      "debilidad": "Ninguna; es la continuacion practicamente obligada."
                    },
                    "kind": "book",
                    "userColors": [
                      "w"
                    ],
                    "children": [
                      {
                        "id": "d4__d5__c4__e5__dxe5__d4",
                        "san": "d4",
                        "color": "b",
                        "explain": {
                          "idea": "Avanza el peon de dama en vez de recapturar, ganando espacio y clavando la idea de crear un peon pasado protegido mas adelante.",
                          "ventaja": "Peon muy avanzado que resta espacio a blancas en el centro.",
                          "debilidad": "El peon d4 queda sin apoyo inmediato y sera un objetivo constante durante toda la partida si blancas juega con precision."
                        },
                        "kind": "book",
                        "userColors": [
                          "w"
                        ],
                        "children": [
                          {
                            "id": "d4__d5__c4__e5__dxe5__d4__Nf3",
                            "san": "Nf3",
                            "color": "w",
                            "explain": {
                              "idea": "Desarrolla evitando complicaciones prematuras y prepara fianchettar el alfil de rey para presionar d4 a distancia.",
                              "ventaja": "Plan solido y sencillo de ejecutar, evita las lineas mas tacticas y complicadas del Albin.",
                              "debilidad": "Ninguna; es el plan mas fiable contra el Albin a nivel de club."
                            },
                            "kind": "book",
                            "userColors": [
                              "w"
                            ],
                            "children": [
                              {
                                "id": "d4__d5__c4__e5__dxe5__d4__Nf3__Nc6",
                                "san": "Nc6",
                                "color": "b",
                                "explain": {
                                  "idea": "Desarrolla y refuerza el peon d4 avanzado, preparando recuperar el peon e5 con ...Bxe5 o similar mas adelante.",
                                  "ventaja": "Pieza activa que sostiene la estructura de peones agresiva de negras.",
                                  "debilidad": "Ninguna inmediata; jugada natural del plan de negras."
                                },
                                "kind": "book",
                                "userColors": [
                                  "w"
                                ],
                                "children": [
                                  {
                                    "id": "d4__d5__c4__e5__dxe5__d4__Nf3__Nc6__g3",
                                    "san": "g3",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Prepara fianchettar el alfil de rey a g2, la pieza clave del plan de blancas contra el Albin: presiona el peon d4 desde la larga diagonal sin necesidad de bloquearlo con piezas.",
                                      "ventaja": "Plan estrategico claro y de bajo riesgo, tipico de todas las lineas solidas contra el Albin.",
                                      "debilidad": "Cede algo de tiempo mientras negras completa su desarrollo, aunque el plan compensa sobradamente a la larga."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "w"
                                    ],
                                    "children": [
                                      {
                                        "id": "d4__d5__c4__e5__dxe5__d4__Nf3__Nc6__g3__Be6",
                                        "san": "Be6",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Desarrolla el alfil de casillas claras, libre desde el principio en el Albin, y prepara el enroque largo en algunas lineas.",
                                          "ventaja": "Pieza activa fuera de la cadena de peones.",
                                          "debilidad": "No hace nada por resolver el problema de fondo del peon d4 avanzado, que sigue siendo un objetivo a largo plazo para blancas."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "w"
                                        ],
                                        "children": [
                                          {
                                            "id": "d4__d5__c4__e5__dxe5__d4__Nf3__Nc6__g3__Be6__Bg2",
                                            "san": "Bg2",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Completa el fianchetto: el alfil presiona d4 y c6 desde la larga diagonal, la pieza clave de todo el plan contra el Albin.",
                                              "ventaja": "Presion constante y de largo alcance sobre el peon avanzado de negras sin arriesgar nada.",
                                              "debilidad": "Ninguna; es el objetivo de todo el plan desde la jugada 5."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "w"
                                            ],
                                            "children": [
                                              {
                                                "id": "d4__d5__c4__e5__dxe5__d4__Nf3__Nc6__g3__Be6__Bg2__Qd7",
                                                "san": "Qd7",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Prepara el enroque largo (O-O-O) y conecta las torres, un plan tipico de negras en el Albin para buscar contrajuego rapido en el flanco de rey.",
                                                  "ventaja": "Desarrollo activo que mantiene las opciones de ataque de negras.",
                                                  "debilidad": "El rey en el enroque largo puede quedar expuesto si blancas ataca el flanco de dama con a3-b4 mas adelante."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "w"
                                                ],
                                                "leafOf": {
                                                  "lineId": "h02-contragambito-albin",
                                                  "name": "Contragambito Albin -- respuesta principal",
                                                  "userColor": "w",
                                                  "overview": "Familia Gambito de Dama: en vez de sostener o capturar en c4, negras contragambitea con e5, buscando complicaciones tacticas inmediatas y un peon pasado avanzado en d4. Blancas responde con el plan mas solido y menos comprometido: capturar en e5 y fianchettar el alfil de rey para presionar el peon d4 desde lejos, sin tener que calcular las lineas mas afiladas."
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "trap__h05-trampa-lasker-albin__6",
                            "san": "e3",
                            "color": "w",
                            "explain": {
                              "idea": "ERROR: blancas intenta liquidar el peon avanzado de d4 de inmediato con e3, la jugada mas natural pero tambien la que Lasker enseno a temer.",
                              "ventaja": "Parece resolver el problema del peon de d4 de la forma mas directa.",
                              "debilidad": "Cae en la Trampa Lasker: la jugada correcta es 4.Nf3, desarrollando primero."
                            },
                            "kind": "trap",
                            "userColors": [
                              "w"
                            ],
                            "trap": {
                              "id": "h05-trampa-lasker-albin",
                              "tipo": "defensiva",
                              "name": "Trampa Lasker en el Contragambito Albin"
                            },
                            "isError": true,
                            "variantName": "Trampa Lasker en el Contragambito Albin",
                            "variantColorId": "trap",
                            "children": [
                              {
                                "id": "trap__h05-trampa-lasker-albin__7",
                                "san": "Bb4+",
                                "color": "b",
                                "explain": {
                                  "idea": "Negras da jaque con el alfil antes de resolver la tension en d4, forzando a blancas a decidir como bloquear.",
                                  "ventaja": "Gana un tiempo obligando a blancas a responder al jaque.",
                                  "debilidad": "Ninguna."
                                },
                                "kind": "trap",
                                "userColors": [
                                  "w"
                                ],
                                "trap": {
                                  "id": "h05-trampa-lasker-albin",
                                  "tipo": "defensiva",
                                  "name": "Trampa Lasker en el Contragambito Albin"
                                },
                                "children": [
                                  {
                                    "id": "trap__h05-trampa-lasker-albin__8",
                                    "san": "Bd2",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Blancas bloquea el jaque con el alfil (5.Nd2 seria peor, ya que permite a negras jugar dxe3 con ventaja adicional).",
                                      "ventaja": "Bloquea el jaque de la forma mas natural.",
                                      "debilidad": "El alfil en d2 sera el objetivo del sacrificio tactico que sigue."
                                    },
                                    "kind": "trap",
                                    "userColors": [
                                      "w"
                                    ],
                                    "trap": {
                                      "id": "h05-trampa-lasker-albin",
                                      "tipo": "defensiva",
                                      "name": "Trampa Lasker en el Contragambito Albin"
                                    },
                                    "children": [
                                      {
                                        "id": "trap__h05-trampa-lasker-albin__9",
                                        "san": "dxe3",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Negras deja el alfil colgado y en su lugar captura en e3, abriendo la trampa: si blancas ahora captura el alfil, cae en una combinacion perdedora.",
                                          "ventaja": "Tiende el cebo de la Trampa Lasker.",
                                          "debilidad": "Aparentemente pierde una pieza sin compensacion si blancas no captura -- pero blancas casi siempre captura, por instinto natural."
                                        },
                                        "kind": "trap",
                                        "userColors": [
                                          "w"
                                        ],
                                        "trap": {
                                          "id": "h05-trampa-lasker-albin",
                                          "tipo": "defensiva",
                                          "name": "Trampa Lasker en el Contragambito Albin"
                                        },
                                        "children": [
                                          {
                                            "id": "trap__h05-trampa-lasker-albin__10",
                                            "san": "Bxb4",
                                            "color": "w",
                                            "explain": {
                                              "idea": "ERROR decisivo: blancas captura el alfil que parecia abandonado, sin ver la combinacion tactica que sigue.",
                                              "ventaja": "Parece ganar una pieza limpia.",
                                              "debilidad": "Cae en la Trampa Lasker: la jugada correcta era 6.fxe3, aceptando doblar peones pero evitando el desastre tactico."
                                            },
                                            "kind": "trap",
                                            "userColors": [
                                              "w"
                                            ],
                                            "trap": {
                                              "id": "h05-trampa-lasker-albin",
                                              "tipo": "defensiva",
                                              "name": "Trampa Lasker en el Contragambito Albin"
                                            },
                                            "isError": true,
                                            "children": [
                                              {
                                                "id": "trap__h05-trampa-lasker-albin__11",
                                                "san": "exf2+",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "El peon negro avanza capturando en f2 con jaque, abriendo el ataque decisivo sobre el rey blanco.",
                                                  "ventaja": "El rey blanco no puede capturar con el rey (Kxf2?? perderia la dama a Qxd1), asi que blancas se ve forzado a jugar Ke2.",
                                                  "debilidad": "Ninguna."
                                                },
                                                "kind": "trap",
                                                "userColors": [
                                                  "w"
                                                ],
                                                "trap": {
                                                  "id": "h05-trampa-lasker-albin",
                                                  "tipo": "defensiva",
                                                  "name": "Trampa Lasker en el Contragambito Albin"
                                                },
                                                "children": [
                                                  {
                                                    "id": "trap__h05-trampa-lasker-albin__12",
                                                    "san": "Ke2",
                                                    "color": "w",
                                                    "explain": {
                                                      "idea": "Unica jugada razonable: el rey blanco escapa del jaque sin poder capturar el peon, porque Kxf2 perderia la dama de inmediato a Qxd1.",
                                                      "ventaja": "Evita perder la dama de inmediato.",
                                                      "debilidad": "El rey queda expuesto en el centro y el peon de f2 sigue vivo, amenazando coronar."
                                                    },
                                                    "kind": "trap",
                                                    "userColors": [
                                                      "w"
                                                    ],
                                                    "trap": {
                                                      "id": "h05-trampa-lasker-albin",
                                                      "tipo": "defensiva",
                                                      "name": "Trampa Lasker en el Contragambito Albin"
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "trap__h05-trampa-lasker-albin__13",
                                                        "san": "fxg1=N+",
                                                        "color": "b",
                                                        "explain": {
                                                          "idea": "El remate de la combinacion: el peon corona subpromocionando a caballo (no a dama, que no daria jaque desde g1) capturando ademas al caballo blanco que seguia en su casilla original, y dando jaque al rey.",
                                                          "ventaja": "Subpromocion tactica poco comun: negras gana material decisivo (una pieza menor y calidad de posicion) manteniendo la iniciativa con jaque.",
                                                          "debilidad": "Ninguna -- es el golpe que da nombre a la Trampa Lasker."
                                                        },
                                                        "kind": "trap",
                                                        "userColors": [
                                                          "w"
                                                        ],
                                                        "trap": {
                                                          "id": "h05-trampa-lasker-albin",
                                                          "tipo": "defensiva",
                                                          "name": "Trampa Lasker en el Contragambito Albin"
                                                        },
                                                        "leafOf": {
                                                          "trapId": "h05-trampa-lasker-albin",
                                                          "name": "Trampa Lasker en el Contragambito Albin",
                                                          "userColor": "w",
                                                          "overview": "Contragambito Albin. Tras 1.d4 d5 2.c4 e5 3.dxe5 d4, la jugada natural 4.e3?? pierde la dama tras 4...Bb4+ 5.Bd2 dxe3! 6.Bxb4?? exf2+ 7.Ke2 fxg1=N+!! con subpromocion. Regla a memorizar: nunca jugar e3 en esa posicion concreta. Se entrena aqui el lado de blancas para reconocer y evitar la trampa. Fuente: Wikipedia (\"Albin Countergambit, Lasker Trap\"), House of Staunton.",
                                                          "tipo": "defensiva"
                                                        }
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "d4__d5__c4__Nc6",
                "san": "Nc6",
                "color": "b",
                "explain": {
                  "idea": "Defensa Chigorin: desarrolla el caballo de dama antes que el peon de rey, una idea poco ortodoxa que prioriza piezas activas sobre estructura solida.",
                  "ventaja": "Desarrollo rapido y planteamiento dificil de preparar para blancas si no conoce la teoria concreta.",
                  "debilidad": "Bloquea el propio peon c7, dificultando el plan clasico de sostener el centro con c6; objetivamente algo dudosa a nivel teorico."
                },
                "kind": "book",
                "userColors": [
                  "w"
                ],
                "variantName": "Defensa Chigorin -- respuesta principal",
                "variantColorId": 7,
                "children": [
                  {
                    "id": "d4__d5__c4__Nc6__Nf3",
                    "san": "Nf3",
                    "color": "w",
                    "explain": {
                      "idea": "Desarrolla y protege el peon d4 antes de decidir como responder al planteamiento poco convencional de negras.",
                      "ventaja": "Jugada solida y flexible que no compromete nada.",
                      "debilidad": "Ninguna relevante."
                    },
                    "kind": "book",
                    "userColors": [
                      "w"
                    ],
                    "children": [
                      {
                        "id": "d4__d5__c4__Nc6__Nf3__Bg4",
                        "san": "Bg4",
                        "color": "b",
                        "explain": {
                          "idea": "Clava el caballo de f3 para dificultar que blancas defienda d4 con comodidad.",
                          "ventaja": "Pieza activa que presiona de inmediato el centro de blancas.",
                          "debilidad": "Deja que blancas rompa la clavada con h3 y luego gane el par de alfiles si negras captura en f3."
                        },
                        "kind": "book",
                        "userColors": [
                          "w"
                        ],
                        "children": [
                          {
                            "id": "d4__d5__c4__Nc6__Nf3__Bg4__cxd5",
                            "san": "cxd5",
                            "color": "w",
                            "explain": {
                              "idea": "Cambia en el centro antes de que negras pueda sostenerlo, aprovechando que Nc6 ya bloquea la recaptura mas natural con el peon c.",
                              "ventaja": "Gana un peon momentaneamente y fuerza a negras a recapturar con una pieza, perdiendo tiempo.",
                              "debilidad": "Ninguna; es la continuacion mas fuerte y directa contra el planteamiento de negras."
                            },
                            "kind": "book",
                            "userColors": [
                              "w"
                            ],
                            "children": [
                              {
                                "id": "d4__d5__c4__Nc6__Nf3__Bg4__cxd5__Bxf3",
                                "san": "Bxf3",
                                "color": "b",
                                "explain": {
                                  "idea": "Antes de recapturar en d5, negras resuelve la clavada capturando el caballo, evitando que blancas gane un tiempo con h3 mas adelante.",
                                  "ventaja": "Elimina una pieza defensora clave de blancas y desorganiza momentaneamente su estructura de peones de rey.",
                                  "debilidad": "Cede el par de alfiles a cambio de nada material, una concesion estructural importante a largo plazo."
                                },
                                "kind": "book",
                                "userColors": [
                                  "w"
                                ],
                                "children": [
                                  {
                                    "id": "d4__d5__c4__Nc6__Nf3__Bg4__cxd5__Bxf3__gxf3",
                                    "san": "gxf3",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Recaptura con el peon, la unica opcion, doblando los propios peones de rey.",
                                      "ventaja": "A cambio de los peones doblados, blancas se queda con el par de alfiles y una columna g semiabierta util para el ataque.",
                                      "debilidad": "Estructura de peones de rey daniada, aunque el par de alfiles compensa sobradamente segun la teoria establecida."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "w"
                                    ],
                                    "children": [
                                      {
                                        "id": "d4__d5__c4__Nc6__Nf3__Bg4__cxd5__Bxf3__gxf3__Qxd5",
                                        "san": "Qxd5",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Recupera el peon con la dama, la recaptura mas natural ya que el caballo de c6 impide hacerlo con el peon c.",
                                          "ventaja": "Recupera el material inmediatamente.",
                                          "debilidad": "La dama queda en el centro, expuesta a perder otro tiempo si blancas encuentra Nc3 con ataque."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "w"
                                        ],
                                        "children": [
                                          {
                                            "id": "d4__d5__c4__Nc6__Nf3__Bg4__cxd5__Bxf3__gxf3__Qxd5__e3",
                                            "san": "e3",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Prepara el desarrollo del alfil de rey y refuerza d4, sin prisa por atacar la dama de inmediato.",
                                              "ventaja": "Jugada solida que consolida la ventaja estructural (par de alfiles) sin ningun riesgo.",
                                              "debilidad": "Ninguna relevante."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "w"
                                            ],
                                            "children": [
                                              {
                                                "id": "d4__d5__c4__Nc6__Nf3__Bg4__cxd5__Bxf3__gxf3__Qxd5__e3__e5",
                                                "san": "e5",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Contraataca el centro de blancas antes de que consolide del todo su ventaja estructural, tipico plan activo de la Chigorin.",
                                                  "ventaja": "Jugada mas combativa que quedarse pasivo, cuestiona d4 de inmediato.",
                                                  "debilidad": "Puede abrir aun mas la posicion en un momento en el que blancas tiene el par de alfiles, generalmente favorable a la parte con los dos alfiles."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "w"
                                                ],
                                                "leafOf": {
                                                  "lineId": "h02-defensa-chigorin",
                                                  "name": "Defensa Chigorin -- respuesta principal",
                                                  "userColor": "w",
                                                  "overview": "Familia Gambito de Dama: negras desarrolla el caballo de dama antes que el peon, rompiendo las reglas clasicas de la apertura a cambio de piezas rapidas y activas. Blancas responde con el plan mas claro: cambiar en d5 y aceptar doblar los propios peones a cambio del par de alfiles, una ventaja estructural a largo plazo frente al planteamiento poco ortodoxo de negras."
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "d4__d5__c4__Bf5",
                "san": "Bf5",
                "color": "b",
                "explain": {
                  "idea": "Defensa Baltica: saca el alfil de casillas claras antes que nada, resolviendo de raiz el problema estructural del Rehusado (el alfil encerrado tras ...e6).",
                  "ventaja": "Pieza activa colocada fuera de la cadena de peones desde el principio, sin depender de ningun orden de jugadas posterior.",
                  "debilidad": "Pierde un tiempo de desarrollo central y expone el alfil a ser atacado pronto con Qb3 o cxd5, ganando tiempo blancas."
                },
                "kind": "book",
                "userColors": [
                  "w"
                ],
                "variantName": "Defensa Baltica",
                "variantColorId": 8,
                "children": [
                  {
                    "id": "d4__d5__c4__Bf5__Nc3",
                    "san": "Nc3",
                    "color": "w",
                    "explain": {
                      "idea": "Desarrolla una pieza y refuerza el control sobre d5 antes de decidir el plan concreto contra el alfil.",
                      "ventaja": "Pieza activa que mantiene la tension central sin comprometerse aun.",
                      "debilidad": "Ninguna relevante en este orden de jugadas."
                    },
                    "kind": "book",
                    "userColors": [
                      "w"
                    ],
                    "children": [
                      {
                        "id": "d4__d5__c4__Bf5__Nc3__e6",
                        "san": "e6",
                        "color": "b",
                        "explain": {
                          "idea": "Completa el desarrollo del centro y abre la diagonal del alfil de rey, ya con el otro alfil colocado fuera con anterioridad.",
                          "ventaja": "Estructura solida con el problema del alfil de casillas claras ya resuelto de antemano.",
                          "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                        },
                        "kind": "book",
                        "userColors": [
                          "w"
                        ],
                        "children": [
                          {
                            "id": "d4__d5__c4__Bf5__Nc3__e6__Nf3",
                            "san": "Nf3",
                            "color": "w",
                            "explain": {
                              "idea": "Desarrolla y prepara el enroque corto antes de decidir si atacar el alfil con Qb3.",
                              "ventaja": "Jugada solida y flexible que no compromete nada.",
                              "debilidad": "Ninguna relevante."
                            },
                            "kind": "book",
                            "userColors": [
                              "w"
                            ],
                            "children": [
                              {
                                "id": "d4__d5__c4__Bf5__Nc3__e6__Nf3__Nf6",
                                "san": "Nf6",
                                "color": "b",
                                "explain": {
                                  "idea": "Desarrolla la pieza mas natural, presionando e4 y preparando el enroque corto.",
                                  "ventaja": "Jugada solida que no compromete nada.",
                                  "debilidad": "Ninguna relevante; es la respuesta mas natural en la posicion."
                                },
                                "kind": "book",
                                "userColors": [
                                  "w"
                                ],
                                "children": [
                                  {
                                    "id": "d4__d5__c4__Bf5__Nc3__e6__Nf3__Nf6__Qb3",
                                    "san": "Qb3",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Ataca simultaneamente el alfil de f5 (indirectamente, presionando b7) y el peon b7, el plan mas incomodo para negras en la Defensa Baltica.",
                                      "ventaja": "Doble amenaza que fuerza a negras a reaccionar con precision, ganando tiempo e iniciativa para blancas.",
                                      "debilidad": "Saca la dama pronto, lo que puede dar a negras un tiempo de desarrollo si encuentra la forma de atacarla mas adelante."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "w"
                                    ],
                                    "children": [
                                      {
                                        "id": "d4__d5__c4__Bf5__Nc3__e6__Nf3__Nf6__Qb3__Qc8",
                                        "san": "Qc8",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Defiende b7 de forma indirecta y mantiene el alfil de f5 protegido, la respuesta mas solida a la amenaza de Qb3.",
                                          "ventaja": "Resuelve ambas amenazas de golpe sin conceder ninguna concesion material.",
                                          "debilidad": "La dama queda algo pasiva en c8, con menos actividad que si hubiera podido desarrollarse de forma mas natural."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "w"
                                        ],
                                        "children": [
                                          {
                                            "id": "d4__d5__c4__Bf5__Nc3__e6__Nf3__Nf6__Qb3__Qc8__Bg5",
                                            "san": "Bg5",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Clava el caballo de f6 y aumenta la presion sobre el centro, aprovechando la iniciativa ganada con Qb3.",
                                              "ventaja": "Pieza activa fuera de la cadena de peones que mantiene la iniciativa de blancas.",
                                              "debilidad": "Ninguna inmediata."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "w"
                                            ],
                                            "children": [
                                              {
                                                "id": "d4__d5__c4__Bf5__Nc3__e6__Nf3__Nf6__Qb3__Qc8__Bg5__c6",
                                                "san": "c6",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Refuerza d5 y prepara ...Nbd7, consolidando la posicion tras las primeras jugadas mas incomodas.",
                                                  "ventaja": "Jugada solida que estabiliza el centro.",
                                                  "debilidad": "Jugada algo pasiva que no desarrolla ninguna pieza nueva, dejando a blancas con la iniciativa del planteamiento."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "w"
                                                ],
                                                "leafOf": {
                                                  "lineId": "h02-defensa-baltica",
                                                  "name": "Defensa Baltica",
                                                  "userColor": "w",
                                                  "overview": "Familia Gambito de Dama: negras saca el alfil de casillas claras antes que nada, evitando por completo el problema estructural tipico del Rehusado, a costa de ceder tiempo y de exponer el alfil a ser atacado pronto. Blancas responde con un plan de desarrollo natural y ganancia de tiempo con Qb3, apuntando tanto al alfil como al flanco de dama de negras."
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "d4__d5__c4__c5",
                "san": "c5",
                "color": "b",
                "explain": {
                  "idea": "Defensa Simetrica: contraataca el centro de blancas en vez de sostener o capturar en c4, buscando cambios inmediatos y una posicion abierta.",
                  "ventaja": "Plan dinamico que evita las estructuras mas conocidas del Rehusado o la Eslava.",
                  "debilidad": "Tras los cambios centrales, la dama de negras puede acabar perdiendo tiempos, similar a lo que ocurre en la Escandinava."
                },
                "kind": "book",
                "userColors": [
                  "w"
                ],
                "variantName": "Defensa Simetrica (2...c5)",
                "variantColorId": 0,
                "children": [
                  {
                    "id": "d4__d5__c4__c5__cxd5",
                    "san": "cxd5",
                    "color": "w",
                    "explain": {
                      "idea": "Cambia en el centro antes de que negras pueda definir la estructura a su gusto.",
                      "ventaja": "Fuerza a negras a recapturar, casi siempre con la dama, ganando un tiempo de desarrollo.",
                      "debilidad": "Ninguna; es la continuacion mas fuerte y natural."
                    },
                    "kind": "book",
                    "userColors": [
                      "w"
                    ],
                    "children": [
                      {
                        "id": "d4__d5__c4__c5__cxd5__Qxd5",
                        "san": "Qxd5",
                        "color": "b",
                        "explain": {
                          "idea": "Recaptura con la dama, la unica pieza disponible de inmediato.",
                          "ventaja": "Recupera el material igualado.",
                          "debilidad": "La dama queda en el centro, expuesta a perder otro tiempo con Nc3 -- el mismo problema estructural que la Escandinava."
                        },
                        "kind": "book",
                        "userColors": [
                          "w"
                        ],
                        "children": [
                          {
                            "id": "d4__d5__c4__c5__cxd5__Qxd5__Nc3",
                            "san": "Nc3",
                            "color": "w",
                            "explain": {
                              "idea": "Desarrolla atacando la dama de negras, ganando un tiempo de desarrollo gratis.",
                              "ventaja": "Pieza activa con tiempo ganado, tipico de todas las lineas donde la dama rival sale pronto al centro.",
                              "debilidad": "Ninguna; es la jugada mas natural y fuerte."
                            },
                            "kind": "book",
                            "userColors": [
                              "w"
                            ],
                            "children": [
                              {
                                "id": "d4__d5__c4__c5__cxd5__Qxd5__Nc3__Qd6",
                                "san": "Qd6",
                                "color": "b",
                                "explain": {
                                  "idea": "Retira la dama a una casilla segura que mantiene la vista sobre el centro y el flanco de rey.",
                                  "ventaja": "Casilla razonablemente activa y segura para la dama.",
                                  "debilidad": "La dama sigue relativamente expuesta y puede volver a perder tiempos mas adelante."
                                },
                                "kind": "book",
                                "userColors": [
                                  "w"
                                ],
                                "children": [
                                  {
                                    "id": "d4__d5__c4__c5__cxd5__Qxd5__Nc3__Qd6__Nf3",
                                    "san": "Nf3",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Desarrolla y prepara el enroque corto, completando con rapidez el desarrollo de piezas menores.",
                                      "ventaja": "Jugada solida que mantiene la iniciativa ganada con los tiempos anteriores.",
                                      "debilidad": "Ninguna relevante."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "w"
                                    ],
                                    "children": [
                                      {
                                        "id": "d4__d5__c4__c5__cxd5__Qxd5__Nc3__Qd6__Nf3__Nf6",
                                        "san": "Nf6",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Desarrolla la pieza mas natural, presionando e4 y preparando el enroque corto.",
                                          "ventaja": "Jugada solida que no compromete nada.",
                                          "debilidad": "Ninguna relevante; es la respuesta mas natural en la posicion."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "w"
                                        ],
                                        "children": [
                                          {
                                            "id": "d4__d5__c4__c5__cxd5__Qxd5__Nc3__Qd6__Nf3__Nf6__e4",
                                            "san": "e4",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Ocupa el centro con el segundo peon central, ganando mucho espacio mientras negras sigue sin completar el desarrollo.",
                                              "ventaja": "Centro amplio y fuerte, la compensacion natural de blancas por los tiempos ganados con la dama rival.",
                                              "debilidad": "Ninguna relevante; es la continuacion mas ambiciosa y fuerte."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "w"
                                            ],
                                            "children": [
                                              {
                                                "id": "d4__d5__c4__c5__cxd5__Qxd5__Nc3__Qd6__Nf3__Nf6__e4__cxd4",
                                                "san": "cxd4",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Cambia el peon de flanco de dama que ya no puede sostener con comodidad, simplificando la estructura central.",
                                                  "ventaja": "Resuelve la tension en el flanco de dama antes de que blancas la aumente mas.",
                                                  "debilidad": "Cede aun mas espacio central a blancas, que recuperara el peon con ventaja de desarrollo."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "w"
                                                ],
                                                "leafOf": {
                                                  "lineId": "h02-defensa-simetrica",
                                                  "name": "Defensa Simetrica (2...c5)",
                                                  "userColor": "w",
                                                  "overview": "Familia Gambito de Dama: negras contraataca de inmediato el centro con c5 en vez de sostener o capturar en c4, buscando cambios rapidos y una posicion abierta y dinamica. Blancas responde cambiando en d5 y desarrollando con naturalidad, quedando con una ligera ventaja de espacio y desarrollo gracias a los tiempos que negras pierde recolocando la dama."
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "d4__d5__c4__Nf6",
                "san": "Nf6",
                "color": "b",
                "explain": {
                  "idea": "Defensa Marshall: ignora por completo la oferta de peon en c4, desarrollando de inmediato en vez de decidir el plan estructural.",
                  "ventaja": "Desarrollo rapido que evita tener que decidir de entrada entre el Rehusado, la Eslava o el Aceptado.",
                  "debilidad": "No hace nada por defender d5 ni disputar c4, permitiendo a blancas capturar en d5 con ganancia de tiempo y espacio."
                },
                "kind": "book",
                "userColors": [
                  "w"
                ],
                "variantName": "Defensa Marshall (2...Nf6)",
                "variantColorId": 9,
                "children": [
                  {
                    "id": "d4__d5__c4__Nf6__cxd5",
                    "san": "cxd5",
                    "color": "w",
                    "explain": {
                      "idea": "Captura el peon central antes de que negras pueda sostenerlo, la respuesta mas natural y fuerte contra este planteamiento.",
                      "ventaja": "Gana un peon momentaneamente y fuerza a negras a recapturar, perdiendo tiempo.",
                      "debilidad": "Ninguna; es la continuacion mas directa y fuerte."
                    },
                    "kind": "book",
                    "userColors": [
                      "w"
                    ],
                    "children": [
                      {
                        "id": "d4__d5__c4__Nf6__cxd5__Nxd5",
                        "san": "Nxd5",
                        "color": "b",
                        "explain": {
                          "idea": "Recupera el peon con el caballo, la unica recaptura razonable ya desarrollada.",
                          "ventaja": "Recupera el material y coloca el caballo en una casilla central.",
                          "debilidad": "El caballo en d5 sera blanco de e4 en la siguiente jugada, obligandolo a retroceder y perdiendo otro tiempo."
                        },
                        "kind": "book",
                        "userColors": [
                          "w"
                        ],
                        "children": [
                          {
                            "id": "d4__d5__c4__Nf6__cxd5__Nxd5__Nf3",
                            "san": "Nf3",
                            "color": "w",
                            "explain": {
                              "idea": "Desarrolla antes de ocupar el centro con e4, completando el desarrollo de piezas menores con naturalidad.",
                              "ventaja": "Jugada flexible que prepara el enroque corto sin ninguna prisa.",
                              "debilidad": "Ninguna relevante."
                            },
                            "kind": "book",
                            "userColors": [
                              "w"
                            ],
                            "children": [
                              {
                                "id": "d4__d5__c4__Nf6__cxd5__Nxd5__Nf3__g6",
                                "san": "g6",
                                "color": "b",
                                "explain": {
                                  "idea": "Prepara el fianchetto del alfil de rey, el plan mas habitual de negras dentro de la Defensa Marshall para compensar la falta de espacio central.",
                                  "ventaja": "El alfil en g7 controlara la larga diagonal, compensando en parte la ventaja de espacio de blancas.",
                                  "debilidad": "Debilita ligeramente las casillas oscuras alrededor del futuro rey."
                                },
                                "kind": "book",
                                "userColors": [
                                  "w"
                                ],
                                "children": [
                                  {
                                    "id": "d4__d5__c4__Nf6__cxd5__Nxd5__Nf3__g6__e4",
                                    "san": "e4",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Ocupa el centro con el segundo peon central, atacando de paso al caballo de d5 y ganando otro tiempo mas.",
                                      "ventaja": "Centro amplio y fuerte, la clara ventaja de espacio que caracteriza toda la Defensa Marshall a favor de blancas.",
                                      "debilidad": "Ninguna relevante; es la continuacion mas natural y fuerte."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "w"
                                    ],
                                    "children": [
                                      {
                                        "id": "d4__d5__c4__Nf6__cxd5__Nxd5__Nf3__g6__e4__Nb6",
                                        "san": "Nb6",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Retira el caballo a una casilla razonable, presionando de reojo el peon c4 ya avanzado a e4... realmente vigilando d5 y c4 desde el flanco.",
                                          "ventaja": "Pieza que sigue participando en la partida sin perder mas tiempo.",
                                          "debilidad": "Ninguna relevante; es la retirada mas natural."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "w"
                                        ],
                                        "children": [
                                          {
                                            "id": "d4__d5__c4__Nf6__cxd5__Nxd5__Nf3__g6__e4__Nb6__Nc3",
                                            "san": "Nc3",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Desarrolla la ultima pieza menor del flanco de dama, completando un desarrollo rapido y comodo con una clara ventaja de espacio.",
                                              "ventaja": "Pieza activa que corona un desarrollo modelo tras los tiempos ganados en las primeras jugadas.",
                                              "debilidad": "Ninguna relevante."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "w"
                                            ],
                                            "children": [
                                              {
                                                "id": "d4__d5__c4__Nf6__cxd5__Nxd5__Nf3__g6__e4__Nb6__Nc3__Bg7",
                                                "san": "Bg7",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Completa el fianchetto, la ultima pieza menor de desarrollo natural antes del enroque.",
                                                  "ventaja": "Presion de largo alcance sobre el centro desde la larga diagonal, compensando en parte la falta de espacio.",
                                                  "debilidad": "Ninguna relevante; es la continuacion mas natural para completar el desarrollo."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "w"
                                                ],
                                                "leafOf": {
                                                  "lineId": "h02-defensa-marshall",
                                                  "name": "Defensa Marshall (2...Nf6)",
                                                  "userColor": "w",
                                                  "overview": "Familia Gambito de Dama: negras ignora por completo el peon c4 y desarrolla de inmediato el caballo de rey, dejando que blancas capture en d5 con ganancia de tiempo. Blancas responde con el plan mas natural: recuperar el peon, ocupar el centro con e4 y desarrollar con comodidad, quedando con una clara ventaja de espacio frente a un planteamiento poco exigente de negras."
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "d4__d5__Bf4",
            "san": "Bf4",
            "color": "w",
            "explain": {
              "idea": "Sistema Londres: saca el alfil de dama antes de cerrarlo con e3, la jugada que define todo el sistema.",
              "ventaja": "Desarrollo rapido y sin teoria compleja; blancas monta la misma estructura contra casi cualquier respuesta de negras.",
              "debilidad": "El alfil puede convertirse en objetivo de un futuro ...Nh5 o ...Qb6 en algunas lineas, aunque no es una amenaza inmediata aqui."
            },
            "kind": "book",
            "userColors": [
              "b"
            ],
            "variantName": "Sistema Londres -- respuesta clasica con Bd6",
            "variantColorId": 9,
            "children": [
              {
                "id": "d4__d5__Bf4__Nf6",
                "san": "Nf6",
                "color": "b",
                "explain": {
                  "idea": "Desarrolla la pieza mas natural, presionando e4 y preparando el enroque corto.",
                  "ventaja": "Jugada solida que no compromete nada y acelera la seguridad del rey.",
                  "debilidad": "Ninguna relevante; es la respuesta mas natural en la posicion."
                },
                "kind": "book",
                "userColors": [
                  "b"
                ],
                "children": [
                  {
                    "id": "d4__d5__Bf4__Nf6__e3",
                    "san": "e3",
                    "color": "w",
                    "explain": {
                      "idea": "Refuerza d4 y abre la diagonal del alfil de rey antes de decidir su destino (d3 o e2).",
                      "ventaja": "Estructura solida e inflexible ante los planes de negras; casi nunca se sale de este esquema.",
                      "debilidad": "Encierra temporalmente al alfil de dama ya desarrollado en f4 solo en el sentido de reducir su movilidad por detras de la cadena, aunque ya esta fuera de la cadena de peones."
                    },
                    "kind": "book",
                    "userColors": [
                      "b"
                    ],
                    "children": [
                      {
                        "id": "d4__d5__Bf4__Nf6__e3__e6",
                        "san": "e6",
                        "color": "b",
                        "explain": {
                          "idea": "Prepara el desarrollo del alfil de rey a d6 o e7 y sostiene el centro con una estructura solida.",
                          "ventaja": "Posicion flexible que no compromete nada todavia.",
                          "debilidad": "El alfil de casillas claras de negras queda temporalmente encerrado tras la cadena de peones, el mismo problema estructural de siempre contra sistemas de peon en d4."
                        },
                        "kind": "book",
                        "userColors": [
                          "b"
                        ],
                        "children": [
                          {
                            "id": "d4__d5__Bf4__Nf6__e3__e6__Nf3",
                            "san": "Nf3",
                            "color": "w",
                            "explain": {
                              "idea": "Desarrolla la ultima pieza menor del flanco de rey antes de decidir entre Bd3 o Be2.",
                              "ventaja": "Jugada solida y flexible que prepara el enroque corto de inmediato.",
                              "debilidad": "Ninguna relevante."
                            },
                            "kind": "book",
                            "userColors": [
                              "b"
                            ],
                            "children": [
                              {
                                "id": "d4__d5__Bf4__Nf6__e3__e6__Nf3__Bd6",
                                "san": "Bd6",
                                "color": "b",
                                "explain": {
                                  "idea": "Desarrolla el alfil de rey enfrentando directamente al alfil de blancas en f4, buscando el cambio de piezas menores.",
                                  "ventaja": "Pieza activa apuntando al flanco de rey de blancas y lista para preparar ...O-O de inmediato.",
                                  "debilidad": "Invita al cambio Bxd6 si blancas lo desea, aunque normalmente blancas prefiere retirarse a g3 para mantener la pareja de alfiles activa."
                                },
                                "kind": "book",
                                "userColors": [
                                  "b"
                                ],
                                "children": [
                                  {
                                    "id": "d4__d5__Bf4__Nf6__e3__e6__Nf3__Bd6__Bg3",
                                    "san": "Bg3",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Evita el cambio de alfiles retirandose a g3, manteniendo la pieza activa sobre la diagonal b8-h2.",
                                      "ventaja": "Conserva el alfil fuera de la cadena de peones y mantiene la presion diagonal a largo plazo.",
                                      "debilidad": "Pierde un tiempo respecto a cambiar directamente, aunque es la eleccion mas ambiciosa en la practica."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "b"
                                    ],
                                    "children": [
                                      {
                                        "id": "d4__d5__Bf4__Nf6__e3__e6__Nf3__Bd6__Bg3__O-O",
                                        "san": "O-O",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Pone el rey a salvo antes de decidir el plan de flanco de dama.",
                                          "ventaja": "Seguridad del rey resuelta; a partir de aqui negras puede pensar en ...c5 o ...b6.",
                                          "debilidad": "Ninguna; es la jugada mas natural para completar la seguridad basica."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "b"
                                        ],
                                        "children": [
                                          {
                                            "id": "d4__d5__Bf4__Nf6__e3__e6__Nf3__Bd6__Bg3__O-O__Bd3",
                                            "san": "Bd3",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Completa el desarrollo de piezas menores enfrentando al alfil de negras en d6, preparando el enroque corto.",
                                              "ventaja": "Pieza activa sobre la diagonal b1-h7, apuntando hacia el flanco de rey de negras.",
                                              "debilidad": "Si negras cambia con ...Bxg3, blancas debe recapturar con hxg3 abriendo la columna h, una concesion menor pero real que hay que vigilar."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "b"
                                            ],
                                            "children": [
                                              {
                                                "id": "d4__d5__Bf4__Nf6__e3__e6__Nf3__Bd6__Bg3__O-O__Bd3__c5",
                                                "san": "c5",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Contraataca el centro de blancas en el flanco de dama, el plan tipico de negras contra el Sistema Londres.",
                                                  "ventaja": "Gana espacio y actividad en el flanco de dama sin descuidar la seguridad del rey.",
                                                  "debilidad": "Cede parcialmente el control de d5 si blancas encuentra el momento de cambiar ahi, aunque no es una debilidad inmediata."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "b"
                                                ],
                                                "children": [
                                                  {
                                                    "id": "d4__d5__Bf4__Nf6__e3__e6__Nf3__Bd6__Bg3__O-O__Bd3__c5__c3",
                                                    "san": "c3",
                                                    "color": "w",
                                                    "explain": {
                                                      "idea": "Refuerza d4 antes de completar el desarrollo con Nbd2, manteniendo la estructura solida tipica del sistema.",
                                                      "ventaja": "Centro reforzado y flexible; prepara Nbd2 sin bloquear el desarrollo de la dama.",
                                                      "debilidad": "Ninguna relevante; es la continuacion mas solida y natural."
                                                    },
                                                    "kind": "book",
                                                    "userColors": [
                                                      "b"
                                                    ],
                                                    "children": [
                                                      {
                                                        "id": "d4__d5__Bf4__Nf6__e3__e6__Nf3__Bd6__Bg3__O-O__Bd3__c5__c3__Nc6",
                                                        "san": "Nc6",
                                                        "color": "b",
                                                        "explain": {
                                                          "idea": "Desarrolla el ultimo caballo, presionando d4 y completando el desarrollo de piezas menores.",
                                                          "ventaja": "Pieza activa que aumenta la presion sobre el centro de blancas.",
                                                          "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                                                        },
                                                        "kind": "book",
                                                        "userColors": [
                                                          "b"
                                                        ],
                                                        "children": [
                                                          {
                                                            "id": "d4__d5__Bf4__Nf6__e3__e6__Nf3__Bd6__Bg3__O-O__Bd3__c5__c3__Nc6__Nbd2",
                                                            "san": "Nbd2",
                                                            "color": "w",
                                                            "explain": {
                                                              "idea": "Completa el desarrollo de piezas menores, dejando la dama libre para salir por c2 o e2 mas adelante.",
                                                              "ventaja": "Desarrollo completo y solido, listo para enrocar en la siguiente jugada.",
                                                              "debilidad": "Ninguna relevante."
                                                            },
                                                            "kind": "book",
                                                            "userColors": [
                                                              "b"
                                                            ],
                                                            "children": [
                                                              {
                                                                "id": "d4__d5__Bf4__Nf6__e3__e6__Nf3__Bd6__Bg3__O-O__Bd3__c5__c3__Nc6__Nbd2__Qc7",
                                                                "san": "Qc7",
                                                                "color": "b",
                                                                "explain": {
                                                                  "idea": "Desarrolla la dama a una casilla activa, apoyando el avance ...e5 mas adelante y evitando estorbar al resto de piezas.",
                                                                  "ventaja": "Pieza flexible que mantiene varias opciones de plan abiertas en el medio juego.",
                                                                  "debilidad": "Ninguna relevante a este nivel de la apertura."
                                                                },
                                                                "kind": "book",
                                                                "userColors": [
                                                                  "b"
                                                                ],
                                                                "children": [
                                                                  {
                                                                    "id": "d4__d5__Bf4__Nf6__e3__e6__Nf3__Bd6__Bg3__O-O__Bd3__c5__c3__Nc6__Nbd2__Qc7__O-O",
                                                                    "san": "O-O",
                                                                    "color": "w",
                                                                    "explain": {
                                                                      "idea": "Pone el rey a salvo y conecta las torres antes de decidir el plan de medio juego.",
                                                                      "ventaja": "Seguridad del rey resuelta; el desarrollo completo del Sistema Londres ya esta terminado.",
                                                                      "debilidad": "Ninguna; es la jugada mas natural para completar el desarrollo basico."
                                                                    },
                                                                    "kind": "book",
                                                                    "userColors": [
                                                                      "b"
                                                                    ],
                                                                    "children": [
                                                                      {
                                                                        "id": "d4__d5__Bf4__Nf6__e3__e6__Nf3__Bd6__Bg3__O-O__Bd3__c5__c3__Nc6__Nbd2__Qc7__O-O__b6",
                                                                        "san": "b6",
                                                                        "color": "b",
                                                                        "explain": {
                                                                          "idea": "Prepara el desarrollo del alfil de dama a b7, completando el desarrollo de piezas menores de negras.",
                                                                          "ventaja": "Estructura solida y flexible, con el alfil apuntando hacia el flanco de rey de blancas a traves de la diagonal larga.",
                                                                          "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                                                                        },
                                                                        "kind": "book",
                                                                        "userColors": [
                                                                          "b"
                                                                        ],
                                                                        "leafOf": {
                                                                          "lineId": "h03-londres-clasica",
                                                                          "name": "Sistema Londres -- respuesta clasica con Bd6",
                                                                          "userColor": "b",
                                                                          "overview": "Familia Sistema Londres: blancas montan la misma estructura (d4, Bf4, e3, Nf3, Bd3/Be2, c3, Nbd2, O-O) contra casi cualquier respuesta de negras, sin depender de la teoria de la apertura rival. La respuesta clasica de negras imita el desarrollo natural (d5, Nf6, e6, Bd6) y evita cambiar los alfiles de forma prematura, para no facilitar la estructura de peones que blancas busca tras un cambio en d3."
                                                                        }
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "trap__h05-trampa-rubinstein__2",
            "san": "Nf3",
            "color": "w",
            "explain": {
              "idea": "Blancas desarrolla el caballo de rey antes de definir el plan de peones.",
              "ventaja": "Flexibilidad de orden de jugadas.",
              "debilidad": "Ninguna."
            },
            "kind": "trap",
            "userColors": [
              "w"
            ],
            "trap": {
              "id": "h05-trampa-rubinstein",
              "tipo": "ofensiva",
              "name": "Trampa Rubinstein"
            },
            "variantName": "Trampa Rubinstein",
            "variantColorId": "trap",
            "children": [
              {
                "id": "trap__h05-trampa-rubinstein__3",
                "san": "Nf6",
                "color": "b",
                "explain": {
                  "idea": "Desarrollo natural simetrico.",
                  "ventaja": "Control de e4 y d5.",
                  "debilidad": "Ninguna."
                },
                "kind": "trap",
                "userColors": [
                  "w"
                ],
                "trap": {
                  "id": "h05-trampa-rubinstein",
                  "tipo": "ofensiva",
                  "name": "Trampa Rubinstein"
                },
                "children": [
                  {
                    "id": "trap__h05-trampa-rubinstein__4",
                    "san": "c4",
                    "color": "w",
                    "explain": {
                      "idea": "Blancas ofrece el gambito de dama con el caballo ya desarrollado.",
                      "ventaja": "Presion sobre d5.",
                      "debilidad": "Ninguna."
                    },
                    "kind": "trap",
                    "userColors": [
                      "w"
                    ],
                    "trap": {
                      "id": "h05-trampa-rubinstein",
                      "tipo": "ofensiva",
                      "name": "Trampa Rubinstein"
                    },
                    "children": [
                      {
                        "id": "trap__h05-trampa-rubinstein__5",
                        "san": "e6",
                        "color": "b",
                        "explain": {
                          "idea": "Negras rehusa el gambito, Defensa Ortodoxa.",
                          "ventaja": "Estructura solida.",
                          "debilidad": "Encierra momentaneamente el alfil de casillas claras."
                        },
                        "kind": "trap",
                        "userColors": [
                          "w"
                        ],
                        "trap": {
                          "id": "h05-trampa-rubinstein",
                          "tipo": "ofensiva",
                          "name": "Trampa Rubinstein"
                        },
                        "children": [
                          {
                            "id": "trap__h05-trampa-rubinstein__6",
                            "san": "Bg5",
                            "color": "w",
                            "explain": {
                              "idea": "Blancas clava el caballo de f6.",
                              "ventaja": "Presion tipica de la Ortodoxa.",
                              "debilidad": "Ninguna inmediata."
                            },
                            "kind": "trap",
                            "userColors": [
                              "w"
                            ],
                            "trap": {
                              "id": "h05-trampa-rubinstein",
                              "tipo": "ofensiva",
                              "name": "Trampa Rubinstein"
                            },
                            "children": [
                              {
                                "id": "trap__h05-trampa-rubinstein__7",
                                "san": "Nbd7",
                                "color": "b",
                                "explain": {
                                  "idea": "Negras desarrolla el segundo caballo, jugada natural de la Ortodoxa.",
                                  "ventaja": "Desarrollo solido.",
                                  "debilidad": "A diferencia de la Trampa del Elefante, aqui el orden de jugadas que sigue si expone a negras a la Trampa Rubinstein mas adelante."
                                },
                                "kind": "trap",
                                "userColors": [
                                  "w"
                                ],
                                "trap": {
                                  "id": "h05-trampa-rubinstein",
                                  "tipo": "ofensiva",
                                  "name": "Trampa Rubinstein"
                                },
                                "children": [
                                  {
                                    "id": "trap__h05-trampa-rubinstein__8",
                                    "san": "e3",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Blancas refuerza el centro y abre la diagonal del alfil de rey.",
                                      "ventaja": "Solidez central.",
                                      "debilidad": "Encierra el alfil de casillas claras propio, tipico de la Ortodoxa."
                                    },
                                    "kind": "trap",
                                    "userColors": [
                                      "w"
                                    ],
                                    "trap": {
                                      "id": "h05-trampa-rubinstein",
                                      "tipo": "ofensiva",
                                      "name": "Trampa Rubinstein"
                                    },
                                    "children": [
                                      {
                                        "id": "trap__h05-trampa-rubinstein__9",
                                        "san": "Be7",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Negras rompe la clavada desarrollando el alfil.",
                                          "ventaja": "Prepara el enroque corto.",
                                          "debilidad": "Ninguna."
                                        },
                                        "kind": "trap",
                                        "userColors": [
                                          "w"
                                        ],
                                        "trap": {
                                          "id": "h05-trampa-rubinstein",
                                          "tipo": "ofensiva",
                                          "name": "Trampa Rubinstein"
                                        },
                                        "children": [
                                          {
                                            "id": "trap__h05-trampa-rubinstein__10",
                                            "san": "Nc3",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Blancas completa el desarrollo de caballos.",
                                              "ventaja": "Presion adicional sobre d5.",
                                              "debilidad": "Ninguna."
                                            },
                                            "kind": "trap",
                                            "userColors": [
                                              "w"
                                            ],
                                            "trap": {
                                              "id": "h05-trampa-rubinstein",
                                              "tipo": "ofensiva",
                                              "name": "Trampa Rubinstein"
                                            },
                                            "children": [
                                              {
                                                "id": "trap__h05-trampa-rubinstein__11",
                                                "san": "O-O",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Negras enroca corto.",
                                                  "ventaja": "Seguridad del rey.",
                                                  "debilidad": "Ninguna inmediata."
                                                },
                                                "kind": "trap",
                                                "userColors": [
                                                  "w"
                                                ],
                                                "trap": {
                                                  "id": "h05-trampa-rubinstein",
                                                  "tipo": "ofensiva",
                                                  "name": "Trampa Rubinstein"
                                                },
                                                "children": [
                                                  {
                                                    "id": "trap__h05-trampa-rubinstein__12",
                                                    "san": "Rc1",
                                                    "color": "w",
                                                    "explain": {
                                                      "idea": "Blancas coloca la torre en la columna semiabierta que se abrira tras el futuro cxd5.",
                                                      "ventaja": "Prepara la presion por la columna c.",
                                                      "debilidad": "Ninguna."
                                                    },
                                                    "kind": "trap",
                                                    "userColors": [
                                                      "w"
                                                    ],
                                                    "trap": {
                                                      "id": "h05-trampa-rubinstein",
                                                      "tipo": "ofensiva",
                                                      "name": "Trampa Rubinstein"
                                                    },
                                                    "children": [
                                                      {
                                                        "id": "trap__h05-trampa-rubinstein__13",
                                                        "san": "Re8",
                                                        "color": "b",
                                                        "explain": {
                                                          "idea": "Negras coloca la torre en la columna e, jugada natural de espera/preparacion de ...e5.",
                                                          "ventaja": "Flexibilidad.",
                                                          "debilidad": "Es precisamente esta jugada (en vez de una mas cautelosa) la que permite mas adelante la irrupcion tactica de blancas en el centro."
                                                        },
                                                        "kind": "trap",
                                                        "userColors": [
                                                          "w"
                                                        ],
                                                        "trap": {
                                                          "id": "h05-trampa-rubinstein",
                                                          "tipo": "ofensiva",
                                                          "name": "Trampa Rubinstein"
                                                        },
                                                        "children": [
                                                          {
                                                            "id": "trap__h05-trampa-rubinstein__14",
                                                            "san": "Qc2",
                                                            "color": "w",
                                                            "explain": {
                                                              "idea": "Blancas coloca la dama en la columna c, apoyando el futuro avance central y quitando la columna d de la vista de la torre negra por ahora.",
                                                              "ventaja": "Pieza flexible y bien situada.",
                                                              "debilidad": "Ninguna."
                                                            },
                                                            "kind": "trap",
                                                            "userColors": [
                                                              "w"
                                                            ],
                                                            "trap": {
                                                              "id": "h05-trampa-rubinstein",
                                                              "tipo": "ofensiva",
                                                              "name": "Trampa Rubinstein"
                                                            },
                                                            "children": [
                                                              {
                                                                "id": "trap__h05-trampa-rubinstein__15",
                                                                "san": "a6",
                                                                "color": "b",
                                                                "explain": {
                                                                  "idea": "Negras juega una jugada de espera tipica (prepara ...b5 mas adelante), permitiendo que blancas defina el centro.",
                                                                  "ventaja": "Flexibilidad para el futuro plan de flanco de dama.",
                                                                  "debilidad": "No hace nada por el centro justo cuando blancas esta a punto de abrirlo con cxd5."
                                                                },
                                                                "kind": "trap",
                                                                "userColors": [
                                                                  "w"
                                                                ],
                                                                "trap": {
                                                                  "id": "h05-trampa-rubinstein",
                                                                  "tipo": "ofensiva",
                                                                  "name": "Trampa Rubinstein"
                                                                },
                                                                "children": [
                                                                  {
                                                                    "id": "trap__h05-trampa-rubinstein__16",
                                                                    "san": "cxd5",
                                                                    "color": "w",
                                                                    "explain": {
                                                                      "idea": "Blancas abre el centro y la columna c para su torre.",
                                                                      "ventaja": "Torre activa en columna abierta.",
                                                                      "debilidad": "Ninguna."
                                                                    },
                                                                    "kind": "trap",
                                                                    "userColors": [
                                                                      "w"
                                                                    ],
                                                                    "trap": {
                                                                      "id": "h05-trampa-rubinstein",
                                                                      "tipo": "ofensiva",
                                                                      "name": "Trampa Rubinstein"
                                                                    },
                                                                    "children": [
                                                                      {
                                                                        "id": "trap__h05-trampa-rubinstein__17",
                                                                        "san": "exd5",
                                                                        "color": "b",
                                                                        "explain": {
                                                                          "idea": "Recaptura natural con el peon.",
                                                                          "ventaja": "Mantiene la estructura central.",
                                                                          "debilidad": "Deja el peon d5 como blanco potencial de ataque."
                                                                        },
                                                                        "kind": "trap",
                                                                        "userColors": [
                                                                          "w"
                                                                        ],
                                                                        "trap": {
                                                                          "id": "h05-trampa-rubinstein",
                                                                          "tipo": "ofensiva",
                                                                          "name": "Trampa Rubinstein"
                                                                        },
                                                                        "children": [
                                                                          {
                                                                            "id": "trap__h05-trampa-rubinstein__18",
                                                                            "san": "Bd3",
                                                                            "color": "w",
                                                                            "explain": {
                                                                              "idea": "Blancas desarrolla el alfil apuntando al flanco de rey negro.",
                                                                              "ventaja": "Pieza activa, prepara O-O.",
                                                                              "debilidad": "Ninguna."
                                                                            },
                                                                            "kind": "trap",
                                                                            "userColors": [
                                                                              "w"
                                                                            ],
                                                                            "trap": {
                                                                              "id": "h05-trampa-rubinstein",
                                                                              "tipo": "ofensiva",
                                                                              "name": "Trampa Rubinstein"
                                                                            },
                                                                            "children": [
                                                                              {
                                                                                "id": "trap__h05-trampa-rubinstein__19",
                                                                                "san": "c6",
                                                                                "color": "b",
                                                                                "explain": {
                                                                                  "idea": "Negras refuerza el peon d5.",
                                                                                  "ventaja": "Solidez central.",
                                                                                  "debilidad": "La casilla d5 queda ahora solo protegida por el peon c6, lo que sera relevante en la combinacion tactica que sigue."
                                                                                },
                                                                                "kind": "trap",
                                                                                "userColors": [
                                                                                  "w"
                                                                                ],
                                                                                "trap": {
                                                                                  "id": "h05-trampa-rubinstein",
                                                                                  "tipo": "ofensiva",
                                                                                  "name": "Trampa Rubinstein"
                                                                                },
                                                                                "children": [
                                                                                  {
                                                                                    "id": "trap__h05-trampa-rubinstein__20",
                                                                                    "san": "O-O",
                                                                                    "color": "w",
                                                                                    "explain": {
                                                                                      "idea": "Blancas enroca corto, completando el desarrollo antes de la combinacion tactica.",
                                                                                      "ventaja": "Rey seguro justo antes de abrir el juego.",
                                                                                      "debilidad": "Ninguna."
                                                                                    },
                                                                                    "kind": "trap",
                                                                                    "userColors": [
                                                                                      "w"
                                                                                    ],
                                                                                    "trap": {
                                                                                      "id": "h05-trampa-rubinstein",
                                                                                      "tipo": "ofensiva",
                                                                                      "name": "Trampa Rubinstein"
                                                                                    },
                                                                                    "children": [
                                                                                      {
                                                                                        "id": "trap__h05-trampa-rubinstein__21",
                                                                                        "san": "Ne4",
                                                                                        "color": "b",
                                                                                        "explain": {
                                                                                          "idea": "ERROR: negras salta con el caballo a e4 buscando cambiar piezas y aliviar la posicion, sin ver el problema tactico que esto crea al debilitar la vigilancia sobre d5 y f5.",
                                                                                          "ventaja": "Parece un cambio de piezas simplificador razonable.",
                                                                                          "debilidad": "Deja preparado el terreno para el golpe tactico de blancas: la casilla d5 y la diagonal a la dama negra quedan mas debiles de lo que parece."
                                                                                        },
                                                                                        "kind": "trap",
                                                                                        "userColors": [
                                                                                          "w"
                                                                                        ],
                                                                                        "trap": {
                                                                                          "id": "h05-trampa-rubinstein",
                                                                                          "tipo": "ofensiva",
                                                                                          "name": "Trampa Rubinstein"
                                                                                        },
                                                                                        "isError": true,
                                                                                        "children": [
                                                                                          {
                                                                                            "id": "trap__h05-trampa-rubinstein__22",
                                                                                            "san": "Bf4",
                                                                                            "color": "w",
                                                                                            "explain": {
                                                                                              "idea": "Blancas retira el alfil de la clavada (evitando el cambio) y lo situa en f4, apuntando hacia c7 -- la pieza clave de la trampa.",
                                                                                              "ventaja": "El alfil en f4 vigila la diagonal c7-b8, preparando la amenaza de atrapar a la dama si esta se queda en el centro tras el golpe tactico.",
                                                                                              "debilidad": "Ninguna."
                                                                                            },
                                                                                            "kind": "trap",
                                                                                            "userColors": [
                                                                                              "w"
                                                                                            ],
                                                                                            "trap": {
                                                                                              "id": "h05-trampa-rubinstein",
                                                                                              "tipo": "ofensiva",
                                                                                              "name": "Trampa Rubinstein"
                                                                                            },
                                                                                            "children": [
                                                                                              {
                                                                                                "id": "trap__h05-trampa-rubinstein__23",
                                                                                                "san": "f5",
                                                                                                "color": "b",
                                                                                                "explain": {
                                                                                                  "idea": "ERROR decisivo: negras sobreprotege el caballo de e4 con el peon f, sin ver que esto abre la posicion justo cuando blancas tiene el golpe tactico Nxd5 disponible.",
                                                                                                  "ventaja": "Parece consolidar el caballo avanzado.",
                                                                                                  "debilidad": "Debilita definitivamente el control sobre d5 y abre la posicion en el momento equivocado -- cae en la Trampa Rubinstein."
                                                                                                },
                                                                                                "kind": "trap",
                                                                                                "userColors": [
                                                                                                  "w"
                                                                                                ],
                                                                                                "trap": {
                                                                                                  "id": "h05-trampa-rubinstein",
                                                                                                  "tipo": "ofensiva",
                                                                                                  "name": "Trampa Rubinstein"
                                                                                                },
                                                                                                "isError": true,
                                                                                                "children": [
                                                                                                  {
                                                                                                    "id": "trap__h05-trampa-rubinstein__24",
                                                                                                    "san": "Nxd5",
                                                                                                    "color": "w",
                                                                                                    "explain": {
                                                                                                      "idea": "Blancas ejecuta el golpe tactico: el caballo captura en d5, ya que si negras recaptura con el peon (cxd5??), Bc7 atrapa a la dama negra en el borde del tablero.",
                                                                                                      "ventaja": "Blancas gana un peon limpio, porque la recaptura natural pierde la dama.",
                                                                                                      "debilidad": "Ninguna -- el golpe esta completamente justificado tacticamente."
                                                                                                    },
                                                                                                    "kind": "trap",
                                                                                                    "userColors": [
                                                                                                      "w"
                                                                                                    ],
                                                                                                    "trap": {
                                                                                                      "id": "h05-trampa-rubinstein",
                                                                                                      "tipo": "ofensiva",
                                                                                                      "name": "Trampa Rubinstein"
                                                                                                    },
                                                                                                    "children": [
                                                                                                      {
                                                                                                        "id": "trap__h05-trampa-rubinstein__25",
                                                                                                        "san": "cxd5",
                                                                                                        "color": "b",
                                                                                                        "explain": {
                                                                                                          "idea": "Negras cae en la trampa capturando de forma aparentemente natural, sin ver la amenaza sobre su propia dama.",
                                                                                                          "ventaja": "Recupera la pieza en apariencia.",
                                                                                                          "debilidad": "Expone la dama al golpe decisivo que sigue."
                                                                                                        },
                                                                                                        "kind": "trap",
                                                                                                        "userColors": [
                                                                                                          "w"
                                                                                                        ],
                                                                                                        "trap": {
                                                                                                          "id": "h05-trampa-rubinstein",
                                                                                                          "tipo": "ofensiva",
                                                                                                          "name": "Trampa Rubinstein"
                                                                                                        },
                                                                                                        "children": [
                                                                                                          {
                                                                                                            "id": "trap__h05-trampa-rubinstein__26",
                                                                                                            "san": "Bc7",
                                                                                                            "color": "w",
                                                                                                            "explain": {
                                                                                                              "idea": "Blancas remata la combinacion: el alfil ataca la dama negra, que no tiene ninguna casilla segura en la fila trasera para escapar sin perder material adicional.",
                                                                                                              "ventaja": "Blancas gana como minimo un peon limpio con posicion claramente superior; en la practica (Alekhine-Rubinstein, San Remo 1930) la dama termino perdiendose tambien.",
                                                                                                              "debilidad": "Ninguna -- es el remate de la combinacion."
                                                                                                            },
                                                                                                            "kind": "trap",
                                                                                                            "userColors": [
                                                                                                              "w"
                                                                                                            ],
                                                                                                            "trap": {
                                                                                                              "id": "h05-trampa-rubinstein",
                                                                                                              "tipo": "ofensiva",
                                                                                                              "name": "Trampa Rubinstein"
                                                                                                            },
                                                                                                            "leafOf": {
                                                                                                              "trapId": "h05-trampa-rubinstein",
                                                                                                              "name": "Trampa Rubinstein",
                                                                                                              "userColor": "w",
                                                                                                              "overview": "Gambito de Dama Rehusado, Defensa Ortodoxa. Blancas gana un peon con Nxd5 porque, tras la recaptura de negras, la dama negra queda amenazada de quedar atrapada en la banda por el alfil en c7. Se entrena aqui el lado de blancas para tender la trampa. Fuente: Wikipedia (\"Queen's Gambit Declined, Rubinstein Trap\"), partida real Alekhine-Rubinstein, San Remo 1930.",
                                                                                                              "tipo": "ofensiva"
                                                                                                            }
                                                                                                          }
                                                                                                        ]
                                                                                                      }
                                                                                                    ]
                                                                                                  }
                                                                                                ]
                                                                                              }
                                                                                            ]
                                                                                          }
                                                                                        ]
                                                                                      }
                                                                                    ]
                                                                                  }
                                                                                ]
                                                                              }
                                                                            ]
                                                                          }
                                                                        ]
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "d4__Nf6",
        "san": "Nf6",
        "color": "b",
        "explain": {
          "idea": "Desarrolla la pieza mas natural sin definir todavia la estructura de peones central.",
          "ventaja": "Maxima flexibilidad; negras puede optar por varias estructuras (fianchetto con g6, Catalana con e6, Nimzo/Bogo con e6 y Bb4...) segun lo que juegue blancas.",
          "debilidad": "Permite la clavada inmediata del Trompowsky (Bg5), aunque no supone un problema real con buen juego."
        },
        "kind": "book",
        "userColors": [
          "b"
        ],
        "children": [
          {
            "id": "d4__Nf6__Bf4",
            "san": "Bf4",
            "color": "w",
            "explain": {
              "idea": "Sistema Londres: saca el alfil de dama antes de cerrarlo con e3, sin importar la respuesta de negras.",
              "ventaja": "Desarrollo rapido y sin teoria compleja; blancas monta la misma estructura contra casi cualquier planteamiento.",
              "debilidad": "Ninguna inmediata; el plan de blancas es independiente de lo que juegue negras."
            },
            "kind": "book",
            "userColors": [
              "b"
            ],
            "variantName": "Sistema Londres -- respuesta moderna con fianchetto g6",
            "variantColorId": 11,
            "children": [
              {
                "id": "d4__Nf6__Bf4__g6",
                "san": "g6",
                "color": "b",
                "explain": {
                  "idea": "Planteamiento moderno tipo Este de Rey: negras prepara el fianchetto del alfil de rey en vez de ocupar el centro con peones.",
                  "ventaja": "Estructura solida y flexible, con el alfil de rey apuntando hacia el centro y el flanco de dama de blancas a largo plazo.",
                  "debilidad": "Cede el centro momentaneamente a blancas, que puede ganar espacio con e4 mas adelante si negras no reacciona a tiempo."
                },
                "kind": "book",
                "userColors": [
                  "b"
                ],
                "children": [
                  {
                    "id": "d4__Nf6__Bf4__g6__e3",
                    "san": "e3",
                    "color": "w",
                    "explain": {
                      "idea": "Refuerza d4 con una estructura solida, sin arriesgarse a e4 antes de completar el desarrollo.",
                      "ventaja": "Estructura inflexible y dificil de atacar; el plan estandar del Londres funciona igual contra el fianchetto.",
                      "debilidad": "Renuncia a la posibilidad mas ambiciosa de e4, dejando que negras complete su fianchetto sin problemas."
                    },
                    "kind": "book",
                    "userColors": [
                      "b"
                    ],
                    "children": [
                      {
                        "id": "d4__Nf6__Bf4__g6__e3__Bg7",
                        "san": "Bg7",
                        "color": "b",
                        "explain": {
                          "idea": "Completa el fianchetto, la pieza clave de todo el planteamiento de negras contra el Londres.",
                          "ventaja": "Alfil muy activo sobre la diagonal larga, presionando el centro y el flanco de dama de blancas.",
                          "debilidad": "Ninguna relevante; es la continuacion mas natural del plan."
                        },
                        "kind": "book",
                        "userColors": [
                          "b"
                        ],
                        "children": [
                          {
                            "id": "d4__Nf6__Bf4__g6__e3__Bg7__Nf3",
                            "san": "Nf3",
                            "color": "w",
                            "explain": {
                              "idea": "Desarrolla la ultima pieza menor del flanco de rey, preparando el enroque corto.",
                              "ventaja": "Jugada solida y flexible que no compromete nada.",
                              "debilidad": "Ninguna relevante."
                            },
                            "kind": "book",
                            "userColors": [
                              "b"
                            ],
                            "children": [
                              {
                                "id": "d4__Nf6__Bf4__g6__e3__Bg7__Nf3__O-O",
                                "san": "O-O",
                                "color": "b",
                                "explain": {
                                  "idea": "Pone el rey a salvo antes de decidir el plan de flanco de dama.",
                                  "ventaja": "Seguridad del rey resuelta; a partir de aqui negras puede pensar en ...d6 y ...c5.",
                                  "debilidad": "Ninguna; es la jugada mas natural para completar la seguridad basica."
                                },
                                "kind": "book",
                                "userColors": [
                                  "b"
                                ],
                                "children": [
                                  {
                                    "id": "d4__Nf6__Bf4__g6__e3__Bg7__Nf3__O-O__h3",
                                    "san": "h3",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Jugada profilactica que evita cualquier molestia futura de ...Nh5 o ...Ng4 contra el alfil de f4.",
                                      "ventaja": "Elimina de raiz cualquier idea tactica de negras sobre el alfil, a cambio de un tiempo.",
                                      "debilidad": "Jugada algo lenta que cede un tiempo de desarrollo, aunque es la eleccion mas solida en la practica."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "b"
                                    ],
                                    "children": [
                                      {
                                        "id": "d4__Nf6__Bf4__g6__e3__Bg7__Nf3__O-O__h3__d6",
                                        "san": "d6",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Completa la estructura tipo Este de Rey, preparando ...Nbd7 y el avance central ...e5 mas adelante.",
                                          "ventaja": "Estructura solida y flexible, con todas las piezas menores a punto de completar su desarrollo.",
                                          "debilidad": "Ninguna relevante; es la continuacion mas natural del plan."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "b"
                                        ],
                                        "children": [
                                          {
                                            "id": "d4__Nf6__Bf4__g6__e3__Bg7__Nf3__O-O__h3__d6__Be2",
                                            "san": "Be2",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Desarrolla el ultimo alfil a una casilla solida, evitando exponerlo en d3 contra el fianchetto de negras.",
                                              "ventaja": "Desarrollo completo y sin debilidades, listo para enrocar en la siguiente jugada.",
                                              "debilidad": "Jugada menos activa que Bd3 en otras variantes, pero mas solida aqui frente al alfil de negras en g7."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "b"
                                            ],
                                            "children": [
                                              {
                                                "id": "d4__Nf6__Bf4__g6__e3__Bg7__Nf3__O-O__h3__d6__Be2__Nbd7",
                                                "san": "Nbd7",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Desarrolla el ultimo caballo, preparando el avance central ...e5 con apoyo suficiente.",
                                                  "ventaja": "Pieza flexible que apoya el plan central sin bloquear al resto de piezas.",
                                                  "debilidad": "Ninguna relevante; es la continuacion mas natural del plan."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "b"
                                                ],
                                                "children": [
                                                  {
                                                    "id": "d4__Nf6__Bf4__g6__e3__Bg7__Nf3__O-O__h3__d6__Be2__Nbd7__O-O",
                                                    "san": "O-O",
                                                    "color": "w",
                                                    "explain": {
                                                      "idea": "Pone el rey a salvo y conecta las torres antes de decidir el plan de medio juego.",
                                                      "ventaja": "Seguridad del rey resuelta; el desarrollo completo del Sistema Londres ya esta terminado.",
                                                      "debilidad": "Ninguna; es la jugada mas natural para completar el desarrollo basico."
                                                    },
                                                    "kind": "book",
                                                    "userColors": [
                                                      "b"
                                                    ],
                                                    "children": [
                                                      {
                                                        "id": "d4__Nf6__Bf4__g6__e3__Bg7__Nf3__O-O__h3__d6__Be2__Nbd7__O-O__c5",
                                                        "san": "c5",
                                                        "color": "b",
                                                        "explain": {
                                                          "idea": "Contraataca el centro de blancas en el flanco de dama, el plan tipico de negras contra el Sistema Londres.",
                                                          "ventaja": "Gana espacio y actividad en el flanco de dama sin descuidar la seguridad del rey.",
                                                          "debilidad": "Ninguna inmediata; es la continuacion mas activa y natural del plan."
                                                        },
                                                        "kind": "book",
                                                        "userColors": [
                                                          "b"
                                                        ],
                                                        "children": [
                                                          {
                                                            "id": "d4__Nf6__Bf4__g6__e3__Bg7__Nf3__O-O__h3__d6__Be2__Nbd7__O-O__c5__c3",
                                                            "san": "c3",
                                                            "color": "w",
                                                            "explain": {
                                                              "idea": "Refuerza d4 manteniendo la estructura solida tipica del sistema.",
                                                              "ventaja": "Centro reforzado y flexible frente a la presion de negras.",
                                                              "debilidad": "Ninguna relevante; es la continuacion mas solida y natural."
                                                            },
                                                            "kind": "book",
                                                            "userColors": [
                                                              "b"
                                                            ],
                                                            "children": [
                                                              {
                                                                "id": "d4__Nf6__Bf4__g6__e3__Bg7__Nf3__O-O__h3__d6__Be2__Nbd7__O-O__c5__c3__b6",
                                                                "san": "b6",
                                                                "color": "b",
                                                                "explain": {
                                                                  "idea": "Prepara el desarrollo del alfil de dama a b7, apoyando el control de la diagonal larga junto al alfil de rey en g7.",
                                                                  "ventaja": "Estructura muy solida con ambos alfiles apuntando hacia el centro y el flanco de rey de blancas.",
                                                                  "debilidad": "Ninguna relevante; es la continuacion mas natural del plan."
                                                                },
                                                                "kind": "book",
                                                                "userColors": [
                                                                  "b"
                                                                ],
                                                                "leafOf": {
                                                                  "lineId": "h03-londres-fianchetto",
                                                                  "name": "Sistema Londres -- respuesta moderna con fianchetto g6",
                                                                  "userColor": "b",
                                                                  "overview": "Familia Sistema Londres: variante moderna en auge donde negras responde con un planteamiento de tipo Este de Rey (fianchetto en g7) en vez del desarrollo clasico con d5. Al no ocupar el centro de inmediato, negras deja que blancas defina su estructura y presiona despues desde los flancos con ...c5 y ...b6, una de las formas mas populares de tratar el Londres a nivel de club en los ultimos anos."
                                                                }
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "d4__Nf6__c4",
            "san": "c4",
            "color": "w",
            "explain": {
              "idea": "Combina el peon de dama con el ataque en el flanco de dama, ampliando el control central.",
              "ventaja": "Mayor presencia en el centro y preparacion directa del plan Catalan con g3.",
              "debilidad": "Cede momentaneamente la exclusividad del centro, igual que en cualquier gambito de dama."
            },
            "kind": "book",
            "userColors": [
              "b"
            ],
            "variantName": "Inglesa -- Catalan (transposicion via 1.d4 Nf6 2.c4 e6 3.g3 d5)",
            "variantColorId": 11,
            "children": [
              {
                "id": "d4__Nf6__c4__e6",
                "san": "e6",
                "color": "b",
                "explain": {
                  "idea": "Prepara el desarrollo del alfil de rey y sostiene la posibilidad de jugar ...d5 con una estructura solida.",
                  "ventaja": "Posicion flexible que no compromete nada todavia.",
                  "debilidad": "El alfil de casillas claras de negras queda temporalmente encerrado tras la cadena de peones si se juega d5."
                },
                "kind": "book",
                "userColors": [
                  "b"
                ],
                "children": [
                  {
                    "id": "d4__Nf6__c4__e6__g3",
                    "san": "g3",
                    "color": "w",
                    "explain": {
                      "idea": "El Catalan: prepara el fianchetto del alfil de rey en vez del desarrollo clasico con Nc3 o Nf3 primero.",
                      "ventaja": "Alfil muy activo sobre la diagonal larga, presionando d5 y el flanco de dama de negras a largo plazo -- una de las armas modernas mas fuertes a nivel de elite.",
                      "debilidad": "Ninguna inmediata; el plan es lento pero muy solido."
                    },
                    "kind": "book",
                    "userColors": [
                      "b"
                    ],
                    "children": [
                      {
                        "id": "d4__Nf6__c4__e6__g3__d5",
                        "san": "d5",
                        "color": "b",
                        "explain": {
                          "idea": "Ocupa el centro antes de que blancas complete el fianchetto, definiendo la estructura tipica del Catalan.",
                          "ventaja": "Estructura solida y conocida, la respuesta mas natural y fiable contra el Catalan.",
                          "debilidad": "El peon de d5 quedara bajo presion constante de el alfil de blancas en g2 durante toda la partida."
                        },
                        "kind": "book",
                        "userColors": [
                          "b"
                        ],
                        "children": [
                          {
                            "id": "d4__Nf6__c4__e6__g3__d5__Bg2",
                            "san": "Bg2",
                            "color": "w",
                            "explain": {
                              "idea": "Completa el fianchetto, la pieza que define todo el plan Catalan.",
                              "ventaja": "Presion maxima sobre la diagonal larga a1-h8, apuntando hacia d5 y el flanco de dama de negras.",
                              "debilidad": "Ninguna relevante; es la continuacion mas natural del plan."
                            },
                            "kind": "book",
                            "userColors": [
                              "b"
                            ],
                            "children": [
                              {
                                "id": "d4__Nf6__c4__e6__g3__d5__Bg2__Be7",
                                "san": "Be7",
                                "color": "b",
                                "explain": {
                                  "idea": "Desarrolla el alfil de rey a una casilla solida, preparando el enroque corto de inmediato.",
                                  "ventaja": "Jugada solida que no compromete nada y acelera la seguridad del rey.",
                                  "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                                },
                                "kind": "book",
                                "userColors": [
                                  "b"
                                ],
                                "children": [
                                  {
                                    "id": "d4__Nf6__c4__e6__g3__d5__Bg2__Be7__Nf3",
                                    "san": "Nf3",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Desarrolla la ultima pieza menor del flanco de rey, preparando el enroque corto.",
                                      "ventaja": "Jugada solida y flexible que no compromete nada.",
                                      "debilidad": "Ninguna relevante."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "b"
                                    ],
                                    "children": [
                                      {
                                        "id": "d4__Nf6__c4__e6__g3__d5__Bg2__Be7__Nf3__O-O",
                                        "san": "O-O",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Pone el rey a salvo antes de decidir el plan del flanco de dama.",
                                          "ventaja": "Seguridad del rey resuelta; a partir de aqui negras puede pensar en ...dxc4 o ...c6.",
                                          "debilidad": "Ninguna; es la jugada mas natural para completar la seguridad basica."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "b"
                                        ],
                                        "children": [
                                          {
                                            "id": "d4__Nf6__c4__e6__g3__d5__Bg2__Be7__Nf3__O-O__O-O",
                                            "san": "O-O",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Pone el rey a salvo y conecta las torres antes de decidir el plan de medio juego.",
                                              "ventaja": "Seguridad del rey resuelta; el desarrollo basico del sistema Catalan ya esta completo.",
                                              "debilidad": "Ninguna; es la jugada mas natural para completar el desarrollo basico."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "b"
                                            ],
                                            "children": [
                                              {
                                                "id": "d4__Nf6__c4__e6__g3__d5__Bg2__Be7__Nf3__O-O__O-O__dxc4",
                                                "san": "dxc4",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Acepta el peon en c4 en vez de sostener la tension, el plan tipico de negras contra el Catalan (Catalan Aceptado).",
                                                  "ventaja": "Un peon extra de forma inmediata y sin complicaciones tacticas.",
                                                  "debilidad": "El peon c4 sera dificil de sostener a largo plazo frente a la presion del alfil de blancas en g2 y una futura Qc2."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "b"
                                                ],
                                                "children": [
                                                  {
                                                    "id": "d4__Nf6__c4__e6__g3__d5__Bg2__Be7__Nf3__O-O__O-O__dxc4__Qc2",
                                                    "san": "Qc2",
                                                    "color": "w",
                                                    "explain": {
                                                      "idea": "Ataca indirectamente el peon c4 y prepara recuperarlo con Qxc4, el plan principal de blancas en el Catalan Aceptado.",
                                                      "ventaja": "Recupera el peon con comodidad y mantiene toda la presion tipica de la estructura Catalan.",
                                                      "debilidad": "Ninguna relevante; es la continuacion mas natural y fuerte del sistema."
                                                    },
                                                    "kind": "book",
                                                    "userColors": [
                                                      "b"
                                                    ],
                                                    "children": [
                                                      {
                                                        "id": "d4__Nf6__c4__e6__g3__d5__Bg2__Be7__Nf3__O-O__O-O__dxc4__Qc2__a6",
                                                        "san": "a6",
                                                        "color": "b",
                                                        "explain": {
                                                          "idea": "Prepara ...b5 para sostener el peon de mas el mayor tiempo posible, el plan mas combativo de negras en el Catalan Aceptado.",
                                                          "ventaja": "Intenta conservar el peon extra ganando espacio en el flanco de dama.",
                                                          "debilidad": "Cede tiempo de desarrollo mientras blancas completa el resto de piezas con ventaja de espacio en el centro."
                                                        },
                                                        "kind": "book",
                                                        "userColors": [
                                                          "b"
                                                        ],
                                                        "children": [
                                                          {
                                                            "id": "d4__Nf6__c4__e6__g3__d5__Bg2__Be7__Nf3__O-O__O-O__dxc4__Qc2__a6__Qxc4",
                                                            "san": "Qxc4",
                                                            "color": "w",
                                                            "explain": {
                                                              "idea": "Recupera el peon antes de que negras complete ...b5, manteniendo la iniciativa.",
                                                              "ventaja": "Material igualado y dama activa en una casilla central.",
                                                              "debilidad": "Ninguna relevante; es la continuacion mas natural y fuerte."
                                                            },
                                                            "kind": "book",
                                                            "userColors": [
                                                              "b"
                                                            ],
                                                            "children": [
                                                              {
                                                                "id": "d4__Nf6__c4__e6__g3__d5__Bg2__Be7__Nf3__O-O__O-O__dxc4__Qc2__a6__Qxc4__b5",
                                                                "san": "b5",
                                                                "color": "b",
                                                                "explain": {
                                                                  "idea": "Gana espacio y tiempo atacando la dama de blancas, buscando contrajuego en el flanco de dama pese a no conservar el peon.",
                                                                  "ventaja": "Iniciativa momentanea en el flanco de dama y expansion de espacio.",
                                                                  "debilidad": "Debilita las casillas negras del flanco de dama (c6, c5), un factor a largo plazo que blancas puede explotar en el medio juego."
                                                                },
                                                                "kind": "book",
                                                                "userColors": [
                                                                  "b"
                                                                ],
                                                                "leafOf": {
                                                                  "lineId": "h03-catalana",
                                                                  "name": "Inglesa -- Catalan (transposicion via 1.d4 Nf6 2.c4 e6 3.g3 d5)",
                                                                  "userColor": "b",
                                                                  "overview": "Linea propia dentro del bloque Inglesa por su transposicion natural: blancas combina d4 y c4 con el fianchetto de rey (g3), una de las armas mas fuertes y modernas a nivel de elite contra estructuras de dama por su presion constante sobre la diagonal larga y el flanco de dama de negras. Negras acepta el peon en c4 y contraataca despues con ...a6 y ...b5 para sostenerlo el mayor tiempo posible."
                                                                }
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "d4__Nf6__Bg5",
            "san": "Bg5",
            "color": "w",
            "explain": {
              "idea": "Ataque Trompowsky: clava el caballo de inmediato, evitando toda la teoria principal de 1.d4 y sacando a negras de la preparacion conocida.",
              "ventaja": "Bajo requerimiento teorico y gran capacidad de sorpresa; una de las aperturas modernas en mayor auge.",
              "debilidad": "El alfil puede acabar siendo blanco de ...Ne4 con tiempo si negras busca la respuesta mas combativa."
            },
            "kind": "book",
            "userColors": [
              "b"
            ],
            "variantName": "Trompowsky -- respuesta solida con ...e6",
            "variantColorId": 4,
            "children": [
              {
                "id": "d4__Nf6__Bg5__e6",
                "san": "e6",
                "color": "b",
                "explain": {
                  "idea": "Respuesta solida y menos comprometida: prepara el desarrollo del alfil de rey sin definir todavia si romper la clavada con ...h6.",
                  "ventaja": "Posicion flexible que evita las complicaciones tacticas de ...Ne4 y mantiene varias opciones abiertas.",
                  "debilidad": "El alfil de casillas claras de negras queda temporalmente encerrado tras la cadena de peones si se juega d5 mas adelante."
                },
                "kind": "book",
                "userColors": [
                  "b"
                ],
                "children": [
                  {
                    "id": "d4__Nf6__Bg5__e6__e4",
                    "san": "e4",
                    "color": "w",
                    "explain": {
                      "idea": "Ocupa el centro con el segundo peon central, aprovechando que negras no ha atacado la clavada todavia.",
                      "ventaja": "Centro amplio y mucho espacio para las piezas de blancas.",
                      "debilidad": "Ninguna relevante; es la continuacion mas ambiciosa y natural del sistema."
                    },
                    "kind": "book",
                    "userColors": [
                      "b"
                    ],
                    "children": [
                      {
                        "id": "d4__Nf6__Bg5__e6__e4__h6",
                        "san": "h6",
                        "color": "b",
                        "explain": {
                          "idea": "Pregunta al alfil, obligando a blancas a decidir entre cambiar en f6 o retirarse.",
                          "ventaja": "Gana tiempo y aclara la posicion del alfil de blancas.",
                          "debilidad": "Debilita ligeramente el flanco de rey, un precio menor y habitual en toda la teoria de esta linea."
                        },
                        "kind": "book",
                        "userColors": [
                          "b"
                        ],
                        "children": [
                          {
                            "id": "d4__Nf6__Bg5__e6__e4__h6__Bxf6",
                            "san": "Bxf6",
                            "color": "w",
                            "explain": {
                              "idea": "Cambia el alfil por el caballo antes de retirarse, desarticulando la estructura de peones de negras.",
                              "ventaja": "Daña la estructura de peones de negras y evita perder tiempos con la retirada del alfil.",
                              "debilidad": "Cede el par de alfiles a cambio de la ventaja estructural, una concesion tipica y aceptada en esta linea."
                            },
                            "kind": "book",
                            "userColors": [
                              "b"
                            ],
                            "children": [
                              {
                                "id": "d4__Nf6__Bg5__e6__e4__h6__Bxf6__Qxf6",
                                "san": "Qxf6",
                                "color": "b",
                                "explain": {
                                  "idea": "Recaptura con la dama, la unica pieza que puede hacerlo de inmediato manteniendo la estructura de peones sana en el flanco de rey.",
                                  "ventaja": "Dama activa en una casilla central, evitando doblar peones.",
                                  "debilidad": "La dama puede perder tiempos si blancas encuentra Nc3 seguido de Nd5 mas adelante."
                                },
                                "kind": "book",
                                "userColors": [
                                  "b"
                                ],
                                "children": [
                                  {
                                    "id": "d4__Nf6__Bg5__e6__e4__h6__Bxf6__Qxf6__Nc3",
                                    "san": "Nc3",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Desarrolla una pieza reforzando el centro y preparando el enroque largo.",
                                      "ventaja": "Pieza activa que apoya el amplio centro de peones ya conseguido.",
                                      "debilidad": "Ninguna relevante; es la continuacion mas natural y fuerte."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "b"
                                    ],
                                    "children": [
                                      {
                                        "id": "d4__Nf6__Bg5__e6__e4__h6__Bxf6__Qxf6__Nc3__d6",
                                        "san": "d6",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Prepara el desarrollo del resto de piezas y sostiene la posicion sin ceder mas espacio.",
                                          "ventaja": "Estructura solida que prepara ...Nd7 y ...g6 para completar el desarrollo.",
                                          "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "b"
                                        ],
                                        "children": [
                                          {
                                            "id": "d4__Nf6__Bg5__e6__e4__h6__Bxf6__Qxf6__Nc3__d6__Nf3",
                                            "san": "Nf3",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Desarrolla la ultima pieza menor del flanco de rey, preparando el enroque largo.",
                                              "ventaja": "Jugada solida y flexible que no compromete nada.",
                                              "debilidad": "Ninguna relevante."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "b"
                                            ],
                                            "children": [
                                              {
                                                "id": "d4__Nf6__Bg5__e6__e4__h6__Bxf6__Qxf6__Nc3__d6__Nf3__Nd7",
                                                "san": "Nd7",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Desarrolla el caballo preparando ...g6 y el fianchetto del alfil de rey.",
                                                  "ventaja": "Pieza flexible que apoya el plan de desarrollo completo de negras.",
                                                  "debilidad": "Ninguna relevante; es la continuacion mas natural del plan."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "b"
                                                ],
                                                "children": [
                                                  {
                                                    "id": "d4__Nf6__Bg5__e6__e4__h6__Bxf6__Qxf6__Nc3__d6__Nf3__Nd7__Qd2",
                                                    "san": "Qd2",
                                                    "color": "w",
                                                    "explain": {
                                                      "idea": "Prepara el enroque largo, conectando las torres y completando el desarrollo de piezas.",
                                                      "ventaja": "Desarrollo completo y listo para atacar en el flanco de rey tras el enroque largo.",
                                                      "debilidad": "Ninguna relevante; es la continuacion mas tipica del sistema."
                                                    },
                                                    "kind": "book",
                                                    "userColors": [
                                                      "b"
                                                    ],
                                                    "children": [
                                                      {
                                                        "id": "d4__Nf6__Bg5__e6__e4__h6__Bxf6__Qxf6__Nc3__d6__Nf3__Nd7__Qd2__g6",
                                                        "san": "g6",
                                                        "color": "b",
                                                        "explain": {
                                                          "idea": "Prepara el fianchetto del alfil de rey, completando el desarrollo de piezas menores de negras.",
                                                          "ventaja": "Estructura solida que prepara ...Bg7 y el enroque corto.",
                                                          "debilidad": "Ninguna relevante; es la continuacion mas natural del plan."
                                                        },
                                                        "kind": "book",
                                                        "userColors": [
                                                          "b"
                                                        ],
                                                        "children": [
                                                          {
                                                            "id": "d4__Nf6__Bg5__e6__e4__h6__Bxf6__Qxf6__Nc3__d6__Nf3__Nd7__Qd2__g6__O-O-O",
                                                            "san": "O-O-O",
                                                            "color": "w",
                                                            "explain": {
                                                              "idea": "Enroque largo, el plan tipico de blancas en el Trompowsky con estructura de enroques opuestos para buscar el ataque directo.",
                                                              "ventaja": "Rey a salvo y torres conectadas, listo para lanzar un ataque en el flanco de rey con h4-h5.",
                                                              "debilidad": "Enroques opuestos implican riesgo mutuo; negras tambien podra buscar contrajuego en el flanco de dama."
                                                            },
                                                            "kind": "book",
                                                            "userColors": [
                                                              "b"
                                                            ],
                                                            "children": [
                                                              {
                                                                "id": "d4__Nf6__Bg5__e6__e4__h6__Bxf6__Qxf6__Nc3__d6__Nf3__Nd7__Qd2__g6__O-O-O__Bg7",
                                                                "san": "Bg7",
                                                                "color": "b",
                                                                "explain": {
                                                                  "idea": "Completa el fianchetto, la pieza clave para el resto del desarrollo de negras.",
                                                                  "ventaja": "Alfil activo sobre la diagonal larga, listo para completar la seguridad del rey con el enroque corto.",
                                                                  "debilidad": "Ninguna relevante; es la continuacion mas natural del plan."
                                                                },
                                                                "kind": "book",
                                                                "userColors": [
                                                                  "b"
                                                                ],
                                                                "leafOf": {
                                                                  "lineId": "h03-trompowsky",
                                                                  "name": "Trompowsky -- respuesta solida con ...e6",
                                                                  "userColor": "b",
                                                                  "overview": "Familia Ataque Trompowsky: blancas evita toda la teoria principal de 1.d4 clavando el caballo de inmediato con Bg5, sin depender de si negras juega ...d5, ...e6 o ...g6. Es una de las aperturas modernas en mayor auge por su bajo requerimiento teorico y su capacidad de sacar al rival de la teoria conocida desde la segunda jugada. Negras responde con la opcion mas solida y menos comprometida, dejando que blancas defina la clavada."
                                                                }
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "e4",
    "san": "e4",
    "color": "w",
    "explain": {
      "idea": "Ocupa el centro y abre la diagonal de la dama y del alfil de rey.",
      "ventaja": "Jugada mas popular a todos los niveles, maxima actividad inmediata para las piezas.",
      "debilidad": "Ninguna real a este nivel; es una de las dos jugadas principales para empezar la partida."
    },
    "kind": "book",
    "userColors": [
      "b"
    ],
    "children": [
      {
        "id": "e4__d5",
        "san": "d5",
        "color": "b",
        "explain": {
          "idea": "Escandinava: negras ataca el peon e4 de inmediato en vez de responder de forma simetrica o cerrada.",
          "ventaja": "Fuerza a blancas a definir la estructura central en la jugada 2, sacando la partida del terreno mas teorico de otras defensas.",
          "debilidad": "Tras el cambio de peones, la dama de negras tendra que salir pronto y blancas puede ganar tiempo atacandola con piezas menores."
        },
        "kind": "book",
        "userColors": [
          "b"
        ],
        "children": [
          {
            "id": "e4__d5__exd5",
            "san": "exd5",
            "color": "w",
            "explain": {
              "idea": "Captura el peon ofrecido; casi siempre la respuesta principal.",
              "ventaja": "Gana un peon de forma momentanea y obliga a negras a recapturar, casi siempre con la dama.",
              "debilidad": "Ninguna; es la continuacion practicamente obligada para no perder tiempo defendiendo e4."
            },
            "kind": "book",
            "userColors": [
              "b"
            ],
            "children": [
              {
                "id": "e4__d5__exd5__Qxd5",
                "san": "Qxd5",
                "color": "b",
                "explain": {
                  "idea": "Recaptura con la dama, la unica pieza que puede hacerlo de inmediato.",
                  "ventaja": "Recupera el material y desarrolla la dama a una casilla central, aunque tendra que moverse de nuevo pronto.",
                  "debilidad": "La dama queda expuesta en el centro, blanco facil para Nc3 con ganancia de tiempo -- el precio principal de toda la Escandinava."
                },
                "kind": "book",
                "userColors": [
                  "b"
                ],
                "children": [
                  {
                    "id": "e4__d5__exd5__Qxd5__Nc3",
                    "san": "Nc3",
                    "color": "w",
                    "explain": {
                      "idea": "Desarrolla una pieza atacando la dama de negras, ganando un tiempo de desarrollo gratis.",
                      "ventaja": "Pieza activa con tiempo ganado; es la razon principal por la que 2...Qxd5 exige mas precision que otras defensas.",
                      "debilidad": "Ninguna; es la jugada mas natural y fuerte en la posicion."
                    },
                    "kind": "book",
                    "userColors": [
                      "b"
                    ],
                    "children": [
                      {
                        "id": "e4__d5__exd5__Qxd5__Nc3__Qa5",
                        "san": "Qa5",
                        "color": "b",
                        "explain": {
                          "idea": "Reubica la dama a una casilla activa fuera del alcance de mas ataques de tiempo, manteniendo la clavada sobre Nc3 si blancas desarrolla con Bd2 mas adelante.",
                          "ventaja": "La retirada mas popular: la dama queda razonablemente segura y sigue presionando el flanco de dama de blancas.",
                          "debilidad": "La dama sigue fuera y puede volver a perder tiempos si blancas encuentra Nd5 o Bd2 con ideas de ganar mas tiempo."
                        },
                        "kind": "book",
                        "userColors": [
                          "b"
                        ],
                        "variantName": "Escandinava -- linea principal (2...Qxd5)",
                        "variantColorId": 7,
                        "children": [
                          {
                            "id": "e4__d5__exd5__Qxd5__Nc3__Qa5__d4",
                            "san": "d4",
                            "color": "w",
                            "explain": {
                              "idea": "Ocupa el centro con el segundo peon central, ganando espacio mientras negras sigue sin completar el desarrollo.",
                              "ventaja": "Centro solido y mucho espacio, la compensacion natural de blancas por el tiempo que le costo a negras recuperar el peon.",
                              "debilidad": "Ninguna relevante; es la continuacion mas natural y fuerte."
                            },
                            "kind": "book",
                            "userColors": [
                              "b"
                            ],
                            "children": [
                              {
                                "id": "e4__d5__exd5__Qxd5__Nc3__Qa5__d4__Nf6",
                                "san": "Nf6",
                                "color": "b",
                                "explain": {
                                  "idea": "Empieza por fin el desarrollo de piezas menores, presionando e4 (ya vacio) y preparando el enroque.",
                                  "ventaja": "Jugada natural que acelera la seguridad del rey, ya urgente tras varias jugadas de dama.",
                                  "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                                },
                                "kind": "book",
                                "userColors": [
                                  "b"
                                ],
                                "children": [
                                  {
                                    "id": "e4__d5__exd5__Qxd5__Nc3__Qa5__d4__Nf6__Nf3",
                                    "san": "Nf3",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Desarrolla la ultima pieza menor del flanco de rey y prepara el enroque corto.",
                                      "ventaja": "Jugada solida que completa el desarrollo rapido tipico de las lineas contra la Escandinava.",
                                      "debilidad": "Ninguna relevante."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "b"
                                    ],
                                    "children": [
                                      {
                                        "id": "e4__d5__exd5__Qxd5__Nc3__Qa5__d4__Nf6__Nf3__c6",
                                        "san": "c6",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Da una casilla de retirada a la dama en c7 y prepara el desarrollo del caballo de dama por d7.",
                                          "ventaja": "Jugada flexible y solida, tipica de las lineas modernas de la Escandinava.",
                                          "debilidad": "Jugada algo lenta que no desarrolla ninguna pieza nueva; blancas puede seguir ganando tiempo de desarrollo con Bd2 o Bc4."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "b"
                                        ],
                                        "children": [
                                          {
                                            "id": "e4__d5__exd5__Qxd5__Nc3__Qa5__d4__Nf6__Nf3__c6__Bc4",
                                            "san": "Bc4",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Desarrolla el alfil a una diagonal activa apuntando a f7, el punto tradicionalmente mas debil del bando negro.",
                                              "ventaja": "Pieza activa con presion directa sobre f7 mientras negras aun no ha enrocado.",
                                              "debilidad": "Ninguna inmediata; jugada estandar del plan principal contra la Escandinava."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "b"
                                            ],
                                            "children": [
                                              {
                                                "id": "e4__d5__exd5__Qxd5__Nc3__Qa5__d4__Nf6__Nf3__c6__Bc4__Bf5",
                                                "san": "Bf5",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Saca por fin el alfil de casillas claras antes de que quede encerrado, aprovechando que en la Escandinava esta diagonal esta libre desde el principio.",
                                                  "ventaja": "Pieza activa fuera de la cadena de peones, con la partida ya casi desarrollada del todo pese al tiempo perdido con la dama.",
                                                  "debilidad": "Ninguna inmediata; es la continuacion mas natural para completar el desarrollo de piezas menores."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "b"
                                                ],
                                                "leafOf": {
                                                  "lineId": "h02-escandinava-principal",
                                                  "name": "Escandinava -- linea principal (2...Qxd5)",
                                                  "userColor": "b",
                                                  "overview": "Negras responde a 1.e4 capturando de inmediato en d5 con la dama tras el cambio de peones, y la reubica en a5 para evitar que blancas la ataque con tiempo. Es la respuesta mas directa y menos teorica contra 1.e4: negras sale del libro de aperturas antes que blancas y busca una posicion solida y conocida de memoria."
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "trap__h05-trampa-leonhardt__6",
                            "san": "b4",
                            "color": "w",
                            "explain": {
                              "idea": "El Gambito Leonhardt: blancas ofrece un segundo peon para ganar tiempos de ataque persiguiendo a la dama negra.",
                              "ventaja": "Iniciativa y desarrollo rapido a cambio del peon.",
                              "debilidad": "Objetivamente algo dudoso segun el analisis de motor, pero muy peligroso en la practica si negras no conoce la teoria."
                            },
                            "kind": "trap",
                            "userColors": [
                              "b"
                            ],
                            "trap": {
                              "id": "h05-trampa-leonhardt",
                              "tipo": "defensiva",
                              "name": "Gambito Leonhardt (4.b4!?)"
                            },
                            "variantName": "Gambito Leonhardt (4.b4!?)",
                            "variantColorId": "trap",
                            "children": [
                              {
                                "id": "trap__h05-trampa-leonhardt__7",
                                "san": "Qxb4",
                                "color": "b",
                                "explain": {
                                  "idea": "Negras acepta el segundo peon, la respuesta principal y mas exigente para mantener la ventaja.",
                                  "ventaja": "Dos peones de ventaja material.",
                                  "debilidad": "La dama sigue expuesta a nuevos ataques de tiempo."
                                },
                                "kind": "trap",
                                "userColors": [
                                  "b"
                                ],
                                "trap": {
                                  "id": "h05-trampa-leonhardt",
                                  "tipo": "defensiva",
                                  "name": "Gambito Leonhardt (4.b4!?)"
                                },
                                "children": [
                                  {
                                    "id": "trap__h05-trampa-leonhardt__8",
                                    "san": "Nb5",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Jugada trampa: blancas amenaza Nxc7+ con horquilla de rey y torre, en vez de la jugada principal 5.Rb1.",
                                      "ventaja": "Amenaza inmediata y concreta que negras debe atender con precision.",
                                      "debilidad": "Objetivamente dudosa, pero muy peligrosa en la practica."
                                    },
                                    "kind": "trap",
                                    "userColors": [
                                      "b"
                                    ],
                                    "trap": {
                                      "id": "h05-trampa-leonhardt",
                                      "tipo": "defensiva",
                                      "name": "Gambito Leonhardt (4.b4!?)"
                                    },
                                    "children": [
                                      {
                                        "id": "trap__h05-trampa-leonhardt__9",
                                        "san": "Qa5",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Negras retira la dama de nuevo a a5, la respuesta mas comun, defendiendo la casilla c7 de la horquilla.",
                                          "ventaja": "Neutraliza la amenaza inmediata de Nxc7+.",
                                          "debilidad": "Ninguna en apariencia -- pero es exactamente la jugada que blancas esta esperando para continuar la trampa."
                                        },
                                        "kind": "trap",
                                        "userColors": [
                                          "b"
                                        ],
                                        "trap": {
                                          "id": "h05-trampa-leonhardt",
                                          "tipo": "defensiva",
                                          "name": "Gambito Leonhardt (4.b4!?)"
                                        },
                                        "children": [
                                          {
                                            "id": "trap__h05-trampa-leonhardt__10",
                                            "san": "Bc4",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Blancas desarrolla el alfil hacia el flanco de rey negro, una jugada que parece simplemente de desarrollo pero que apunta directamente a f7.",
                                              "ventaja": "Pieza activa apuntando a la casilla mas debil del bando negro.",
                                              "debilidad": "Ninguna -- la trampa esta casi lista."
                                            },
                                            "kind": "trap",
                                            "userColors": [
                                              "b"
                                            ],
                                            "trap": {
                                              "id": "h05-trampa-leonhardt",
                                              "tipo": "defensiva",
                                              "name": "Gambito Leonhardt (4.b4!?)"
                                            },
                                            "children": [
                                              {
                                                "id": "trap__h05-trampa-leonhardt__11",
                                                "san": "c6",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "ERROR: negras ataca el caballo de b5 con el peon, la respuesta mas comun e intuitiva, sin ver el sacrificio tactico que esto permite.",
                                                  "ventaja": "Parece ganar tiempo expulsando al caballo.",
                                                  "debilidad": "Cae en la trampa: la jugada correcta era 6...Nf6, controlando la casilla h5 y evitando el ataque que sigue."
                                                },
                                                "kind": "trap",
                                                "userColors": [
                                                  "b"
                                                ],
                                                "trap": {
                                                  "id": "h05-trampa-leonhardt",
                                                  "tipo": "defensiva",
                                                  "name": "Gambito Leonhardt (4.b4!?)"
                                                },
                                                "isError": true,
                                                "children": [
                                                  {
                                                    "id": "trap__h05-trampa-leonhardt__12",
                                                    "san": "Bxf7+",
                                                    "color": "w",
                                                    "explain": {
                                                      "idea": "El sacrificio tactico: el alfil captura en f7 con jaque, exponiendo al rey negro y abriendo la via para el ataque decisivo de la dama por la diagonal d1-h5.",
                                                      "ventaja": "Tras Kxf7 Qh5+ el rey negro queda bajo un ataque muy peligroso, con la ventaja material completamente invertida a favor de blancas.",
                                                      "debilidad": "Ninguna -- es el remate tactico de toda la linea del Gambito Leonhardt."
                                                    },
                                                    "kind": "trap",
                                                    "userColors": [
                                                      "b"
                                                    ],
                                                    "trap": {
                                                      "id": "h05-trampa-leonhardt",
                                                      "tipo": "defensiva",
                                                      "name": "Gambito Leonhardt (4.b4!?)"
                                                    },
                                                    "leafOf": {
                                                      "trapId": "h05-trampa-leonhardt",
                                                      "name": "Gambito Leonhardt (4.b4!?)",
                                                      "userColor": "b",
                                                      "overview": "Escandinava clasica (2...Qxd5 3.Nc3 Qa5). Blancas puede ofrecer un peon con 4.b4!?, y si negras sigue el plan natural (...Qxb4, Nb5, ...Qa5, Bc4, ...c6??) cae en un sacrificio de alfil en f7 con ataque decisivo. Se entrena aqui el lado de negras para conocer la secuencia y saber que evitar (...c6 en el momento equivocado) y que jugar en su lugar. Fuente: Chess-Teacher (dos articulos independientes, coincidentes en la linea).",
                                                      "tipo": "defensiva"
                                                    }
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "e4__d5__exd5__Qxd5__Nc3__Qd6",
                        "san": "Qd6",
                        "color": "b",
                        "explain": {
                          "idea": "Retirada moderna: en vez de ir a a5 (donde puede sufrir una clavada con Bd2), la dama va a d6, vigilando d4 y quedando fuera del alcance de ataques de tiempo inmediatos.",
                          "ventaja": "Evita por completo las ideas de Nd5 y Bd2 con clavada que sufre la linea con 3...Qa5; la eleccion preferida al maximo nivel en los ultimos anios.",
                          "debilidad": "Tapa momentaneamente la diagonal del propio alfil de rey, aunque la dama se reubicara pronto sin perder mas tiempos."
                        },
                        "kind": "book",
                        "userColors": [
                          "b"
                        ],
                        "variantName": "Escandinava -- retirada moderna (3...Qd6)",
                        "variantColorId": 4,
                        "children": [
                          {
                            "id": "e4__d5__exd5__Qxd5__Nc3__Qd6__d4",
                            "san": "d4",
                            "color": "w",
                            "explain": {
                              "idea": "Ocupa el centro con el segundo peon central, ganando espacio mientras negras sigue sin completar el desarrollo.",
                              "ventaja": "Centro solido y mucho espacio, la compensacion natural de blancas por el tiempo perdido por negras con la dama.",
                              "debilidad": "Ninguna relevante; es la continuacion mas natural y fuerte."
                            },
                            "kind": "book",
                            "userColors": [
                              "b"
                            ],
                            "children": [
                              {
                                "id": "e4__d5__exd5__Qxd5__Nc3__Qd6__d4__Nf6",
                                "san": "Nf6",
                                "color": "b",
                                "explain": {
                                  "idea": "Empieza el desarrollo de piezas menores, presionando e4 (ya vacio) y preparando el enroque.",
                                  "ventaja": "Jugada natural que acelera la seguridad del rey.",
                                  "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                                },
                                "kind": "book",
                                "userColors": [
                                  "b"
                                ],
                                "children": [
                                  {
                                    "id": "e4__d5__exd5__Qxd5__Nc3__Qd6__d4__Nf6__Nf3",
                                    "san": "Nf3",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Desarrolla la ultima pieza menor del flanco de rey y prepara el enroque corto.",
                                      "ventaja": "Jugada solida que completa el desarrollo rapido tipico de las lineas contra la Escandinava.",
                                      "debilidad": "Ninguna relevante."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "b"
                                    ],
                                    "children": [
                                      {
                                        "id": "e4__d5__exd5__Qxd5__Nc3__Qd6__d4__Nf6__Nf3__a6",
                                        "san": "a6",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Jugada tipica de las lineas modernas de la Escandinava: evita Nb5 atacando la dama en d6 y prepara ...b5 mas adelante.",
                                          "ventaja": "Previene de forma profilactica la unica idea molesta de blancas contra la dama en d6.",
                                          "debilidad": "Jugada algo lenta que no desarrolla ninguna pieza nueva."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "b"
                                        ],
                                        "children": [
                                          {
                                            "id": "e4__d5__exd5__Qxd5__Nc3__Qd6__d4__Nf6__Nf3__a6__g3",
                                            "san": "g3",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Prepara el fianchetto del alfil de rey, un plan solido y flexible muy popular en las lineas modernas contra la Escandinava.",
                                              "ventaja": "El alfil en g2 presionara la larga diagonal y el flanco de dama de negras sin comprometerse con un desarrollo mas directo.",
                                              "debilidad": "Cede algo de tiempo mientras negras completa su propio desarrollo."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "b"
                                            ],
                                            "children": [
                                              {
                                                "id": "e4__d5__exd5__Qxd5__Nc3__Qd6__d4__Nf6__Nf3__a6__g3__b5",
                                                "san": "b5",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Gana espacio en el flanco de dama, tal y como preparaba ...a6, y prepara el desarrollo del alfil de dama por b7.",
                                                  "ventaja": "Plan activo tipico de las lineas modernas de la Escandinava con 3...Qd6, buscando contrajuego en el flanco de dama.",
                                                  "debilidad": "Puede debilitar ligeramente las casillas del flanco de dama si blancas encuentra a4 mas adelante, aunque es un riesgo asumido en toda la teoria principal."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "b"
                                                ],
                                                "leafOf": {
                                                  "lineId": "h02-escandinava-qd6",
                                                  "name": "Escandinava -- retirada moderna (3...Qd6)",
                                                  "userColor": "b",
                                                  "overview": "Familia Escandinava: en vez de retirar la dama a a5, negras la lleva a d6, una casilla que a primera vista parece rara (tapa el propio alfil de rey) pero que evita la clavada de Bd2/Nc3 de la linea con 3...Qa5 y mantiene la dama vigilando la casilla d4. Es la eleccion mas popular a nivel de elite dentro de toda la familia escandinava en los ultimos anios."
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "e4__d5__exd5__Qxd5__Nc3__Qd8",
                        "san": "Qd8",
                        "color": "b",
                        "explain": {
                          "idea": "Retirada ultra-solida: la dama vuelve a su casilla original, la opcion mas conservadora de toda la familia escandinava.",
                          "ventaja": "Sin ningun objetivo de ataque futuro para blancas -- ni Bd2 ni Nb5 tienen sentido contra la dama en su casilla inicial.",
                          "debilidad": "Pierde mas tiempo que las retiradas a a5 o d6, dejando a blancas con la maxima ventaja de desarrollo de toda la familia."
                        },
                        "kind": "book",
                        "userColors": [
                          "b"
                        ],
                        "variantName": "Escandinava -- retirada ultra-solida (3...Qd8)",
                        "variantColorId": 9,
                        "children": [
                          {
                            "id": "e4__d5__exd5__Qxd5__Nc3__Qd8__d4",
                            "san": "d4",
                            "color": "w",
                            "explain": {
                              "idea": "Ocupa el centro con el segundo peon central, aprovechando al maximo la ventaja de tiempo conseguida.",
                              "ventaja": "Centro amplio y mucha ventaja de desarrollo, la compensacion mas clara de blancas dentro de toda la familia escandinava.",
                              "debilidad": "Ninguna relevante; es la continuacion mas natural y fuerte."
                            },
                            "kind": "book",
                            "userColors": [
                              "b"
                            ],
                            "children": [
                              {
                                "id": "e4__d5__exd5__Qxd5__Nc3__Qd8__d4__Nf6",
                                "san": "Nf6",
                                "color": "b",
                                "explain": {
                                  "idea": "Empieza por fin el desarrollo de piezas menores, ya urgente tras varias jugadas de dama.",
                                  "ventaja": "Jugada natural que acelera la seguridad del rey.",
                                  "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                                },
                                "kind": "book",
                                "userColors": [
                                  "b"
                                ],
                                "children": [
                                  {
                                    "id": "e4__d5__exd5__Qxd5__Nc3__Qd8__d4__Nf6__Nf3",
                                    "san": "Nf3",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Desarrolla la ultima pieza menor del flanco de rey y prepara el enroque corto.",
                                      "ventaja": "Jugada solida que completa el desarrollo rapido tipico de las lineas contra la Escandinava.",
                                      "debilidad": "Ninguna relevante."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "b"
                                    ],
                                    "children": [
                                      {
                                        "id": "e4__d5__exd5__Qxd5__Nc3__Qd8__d4__Nf6__Nf3__Bg4",
                                        "san": "Bg4",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Clava el caballo de f3 para dificultar el desarrollo de blancas, buscando algo de contrajuego pese al tiempo perdido.",
                                          "ventaja": "Pieza activa que presiona de inmediato el centro de blancas.",
                                          "debilidad": "Deja que blancas rompa la clavada con h3 y gane otro tiempo mas."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "b"
                                        ],
                                        "children": [
                                          {
                                            "id": "e4__d5__exd5__Qxd5__Nc3__Qd8__d4__Nf6__Nf3__Bg4__h3",
                                            "san": "h3",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Pregunta al alfil de inmediato, ganando otro tiempo mas dentro de una linea ya muy favorable en desarrollo.",
                                              "ventaja": "Tiempo extra que amplia aun mas la ventaja de desarrollo de blancas.",
                                              "debilidad": "Debilita ligeramente el flanco de rey, un precio menor y asumido en toda la teoria principal."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "b"
                                            ],
                                            "children": [
                                              {
                                                "id": "e4__d5__exd5__Qxd5__Nc3__Qd8__d4__Nf6__Nf3__Bg4__h3__Bh5",
                                                "san": "Bh5",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Mantiene la clavada en vez de cambiar el alfil, buscando conservar algo de presion pese a la posicion incomoda.",
                                                  "ventaja": "Sigue presionando el caballo de f3 y la posicion del rey de blancas.",
                                                  "debilidad": "El alfil puede quedar atrapado mas adelante si blancas encuentra g4 seguido de Ne5, un riesgo real en esta linea."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "b"
                                                ],
                                                "leafOf": {
                                                  "lineId": "h02-escandinava-qd8",
                                                  "name": "Escandinava -- retirada ultra-solida (3...Qd8)",
                                                  "userColor": "b",
                                                  "overview": "Familia Escandinava: la retirada mas conservadora de todas -- la dama vuelve a su casilla original, perdiendo mas tiempo que con Qa5 o Qd6 pero sin dejar ningun objetivo de ataque futuro para blancas. Es la eleccion de jugadores que priorizan la solidez absoluta sobre la actividad de la dama, muy dificil de sacar de la teoria conocida."
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "e4__d5__exd5__Nf6",
                "san": "Nf6",
                "color": "b",
                "explain": {
                  "idea": "Escandinava Moderna: en vez de recapturar de inmediato con la dama, negras desarrolla primero y recupera el peon la jugada siguiente con el caballo.",
                  "ventaja": "Evita por completo los tiempos de ataque contra la dama que sufre la linea principal (2...Qxd5); desarrollo mas natural desde el principio.",
                  "debilidad": "El peon d5 queda momentaneamente en manos de blancas un turno mas, aunque negras lo recupera sin problemas la jugada siguiente."
                },
                "kind": "book",
                "userColors": [
                  "b"
                ],
                "variantName": "Escandinava Moderna (2...Nf6)",
                "variantColorId": 10,
                "children": [
                  {
                    "id": "e4__d5__exd5__Nf6__d4",
                    "san": "d4",
                    "color": "w",
                    "explain": {
                      "idea": "Sostiene el peon de mas con el peon de dama, ganando espacio central antes de que negras lo recupere.",
                      "ventaja": "Centro amplio y solido, la forma mas ambiciosa de defender el peon extra.",
                      "debilidad": "Ninguna relevante; es la continuacion mas natural y fuerte."
                    },
                    "kind": "book",
                    "userColors": [
                      "b"
                    ],
                    "children": [
                      {
                        "id": "e4__d5__exd5__Nf6__d4__Nxd5",
                        "san": "Nxd5",
                        "color": "b",
                        "explain": {
                          "idea": "Recupera el peon con el caballo, ya desarrollado y sin haber perdido ningun tiempo con la dama.",
                          "ventaja": "Material igualado y pieza activa en el centro, con el desarrollo muy por delante respecto a la linea principal con 2...Qxd5.",
                          "debilidad": "El caballo en d5 puede ser blanco de c4 mas adelante, obligandolo a retroceder."
                        },
                        "kind": "book",
                        "userColors": [
                          "b"
                        ],
                        "children": [
                          {
                            "id": "e4__d5__exd5__Nf6__d4__Nxd5__Nf3",
                            "san": "Nf3",
                            "color": "w",
                            "explain": {
                              "idea": "Desarrolla y prepara el enroque corto, la continuacion mas natural y solida.",
                              "ventaja": "Jugada flexible que no compromete nada y completa el desarrollo con rapidez.",
                              "debilidad": "Ninguna relevante."
                            },
                            "kind": "book",
                            "userColors": [
                              "b"
                            ],
                            "children": [
                              {
                                "id": "e4__d5__exd5__Nf6__d4__Nxd5__Nf3__g6",
                                "san": "g6",
                                "color": "b",
                                "explain": {
                                  "idea": "Prepara el fianchetto del alfil de rey, un plan solido y flexible tipico de las lineas modernas contra 1.e4.",
                                  "ventaja": "El alfil en g7 controlara la larga diagonal y apoyara al caballo de d5 si blancas ataca con c4.",
                                  "debilidad": "Debilita ligeramente las casillas oscuras alrededor del rey, aunque el fianchetto lo compensa de sobra."
                                },
                                "kind": "book",
                                "userColors": [
                                  "b"
                                ],
                                "children": [
                                  {
                                    "id": "e4__d5__exd5__Nf6__d4__Nxd5__Nf3__g6__c4",
                                    "san": "c4",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Ataca el caballo de d5 ganando espacio y tiempo, el plan mas ambicioso contra la Escandinava Moderna.",
                                      "ventaja": "Gana espacio en el centro y obliga a negras a decidir la retirada del caballo.",
                                      "debilidad": "Debilita ligeramente d4, aunque es un precio asumido en toda la teoria principal de esta linea."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "b"
                                    ],
                                    "children": [
                                      {
                                        "id": "e4__d5__exd5__Nf6__d4__Nxd5__Nf3__g6__c4__Nb6",
                                        "san": "Nb6",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Retira el caballo a una casilla activa, presionando c4 y manteniendo la vista sobre el centro.",
                                          "ventaja": "Pieza bien colocada que sigue participando en la lucha por el centro.",
                                          "debilidad": "Ninguna relevante; es la retirada mas natural y solida."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "b"
                                        ],
                                        "children": [
                                          {
                                            "id": "e4__d5__exd5__Nf6__d4__Nxd5__Nf3__g6__c4__Nb6__Nc3",
                                            "san": "Nc3",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Desarrolla la ultima pieza menor del flanco de dama y refuerza el centro.",
                                              "ventaja": "Pieza activa que completa el desarrollo antes de decidir el plan de medio juego (Be3, Be2, h3, etc).",
                                              "debilidad": "Ninguna relevante."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "b"
                                            ],
                                            "children": [
                                              {
                                                "id": "e4__d5__exd5__Nf6__d4__Nxd5__Nf3__g6__c4__Nb6__Nc3__Bg7",
                                                "san": "Bg7",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Completa el fianchetto, la ultima pieza menor de desarrollo natural antes del enroque.",
                                                  "ventaja": "Presion de largo alcance sobre el centro y el flanco de dama de blancas desde la larga diagonal.",
                                                  "debilidad": "Ninguna relevante; es la continuacion mas natural para completar el desarrollo."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "b"
                                                ],
                                                "leafOf": {
                                                  "lineId": "h02-escandinava-moderna",
                                                  "name": "Escandinava Moderna (2...Nf6)",
                                                  "userColor": "b",
                                                  "overview": "Familia Escandinava: en vez de recapturar de inmediato con la dama, negras desarrolla primero el caballo y recupera el peon con la pieza en la siguiente jugada, evitando por completo los tiempos de ataque contra la dama que caracterizan la linea principal (2...Qxd5). Es la eleccion mas popular a nivel de elite dentro de toda la familia escandinava por su solidez."
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "c4",
    "san": "c4",
    "color": "w",
    "explain": {
      "idea": "Apertura Inglesa: ataca d5 desde el flanco sin ocupar el centro con un peon central todavia.",
      "ventaja": "Maxima flexibilidad; blancas puede transponer a estructuras de d4, a un fianchetto puro, o mantener la lucha en el flanco de dama.",
      "debilidad": "No ocupa el centro de inmediato, dejando que negras responda con la misma libertad."
    },
    "kind": "book",
    "userColors": [
      "b"
    ],
    "children": [
      {
        "id": "c4__e5",
        "san": "e5",
        "color": "b",
        "explain": {
          "idea": "Respuesta simetrica que trata la posicion como una Siciliana con colores invertidos, ocupando el centro de inmediato.",
          "ventaja": "La respuesta mas popular y solida contra la Inglesa, con mucha teoria y planes conocidos.",
          "debilidad": "Ninguna relevante a este nivel; es la continuacion mas natural y fiable."
        },
        "kind": "book",
        "userColors": [
          "b"
        ],
        "variantName": "Inglesa -- respuesta simetrica tipo Siciliana Inversa",
        "variantColorId": 9,
        "children": [
          {
            "id": "c4__e5__Nc3",
            "san": "Nc3",
            "color": "w",
            "explain": {
              "idea": "Desarrolla una pieza y refuerza el control sobre d5, evitando que negras ocupe esa casilla sin oposicion.",
              "ventaja": "Pieza activa que prepara g3 y el fianchetto tipico de la Inglesa.",
              "debilidad": "Ninguna relevante; es la continuacion mas natural y flexible."
            },
            "kind": "book",
            "userColors": [
              "b"
            ],
            "children": [
              {
                "id": "c4__e5__Nc3__Nf6",
                "san": "Nf6",
                "color": "b",
                "explain": {
                  "idea": "Desarrolla la pieza mas natural, presionando e4 y preparando el enroque corto.",
                  "ventaja": "Jugada solida que no compromete nada y acelera la seguridad del rey.",
                  "debilidad": "Ninguna relevante; es la respuesta mas natural en la posicion."
                },
                "kind": "book",
                "userColors": [
                  "b"
                ],
                "children": [
                  {
                    "id": "c4__e5__Nc3__Nf6__Nf3",
                    "san": "Nf3",
                    "color": "w",
                    "explain": {
                      "idea": "Desarrolla la otra pieza menor del flanco de rey, presionando tambien el centro.",
                      "ventaja": "Pieza activa que prepara g3 y el enroque corto sin comprometerse todavia con d4.",
                      "debilidad": "Ninguna relevante."
                    },
                    "kind": "book",
                    "userColors": [
                      "b"
                    ],
                    "children": [
                      {
                        "id": "c4__e5__Nc3__Nf6__Nf3__Nc6",
                        "san": "Nc6",
                        "color": "b",
                        "explain": {
                          "idea": "Desarrolla el ultimo caballo, reforzando el centro de negras y completando el desarrollo simetrico.",
                          "ventaja": "Pieza activa que mantiene la simetria y la solidez de la posicion.",
                          "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                        },
                        "kind": "book",
                        "userColors": [
                          "b"
                        ],
                        "children": [
                          {
                            "id": "c4__e5__Nc3__Nf6__Nf3__Nc6__g3",
                            "san": "g3",
                            "color": "w",
                            "explain": {
                              "idea": "Prepara el fianchetto del alfil de rey, el plan mas caracteristico de la Apertura Inglesa.",
                              "ventaja": "Alfil muy activo sobre la diagonal larga una vez completado el fianchetto.",
                              "debilidad": "Ninguna relevante; es la continuacion mas tipica del sistema."
                            },
                            "kind": "book",
                            "userColors": [
                              "b"
                            ],
                            "children": [
                              {
                                "id": "c4__e5__Nc3__Nf6__Nf3__Nc6__g3__d5",
                                "san": "d5",
                                "color": "b",
                                "explain": {
                                  "idea": "Rompe la simetria ocupando el centro con el peon de dama, aprovechando que blancas todavia no ha fijado su estructura central.",
                                  "ventaja": "Gana espacio en el centro y fuerza a blancas a definir la tension inmediatamente.",
                                  "debilidad": "Si blancas cambia en d5, negras debera recapturar con una pieza, cediendo algo de tiempo si blancas encuentra despues Ng5 o similar."
                                },
                                "kind": "book",
                                "userColors": [
                                  "b"
                                ],
                                "children": [
                                  {
                                    "id": "c4__e5__Nc3__Nf6__Nf3__Nc6__g3__d5__cxd5",
                                    "san": "cxd5",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Cambia en el centro antes de que negras pueda sostener la tension a su gusto.",
                                      "ventaja": "Fuerza a negras a recapturar con una pieza, ganando tiempo de desarrollo.",
                                      "debilidad": "Ninguna; es la continuacion mas natural y fuerte."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "b"
                                    ],
                                    "children": [
                                      {
                                        "id": "c4__e5__Nc3__Nf6__Nf3__Nc6__g3__d5__cxd5__Nxd5",
                                        "san": "Nxd5",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Recaptura con el caballo, la pieza mas natural para hacerlo y la que mas actividad mantiene en el centro.",
                                          "ventaja": "Pieza muy activa en el centro del tablero.",
                                          "debilidad": "El caballo puede ser blanco de un futuro Bg2 combinado con Nxd5, aunque no es una amenaza inmediata."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "b"
                                        ],
                                        "children": [
                                          {
                                            "id": "c4__e5__Nc3__Nf6__Nf3__Nc6__g3__d5__cxd5__Nxd5__Bg2",
                                            "san": "Bg2",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Completa el fianchetto, presionando la diagonal larga hacia el flanco de dama de negras.",
                                              "ventaja": "Pieza muy activa que apoya la lucha por el centro y prepara el enroque corto.",
                                              "debilidad": "Ninguna relevante; es la continuacion mas natural del plan."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "b"
                                            ],
                                            "children": [
                                              {
                                                "id": "c4__e5__Nc3__Nf6__Nf3__Nc6__g3__d5__cxd5__Nxd5__Bg2__Nb6",
                                                "san": "Nb6",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Retira el caballo de la presion de la diagonal larga a una casilla solida, evitando cambios prematuros.",
                                                  "ventaja": "Pieza segura que sigue controlando casillas centrales importantes.",
                                                  "debilidad": "Pierde un tiempo respecto a mantener el caballo en el centro, aunque es la eleccion mas solida."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "b"
                                                ],
                                                "children": [
                                                  {
                                                    "id": "c4__e5__Nc3__Nf6__Nf3__Nc6__g3__d5__cxd5__Nxd5__Bg2__Nb6__O-O",
                                                    "san": "O-O",
                                                    "color": "w",
                                                    "explain": {
                                                      "idea": "Pone el rey a salvo antes de decidir el plan de medio juego.",
                                                      "ventaja": "Seguridad del rey resuelta; a partir de aqui blancas puede pensar en d3 y Rb1-b4.",
                                                      "debilidad": "Ninguna; es la jugada mas natural para completar la seguridad basica."
                                                    },
                                                    "kind": "book",
                                                    "userColors": [
                                                      "b"
                                                    ],
                                                    "children": [
                                                      {
                                                        "id": "c4__e5__Nc3__Nf6__Nf3__Nc6__g3__d5__cxd5__Nxd5__Bg2__Nb6__O-O__Be7",
                                                        "san": "Be7",
                                                        "color": "b",
                                                        "explain": {
                                                          "idea": "Desarrolla el alfil de rey a una casilla solida, preparando el enroque corto de inmediato.",
                                                          "ventaja": "Jugada solida que no compromete nada y acelera la seguridad del rey.",
                                                          "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                                                        },
                                                        "kind": "book",
                                                        "userColors": [
                                                          "b"
                                                        ],
                                                        "children": [
                                                          {
                                                            "id": "c4__e5__Nc3__Nf6__Nf3__Nc6__g3__d5__cxd5__Nxd5__Bg2__Nb6__O-O__Be7__d3",
                                                            "san": "d3",
                                                            "color": "w",
                                                            "explain": {
                                                              "idea": "Abre la diagonal del alfil de dama y refuerza el centro antes de decidir el plan de flanco de dama.",
                                                              "ventaja": "Estructura solida y flexible que mantiene varias opciones de plan abiertas.",
                                                              "debilidad": "Ninguna relevante; es la continuacion mas natural del sistema."
                                                            },
                                                            "kind": "book",
                                                            "userColors": [
                                                              "b"
                                                            ],
                                                            "children": [
                                                              {
                                                                "id": "c4__e5__Nc3__Nf6__Nf3__Nc6__g3__d5__cxd5__Nxd5__Bg2__Nb6__O-O__Be7__d3__O-O",
                                                                "san": "O-O",
                                                                "color": "b",
                                                                "explain": {
                                                                  "idea": "Pone el rey a salvo y conecta las torres antes de decidir el plan de medio juego.",
                                                                  "ventaja": "Seguridad del rey resuelta; el desarrollo basico de negras ya esta completo.",
                                                                  "debilidad": "Ninguna; es la jugada mas natural para completar el desarrollo basico."
                                                                },
                                                                "kind": "book",
                                                                "userColors": [
                                                                  "b"
                                                                ],
                                                                "leafOf": {
                                                                  "lineId": "h03-inglesa-inversa-siciliana",
                                                                  "name": "Inglesa -- respuesta simetrica tipo Siciliana Inversa",
                                                                  "userColor": "b",
                                                                  "overview": "Familia Inglesa: negras responde a 1.c4 con ...e5, tratando la posicion como una Siciliana con los colores invertidos (negras ocupa el centro como blancas en la Siciliana normal). Es la respuesta mas popular y solida contra la Inglesa, con planes muy conocidos de desarrollo simetrico y lucha por el centro tras el cambio en d5."
                                                                }
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "c4__c5",
        "san": "c5",
        "color": "b",
        "explain": {
          "idea": "Respuesta simetrica pura, sin definir el centro todavia y manteniendo la maxima flexibilidad de estructura.",
          "ventaja": "Es la respuesta mas jugada en la practica contra la Inglesa; evita entrar en la teoria mas afilada de la Siciliana Inversa.",
          "debilidad": "Ninguna relevante a este nivel; es una continuacion solida y muy probada."
        },
        "kind": "book",
        "userColors": [
          "b"
        ],
        "variantName": "Inglesa -- respuesta simetrica pura con doble fianchetto (1.c4 c5)",
        "variantColorId": 4,
        "children": [
          {
            "id": "c4__c5__Nf3",
            "san": "Nf3",
            "color": "w",
            "explain": {
              "idea": "Desarrolla una pieza y controla el centro sin comprometer todavia la estructura de peones.",
              "ventaja": "Pieza activa que prepara g3 y mantiene abiertas varias transposiciones.",
              "debilidad": "Ninguna relevante; es la continuacion mas natural y flexible."
            },
            "kind": "book",
            "userColors": [
              "b"
            ],
            "children": [
              {
                "id": "c4__c5__Nf3__Nf6",
                "san": "Nf6",
                "color": "b",
                "explain": {
                  "idea": "Desarrolla la pieza mas natural, manteniendo la simetria y preparando el enroque corto.",
                  "ventaja": "Jugada solida que no compromete nada y acelera la seguridad del rey.",
                  "debilidad": "Ninguna relevante; es la respuesta mas natural en la posicion."
                },
                "kind": "book",
                "userColors": [
                  "b"
                ],
                "children": [
                  {
                    "id": "c4__c5__Nf3__Nf6__g3",
                    "san": "g3",
                    "color": "w",
                    "explain": {
                      "idea": "Prepara el fianchetto del alfil de rey, el plan mas caracteristico de la Apertura Inglesa.",
                      "ventaja": "Alfil muy activo sobre la diagonal larga una vez completado el fianchetto.",
                      "debilidad": "Ninguna relevante; es la continuacion mas tipica del sistema."
                    },
                    "kind": "book",
                    "userColors": [
                      "b"
                    ],
                    "children": [
                      {
                        "id": "c4__c5__Nf3__Nf6__g3__g6",
                        "san": "g6",
                        "color": "b",
                        "explain": {
                          "idea": "Responde con el mismo plan de fianchetto, manteniendo la simetria estructural de la posicion.",
                          "ventaja": "Estructura muy solida donde ningun bando gana espacio real; facil de jugar de memoria.",
                          "debilidad": "Ninguna relevante; es la continuacion mas natural para mantener la simetria."
                        },
                        "kind": "book",
                        "userColors": [
                          "b"
                        ],
                        "children": [
                          {
                            "id": "c4__c5__Nf3__Nf6__g3__g6__Bg2",
                            "san": "Bg2",
                            "color": "w",
                            "explain": {
                              "idea": "Completa el fianchetto, presionando la diagonal larga hacia el flanco de dama de negras.",
                              "ventaja": "Pieza muy activa que apoya la lucha por el centro y prepara el enroque corto.",
                              "debilidad": "Ninguna relevante; es la continuacion mas natural del plan."
                            },
                            "kind": "book",
                            "userColors": [
                              "b"
                            ],
                            "children": [
                              {
                                "id": "c4__c5__Nf3__Nf6__g3__g6__Bg2__Bg7",
                                "san": "Bg7",
                                "color": "b",
                                "explain": {
                                  "idea": "Completa el fianchetto simetrico, apuntando tambien a la diagonal larga.",
                                  "ventaja": "Alfil muy activo que compensa exactamente la presion del alfil blanco.",
                                  "debilidad": "Ninguna relevante; es la jugada mas natural para mantener la simetria."
                                },
                                "kind": "book",
                                "userColors": [
                                  "b"
                                ],
                                "children": [
                                  {
                                    "id": "c4__c5__Nf3__Nf6__g3__g6__Bg2__Bg7__Nc3",
                                    "san": "Nc3",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Desarrolla la ultima pieza menor del flanco de dama, reforzando el control de d5.",
                                      "ventaja": "Pieza activa que completa el desarrollo antes de decidir el plan central.",
                                      "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "b"
                                    ],
                                    "children": [
                                      {
                                        "id": "c4__c5__Nf3__Nf6__g3__g6__Bg2__Bg7__Nc3__Nc6",
                                        "san": "Nc6",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Desarrolla el ultimo caballo, manteniendo la simetria y reforzando el control de d4.",
                                          "ventaja": "Pieza activa que mantiene la solidez y la simetria de la posicion.",
                                          "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "b"
                                        ],
                                        "children": [
                                          {
                                            "id": "c4__c5__Nf3__Nf6__g3__g6__Bg2__Bg7__Nc3__Nc6__O-O",
                                            "san": "O-O",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Pone el rey a salvo antes de decidir el plan de medio juego.",
                                              "ventaja": "Seguridad del rey resuelta; a partir de aqui blancas puede pensar en d4 o en jugar por el flanco de dama.",
                                              "debilidad": "Ninguna; es la jugada mas natural para completar la seguridad basica."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "b"
                                            ],
                                            "children": [
                                              {
                                                "id": "c4__c5__Nf3__Nf6__g3__g6__Bg2__Bg7__Nc3__Nc6__O-O__O-O",
                                                "san": "O-O",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Pone el rey a salvo y conecta las torres antes de decidir el plan de medio juego.",
                                                  "ventaja": "Seguridad del rey resuelta; el desarrollo basico de negras ya esta completo.",
                                                  "debilidad": "Ninguna; es la jugada mas natural para completar el desarrollo basico."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "b"
                                                ],
                                                "children": [
                                                  {
                                                    "id": "c4__c5__Nf3__Nf6__g3__g6__Bg2__Bg7__Nc3__Nc6__O-O__O-O__d4",
                                                    "san": "d4",
                                                    "color": "w",
                                                    "explain": {
                                                      "idea": "Rompe la simetria ocupando el centro con el peon de dama, aprovechando el desarrollo ya completo.",
                                                      "ventaja": "Gana espacio en el centro y fuerza a negras a definir la tension inmediatamente.",
                                                      "debilidad": "Cede la casilla d4 a una pieza negra si el cambio se resuelve de forma favorable para negras."
                                                    },
                                                    "kind": "book",
                                                    "userColors": [
                                                      "b"
                                                    ],
                                                    "children": [
                                                      {
                                                        "id": "c4__c5__Nf3__Nf6__g3__g6__Bg2__Bg7__Nc3__Nc6__O-O__O-O__d4__cxd4",
                                                        "san": "cxd4",
                                                        "color": "b",
                                                        "explain": {
                                                          "idea": "Cambia antes de que blancas pueda sostener la tension a su gusto, siguiendo el mismo criterio que blancas.",
                                                          "ventaja": "Simplifica la posicion sin ceder nada; el cambio es completamente natural en la estructura simetrica.",
                                                          "debilidad": "Ninguna; es la continuacion mas solida y natural."
                                                        },
                                                        "kind": "book",
                                                        "userColors": [
                                                          "b"
                                                        ],
                                                        "children": [
                                                          {
                                                            "id": "c4__c5__Nf3__Nf6__g3__g6__Bg2__Bg7__Nc3__Nc6__O-O__O-O__d4__cxd4__Nxd4",
                                                            "san": "Nxd4",
                                                            "color": "w",
                                                            "explain": {
                                                              "idea": "Recaptura con el caballo, la pieza mas activa para ocupar el centro.",
                                                              "ventaja": "Pieza muy activa en el centro del tablero, lista para cambiarse por el caballo negro si conviene.",
                                                              "debilidad": "Ninguna relevante; es la recaptura mas natural."
                                                            },
                                                            "kind": "book",
                                                            "userColors": [
                                                              "b"
                                                            ],
                                                            "children": [
                                                              {
                                                                "id": "c4__c5__Nf3__Nf6__g3__g6__Bg2__Bg7__Nc3__Nc6__O-O__O-O__d4__cxd4__Nxd4__Nxd4",
                                                                "san": "Nxd4",
                                                                "color": "b",
                                                                "explain": {
                                                                  "idea": "Cambia el caballo activo blanco antes de que se convierta en una pieza molesta en el centro.",
                                                                  "ventaja": "Simplifica la posicion y deja a negras con un desarrollo completo y solido.",
                                                                  "debilidad": "Entrega la recaptura a la dama blanca, que queda temporalmente centralizada."
                                                                },
                                                                "kind": "book",
                                                                "userColors": [
                                                                  "b"
                                                                ],
                                                                "children": [
                                                                  {
                                                                    "id": "c4__c5__Nf3__Nf6__g3__g6__Bg2__Bg7__Nc3__Nc6__O-O__O-O__d4__cxd4__Nxd4__Nxd4__Qxd4",
                                                                    "san": "Qxd4",
                                                                    "color": "w",
                                                                    "explain": {
                                                                      "idea": "Recaptura con la dama, centralizandola de forma temporal mientras completa el plan de desarrollo.",
                                                                      "ventaja": "Dama activa que presiona la diagonal larga junto al alfil de g2.",
                                                                      "debilidad": "La dama puede recibir un tiempo si negras encuentra despues ...Nc6 o una jugada similar con ganancia de tiempo."
                                                                    },
                                                                    "kind": "book",
                                                                    "userColors": [
                                                                      "b"
                                                                    ],
                                                                    "children": [
                                                                      {
                                                                        "id": "c4__c5__Nf3__Nf6__g3__g6__Bg2__Bg7__Nc3__Nc6__O-O__O-O__d4__cxd4__Nxd4__Nxd4__Qxd4__d6",
                                                                        "san": "d6",
                                                                        "color": "b",
                                                                        "explain": {
                                                                          "idea": "Abre la diagonal del alfil de dama y consolida la estructura antes de decidir el plan de medio juego.",
                                                                          "ventaja": "Estructura solida y flexible que mantiene varias opciones de plan abiertas, con el desarrollo ya completo.",
                                                                          "debilidad": "Ninguna relevante; es la continuacion mas natural para cerrar el desarrollo basico de la linea."
                                                                        },
                                                                        "kind": "book",
                                                                        "userColors": [
                                                                          "b"
                                                                        ],
                                                                        "leafOf": {
                                                                          "lineId": "h03-inglesa-simetrica",
                                                                          "name": "Inglesa -- respuesta simetrica pura con doble fianchetto (1.c4 c5)",
                                                                          "userColor": "b",
                                                                          "overview": "Familia Inglesa: negras responde a 1.c4 con ...c5, manteniendo la simetria total en el flanco de dama en vez de ocupar el centro como en la Siciliana Inversa. Es, en la practica, la respuesta mas jugada contra la Inglesa a todos los niveles, y desemboca en una estructura de doble fianchetto muy solida y bien conocida."
                                                                        }
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "Nf3",
    "san": "Nf3",
    "color": "w",
    "explain": {
      "idea": "Apertura Reti: desarrolla una pieza antes que ningun peon central, manteniendo maxima flexibilidad de transposicion.",
      "ventaja": "Puede transponer a Inglesa, Catalan, o quedarse en una estructura Reti pura segun la respuesta de negras.",
      "debilidad": "No define ningun plan concreto todavia, cediendo a negras la misma libertad de eleccion."
    },
    "kind": "book",
    "userColors": [
      "b"
    ],
    "variantName": "Reti -- estructura de fianchetto simetrico",
    "variantColorId": 9,
    "children": [
      {
        "id": "Nf3__d5",
        "san": "d5",
        "color": "b",
        "explain": {
          "idea": "Ocupa el centro de inmediato con el desarrollo mas solido y universal, sin comprometerse con ninguna transposicion concreta.",
          "ventaja": "Maxima flexibilidad; negras puede mantener esta estructura sea cual sea el plan que elija blancas despues.",
          "debilidad": "Ninguna relevante a este nivel."
        },
        "kind": "book",
        "userColors": [
          "b"
        ],
        "children": [
          {
            "id": "Nf3__d5__g3",
            "san": "g3",
            "color": "w",
            "explain": {
              "idea": "Prepara el fianchetto del alfil de rey, manteniendo la estructura Reti pura sin transponer a d4 ni c4.",
              "ventaja": "Alfil muy activo sobre la diagonal larga una vez completado el fianchetto.",
              "debilidad": "Ninguna relevante; es la continuacion mas tipica del sistema."
            },
            "kind": "book",
            "userColors": [
              "b"
            ],
            "children": [
              {
                "id": "Nf3__d5__g3__Nf6",
                "san": "Nf6",
                "color": "b",
                "explain": {
                  "idea": "Desarrolla la pieza mas natural, presionando e4 y preparando el enroque corto.",
                  "ventaja": "Jugada solida que no compromete nada y acelera la seguridad del rey.",
                  "debilidad": "Ninguna relevante; es la respuesta mas natural en la posicion."
                },
                "kind": "book",
                "userColors": [
                  "b"
                ],
                "children": [
                  {
                    "id": "Nf3__d5__g3__Nf6__Bg2",
                    "san": "Bg2",
                    "color": "w",
                    "explain": {
                      "idea": "Completa el fianchetto, presionando la diagonal larga hacia el centro y el flanco de dama de negras.",
                      "ventaja": "Pieza muy activa que apoya la lucha por el centro y prepara el enroque corto.",
                      "debilidad": "Ninguna relevante; es la continuacion mas natural del plan."
                    },
                    "kind": "book",
                    "userColors": [
                      "b"
                    ],
                    "children": [
                      {
                        "id": "Nf3__d5__g3__Nf6__Bg2__e6",
                        "san": "e6",
                        "color": "b",
                        "explain": {
                          "idea": "Prepara el desarrollo del alfil de rey y sostiene la posicion central sin ceder espacio.",
                          "ventaja": "Estructura solida y flexible que mantiene varias opciones de plan abiertas.",
                          "debilidad": "El alfil de casillas claras de negras queda temporalmente encerrado tras la cadena de peones."
                        },
                        "kind": "book",
                        "userColors": [
                          "b"
                        ],
                        "children": [
                          {
                            "id": "Nf3__d5__g3__Nf6__Bg2__e6__O-O",
                            "san": "O-O",
                            "color": "w",
                            "explain": {
                              "idea": "Pone el rey a salvo antes de decidir el plan de medio juego.",
                              "ventaja": "Seguridad del rey resuelta; a partir de aqui blancas puede pensar en d3 y e4.",
                              "debilidad": "Ninguna; es la jugada mas natural para completar la seguridad basica."
                            },
                            "kind": "book",
                            "userColors": [
                              "b"
                            ],
                            "children": [
                              {
                                "id": "Nf3__d5__g3__Nf6__Bg2__e6__O-O__Be7",
                                "san": "Be7",
                                "color": "b",
                                "explain": {
                                  "idea": "Desarrolla el alfil de rey a una casilla solida, preparando el enroque corto de inmediato.",
                                  "ventaja": "Jugada solida que no compromete nada y acelera la seguridad del rey.",
                                  "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                                },
                                "kind": "book",
                                "userColors": [
                                  "b"
                                ],
                                "children": [
                                  {
                                    "id": "Nf3__d5__g3__Nf6__Bg2__e6__O-O__Be7__d3",
                                    "san": "d3",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Abre la diagonal del alfil de dama y prepara el avance central e4, el plan tipico tipo King s Indian Attack.",
                                      "ventaja": "Estructura solida y flexible que mantiene varias opciones de plan abiertas.",
                                      "debilidad": "Ninguna relevante; es la continuacion mas natural del sistema."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "b"
                                    ],
                                    "children": [
                                      {
                                        "id": "Nf3__d5__g3__Nf6__Bg2__e6__O-O__Be7__d3__O-O",
                                        "san": "O-O",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Pone el rey a salvo y conecta las torres antes de decidir el plan de medio juego.",
                                          "ventaja": "Seguridad del rey resuelta; el desarrollo basico de negras ya esta completo.",
                                          "debilidad": "Ninguna; es la jugada mas natural para completar el desarrollo basico."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "b"
                                        ],
                                        "children": [
                                          {
                                            "id": "Nf3__d5__g3__Nf6__Bg2__e6__O-O__Be7__d3__O-O__Nbd2",
                                            "san": "Nbd2",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Completa el desarrollo de piezas menores, apoyando el avance central e4 que se prepara.",
                                              "ventaja": "Desarrollo completo y solido, listo para el plan central de e4.",
                                              "debilidad": "Ninguna relevante."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "b"
                                            ],
                                            "children": [
                                              {
                                                "id": "Nf3__d5__g3__Nf6__Bg2__e6__O-O__Be7__d3__O-O__Nbd2__c5",
                                                "san": "c5",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Gana espacio en el flanco de dama y presiona el centro de blancas antes de que complete su plan.",
                                                  "ventaja": "Actividad en el flanco de dama sin descuidar la seguridad del rey.",
                                                  "debilidad": "Ninguna inmediata; es la continuacion mas activa y natural."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "b"
                                                ],
                                                "children": [
                                                  {
                                                    "id": "Nf3__d5__g3__Nf6__Bg2__e6__O-O__Be7__d3__O-O__Nbd2__c5__e4",
                                                    "san": "e4",
                                                    "color": "w",
                                                    "explain": {
                                                      "idea": "Ejecuta el plan central tipico del sistema tipo King s Indian Attack, ganando espacio en el centro.",
                                                      "ventaja": "Centro amplio y mayor espacio para las piezas de blancas.",
                                                      "debilidad": "Cede el control de d4 momentaneamente, un factor menor que blancas acepta a cambio del espacio ganado."
                                                    },
                                                    "kind": "book",
                                                    "userColors": [
                                                      "b"
                                                    ],
                                                    "children": [
                                                      {
                                                        "id": "Nf3__d5__g3__Nf6__Bg2__e6__O-O__Be7__d3__O-O__Nbd2__c5__e4__Nc6",
                                                        "san": "Nc6",
                                                        "color": "b",
                                                        "explain": {
                                                          "idea": "Desarrolla el ultimo caballo, presionando el centro de blancas y completando el desarrollo de piezas menores.",
                                                          "ventaja": "Pieza activa que aumenta la presion sobre el centro de blancas.",
                                                          "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                                                        },
                                                        "kind": "book",
                                                        "userColors": [
                                                          "b"
                                                        ],
                                                        "children": [
                                                          {
                                                            "id": "Nf3__d5__g3__Nf6__Bg2__e6__O-O__Be7__d3__O-O__Nbd2__c5__e4__Nc6__Re1",
                                                            "san": "Re1",
                                                            "color": "w",
                                                            "explain": {
                                                              "idea": "Coloca la torre en la columna central abierta por el avance de peones, apoyando futuras tensiones en e5 o e4.",
                                                              "ventaja": "Pieza bien colocada para apoyar el centro a largo plazo.",
                                                              "debilidad": "Ninguna relevante; es la continuacion mas natural del plan."
                                                            },
                                                            "kind": "book",
                                                            "userColors": [
                                                              "b"
                                                            ],
                                                            "children": [
                                                              {
                                                                "id": "Nf3__d5__g3__Nf6__Bg2__e6__O-O__Be7__d3__O-O__Nbd2__c5__e4__Nc6__Re1__b5",
                                                                "san": "b5",
                                                                "color": "b",
                                                                "explain": {
                                                                  "idea": "Gana espacio en el flanco de dama, el plan tipico de negras en estas estructuras simetricas tipo King s Indian Attack invertido.",
                                                                  "ventaja": "Espacio y actividad en el flanco de dama, complementando la presion ya iniciada con ...c5.",
                                                                  "debilidad": "Ninguna relevante; es la continuacion mas natural del plan."
                                                                },
                                                                "kind": "book",
                                                                "userColors": [
                                                                  "b"
                                                                ],
                                                                "leafOf": {
                                                                  "lineId": "h03-reti-fianchetto-doble",
                                                                  "name": "Reti -- estructura de fianchetto simetrico",
                                                                  "userColor": "b",
                                                                  "overview": "Familia Reti: blancas empieza con el caballo antes que ningun peon central, manteniendo la maxima flexibilidad para transponer a Inglesa, Catalan o quedarse en una estructura Reti pura tipo King s Indian Attack invertido. Negras responde con el desarrollo mas solido y universal (d5, Nf6, e6, fianchetto de rey si blancas lo hace tambien) sin comprometerse con ninguna transposicion concreta."
                                                                }
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "b3",
    "san": "b3",
    "color": "w",
    "explain": {
      "idea": "Apertura Larsen: prepara el fianchetto del alfil de dama sin ocupar el centro con ningun peon todavia.",
      "ventaja": "Maxima flexibilidad de transposicion y un alfil muy activo sobre la diagonal larga una vez completado el fianchetto.",
      "debilidad": "No disputa el centro de inmediato, dejando que negras ocupe el espacio central sin oposicion."
    },
    "kind": "book",
    "userColors": [
      "b"
    ],
    "variantName": "Larsen (1.b3) -- respuesta central con ...e5",
    "variantColorId": 1,
    "children": [
      {
        "id": "b3__e5",
        "san": "e5",
        "color": "b",
        "explain": {
          "idea": "Ocupa el centro de inmediato, la reaccion mas directa y solida contra el fianchetto de blancas.",
          "ventaja": "Espacio y control central inmediato, la respuesta mas popular y fiable contra Larsen.",
          "debilidad": "Ninguna relevante a este nivel; es la continuacion mas natural."
        },
        "kind": "book",
        "userColors": [
          "b"
        ],
        "children": [
          {
            "id": "b3__e5__Bb2",
            "san": "Bb2",
            "color": "w",
            "explain": {
              "idea": "Completa el fianchetto, presionando la diagonal larga directamente sobre el peon de e5.",
              "ventaja": "Pieza muy activa que presiona el centro de negras desde la distancia.",
              "debilidad": "Ninguna relevante; es la continuacion mas natural del plan."
            },
            "kind": "book",
            "userColors": [
              "b"
            ],
            "children": [
              {
                "id": "b3__e5__Bb2__Nc6",
                "san": "Nc6",
                "color": "b",
                "explain": {
                  "idea": "Defiende el peon de e5 y desarrolla una pieza al mismo tiempo.",
                  "ventaja": "Pieza activa que refuerza el centro sin perder tiempo.",
                  "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                },
                "kind": "book",
                "userColors": [
                  "b"
                ],
                "children": [
                  {
                    "id": "b3__e5__Bb2__Nc6__e3",
                    "san": "e3",
                    "color": "w",
                    "explain": {
                      "idea": "Abre la diagonal del alfil de rey y refuerza el control sobre d4, preparando un desarrollo solido.",
                      "ventaja": "Estructura flexible que prepara Bb5 o Be2 segun convenga.",
                      "debilidad": "Jugada algo pasiva que cede la iniciativa central a negras."
                    },
                    "kind": "book",
                    "userColors": [
                      "b"
                    ],
                    "children": [
                      {
                        "id": "b3__e5__Bb2__Nc6__e3__Nf6",
                        "san": "Nf6",
                        "color": "b",
                        "explain": {
                          "idea": "Desarrolla la pieza mas natural, presionando e4 y preparando el enroque corto.",
                          "ventaja": "Jugada solida que no compromete nada y acelera la seguridad del rey.",
                          "debilidad": "Ninguna relevante; es la respuesta mas natural en la posicion."
                        },
                        "kind": "book",
                        "userColors": [
                          "b"
                        ],
                        "children": [
                          {
                            "id": "b3__e5__Bb2__Nc6__e3__Nf6__Bb5",
                            "san": "Bb5",
                            "color": "w",
                            "explain": {
                              "idea": "Desarrolla el alfil de rey con jaque indirecto sobre la clavada del caballo de dama de negras.",
                              "ventaja": "Pieza activa que presiona la estructura de negras desde el principio.",
                              "debilidad": "El alfil puede perder tiempo si negras encuentra ...a6 mas adelante, obligando a definir su posicion."
                            },
                            "kind": "book",
                            "userColors": [
                              "b"
                            ],
                            "children": [
                              {
                                "id": "b3__e5__Bb2__Nc6__e3__Nf6__Bb5__Bd6",
                                "san": "Bd6",
                                "color": "b",
                                "explain": {
                                  "idea": "Desarrolla el alfil de rey a una casilla activa, apoyando el centro y preparando el enroque corto.",
                                  "ventaja": "Pieza bien colocada que refuerza el control sobre e5 y prepara la seguridad del rey.",
                                  "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                                },
                                "kind": "book",
                                "userColors": [
                                  "b"
                                ],
                                "children": [
                                  {
                                    "id": "b3__e5__Bb2__Nc6__e3__Nf6__Bb5__Bd6__Ne2",
                                    "san": "Ne2",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Desarrolla el caballo a una casilla flexible, dejando la diagonal del alfil de dama despejada.",
                                      "ventaja": "No bloquea el alfil en b2 y mantiene varias opciones de plan abiertas.",
                                      "debilidad": "Casilla algo pasiva para el caballo comparado con f3, aunque coherente con el plan de Larsen."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "b"
                                    ],
                                    "children": [
                                      {
                                        "id": "b3__e5__Bb2__Nc6__e3__Nf6__Bb5__Bd6__Ne2__O-O",
                                        "san": "O-O",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Pone el rey a salvo antes de decidir el plan de medio juego.",
                                          "ventaja": "Seguridad del rey resuelta; a partir de aqui negras puede pensar en ...Re8 y ...a6.",
                                          "debilidad": "Ninguna; es la jugada mas natural para completar la seguridad basica."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "b"
                                        ],
                                        "children": [
                                          {
                                            "id": "b3__e5__Bb2__Nc6__e3__Nf6__Bb5__Bd6__Ne2__O-O__O-O",
                                            "san": "O-O",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Pone el rey a salvo y conecta las torres antes de decidir el plan de medio juego.",
                                              "ventaja": "Seguridad del rey resuelta; el desarrollo basico del sistema Larsen ya esta completo.",
                                              "debilidad": "Ninguna; es la jugada mas natural para completar el desarrollo basico."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "b"
                                            ],
                                            "children": [
                                              {
                                                "id": "b3__e5__Bb2__Nc6__e3__Nf6__Bb5__Bd6__Ne2__O-O__O-O__Re8",
                                                "san": "Re8",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Refuerza el centro colocando la torre detras del peon de e5, preparando futuros avances centrales.",
                                                  "ventaja": "Pieza bien colocada que apoya la estructura central a largo plazo.",
                                                  "debilidad": "Ninguna relevante; es la continuacion mas natural del plan."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "b"
                                                ],
                                                "children": [
                                                  {
                                                    "id": "b3__e5__Bb2__Nc6__e3__Nf6__Bb5__Bd6__Ne2__O-O__O-O__Re8__d4",
                                                    "san": "d4",
                                                    "color": "w",
                                                    "explain": {
                                                      "idea": "Cuestiona el centro de negras, buscando abrir la posicion mientras el alfil de b2 ya esta activo.",
                                                      "ventaja": "Genera tension central inmediata, aprovechando la presion ya existente del alfil en la diagonal larga.",
                                                      "debilidad": "Cede el control exclusivo de d4 si negras cambia, aunque abre lineas favorables para el alfil de blancas."
                                                    },
                                                    "kind": "book",
                                                    "userColors": [
                                                      "b"
                                                    ],
                                                    "children": [
                                                      {
                                                        "id": "b3__e5__Bb2__Nc6__e3__Nf6__Bb5__Bd6__Ne2__O-O__O-O__Re8__d4__exd4",
                                                        "san": "exd4",
                                                        "color": "b",
                                                        "explain": {
                                                          "idea": "Cambia el centro antes de que blancas pueda sostener la tension a su favor.",
                                                          "ventaja": "Simplifica la posicion central sin conceder ninguna debilidad estructural.",
                                                          "debilidad": "Ninguna; es la continuacion mas natural tras la tension central."
                                                        },
                                                        "kind": "book",
                                                        "userColors": [
                                                          "b"
                                                        ],
                                                        "children": [
                                                          {
                                                            "id": "b3__e5__Bb2__Nc6__e3__Nf6__Bb5__Bd6__Ne2__O-O__O-O__Re8__d4__exd4__Nxd4",
                                                            "san": "Nxd4",
                                                            "color": "w",
                                                            "explain": {
                                                              "idea": "Recaptura con el caballo, la pieza mas activa para hacerlo dentro del plan de Larsen.",
                                                              "ventaja": "Pieza centralizada que presiona directamente sobre el caballo de negras en c6.",
                                                              "debilidad": "Ninguna relevante; es la continuacion mas natural y fuerte."
                                                            },
                                                            "kind": "book",
                                                            "userColors": [
                                                              "b"
                                                            ],
                                                            "leafOf": {
                                                              "lineId": "h03-larsen",
                                                              "name": "Larsen (1.b3) -- respuesta central con ...e5",
                                                              "userColor": "b",
                                                              "overview": "Familia de aperturas de flanco menores: Larsen fianchetta el alfil de dama sin ocupar el centro con peones, dejando que sea el alfil quien presione la gran diagonal. Negras responde ocupando el centro de inmediato con ...e5, la reaccion mas directa y solida, y completa un desarrollo natural enfrentando el plan de blancas con piezas activas."
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "f4",
    "san": "f4",
    "color": "w",
    "explain": {
      "idea": "Apertura Bird: gana espacio en el flanco de rey desde la primera jugada, buscando una estructura tipo Holandesa con colores invertidos.",
      "ventaja": "Control sobre e5 y posibilidad de un ataque rapido en el flanco de rey si negras se descuida.",
      "debilidad": "Debilita ligeramente la diagonal a7-g1 y la casilla e3, un factor que negras puede explotar con un desarrollo preciso."
    },
    "kind": "book",
    "userColors": [
      "b"
    ],
    "variantName": "Bird (1.f4) -- respuesta con ...d5 y fianchetto de rey",
    "variantColorId": 5,
    "children": [
      {
        "id": "f4__d5",
        "san": "d5",
        "color": "b",
        "explain": {
          "idea": "Ocupa el centro de inmediato, la reaccion mas solida y popular contra el Bird.",
          "ventaja": "Espacio y control central inmediato, dejando a blancas con la iniciativa limitada al flanco de rey.",
          "debilidad": "Ninguna relevante a este nivel; es la continuacion mas natural."
        },
        "kind": "book",
        "userColors": [
          "b"
        ],
        "children": [
          {
            "id": "f4__d5__Nf3",
            "san": "Nf3",
            "color": "w",
            "explain": {
              "idea": "Desarrolla una pieza y refuerza el control sobre e5, preparando el resto del desarrollo.",
              "ventaja": "Pieza activa que apoya el plan de flanco de rey ya iniciado con f4.",
              "debilidad": "Ninguna relevante; es la continuacion mas natural del sistema."
            },
            "kind": "book",
            "userColors": [
              "b"
            ],
            "children": [
              {
                "id": "f4__d5__Nf3__Nf6",
                "san": "Nf6",
                "color": "b",
                "explain": {
                  "idea": "Desarrolla la pieza mas natural, presionando e4 y preparando el enroque corto.",
                  "ventaja": "Jugada solida que no compromete nada y acelera la seguridad del rey.",
                  "debilidad": "Ninguna relevante; es la respuesta mas natural en la posicion."
                },
                "kind": "book",
                "userColors": [
                  "b"
                ],
                "children": [
                  {
                    "id": "f4__d5__Nf3__Nf6__e3",
                    "san": "e3",
                    "color": "w",
                    "explain": {
                      "idea": "Refuerza el centro y abre la diagonal del alfil de rey antes de decidir su desarrollo.",
                      "ventaja": "Estructura solida que prepara Be2 y el enroque corto.",
                      "debilidad": "Jugada algo pasiva que no aprovecha al maximo el espacio ganado con f4."
                    },
                    "kind": "book",
                    "userColors": [
                      "b"
                    ],
                    "children": [
                      {
                        "id": "f4__d5__Nf3__Nf6__e3__g6",
                        "san": "g6",
                        "color": "b",
                        "explain": {
                          "idea": "Prepara el fianchetto del alfil de rey, neutralizando la presion de blancas en el flanco de rey con una estructura solida propia.",
                          "ventaja": "Alfil muy activo sobre la diagonal larga, apuntando hacia el centro y el flanco de dama de blancas.",
                          "debilidad": "Ninguna relevante; es la continuacion mas natural del plan."
                        },
                        "kind": "book",
                        "userColors": [
                          "b"
                        ],
                        "children": [
                          {
                            "id": "f4__d5__Nf3__Nf6__e3__g6__Be2",
                            "san": "Be2",
                            "color": "w",
                            "explain": {
                              "idea": "Desarrolla el alfil de rey a una casilla solida, preparando el enroque corto de inmediato.",
                              "ventaja": "Desarrollo completo y sin debilidades, listo para enrocar en la siguiente jugada.",
                              "debilidad": "Ninguna relevante; es la continuacion mas natural del sistema."
                            },
                            "kind": "book",
                            "userColors": [
                              "b"
                            ],
                            "children": [
                              {
                                "id": "f4__d5__Nf3__Nf6__e3__g6__Be2__Bg7",
                                "san": "Bg7",
                                "color": "b",
                                "explain": {
                                  "idea": "Completa el fianchetto, la pieza clave para el resto del desarrollo de negras.",
                                  "ventaja": "Alfil activo sobre la diagonal larga, listo para completar la seguridad del rey.",
                                  "debilidad": "Ninguna relevante; es la continuacion mas natural del plan."
                                },
                                "kind": "book",
                                "userColors": [
                                  "b"
                                ],
                                "children": [
                                  {
                                    "id": "f4__d5__Nf3__Nf6__e3__g6__Be2__Bg7__O-O",
                                    "san": "O-O",
                                    "color": "w",
                                    "explain": {
                                      "idea": "Pone el rey a salvo antes de decidir el plan de medio juego.",
                                      "ventaja": "Seguridad del rey resuelta; a partir de aqui blancas puede pensar en d3 y Ne5.",
                                      "debilidad": "Ninguna; es la jugada mas natural para completar la seguridad basica."
                                    },
                                    "kind": "book",
                                    "userColors": [
                                      "b"
                                    ],
                                    "children": [
                                      {
                                        "id": "f4__d5__Nf3__Nf6__e3__g6__Be2__Bg7__O-O__O-O",
                                        "san": "O-O",
                                        "color": "b",
                                        "explain": {
                                          "idea": "Pone el rey a salvo y conecta las torres antes de decidir el plan de medio juego.",
                                          "ventaja": "Seguridad del rey resuelta; el desarrollo basico de negras ya esta completo.",
                                          "debilidad": "Ninguna; es la jugada mas natural para completar el desarrollo basico."
                                        },
                                        "kind": "book",
                                        "userColors": [
                                          "b"
                                        ],
                                        "children": [
                                          {
                                            "id": "f4__d5__Nf3__Nf6__e3__g6__Be2__Bg7__O-O__O-O__d3",
                                            "san": "d3",
                                            "color": "w",
                                            "explain": {
                                              "idea": "Abre la diagonal del alfil de dama y refuerza el centro antes de decidir el plan de flanco de dama.",
                                              "ventaja": "Estructura solida y flexible que mantiene varias opciones de plan abiertas.",
                                              "debilidad": "Ninguna relevante; es la continuacion mas natural del sistema."
                                            },
                                            "kind": "book",
                                            "userColors": [
                                              "b"
                                            ],
                                            "children": [
                                              {
                                                "id": "f4__d5__Nf3__Nf6__e3__g6__Be2__Bg7__O-O__O-O__d3__c5",
                                                "san": "c5",
                                                "color": "b",
                                                "explain": {
                                                  "idea": "Gana espacio en el flanco de dama y presiona el centro de blancas antes de que complete su plan.",
                                                  "ventaja": "Actividad en el flanco de dama sin descuidar la seguridad del rey.",
                                                  "debilidad": "Ninguna inmediata; es la continuacion mas activa y natural."
                                                },
                                                "kind": "book",
                                                "userColors": [
                                                  "b"
                                                ],
                                                "children": [
                                                  {
                                                    "id": "f4__d5__Nf3__Nf6__e3__g6__Be2__Bg7__O-O__O-O__d3__c5__Ne5",
                                                    "san": "Ne5",
                                                    "color": "w",
                                                    "explain": {
                                                      "idea": "Centraliza el caballo en una casilla muy activa, apoyado por el peon de f4.",
                                                      "ventaja": "Pieza muy activa en el centro del tablero, dificil de desalojar sin conceder concesiones.",
                                                      "debilidad": "El caballo puede ser cambiado por el de negras en c6, perdiendo parte de su fuerza si eso ocurre."
                                                    },
                                                    "kind": "book",
                                                    "userColors": [
                                                      "b"
                                                    ],
                                                    "children": [
                                                      {
                                                        "id": "f4__d5__Nf3__Nf6__e3__g6__Be2__Bg7__O-O__O-O__d3__c5__Ne5__Nc6",
                                                        "san": "Nc6",
                                                        "color": "b",
                                                        "explain": {
                                                          "idea": "Desarrolla el ultimo caballo, ofreciendo el cambio del caballo centralizado de blancas.",
                                                          "ventaja": "Pieza activa que disputa directamente la casilla central mas fuerte de blancas.",
                                                          "debilidad": "Ninguna relevante; es la continuacion mas natural en la posicion."
                                                        },
                                                        "kind": "book",
                                                        "userColors": [
                                                          "b"
                                                        ],
                                                        "children": [
                                                          {
                                                            "id": "f4__d5__Nf3__Nf6__e3__g6__Be2__Bg7__O-O__O-O__d3__c5__Ne5__Nc6__Nxc6",
                                                            "san": "Nxc6",
                                                            "color": "w",
                                                            "explain": {
                                                              "idea": "Cambia el caballo antes de que negras gane mas tiempo o presion sobre el, simplificando la posicion.",
                                                              "ventaja": "Elimina cualquier presion futura de negras sobre la pieza centralizada.",
                                                              "debilidad": "Cede la pieza mas activa de blancas a cambio de la simplificacion, una concesion menor y muy jugada en la practica."
                                                            },
                                                            "kind": "book",
                                                            "userColors": [
                                                              "b"
                                                            ],
                                                            "children": [
                                                              {
                                                                "id": "f4__d5__Nf3__Nf6__e3__g6__Be2__Bg7__O-O__O-O__d3__c5__Ne5__Nc6__Nxc6__bxc6",
                                                                "san": "bxc6",
                                                                "color": "b",
                                                                "explain": {
                                                                  "idea": "Recaptura con el peon, abriendo la columna b para la torre y reforzando el centro con la pareja de peones c.",
                                                                  "ventaja": "Columna b semiabierta para la torre y un centro de peones reforzado.",
                                                                  "debilidad": "Estructura de peones duplicados en la columna c, una concesion menor tipica de esta linea."
                                                                },
                                                                "kind": "book",
                                                                "userColors": [
                                                                  "b"
                                                                ],
                                                                "leafOf": {
                                                                  "lineId": "h03-bird",
                                                                  "name": "Bird (1.f4) -- respuesta con ...d5 y fianchetto de rey",
                                                                  "userColor": "b",
                                                                  "overview": "Familia de aperturas de flanco menores: Bird ocupa espacio en el flanco de rey con el peon f4, buscando transponer a estructuras de Holandesa con los colores invertidos. Negras responde ocupando el centro con ...d5, la reaccion mas solida y popular, y completa un desarrollo flexible con fianchetto de rey propio para neutralizar la presion de blancas en la diagonal larga."
                                                                }
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

// Familias entrenables (raiz + color de usuario) -- derivadas del
// arbol de arriba, con titulo curado a mano en el propio script.
// Consumidas por el selector nativo (OpeningFamilyCatalog.kt via
// el mismo espacio de ids, o directamente si algun dia se lee desde
// JS). Ver EstructurasCatalog.kt-style cross-check si aplica.
var REPERTOIRE_FAMILIES = [
  {
    "id": "family__d4__b",
    "rootSan": "d4",
    "userColor": "b",
    "title": "Defensas contra el Sistema Londres, Trompowsky y Catalana",
    "leafCount": 4,
    "variants": [
      {
        "nodeId": "d4__d5__Bf4__Nf6__e3__e6__Nf3__Bd6__Bg3__O-O__Bd3__c5__c3__Nc6__Nbd2__Qc7__O-O__b6",
        "title": "Sistema Londres -- respuesta clasica con Bd6",
        "isTrap": false,
        "trapTipo": null
      },
      {
        "nodeId": "d4__Nf6__Bf4__g6__e3__Bg7__Nf3__O-O__h3__d6__Be2__Nbd7__O-O__c5__c3__b6",
        "title": "Sistema Londres -- respuesta moderna con fianchetto g6",
        "isTrap": false,
        "trapTipo": null
      },
      {
        "nodeId": "d4__Nf6__c4__e6__g3__d5__Bg2__Be7__Nf3__O-O__O-O__dxc4__Qc2__a6__Qxc4__b5",
        "title": "Inglesa -- Catalan (transposicion via 1.d4 Nf6 2.c4 e6 3.g3 d5)",
        "isTrap": false,
        "trapTipo": null
      },
      {
        "nodeId": "d4__Nf6__Bg5__e6__e4__h6__Bxf6__Qxf6__Nc3__d6__Nf3__Nd7__Qd2__g6__O-O-O__Bg7",
        "title": "Trompowsky -- respuesta solida con ...e6",
        "isTrap": false,
        "trapTipo": null
      }
    ]
  },
  {
    "id": "family__d4__w",
    "rootSan": "d4",
    "userColor": "w",
    "title": "Gambito de Dama",
    "leafCount": 13,
    "variants": [
      {
        "nodeId": "d4__d5__c4__e6__Nc3__Nf6__Bg5__Be7__e3__O-O",
        "title": "Gambito de Dama Rehusado -- linea principal",
        "isTrap": false,
        "trapTipo": null
      },
      {
        "nodeId": "d4__d5__c4__e6__Nc3__Nf6__Bg5__Nbd7__e3__Be7__Nf3__O-O",
        "title": "Defensa Ortodoxa -- linea clasica",
        "isTrap": false,
        "trapTipo": null
      },
      {
        "nodeId": "trap__h05-trampa-elefante__17",
        "title": "Trampa del Elefante (Elephant Trap)",
        "isTrap": true,
        "trapTipo": "defensiva"
      },
      {
        "nodeId": "trap__h05-trampa-cambridge-springs__21",
        "title": "Trampa de la Cambridge Springs",
        "isTrap": true,
        "trapTipo": "defensiva"
      },
      {
        "nodeId": "d4__d5__c4__e6__Nc3__Nf6__cxd5__exd5__Bg5__Be7__e3__O-O",
        "title": "Gambito de Dama Rehusado -- Variante de Cambio",
        "isTrap": false,
        "trapTipo": null
      },
      {
        "nodeId": "d4__d5__c4__e6__Nc3__Nf6__Nf3__c5__cxd5__Nxd5__e4__Nxc3",
        "title": "Semi-Tarrasch",
        "isTrap": false,
        "trapTipo": null
      },
      {
        "nodeId": "d4__d5__c4__e6__Nc3__c5__cxd5__exd5__Nf3__Nc6__g3__Nf6",
        "title": "Defensa Tarrasch",
        "isTrap": false,
        "trapTipo": null
      },
      {
        "nodeId": "d4__d5__c4__dxc4__Nf3__Nf6__e3__e6__Bxc4__c5__O-O__a6",
        "title": "Gambito de Dama Aceptado -- Sistema Alekhine",
        "isTrap": false,
        "trapTipo": null
      },
      {
        "nodeId": "trap__h05-trampa-qga-e3-torre__13",
        "title": "Trampa del Gambito de Dama Aceptado (3.e3, amenaza sobre la torre a8)",
        "isTrap": true,
        "trapTipo": "ofensiva"
      },
      {
        "nodeId": "d4__d5__c4__c6__Nf3__Nf6__Nc3__dxc4__a4__Bf5__e3__e6",
        "title": "Defensa Eslava -- linea principal",
        "isTrap": false,
        "trapTipo": null
      },
      {
        "nodeId": "d4__d5__c4__c6__Nf3__Nf6__Nc3__e6__e3__Nbd7__Bd3__dxc4",
        "title": "Semi-Eslava -- Variante Meran",
        "isTrap": false,
        "trapTipo": null
      },
      {
        "nodeId": "trap__h05-trampa-eslava-bf4-e4__14",
        "title": "Trampa del alfil en la Eslava (Bf4 + e4)",
        "isTrap": true,
        "trapTipo": "ofensiva"
      },
      {
        "nodeId": "d4__d5__c4__e5__dxe5__d4__Nf3__Nc6__g3__Be6__Bg2__Qd7",
        "title": "Contragambito Albin -- respuesta principal",
        "isTrap": false,
        "trapTipo": null
      },
      {
        "nodeId": "trap__h05-trampa-lasker-albin__13",
        "title": "Trampa Lasker en el Contragambito Albin",
        "isTrap": true,
        "trapTipo": "defensiva"
      },
      {
        "nodeId": "d4__d5__c4__Nc6__Nf3__Bg4__cxd5__Bxf3__gxf3__Qxd5__e3__e5",
        "title": "Defensa Chigorin -- respuesta principal",
        "isTrap": false,
        "trapTipo": null
      },
      {
        "nodeId": "d4__d5__c4__Bf5__Nc3__e6__Nf3__Nf6__Qb3__Qc8__Bg5__c6",
        "title": "Defensa Baltica",
        "isTrap": false,
        "trapTipo": null
      },
      {
        "nodeId": "d4__d5__c4__c5__cxd5__Qxd5__Nc3__Qd6__Nf3__Nf6__e4__cxd4",
        "title": "Defensa Simetrica (2...c5)",
        "isTrap": false,
        "trapTipo": null
      },
      {
        "nodeId": "d4__d5__c4__Nf6__cxd5__Nxd5__Nf3__g6__e4__Nb6__Nc3__Bg7",
        "title": "Defensa Marshall (2...Nf6)",
        "isTrap": false,
        "trapTipo": null
      },
      {
        "nodeId": "trap__h05-trampa-rubinstein__26",
        "title": "Trampa Rubinstein",
        "isTrap": true,
        "trapTipo": "ofensiva"
      }
    ]
  },
  {
    "id": "family__e4__b",
    "rootSan": "e4",
    "userColor": "b",
    "title": "Defensa Escandinava",
    "leafCount": 4,
    "variants": [
      {
        "nodeId": "e4__d5__exd5__Qxd5__Nc3__Qa5__d4__Nf6__Nf3__c6__Bc4__Bf5",
        "title": "Escandinava -- linea principal (2...Qxd5)",
        "isTrap": false,
        "trapTipo": null
      },
      {
        "nodeId": "trap__h05-trampa-leonhardt__12",
        "title": "Gambito Leonhardt (4.b4!?)",
        "isTrap": true,
        "trapTipo": "defensiva"
      },
      {
        "nodeId": "e4__d5__exd5__Qxd5__Nc3__Qd6__d4__Nf6__Nf3__a6__g3__b5",
        "title": "Escandinava -- retirada moderna (3...Qd6)",
        "isTrap": false,
        "trapTipo": null
      },
      {
        "nodeId": "e4__d5__exd5__Qxd5__Nc3__Qd8__d4__Nf6__Nf3__Bg4__h3__Bh5",
        "title": "Escandinava -- retirada ultra-solida (3...Qd8)",
        "isTrap": false,
        "trapTipo": null
      },
      {
        "nodeId": "e4__d5__exd5__Nf6__d4__Nxd5__Nf3__g6__c4__Nb6__Nc3__Bg7",
        "title": "Escandinava Moderna (2...Nf6)",
        "isTrap": false,
        "trapTipo": null
      }
    ]
  },
  {
    "id": "family__c4__b",
    "rootSan": "c4",
    "userColor": "b",
    "title": "Defensa contra la Apertura Inglesa",
    "leafCount": 2,
    "variants": [
      {
        "nodeId": "c4__e5__Nc3__Nf6__Nf3__Nc6__g3__d5__cxd5__Nxd5__Bg2__Nb6__O-O__Be7__d3__O-O",
        "title": "Inglesa -- respuesta simetrica tipo Siciliana Inversa",
        "isTrap": false,
        "trapTipo": null
      },
      {
        "nodeId": "c4__c5__Nf3__Nf6__g3__g6__Bg2__Bg7__Nc3__Nc6__O-O__O-O__d4__cxd4__Nxd4__Nxd4__Qxd4__d6",
        "title": "Inglesa -- respuesta simetrica pura con doble fianchetto (1.c4 c5)",
        "isTrap": false,
        "trapTipo": null
      }
    ]
  },
  {
    "id": "family__Nf3__b",
    "rootSan": "Nf3",
    "userColor": "b",
    "title": "Defensa contra la Apertura Reti",
    "leafCount": 1,
    "variants": [
      {
        "nodeId": "Nf3__d5__g3__Nf6__Bg2__e6__O-O__Be7__d3__O-O__Nbd2__c5__e4__Nc6__Re1__b5",
        "title": "Reti -- estructura de fianchetto simetrico",
        "isTrap": false,
        "trapTipo": null
      }
    ]
  },
  {
    "id": "family__b3__b",
    "rootSan": "b3",
    "userColor": "b",
    "title": "Defensa contra el Sistema Larsen",
    "leafCount": 1,
    "variants": [
      {
        "nodeId": "b3__e5__Bb2__Nc6__e3__Nf6__Bb5__Bd6__Ne2__O-O__O-O__Re8__d4__exd4__Nxd4",
        "title": "Larsen (1.b3) -- respuesta central con ...e5",
        "isTrap": false,
        "trapTipo": null
      }
    ]
  },
  {
    "id": "family__f4__b",
    "rootSan": "f4",
    "userColor": "b",
    "title": "Defensa contra la Apertura Bird",
    "leafCount": 1,
    "variants": [
      {
        "nodeId": "f4__d5__Nf3__Nf6__e3__g6__Be2__Bg7__O-O__O-O__d3__c5__Ne5__Nc6__Nxc6__bxc6",
        "title": "Bird (1.f4) -- respuesta con ...d5 y fianchetto de rey",
        "isTrap": false,
        "trapTipo": null
      }
    ]
  }
];
