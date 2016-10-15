var powder = [];
size(400,400);
var powderCycle = [
color(16, 112, 11),color(94, 74, 22),color(94, 74, 22),color(95,95,95),color(85,85,85),color(75,75,75),color(65,65,65),color(55,55,55),color(45,45,45),color(35,35,35),color(25,25,25),color(0,0,0),color(10,0,10),color(20,0,20),color(30,0,30),color(50,0,50),color(70,0,70),color(90,0,90),color(100,0,100),color(110,0,110),color(120,0,120),color(130,0,130),color(130,0,120),color(130,0,110),color(130,0,100),color(140,0,90),color(150,0,80),color(160,0,70),color(165,0,60),color(170,0,40),color(175,0,20),color(180,0,10),color(190,10,0),color(190,30,0),color(200,40,0),color(210,50,0),color(210,70,0),color(210,90,0),color(210,100,0),color(220,120,0),color(190,140,0),color(200,160,0),color(200,180,0),color(210,200,0),color(220,220,0),color(240,240,0),color(240,240,30),color(210,240,60),color(170,240,90),color(130,240,120),color(100,240,150),color(72, 240, 130),color(72, 240, 91),color(51, 230, 68),color(20,230,30),color(0,230,10),color(0,210,30),color(0,190,60),color(0,170,120),color(0,150,150),color(0,120,170),color(0,80,190),color(0,50,210),color(0,20,230),color(0,0,255),color(50,50,255),color(100,100,255),color(150,150,255),color(200,200,255),color(250,250,255)];
var mobs = [];
var trees = [];
var mouseState = "mine";
var cycle = 0;
var loading = 0;
var playerPos = [200,200,0.3,10];
var dustCount = 0;
var calcMousePos = [mouseX/3+playerPos[0]-65,mouseY/3+playerPos[1]-65];
var Mob = function(x,y,type) {
    this.dead = false;
    this.x = x; 
    this.y = y;
    this.velX = random(-2,2);
    this.velY = 0;
    this.type = type;
};
var Dust = function(x,y) {
    this.x =5*floor(x/5);
    this.y = 5*floor(y/5);
    this.velX = 0;
    this.velY = 1;
    this.powderCycleThingy = 0;
    this.broken = false;
}; 
Dust.prototype.move = function() {
    if (this.broken===false) {
        if (this.color!==color(0,0,0)) {
    this.y+=this.velY;
        }
    noStroke();
    fill(powderCycle[this.powderCycleThingy]);
    rect(this.x,this.y,5,5);
    if (this.y>=395) {
        this.velY = 0;
    } else {
        this.velY=1;
    }
    
    }
};
Mob.prototype.AI = function() {
        this.x+=this.velX;

    if (this.velY<3) {
        this.velY+=0.5;
    }
    if (this.y>395) {
        this.y=395;
        if (this.x<0||this.x>400) {
            this.dead = true;
        }
    }
        this.y+=floor(this.velY);
    for (var i = 0; i < powder.length; i ++) {
        if (powder[i].broken===false) {
    if (this.y>powder[i].y-5&&this.y<powder[i].y&&this.x>powder[i].x-2&&this.x<powder[i].x+5) {
            this.velY =-5;
            
        }
        if (this.x>=powder[i].x-5&&this.x<powder[i].x&&this.y>powder[i].y-1&&this.y<powder[i].y+5) {
            this.x = powder[i].x-5;
            this.velY = -5;
        }
        if (this.x<=powder[i].x+5&&this.x>powder[i].x&&this.y>powder[i].y-1&&this.y<powder[i].y+5) {
            this.x = powder[i].x+6;
            this.velY=-5;
        }
        }
    }
    if (this.type===1) {
        fill(0,0,255);
        if (this.x<2||this.x>358) {
            this.velX=-this.velX;
            
        }
        
    } else {
        
        fill(255,0,0);
        if (playerPos[0]>this.x) {
            this.x+=0.5;
        }
        if (playerPos[0]<this.x) {
            this.x-=0.5;
        }
    }
    rect(this.x+abs(this.velY)/4,this.y,5-abs(this.velY)/2,5+abs(this.velY));
    
    
};
var Tree = function(x,y) {
    this.x = x;
    this.y = y;
    this.broken = false;
    this.length = random(5,10);
    this.branchCount = floor(random(3));
};
Tree.prototype.do = function() {
    if (this.broken===false) {
        
    fill(79, 42, 13);
    rect(this.x+1,this.y-(this.length-1),3,this.length);
    fill(0,135,0);
    rect(this.x-1,this.y-(this.length+6),7,7);
    if (this.branchCount>=1) {
        rect(this.x-2,this.y-this.length+2,3,3);
    }
    if (this.branchCount>=2) {
        rect(this.x+4,this.y-this.length+4,3,3);

    }
    var breaking = true;
    for (var i = 0; i < powder.length;i++) {
        if (this.x===powder[i].x&&this.y===powder[i].y-1&&powder[i].broken===false) {
            breaking = false;
        } 
        
    }   
    for (var i = 0; i < powder.length;i++) {
        if (this.x===powder[i].x&&this.y===powder[i].y+4&&powder[i].broken===false) {
            breaking= true;
        }
        
    } 
    
        if (breaking === true) {
            this.broken=true;
        }
    }
};
var keys = [];
var fullView = false;
keyPressed = function() {
    keys[keyCode] = true;
};
keyReleased = function() {
    if (keys[SHIFT]===true) {
        if (mouseState==="mine") {
            mouseState= "place";
        } else {
            mouseState = "mine";
        }
    }
    if (keys[ENTER]===true) {
        if (fullView===true) {
            fullView = false;
        }
        else {
            fullView = true;
        }
    }
        keys[keyCode] = false;

};
var drop;
draw = function() {
    var canPlace = true;
    var calcMousePos = [mouseX/3+playerPos[0]-65,mouseY/3+playerPos[1]-65];
    if (loading<1501) {
    loading++;
    frameRate(1000000);
    }
    if (loading === 1) {
        for (var i = 0; i < 500 ;i ++) {
        powder.push(new Dust(random(0,400),5*floor(random(-1000,0)/5)));
        }
    }
    frameRate(30);
    cycle+=0.05;
    pushMatrix();
    if (cycle<70){
        background(0, 245-cycle*2, 245-cycle*2);
        
    } 
    else {background(0, cycle*2-170, cycle*2-170);}
    if (cycle>140) {
        cycle = -25;
    }
    if (loading>=1500&&fullView===false) {
        scale(3);
        translate((-playerPos[0])+65,(-playerPos[1])+65);
        fill(255,255,0);
        rect(playerPos[0]+cycle*2-50,playerPos[1]-50,20,20);
        fill(255,255,255);
        rect(playerPos[0]+cycle*2-210,playerPos[1]-50,20,20);
    
    }   else {
        stroke(255,255,0);
        fill(75,75,75);
        rect(272,22,20,13);
        fill(50,50,50);
        ellipse(280,30,10,10);
        noStroke();

        
    }
   
    fill(0,0,255);
    rect(playerPos[0]-65,400,135,65);
    

    fill(20,20,20);
    rect(0,400,400,100);

    playerPos[1]+=floor(playerPos[2]);
   
    fill(0, 0, 255);
    
        
    rect(playerPos[0]+abs(playerPos[2])/4,playerPos[1],5-abs(playerPos[2])/2,5+abs(playerPos[2]));
    
    for (var i = 0; i < mobs.length; i++) {
        if (mobs[i].dead===false) {
            mobs[i].AI();
            if (mobs[i].type ===0) {
                var dir = random(5);
                if (dir<=1) {
                    mobs[i].velX = -mobs[i].velX;
                }
            }
            if (dist(calcMousePos[0],calcMousePos[1],mobs[i].x,mobs[i].y)<=10) {
                mobs[i].dead = true;
                dustCount +=3;
            
            }
        }
        
    }
    for (var i = 0; i < powder.length; i++) {
        if (powder[i].broken===false) {
            var thing = random(100000);
            if (thing<3&&powder[i].powderCycleThingy===0&&loading>=1500&&abs(powder[i].x-playerPos[0])>65) {
                mobs.push(new Mob(powder[i].x,powder[i].y-5,floor((140-cycle)/70)));
            }
            if (calcMousePos[0]>powder[i].x&&calcMousePos[0]<=powder[i].x+5&&calcMousePos[1]>=powder[i].y-5&&calcMousePos[1]<powder[i].y+5) {
                canPlace = false;
            }
        if (playerPos[1]>powder[i].y-5&&playerPos[1]<powder[i].y&&playerPos[0]>powder[i].x-2&&playerPos[0]<powder[i].x+5) {
            playerPos[1] = powder[i].y-5;
            playerPos[2] = 0;
            if (keys[UP]===true&&playerPos[2]===0) {
            playerPos[2] = -5;
            }
        }
        if (playerPos[0]>=powder[i].x-5&&playerPos[0]<powder[i].x&&playerPos[1]>powder[i].y-1&&playerPos[1]<powder[i].y+5) {
            playerPos[0] = powder[i].x-5;
            if (keys[UP]===true&&playerPos[2]===0) {
            playerPos[2] = -5;
            }
        }
        if (playerPos[0]<=powder[i].x+5&&playerPos[0]>powder[i].x&&playerPos[1]>powder[i].y-1&&playerPos[1]<powder[i].y+5) {
            playerPos[0] = powder[i].x+6;
            if (keys[UP]===true&&playerPos[2]===0) {
            playerPos[2] = -5;
            }
        }
        if (calcMousePos[0]>=powder[i].x&&calcMousePos[0]<powder[i].x+5&&calcMousePos[1]>=powder[i].y&&calcMousePos[1]<powder[i].y+5&&mouseIsPressed&&mouseState==="mine"&&loading>=1500) {
        powder[i].broken = true;
        dustCount++;
        }
        
        for (var j = 0; j < powder.length; j++) {
            if (j!==i) {
                if (powder[i].y===powder[j].y-5&&powder[i].x===powder[j].x&&powder[j].broken===false) {
                    powder[i].velY=0;
                    if (loading<1500) {
                        powder[j].powderCycleThingy= powder[i].powderCycleThingy+1;
                    } else if (powder[j].powderCycleThingy===powder[i].powderCycleThingy){
                        powder[j].powderCycleThingy++;
                    }
                }
            }
        }
        powder[i].move();
        var grow = random(10000);
        if (grow<=2&&loading>=1500&&powder[i].powderCycleThingy===0&&abs(playerPos[0]-powder[i].x)>60) {
            var canGrow = true;
            for (var k = 0 ; k < trees.length; k++) {
                if (trees[k].broken===false&&trees[k].x===powder[i].x&&trees[k].y===powder[i].y-1) {
                    canGrow = false;
                }
            }
            if (canGrow===true) {
            trees.push(new Tree(powder[i].x,powder[i].y-1));
            }
        }
        }
    }
    for (var i = 0; i < trees.length; i++) {
        trees[i].do();
    }
    
    if (mouseState==="place") {
        if (canPlace===false||calcMousePos[1]>400) {
        stroke(255,0,0);
        
    }
    else if (canPlace===true) {
            stroke(0,255,0);
            

    } 
    } else {
        stroke(255, 0, 0);
        for (var i = 0; i < powder.length; i++) {
            
            if (5*floor(calcMousePos[0]/5)===powder[i].x&&5*floor(calcMousePos[1]/5)===powder[i].y&&powder[i].broken===false) {   stroke(0,255,0);
            
                
            } 
            
        }
    }
        
        fill(0,0,0,70);
        
            rect(floor(calcMousePos[0]/5)*5,floor(calcMousePos[1]/5)*5,4,4);
        noStroke();
        cursor("NONE");
        mouseReleased = function() {
        if (canPlace===true&&mouseState==="place"&&loading>=1500&&dustCount>0) {
            powder.push(new Dust(calcMousePos[0],calcMousePos[1]));
            dustCount--;
        }
        };
    popMatrix();
    if (loading<1500) {
        fill(0,0,0,200);
        rect(0,0,400,400);
        fill(255,255,255);
        textAlign(CENTER,CENTER);
        text("loading...",200,200);
        rect(100,300,200*(loading/1500),10);
    }
    if (keys[LEFT]===true&&loading>1500) {
            playerPos[0]--;
        }
        if (keys[RIGHT]===true&&loading>1500) {
            playerPos[0]++;
        }
        if (playerPos[1]>=395) {
            playerPos[1] = 395;
            playerPos[2] = 0;
            if (keys[UP]===true&&playerPos[2]===0&&loading>1500) {
                playerPos[2] = -5;
            }
        }
        if (keys[CONTROL]===true) {
            playerPos = [200,300,1];
        }

         fill(0,0,0);
    rect(310,20,50,50);
        stroke(255,255,255);
        fill(25,25,25);
        triangle(350,50,320,50,335,25);
        fill(255,255,0);
        noStroke();
        text(dustCount,350,50);
        if (playerPos[0]<0&&playerPos[1]>=395||playerPos[0]>400&&playerPos[1]>=395) {
            powder = [];
            mobs = [];
            playerPos=[200,300,1];
            loading = 0;
        }
         if (playerPos[2]<3){
    playerPos[2]+=0.5;
    }
    if (loading===1500) {
        playerPos[0] = 200;
        playerPos[1] = 200;
    }
   
    if (mouseState==="mine") {
            fill(255,255,255);
            text("mine",330,60);
        } else {
            fill(255,255,255);
            text("place",330,60);
        }
};
