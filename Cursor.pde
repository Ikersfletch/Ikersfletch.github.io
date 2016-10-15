var mline = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
var lineCount = 1;
size( 600, 600 );
draw = function() {
    background(0,0,0);
    for (var i = lineCount;i<mline.length;i++) {
        stroke(50,0,0);
        strokeWeight(15);
        line(mline[i][0],mline[i][1],mline[i-1][0],mline[i-1][1]);
        //line(400-mline[i][0],mline[i][1],400-mline[i-1][0],mline[i-1][1]);
        //line(400-mline[i][0],400-mline[i][1],400-mline[i-1][0],400-mline[i-1][1]);
        //line(mline[i][0],400-mline[i][1],mline[i-1][0],400-mline[i-1][1]);
    }
    for (var i = lineCount;i<mline.length;i++) {
        stroke(100,0,0);
        strokeWeight(11);
        line(mline[i][0],mline[i][1],mline[i-1][0],mline[i-1][1]);
        //line(400-mline[i][0],mline[i][1],400-mline[i-1][0],mline[i-1][1]);
        //line(400-mline[i][0],400-mline[i][1],400-mline[i-1][0],400-mline[i-1][1]);
        //line(mline[i][0],400-mline[i][1],mline[i-1][0],400-mline[i-1][1]);
    }
    for (var i = lineCount;i<mline.length;i++) {
        

        stroke(255, 0, 0);
        strokeWeight(7);
        line(mline[i][0],mline[i][1],mline[i-1][0],mline[i-1][1]);
        //line(400-mline[i][0],mline[i][1],400-mline[i-1][0],mline[i-1][1]);
        //line(400-mline[i][0],400-mline[i][1],400-mline[i-1][0],400-mline[i-1][1]);
        //line(mline[i][0],400-mline[i][1],mline[i-1][0],400-mline[i-1][1]);
        

    }    
    lineCount++;
    mline.push([mouseX,mouseY]);
    //point(mline[lineCount][0],mline[lineCount][1]);
   // stroke(0,0,255);
    //point(mline[mline.length-1][0],mline[mline.length-1][1]);

};
