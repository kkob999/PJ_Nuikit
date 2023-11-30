// const position = { x: 250, y: 0 };
const y1t1 = 0; //150
const y1t2 = y1t1 + 150; //400
const y2t1 = y1t2 + 150; //550
const y2t2 = y2t1 + 150; //700
const y3t1 = y2t2 + 150; //850
const y3t2 = y3t1 + 150; //1000
const y4t1 = y3t2 + 150; //1150
const y4t2 = y4t1 + 150;

export const serverNodes = [
  //Major E + GE
  {
    id: "ge1",
    type: "gen_node",
    data: {
      sub_no: "GE",
      sub_name: "choose 1",
      category: "act",
    },
    draggable: false,
    position: { x: y1t2, y: 500 },
  },
  {
    id: "ge2",
    type: "gen_node",
    data: {
      sub_no: "GE",
      sub_name: "choose 1",
      category: "act",
    },
    draggable: false,
    position: { x: y2t1, y: 500 },
  },
  {
    id: "mjE1",
    type: "spec_node",
    data: {
      sub_no: "Major E.",
      sub_name: "choose 1",
      category: "mjE",
    },
    draggable: false,
    position: { x: y3t1, y: 500 },
  },
  {
    id: "mjE2",
    type: "spec_node",
    data: {
      sub_no: "Major E.",
      sub_name: "choose 1",
      category: "mjE",
    },
    draggable: false,
    position: { x: y3t2, y: 500 },
  },
  {
    id: "mjE3",
    type: "spec_node",
    data: {
      sub_no: "Major E.",
      sub_name: "choose 1",
      category: "mjE",
    },
    draggable: false,
    position: { x: y4t1, y: 500 },
  },
  {
    id: "mjE4",
    type: "spec_node",
    data: {
      sub_no: "Major E.",
      sub_name: "choose 1",
      category: "mjE",
    },
    draggable: false,
    position: { x: y4t2, y: 500 },
  },

  //Free
  {
    id: "free1",
    type: "free_node",
    data: {
      sub_no: "Free",
      sub_name: "Choose",
      category: "free",
    },
    draggable: false,
    position: { x: y4t1, y: 500 },
  },
  {
    id: "free2",
    type: "free_node",
    data: {
      sub_no: "Free",
      sub_name: "Choose",
      category: "free",
    },
    draggable: false,
    position: { x: y4t2, y: 500 },
  },

  //Single
  {
    id: "os",
    type: "spec_node",
    data: {
      sub_no: "261305",
      sub_name: "OS",
      category: "os",
    },
    draggable: false,
    position: { x: y3t2, y: 700 },
  },
  {
    id: "ciz",
    type: "gen_node",
    data: {
      sub_no: "140104",
      sub_name: "Citizenship",
      category: "citizen",
    },
    draggable: false,
    position: { x: y1t1, y: 700 },
  },
  {
    id: "drawing",
    type: "gen_node",
    data: {
      sub_no: "259104",
      sub_name: "Drawing",
      category: "draw",
    },
    draggable: false,
    position: { x: y1t1, y: 700 },
  },
  {
    id: "workshop",
    type: "gen_node",
    data: {
      sub_no: "259106",
      sub_name: "Workshop",
      category: "workshop",
    },
    draggable: false,
    position: { x: y1t1, y: 700 },
  },
  {
    id: "circuit",
    type: "gen_node",
    data: {
      sub_no: "252281",
      sub_name: "Circuits",
      category: "circuit",
    },
    draggable: false,
    position: { x: y1t2, y: 700 },
  },

  //Activities
  {
    id: "act1",
    type: "gen_node",
    data: {
      sub_no: "259191",
      sub_name: "Activities 1",
      category: "act",
    },
    draggable: false,
    position: { x: y1t1, y: 500 },
  },
  {
    id: "act2",
    type: "gen_node",
    data: {
      sub_no: "259192",
      sub_name: "Activities",
      category: "act",
    },
    draggable: false,
    position: { x: y4t2, y: 500 },
  },

  //CPE
  {
    id: "cpe1",
    type: "spec_node",
    data: {
      sub_no: "261103",
      sub_name: "Basic CPE",
      category: "cpe",
    },
    draggable: false,
    position: { x: y1t1, y: 1000 },
  },
  {
    id: "cpe2",
    type: "spec_node",
    data: {
      sub_no: "261207",
      sub_name: "CPE Lab",
      category: "cpe",
    },
    draggable: false,
    position: { x: y2t1, y: 1000 },
  },

  //Project
  {
    id: "pj1",
    type: "spec_node",
    data: {
      sub_no: "261491",
      sub_name: "ProjectSur",
      category: "pj",
    },
    draggable: false,
    position: { x: y4t1, y: 500 },
  },
  {
    id: "pj2",
    type: "spec_node",
    data: {
      sub_no: "261492",
      sub_name: "Project",
      category: "pj",
    },
    draggable: false,
    position: { x: y4t2, y: 500 },
  },

  //Math
  {
    id: "math1",
    type: "gen_node",
    data: {
      sub_no: "206162",
      sub_name: "Calculus1",
      category: "math",
    },
    draggable: false,
    position: { x: y1t1, y: 700 },
  },
  {
    id: "math2",
    type: "gen_node",
    data: {
      sub_no: "206162",
      sub_name: "Calculus2",
      category: "math",
    },
    draggable: false,
    position: { x: y1t2, y: 700 },
  },
  {
    id: "math3",
    type: "gen_node",
    data: {
      sub_no: "206261",
      sub_name: "Calculus3",
      category: "math",
    },
    draggable: false,
    position: { x: y2t1, y: 700 },
  },
  {
    id: "math5",
    type: "spec_node",
    data: {
      sub_no: "261306",
      sub_name: "Prob & Stat",
      category: "math",
    },
    draggable: false,
    position: { x: y3t2, y: 700 },
  },
  {
    id: "math4",
    type: "spec_node",
    data: {
      sub_no: "261208",
      sub_name: "Numerical",
      category: "math",
    },
    draggable: false,
    position: { x: y2t2, y: 700 },
  },

  //English
  {
    id: "eng1",
    type: "gen_node",
    data: {
      sub_no: "001011",
      sub_name: "English 1",
      category: "eng",
    },
    draggable: false,
    position: { x: y1t1, y: 500 },
  },
  {
    id: "eng2",
    type: "gen_node",
    data: {
      sub_no: "001102",
      sub_name: "English 2",
      category: "eng",
    },
    draggable: false,
    position: { x: y1t2, y: 500 },
  },
  {
    id: "eng3",
    type: "gen_node",
    data: {
      sub_no: "001201",
      sub_name: "English r/w",
      category: "eng",
    },
    draggable: false,
    position: { x: y2t1, y: 500 },
    // height: 80,
  },
  {
    id: "eng4",
    type: "gen_node",
    data: {
      sub_no: "001225",
      sub_name: "English in Sci",
      category: "eng",
    },
    draggable: false,
    position: { x: y2t2, y: 500 },
  },
  // {
  //   id: "testEng",
  //   type: "gen_node",
  //   data: {
  //     sub_no: "engTest",
  //     sub_name: "EngTest",
  //     category: "eng",
  //   },
  //   draggable: false,
  //   position: { x: y1t2, y: 500 },
  // },

  //Com
  {
    id: "com1",
    type: "spec_node",
    data: {
      sub_no: "261102",
      sub_name: "Com prog",
      category: "com",
    },
    draggable: false,
    position: { x: y1t2, y: 700 },
  },
  {
    id: "com2",
    type: "spec_node",
    data: {
      sub_no: "261217",
      sub_name: "Data Struc",
      category: "com",
    },
    draggable: false,
    position: { x: y2t1, y: 700 },
  },
  {
    id: "com3",
    type: "spec_node",
    data: {
      sub_no: "261200",
      sub_name: "OOP",
      category: "com",
    },
    draggable: false,
    position: { x: y2t2, y: 700 },
  },
  {
    id: "com4",
    type: "spec_node",
    data: {
      sub_no: "261361",
      sub_name: "SE",
      category: "com",
    },
    draggable: false,
    position: { x: y3t2, y: 700 },
  },
  {
    id: "com5",
    type: "spec_node",
    data: {
      sub_no: "261405",
      sub_name: "Adv Com",
      category: "com",
    },
    draggable: false,
    position: { x: y4t2, y: 500 },
  },

  //Algro
  {
    id: "alg1",
    type: "spec_node",
    data: {
      sub_no: "261261",
      sub_name: "Discrete Math",
      category: "alg",
    },
    draggable: false,
    position: { x: y2t1, y: 700 },
  },
  {
    id: "alg2",
    type: "spec_node",
    data: {
      sub_no: "261218",
      sub_name: "Algrorithm",
      category: "alg",
    },
    draggable: false,
    position: { x: y2t2, y: 700 },
  },

  //Logic
  {
    id: "logic1",
    type: "haveLab_node",
    data: {
      sub_no: "207105",
      sub_name: "Physic 1",
      category: "gen_lab",
    },
    draggable: true,
    position: { x: y1t1, y: 700 },
  },
  {
    id: "logic2",
    type: "haveLab_node",
    data: {
      sub_no: "207106",
      sub_name: "Physic 2",
      category: "gen_lab",
    },
    draggable: false,
    position: { x: y1t2, y: 700 },
  },
  {
    id: "logic3",
    type: "haveLab_node",
    data: {
      sub_no: "261210",
      sub_name: "Logic",
      category: "logic",
    },
    draggable: false,
    position: { x: y2t1, y: 700 },
  },
  {
    id: "logic3_lab",
    type: "lab_node",
    data: {
      sub_no: "261212",
      sub_name: "Logic lab",
      category: "logic",
    },
    draggable: false,
    position: { x: y2t1, y: 700 },
  },
  {
    id: "logic4",
    type: "spec_node",
    data: {
      sub_no: "261214",
      sub_name: "Micro",
      category: "logic",
    },
    draggable: false,
    position: { x: y2t2, y: 700 },
  },
  {
    id: "logic5",
    type: "spec_node",
    data: {
      sub_no: "261304",
      sub_name: "ComArch",
      category: "logic",
    },
    draggable: false,
    position: { x: y3t1, y: 700 },
  },
  {
    id: "logic6",
    type: "spec_node",
    data: {
      sub_no: "261217",
      sub_name: "Data Com",
      category: "phy",
    },
    draggable: false,
    position: { x: y2t2, y: 700 },
  },
  {
    id: "phylab1",
    type: "lab_node",
    data: {
      sub_no: "207115",
      sub_name: "Phy lab 1",
      category: "gen_lab",
    },
    draggable: true,
    position: { x: y1t1, y: 700 },
  },
  {
    id: "phylab2",
    type: "lab_node",
    data: {
      sub_no: "207116",
      sub_name: "Phy lab 2",
      category: "gen_lab",
    },
    draggable: false,
    position: { x: y1t2, y: 700 },
  },

  //Network

  {
    id: "net1",
    type: "haveLab_node2",
    data: {
      sub_no: "261335",
      sub_name: "Network",
      category: "net",
      lab_no: "261336",
      lab_name: "Network Lab",
    },
    draggable: true,
    position: { x: y3t1, y: 500 },
    height: 300,
  },
  {
    id: "net2",
    type: "spec_node",
    data: {
      sub_no: "261336",
      sub_name: "Network Lab",
      category: "net",
    },
    draggable: true,
    position: { x: y3t1, y: 500 },
    hidden: true,
  },
  {
    id: "t1",
    type: "spec_node",
    data: {
      sub_no: "test",
      sub_name: "test",
      category: "test",
    },
    draggable: true,
    position: { x: y3t2, y: 500 },
    hidden: false,
  },

  //dataBase

  {
    id: "db1",
    type: "haveLab_node2",
    data: {
      sub_no: "261342",
      sub_name: "Database",
      lab_no: "261343",
      lab_name: "Database Lab",
      category: "db",
    },
    draggable: true,
    position: { x: y3t1, y: 500 },
  },
  {
    id: "db2",
    type: "spec_node",
    data: {
      sub_no: "261343",
      sub_name: "Database Lab",
      category: "net",
    },
    draggable: true,
    position: { x: y3t1, y: 500 },
    hidden: true,
  },
];

export const serverEdges = [
  { id: "math#1-2", source: "math1", target: "math2", type: "smoothstep" },
  { id: "math#7-8", source: "math2", target: "math3", type: "smoothstep" },
  { id: "math#8-11", source: "math3", target: "math4", type: "smoothstep" },
  { id: "math#11-10", source: "math4", target: "math5", type: "smoothstep" },

  // { id: "logictest#1-2", source: "logic_1", target: "logic1", type: "smoothstep"},
  // { id: "logictest#2-2", source: "logic_1", target: "logic2", type: "smoothstep"},

  {
    id: "logic#1-2",
    source: "logic1",
    target: "logic2",
    type: "smoothstep",
    sourceHandle: "c",
  },
  {
    id: "logic#2-3",
    source: "logic2",
    target: "logic3",
    type: "smoothstep",
    sourceHandle: "c",
  },
  {
    id: "logic#3-4",
    source: "logic3",
    target: "logic4",
    type: "smoothstep",
    sourceHandle: "c",
  },

  // { id: "logic#3-3lab", source: "logic3", target: "logic3_lab", type: "smoothstep" },

  { id: "logic#4-5", source: "logic4", target: "logic5", type: "smoothstep" },
  {
    id: "logic#3-6",
    source: "logic2",
    target: "logic6",
    type: "smoothstep",
    sourceHandle: "b",
  },
  {
    id: "phylab#1-2",
    source: "phylab1",
    target: "phylab2",
    type: "smoothstep",
  },
  { id: "com#1-2", source: "com1", target: "com2", type: "smoothstep" },
  { id: "com#1-3", source: "com1", target: "com3", type: "smoothstep" }, // com pro -> oop
  { id: "com#3-4", source: "com3", target: "com4", type: "smoothstep" },
  { id: "com#4-5", source: "com4", target: "com5", type: "smoothstep" },

  { id: "alg#1-2", source: "alg1", target: "alg2", type: "smoothstep" },
  { id: "com-alg#1-2", source: "com2", target: "alg2", type: "smoothstep" },

  // {
  //   id: "logic-lab#1-2",
  //   source: "logic1",
  //   target: "phylab1",
  //   type: "smoothstep",
  //   sourceHandle: "b",
  //   targetHandle: "b",
  // },
  // {
  //   id: "logic-lab#2-2",
  //   source: "logic2",
  //   target: "phylab2",
  //   type: "smoothstep",
  //   sourceHandle: "b",
  //   targetHandle: "b",
  // },
  {
    id: "logic-lab#2-3",
    source: "phylab2",
    target: "logic3_lab",
    type: "smoothstep",
  },
  // {
  //   id: "logic-lab#3-logic3_lab",
  //   source: "logic3",
  //   target: "logic3_lab",
  //   type: "smoothstep",
  //   sourceHandle: "b",
  //   targetHandle: "b",
  // },
  // { id: "logic3_lab#1-1", source: "logic3_lab", target: "testtest3", type: "smoothstep"},

  { id: "eng#1-2", source: "eng1", target: "eng2", type: "smoothstep" },
  { id: "eng#2-3", source: "eng2", target: "eng3", type: "smoothstep" },
  { id: "eng#3-4", source: "eng3", target: "eng4", type: "smoothstep" },
  { id: "eng#2-4", source: "eng2", target: "eng4", type: "smoothstep" },
  // { id: "eng#test", source: "testEng", target: "eng3", type: "smoothstep" },

  // Network

  {
    id: "db1",
    source: "db1",
    target: "t1",
    type: "smoothstep",
    // hidden: false
    // sourceHandle: "b",
    // targetHandle: "b",
  },

  //database

  // {
  //   id: "db#1-2",
  //   source: "db1",
  //   target: "db2",
  //   type: "smoothstep",
  //   sourceHandle: "b",
  //   targetHandle: "b",
  // },

  { id: "cpe#1-2", source: "cpe1", target: "cpe2", type: "smoothstep" },

  { id: "pj#1-2", source: "pj1", target: "pj2", type: "smoothstep" },

  { id: "act#1-2", source: "act1", target: "act2", type: "smoothstep" },

  { id: "ciz-ge#1-1", source: "ciz", target: "ge1", type: "smoothstep" },
  { id: "ge#1-2", source: "ge1", target: "ge2", type: "smoothstep" },
  { id: "ge-mjE#2-1", source: "ge2", target: "mjE1", type: "smoothstep" },
  { id: "mjE#1-2", source: "mjE1", target: "mjE2", type: "smoothstep" },
  { id: "mjE#2-3", source: "mjE2", target: "mjE3", type: "smoothstep" },
  { id: "mjE#3-4", source: "mjE3", target: "mjE4", type: "smoothstep" },

  { id: "free#1-2", source: "free1", target: "free2", type: "smoothstep" },

  {
    id: "draw-cir#1-1",
    source: "drawing",
    target: "circuit",
    type: "smoothstep",
  },
  { id: "cir-os#1-1", source: "circuit", target: "os", type: "smoothstep" },
];
