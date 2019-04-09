var keys = [];
var pkey = [];
var rkey = [];
var whichKey = null;
var mouseFrame = false;
var rkeyFrame = false;
mousePressed = function() {
  mouseFrame = false;
  if (mouseIsPressed === true) {
    mouseFrame = true;
  }
}
keyPressed = function() {
    var c  = 0;
    if (keys[keyCode] === false) {
      c  ++;
    }
    keys[keyCode] = true;
    whichKey = keyCode;
    if (keys[keyCode] === true) {
      c ++;
    }
    if (c === 2) {pkey[keyCode] = true;} else {pkey[keyCode] = false;}
};
keyReleased = function() {
    var c = 0;
    if (keys[keyCode] === true) {
      c++;
    }
    keys[keyCode] = false;
    whichKey = null;
    rkeyFrame = true;
    if (keys[keyCode] === false) {
      c++;
    }
    if (c === 2) {rkey[keyCode] = true;} else {rkey[keyCode] = false;}
};
function rotateIt(cx, cy, x, y, angle) {
    var radians = (Math.PI / 180) * angle,
      cos = Math.cos(radians),
      sin = Math.sin(radians),
      nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
      ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
      return [nx, ny];
}