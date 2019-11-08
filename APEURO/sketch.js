var chars;
var textBox;

var periods = [
  {
    "name": "Period of New Ideas",
    "from": 1300,
    "to" : 1648,
    "color": "#40E66C"
  },
  {
    "name": "Period of Control",
    "from": 1648,
    "to" : 1763,
    "color": "#6586FC"
  },
  {
    "name": "Period of Industry",
    "from": 1763,
    "to" : 1860,
    "color": "#9A8CA1"
  },
];

function preload() {
  chars = loadJSON("APEURO/characteristics.json");
}
function setup() {
  createCanvas(screen.width, screen.height);
  rectMode(CORNERS);
  textBox = {
    "x" : 0,
    "y" : 0,
    "boxes" : []
  };
}

function periodicBackground() {
  for (var i = 0; i < periods.length; i ++) {
    push();
    noStroke();
    fill(periods[i].color);
    rect(screenPos(periods[i].from),-10,screenPos(periods[i].to),height+10);
    pop();
    push();
    textAlign(CENTER);
    fill(0);
    textSize(25);
    text(periods[i].name,(screenPos(periods[i].from)+screenPos(periods[i].to))/2,50);
    textAlign(LEFT,BOTTOM);
    pop();
  }
}

function screenPos(year) {
  return ((year - 1350)/500)*width*0.99;
}

function characteristic(data,y) {
  for (var i = 0; i < data.periods.length; i ++) {
    var x = screenPos(data.periods[i].from);
      fill(data.periods[i].color+"88");
      rect(
        x, 
        y,
        screenPos(data.periods[i].to),
        50+y,
        10
      );
    
      push();
      strokeWeight(5);
      fill(data.periods[i].color);
      ellipse(x,y+25,15,15);
      pop();
    
      textSize(15);
      fill(data.periods[i].color);
      text(data.periods[i].name,x+6,y+46-(data.periods[i].hasOwnProperty("top")?30:0));
      fill(0);
      text(data.periods[i].name,x+5,y+45-(data.periods[i].hasOwnProperty("top")?30:0));
      
        if (dist(textBox.x,textBox.y,x,y+25)<7) {
          if (mouseIsPressed) textBox.boxes[textBox.boxes.length] = data.periods[i];
          push();
          strokeWeight(5);
          stroke("#FFFF00")
          fill(data.periods[i].color);
          ellipse(x,y+25,15,15);
          pop();
        } else if (
          (textBox.x>x && 
          textBox.y>y && 
          textBox.x < screenPos(data.periods[i].to) && 
          textBox.y<y+50) 
          ||dist(textBox.x,textBox.y,screenPos(data.periods[i].to),y+25)<7
          )
        {
          if (mouseIsPressed) textBox.boxes[textBox.boxes.length] = {
            "name": data.periods[i].name,
            "desc": data.periods[i].desc,
            "what_changed" : "",
            "from" : data.periods[i].from,
            "to": data.periods[i].to,
            "color": data.periods[i].color
          };
          push();
          stroke("#FFFF00");
          strokeWeight(5);
          noFill(data.periods[i].color+"88");
          rect(
            x, 
            y,
            screenPos(data.periods[i].to),
            50+y,
            10
          );
          pop();
        }
      
  }
  textSize(30);
  fill(0);
  text(data.name,25,y-5);
  line(20,y-5,textWidth(data.name)+30,y-5);
}
function displayTextBox(box) {
  var x = box.x;
  var y = box.y;
  
  push();
    stroke(0);
    strokeWeight(4);
    line(x-5,y-5,x+5,y+5);
    line(x+5,y-5,x-5,y+5);
  
  pop();
  
  var offsetY = 0;
  if (x>width-215) x = width-215;
  var keepIn = 0;
  for (var i = 0; i < box.boxes.length; i ++) {
    keepIn+=(box.boxes[i].what_changed.length>0)?210:110;
  }
  
  if (y+keepIn>height) y = height - keepIn;
  for (var i = 0; i < box.boxes.length; i ++) {
    push();
    fill(255);
    strokeWeight(5);
    stroke(box.boxes[i].color);
    rect(x,y+offsetY, x+215, y+offsetY+((box.boxes[i].what_changed.length>0)?200:100),10);
    pop();
    
    push();
    fill(0);
    textSize(20);
    text(box.boxes[i].name,x+5,y+offsetY+30);
    pop();
    
    push();
    textSize(12);
    textStyle(ITALIC);
    var to = (box.boxes[i].to<2000&&box.boxes[i].to!== box.boxes[i].from)?(" - " + box.boxes[i].to):"";
    var from = (box.boxes[i].from>1350)?(box.boxes[i].from):"";
    text(from+to,x+5,y+offsetY+45);
    pop();
    
    push();
    textSize(12);
    text(box.boxes[i].desc,x+5,y+offsetY+60);
    pop();
    
    if (box.boxes[i].what_changed.length>0) {
      
      push();
      textSize(15);
      textStyle(BOLDITALIC);
      text("What Changed?",x+5,y+offsetY+110);
      pop();
      
      push();
      textSize(12);
      text(box.boxes[i].what_changed,x+5,y+offsetY+130);
      pop();
    }
    offsetY += (box.boxes[i].what_changed.length>0)?210:110;
  }
}

function mousePressed() {
  fullscreen(true);
}

function draw() {
  background(255);
  periodicBackground();
  var offset = 0;
  if (mouseIsPressed) {
    textBox.boxes = [];
    textBox.x = mouseX;
    textBox.y = mouseY;
  }
  
  push();
  textSize(10);
  fill(0);
  text(1350,5,15);
  text(1850,width-30,15)
  pop();
  push();
  textSize(15);
  text("made by Isaac Fletcher",5, height-5);
  text("Click on the boxes to get a brief description. Click on the circles to also see what changed.",width - textWidth("Click on the boxes to get a brief description. Click on the circles to also see what changed.")-5, height-5);
  text("Due to the way integers work, some times shown here have too much accuracy to be trusted.",width - textWidth("Due to the way integers work, some times shown here have too much accuracy to be trusted.")-5, height-20);
  pop();
  
  for (var i in chars) {
    characteristic(chars[i],100+offset);
    offset += 100;
  }
  displayTextBox(textBox);
  
}
