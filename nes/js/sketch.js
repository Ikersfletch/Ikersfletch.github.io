
var playerSprites;
var tile;
var p1;
var p2;
var area = 0;
var b;
var ppos;
var gameScreen;
var twoplayer = false;
var press = true;
var dattimer = 0;
var hitboxes = [];
var state;
var spriteInEdit;
var paletteInEdit = [];
var itemInEdit;
var boxInEdit;
var test;
var plus;
var frames = [];
var targetDummy;
var dum1;
var areas;



function setup() {
  plus = [
        [0,0,0,0,0,0,0,0],
        [0,0,0,3,3,0,0,0],
        [0,0,0,3,3,0,0,0],
        [0,3,3,3,3,3,3,0],
        [0,3,3,3,3,3,3,0],
        [0,0,0,3,3,0,0,0],
        [0,0,0,3,3,0,0,0],
        [0,0,0,0,0,0,0,0],
];
  test = createGraphics(40,40);
  boxInEdit = [0,0,1,1,35,0,0,0,false,0];
  state = 0;
  paletteInEdit = [[0,0,0,0],[0],[255],[255,0,0]];
  createCanvas(800,600);
  playerSprites = {
    'walking' : [
      [
        [0,0,1,1,1,1,0,0],
        [0,0,1,2,2,2,0,0],
        [0,0,2,1,2,1,0,0],
        [0,0,2,2,2,2,0,0],
        [0,0,3,3,3,3,0,0],
        [0,2,3,3,3,3,2,0],
        [0,0,3,3,3,3,0,0],
        [0,1,1,0,0,1,1,0]
      ],[
        [0,0,1,1,1,1,0,0],
        [0,0,1,2,2,2,0,0],
        [0,0,2,1,2,1,0,0],
        [0,0,2,2,2,2,0,0],
        [0,2,3,3,3,3,0,0],
        [0,0,3,3,3,3,0,0],
        [0,1,3,3,3,1,1,0],
        [0,0,0,0,0,0,0,0]
      ],[
        [0,0,1,1,1,1,0,0],
        [0,0,1,2,2,2,0,0],
        [0,0,2,1,2,1,0,0],
        [0,0,2,2,2,2,0,0],
        [0,0,3,3,3,3,0,0],
        [0,2,3,3,3,3,2,0],
        [0,0,3,3,3,3,0,0],
        [0,1,1,0,0,1,1,0]
      ],[
        [0,0,1,1,1,1,0,0],
        [0,0,1,2,2,2,0,0],
        [0,0,2,1,2,1,0,0],
        [0,0,2,2,2,2,0,0],
        [0,0,3,3,3,3,2,0],
        [0,0,3,3,3,3,0,0],
        [0,1,1,3,3,3,0,0],
        [0,0,0,0,0,0,0,0]
      ]
    ],
    'swinging' : [
      [
        [0,0,1,1,1,1,0,0],
        [0,0,1,2,2,2,0,0],
        [0,0,2,1,2,1,0,0],
        [0,0,2,2,2,2,0,0],
        [0,0,3,3,3,3,0,0],
        [0,2,3,3,3,3,2,0],
        [0,0,3,3,3,3,0,0],
        [0,1,1,0,0,1,1,0]
      ],[
        [0,1,1,1,1,0,0,0],
        [0,1,2,2,2,0,0,0],
        [0,2,1,2,1,0,0,0],
        [0,2,2,2,2,0,0,0],
        [0,3,3,3,3,0,0,0],
        [0,2,3,3,3,0,0,0],
        [2,3,3,3,3,0,0,0],
        [0,1,1,0,0,1,1,0]
      ],[
        [0,0,1,1,1,1,0,0],
        [0,0,1,2,2,2,0,0],
        [0,0,2,1,2,1,0,0],
        [0,0,2,2,2,2,0,0],
        [0,0,3,2,2,3,0,0],
        [0,0,3,3,3,3,0,0],
        [0,0,3,3,3,3,0,0],
        [0,1,1,0,0,1,1,0]
      ],[
        [0,0,0,1,1,1,1,0],
        [0,0,0,1,2,2,2,0],
        [0,0,0,2,1,2,1,0],
        [0,0,0,2,2,2,2,0],
        [0,0,0,3,3,3,3,0],
        [0,0,0,3,3,3,2,0],
        [0,0,0,3,3,3,3,2],
        [0,1,1,0,0,1,1,0]
      ]
    ],
    'falling' : [
      [
        [0, 0, 1, 1, 1, 1, 0, 0, ],
        [0, 0, 1, 2, 2, 2, 0, 0, ],
        [0, 0, 2, 1, 2, 1, 0, 0, ],
        [0, 0, 2, 2, 2, 2, 0, 0, ],
        [0, 2, 3, 3, 3, 3, 2, 0, ],
        [0, 0, 3, 3, 3, 3, 0, 0, ],
        [0, 1, 3, 3, 3, 3, 0, 0, ],
        [0, 1, 0, 0, 1, 0, 0, 0, ],
      ]
    ],
    'sprinting' : [
      [
        [0, 0, 0, 1, 1, 1, 1, 0 ],
        [0, 0, 0, 1, 2, 2, 2, 0 ],
        [0, 0, 0, 2, 1, 2, 1, 0 ],
        [0, 0, 0, 2, 2, 2, 2, 0 ],
        [0, 0, 2, 3, 3, 3, 3, 0 ],
        [2, 0, 0, 3, 3, 3, 3, 1 ],
        [0, 2, 1, 3, 3, 3, 3, 1 ],
        [0, 0, 1, 0, 0, 0, 0, 0 ]
      ],
      [
        [0, 0, 0, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 2, 2, 2, 0],
        [0, 0, 0, 2, 1, 2, 1, 0],
        [0, 0, 0, 2, 2, 2 ,2, 0],
        [0, 0, 2, 3, 3, 3, 3, 0],
        [0, 0, 0, 3, 3, 3, 3, 0],
        [2, 0, 0, 3, 1, 3, 3, 0],
        [0, 2, 0, 0, 1, 1, 0, 0],
      ]
    ]
  };
  
  tiles = [[
    [],
    [
    [3, 3, 3, 3, 3, 3, 3, 3 ],
    [3, 3, 3, 3, 3, 3, 3, 3 ],
    [1, 1, 3, 3, 1, 1, 3, 3 ],
    [2, 1, 1, 1, 1, 1, 1, 1 ],
    [1, 1, 1, 1, 2, 1, 1, 2 ],
    [1, 2, 1, 1, 1, 1, 1, 1 ],
    [1, 1, 1, 2, 1, 1, 1, 1 ],
    [2, 1, 1, 1, 1, 1, 2, 1 ]
    ],
    [
    [1, 1, 1, 1, 1, 1, 1, 1, ],
    [1, 1, 2, 1, 1, 1, 1, 1, ],
    [1, 1, 1, 1, 1, 2, 1, 1, ],
    [2, 1, 1, 1, 1, 1, 1, 1, ],
    [1, 1, 1, 1, 2, 1, 1, 2, ],
    [1, 2, 1, 1, 1, 1, 1, 1, ],
    [1, 1, 1, 2, 1, 1, 1, 1, ],
    [2, 1, 1, 1, 1, 1, 2, 1, ],
  ],
    [
    [0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 1, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 1, 0, 0, ],
    [1, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 1, 0, 0, 1, ],
    [0, 1, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 1, 0, 0, 0, 0, ],
    [1, 0, 0, 0, 0, 0, 1, 0, ],
  ],
    [
    [3, 3, 3, 3, 3, 3, 3, 3 ],
    [3, 3, 3, 3, 3, 3, 3, 3 ],
    [0, 0, 3, 3, 0, 0, 3, 3 ],
    [1, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 1, 0, 0, 1 ],
    [0, 1, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 1, 0, 0, 0, 0 ],
    [1, 0, 0, 0, 0, 0, 1, 0 ]
  ],[
      [4, 4, 4, 4, 4, 4, 4, 4, ],
      [4, 4, 4, 4, 4, 4, 4, 4, ],
      [4, 4, 4, 4, 4, 1, 1, 4, ],
      [4, 4, 4, 4, 1, 3, 1, 4, ],
      [1, 1, 4, 1, 3, 1, 4, 4, ],
      [1, 3, 1, 1, 3, 1, 1, 1, ],
      [4, 1, 3, 1, 1, 1, 3, 1, ],
      [4, 1, 3, 3, 1, 3, 1, 4, ],
    ],
    [
      [4,1,4,4,4,1,4,4],
      [1,2,1,4,1,2,1,4],
      [1,2,1,1,1,2,1,1],
      [1,2,1,2,1,2,1,2],
      [1,2,1,2,1,2,1,2],
      [1,2,1,2,1,2,1,2],
      [1,2,1,2,1,2,1,2],
      [1,2,1,2,1,2,1,2],
    ]


]];
  
  
  p1 = new Player(560,40,'boy',[[0,0,0,0],[0,0,0],[255, 211, 165],[255,0,0],[0,0,0,0]],{'left': LEFT_ARROW,'right' : RIGHT_ARROW,'down' : DOWN_ARROW,'up':UP_ARROW, 'select': SHIFT, 'start': ENTER,'a' :90 ,'b' : 88});
  
  
  areas = [
  {
    'palettes' : [
      [[50, 25, 1],[122, 52, 2],[255,100,4],[0,255,0],[0,0,0,0]],
      [[50, 25, 1],[122, 52, 2],[255,100,4],[0,255,0],[0,0,0,0]],
      [[50, 25, 1],[122, 52, 2],[255,100,4],[0,255,0],[0,0,0,0]],
      [[50, 25, 1],[122, 52, 2],[255,100,4],[0,255,0],[0,0,0,0]],
      [[50, 25, 1],[122, 52, 2],[255,100,4],[0,255,0],[0,0,0,0]],
      [[50, 25, 1],[122, 52, 2],[255,100,4],[0,255,0],[0,0,0,0]],
      [[50, 25, 1],[122, 52, 2],[255,100,4],[0,255,0],[0,0,0,0]],
      [[50, 25, 1],[122, 52, 2],[255,100,4],[0,255,0],[0,0,0,0]],
      [[50, 25, 1],[122, 52, 2],[255,100,4],[0,255,0],[0,0,0,0]],
      [[50, 25, 1],[122, 52, 2],[255,100,4],[0,255,0],[0,0,0,0]]
    ],
    'sprites' : [
    [],
    [
    [3, 3, 3, 3, 3, 3, 3, 3 ],
    [3, 3, 3, 3, 3, 3, 3, 3 ],
    [1, 1, 3, 3, 1, 1, 3, 3 ],
    [2, 1, 1, 1, 1, 1, 1, 1 ],
    [1, 1, 1, 1, 2, 1, 1, 2 ],
    [1, 2, 1, 1, 1, 1, 1, 1 ],
    [1, 1, 1, 2, 1, 1, 1, 1 ],
    [2, 1, 1, 1, 1, 1, 2, 1 ]
    ],
    [
    [1, 1, 1, 1, 1, 1, 1, 1, ],
    [1, 1, 2, 1, 1, 1, 1, 1, ],
    [1, 1, 1, 1, 1, 2, 1, 1, ],
    [2, 1, 1, 1, 1, 1, 1, 1, ],
    [1, 1, 1, 1, 2, 1, 1, 2, ],
    [1, 2, 1, 1, 1, 1, 1, 1, ],
    [1, 1, 1, 2, 1, 1, 1, 1, ],
    [2, 1, 1, 1, 1, 1, 2, 1, ],
  ],
    [
    [0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 1, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 1, 0, 0, ],
    [1, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 1, 0, 0, 1, ],
    [0, 1, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 1, 0, 0, 0, 0, ],
    [1, 0, 0, 0, 0, 0, 1, 0, ],
  ],
    [
    [3, 3, 3, 3, 3, 3, 3, 3 ],
    [3, 3, 3, 3, 3, 3, 3, 3 ],
    [0, 0, 3, 3, 0, 0, 3, 3 ],
    [1, 0, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 0, 1, 0, 0, 1 ],
    [0, 1, 0, 0, 0, 0, 0, 0 ],
    [0, 0, 0, 1, 0, 0, 0, 0 ],
    [1, 0, 0, 0, 0, 0, 1, 0 ]],
    [
      [4, 4, 4, 4, 4, 4, 4, 4, ],
      [4, 4, 4, 4, 4, 4, 4, 4, ],
      [4, 4, 4, 4, 4, 1, 1, 4, ],
      [4, 4, 4, 4, 1, 3, 1, 4, ],
      [1, 1, 4, 1, 3, 1, 4, 4, ],
      [1, 3, 1, 1, 3, 1, 1, 1, ],
      [4, 1, 3, 1, 1, 1, 3, 1, ],
      [4, 1, 3, 3, 1, 3, 1, 4, ],
    ],
    [
      [4,1,4,4,4,1,4,4],
      [1,2,1,4,1,2,1,4],
      [1,2,1,1,1,2,1,1],
      [1,2,1,2,1,2,1,2],
      [1,2,1,2,1,2,1,2],
      [1,2,1,2,1,2,1,2],
      [1,2,1,2,1,2,1,2],
      [1,2,1,2,1,2,1,2],
    ]


],
    'collision' : [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,2,0,2,0,2,0,2,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0],
      [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0],
      [0,0,0,0,0,0,0,0,0,1,2,2,2,0,2,1,1,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,1,1,1,1,0,0],
      [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0],
      [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,3,3,3,3,3,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ],
    'graphics' : [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,5,0,0,5,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,4,0,4,0,4,0,4,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,2,3,3,3,3,3,2,0,3,0,3,0,3,0,3,0,3,0,3,0,0,0,0,0,0,1,1,1,1,0,0],
      [0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,2,0,3,0,3,0,3,0,3,0,3,0,3,0,0,0,0,0,0,2,2,2,2,0,0],
      [0,0,0,0,0,0,0,0,1,1,3,3,3,3,3,2,0,3,0,3,0,3,5,3,0,3,0,3,0,0,0,0,0,0,2,2,2,2,0,0],
      [0,0,0,0,0,0,0,0,0,2,4,4,4,3,4,2,1,3,3,3,3,3,1,1,1,1,3,3,0,0,0,0,0,0,2,2,2,2,0,0],
      [0,0,0,0,0,0,0,0,0,2,3,3,3,3,3,2,2,3,3,3,3,3,2,2,2,2,3,3,0,0,0,1,1,1,2,2,2,2,0,0],
      [0,0,0,0,0,5,0,0,0,2,3,3,3,3,3,2,2,6,6,6,6,6,2,2,2,2,3,3,0,0,1,2,2,2,2,2,2,2,0,0],
      [1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1]
    ]
  }
  
  ];
  b = createGraphics(areas[area].graphics[0].length*8,areas[area].graphics.length*8);
  playScreen = 'play';
  if (localStorage.hasOwnProperty("savedata") === true) {
    ppos =   JSON.parse(localStorage.getItem("savedata"));
    //p1.name = ppos.name;
    //p1.items.a = ppos.itemA;
    //p1.items.b = ppos.itemB;
    if (ppos.hasOwnProperty("controller")) //p1.i = ppos.controller;
  } else {
    playScreen = 'map-controls';
  }
  
  dum1 = [ new Dummy(500,100),new Dummy(600,100),new Dummy(700,100),new Dummy(800,100),new Dummy(500,100),new Dummy(600,100),new Dummy(700,100),new Dummy(800,100),new Dummy(500,100),new Dummy(600,100),new Dummy(700,100),new Dummy(800,100),new Dummy(500,100),new Dummy(600,100),new Dummy(700,100),new Dummy(800,100) ];
  //  dum1 = [];
}


function emptySprite() {
  return [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
  ];
}
function emptyBox() {
  return {
    'spriteID' : 0,
    'paletteID' : 0,
    'conditions' : {
      'keyPress' : 'onPress',
      'delay' : 1,
      'clockSize' : 4,
      'holdTime' : 0,
      'maxHoldTime': 0,
      'mustBeInAir' : false,
      'mustBeOnGround' : false
    },
    'moveSelf' : {
      'x' : 30,
      'y' : 5,
      'v' : {
        'x' : 3,
        'y' : -5
      },
      'isSticky' : true,
      'doGravity' : false,
      'doPhysics' : false,
      'stickInTiles' : false
    },
    'hit' : {
      'damage' : 10,
      'friendlyFire' : false,
      'knockback' : 0,
      'knockV' : {
        'x' : 0,
        'y' : 0
      },
      'effect' : 'none',
      'friendlyEffect' : false,
      'strength' : 0,
      'duration' : 0,
      'chance' : 0
    },
    'movePlayer' : {
      'freezePlayer' : false,
      'preventOtherItems' : false,
      'addV' : {
        'x' : 0,
        'y' : 0
      },
      'addVelocityWhen' : 'never',
      'addVClock' : 0,
      'setV' : {
        'x' : 0,
        'y' : 0
      },
      'setVelocityWhen' : 'never',
      'setVClock' : 0
    },
    'death' : {
      'summon' : [],
      'timeToLive' : 6,
      'dieIfNotHeld' : false,
      'deathOnContact' : false
    }
  };
}

function displaySprite(sprite,palette,scalar,xpos,ypos) {
  //sprite - a 2d array
  //palette - a set of four color variables in an array
  //scalar - the size of each pixel
  //xpos/ypos - the x/y coordinates (center)
  push();
  noStroke();
  translate(xpos-scalar[0]*4,ypos-scalar[1]*4);
  /*
  if (scalar[0]<0) translate(-scalar[0]*8,0);
  if (scalar[1]<0) translate(0,-scalar[1]*8);
  */
  scale(scalar[0],scalar[1]);
  for (var j = 0; j < 8; j ++) for (var i = 0; i < 8; i ++) if (alpha(newcolor(palette[sprite[j][i]]))>0) {
    fill(newcolor(palette[sprite[j][i]]));
    rect(i,j,1,1);
  }
  pop();
}

function displayTile(sprite,palette,scalar,xpos,ypos) {
  //sprite - a 2d array
  //palette - a set of four color variables in an array
  //scalar - the size of each pixel
  //xpos/ypos - the x/y coordinates (center)
  b.push();
  b.scale(0.2);
  b.push();
  b.noStroke();
  b.translate(xpos-scalar[0]*4,ypos-scalar[1]*4);
  /*
  if (scalar[0]<0) translate(-scalar[0]*8,0);
  if (scalar[1]<0) translate(0,-scalar[1]*8);
  */
  b.scale(scalar[0],scalar[1]);
  for (var j = 0; j < 8; j ++) for (var i = 0; i < 8; i ++) if (alpha(newcolor(palette[sprite[j][i]]))>0) {
    b.fill(newcolor(palette[sprite[j][i]]));
    b.rect(i,j,1,1);
  }
  b.pop();
  b.pop();
}

function spriteToImage(sprite,palette) {
  var img = createImage(40,40);
  img.loadPixels();
  for (var i = 0; i < 40; i++) {
    for (var j = 0; j < 40; j++) {
      img.set(i, j, newcolor(palette[sprite[floor(j/5)][floor(i/5)]]));
    }
  }
  img.updatePixels();
  return img;
}

function altercolor(c,rc,gc,bc) {
  var cc = [red(c),green(c),blue(c)];
  cc[0]+=rc;
  cc[1]+=gc;
  cc[2]+=bc;
  for (var i = 0; i < 2; i ++) {
    if (cc[i]>255) cc[i] = 255;
    if (cc[i]<0) cc[i] = 0;
  }
  return color(cc[0],cc[1],cc[2],alpha(c));
}

function newcolor(ar) {
  if (ar.length === 1)
  return color(ar[0],ar[0],ar[0],255);
  if (ar.length === 3)
  return color(ar[0],ar[1],ar[2],255);
  if (ar.length === 4)
  return color(ar[0],ar[1],ar[2],ar[3]);
}

function boxCost(box) {
  var cost = 0;
  cost+=abs(box.hit.damage)/3;
  cost+=abs(box.hit.strength)*box.hit.chance;
  cost+=abs(box.hit.knockback);
  cost+=box.hit.duration*box.hit.chance;
  cost+=abs(box.movePlayer.addV.x)/2;
  cost+=abs(box.movePlayer.addV.y)/4;
  cost+=abs(box.movePlayer.setV.x)/4;
  cost+=abs(box.movePlayer.setV.y)/2;
  cost+=dist(box.moveSelf.x,box.moveSelf.y,0,0)/20;
  cost+=dist(box.moveSelf.v.x,box.moveSelf.v.y,0,0)/20;
  
  if (box.movePlayer.freezePlayer) cost*= 0.85/(box.death.timeToLive/5);
  if (box.movePlayer.preventOtherItems) cost*= 0.95/(box.death.timeToLive/5);
  if (box.death.deathOnContact) cost*=0.95;
  if (box.hit.friendlyFire) cost*=0.6;
  
  return ceil(cost);
}

function numIf(number, condition) {
  if (condition) return number;
  return 0;
}

function isHit(x,y) {
  for (var i = 0; i < hitboxes.length; i ++) {
    var box = hitboxes[i];
    if (dist(box.moveSelf.x,box.moveSelf.y,x,y)<40) {
      return {
        'hit' : true,
        'damage' : box.hit.damage,
        'knockback' : box.hit.knockback,
        'v' : {
          'x' : box.hit.knockV.x+numIf(box.moveSelf.v.x,box.moveSelf.doPhysics),
          'y' : box.hit.knockV.y+numIf(box.moveSelf.v.y,box.moveSelf.doPhysics)
        },
        'effect' : {
          'type' : box.hit.effect,
          'duration' : box.hit.duration,
          'chance' : box.hit.chance
        }
      };
    }
  }
  return {
    'hit' : false,
    'damage' : 0,
    'knockback' : 0,
    'v' : {
      'x': 0,
      'y': 0
    },
    'effect' : {
      'type' : 'none',
      'duration' : 0,
      'chance' : 0
    }
  };
}


function Dummy(x,y) {
  
  this.x = x;
  this.y = y;
  this.v = {
    'x' : 0,
    'y' : 0
  };
  this.onGround = false;
  this.dir = 1;
  this.alternating;
  this.tryJump = false;
  this.palette = [[0,0,0,0],[255,0,0,255],[0,0,0,255],[0,0,0,255]]
  this.sprites ={
    'walking' : [
      spriteToImage(playerSprites.walking[0],this.palette),
      spriteToImage(playerSprites.walking[1],this.palette),
      spriteToImage(playerSprites.walking[2],this.palette),
      spriteToImage(playerSprites.walking[3],this.palette)
    ],
    'swinging' : [
      spriteToImage(playerSprites.swinging[0],this.palette),
      spriteToImage(playerSprites.swinging[1],this.palette),
      spriteToImage(playerSprites.swinging[2],this.palette),
      spriteToImage(playerSprites.swinging[3],this.palette)
      
    ],
    'falling' : [
      
      spriteToImage(playerSprites.falling[0],this.palette)
    ],
    'sprinting' : [
      
      spriteToImage(playerSprites.sprinting[0],this.palette),
      spriteToImage(playerSprites.sprinting[1],this.palette)
    ]
  };
  this.animState = 'idle';
  this.tar = {
    'x' : this.x+0,
    'y' : this.y+0
  };
  this.display = function() {
    push();
    translate(this.x,this.y);
    scale(this.dir,1);
    if (this.animState === 'sprintItem') {
      image(this.sprites.sprinting[(floor(frameCount*0.2)%2)],-20,-20);
    } else if (!this.onGround) {
      image(this.sprites.falling[0],-20,-20);
    } else if (this.animState === 'idle') {
      image(this.sprites.walking[0],-20,-20);
    } else if (this.animState === 'walk') {
      image(this.sprites.walking[(floor(frameCount*0.2)%4)],-20,-20);
    } else if (this.animState === 'sprint') {
      image(this.sprites.sprinting[(floor(frameCount*0.2)%2)],-20,-20);
    }
    pop();
    //ellipse(this.x,this.y,10,10);
  };
  this.physics = function() {
    this.tryJump = false;
    this.onGround = false;
    if (this.x<0) this.x = 5;
    if (this.x>40*areas[area].collision[0].length) this.x = 40*areas[area].collision[0].length-1;
    if (this.y>areas[area].collision.length*40) this.y = 0;
    this.alternating = !this.alternating;
    if (this.alternating ===true && this.v.y<15) {
      this.v.y +=2;
    }
    
    if (this.y<40*areas[area].collision.length&&this.y>0&&this.x<40*areas[area].collision[0].length&&this.x>0) {
      if (this.y<((40*areas[area].collision.length)-40)&&areas[area].collision[floor((this.y+20)/40)][floor(this.x/40)] > 0&&this.v.y>=0) {
        if (areas[area].collision[floor((this.y+20)/40)][floor(this.x/40)] < 3) {
          this.v.y = 0;
          this.v.x = 0;
          this.onGround = true;
          this.y = floor((this.y)/40)*40+20;
        }
      }
      if (this.y>40&&areas[area].collision[floor((this.y-20)/40)][floor(this.x/40)] === 1) {
        this.v.y = 0;
        this.onGround = true;
        this.y = floor((this.y)/40)*40+20;
      }
    }
    // apply gravity
    this.y+=this.v.y;
        
    if (this.y<40*areas[area].collision.length&&this.y>0&&this.x<40*areas[area].collision[0].length&&this.x>0) {
      if (this.x-(this.v.x)>40&&areas[area].collision[floor(this.y/40)][floor((this.x-11-(this.v.x))/40)] === 1) {
        this.x = floor((this.x)/40)*40+10; // set x-pos to 10 from block to the left
        this.v.x = 0;
        this.tryJump = true;

      }
      if (this.x+(this.v.x)<40*areas[area].collision[0].length-40&&areas[area].collision[floor(this.y/40)][floor((this.x+10+(this.v.x))/40)] === 1) {
        this.x = floor((this.x)/40)*40+30; // set x-pos to 10 from block to the right
        this.v.x = 0;
        this.tryJump = true;
      }
      if (areas[area].collision[floor(this.y/40)][floor((this.x)/40)] === 1) {
        this.y-=40;
      }
    }
    this.x+=this.v.x;
    this.v.x*=.97;
  };
  
  this.move = function() {
    this.x+=this.dir*2;
    this.animState = 'walk';
    if (dist(this.x,this.y,this.tar.x,this.tar.y)>200&&this.x!==this.tar.x) {
      this.x+=abs(-this.x + this.tar.x)/(-this.x + this.tar.x)*4;
      this.animState = 'sprint';
    }
    if (random(100)<3){
      this.dir = -this.dir;
    }
    if ((random(100)<1||this.tryJump)&&this.onGround) {
      this.v.y = -random(23);
      if (this.x!==this.tar.x) this.v.x += dist(this.x,this.y,this.tar.x,this.tar.y)/(50*abs(-this.x + this.tar.x)/(-this.x + this.tar.x));
    }
    
    if (random(100)<3&&this.x!==this.tar.x) this.dir = abs(-this.x + this.tar.x)/(-this.x + this.tar.x);
  };
  
  this.interact = function() {
    var data = isHit(this.x,this.y);
    if (data.hit) {
      this.v.x+=data.v.x*data.knockback/5;
      this.v.y+=data.v.y*data.knockback/5;
    }
    
    if (dist(this.x,this.y,p1.x,p1.y)<35) {
      p1.getHit(10,{'x': 0,'y' : 0},0);
    }
  };

  this.target = function(point) {
    this.tar.x = point.x;
    this.tar.y = point.y;
  };
}

function clone(variable) {
  return JSON.parse(JSON.stringify(variable));
}

function areaDis(a) {
  noStroke();
  for (var j = 0; j < a.graphics.length; j ++) {
    for (var i = 0; i < a.graphics[0].length; i ++) {
      if (a.graphics[j][i]>0) {
        //fill(50,255,50);
        //rect(i*40,j*40,40,40);
        
        displayTile(a.sprites[a.graphics[j][i]],a.palettes[a.graphics[j][i]],[5,5],i*40+20,j*40+20);
        
      }
    }
  }
}

function Save() {
  var sda = {
    'name' : p1.name,
    'itemA': p1.items.a,
    'itemB': p1.items.b,
    'controller' : p1.i
  };
  localStorage.setItem("savedata",JSON.stringify(sda));
}
function Load() {
  if (localStorage.hasOwnProperty("savedata") === true) {
    ppos =   JSON.parse(localStorage.getItem("savedata"));
    p1.name = ppos.name;
    p1.items.a = ppos.itemA;
    p1.items.b = ppos.itemB;
  }
}



var canDoVelocity = {
  'never' : function(age,vclock,life) {
    return false;
  },
  'onSpawn' : function(age,vclock,life) {
    return (age===0);
  },
  'continuously' : function(age,vclock,life) {
    return ((age+1)%vclock===0);
  },
  'onDeath' : function(age,vclock,life) {
    return (age===life);
  }
};

function handleboxes() {
  for (var i = 0; i < hitboxes.length; i ++) {
    var box = hitboxes[i];
    if (box.moveSelf.doGravity) box.moveSelf.v.y++;

    if (box.moveSelf.isSticky) {
      box.moveSelf.s = {
        'x' : box.blueprint.moveSelf.x*box.dir + box.owner.x,
        'y' : box.blueprint.moveSelf.y + box.owner.y
      };
    }
    if (box.movePlayer.freezePlayer) box.owner.noMove = true;
    if (box.movePlayer.preventOtherItems) box.owner.inhibitingItem[box.button] = true;
    push();
    translate(box.moveSelf.x,box.moveSelf.y);
    scale(box.dir,1);
    image(box.display,-20,-20,40,40);
    pop();
    ///ellipse(box.moveSelf.x,box.moveSelf.y,10,10);
    /* // center of box
    push();
    fill(255);
    stroke(0);
    ellipse(box.moveSelf.x,box.moveSelf.y,5,5);
    pop();
    */
    if (canDoVelocity[box.movePlayer.addVelocityWhen](box.death.timeAlive,box.movePlayer.addVClock+1,box.death.timeToLive)) {
      box.owner.v.x +=box.movePlayer.addV.x*box.dir;
      box.owner.v.y +=box.movePlayer.addV.y;
    }
    if (canDoVelocity[box.movePlayer.setVelocityWhen](box.death.timeAlive,box.movePlayer.setVClock+1,box.death.timeToLive)) {
      box.owner.v.x =box.movePlayer.setV.x*box.dir;
      box.owner.v.y =box.movePlayer.setV.y;
    }
    
    if (!box.moveSelf.isSticky) {
      box.moveSelf.x += box.moveSelf.v.x;//*box.dir;
      box.moveSelf.y += box.moveSelf.v.y;
    } else if (box.moveSelf.isSticky) {
      box.moveSelf.x = box.moveSelf.s.x;
      box.moveSelf.y = box.moveSelf.s.y;
    }
    
    box.death.timeAlive++;
    
    if (dist(box.moveSelf.x,box.moveSelf.y,box.owner.x,box.owner.y)<70) box.owner.animState = 'sprintItem';
    if (box.death.timeAlive > box.death.timeToLive) {
      hitboxes.splice(i,1);
    }
  }
};

var pauseNum = 0;
var pauseFunctions = [
  function() {
    playScreen = 'play';
  },
  function() {
    playScreen = 'forge';
  },
  function() {
    playScreen = 'map-controls';
    doesnum = 0;
  },
  function() {
    playScreen = 'pause-save-management';
    pauseNum = 0;
  }
];
var pauseFunctionsSaves = [
  function() {
    playScreen = 'pause';
  },
  function() {
    if (pkey[27] === true) Save();
    ntext('save data updated',25,575,5);
  },
  function() {
    localStorage.removeItem("savedata");
    ntext('save data cleared',25,575,5);
  }
];

function highlighted(x,y,w,h) {
  return (mouseX>x&&mouseY>y&&mouseX<x+w&&mouseY<y+h);
};

function PauseMenu() {
  push();
  noStroke();
  fill(0,0,0,100);
  rect(-10,-10,width+10,height+10);
  rect(width/2-70,height/2-20,350,200);
  ntext('paused',width/4-96,height/2,4);
  ntext('resume',width/2,height/2,3);
  ntext('forge',width/2,height/2+50,3);
  ntext('map controls',width/2,height/2+100,3);
  ntext('save data',width/2,height/2+150,3);
  
  if (pauseNum<0) pauseNum = 3;
  if (pauseNum>3) pauseNum = 0;
  fill(255,255,0);
  rect(width/2-50,height/2+50*pauseNum,15,15);
  pop();
};
function PauseMenuSaves() {
  noStroke();
  push();
  fill(0,0,0,100);
  rect(-10,-10,width+10,height+10);
  rect(width/2-70,height/2-20,350,200);
  ntext('save data',width/4-146,height/2,4);
  ntext('return',width/2,height/2,3);
  ntext('save game',width/2,height/2+50,3);
  ntext('clear data',width/2,height/2+100,3);
  
  if (pauseNum<0) pauseNum = 2;
  if (pauseNum>2) pauseNum = 0;
  fill(255,255,0);
  rect(width/2-50,height/2+50*pauseNum,15,15);
  pop();
};

function button(t,x,y,w,h,f) {
  fill(100);
  if (highlighted(x,y,w,h)) {
    fill(255,255,0);
    if (mouseFrame===true) f();
  }
  stroke(75);
  rect(x,y,w,h);
  fill(255);
  textSize(16);
  textAlign(CENTER,CENTER);
  ntext(t,floor(x+w/2)-t.length*8+8,floor(y+h/2),2);
};
function slider(v,x,y,w,h,r) {
  fill(100);
  rect(x,y,w,h);
  if (highlighted(x,y,w,h)) {
    if (mouseIsPressed===true) {
      v = map(mouseY,y,y+h,0,r,true);
    }
  }
  fill(150);
  rect(x-5,map(v,0,r,y,y+h,true)-5,w+10,10);
  
  return v;
  
}
function slider2(v,x,y,w,h,r) {
  fill(100);
  rect(x,y,w,h);
  if (highlighted(x,y,w,h)) {
    if (mouseIsPressed===true) {
      v = map(mouseX,x,x+w,0,r,true);
    }
  }
  fill(150);
  rect(map(v,0,r,x,x+w,true)-5,y-5,10,h+10);
  
  return v;
  
}

var itemInEdit;
var inEditRefr;
var spriteInEdit = {
  'data': [],
  'ID' : 0
};
var paletteInEdit = {
  'data':[],
  'ID':0
};
var hitboxInEdit = {
  'data' : {},
  'ID' : 0
};


var forgeScreen = 'select';
var forgeFunc = {
  'select' : function() {
    background(150);
    button('BACK',width-100,0,100,25,function() {playScreen = 'pause';});
    var y = 0;
    for (var i in closet) {
      button(
        i,
        15,15+y,
        200,25,
        function() {
          forgeScreen = 'edit-item';
          itemInEdit = JSON.parse(JSON.stringify(closet[i]));
          inEditRefr = i;
        }
      );
      fill((sin(frameCount*(PI/180))+1)/2*255,(cos(frameCount*(PI/180))+1)/2*255,(sin(frameCount*(PI/180))+1)/2*255);
      rect(15,15+y,24,24);
      displaySprite(closet[i].sprites[closet[i].icon],closet[i].palettes[closet[i].iconPalette],[3,3],27,27+y);
      y+=30;
    }
  },
  'edit-item' : function() {
    background(150);
    ntext('edit item - '+itemInEdit.name,15,15,3);
    button('OK',width-100,0,100,25,function() {
      forgeScreen = 'select';
      closet[inEditRefr] = JSON.parse(JSON.stringify(itemInEdit));
    });
    button('CANCEL',width-100,25,100,25,function() {
      forgeScreen = 'select';
    });
    ntext('sprites',25,65,1);
    var pos = {'x':0,'y':0};
    for (var i = 0; i < itemInEdit.sprites.length; i ++) {
      // button under preview
      
      if (pos.y>=11) {
        pos.x+=45;
        pos.y = 0;
      }
      button('',25+pos.x,75+pos.y*45,40,40,function() {
        forgeScreen = 'edit-sprite';
        spriteInEdit.data = JSON.parse(JSON.stringify(itemInEdit.sprites[i]));
        spriteInEdit.ID = i;
      });
      pos.y++;
      // preview the sprite
      displaySprite(itemInEdit.sprites[i],[[0,0,0,0],[255,255,255,255],[255,0,0,255],[0,0,0,255]],[5,5],45,95+i*45);
    }
    button('+',25+pos.x,75+pos.y*45,40,40,function() {
      itemInEdit.sprites[itemInEdit.sprites.length] = emptySprite();
    });
    pos.y = 0;
    pos.x+=45;
    ntext('palettes',75+pos.x,65,1);

    for (var i = 0; i < itemInEdit.palettes.length; i ++) {
      // button under preview
      if (pos.y>=11) {
        pos.x+=45;
        pos.y = 0;
      }
      button('',75+pos.x,75+pos.y*45,40,40,function() {
        forgeScreen = 'edit-palette';
        paletteInEdit.data = JSON.parse(JSON.stringify(itemInEdit.palettes[i]));
        paletteInEdit.ID = i;
      });
      //preview the palette
      fill(itemInEdit.palettes[i][1][0],itemInEdit.palettes[i][1][1],itemInEdit.palettes[i][1][2]);
      rect(80+pos.x,80+pos.y*45,15,15);
      fill(itemInEdit.palettes[i][2][0],itemInEdit.palettes[i][2][1],itemInEdit.palettes[i][2][2]);
      rect(88+pos.x,88+pos.y*45,15,15);
      fill(itemInEdit.palettes[i][3][0],itemInEdit.palettes[i][3][1],itemInEdit.palettes[i][3][2]);
      rect(96+pos.x,96+pos.y*45,15,15);
      pos.y++;
    }
    button('+',75+pos.x,75+pos.y*45,40,40,function() {
      itemInEdit.palettes[itemInEdit.palettes.length] = [[0,0,0,0],[255,255,255,255],[255,0,0,255],[0,0,0,255]];
    });
    
    pos.y = 0;
    pos.x+=45;
    
    ntext('hitboxes', 125+pos.x,65,1);
    for (var i = 0; i < itemInEdit.boxes.length; i ++) {
      if (pos.y>=11) {
        pos.x+=45;
        pos.y = 0;
      }
      button('',125+pos.x,75+pos.y*45,40,40,function() {
        forgeScreen = 'edit-hitbox';
        hitboxInEdit.ID = i+0;
        hitboxInEdit.data = JSON.parse(JSON.stringify(itemInEdit.boxes[i]));
      });
      fill((sin(frameCount*(PI/180))+1)/2*255,(cos(frameCount*(PI/180))+1)/2*255,(sin(frameCount*(PI/180))+1)/2*255);
      rect(127+pos.x,77+pos.y*45,36,36);
      if (itemInEdit.boxes[i].spriteID>=itemInEdit.sprites.length) itemInEdit.boxes[i].spriteID = itemInEdit.sprites.length-1;
      if (itemInEdit.boxes[i].paletteID>=itemInEdit.palettes.length) itemInEdit.boxes[i].paletteID = itemInEdit.palettes.length-1;
      displaySprite(itemInEdit.sprites[itemInEdit.boxes[i].spriteID],itemInEdit.palettes[itemInEdit.boxes[i].paletteID],[5,5],145+pos.x,95+pos.y*45);
      pos.y++;
    }
    button('+',125+pos.x,75+pos.y*45,40,40,function() {
      itemInEdit.boxes[itemInEdit.boxes.length] = emptyBox();
    });
  },
  'edit-hitbox' : function() {
    background(150);
    ntext('edit hitbox '+hitboxInEdit.ID+' - '+itemInEdit.name,15,15,3);
    button('OK',width-100,0,100,25,function() {
      forgeScreen = 'edit-item';
      itemInEdit.boxes[hitboxInEdit.ID] = JSON.parse(JSON.stringify(hitboxInEdit.data));
    });
    button('CANCEL',width-100,25,100,25,function() {
      forgeScreen = 'edit-item';
    });
    push();
    stroke(255);
    for (var i = 0; i < itemInEdit.sprites.length; i ++) line(map(i,0,itemInEdit.sprites.length,20,120),50,map(i,0,itemInEdit.sprites.length,20,120),65);
    pop();
    hitboxInEdit.data.spriteID = floor(slider2(hitboxInEdit.data.spriteID,20,70,100,15,itemInEdit.sprites.length));
    ntext('sprite',150,74,2);
    
    push();
    stroke(255);
    for (var i = 0; i < itemInEdit.palettes.length; i ++) line(map(i,0,itemInEdit.palettes.length,20,120),100,map(i,0,itemInEdit.palettes.length,20,120),115);
    pop();
    hitboxInEdit.data.paletteID = floor(slider2(hitboxInEdit.data.paletteID,20,120,100,15,itemInEdit.palettes.length));
    ntext('palette',150,124,2);
    
    
    fill((sin(frameCount*(PI/180))+1)/2*255,(cos(frameCount*(PI/180))+1)/2*255,(sin(frameCount*(PI/180))+1)/2*255);
      rect(278,72,42,42);
      if (hitboxInEdit.data.spriteID>=itemInEdit.sprites.length) hitboxInEdit.data.spriteID = itemInEdit.sprites.length-1;
      if (hitboxInEdit.data.paletteID>=itemInEdit.palettes.length) hitboxInEdit.data.paletteID = itemInEdit.palettes.length-1;
      displaySprite(itemInEdit.sprites[hitboxInEdit.data.spriteID],itemInEdit.palettes[hitboxInEdit.data.paletteID],[5,5],300,94);
    
    button('DELETE HITBOX',width-275,height-25,275,25,function() {
      itemInEdit.boxes.splice(hitboxInEdit.ID,hitboxInEdit.ID+1);
      forgeScreen = 'edit-item';
    });
  },
  'edit-palette' : function() {
    background(150);
    button('OK',width-100,0,100,25,function() {
      forgeScreen = 'edit-item';
      itemInEdit.palettes[paletteInEdit.ID] = JSON.parse(JSON.stringify(paletteInEdit.data));
    });
    button('CANCEL',width-100,25,100,25,function() {
      forgeScreen = 'edit-item';
    });
    button('use with icon',0,height-25,230,25,function() {
      itemInEdit.iconPalette = paletteInEdit.ID+0;
    });
    if (itemInEdit.palettes.length>1) button('DELETE PALETTE',width-275,height-25,275,25,function() {
      itemInEdit.palettes.splice(paletteInEdit.ID,paletteInEdit.ID+1);
      forgeScreen = 'edit-item';
    });
    
    ntext('edit palette '+paletteInEdit.ID+' - '+itemInEdit.name,15,15,3);
    fill(paletteInEdit.data[1][0],paletteInEdit.data[1][1],paletteInEdit.data[1][2]);
    rect(width/4-25,height/4,50,50);
    
    paletteInEdit.data[1][0] = slider(paletteInEdit.data[1][0],width/4-20,height/4+100,10,100,255);
    paletteInEdit.data[1][1] = slider(paletteInEdit.data[1][1],width/4-5,height/4+100,10,100,255);
    paletteInEdit.data[1][2] = slider(paletteInEdit.data[1][2],width/4+10,height/4+100,10,100,255);
    
    fill(paletteInEdit.data[2][0],paletteInEdit.data[2][1],paletteInEdit.data[2][2]);
    rect(width/2-25,height/4,50,50);
    
    paletteInEdit.data[2][0] = slider(paletteInEdit.data[2][0],width/2-20,height/4+100,10,100,255);
    paletteInEdit.data[2][1] = slider(paletteInEdit.data[2][1],width/2-5,height/4+100,10,100,255);
    paletteInEdit.data[2][2] = slider(paletteInEdit.data[2][2],width/2+10,height/4+100,10,100,255);
    
    fill(paletteInEdit.data[3][0],paletteInEdit.data[3][1],paletteInEdit.data[3][2]);
    rect(width*3/4-25,height/4,50,50);
    
    paletteInEdit.data[3][0] = slider(paletteInEdit.data[3][0],width*3/4-20,height/4+100,10,100,255);
    paletteInEdit.data[3][1] = slider(paletteInEdit.data[3][1],width*3/4-5,height/4+100,10,100,255);
    paletteInEdit.data[3][2] = slider(paletteInEdit.data[3][2],width*3/4+10,height/4+100,10,100,255);
    
    
  },
  'edit-sprite' : function() {
    background(150);
    button('OK',width-100,0,100,25,function() {
      forgeScreen = 'edit-item';
      itemInEdit.sprites[spriteInEdit.ID] = JSON.parse(JSON.stringify(spriteInEdit.data));
    });
    button('CANCEL',width-100,25,100,25,function() {
      forgeScreen = 'edit-item';
    });
    button('use with icon',0,height-25,230,25,function() {
      itemInEdit.icon = spriteInEdit.ID+0;
    });
    if (itemInEdit.sprites.length>1) button('DELETE SPRITE',width-250,height-25,250,25,function() {
      itemInEdit.sprites.splice(spriteInEdit.ID,spriteInEdit.ID+1);
      forgeScreen = 'edit-item';
    });
    ntext('edit sprite '+spriteInEdit.ID+' - '+itemInEdit.name,15,15,3);
    fill(100);
    rect(width/2-100,height/2-100,200,200);
    displaySprite(spriteInEdit.data,[[0,0,0,0],[255,255,255,255],[255,0,0,255],[0,0,0,255]],[25,25],width/2,height/2);
    
    
    button('',width/4-27,height/2+148,54,54,function(){forgeFunc.selectedColor = 1;});
    fill(255);
    rect(width/4-25,height/2+150,50,50);
    button('',width/2-27,height/2+148,54,54,function(){forgeFunc.selectedColor = 2;});
    fill(255,0,0);
    rect(width/2-25,height/2+150,50,50);
    button('',width*3/4-27,height/2+148,54,54,function(){forgeFunc.selectedColor = 3;});
    fill(0);
    rect(width*3/4-25,height/2+150,50,50);
    
    button('eraser',width/2-75,height/2+225,150,25,function(){forgeFunc.selectedColor = 0;});
    
    var ar = [48,49,50,51];
    for (var i = 0; i < 4; i ++) {
      if (keys[ar[i]] === true) {
        forgeFunc.selectedColor = i;
      }
    }
    
    if (highlighted(width/2-100,height/2-100,200,200)) {
      if (mouseIsPressed === true) {
        var xI = floor((mouseX - (width/2-100))/25);
        var yI = floor((mouseY - (height/2-100))/25);
        spriteInEdit.data[yI][xI] = forgeFunc.selectedColor;
      }
    }
    fill([color(0,0,0,0),color(255),color(255,0,0),color(0)][forgeFunc.selectedColor]);
    rect(mouseX-5,mouseY-5,10,10);
    
  },
  'selectedColor' : 0
};



var doesnum = 0;
var does = [
  function() {
    fill(255,255,0);
    rect(100,400,50,50);
    if (rkeyFrame === true) p1.i.up = keyCode;
    if (mouseFrame === true) doesnum++;
    fill(0);
    text(key,125,425);
  },
  function() {
    fill(255,255,0);
    rect(50,450,50,50);
    if (rkeyFrame === true) p1.i.left = keyCode;
    if (mouseFrame === true) doesnum++;
    fill(0);
    text(key,75,475);
  },
  function() {
    fill(255,255,0);
    rect(150,450,50,50);
    if (rkeyFrame === true) p1.i.right = keyCode;
    if (mouseFrame === true) doesnum++;
    fill(0);
    text(key,175,475);
  },
  function() {
    fill(255,255,0);
    rect(100,500,50,50);
    if (rkeyFrame === true) p1.i.down = keyCode;
    if (mouseFrame === true) doesnum++;
    fill(0);
    text(key,125,525);
  },
  function() {
    fill(255,255,0);
    ellipse(700,475,50,50);
    if (rkeyFrame === true) p1.i.a = keyCode;
    if (mouseFrame === true) doesnum++;
    fill(0);
    text(key,700,475);
  },
  function() {
    fill(255,255,0);
    ellipse(600,475,50,50);
    if (rkeyFrame === true) p1.i.b = keyCode;
    if (mouseFrame === true) doesnum++;
    fill(0);
    text(key,600,475);
  },
  function() {
    fill(255,255,0);
    rect(300,500,50,20);
    textSize(15);
    if (rkeyFrame === true) p1.i.start = keyCode;
    if (mouseFrame === true) doesnum++;
    fill(0);
    text(key,325,510);
  },
  function() {
    fill(255,255,0);
    rect(400,500,50,20);
    textSize(15);
    if (rkeyFrame === true) p1.i.select = keyCode;
    if (mouseFrame === true) playScreen = 'entername';
    fill(0);
    text(key,425,510);
  }
  
];
var doit = {
  'forge' : function() {
    forgeFunc[forgeScreen]();
  },
  
  'play' : function() {
    frameRate(60);
    push();
    if (twoplayer === true) {
      translate(-floor((p1.x+p2.x)/2)+width/2,0/*-p1.y+height/2*/);
    } else {
      translate(-p1.x+width/2,0/*-p1.y+height/2*/);
    }
    if (dattimer<5) dattimer ++;
    background(0);
    if (dattimer<2) {
      b.background(15,120,255);
      areaDis(areas[area]);
    }
    push();
    scale(5);
    image(b,0,0);
    pop();
    p1.display();
    p1.move();
    p1.noMove = false;
    p1.handleKeyPress();
    p1.inhibitingItem.a = false;
    p1.perform('a','b');
    p1.inhibitingItem.b = false;
    p1.perform('b','a');
    handleboxes();
    p1.do();
    p1.physics();
    
    for (var i = 0; i < dum1.length; i ++) {
      dum1[i].physics();
      dum1[i].move();
      dum1[i].interact();
      dum1[i].display();
      dum1[i].target(p1);

    }
    pop();
    p1.ui();
    p1.doPause();
    
    
  
  },
  'pause' : function() {
     frameRate(60);
    push();
    if (twoplayer === true) {
      translate(-floor((p1.x+p2.x)/2)+width/2,0/*-p1.y+height/2*/);
    } else {
      translate(-p1.x+width/2,0/*-p1.y+height/2*/);
    }
    
    push();
    scale(5);
    image(b,0,0); // display background
    pop();
    
    p1.display(); // display player
    p1.doPause(); // handle player keypresses
    
    
    // render hitboxes
    for (var i = 0; i < hitboxes.length; i ++) {
      var box = hitboxes[i];
      push();
      translate(box.moveSelf.x,box.moveSelf.y);
      scale(box.dir,1);
      image(box.display,-20,-20,40,40);
      pop();
    }
    
    // render enemies
    for (var i = 0; i < dum1.length; i ++) {
      dum1[i].display();
    }
    pop();
    
    
    // display menu
    PauseMenu();
    
    
  
  },
  'pause-save-management' : function() {
     frameRate(60);
    push();
    if (twoplayer === true) {
      translate(-floor((p1.x+p2.x)/2)+width/2,0/*-p1.y+height/2*/);
    } else {
      translate(-p1.x+width/2,0/*-p1.y+height/2*/);
    }
    
    push();
    scale(5);
    image(b,0,0);
    pop();
    p1.display();
    p1.doPause();
    for (var i = 0; i < hitboxes.length; i ++) {
      var box = hitboxes[i];
      push();
      translate(box.moveSelf.x,box.moveSelf.y);
      scale(box.dir,1);
      image(box.display,-20,-20,40,40);
      pop();
    }
    for (var i = 0; i < dum1.length; i ++) {
      dum1[i].display();
    }
    pop();
    PauseMenuSaves();
    
    
  
  },
  'entername' : function() {
    background(0,0,0);
    ntext("type your name here",40,200,5);
    ntext(p1.name,40,300,5);
    if (p1.name.length<10&&keyIsPressed === true&&press === true&&keys[8]!==true&&keys[ALT]!==true&&keys[SHIFT]!==true&&keys[CONTROL]!==true&&keys[ENTER]!==true) {
      press = false;
      p1.name+=key;
    } else if (keyIsPressed === false) {
      press = true;
    }
    if (pkey[8] === true&&p1.name.length>0) {
      p1.name = p1.name.substring(0,p1.name.length-1);
    }
    if (pkey[ENTER] === true) {
      playScreen = 'play';
      
      Save();
    }
  },
  'map-controls' : function() {
    textAlign(CENTER,CENTER);
    background(0,0,0);
    fill(255);
    noStroke();
    rect(50,450,150,50);
    rect(100,400,50,150);
    ellipse(700,475,50,50);
    ellipse(600,475,50,50);
    ntext('start',300,490,2);
    ntext('select',400,490,2);
    rect(300,500,50,20);
    rect(400,500,50,20);
    ntext('map controller',150,200,5);
    ntext('b',600,525,5);
    ntext('a',700,525,5);
    push();
    textSize(30);
    does[doesnum]();
    textSize(30);
    pop();
  }
};
function draw() {
  noSmooth();
    doit[playScreen]();
  
 fill(0,255,0);
    if (frameCount%30 === 0) {
      frames[0] = frameRate();
      for (var i = 10; i > 0; i --) {
        frames[i] = frames[i-1];
      }
    }
    for (var i = 0; i < frames.length; i ++) {
      text(floor(frames[i]),10,150+i*12);
    }
  
  mouseFrame = false;
  
  rkey = [];
  pkey = [];
  rkeyFrame = false;
}
