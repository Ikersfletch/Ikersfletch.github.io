var playerPos = [50,50,0,[0,false],100];
var keys = [];
keyPressed = function() {
        keys[keyCode] = true;
};
keyReleased = function() {
        if (keys[32]===true) {
            playerPos[3][1] = true;
        }
        keys[keyCode] = false;
};
var inputHandler = function() {
        if (keys[65]===true) {
            playerPos[2]-=15;
        } if (keys[68]===true) {
            playerPos[2]+=15;
        } 
        if (playerPos[2]<400) {
        playerPos[2]+=1600;
        } 
        if (playerPos[2]>1575) {
        playerPos[2]-=1600;
        } 
        if (playerPos[3][1]===true) {
            playerPos[3][0]+=40;
        }
        if (playerPos[3][0]>180) {
            playerPos[3][1] = false;
            playerPos[3][0] = 0;
        }
};
var area = 0;
var areas = [
    [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,9,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,2,0,0,0,0,0,3,0,0,1],
    [1,0,0,4,0,0,2,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,4,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,1,2,2,1,1,1,1,1,2,2,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,3,0,0,1],
    [1,0,0,3,0,0,2,0,0,0,0,3,0,0,0,1],
    [1,0,0,0,0,0,2,0,0,0,3,0,0,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],

    
],
[
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,4,0,0,0,0,4,0,0,0,0,1],
    [1,0,0,0,0,0,0,4,0,0,0,0,4,0,0,1],
    [1,0,0,4,0,0,4,0,0,0,0,0,1,2,2,1],
    [1,0,0,0,0,0,1,1,1,2,2,1,1,0,0,1],
    [1,2,2,2,1,1,1,3,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,3,0,0,0,0,0,0,1],
    [1,0,0,0,0,3,0,0,3,0,0,0,0,3,0,1],
    [1,0,0,0,3,3,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1],
    [1,0,0,3,0,0,0,0,0,0,0,3,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,3,0,0,1,1,1],
    [1,0,0,0,0,0,3,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],

    
],
];
var Timeout = -1;
var mobs = [];
var AIs = function() {
    for (var k = 0; k < mobs.length; k++) {
        if (mobs[k][2]>0) {
            if (mobs[k][3]===0&&mobs[k][5]===true){
                if (dist(playerPos[0],playerPos[1],mobs[k][0],mobs[k][1])<10) {
                    playerPos[4]--;
                }
                for (var h = 0 ; h <mobs.length;h++) {
                    if (min(dist(mobs[k][0],mobs[k][1],playerPos[0],playerPos[1]),dist(mobs[h][0],mobs[h][1],playerPos[0],playerPos[1]))===dist(mobs[k][0],mobs[k][1],playerPos[0],playerPos[1])) {
                        if (mobs[k][0]>playerPos[0]) {
                            mobs[k][0]-=0.15;
                        } else {
                            mobs[k][0]+=0.15;
                        }
                        if (mobs[k][1]>playerPos[1]) {
                            mobs[k][1]-=0.15;
                        } else {
                            mobs[k][1]+=0.15;
                        }
                    }
                }
            }
            if (mobs[k][5]===false&&mobs[k][3]===0) {
                if (dist(playerPos[0],playerPos[1],mobs[k][0],mobs[k][1])<75) {
                    mobs[k][5]=true;
                }
                mobs[k][4][2]--;
                if (mobs[k][4][2]<=0) {
                    mobs[k][4][2]= random(0,50);
                    mobs[k][4][0]= random(-0.5,0.5);
                    mobs[k][4][1]= random(-0.5,0.5);
                    
                }
                mobs[k][0]+=mobs[k][4][0];
                mobs[k][1]+=mobs[k][4][1];
            }
            if (mobs[k][3]===1) {
                mobs[k][4][2]--;
                if (mobs[k][4][2]<=0) {
                    mobs[k][4][2]= random(0,50);
                    mobs[k][4][0]= random(-1,1);
                    mobs[k][4][1]= random(-1,1);
                    
                }
                mobs[k][0]+=mobs[k][4][0];
                mobs[k][1]+=mobs[k][4][1];
            }
            for (var j = 0; j < areas[area].length;j++) {
                for (var i = 0; i < areas[area][j].length;i++) {
                    var x = i*25;
                    var y = j*25;
                    if (areas[area][j][i]===1) {
                        if (mobs[k][0]>=x&&mobs[k][0]<x+25&&mobs[k][1]<y+5&&mobs[k][1]>y-5) {
                            mobs[k][1] = y-5;
                        }
                        if (mobs[k][0]>=x&&mobs[k][0]<x+25&&mobs[k][1]<y+30&&mobs[k][1]>y+20) {
                            mobs[k][1] = y+30;
                        }
                        if (mobs[k][0]>x-5&&mobs[k][0]<x+5&&mobs[k][1]<=y+25&&mobs[k][1]>=y) {
                            mobs[k][0] = x-5;
                        }
                        if (mobs[k][0]>x+20&&mobs[k][0]<x+30&&mobs[k][1]<=y+25&&mobs[k][1]>=y) {
                            mobs[k][0] = x+30;
                        }
                    }
                    if (areas[area][j][i]===2&&dist(x+12,y+12,playerPos[0],playerPos[1])>75) {
                    
                        if (mobs[k][0]>=x&&mobs[k][0]<x+25&&mobs[k][1]<y+5&&mobs[k][1]>y-5) {
                            mobs[k][1] = y-5;
                        }
                        if (mobs[k][0]>=x&&mobs[k][0]<x+25&&mobs[k][1]<y+30&&mobs[k][1]>y+20) {
                            mobs[k][1] = y+30;
                        }
                        if (mobs[k][0]>x-5&&mobs[k][0]<x+5&&mobs[k][1]<=y+25&&mobs[k][1]>=y) {
                            mobs[k][0] = x-5;
                        }
                        if (mobs[k][0]>x+20&&mobs[k][0]<x+30&&mobs[k][1]<=y+25&&mobs[k][1]>=y) {
                            mobs[k][0] = x+30;
                        }
                    }

                }
            }
        }
    }
};
var backdrop = function() {
    var areaColors = [[color(170, 236, 247),color(11, 82, 56),true],[color(50,50,50),color(0,0,0),false]];
    background(areaColors[area][0]);
    if (areaColors[area][2]===true) {
    fill(255, 213, 0);
    ellipse(600-playerPos[2],100,150,150);
    
    } 
    fill(areaColors[area][1]);
    rect(0,200,width,200);
    };
var areaMapHandler = function() {
    Timeout++;
    fill(0,0,0);
    rect(0,400,width,200);
    var size = 200/max(areas[area].length,areas[area][0].length);
    var playerDivider = [playerPos[0]*200/(areas[area][0].length*25),playerPos[1]*200/(areas[area].length*25)];
    noStroke();
    if (playerPos[4]<=0) {
        Timeout = -1;
        mobs = [];
    }
    if (playerPos[1]>areas[area].length*25) {
        area++;
        Timeout = -1;
        mobs = [];
    }
    if (playerPos[1]<0) {
        area--;
        Timeout = -1;
        mobs= [];
    }
    for (var j = 0; j < areas[area].length;j++) {
        for (var i = 0; i < areas[area][j].length;i++) {
            if (areas[area][j][i]===9&&Timeout<=0) {
                playerPos = [i*25,j*25,0,[0,false],100];
            }
            if (areas[area][j][i]===1) {
                fill(255, 255, 255);
                rect(100+i*size,400+j*size,size,size);
                var x = i*25;
                var y = j*25;
                if (dist(playerPos[0],playerPos[1],x,y)<75) {
                    if (playerPos[0]>=x&&playerPos[0]<x+25&&playerPos[1]<y+5&&playerPos[1]>y-5) {
                        playerPos[1] = y-5;
                    }
                    if (playerPos[0]>=x&&playerPos[0]<x+25&&playerPos[1]<y+30&&playerPos[1]>y+20) {
                        playerPos[1] = y+30;
                    }
                    if (playerPos[0]>x-5&&playerPos[0]<x+5&&playerPos[1]<=y+25&&playerPos[1]>=y) {
                        playerPos[0] = x-5;
                    }
                    if (playerPos[0]>x+20&&playerPos[0]<x+30&&playerPos[1]<=y+25&&playerPos[1]>=y) {
                        playerPos[0] = x+30;
                    }
                }
            }
            if (areas[area][j][i]===3&&Timeout===0) {
                mobs.push([i*25,j*25,100,0,[random(-0.5,0.5),random(-0.5,0.5),random(0,50)],false]);
            }
            if (areas[area][j][i]===4&&Timeout===0) {
                mobs.push([i*25,j*25,100,1,[random(-0.5,0.5),random(-0.5,0.5),random(0,50)]]);
            }
        }
    }
    for (var k = 0; k < mobs.length; k++) {
            var mobDivider = [mobs[k][0]*200/(areas[area][0].length*25),mobs[k][1]*200/(areas[area].length*25)];
            if (mobs[k][2]>0&&mobs[k][3]===1) {
                fill(0,255, 0);
                ellipse((mobDivider[0])+100,(mobDivider[1])+400,size/2,size/2);
            }
            if (mobs[k][2]>0&&mobs[k][3]===0) {
                fill(255,0,0);
                ellipse((mobDivider[0])+100,(mobDivider[1])+400,size/2,size/2);
            }
    }
    fill(0,255,0);
    pushMatrix();
    translate((playerDivider[0])+100,(playerDivider[1])+400);
    rotate((playerPos[2]+400)*360/1600);
    quad(-6,3,0,0,6,3,0,-10);
    popMatrix();
    //ellipse((playerDivider[0])+100,(playerDivider[1])+400,10,10);
};
var perspectiveGenerator = function(pointOriginX,pointOriginY,xPan) {
    var ray = function(x,y,xPanPos) {
        var rectsize = 200;
        var recttype= 0;
        var rectfills = [color(255,255,255),color(255,0,0),color(255, 0, 255),color(0,255,0)];
        for (var k = 20; k > 0; k --) {
            var pointCalc = [pointOriginX+(((pointOriginX-x)/20)*k),pointOriginY+(((pointOriginY-y)/20)*k)];
            if (playerPos[2]-200>xPanPos&&playerPos[2]-200<xPanPos+25&&k<2&&keys[87]===true) {
                playerPos[0]+=(pointCalc[0]-playerPos[0])/4;
                playerPos[1]+=(pointCalc[1]-playerPos[1])/4;

            }
            if (playerPos[2]-200>xPanPos&&playerPos[2]-200<xPanPos+25&&k<2&&keys[83]===true) {
                playerPos[0]-=(pointCalc[0]-playerPos[0])/4;
                playerPos[1]-=(pointCalc[1]-playerPos[1])/4;
            }
            for (var j = 0; j < areas[area].length;j++) {
                for (var i = 0; i < areas[area][0].length;i++) {
                    var bx = i*25;
                    var by= j*25;
                    if (areas[area][j][i]===1) {
                        if (pointCalc[0]>bx&&pointCalc[0]<=bx+25&&pointCalc[1]>by&&pointCalc[1]<=by+25&&dist(pointOriginX,pointOriginY,bx,by)<200) {
                            noStroke();
                            rectsize = dist(pointOriginX,pointOriginY,pointCalc[0],pointCalc[1]);
                           
                            recttype = 0;
                        }
                    }
                    if (areas[area][j][i]===2&&dist(bx,by,playerPos[0],playerPos[1])>75) {
                        if (pointCalc[0]>bx&&pointCalc[0]<=bx+25&&pointCalc[1]>by&&pointCalc[1]<=by+25&&dist(pointOriginX,pointOriginY,bx,by)<200) {
                            noStroke();
                            rectsize = dist(pointOriginX,pointOriginY,pointCalc[0],pointCalc[1]);
                           
                            recttype = 2;
                        }
                    }

                }
            }
            for (var h = 0; h < mobs.length;h++) {
                if ((xPan-xPanPos)>-25&&(xPan-xPanPos)<425&&playerPos[3][1]===true&&k<3&&recttype===1) {
                    if (dist(mobs[h][0],mobs[h][1],pointCalc[0],pointCalc[1])<=20&&mobs[h][3]===0) {
                        mobs[h][2]--;
                    }
                }
                if (dist(mobs[h][0],mobs[h][1],pointCalc[0],pointCalc[1])<=10&&mobs[h][2]>0&&mobs[h][3]===0) {
                    rectsize = dist(playerPos[0],playerPos[1],pointCalc[0],pointCalc[1]);
                    recttype = 1;
                }
                if (dist(mobs[h][0],mobs[h][1],pointCalc[0],pointCalc[1])<=10&&mobs[h][2]>0&&mobs[h][3]===1) {
                    rectsize = dist(playerPos[0],playerPos[1],pointCalc[0],pointCalc[1]);
                    recttype = 3;
                }
            }
        }
        if ((xPan-xPanPos)>-25&&(xPan-xPanPos)<425) {
            fill(rectfills[recttype]);
            rect(400-(xPan-xPanPos),rectsize,20,(200-(rectsize))*2);
            fill(0,0,0,rectsize);
            rect(400-(xPan-xPanPos),rectsize,20,(200-(rectsize))*2);
            
        }
    };
    for (var p = -20; p < 120;p++) {
        if (p<0) {
            ray(pointOriginX-200,pointOriginY+(400-(p*20+400)-200),p*20);
        } else if (p<20) {
            ray(pointOriginX+(p*20-200),pointOriginY-200,p*20);
        } else if (p<40) {
            ray(pointOriginX+200,pointOriginY+(p*20-400)-200,p*20);
        } else if (p<60) {
            ray(pointOriginX+(1200-p*20)-200,pointOriginY+200,p*20);
        } else if (p<80) {
            ray(pointOriginX-200,pointOriginY+(1600-p*20)-200,p*20);
        } else if (p<100) {
            //ray(2000-p*20,pointOriginY-200,p*20);
        }
    }
    fill(0,0,0);
    rect(0,0,200,25);
    fill(0,255,0);
    arc(200,420,600,250,playerPos[3][0]+132,playerPos[3][0]+180);
    rect(0,0,playerPos[4]*2,25);
};
draw = function() {
    inputHandler();
    backdrop();
    perspectiveGenerator(playerPos[0],playerPos[1],playerPos[2]);
    areaMapHandler();
    AIs();
};
