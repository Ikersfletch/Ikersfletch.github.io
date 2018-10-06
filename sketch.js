
var keys = [];
var pkey = [];
var rkey = [];
keyPressed = function() {
    if (keys[keyCode] === false) {
      pkey[keyCode] = 1;
    }
    keys[keyCode] = true;
    if (keys[keyCode] === true) {
      pkey[keyCode] = 2;
    }
};
keyReleased = function() {
    if (keys[keyCode] === true) {
      rkey[keyCode] = 1;
    }
    keys[keyCode] = false;
    if (keys[keyCode] === false) {
      rkey[keyCode] = 2;
    }
};

function rotateIt(cx, cy, x, y, angle) {
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
        return [nx, ny];
}



function returnChunk() {
  return {
    "poles" : [
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]]
      ],
    "wallsX" : [
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]]
      ],
    "wallsY" : [
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]]
    ],
    "floors" : [
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]]
    ],
    "stairs" : [
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]],
      [[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]],[0,[155,155,155]]]
    ]
  };
}

var p1;
var cs;
var di;
var test;
var ui;
function setup() {
  createCanvas(screen.width-16, screen.height-16);

  p1 = new Player(0,0,50,"none","none",[],90,color(0,255,255),50);
  
  cs =  [
    new chunk(returnChunk(),0,0,0),
    new chunk(returnChunk(),0,0,1),
    new chunk(returnChunk(),0,0,2),
    new chunk(returnChunk(),0,0,3),
    new chunk(returnChunk(),0,0,4),
    new chunk(returnChunk(),0,0,5),
];
  di = createGraphics(screen.width-14, screen.height-14,WEBGL);
  ui = createGraphics(screen.width-14, screen.height-14);
}


var bc = [255, 210, 132];
var wallcolorpush = [155,155,155];

function Player(x,y,z,l,r,equip,skin,shirt,hair) {
  this.x  = x;
  this.y = y;
  this.z = z;
  this.r = 0;
  this.hands = {
    "l" : l,
    "r" : r
  };
  this.equip = equip;
  this.skin = skin;
  this.shirt = shirt;
  this.hair = hair;
  this.health = 99;
  this.a = 0;
  this.mode = "poles";
  this.mod = 0;
  this.display = function(rc) {
    this.a-=0.05;
    if (sin(this.a) === 0) {
      this.a = 0;
    }
    var s = 0;
    if (keys[SHIFT] === true) {
      s = random(-0.5,0.5);
    }
    di.push();

    
    di.translate(this.x,this.y,this.z+1);
    di.rotateZ(-rc*(PI/180)-(HALF_PI));
    di.scale(1,1,0);
    di.fill(0,0,0);
    di.noStroke();
    di.torus(15,2);
    
    di.noFill();
    di.strokeWeight(4);
    di.stroke(255,255,255);
    di.arc(0,0,30,30,0,(2*PI)*(this.health/100));
    di.pop();
    
    di.strokeWeight(1);
    di.noStroke();
    
    di.push();
    di.fill(shirt);
    di.translate(this.x,this.y,this.z+15+s*5+sin(this.a/4)*2);
    di.rotateZ(-this.r*(PI/180));
    di.rotateX(90*(PI/180));
    di.cone(10,30); // the shirt
    di.fill(bc[0]*(this.skin/100),bc[1]*(this.skin/100),bc[2]*(this.skin/100));
    di.translate(0,10,0);
    di.sphere(10); // the head
    
    di.push(); // the eyes
    di.stroke(255,255,255);
    di.translate(0,0,10);
    di.fill(0,0,0);
    di.ellipse(-3.5,0,4,6);
    di.ellipse(3.5,0,4,6);
    di.pop();
    
    di.pop();
  };
  this.move = function(rc) {
    var s = 1;
    if (keys[SHIFT] === true&&this.health>2) {
      s ++;
    } else if (this.health<99&&this.health>0){
      this.health *=1.03;
    }
    var d = rotateIt(0,0,0,-5*s,this.r);
    if (keys[SHIFT] === true&&this.health>1) {
        di.push();
        di.fill(255,255,255);
        
        di.translate(this.x-d[0]*random(1.5),this.y-d[1]*random(1.5),this.z+4);
        
        di.sphere(8);
        di.translate(-d[0]*random(1),-d[1]*random(1),-10);
        di.sphere(7);
        di.pop();
        this.health-=0.5;
        this.a++;
      }
    var move = false;
    if (keys[87] === true) {
      this.r = rc;
      move = true;
    }
    if (keys[83] === true) {
      
      this.r = rc+180;
      move = true;
    }
    if (keys[65] === true) {
      
      this.r = rc+90;
      move = true;
      if (keys[87] === true) {
        this.r = rc+45;
      }
      if (keys[83] === true) {
        this.r = rc+135;
      }
    }
    if (keys[68] === true) {
      
      this.r = rc-90;
      move = true;
      if (keys[87] === true) {
        this.r = rc-45;
      }
      if (keys[83] === true) {
        this.r = rc-135;
      }
    }
    if (move === true) {
      this.x+=d[0];
      this.y+=d[1];
      this.a++;
    }
    
  };
  this.build = function(chunkd,rc) {
    this.floorz = 0;
    this.inside = false;
    if (pkey[49] === 2) {
      if (this.mode!=="poles") {
        this.mod = 0;
      } else if (this.mod<3){
       this.mod++;
      } else {
       this.mod = 0;
      }
      this.mode = "poles";
      
    }
    if (pkey[50] === 2) {
      if (this.mode!=="floors") {
       this.mod = 1;
      } else if (this.mod<2){
       this.mod++;
      } else {
        this.mod = 1;
      }
      this.mode = "floors";
    }
    if (pkey[51] === 2) {
      if (this.mode!=="wallsX") {
       this.mod = 0;
      } else if (this.mod<1){
       this.mod++;
      } else {
       this.mod = 0;
      }
      this.mode = "wallsX";
    }
    if (pkey[52] === 2) {
      if (this.mode!=="wallsY") {
       this.mod = 0;
      } else if (this.mod<1){
       this.mod++;
      } else {
       this.mod = 0;
      }
      this.mode = "wallsY";
    }
    if (pkey[54] === 2) {
      this.mode = "none";
    }
    if (pkey[53] === 2) {
      if (this.mode!=="stairs") {
        this.mod = 1;
      } else if (this.mod<4){
       this.mod++;
      } else {
       this.mod = 1;
      }
      this.mode = "stairs";
    }
    if (pkey[80] === 2) {
      if (this.mode === "poles"&&this.x>-500&&this.x<500&&this.y>-500&&this.y<500) {
          var c;
          if (this.mod === 0&&chunkd.data.poles[floor(this.y/100)+5][floor(this.x/100)+5][0] !== 0) {
          c = chunkd.data.poles[floor(this.y/100)+5][floor(this.x/100)+5][1];
          }
          if (this.mod === 1&&chunkd.data.poles[floor(this.y/100)+5][floor(this.x/100)+6][0] !== 0) {
          c = chunkd.data.poles[floor(this.y/100)+5][floor(this.x/100)+6][1];
          }
          if (this.mod === 2&&chunkd.data.poles[floor(this.y/100)+6][floor(this.x/100)+6][0] !== 0) {
          c = chunkd.data.poles[floor(this.y/100)+6][floor(this.x/100)+6][1];
          }
          if (this.mod === 3&&chunkd.data.poles[floor(this.y/100)+6][floor(this.x/100)+5][0] !== 0) {
          c = chunkd.data.poles[floor(this.y/100)+6][floor(this.x/100)+5][1];
          }
          wallcolorpush = [0+c[0],0+c[1],0+c[2]];
      }
      if (this.mode === "floors"&&this.x>-500&&this.x<500&&this.y>-500&&this.y<500) {
        if (chunkd.data.floors[floor(this.y/100)+5][floor(this.x/100)+5][0] !== 0) {
          var c = chunkd.data.floors[floor(this.y/100)+5][floor(this.x/100)+5][1];
          wallcolorpush = [0+c[0],0+c[1],0+c[2]];
        }
      }
      if (this.mode === "wallsX"&&this.x>-500&&this.x<500&&this.y>-500&&this.y<500) {
        if (chunkd.data.wallsX[floor(this.y/100)+5][floor(this.x/100)+5][0] !== 0) {
          var c = chunkd.data.wallsX[floor(this.y/100)+5+this.mod][floor(this.x/100)+5][1];
          wallcolorpush = [0+c[0],0+c[1],0+c[2]];
        }
      }
      if (this.mode === "wallsY"&&this.x>-500&&this.x<500&&this.y>-500&&this.y<500) {
        if (chunkd.data.wallsY[floor(this.y/100)+5][floor(this.x/100)+5][0] !== 0) {
          var c = chunkd.data.wallsY[floor(this.y/100)+5][floor(this.x/100)+5+this.mod][1];
          wallcolorpush = [0+c[0],0+c[1],0+c[2]];
        }
      }
      if (this.mode === "stairs"&&this.x>-500&&this.x<500&&this.y>-500&&this.y<500) {
        if (chunkd.data.stairs[floor(this.y/100)+5][floor(this.x/100)+5][0] !== 0) {
          var c = chunkd.data.stairs[floor(this.y/100)+5][floor(this.x/100)+5][1];
          wallcolorpush = [0+c[0],0+c[1],0+c[2]];
        }
      }
    } // color picker
    if (keys[32] === true) {
      var color = wallcolorpush;
      if (this.mode === "poles"&&this.x>-500&&this.x<500&&this.y>-500&&this.y<500) {
        if (this.mod === 0) {
          if (chunkd.data.poles[floor(this.y/100)+5][floor(this.x/100)+5][0] !== 1) {
            chunkd.data.poles[floor(this.y/100)+5][floor(this.x/100)+5][0] = 1;
            chunkd.data.poles[floor(this.y/100)+5][floor(this.x/100)+5][1] = [0+color[0],0+color[1],0+color[2]];
          }
        }
        if (this.mod === 1) {
          if (chunkd.data.poles[floor(this.y/100)+5][floor(this.x/100)+6][0] !== 1) {
            chunkd.data.poles[floor(this.y/100)+5][floor(this.x/100)+6][0] = 1;
            chunkd.data.poles[floor(this.y/100)+5][floor(this.x/100)+6][1] = [0+color[0],0+color[1],0+color[2]];
          }
        }
        if (this.mod === 2) {
          if (chunkd.data.poles[floor(this.y/100)+6][floor(this.x/100)+6][0] !== 1) {
            chunkd.data.poles[floor(this.y/100)+6][floor(this.x/100)+6][0] = 1;
            chunkd.data.poles[floor(this.y/100)+6][floor(this.x/100)+6][1] = [0+color[0],0+color[1],0+color[2]];
          }
        }
        if (this.mod === 3) {
          if (chunkd.data.poles[floor(this.y/100)+6][floor(this.x/100)+5][0] !== 1) {
            chunkd.data.poles[floor(this.y/100)+6][floor(this.x/100)+5][0] = 1;
            chunkd.data.poles[floor(this.y/100)+6][floor(this.x/100)+5][1] = [0+color[0],0+color[1],0+color[2]];
          }
        }
      }
      if (this.mode === "floors"&&this.x>-500&&this.x<500&&this.y>-500&&this.y<500) {
        if (chunkd.data.floors[floor(this.y/100)+5][floor(this.x/100)+5][0] === 0) {
          chunkd.data.floors[floor(this.y/100)+5][floor(this.x/100)+5][0] = 0+this.mod;
          chunkd.data.floors[floor(this.y/100)+5][floor(this.x/100)+5][1] = [0+color[0],0+color[1],0+color[2]];
        }
      }
      if (this.mode === "wallsX"&&this.x>-500&&this.x<500&&this.y>-500&&this.y<600) {
        if (chunkd.data.wallsX[floor(this.y/100)+5+this.mod][floor(this.x/100)+5][0] !== 1) {
          chunkd.data.wallsX[floor(this.y/100)+5+this.mod][floor(this.x/100)+5][0] = 1;
          chunkd.data.wallsX[floor(this.y/100)+5+this.mod][floor(this.x/100)+5][1] = [0+color[0],0+color[1],0+color[2]];
        }
      }
      if (this.mode === "wallsY"&&this.x>-500&&this.x<600&&this.y>-500&&this.y<500) {
        if (chunkd.data.wallsY[floor(this.y/100)+5][floor(this.x/100)+5+this.mod][0] !== 1) {
          chunkd.data.wallsY[floor(this.y/100)+5][floor(this.x/100)+5+this.mod][0] = 1;
          chunkd.data.wallsY[floor(this.y/100)+5][floor(this.x/100)+5+this.mod][1] = [0+color[0],0+color[1],0+color[2]];
        }
      }
      
      
    } // placement
    if (pkey[32] === 2) {
      if (this.mode === "stairs"&&this.x>-500&&this.x<500&&this.y>-500&&this.y<500) {
          chunkd.data.stairs[floor(this.y/100)+5][floor(this.x/100)+5][0] = 0+this.mod;
          chunkd.data.stairs[floor(this.y/100)+5][floor(this.x/100)+5][1] = [0+color[0],0+color[1],0+color[2]];
      }
    } // "stair" placement
    if (keys[8] === true) {
      if (this.mode === "poles"&&this.x>-500&&this.x<600&&this.y>-500&&this.y<600) {
        if (this.mod === 0) {
          if (chunkd.data.poles[floor(this.y/100)+5][floor(this.x/100)+5][0] !== 0) {
            chunkd.data.poles[floor(this.y/100)+5][floor(this.x/100)+5][0] = 0;
          }
        }
        if (this.mod === 1) {
          if (chunkd.data.poles[floor(this.y/100)+5][floor(this.x/100)+6][0] !== 0) {
            chunkd.data.poles[floor(this.y/100)+5][floor(this.x/100)+6][0] = 0;
          }
        }
        if (this.mod === 2) {
          if (chunkd.data.poles[floor(this.y/100)+6][floor(this.x/100)+6][0] !== 0) {
            chunkd.data.poles[floor(this.y/100)+6][floor(this.x/100)+6][0] = 0;
          }
        }
        if (this.mod === 3) {
          if (chunkd.data.poles[floor(this.y/100)+6][floor(this.x/100)+5][0] !== 0) {
            chunkd.data.poles[floor(this.y/100)+6][floor(this.x/100)+5][0] = 0;
          }
        }
      }
      if (this.mode === "floors"&&this.x>-500&&this.x<500&&this.y>-500&&this.y<500) {
          if (chunkd.data.floors[floor(this.y/100)+5][floor(this.x/100)+5][0] !== 0) {
            chunkd.data.floors[floor(this.y/100)+5][floor(this.x/100)+5][0] = 0;
          }
      }
      if (this.mode === "wallsX"&&this.x>-500&&this.x<500&&this.y>-500&&this.y<600) {
        if (chunkd.data.wallsX[floor(this.y/100)+5+this.mod][floor(this.x/100)+5][0] !== 0) {
          chunkd.data.wallsX[floor(this.y/100)+5+this.mod][floor(this.x/100)+5][0] = 0;
        }
      }
      if (this.mode === "wallsY"&&this.x>-500&&this.x<600&&this.y>-500&&this.y<500) {
        if (chunkd.data.wallsY[floor(this.y/100)+5][floor(this.x/100)+5+this.mod][0] !== 0) {
          chunkd.data.wallsY[floor(this.y/100)+5][floor(this.x/100)+5+this.mod][0] = 0;
        }
      }
      if (this.mode === "stairs"&&this.x>-500&&this.x<500&&this.y>-500&&this.y<500) {
        if (chunkd.data.stairs[floor(this.y/100)+5][floor(this.x/100)+5][0] !== 0) {
          chunkd.data.stairs[floor(this.y/100)+5][floor(this.x/100)+5][0] = 0;
        }
      }
    } // deletion
    
    // placement indicators
    if (this.mode === "poles"&&this.x>-500&&this.x<500&&this.y>-500&&this.y<500) {
      di.push();
      di.stroke(255,255,255);
      di.fill(0,0,0);
      if (this.mod === 0) {
      di.translate((floor(this.x/100))*100,(floor(this.y/100))*100,(floor(this.z/100))*100+50);
      }
      if (this.mod === 1) {
      di.translate((floor(this.x/100)+1)*100,(floor(this.y/100))*100,(floor(this.z/100))*100+50);
      }
      if (this.mod === 2) {
      di.translate((floor(this.x/100)+1)*100,(floor(this.y/100)+1)*100,(floor(this.z/100))*100+50);
      }
      if (this.mod === 3) {
      di.translate((floor(this.x/100))*100,(floor(this.y/100)+1)*100,(floor(this.z/100))*100+50);
      }
      di.box(26,26,106);
      di.pop();
    }
    if (this.mode === "floors"&&this.x>-500&&this.x<500&&this.y>-500&&this.y<500) {
      di.push();
      di.stroke(255,255,255);
      di.fill(0,0,0);
      di.translate((floor(this.x/100))*100+50,(floor(this.y/100))*100+50,(floor(this.z/100))*100+0);
      di.box(101,101,3);
      di.pop();
    }
    if (this.mode === "stairs"&&this.x>-500&&this.x<500&&this.y>-500&&this.y<500) {
          di.push();
          di.stroke(255,255,255)
          di.fill(0,0,0);
          di.translate((floor(this.x/100))*100+50,(floor(this.y/100))*100+50,(floor(this.z/100))*100+50);
          di.rotateZ(this.mod*HALF_PI);
          di.beginShape(TRIANGLES);
          di.vertex(-50,-50,-50);
          di.vertex(-50,50,50);
          di.vertex(50,50,50);
          di.vertex(-50,-50,-50);
          di.vertex(50,-50,-50);
          di.vertex(50,50,50);
          di.endShape();
          di.pop();
    }
    if (this.mode === "wallsX"&&this.x>-500&&this.x<500&&this.y>-500&&this.y<500) {
      di.push();
      di.stroke(255,255,255);
      di.fill(0,0,0);
      di.translate((floor(this.x/100))*100+50,(floor(this.y/100)+this.mod)*100,(floor(this.z/100))*100+50);
      di.box(101,16,101);
      di.pop();
    }
    if (this.mode === "wallsY"&&this.x>-500&&this.x<500&&this.y>-500&&this.y<500) {
      di.push();
      di.stroke(255,255,255);
      di.fill(0,0,0);
      di.translate((floor(this.x/100)+this.mod)*100,(floor(this.y/100))*100+50,(floor(this.z/100))*100+50);
      di.box(16,101,101);
      di.pop();
    }
    
    // collision
    
    var gridx = (this.x+500)%100;
    var gridy = (this.y+500)%100;
    if (this.x>-500&&this.x<500&&this.y<500&&this.y>-500) {
      if (chunkd.data.wallsX[floor(this.y/100)+5][floor(this.x/100)+5][0] !== 0) {
        if (gridy<15) {
          this.y = floor(this.y/100)*100 + 15;
        }
      }
      if (chunkd.data.wallsX[floor(this.y/100)+6][floor(this.x/100)+5][0] !== 0) {
        if (gridy>85) {
          this.y = floor(this.y/100)*100 + 85;
        }
      }
    }
    if (this.x>-500&&this.x<500&&this.y<500&&this.y>-500) {
      if (chunkd.data.wallsY[floor(this.y/100)+5][floor(this.x/100)+5][0] !== 0) {
        if (gridx<15) {
          this.x = floor(this.x/100)*100 + 15;
        }
      }
      if (chunkd.data.wallsY[floor(this.y/100)+5][floor(this.x/100)+6][0] !== 0) {
        if (gridx>85) {
          this.x = floor(this.x/100)*100 + 85;
        }
      }
    }
    
    
    this.floorz = 0;
    if (this.x>-500&&this.x<500&&this.y>-500&&this.y<500) {
      if (chunkd.data.floors[floor(this.y/100)+5][floor(this.x/100)+5][0] !== 0) {
        if (chunkd.data.floors[floor(this.y/100)+5][floor(this.x/100)+5][0] === 1){
        this.inside = true;
        }
        this.floorz = floor(this.z/100)*100;
      }
    }
    var top = false;
    if (this.x>-500&&this.x<500&&this.y>-500&&this.y<500) {
      if (chunkd.data.stairs[floor(this.y/100)+5][floor(this.x/100)+5][0] !== 0) {
        var g = rotateIt(floor(this.x/100)*100+50,floor(this.y/100)*100+50,this.x,this.y,chunkd.data.stairs[floor(this.y/100)+5][floor(this.x/100)+5][0]*90);
        this.floorz = g[1]-(floor(this.y/100)*100)+floor(this.z/100)*100;
        if (g[1]-(floor(this.y/100)*100)>=95) {
          this.floorz = floor(this.z/100)*100+101;
          top = true;
        }
      }
    }
    if (this.z>this.floorz+6&&top===false) {
      this.z-=2;
    } else if (this.z<this.floorz+2) {
      this.z = this.floorz+4;
    }
    if (top === true) {
      this.z = this.floorz+4;
    }
    if (this.z<5) {this.z = 10;}
    
    if (keys[SHIFT] === true&&this.mode !== "none"&&this.z<450) {
      this.z +=3;
    }
  };
  this.ui = function() {
    ui.fill(0,0,0);
    ui.rect(0,0,120,11);
    ui.rect(0,10,120,11);
    ui.fill(255,255,255);
    ui.text(this.mode+': '+this.mod,0,10);
    ui.text('r: '+wallcolorpush[0]+', g: '+wallcolorpush[1]+', b: '+wallcolorpush[2],0,20);
    ui.fill(wallcolorpush[0],wallcolorpush[1],wallcolorpush[2]);
    ui.rect(10,30,125,125);
    
  };
}
function chunk(cdata,x,y,z) {
  this.data = cdata;
  this.x = x;
  this.y = y;
  this.z = z;
  this.do = function() {
    if (floor(p1.z/100) < this.z&&p1.inside === true) {}
    else {
    di.push();
    if (this.z===0) {
    di.push();
    di.fill(0,255,0);
    di.plane(1000,1000);
    di.fill(100,50,0);
      di.push();
      di.stroke(75,37.5,0);
        di.translate(0,0,-51);
        di.box(1000,1000,100);
      di.pop();
    
    di.pop();
    } else {
      di.translate(0,0,this.z*100);
    }
   
    for (var j = 0; j < this.data.poles.length; j ++) {
      for (var i = 0; i < this.data.poles[j].length;i ++) {
        
        if (this.data.poles[j][i][0] === 0) {
          
        } else {
          di.stroke(this.data.poles[j][i][1][0]*0.9,this.data.poles[j][i][1][1]*0.9,this.data.poles[j][i][1][2]*0.9);
          di.strokeWeight(2);
          di.push();
          di.fill(this.data.poles[j][i][1][0],this.data.poles[j][i][1][1],this.data.poles[j][i][1][2]);
          di.translate(i*100-500,j*100-500,50);
          di.box(25,25,105);
          di.pop();
        }
        
      }
    }
    for (var j = 0; j < this.data.wallsX.length; j ++) {
      for (var i = 0; i < this.data.wallsX[j].length;i ++) {
        
        if (this.data.wallsX[j][i][0] === 0) {
          
        } else {
          di.stroke(this.data.wallsX[j][i][1][0]*0.9,this.data.wallsX[j][i][1][1]*0.9,this.data.wallsX[j][i][1][2]*0.9);
          di.strokeWeight(2);
          di.push();
          di.fill(this.data.wallsX[j][i][1][0],this.data.wallsX[j][i][1][1],this.data.wallsX[j][i][1][2]);
          di.translate(i*100-500+50,j*100-500,50);
          di.box(100,15,100);
          di.pop();
        }
        
      }
    }
    for (var j = 0; j < this.data.wallsY.length; j ++) {
      for (var i = 0; i < this.data.wallsY[j].length;i ++) {
        
        if (this.data.wallsY[j][i][0] === 0) {
          
        } else {
          di.stroke(this.data.wallsY[j][i][1][0]*0.9,this.data.wallsY[j][i][1][1]*0.9,this.data.wallsY[j][i][1][2]*0.9);
          di.strokeWeight(2);
          di.push();
          di.fill(this.data.wallsY[j][i][1][0],this.data.wallsY[j][i][1][1],this.data.wallsY[j][i][1][2]);
          di.translate(i*100-500,j*100-500+50,50);
          di.box(15,100,100);
          di.pop();
        }
        
      }
    }
    for (var j = 0; j < this.data.floors.length; j ++) {
      for (var i = 0; i < this.data.floors[j].length;i ++) {
        
        if (this.data.floors[j][i][0] === 0) {
          
        } else {
          di.stroke(this.data.floors[j][i][1][0]*0.9,this.data.floors[j][i][1][1]*0.9,this.data.floors[j][i][1][2]*0.9);
          di.strokeWeight(2);
          di.push();
          di.fill(this.data.floors[j][i][1][0],this.data.floors[j][i][1][1],this.data.floors[j][i][1][2]);
          di.translate(i*100-500+50,j*100-500+50,0);
          di.box(100,100,6);
          di.pop();
        }
        
      }
    }
    for (var j = 0; j < this.data.stairs.length; j ++) {
      for (var i = 0; i < this.data.stairs[j].length;i ++) {
        
        if (this.data.stairs[j][i][0] === 0) {
          
        } else {
          di.stroke(this.data.stairs[j][i][1][0]*0.9,this.data.stairs[j][i][1][1]*0.9,this.data.stairs[j][i][1][2]*0.9);
          di.strokeWeight(2);
          di.push();
          di.fill(this.data.stairs[j][i][1][0],this.data.stairs[j][i][1][1],this.data.stairs[j][i][1][2]);
          di.translate(i*100-500+50,j*100-500+50,50);
          di.rotateZ(this.data.stairs[j][i][0]*HALF_PI);
          di.beginShape(TRIANGLES);
          di.vertex(-50,-50,-50);
          di.vertex(-50,50,50);
          di.vertex(50,50,50);
          di.vertex(-50,-50,-50);
          di.vertex(50,-50,-50);
          di.vertex(50,50,50);
          di.endShape();
          di.pop();
        }
        
      }
    }
    di.pop();
    }
  }
}
var camZ = 0;
var camX = 0;
var zoom = 0;

function draw() {
  d3d();
  image(ui,0,0);
  
  
  if (keys[LEFT_ARROW]===true) {
    camZ +=3;
  }
  if (keys[RIGHT_ARROW]===true) {
    camZ -=3;
  }
  if (keys[UP_ARROW]===true&&camX>-45) {
    if (keys[82] === true) {
      if (wallcolorpush[0]<255) {
      wallcolorpush[0] ++;
      }
    } else if (keys[71] === true){
      if (wallcolorpush[1]<255) {
      wallcolorpush[1] ++;
      }
    }else if (keys[66] === true){
      if (wallcolorpush[2]<255) {
      wallcolorpush[2] ++;
      }
    } else {
    camX -=3;
    }
  }
  if (keys[DOWN_ARROW]===true&&camX<135) {
    if (keys[82] === true) {
      if (wallcolorpush[0]>0) {
      wallcolorpush[0] --;
      }
    } else if (keys[71] === true){
      if (wallcolorpush[1]>0) {
      wallcolorpush[1] --;
      }
    }else if (keys[66] === true){
      if (wallcolorpush[2]>0) {
      wallcolorpush[2] --;
      }
    } else {
    camX +=3;
    }
  }
  
  if (keys[ALT]===true) {
    
    zoom +=3;
  }
  if (keys[CONTROL]===true) {
    zoom -=3;
  }
  pkey = [];
  rkey = [];
}

function d3d() {
  di.background(255,255,255);
  /*
  di.push();
  di.translate(0,0,500);

  di.pop();
  */
  smooth();
  di.push();
  //scale(2);
  di.translate(0,0,zoom);
  di.rotateX(QUARTER_PI + (camX*(PI/180)));
  
  di.rotateZ(camZ*(PI/180));
  di.translate(-p1.x,-p1.y,-p1.z);
  p1.display(camZ);
  p1.move(camZ);
  p1.build(cs[floor(p1.z/100)],camZ);
  p1.ui();
  cs[0].do();
  cs[1].do();
  cs[2].do();
  cs[3].do();
  cs[4].do();
  di.pop();
  image(di,1,1);
}