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
var spriteInEdit;
var paletteInEdit = [];
var itemInEdit;
var boxInEdit;
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
    'iconPalette' : [[0,0,0,0],[0],[255],[0,255,0]],
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
    'palettes' : [[[0,0,0,0],[0],[255],[0,255,0]]],
    'pboxes' : [],
    'cboxes' : [[0,0,1,1,35,0,0,0,false,0],[1,0,10,100,75,0,20,0,false,0],[1,0,10,100,75,0,20,0,false,8]],
    'rboxes' : []
  };
  spriteInEdit = itemInEdit.icon;
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
  
  b = createGraphics(areas[area][0].length*8,areas[area].length*8);
  playScreen = 'play';
  if (localStorage.hasOwnProperty("savedata") === true) {
    ppos =   JSON.parse(localStorage.getItem("savedata"));
    p1.name = ppos.name;
    p1.items.a = ppos.itemA;
    p1.items.b = ppos.itemB;
  } else {
    playScreen = 'entername';
  }
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
    'iconPalette' : [[0,0,0,0],[0],[255],[0,255,0]],
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
    'palettes' : [[[0,0,0,0],[0],[255],[0,255,0]]],
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
      'iconPalette' : [[0,0,0,0],[0],[255],[255,0,0]],
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
      'palettes' : [[[0,0,0,0],[0],[255],[255,0,0]]],
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
            var alter = 0;
            if (this.items.a.pboxes[i][8] === true) alter = this.v.y;
            hitboxes[hitboxes.length] = [
              0,
              ito.pboxes[i][3],
              ito.pboxes[i][4]*this.dir+this.x,
              ito.pboxes[i][5]+this.y,
              ito.pboxes[i][6]*this.dir,
              ito.pboxes[i][7]+alter*2,
              this.dir,
              this,
              ito.pboxes[i][8],
              spriteToImage(ito.sprites[ito.pboxes[i][0]],ito.palettes[ito.pboxes[i][1]])
            ];
          }
        }
        for (var i = 0; i < this.items.a.cboxes.length; i ++) {
          if ((this.items.atime+this.items.a.cboxes[i][9]) % this.items.a.cboxes[i][2] === 0) {
            var ito = this.items.a;
            var alter = 0;
            if (this.items.a.cboxes[i][8] === true) alter = this.v.y;
            hitboxes[hitboxes.length] = [
              0,
              ito.cboxes[i][3],
              ito.cboxes[i][4]*this.dir+this.x,
              ito.cboxes[i][5]+this.y,
              ito.cboxes[i][6]*this.dir,
              ito.cboxes[i][7]+alter*2,
              this.dir,
              this,
              ito.cboxes[i][8],
              spriteToImage(ito.sprites[ito.cboxes[i][0]],ito.palettes[ito.cboxes[i][1]])
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
            var alter = 0;
            if (this.items.a.rboxes[i][8] === true) alter = this.v.y;
            hitboxes[hitboxes.length] = [
              0,
              ito.rboxes[i][3],
              ito.rboxes[i][4]*this.dir+this.x,
              ito.rboxes[i][5]+this.y,
              ito.rboxes[i][6]*this.dir,
              ito.rboxes[i][7]+alter*2,
              this.dir,
              this,
              ito.rboxes[i][8],
              spriteToImage(ito.sprites[ito.rboxes[i][0]],ito.palettes[ito.rboxes[i][1]])
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
            var alter = 0;
            if (this.items.b.pboxes[i][8] === true) alter = this.v.y;
            hitboxes[hitboxes.length] = [
              0,
              ito.pboxes[i][3],
              ito.pboxes[i][4]*this.dir+this.x,
              ito.pboxes[i][5]+this.y,
              ito.pboxes[i][6]*this.dir,
              ito.pboxes[i][7]+alter*2,
              this.dir,
              this,
              ito.pboxes[i][8],
              spriteToImage(ito.sprites[ito.pboxes[i][0]],ito.palettes[ito.pboxes[i][1]])
            ];
          }
        }
        for (var i = 0; i < this.items.b.cboxes.length; i ++) {
          if (this.items.btime % this.items.b.cboxes[i][2] === 0) {
            var ito = this.items.b;
            var alter = 0;
            if (this.items.b.cboxes[i][8] === true) alter = this.v.y;
            hitboxes[hitboxes.length] = [
              0,
              ito.cboxes[i][3],
              ito.cboxes[i][4]*this.dir+this.x,
              ito.cboxes[i][5]+this.y,
              ito.cboxes[i][6]*this.dir,
              ito.cboxes[i][7]+alter*2,
              this.dir,
              this,
              ito.cboxes[i][8],
              spriteToImage(ito.sprites[ito.cboxes[i][0]],ito.palettes[ito.cboxes[i][1]])
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
            var alter = 0;
            if (this.items.b.rboxes[i][8] === true) alter = this.v.y;
            hitboxes[hitboxes.length] = [
              0,
              ito.rboxes[i][3],
              ito.rboxes[i][4]*this.dir+this.x,
              ito.rboxes[i][5]+this.y,
              ito.rboxes[i][6]*this.dir,
              ito.rboxes[i][7]+alter*2,
              this.dir,
              this,
              ito.rboxes[i][8],
              spriteToImage(ito.sprites[ito.rboxes[i][0]],ito.palettes[ito.rboxes[i][1]])
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
    if (keys[this.i.b] === true) {
      var channel = 1;
      if (keys[this.i.left] === true) channel = 0;
      if (keys[this.i.right] === true) channel = 2;
      
        if (paletteInEdit[state].length === 1) paletteInEdit[state] = [paletteInEdit[state][0],paletteInEdit[state][0],paletteInEdit[state][0],255];
        if (paletteInEdit[state].length === 3) paletteInEdit[state] = [paletteInEdit[state][0],paletteInEdit[state][1],paletteInEdit[state][2],255];
        if (paletteInEdit[state].length === 4) paletteInEdit[state] = [paletteInEdit[state][0],paletteInEdit[state][1],paletteInEdit[state][2],paletteInEdit[state][3]];
      
      if (keys[this.i.up] === true) {
        if (channel === 0) paletteInEdit[state][0]++;
        if (channel === 1) paletteInEdit[state][1]++;
        if (channel === 2) paletteInEdit[state][2]++;
      }
      if (keys[this.i.down] === true) {
        if (channel === 0) paletteInEdit[state][0]--;
        if (channel === 1) paletteInEdit[state][1]--;
        if (channel === 2) paletteInEdit[state][2]--;
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
        
        displayTile(tiles[area][a[j][i]],[[50, 25, 1],[122, 52, 2],[255,100,4],[0,255,0],[0,0,0,0]],[5,5],i*40+20,j*40+20);
        
      }
    }
  }
}

function cloneNumArray(da) {
  var ar = [];
  for (var i = 0; i < da.length; i ++) {
    ar[i] = da[i]+0;
  }
}

function Save() {
  var sda = {
    'name' : p1.name,
    'itemA': p1.items.a,
    'itemB': p1.items.b
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
        translate(floor(hitboxes[i][2]/5)*5,floor(hitboxes[i][3]/5)*5);
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

function enterNum(num) {
  var pkeys = [48,49,50,51,52,53,54,55,56,57];
  var sign = 1;
  if (num!==0) {
    sign = (num/abs(num));
  }
  
  for (var i = 0; i < pkeys.length; i ++) {
    if (pkey[pkeys[i]] === true) {
      return ((abs(num)*10)+i)*sign;
    }
  }
  if (pkey[8] === true) {
    return floor(abs(num)/10)*sign;
  }
  if (pkey[189] === true) {
    num = -num;
  }
  return num;
}

function editBoxWindow(x,y,data) {
  push();
  translate(x,y);
  fill(0,0,0);
  stroke(200,200,100);
  rect(0,0,300,150);
  fill(255);
  stroke(255);
  translate(0,15);
  y+=15;
  
  if (mouseX-x>0&&mouseY-y>0&&mouseY-y<10&&mouseX-x<300) {
    if (enterNum(data[0])<itemInEdit.sprites.length&&enterNum(data[0])>=0) data[0] = enterNum(data[0])+0;
    fill(255,255,0);
  }
  text('sprite ID: '+data[0],10,10);
  fill(255);
  
  if (mouseX-x>0&&mouseY-y>12&&mouseY-y<22&&mouseX-x<300) {
    if (enterNum(data[1])<itemInEdit.palettes.length&&enterNum(data[0])>=0) data[1] = enterNum(data[1])+0;
    fill(255,255,0);
  }
  text('palette ID: '+data[1],10,22);
  fill(255);
  
  if (mouseX-x>0&&mouseY-y>24&&mouseY-y<34&&mouseX-x<300) {
    if (enterNum(data[2])>=0) data[2] = enterNum(data[2])+0;
    fill(255,255,0);
  }
  text('when to spawn: '+data[2],10,34);
  fill(255);
  
  if (mouseX-x>0&&mouseY-y>36&&mouseY-y<46&&mouseX-x<300) {
    data[4] = enterNum(data[4])+0;
    fill(255,255,0);
  }
  text('x-start: '+data[4],10,46);
  fill(255);
  
  if (mouseX-x>0&&mouseY-y>48&&mouseY-y<58&&mouseX-x<300) {
    data[5] = enterNum(data[5])+0;
    fill(255,255,0);
  }
  text('y-start: '+data[5],10,58);
  fill(255);
  
  if (mouseX-x>0&&mouseY-y>60&&mouseY-y<70&&mouseX-x<300) {
    data[6] = enterNum(data[6])+0;
    fill(255,255,0);
  }
  text('x-velocity: '+data[6],10,70);
  fill(255);
  
  if (mouseX-x>0&&mouseY-y>72&&mouseY-y<82&&mouseX-x<300) {
    data[7] = enterNum(data[7]+0);
    fill(255,255,0);
  }
  text('y-velocity: '+data[7],10,82);
  
  fill(255);
  text('affected by physics: ',10,94);
  if (data[8] === false) fill(0,0,0);
  else fill (255);
  rect(textWidth('affected by physics: ')+8,84,10,10);
  if (mouseFrame === true && mouseX-x>0&&mouseX-x<textWidth('affected by physics: ')+18&&mouseY-y>84&&mouseY-y<94) data[8] = !data[8];
  fill(255);
  if (mouseX-x>0&&mouseY-y>96&&mouseY-y<106&&mouseX-x<300) {
    data[9] = enterNum(data[9])+0;
    fill(255,255,0);
  }
  text('spawn clock offset: '+data[9],10,106);
  fill(255);
  if (mouseX-x>0&&mouseY-y>108&&mouseY-y<118&&mouseX-x<300) {
    data[3] = enterNum(data[3])+0;
    fill(255,255,0);
  }
  text('amount of time existing: '+data[3],10,118);
  
  noStroke();
  pop();
  return data;
}

var alt = true;
function forge() {
  // background stuff {
    background(255,255,255);
    fill(
      (sin((frameCount+0)/35)*(255/10))+(255/2),
      (sin((frameCount+200)/35)*(255/10))+(255/2),
      (sin((frameCount+1500)/35)*(255/10))+(255/2)
    );
    rect(0,0,400,400);
    
    
    //} edit Sprite & display
    displaySprite(spriteInEdit,paletteInEdit,[50,50],200,200);
    editData(spriteInEdit);
    
    
    //sprite selector bar {
    rect(40,450,420,50);
    var spx = 55+scrollTranslation(25,mouseX-50,50*(itemInEdit.sprites.length+2),400);
    if (mouseX<spx+20&&mouseX>spx-20&&mouseY>450&&mouseY<500) {
        push();
        noFill();
        rect(spx-20,455,40,40);
        pop();
        
        if (mouseIsPressed === true) {
          spriteInEdit = itemInEdit.icon;
        }
      }
    displaySprite(itemInEdit.icon,[[0,0,0,0],[0],[255],[255,0,0]],[5,5],56+floor(scrollTranslation(25,mouseX-50,50*(itemInEdit.sprites.length+2),400)),475);
    for (var i = 0; i < itemInEdit.sprites.length; i ++) {
      displaySprite(itemInEdit.sprites[i],[[0,0,0,0],[0],[255],[255,0,0]],[5,5],55+floor(scrollTranslation(50*(i+1)+25,mouseX-50,50*(itemInEdit.sprites.length+2),400)),475);
      var spx = 55+floor(scrollTranslation(50*(i+1)+25,mouseX-50,50*(itemInEdit.sprites.length+2),400));
      if (mouseX<spx+20&&mouseX>spx-20&&mouseY>450&&mouseY<500) {
        push();
        noFill();
        rect(spx-20,455,40,40);
        pop();
        if (pkey[8] === true&&i>0) {
          itemInEdit.sprites.splice(i,1);
        }
        if (mouseIsPressed === true) {
          spriteInEdit = itemInEdit.sprites[i];
        }
      }
    }
    displaySprite(plus,[[0,0,0,0],[0],[255],[0,255,0]],[5,5],55+scrollTranslation(50*(itemInEdit.sprites.length+2)-25,mouseX-50,50*(itemInEdit.sprites.length+2),400),475);
    var spx = 55+scrollTranslation(50*(itemInEdit.sprites.length+2)-25,mouseX-50,50*(itemInEdit.sprites.length+2),400);
    if (mouseX<spx+20&&mouseX>spx-20&&mouseY>450&&mouseY<500) {
        push();
        noFill();
        rect(spx-20,455,40,40);
        pop();
        if (mouseFrame === true) {
          itemInEdit.sprites[itemInEdit.sprites.length] = emptySprite();
          for (var j = 0; j < itemInEdit.sprites[itemInEdit.sprites.length-1].length; j++) {
            for (var i = 0; i < itemInEdit.sprites[itemInEdit.sprites.length-1][j].length; i++) {
              itemInEdit.sprites[itemInEdit.sprites.length-1][j][i] = spriteInEdit[j][i]+0;
            }
          }
        }
      }
      
    //} palette selector {
     rect(40,525,420,50);
    var spx = 55+scrollTranslation(25,mouseX-50,50*(itemInEdit.palettes.length+2),400);
    if (mouseX<spx+20&&mouseX>spx-20&&mouseY>525&&mouseY<575) {
        push();
        noFill();
        rect(spx-20,530,40,40);
        pop();
        if (mouseIsPressed === true) {
          paletteInEdit = itemInEdit.iconPalette;
        }
      }
      push();
      translate(spx-20,525);
      fill(newcolor(itemInEdit.iconPalette[1]));
      rect(0,5,15,15);
      fill(newcolor(itemInEdit.iconPalette[2]));
      rect(13,18,15,15);
      fill(newcolor(itemInEdit.iconPalette[3]));
      rect(25,30,15,15);
      
      pop();
    for (var i = 0; i < itemInEdit.palettes.length; i ++) {
      var spx = 55+floor(scrollTranslation(50*(i+1)+25,mouseX-50,50*(itemInEdit.palettes.length+2),400));
      push();
      translate(spx-20,525);
      fill(itemInEdit.palettes[i][1]);
      rect(0,5,15,15);
      fill(itemInEdit.palettes[i][2]);
      rect(13,18,15,15);
      fill(itemInEdit.palettes[i][3]);
      rect(25,30,15,15);
      
      pop();
      if (mouseX<spx+20&&mouseX>spx-20&&mouseY>525&&mouseY<575) {
        push();
        noFill();
        rect(spx-20,530,40,40);
        pop();
        if (pkey[8] === true&&i>0) {
          itemInEdit.palettes.splice(i,1);
        }
        if (mouseIsPressed === true) {
          paletteInEdit = itemInEdit.palettes[i];
        }
      }
    }
    displaySprite(plus,[[0,0,0,0],[0],[255],[0,255,0]],[5,5],55+scrollTranslation(50*(itemInEdit.palettes.length+2)-25,mouseX-50,50*(itemInEdit.palettes.length+2),400),550);
    var spx = 55+scrollTranslation(50*(itemInEdit.palettes.length+2)-25,mouseX-50,50*(itemInEdit.palettes.length+2),400);
    if (mouseX<spx+20&&mouseX>spx-20&&mouseY>525&&mouseY<575) {
        push();
        noFill();
        rect(spx-20,530,40,40);
        pop();
        if (mouseFrame === true) {
          itemInEdit.palettes[itemInEdit.palettes.length] = [[0,0,0,0],[0],[255],[255,0,0]];
          
        }
      }
      
      //} hitbox selectors {
      fill(
      (sin((frameCount+0)/35)*(255/10))+(255/2),
      (sin((frameCount+200)/35)*(255/10))+(255/2),
      (sin((frameCount+1500)/35)*(255/10))+(255/2)
    );
      stroke(255);
      rect(450,50,50,300);
      rect(550,50,50,300);
      rect(650,50,50,300);
    for (var i = 0; i < itemInEdit.pboxes.length; i ++) {
      var py = 75+scrollTranslation(i*50,mouseY-75,50*(itemInEdit.pboxes.length+1),300);
      displaySprite(itemInEdit.sprites[itemInEdit.pboxes[i][0]],itemInEdit.palettes[itemInEdit.pboxes[i][1]],[5,5],475,py);
      var spx = py;
       if (mouseY<spx+20&&mouseY>spx-20&&mouseX>450&&mouseX<500) {
        push();
        noFill();
        stroke(255);
        rect(455,spx-20,40,40);
        pop();
        if (pkey[8] === true) {
          itemInEdit.pboxes.splice(i,1);
        }
        if (mouseFrame === true) {
          boxInEdit = itemInEdit.pboxes[i];
        }
      }
    }
    for (var i = 0; i < itemInEdit.cboxes.length; i ++) {
      var py = 75+scrollTranslation(i*50,mouseY-75,50*(itemInEdit.cboxes.length+1),300);
      displaySprite(itemInEdit.sprites[itemInEdit.cboxes[i][0]],itemInEdit.palettes[itemInEdit.cboxes[i][1]],[5,5],575,py);
      var spx = py;
       if (mouseY<spx+20&&mouseY>spx-20&&mouseX>550&&mouseX<600) {
        push();
        noFill();
        stroke(255);
        rect(555,spx-20,40,40);
        pop();
        if (pkey[8] === true) {
          itemInEdit.cboxes.splice(i,1);
        }
        if (mouseFrame === true) {
          boxInEdit = itemInEdit.cboxes[i];
        }
      }
    }
    for (var i = 0; i < itemInEdit.rboxes.length; i ++) {
      var py = 75+scrollTranslation(i*50,mouseY-75,50*(itemInEdit.rboxes.length+1),300);
      displaySprite(itemInEdit.sprites[itemInEdit.rboxes[i][0]],itemInEdit.palettes[itemInEdit.rboxes[i][1]],[5,5],675,py);
      var spx = py;
       if (mouseY<spx+20&&mouseY>spx-20&&mouseX>650&&mouseX<700) {
        push();
        noFill();
        stroke(255);
        rect(655,spx-20,40,40);
        pop();
        if (pkey[8] === true) {
          itemInEdit.rboxes.splice(i,1);
        }
        if (mouseFrame === true) {
          boxInEdit = itemInEdit.rboxes[i];
        }
      }
    }
    var py = 75+scrollTranslation(itemInEdit.pboxes.length*50,mouseY-75,50*(itemInEdit.pboxes.length+1),300);
    displaySprite(plus,[[0,0,0,0],[0],[255],[0,255,0]],[5,5],475,py);
    var spx = py;
       if (mouseY<spx+20&&mouseY>spx-20&&mouseX>450&&mouseX<500) {
        push();
        noFill();
        stroke(255);
        rect(455,spx-20,40,40);
        pop();
        if (mouseFrame === true) {
          itemInEdit.pboxes[itemInEdit.pboxes.length] = [0,0,1,1,35,0,0,0,false,0];
          boxInEdit = itemInEdit.pboxes[itemInEdit.pboxes.length-1];
        }
      }
    
     py = 75+scrollTranslation(itemInEdit.cboxes.length*50,mouseY-75,50*(itemInEdit.cboxes.length+1),300);
    displaySprite(plus,[[0,0,0,0],[0],[255],[0,255,0]],[5,5],575,py);
    var spx = py;
       if (mouseY<spx+20&&mouseY>spx-20&&mouseX>550&&mouseX<600) {
        push();
        noFill();
        stroke(255);
        rect(555,spx-20,40,40);
        pop();
        if (mouseFrame === true) {
          itemInEdit.cboxes[itemInEdit.cboxes.length] = [0,0,1,1,35,0,0,0,false,0];
          boxInEdit = itemInEdit.cboxes[itemInEdit.cboxes.length-1];
        }
      }
    
     py = 75+scrollTranslation(itemInEdit.rboxes.length*50,mouseY-75,50*(itemInEdit.rboxes.length+1),300);
    displaySprite(plus,[[0,0,0,0],[0],[255],[0,255,0]],[5,5],675,py);
    var spx = py;
       if (mouseY<spx+20&&mouseY>spx-20&&mouseX>650&&mouseX<700) {
        push();
        noFill();
        stroke(255);
        rect(655,spx-20,40,40);
        pop();
        if (mouseFrame === true) {
          itemInEdit.rboxes[itemInEdit.rboxes.length] = [0,0,1,1,35,0,0,0,false,0];
          boxInEdit = itemInEdit.rboxes[itemInEdit.rboxes.length-1];
        }
      }
      //}hitbox editing window
      fill(255);
      rect(445,350,300,300);
      rect(400,0,500,50);
      rect(0,400,50,500);
      boxInEdit = editBoxWindow(475,425,boxInEdit);
      
    //equip to slot {
    fill(
      (sin((frameCount+0)/35)*(255/10))+(255/2),
      (sin((frameCount+200)/35)*(255/10))+(255/2),
      (sin((frameCount+1500)/35)*(255/10))+(255/2)
    );
    rect(750,50,50,100);
    rect(750,250,50,100);
    ntext('b',775,125,5);
    ntext('a',775,325,5);
    displaySprite(p1.items.b.icon,p1.items.b.iconPalette,[5,5],775,75);
    displaySprite(p1.items.a.icon,p1.items.a.iconPalette,[5,5],775,275);
    if (mouseFrame===true) {
      if (mouseX>750) {
        if (mouseY>50&&mouseY<150) {
          p1.items.b = JSON.parse(JSON.stringify(itemInEdit));
        }
        if (mouseY>250&&mouseY<350) {
          p1.items.a = JSON.parse(JSON.stringify(itemInEdit));
        }
      }
    }
    if (pkey[32]===true) {
      if (mouseX>750) {
        if (mouseY>50&&mouseY<150) {
          itemInEdit = JSON.parse(JSON.stringify(p1.items.b));
        }
        if (mouseY>250&&mouseY<350) {
          itemInEdit = JSON.parse(JSON.stringify(p1.items.a));
        }
      }
    }
  //}
    //cursor{
    cursor('NONE');
    stroke(255-red(paletteInEdit[state]),255-green(paletteInEdit[state]),255-blue(paletteInEdit[state]),255);
    fill(paletteInEdit[state]);
    if (state === 0) {
      fill(
      (sin((frameCount+0)/35)*(255/10))+(255/2),
      (sin((frameCount+200)/35)*(255/10))+(255/2),
      (sin((frameCount+1500)/35)*(255/10))+(255/2)
    );
    }
    
    
        
    
    rect(mouseX-5,mouseY-5,10,10);
    //}
    p1.forge();
    
    
    
}
function draw() {
  noSmooth();
  alt = !alt;
  if (playScreen === 'entername') {
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
    push();
    scale(5);
    image(b,0,0);
    pop();
    p1.display();
    p1.move();
    handleboxes();
    p1.do();
    p1.physics();

    
    pop();
    p1.ui();
    fill(0,255,0);
    text('fps: '+floor(frameRate()*100)/100,20,100);
  
  } else if (playScreen === 'forge') {
    forge();
  }
  mouseFrame = false;
  if (keys[192] === true) {
    localStorage.removeItem("savedata");
  }
  if (pkey[27] === true) {
    Save();
  }
  rkey = [];
  pkey = [];
  
}
