var d3;
var dust = [];
var layer;
var rz = 0;
var rx = 0;
var CameraMode = "sweep";
var tutorial = 0;
var els = [];
var stars = [];
var frameDelay = 0;
var timeDelay = 15;
function setup() {
  createCanvas(screen.width,screen.height);
  d3 = createGraphics(screen.width,screen.height,WEBGL);
  for (var i = 0; i < 500; i++) {
    dust[i] = new Dust(floor(random(1000)/50)*50-500,floor(random(1000)/50)*50-500,floor(random(1000)/50)*50+100,0);
  }
  for (var i = 0; i < 100; i ++) {
    stars[i] = {'x' : radians(random(0,360)),'y' : radians(random(0,90)), 'size': random(0,10)+5 };
  }
  layer = [color(0,200,0),color(130, 94, 0),color(150),color(130),color(110),color(90),color(70),color(50),color(30),color(10),color(0),color(20,0,0),color(40,0,0),color(60,0,0),color(80,0,0),color(100,0,0),color(120,0,0),color(140,0,0)];
  angleMode(DEGREES);
  els.none = color(0,0,0);
  els.water = color(0,0,255);
  els.fire = color(255,0,0);
  els.thunder = color(255,255,0);
  els.cloud = color(255);
}
function Player(x,y,z) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.vz = 0;
  this.r = 0;
  this.d = [0,0];
  this.count = 0;
  this.carrying = false;
  this.placeable = false;
  this.display = function() {
    d3.push();
    d3.translate(this.x,this.y,this.z+20);
    d3.rotateZ(radians(-this.r));
    d3.fill(0,0,255);
    d3.stroke(0,0,255*0.5);
    var c = -abs(this.vz)/2;
    if (this.falling === false) {
      c = sin(frameCount*(10*(this.v+1)))*3;
    }
    var w = sqrt(16000/(40-c));
    d3.box(w,w,40-c);
    d3.pop();
  };
  this.move = function() {
    if (this.z>0) {
      this.z+=this.vz;
    }
    if (pkey[67] === true) {
      if (CameraMode === "focus") {
        CameraMode = "sweep";
      } else {
        CameraMode = "focus";
      }
    }
    if (true/*CameraMode === "focus"*/) {
      //this.r = rz;
      this.v = 0;
      if (keys[87] === true) {
        this.r = rz;
        this.v = 8;
      }
      if (keys[83] === true) {
        this.r = rz+180;
        this.v = 8;
      }
      if (keys[65] === true) {
        this.r = rz+90;
        this.v = 8;
        if (keys[87]===true) {
          this.r-=45;
        }
        if (keys[83]===true) {
          this.r+=45;
        }
      }
      if (keys[68] === true) {
        this.r = rz+270;
        this.v = 8;
        if (keys[87]===true) {
          this.r+=45;
        }
        if (keys[83]===true) {
          this.r-=45;
        }
      }
      this.d = rotateIt(0,0,0,-8,this.r);
      if (this.v!==0) {
      this.x += this.d[0];
      this.y += this.d[1];
      }
      
      if (this.falling === false&&keys[32]===true) {
        this.vz = 20;
        this.falling = true;
        this.z+=5;
      }
      
      if (this.falling === true||this.vz>=0) {this.vz-=2;}
      if (this.z<=0) {
        this.z = 0;
        this.falling = false;
      }
      if (this.falling === false) {this.vz = 0;}
    }
  };
  this.interact = function() {
    if (this.carrying === true) {
      d3.push();
      d3.translate(floor((this.x+this.d[0]*5)/50)*50+25,floor((this.y+this.d[1]*5)/50)*50+25,floor(this.z/50)*50+25);
      d3.stroke(0,0,0);
      d3.noFill();
      d3.box(50);
      d3.pop();
    }
    
  };
}
var p1 = new Player(0,0,1000);
function Dust(x,y,z,l) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.l = l;
  this.carried = false;
  this.alive = true;
  this.falling = true;
  this.ontop = false;
  this.element = 'none';
  this.display = function() {
    d3.strokeWeight(3);
    d3.push();
    
    if (layer[this.l]!== undefined) {
      var dm = pow((dist(this.x,this.y,p1.x,p1.y)+500)/1000,1.5);
      if (dm<1) dm = 1;
      d3.fill(red(layer[this.l])*dm,green(layer[this.l])*dm,blue(layer[this.l])*dm);
      //d3.stroke(red(layer[this.l])*0.95*dm,green(layer[this.l])*0.95*dm,blue(layer[this.l])*0.95*dm,150);
      d3.noStroke();
    }
    if (this.element!=='none') {
      d3.stroke(
        red(els[this.element])*(sin(frameCount*5)+2)/2,
        green(els[this.element])*(sin(frameCount*5)+2)/2,
        blue(els[this.element])*(sin(frameCount*5)+2)/2
      );
    }
    if (this.selected === true) {d3.stroke(0,0,0)}
    d3.translate(this.x+25,this.y+25,this.z+25);
    d3.box(50);
      if (layer[this.l]!== undefined) {
        d3.fill(red(layer[this.l])*1.5*dm,green(layer[this.l])*1.5*dm,blue(layer[this.l])*1.5*dm);
      }
      d3.translate(-25,-25,27);
      d3.rect(0,0,50,50);
    d3.pop();
  };
  var p = this;
  this.elementDo = {
    'tc' : 0,
    'ft' : 0,
    'water' : function() {
    
    },
    'fire' : function() {
    
    },
    'thunder' : function() {
    
    },
    'cloud' : function() {
    
    },
    'none' : function() {
      if (p.z<=100&&(p.x>=500||p.y>=500||p.x<-500||p.y<-500)) {
        p.element = 'water';
      }
      if (p.tou === true) {
        if (p1.v>0) this.tc++;
        if (this.tc>50) p.element = 'thunder';
      } else if (this.tc>0) this.tc --;
      if (p.falling === true&&frameCount>115) this.ft ++;
      else if (this.ft>0) this.ft --;
      if  (this.ft>45) p.element = 'fire';
      
    }
  };
  this.logic = function() {
    if (this.z>0&&this.falling === true) {
      this.z-=10;
    }
    if (this.z<=0||this.element === 'cloud') this.falling = false;
    this.selected = false;
    this.tou = false;
    if (this.carried === false&&abs(p1.x-(this.x+25))<=35&&abs(p1.y-(this.y+25))<=35&&p1.z<=this.z+50&&p1.z>this.z-25) {
      if (p1.z<this.z+20&&keys[32]!==true) {
        if ((p1.x+500)%50>40) {
          p1.x = floor(p1.x/50)*50+40;
          this.tou = true;
        }
        if ((p1.x+500)%50<10) {
          p1.x = floor(p1.x/50)*50+10;
          this.tou = true;
        }
        if ((p1.y+500)%50>40) {
          p1.y = floor(p1.y/50)*50+40;
          this.tou = true;
        }
        if ((p1.y+500)%50<10) {
          p1.y = floor(p1.y/50)*50+10;
          this.tou = true;
        }
      }
      if (abs(abs(p1.x-(this.x+25))<=30&&abs(p1.y-(this.y+25))<=30)) {
        p1.z = this.z+50;
        this.tou = true;
        p1.falling = false;
      }
    }
    if (abs(p1.x+p1.d[0]*5-(this.x+25))<=25&&abs(p1.y+p1.d[1]*5-(this.y+25))<=25&&(p1.z+p1.vz)+20<=this.z+50&&(p1.z+p1.vz)+20>this.z) {
      this.selected = true;
      p1.placeable = false;
    }
    
    if (this.selected === true&&(keys[SHIFT]===true||keys[81]===true)&&p1.carrying === false) {
      this.carried = true;
      p1.carrying = true;
    }
    
    if (this.carried === true) {
     this.x = p1.x-25;
     this.y = p1.y-25;
     this.z = p1.z+40;
     this.falling = false;
    }
    if (this.carried === true&&keys[SHIFT]===false&&p1.carrying === true) {
      this.carried = false;
      this.falling = true;
      this.x = floor((p1.x+(p1.d[0]*5))/50)*50;
      this.y = floor((p1.y+(p1.d[1]*5))/50)*50;
      this.z = floor(this.z/50)*50+100;
      if (this.element==='cloud') this.z-=90;
      p1.carrying = false;
    }
    if (pkey[81]===true&&this.carried === true) {
      if (this.l > 0 && this.element === 'none') {
        var bl = [floor((p1.x+p1.d[0]*5)/50)*50,floor((p1.y+p1.d[1]*5)/50)*50,floor(this.z/50)*50+100,this.l-1];
        dust[dust.length] = new Dust(bl[0],bl[1],bl[2],bl[3]);
        this.l--;
      } else { this.element = 'none'; }
    }
    if (this.carried === true) {
      p1.count = pow(2,this.l) + " - " + this.element;
    }
    
    
    //this.elementDo[this.element]();
  };
  
  
}
function doDust() {
  p1.placeable = true;
  if (p1.z>5) {
  p1.falling = true;
  }
  p1.count = "--";
  for (var i = 0; i < dust.length; i++) {
    if (dust[i].alive === true) {
    dust[i].ontop = false;
      if (dust[i].element!=='cloud') {
        dust[i].falling = true;
      }
    }
  }
  for (var i = 0; i < dust.length; i++) {
    if (dust[i].alive === true) {
    for (var j = 0; j < dust.length; j ++) {
      if (dust[j].alive === true && j !== i && dust[j].x === dust[i].x && dust[j].y === dust[i].y && dust[i].z === dust[j].z+50) {
        dust[i].falling = false;
        dust[j].ontop = true;
        if (frameCount<115) {
          dust[j].l = dust[i].l+1;
        } else if ( dust[i].element === dust[j].element && dust[j].l === dust[i].l) {
          dust[j].l ++;
          dust[i].alive = false;
        } else if (dust[j].element === 'fire'&&dust[i].element==='water') {
          dust[i].element = 'cloud';
        }
      }
    }
    dust[i].display();
    dust[i].logic();
    dust[i].elementDo[dust[i].element]();
    } else {
      dust.splice(i,1);
    }
  }
}
function Environment() {
  d3.push();
  d3.noStroke();
  var c2 = color(204,255,253);
  var c1 = color(31, 0, 51);
  var bm = (cos((frameCount-frameDelay)/timeDelay)+1)/2;
  var bc = lerpColor(c1,c2,bm);
  d3.background(bc);
  d3.fill(100,100,300);
  d3.rect(-10000,-10000,20000,20000);
  d3.translate(0,0,2);
  d3.fill(255, 223, 137);
  d3.rect(-500,-500,1000,1000);
  d3.push();
  d3.rotateX(radians((frameCount-frameDelay)/timeDelay));
  d3.translate(0,0,5500);
  d3.fill(255,255,0);
  d3.plane(1000);
  d3.translate(0,0,-11000);
  d3.fill(255,255,255);
  d3.plane(1000);
  d3.pop();
  if (bm<0.5) {
    for (var i = 0; i < 100;i ++) {
      d3.push();
      d3.rotateZ(stars[i].x);
      d3.rotateX(stars[i].y);
      d3.translate(0,0,5500);
      d3.fill(255,255,255,255*(1-bm));
      d3.ellipse(0,0,stars[i].size*3*(1-bm),stars[i].size*3*(1-bm));
      d3.pop();
    }
  }
  d3.pop();
  
}
function Camera() {
  if (keys[LEFT_ARROW] === true) {
    rz+=5;
  }
  if (keys[RIGHT_ARROW] === true) {
    rz-=5;
  }
  if (keys[UP_ARROW] === true&&rx>0) {
      rx-=5;
    }
  if (CameraMode === "sweep") {
    if (keys[DOWN_ARROW] === true&&rx<75) {
      rx+=5;
    }
    d3.translate(0,0,-500);
    d3.rotateX(radians(rx));
    d3.rotateZ(radians(rz));
    
  } else if (CameraMode === "focus") {
    if (keys[DOWN_ARROW] === true&&rx<110) {
      rx+=5;
    }
    d3.translate(0,0,200);
    if (rx>85) {d3.translate(0,0,(rx-90)*30);}
    d3.rotateX(radians(rx));
    d3.rotateZ(radians(rz));
    d3.translate(-p1.x,-p1.y,-p1.z);
  }
}
function UI() {
  fill(0,0,0);
  textAlign(LEFT);
  textSize(30);
  text(p1.count,53,53);
  fill(255,255,255);
  text(p1.count,50,50);
  
}
var tufu = function(t) {
  fill(0,0,0,150);
  rect(-10,-10,width+20,height+20);
  
  textAlign(CENTER);
  textSize(30);
  fill(0,0,0);
  text(t[tutorial],width/2+3,height/2+3);
  text("press SPACE to continue",width/2+3,height*(3/4)+3);
  fill(255,255,255);
  text(t[tutorial],width/2,height/2);
  text("press SPACE to continue",width/2,height*(3/4));
  if (pkey[32] === true) {
    tutorial ++;
  }
}
var paused = false;
function Pause() {
  if (pkey[27] === true) {
    paused = !paused;
  }
  if (paused === true) {
    image(d3,0,0);
    fill(0,0,0,150);
    rect(-10,-10,width+20,height+20);
    textAlign(CENTER);
    textSize(50);
    fill(0,0,0);
    text("PAUSED",width/2+3,height*(1/4)+3);
    fill(255,255,255);
    text("PAUSED",width/2,height*(1/4));
    frameDelay ++;
  }
}
function draw() {
  if (tutorial === 5) CameraMode = "focus";
  
  frameRate(20);
  background(255);
  d3.push();
  if (paused === false) {
  Camera();
  
  Environment();
  if (frameCount>115&&tutorial > 6) p1.move();
  doDust();
  if (frameCount>115&&tutorial > 6) {
    p1.interact();
    p1.display();
  }
  }
  image(d3,0,0);
  if (tutorial <= 6) tufu(["Welcome to powder!","Rotate camera with the arrow keys","Focus camera with \'C\'","Move using WASD\npress SPACE to jump","press and hold SHIFT to pick up blocks","When you pick up a block, you can see the density\nplace two blocks of the same density on top of\neach other to merge them and double the density","While holding a block, press Q to split it.\n If it is density 1, it will get\nrid of the element."]);
  else Pause();
  UI();
  d3.pop();
  pkey = [];
  rkey = [];
}
