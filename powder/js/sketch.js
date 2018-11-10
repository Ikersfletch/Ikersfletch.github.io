var d3;
var dust = [];
var layer;
var rz = 0;
var rx = 0;
var CameraMode = "sweep";
var tutorial = 0;
function setup() {
  createCanvas(screen.width,screen.height);
  d3 = createGraphics(screen.width,screen.height,WEBGL);
  for (var i = 0; i < 800; i++) {
    dust[i] = new Dust(floor(random(1000)/50)*50-500,floor(random(1000)/50)*50-500,floor(random(1000)/50)*50+100,0);
  }
  layer = [color(0,200,0),color(130, 94, 0),color(150),color(130),color(110),color(90),color(70),color(50),color(30),color(10),color(0),color(20,0,0),color(40,0,0),color(60,0,0),color(80,0,0),color(100,0,0),color(120,0,0),color(140,0,0)];
  angleMode(DEGREES);
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
      c = sin(frameCount*(25*(this.v+1)))*3;
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
    if ((this.placeable === true&&this.count>=1) || this.carrying === true) {
      d3.push();
      d3.translate(floor((this.x+this.d[0]*5)/50)*50+25,floor((this.y+this.d[1]*5)/50)*50+25,floor(this.z/50)*50+25);
      d3.stroke(255,0,0);
      d3.noFill();
      d3.box(50);
      d3.pop();
    }
    
  };
}
var p1 = new Player(0,0,110);
function Dust(x,y,z,l) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.l = l;
  this.carried = false;
  this.alive = true;
  this.falling = true;
  this.ontop = false;
  this.display = function() {
    d3.strokeWeight(3);
    d3.push();
    
    if (layer[this.l]!== undefined) {
      d3.fill(layer[this.l]);
      d3.stroke(red(layer[this.l])*0.5,green(layer[this.l])*0.5,blue(layer[this.l])*0.5);
    }
    if (this.selected === true) {d3.stroke(255,255,0)}
    d3.translate(this.x+25,this.y+25,this.z+25);
    d3.box(50);
      if (layer[this.l]!== undefined) {
        d3.fill(red(layer[this.l])*1.5,green(layer[this.l])*1.5,blue(layer[this.l])*1.5);
      }
      d3.translate(-25,-25,27);
      d3.rect(0,0,50,50);
    d3.pop();
  };
  this.logic = function() {
    if (this.z>0&&this.falling === true) {
      this.z-=10;
    }
    this.selected = false;
    if (this.carried === false&&abs(p1.x-(this.x+25))<=35&&abs(p1.y-(this.y+25))<=35&&p1.z<=this.z+50&&p1.z>this.z-25) {
      if (p1.z<this.z+20&&keys[32]!==true) {
        if ((p1.x+500)%50>40) {
          p1.x = floor(p1.x/50)*50+40;
        }
        if ((p1.x+500)%50<10) {
          p1.x = floor(p1.x/50)*50+10;
        }
        if ((p1.y+500)%50>40) {
          p1.y = floor(p1.y/50)*50+40;
        }
        if ((p1.y+500)%50<10) {
          p1.y = floor(p1.y/50)*50+10;
        }
      }
      if (abs(abs(p1.x-(this.x+25))<=30&&abs(p1.y-(this.y+25))<=30)) {
        p1.z = this.z+50;
        p1.falling = false;
      }
    }
    if (abs(p1.x+p1.d[0]*5-(this.x+25))<=25&&abs(p1.y+p1.d[1]*5-(this.y+25))<=25&&p1.z+20<=this.z+50&&p1.z+20>this.z) {
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
      this.x = floor((p1.x+(p1.d[0]*5))/50)*50;
      this.y = floor((p1.y+(p1.d[1]*5))/50)*50;
      this.z = floor(this.z/50)*50+100;
      p1.carrying = false;
    }
    if (pkey[81]===true&&this.carried === true) {
      if (this.l > 0) {
        var bl = [floor((p1.x+p1.d[0]*5)/50)*50,floor((p1.y+p1.d[1]*5)/50)*50,floor(this.z/50)*50+100,this.l-1];
        dust[dust.length] = new Dust(bl[0],bl[1],bl[2],bl[3]);
        this.l--;
      }
    }
    if (this.carried === true) {
      p1.count = pow(2,this.l);
    }
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
    dust[i].falling = true;
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
        } else if (dust[j].l === dust[i].l) {
          dust[j].l = dust[i].l+1;
          dust[i].alive = false;
        }
      }
    }
    dust[i].display();
    dust[i].logic();
    } else {
      dust.splice(i,1);
    }
  }
}
function Environment() {
  d3.push();
  d3.noStroke();
  d3.background(204, 255, 253);
  d3.fill(100,100,300);
  d3.rect(-10000,-10000,20000,20000);
  d3.translate(0,0,2);
  d3.fill(255, 223, 137);
  d3.rect(-500,-500,1000,1000);
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
    if (keys[DOWN_ARROW] === true&&rx<85) {
      rx+=5;
    }
    d3.translate(0,0,200);
    d3.rotateX(radians(rx));
    d3.rotateZ(radians(rz));
    d3.translate(-p1.x,-p1.y,-p1.z);
  }
}
function UI() {
  fill(0,0,0);
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
    fill(0,0,0,150);
    rect(-10,-10,width+20,height+20);
    textSize(50);
    fill(0,0,0);
    text("PAUSED",width/2+3,height*(1/4)+3);
    fill(255,255,255);
    text("PAUSED",width/2,height*(1/4));
  }
}
function draw() {
  if (tutorial === 5) CameraMode = "focus";
  
  frameRate(10);
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
  if (tutorial <= 6) tufu(["Welcome to powder!","Rotate camera with the arrow keys","Focus camera with \'C\'","Move using WASD\npress SPACE to jump","press and hold SHIFT to pick up blocks","When you pick up a block, you can see the density\nplace two blocks of the same density on top of\neach other to merge them and double the density"]);
  else Pause();
  UI();
  d3.pop();
  pkey = [];
  rkey = [];
}
