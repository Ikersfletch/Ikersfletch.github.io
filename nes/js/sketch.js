var playerSprites;
var tile;
var p1;
var p2;
var areas;
var area = 0;
var b;
var ppos;
var gameScreen;
var twoplayer = false;
var press = true;
var dattimer = 0;
var hitboxes = [];
var state;
var spriteInEdit = [
[0, 0, 0, 0, 0, 0, 0, 0 ],
[0, 0, 0, 0, 0, 0, 0, 0 ],
[0, 0, 0, 0, 0, 0, 0, 0 ],
[0, 0, 0, 0, 0, 0, 0, 0 ],
[0, 0, 0, 0, 0, 0, 0, 0 ],
[0, 0, 0, 0, 0, 0, 0, 0 ],
[0, 0, 0, 0, 0, 0, 0, 0 ],
[0, 0, 0, 0, 0, 0, 0, 0 ]
];
var paletteInEdit = [];
var color = [0,0,0];
var itemInEdit;
var items = [
  {
    'icon' : [
[0, 0, 0, 0, 0, 0, 2, 2, ],
[0, 0, 0, 0, 0, 2, 2, 2, ],
[0, 0, 0, 0, 2, 2, 2, 0, ],
[0, 3, 0, 2, 2, 2, 0, 0, ],
[0, 0, 3, 2, 2, 0, 0, 0, ],
[0, 3, 1, 3, 0, 0, 0, 0, ],
[3, 1, 3, 0, 3, 0, 0, 0, ],
[3, 3, 0, 0, 0, 0, 0, 0, ],
],
    'iconPalette' : [color(0,0,0,0),color(0),color(255),color(255,0,0)],
    'sprites' : [[
[0, 0, 0, 0, 0, 0, 0, 0, ],
[0, 0, 0, 0, 0, 0, 0, 0, ],
[0, 0, 3, 0, 0, 0, 0, 0, ],
[3, 3, 3, 2, 2, 2, 2, 2, ],
[3, 3, 3, 1, 1, 1, 2, 2, ],
[0, 0, 3, 0, 0, 0, 0, 0, ],
[0, 0, 0, 0, 0, 0, 0, 0, ],
[0, 0, 0, 0, 0, 0, 0, 0, ],
]
],
    'palettes' : [[color(0,0,0,0),color(0),color(255),color(255,0,0)]],
    'pboxes' : [[0,0,0,0,35,5,0,0,false,0],[0,0,1,0,35,5,0,0,false,0],[0,0,2,0,35,5,0,0,false,0],[0,0,3,0,35,5,0,0,false,0],[0,0,4,0,35,5,0,0,false,0],[0,0,5,0,35,5,0,0,false,0],[0,0,6,0,35,5,0,0,false,0]],
    'cboxes' : [],
    'rboxes' : []
  }
];

function returnItem() {
  return {
    'icon' : [],
    'iconPalette' : [],
    'sprites' : [],
    'palette' : [],
    'pboxes' : [],
    'cboxes' : [],
    'rboxes' : [],
    'anim' : 'idle'
  };
}
var test;
var plus;
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
  itemInEdit = {
      'icon' : [
        [0, 0, 0, 0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, 0, 0, 0, ],
        [1, 1, 1, 1, 1, 1, 1, 1, ],
        [1, 3, 3, 1, 2, 2, 2, 1, ],
        [1, 3, 3, 1, 1, 1, 1, 1, ],
        [1, 1, 1, 1, 1, 1, 1, 1, ],
        [1, 1, 0, 0, 0, 0, 0, 0, ],
        [1, 1, 0, 0, 0, 0, 0, 0, ],
      ],
    'iconPalette' : [color(0,0,0,0),color(0),color(255),color(0,255,0)],
    'sprites' : [
      [
        [0, 0, 0, 0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, 0, 0, 0, ],
        [1, 1, 1, 1, 1, 1, 1, 1, ],
        [1, 3, 3, 1, 2, 2, 2, 1, ],
        [1, 3, 3, 1, 1, 1, 1, 1, ],
        [1, 1, 1, 1, 1, 1, 1, 1, ],
        [1, 1, 0, 0, 0, 0, 0, 0, ],
        [1, 1, 0, 0, 0, 0, 0, 0, ]
      ],[
        [0, 0, 0, 0, 0, 0, 0, 0, ],
        [0, 3, 3, 3, 3, 3, 0, 0, ],
        [0, 0, 3, 2, 2, 3, 3, 0, ],
        [0, 0, 0, 3, 2, 2, 3, 3, ],
        [0, 0, 0, 3, 2, 2, 3, 3, ],
        [0, 0, 3, 2, 2, 3, 3, 0, ],
        [0, 3, 3, 3, 3, 3, 0, 0, ],
        [0, 0, 0, 0, 0, 0, 0, 0, ]
      ]
    ],
    'palettes' : [[color(0,0,0,0),color(0),color(255),color(0,255,0)]],
    'pboxes' : [],
    'cboxes' : [[0,0,1,1,35,0,0,0,false,0],[1,0,10,100,75,0,20,0,false,0],[1,0,10,100,75,0,20,0,false,8]],
    'rboxes' : []
  };
  test = createGraphics(40,40);

  state = 0;
  paletteInEdit = [color(0,0,0,0),color(0),color(255),color(255,0,0)];
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
  
  
  p1 = new Player(560,40,'boy',[color(0,0,0,0),color(0,0,0),color(255, 211, 165),color(255,0,0),color(0,0,0,0)],{'left': LEFT_ARROW,'right' : RIGHT_ARROW,'down' : DOWN_ARROW,'up':UP_ARROW, 'select': SHIFT, 'start': ENTER,'a' :90 ,'b' : 88});
  p2 = new Player(40,40,'boy',[color(0,0,0,0),color(0,0,0),color(255, 211, 165),color(255,255,0),color(0,0,0,0)],{'left': 65,'right' : 68,'down' : 83,'up':87});
  areas = [
    [
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
    ]
  ];
  areag = [
    [
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
  ];
  
  b = createGraphics(areas[area][0].length*40,areas[area].length*40);
  playScreen = 'play';
  if (localStorage.hasOwnProperty("savedata") === true) {
    ppos =   JSON.parse(localStorage.getItem("savedata"));
    p1.name = ppos.name;
  } else {
    playScreen = 'entername';
  }
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
  for (var j = 0; j < 8; j ++) for (var i = 0; i < 8; i ++) if (alpha(palette[sprite[j][i]])>0) {
    fill(palette[sprite[j][i]]);
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
  b.noStroke();
  b.translate(xpos-scalar[0]*4,ypos-scalar[1]*4);
  /*
  if (scalar[0]<0) translate(-scalar[0]*8,0);
  if (scalar[1]<0) translate(0,-scalar[1]*8);
  */
  b.scale(scalar[0],scalar[1]);
  for (var j = 0; j < 8; j ++) for (var i = 0; i < 8; i ++) if (alpha(palette[sprite[j][i]])>0) {
    b.fill(palette[sprite[j][i]]);
    b.rect(i,j,1,1);
  }
  b.pop();
}

function spriteToImage(sprite,palette) {
  var img = createImage(40,40);
  img.loadPixels();
  for (var i = 0; i < 40; i++) {
    for (var j = 0; j < 40; j++) {
      img.set(i, j, palette[sprite[floor(j/5)][floor(i/5)]]);
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
  return color(cc[0],cc[1],cc[2]);
}

function Player(x,y,type,palette,inputs) {
  this.x = x; // position along x-axis
  this.y = y; // position along y-axis
  this.v = {
    'x' : 0,
    'y' : 0
  }; // JSON vector for velocity
  this.t = type;
  this.p = palette; // array of four colors
  this.i = inputs; // JSON of keycodes
  this.sprites = playerSprites;
  this.allowMove = [true,true];
  this.dir = 1;
  this.inAir = true;
  this.alternating = true;
  this.timer = 1;
  this.recovery = false;
  this.items = {
    'a' : {
      'icon' : [
        [0, 0, 0, 0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, 0, 0, 0, ],
        [1, 1, 1, 1, 1, 1, 1, 1, ],
        [1, 3, 3, 1, 2, 2, 2, 1, ],
        [1, 3, 3, 1, 1, 1, 1, 1, ],
        [1, 1, 1, 1, 1, 1, 1, 1, ],
        [1, 1, 0, 0, 0, 0, 0, 0, ],
        [1, 1, 0, 0, 0, 0, 0, 0, ],
      ],
    'iconPalette' : [color(0,0,0,0),color(0),color(255),color(0,255,0)],
    'sprites' : [
      [
        [0, 0, 0, 0, 0, 0, 0, 0, ],
        [0, 0, 0, 0, 0, 0, 0, 0, ],
        [1, 1, 1, 1, 1, 1, 1, 1, ],
        [1, 3, 3, 1, 2, 2, 2, 1, ],
        [1, 3, 3, 1, 1, 1, 1, 1, ],
        [1, 1, 1, 1, 1, 1, 1, 1, ],
        [1, 1, 0, 0, 0, 0, 0, 0, ],
        [1, 1, 0, 0, 0, 0, 0, 0, ]
      ],[
        [0, 0, 0, 0, 0, 0, 0, 0, ],
        [0, 3, 3, 3, 3, 3, 0, 0, ],
        [0, 0, 3, 2, 2, 3, 3, 0, ],
        [0, 0, 0, 3, 2, 2, 3, 3, ],
        [0, 0, 0, 3, 2, 2, 3, 3, ],
        [0, 0, 3, 2, 2, 3, 3, 0, ],
        [0, 3, 3, 3, 3, 3, 0, 0, ],
        [0, 0, 0, 0, 0, 0, 0, 0, ]
      ]
    ],
    'palettes' : [[color(0,0,0,0),color(0),color(255),color(0,255,0)]],
    'pboxes' : [],
    'cboxes' : [[0,0,1,1,35,0,0,0,false,0],[1,0,10,100,75,0,20,0,false,0],[1,0,10,100,75,0,20,0,false,8]],
    'rboxes' : []
  },
    'b' : {
      'icon' : [
        [0, 0, 0, 0, 0, 0, 2, 2, ],
        [0, 0, 0, 0, 0, 2, 2, 2, ],
        [0, 0, 0, 0, 2, 2, 2, 0, ],
        [0, 3, 0, 2, 2, 2, 0, 0, ],
        [0, 0, 3, 2, 2, 0, 0, 0, ],
        [0, 3, 1, 3, 0, 0, 0, 0, ],
        [3, 1, 3, 0, 3, 0, 0, 0, ],
        [3, 3, 0, 0, 0, 0, 0, 0, ],
      ],
      'iconPalette' : [color(0,0,0,0),color(0),color(255),color(255,0,0)],
      'sprites' : [
        [
          [0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 3, 0, 0, 0, 0, 0 ],
          [3, 3, 3, 2, 2, 2, 2, 2 ],
          [3, 3, 3, 2, 2, 2, 2, 2 ],
          [0, 0, 3, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0, 0 ]
        ]
      ],
      'palettes' : [[color(0,0,0,0),color(0),color(255),color(255,0,0)]],
      'pboxes' : [[0,0,0,0,35,5,0,0,false,0],[0,0,1,0,35,5,0,0,false,0],[0,0,2,0,35,5,0,0,false,0],[0,0,3,0,35,5,0,0,false,0],[0,0,4,0,35,5,0,0,false,0],[0,0,5,0,35,5,0,0,false,0],[0,0,6,0,35,5,0,0,false,0]],
      'cboxes' : [],
      'rboxes' : []
    },
    'atime' : 0,
    'btime' : 0,
    'btimer' : 0,
    'atimer' : 0,
  };
  this.stats = {
    'speed' : 5,
    'jump' : -15,
    'heal' : 100,
    'stam' : 30,
    'health' : 50,
    'stamMax' : 100,
    'healthMax' : 100
  };
  this.name = '';
  this.display = function() {
    if (this.animState === 'sprintItem') {
      displaySprite(playerSprites.sprinting[(floor(frameCount*0.2)%2)],this.p,[5*this.dir,5],this.x,this.y);
    } else if (this.inAir === true) {
      displaySprite(playerSprites.falling[0],this.p,[5*this.dir,5],this.x,this.y);
    } else if (this.animState === 'idle') {
      displaySprite(playerSprites.walking[0],this.p,[5*this.dir,5],this.x,this.y);
    } else if (this.animState === 'walk') {
      displaySprite(playerSprites.walking[(floor(frameCount*0.2)%4)],this.p,[5*this.dir,5],this.x,this.y);
    } else if (this.animState === 'sprint') {
      displaySprite(playerSprites.sprinting[(floor(frameCount*0.2)%2)],this.p,[5*this.dir,5],this.x,this.y);
    }
    
  };
  this.move = function() {
    this.animState = 'idle';
    
    if (keys[this.i.down] === true) {
      this.stats.speed = 10;
    } else {
      this.stats.speed = 5;
    }
    if (this.allowMove[0]===true&&keys[this.i.left] === true) {
      this.animState = 'walk';
      this.dir = -1;
      this.x-=this.stats.speed;
    }
    if (this.allowMove[1]===true&&keys[this.i.right] === true) {
      this.animState = 'walk';
      this.dir = 1;
      this.x+=this.stats.speed;
    }
    if (keys[this.i.down] === true) {
      this.animState = 'sprint';
    }
    if (this.alternating === true&&keys[this.i.select] === true) if (this.recovery ===false&&this.stats.stam>0&&this.stats.health<this.stats.healthMax) {
        this.stats.stam-=2;
        this.stats.health+=0.5;
      }
    /*if (this.animState === 'idle'&&keys[this.i.right]!==true&&keys[this.i.left]!==true) {
      this.x = floor((this.x)/40)*40+20;
    }*/
  };
  this.physics = function() {
    // gravity changes velocity
    this.alternating = !this.alternating;
    if (this.alternating ===true && this.v.y<15) {
      this.v.y +=1;
      if (keys[this.i.up]!==true) {
        this.v.y++;
      }
    }
    
    this.allowMove = [true,true];
    this.inAir = true;
    if (this.y<40*areas[area].length&&this.y>0&&this.x<40*areas[area][0].length&&this.x>0) {
      if (this.y<((40*areas[area].length)-40)&&areas[area][floor((this.y+20)/40)][floor(this.x/40)] > 0&&this.v.y>=0) {
        if (areas[area][floor((this.y+20)/40)][floor(this.x/40)] < 3) {
          this.v.y = 0;
          this.inAir = false;
          this.y = floor((this.y)/40)*40+20;
          if (keys[this.i.up] === true) {
            this.v.y = this.stats.jump;
          }
        } else if (areas[area][floor((this.y+20)/40)][floor(this.x/40)] === 3) {
          if (this.v.y>0) {
            this.stats.health-=5;
          }
        }
      }
      if (this.y>40&&areas[area][floor((this.y-20)/40)][floor(this.x/40)] === 1) {
        this.v.y = 0;
        this.y = floor((this.y)/40)*40+20;
      }
    }
    // apply gravity
    this.y+=this.v.y;
        
    if (this.y<40*areas[area].length&&this.y>0&&this.x<40*areas[area][0].length&&this.x>0) {
      if (this.x-this.stats.speed>40&&areas[area][floor(this.y/40)][floor((this.x-11)/40)] === 1) {
        this.allowMove[0] = false; // don't let them move left if a block is to the left
        this.x = floor((this.x)/40)*40+10; // set x-pos to 10 from block to the left
        if (this.animState!=='sprintItem') this.animState = 'idle'; // stop walking
        
      }
      if (this.x+this.stats.speed<40*areas[area][0].length-40&&areas[area][floor(this.y/40)][floor((this.x+10)/40)] === 1) {
        this.allowMove[1] = false; // don't let them move right if a block is to the right
        this.x = floor((this.x)/40)*40+30; // set x-pos to 10 from block to the right
        if (this.animState!=='sprintItem') this.animState = 'idle'; // stop walking
      }
    }
    
  };
  this.do = function() {
    if (this.stats.stam<=5) {
      this.recovery = true;
    }
    if (this.stats.stam>50) {
      this.recovery = false;
    }
    if (this.stats.stam<this.stats.stamMax&&frameCount%5 == 0) {
      
      this.stats.stam+=2;
      if (this.recovery === true) this.stats.stam--;
      if (this.stats.stam>this.stats.stamMax) this.stats.stam = this.stats.stamMax;
    }
    
    // item in a-slot
    if (this.items.a!=='empty') {
      if (pkey[this.i.a] === true) {
        this.items.atime = 0;
      }
      if (rkey[this.i.a] === true) {
        this.items.atimer = -1;
      }
      
      if (keys[this.i.a] === true) {
        for (var i = 0; i < this.items.a.pboxes.length; i ++) {
          if (this.items.atime === this.items.a.pboxes[i][2]&&this.items.atimer>=this.items.a.pboxes[i][2]) {
            var ito = this.items.a;
            hitboxes[hitboxes.length] = [
              0,
              ito.pboxes[i][3],
              ito.pboxes[i][4]*this.dir+this.x,
              ito.pboxes[i][5]+this.y,
              ito.pboxes[i][6]*this.dir,
              ito.pboxes[i][7],
              this.dir,
              this,
              ito.pboxes[i][8],
              spriteToImage(ito.sprites[ito.pboxes[i][0]],
              ito.palettes[ito.pboxes[i][1]])
            ];
          }
        }
        for (var i = 0; i < this.items.a.cboxes.length; i ++) {
          if ((this.items.atime+this.items.a.cboxes[i][9]) % this.items.a.cboxes[i][2] === 0) {
            var ito = this.items.a;
            hitboxes[hitboxes.length] = [
              0,
              ito.cboxes[i][3],
              ito.cboxes[i][4]*this.dir+this.x,
              ito.cboxes[i][5]+this.y,
              ito.cboxes[i][6]*this.dir,
              ito.cboxes[i][7],
              this.dir,
              this,
              ito.cboxes[i][8],
              spriteToImage(ito.sprites[ito.cboxes[i][0]],
              ito.palettes[ito.cboxes[i][1]])
            ];
          }
        }
        
        this.items.atime++;
        
      } else {
        this.items.atimer++;
      }
      for (var i = 0; i < this.items.a.rboxes.length; i ++) {
          if (this.items.atimer === this.items.a.rboxes[i][2]) {
            var ito = this.items.a;
            hitboxes[hitboxes.length] = [
              0,
              ito.rboxes[i][3],
              ito.rboxes[i][4]*this.dir+this.x,
              ito.rboxes[i][5]+this.y,
              ito.rboxes[i][6]*this.dir,
              ito.rboxes[i][7],
              this.dir,
              this,
              ito.rboxes[i][8],
              spriteToImage(ito.sprites[ito.rboxes[i][0]],
              ito.palettes[ito.rboxes[i][1]])
            ];
            
          }
      }
    }
    
    // item in b-slot
    if (this.items.b!=='empty') {
      if (pkey[this.i.b] === true) {
        this.items.btime = 0;
      }
      if (rkey[this.i.b] === true) {
        this.items.btimer = -1;
      }
      
      if (keys[this.i.b] === true) {
        for (var i = 0; i < this.items.b.pboxes.length; i ++) {
          if (this.items.btime === this.items.b.pboxes[i][2]) {
            var ito = this.items.b;
            hitboxes[hitboxes.length] = [
              0,
              ito.pboxes[i][3],
              ito.pboxes[i][4]*this.dir+this.x,
              ito.pboxes[i][5]+this.y,
              ito.pboxes[i][6]*this.dir,
              ito.pboxes[i][7],
              this.dir,
              this,
              ito.pboxes[i][8],
              spriteToImage(ito.sprites[ito.pboxes[i][0]],
              ito.palettes[ito.pboxes[i][1]])
            ];
          }
        }
        for (var i = 0; i < this.items.b.cboxes.length; i ++) {
          if (this.items.btime % this.items.b.cboxes[i][2] === 0) {
            var ito = this.items.b;
            hitboxes[hitboxes.length] = [
              0,
              ito.cboxes[i][3],
              ito.cboxes[i][4]*this.dir+this.x,
              ito.cboxes[i][5]+this.y,
              ito.cboxes[i][6]*this.dir,
              ito.cboxes[i][7],
              this.dir,
              this,
              ito.cboxes[i][8],
              spriteToImage(ito.sprites[ito.cboxes[i][0]],
              ito.palettes[ito.cboxes[i][1]])
            ];
          }
        }
        this.items.btime++;
        
      } else {
        this.items.btimer++;
      }
      for (var i = 0; i < this.items.b.rboxes.length; i ++) {
          if (this.items.btimer === this.items.b.rboxes[i][2]) {
            var ito = this.items.b;
            hitboxes[hitboxes.length] = [
              0,
              ito.rboxes[i][3],
              ito.rboxes[i][4]*this.dir+this.x,
              ito.rboxes[i][5]+this.y,
              ito.rboxes[i][6]*this.dir,
              ito.rboxes[i][7],
              this.dir,
              this,
              ito.rboxes[i][8],
              spriteToImage(ito.sprites[ito.rboxes[i][0]],
              ito.palettes[ito.rboxes[i][1]])
            ];
            
          }
      }
    }
    
  };
  this.ui = function() {
    noStroke();
    fill(0);
    rect(20,20,2*this.stats.healthMax,20);
    fill(255,0,0);
    for (var i = 0; i < this.stats.health; i +=10) {
      rect(25+i*2,25,10,10);
    }
    fill(0);
    rect(20,60,2*this.stats.stamMax,20);
    fill(255);
    if (this.recovery === true) {
      fill(sin(frameCount/10)*255);
    }
    for (var i = 0; i < this.stats.stam; i +=10) {
      rect(25+i*2,65,10,10);
    }
    ntext(this.name,50,50,2);
    push();
    strokeWeight(5);
    stroke(255);
    noFill();
    rect(255,10,50,50);
    rect(335,10,50,50);
    pop();
    ntext("B A",280,80,5);
    if (this.items.b!=='empty') {
    displaySprite(this.items.b.icon,this.items.b.iconPalette,[5,5],280,35);
    }
    if (this.items.a!=='empty') {
    displaySprite(this.items.a.icon,this.items.a.iconPalette,[5,5],360,35);
    }
    
    if (pkey[this.i.start] === true) {
      playScreen = 'forge';
    }
  };
  this.forge = function() {
    if (pkey[this.i.select] === true) {
      playScreen = 'play';
    }
    if (pkey[this.i.a] === true) {
      
    }
    if (keys[this.i.b] === true) {
      var channel = 1;
      if (keys[this.i.left] === true) channel = 0;
      if (keys[this.i.right] === true) channel = 2;
      if (keys[this.i.up] === true) {
        if (channel === 0) itemInEdit.iconPalette[state] = altercolor(itemInEdit.iconPalette[state],1,0,0);
        if (channel === 1) itemInEdit.iconPalette[state] = altercolor(itemInEdit.iconPalette[state],0,1,0);
        if (channel === 2) itemInEdit.iconPalette[state] = altercolor(itemInEdit.iconPalette[state],0,0,1);
      }
      if (keys[this.i.down] === true) {
        if (channel === 0) itemInEdit.iconPalette[state] = altercolor(itemInEdit.iconPalette[state],-1,0,0);
        if (channel === 1) itemInEdit.iconPalette[state] = altercolor(itemInEdit.iconPalette[state],0,-1,0);
        if (channel === 2) itemInEdit.iconPalette[state] = altercolor(itemInEdit.iconPalette[state],0,0,-1);
      }
    }
    
    
  };
}

function areaDis(a) {
  noStroke();
  for (var j = 0; j < a.length; j ++) {
    for (var i = 0; i < a[0].length; i ++) {
      if (a[j][i]>0) {
        //fill(50,255,50);
        //rect(i*40,j*40,40,40);
        
        displayTile(tiles[area][a[j][i]],[color(50, 25, 1),color(122, 52, 2),color(255,100,4),color(0,255,0),color(0,0,0,0)],[5,5],i*40+20,j*40+20);
        
      }
    }
  }
}

function Save() {
  var sda = {
    'name' : p1.name
  };
  localStorage.setItem("savedata",JSON.stringify(sda));
}
function Load() {
  if (localStorage.hasOwnProperty("savedata") === true) {
    ppos =   JSON.parse(localStorage.getItem("savedata"));
  }
}

function scrollTranslation(listPoint,scroll,listLength,disLength) {
  listLength-=disLength;
  var scrollPercent = -scroll/disLength;
  var translation = scrollPercent*listLength;
  return floor(translation+listPoint);
}

function editData(s) {
  var ar = [48,49,50,51];
  for (var i = 0; i < 4; i ++) {
    if (keys[ar[i]] === true) {
      state = i;
    }
  }
  if (mouseY<400&&mouseY>0&&mouseX>0&&mouseX<400&&mouseIsPressed) {
    s[floor(mouseY/50)][floor(mouseX/50)] = state;
  }
  
}

function handleboxes() {
    
    for (var i = 0; i < hitboxes.length; i ++) {
      
      push();
        translate(hitboxes[i][2],hitboxes[i][3]);
        scale(hitboxes[i][6],1);
        image(hitboxes[i][9],-20,-20);
      pop();
      
      
      if (hitboxes[i][0]<5) hitboxes[i][7].animState = 'sprintItem';
      
      hitboxes[i][2]+=hitboxes[i][4];
      hitboxes[i][3]+=hitboxes[i][5];
      if (hitboxes[i][8] === true&&alt === true) hitboxes[i][5] ++;
      hitboxes[i][0]++;
    }
    for (var i = 0; i < hitboxes.length; i ++) {
      if (
      hitboxes[i][0]>=hitboxes[i][1]||
      (hitboxes[i][2]<0||hitboxes[i][3]<0||hitboxes[i][3]>areas[area].length*40||hitboxes[i][2]>areas[area][0].length*40)||
      (hitboxes[i][8] === true&&hitboxes[i][2]>0&&hitboxes[i][3]>0&&hitboxes[i][2]<areas[area][0].length*40&&hitboxes[i][3]<areas[area].length*40&&areas[area][floor(hitboxes[i][3]/40)][floor(hitboxes[i][2]/40)] === 1)
      ) {
        hitboxes.splice(i,1);
      }
    }
};
function boxbutton(x,y,data) {
  push();
  translate(x,y);
  fill(0,0,0);
  stroke(200,200,100);
  rect(0,0,100,50);
  fill(255);
  stroke(255);
  text('sp: '+data[0],0,10);
  text('pa: '+data[1],0,20);
  text('ti: '+data[2],0,30);
  text('x: '+data[4],0,40);
  text('y: '+data[5],0,50);
  text('vx: '+data[6],50,10);
  text('vy: '+data[7],50,20);
  text('ph: '+data[8],50,30);
  text('cd: '+data[9],50,40);
  text('dt: '+data[3],50,50);
  noStroke();
  pop();
}
var alt = true;
function draw() {
  alt = !alt;
  if (playScreen === 'entername') {
    background(0,0,0);
    ntext("type your name here",40,200,5);
    ntext(p1.name,40,300,5);
    if (keyIsPressed === true&&press === true&&keys[8]!==true&&keys[ALT]!==true&&keys[SHIFT]!==true&&keys[CONTROL]!==true&&keys[ENTER]!==true) {
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
  } else if (playScreen === 'play'){
    frameRate(60);
    push();
    if (twoplayer === true) {
      translate(-floor((p1.x+p2.x)/2)+width/2,0/*-p1.y+height/2*/);
    } else {
      translate(-p1.x+width/2,0/*-p1.y+height/2*/);
    }
    dattimer ++;
    background(0);
    if (dattimer<2) {
      b.background(15,120,255);
      areaDis(areag[area]);
    }
    image(b,0,0);
    
    p1.display();
    p1.move();
    handleboxes();
    p1.do();
    p1.physics();

    if (twoplayer === true) {
      p2.display();
      p2.do();
      p2.move();
      p2.physics();
    }
    pop();
    p1.ui();
    fill(0,255,0);
    text('fps: '+floor(frameRate()*100)/100,20,100);
  
  } else if (playScreen === 'forge') {
    background(255,255,255);
    fill(
      (sin((frameCount+0)/35)*(255/10))+(255/2),
      (sin((frameCount+200)/35)*(255/10))+(255/2),
      (sin((frameCount+1500)/35)*(255/10))+(255/2)
    );
    rect(0,0,400,400);
    
    displaySprite(itemInEdit.icon,itemInEdit.iconPalette,[50,50],200,200);
    editData(itemInEdit.icon);
    
    rect(40,450,420,50);
    
    displaySprite(itemInEdit.icon,[color(0,0,0,0),color(0),color(255),color(255,0,0)],[5,5],55+scrollTranslation(25,mouseX-50,50*(itemInEdit.sprites.length+2),400),475);
    for (var i = 0; i < itemInEdit.sprites.length; i ++) {
      displaySprite(itemInEdit.sprites[i],[color(0,0,0,0),color(0),color(255),color(255,0,0)],[5,5],55+floor(scrollTranslation(50*(i+1)+25,mouseX-50,50*(itemInEdit.sprites.length+2),400)),475);
    }
    displaySprite(plus,[color(0,0,0,0),color(0),color(255),color(0,255,0)],[5,5],55+scrollTranslation(50*(itemInEdit.sprites.length+2)-25,mouseX-50,50*(itemInEdit.sprites.length+2),400),475);
    
    cursor('NONE');
    stroke(255-red(itemInEdit.iconPalette[state]),255-green(itemInEdit.iconPalette[state]),255-blue(itemInEdit.iconPalette[state]),255);
    fill(itemInEdit.iconPalette[state]);
    if (state === 0) {
      fill(
      (sin((frameCount+0)/35)*(255/10))+(255/2),
      (sin((frameCount+200)/35)*(255/10))+(255/2),
      (sin((frameCount+1500)/35)*(255/10))+(255/2)
    );
    }
    
    rect(mouseX-5,mouseY-5,10,10);
    p1.forge();
    
  }
  
  rkey = [];
  pkey = [];
  if (keys[192] === true) {
    localStorage.removeItem("savedata");
  }
}
