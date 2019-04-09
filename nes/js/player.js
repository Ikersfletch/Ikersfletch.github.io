function Player(x,y,type,palette,inputs) {
  this.x = x; // position along x-axis
  this.y = y; // position along y-axis
  this.respawn = {
    'x' : this.x + 0,
    'y' : this.y + 0
  }; // sets respawn point
  this.v = {
    'x' : 0,
    'y' : 0
  }; // JSON vector for velocity
  this.t = type;
  this.p = palette; // array of four colors
  this.i = inputs; // JSON of keycodes
  this.keyInputs = {
    'a' : {
      'timeHeld' : 0,
      'timeAfterPress' : 0,
      'timeAfterRelease' : 0
    },
    'b' : {
      'timeHeld' : 0,
      'timeAfterPress' : 0,
      'timeAfterRelease' : 0
    }
  };
  this.inhibitingItem = {
    'a' : false,
    'b' : false
  };
  this.noMove = false;
  this.sprites = playerSprites;
  this.allowMove = [true,true];
  this.dir = 1;
  this.inAir = true;
  this.onGround = false;
  this.alternating = true;
  this.timer = 1;
  this.invincibility = 0;
  this.recovery = false;
  this.items = {
    'a' : closet.sword,
    'b' : closet.pistol

  };
  this.staticPalette = clone(this.p); // so that we can easily reset the palette
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
  this.currentEffects = [];
  
  var p = this;
  
  this.canKeyMakeBox = {
    'onPress' : function(th,tap,tar,delay,holdTime,maxHoldTime,clockSize,button) {
      return (tap===delay);
    },
    'onPressIfHeld' : function(th,tap,tar,delay,holdTime,maxHoldTime,clockSize,button) {
      return (th===delay);
    },
    'clockOnHold' : function(th,tap,tar,delay,holdTime,maxHoldTime,clockSize,button) {
      return (button&&th%clockSize === delay);
    },
    'onReleaseAfterHold' : function(th,tap,tar,delay,holdTime,maxHoldTime,clockSize,button) {
      return (th >= holdTime && tar === 0);
    },
    'onReleaseInWindow' : function(th,tap,tar,delay,holdTime,maxHoldTime,clockSize,button) {
      return (th >= holdTime && th <= maxHoldTime && tar === 0);
    },
    'onRelease' : function(th,tap,tar,delay,holdTime,maxHoldTime,clockSize,button) {
      return (tar === delay);
    },
    'fromHitbox' : function(th,tap,tar,delay,holdTime,maxHoldTime,clockSize,button) {
      return false;
    }
  };
  
  this.display = function() {
    var r = random(3);
    if (this.invincibility>0) this.p = [
      [0,0,0,0],
      [this.p[1][0]*r,this.p[1][1]*r,this.p[1][2]*r,255],
      [this.p[2][0]*r,this.p[2][1]*r,this.p[2][2]*r,255],
      [this.p[3][0]*r,this.p[3][1]*r,this.p[3][2]*r,255]
    ];
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
    this.p = clone(this.staticPalette);
  };
  
  this.move = function() {
    this.animState = 'idle';
    
    if (keys[this.i.down] === true) {
      this.stats.bonusSpeed = 5;
    } else {
      this.stats.bonusSpeed = 0;
    }
    if (this.allowMove[0]&&keys[this.i.left] === true&&!this.noMove) {
      this.animState = 'walk';
      this.dir = -1;
      this.x-=this.stats.speed+this.stats.bonusSpeed;
      this.v.x*=.97;
    }
    if (this.allowMove[1]&&keys[this.i.right] === true&&!this.noMove) {
      this.animState = 'walk';
      this.dir = 1;
      this.x+=this.stats.speed+this.stats.bonusSpeed;
      this.v.x*=.97;
      }
    if (keys[this.i.down] === true) {
      this.animState = 'sprint';
    }
    if (this.alternating === true&&keys[this.i.select] === true) if (this.recovery ===false&&this.stats.stam>0&&this.stats.health<this.stats.healthMax) {
        this.stats.stam-=2;
        this.stats.health+=0.5;
      }
    if (this.animState === 'idle'&&keys[this.i.right]!==true&&keys[this.i.left]!==true&&this.onGround) {
      this.x = floor((this.x)/5)*5;
    }
    this.noMove = false;
  };
  
  this.physics = function() {
    if (this.x<0) this.x = 5;
    if (this.x>40*areas[area].collision[0].length) this.x = 40*areas[area].collision[0].length-1;
    if (this.y>areas[area].collision.length*40) this.y = 0;
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
    this.onGround = false;
    if (this.y<40*areas[area].collision.length&&this.y>0&&this.x<40*areas[area].collision[0].length&&this.x>0) {
      if (this.y<((40*areas[area].collision.length)-40)&&areas[area].collision[floor((this.y+20)/40)][floor(this.x/40)] > 0&&this.v.y>=0) {
        if (areas[area].collision[floor((this.y+20)/40)][floor(this.x/40)] < 3) {
          this.v.y = 0;
          this.inAir = false;
          this.onGround = true;
          this.v.x = 0;
          this.y = floor((this.y)/40)*40+20;
          if (keys[this.i.up] === true&&!this.noMove) {
            this.v.y = this.stats.jump;
          }
        } else if (areas[area].collision[floor((this.y+20)/40)][floor(this.x/40)] === 3) {
          if (this.v.y>0) {
            this.stats.health-=5;
          }
        }
      }
      if (this.y>40&&areas[area].collision[floor((this.y-20)/40)][floor(this.x/40)] === 1) {
        this.v.y = 0;
        this.y = floor((this.y)/40)*40+20;
      }
    }
    // apply gravity
    this.y+=this.v.y;
        
    if (this.y<40*areas[area].collision.length&&this.y>0&&this.x<40*areas[area].collision[0].length&&this.x>0) {
      if (this.x-this.stats.speed-abs(this.v.x)>40&&areas[area].collision[floor(this.y/40)][floor((this.x-11-abs(this.v.x))/40)] === 1) {
        this.allowMove[0] = false; // don't let them move left if a block is to the left
        this.x = floor((this.x)/40)*40+10; // set x-pos to 10 from block to the left
        this.v.x = 0;
        if (this.animState!=='sprintItem') this.animState = 'idle'; // stop walking
        
      }
      if (this.x+this.stats.speed+abs(this.v.x)<40*areas[area].collision[0].length-40&&areas[area].collision[floor(this.y/40)][floor((this.x+10+abs(this.v.x))/40)] === 1) {
        this.allowMove[1] = false; // don't let them move right if a block is to the right
        this.x = floor((this.x)/40)*40+30; // set x-pos to 10 from block to the right
        this.v.x = 0;
        if (this.animState!=='sprintItem') this.animState = 'idle'; // stop walking
      }
      if (areas[area].collision[floor(this.y/40)][floor((this.x)/40)] === 1) {
        this.y-=40;
      }
    }
    this.x+=this.v.x;
    this.v.x*=.97;
    
  };
  
  this.do = function() {
    if (this.stats.stam<=5) {
      this.recovery = true;
    }
    if (this.stats.stam>50) {
      this.recovery = false;
    }
    if (this.stats.health < 0) {
      this.stats.health  = 50;
      this.stats.stam = 75;
      this.x = this.respawn.x+0;
      this.y = this.respawn.y+0;
      this.invincibility = 500;
    }
    if (this.invincibility>0) this.invincibility --;
    if (this.stats.stam<this.stats.stamMax&&frameCount%5 == 0) {
      
      this.stats.stam+=2;
      if (this.recovery === true || keys[this.i.down]===true) this.stats.stam--;
      if (this.stats.stam>this.stats.stamMax) this.stats.stam = this.stats.stamMax+0;
    }
    
    
  };
  
  this.getHit = function(damage,knockback,extraInvincibility) {
    if (this.invincibility===0) {
      this.stats.health-=damage,
      this.v.x+=knockback.x;
      this.v.y+=knockback.y;
      this.invincibility = 50+extraInvincibility;
    }
  }
  
  this.perform = function(button,button2) {
    var item = this.items[button];
    var keyP = this.keyInputs[button];
    for (var i = 0; i < item.boxes.length; i ++) {
      var box = item.boxes[i];
      var air = !(box.conditions.mustBeInAir&&!this.inAir);
      var ground = !(box.conditions.mustBeOnGround&&!this.onGround);
      if (
        this.canKeyMakeBox[box.conditions.keyPress]
        (keyP.timeHeld,keyP.timeAfterPress,keyP.timeAfterRelease,box.conditions.delay,box.conditions.holdTime,box.conditions.maxHoldTime,box.conditions.clockSize,keys[this.i[button]])
        &&this.inhibitingItem[button2]===false&&air&&ground&&this.stats.stam>boxCost(box)&&!this.recovery) {
        this.stats.stam-=boxCost(box);
        hitboxes[hitboxes.length] = {
          'display' : spriteToImage(item.sprites[box.spriteID],item.palettes[box.paletteID]),
          'dir' : this.dir+0,
          'owner' : this,
          'blueprint' : box,
          'button' : button,
          'moveSelf' : {
            
            'x' : this.x+box.moveSelf.x*this.dir,
            'y' : this.y+box.moveSelf.y+0,
            'v' : {
              'x' : box.moveSelf.v.x*this.dir+numIf(this.v.x,box.moveSelf.doPhysics),
              'y' : box.moveSelf.v.y+numIf(this.v.y,box.moveSelf.doPhysics)
            },
            'isSticky' : !(!box.moveSelf.isSticky),
            'doGravity' : !(!box.moveSelf.doGravity),
            'stickInTiles' : !(!box.moveSelf.stickInTiles),
            'doPhysics': !(!box.moveSelf.doPhysics)
          },
          
          'hit' : {
            'damage' : box.hit.damage+0,
            'friendlyFire' : !(!box.hit.friendlyFire),
            'knockback' : box.hit.knockback+0,
            'knockV' : {
              'x' : box.hit.knockV.x * this.dir,
              'y' : box.hit.knockV.y + 0
            },
            'effect' : box.hit.effect+'',
            'friendlyEffect' : !(!box.hit.friendlyEffect),
            'strength' : box.hit.strength+0,
            'duration' : box.hit.duration+0,
            'chance' : box.hit.chance+0
          },
          'movePlayer' : {
            'freezePlayer' : !(!box.movePlayer.freezePlayer),
            'preventOtherItems' : !(!box.movePlayer.preventOtherItems),
            'addV' : {
              'x' : box.movePlayer.addV.x+0,
              'y' : box.movePlayer.addV.y+0
            },
            'addVelocityWhen' : box.movePlayer.addVelocityWhen+'',
            'setV' : {
              'x' : box.movePlayer.setV.x+0,
              'y' : box.movePlayer.setV.y+0
            },
            'setVelocityWhen' : box.movePlayer.setVelocityWhen+''
          },
          'death' : {
            'summon' : clone(box.death.summon),
            'timeAlive' : 0,
            'timeToLive' : box.death.timeToLive+0,
            'dieIfNotHeld' : !(!box.death.dieIfNotHeld),
            'deathOnContact' : !(!box.death.deathOnContact)
          }
        };
        
        
      }
      
    }
  };
  this.handleKeyPress = function() {
    
    var m = this.keyInputs;
    
    if (pkey[this.i.a] === true) {
      this.keyInputs.a.timeHeld = 0;
      this.keyInputs.a.timeAfterPress = 0;
    } else this.keyInputs.a.timeAfterPress++;
    if (keys[this.i.a] === true) this.keyInputs.a.timeHeld++;
    if (rkey[this.i.a] === true) {
      this.keyInputs.a.timeAfterRelease = 0;
      this.keyInputs.a.timeHeld = 0;
    }
    else this.keyInputs.a.timeAfterRelease ++;
    
    
    
    if (pkey[this.i.b] === true) {
      this.keyInputs.b.timeHeld = 0;
      this.keyInputs.b.timeAfterPress = 0;
    } else this.keyInputs.b.timeAfterPress++;
    if (keys[this.i.b] === true) this.keyInputs.b.timeHeld++;
    if (rkey[this.i.b] === true) {
      this.keyInputs.b.timeAfterRelease = 0;
      this.keyInputs.b.timeHeld = 0;
    }
    else this.keyInputs.b.timeAfterRelease ++;
    
    
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
    //if (this.items.b!=='empty') {
    displaySprite(this.items.b.sprites[this.items.b.icon],this.items.b.palettes[this.items.b.iconPalette],[5,5],280,35);
    //}
    //if (this.items.a!=='empty') {
    displaySprite(this.items.a.sprites[this.items.a.icon],this.items.a.palettes[this.items.a.iconPalette],[5,5],360,35);
    //}
    /*
    if (pkey[this.i.start] === true) {
      playScreen = 'forge';
    }
    */
  };
  this.forge = function() {
    

  };
  this.pauseButton = false;
  this.doPause = function() {
    if (pkey[this.i.start] === true&&playScreen === 'play') {
      playScreen = 'pause';
      pauseNum = 0;
    }
    else if (pkey[this.i.start] === true&&(playScreen === 'pause'||playScreen === 'pause-save-management')) playScreen = 'play';
    if (playScreen === 'pause') {
      if (pkey[this.i.up]===true) {
        pauseNum--;
      }
      if (pkey[this.i.down]===true) {
        pauseNum++;
      }
      if (pkey[this.i.a]===true&&!this.pauseButton) {
        pauseFunctions[pauseNum]();
        this.pauseButton = true;
      }
      if (rkey[this.i.a]===true) this.pauseButton = false;
    }
    if (playScreen === 'pause-save-management') {
      if (pkey[this.i.up]===true) {
        pauseNum--;
      }
      if (pkey[this.i.down]===true) {
        pauseNum++;
      }
      if (pkey[this.i.a]===true&&!this.pauseButton) {
        pauseFunctionsSaves[pauseNum]();
        this.pauseButton = true;
      }
      if (rkey[this.i.a]===true) this.pauseButton = false;
    }
  };
}
