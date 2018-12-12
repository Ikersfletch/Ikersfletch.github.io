var keys = [];
var pkey = [];
var rkey = [];

keyPressed = function() {
    pkey[keyCode]  = 0;
    if (keys[keyCode] === false) {
      pkey[keyCode]  ++;
    }
    keys[keyCode] = true;
    if (keys[keyCode] === true) {
      pkey[keyCode] ++;
    }
    if (pkey[keyCode] === 2) {pkey[keyCode] = true;} else {pkey[keyCode] = false;}
};
keyReleased = function() {
    rkey[keyCode] = 0;
    if (keys[keyCode] === true) {
      rkey[keyCode] ++;
    }
    keys[keyCode] = false;
    if (keys[keyCode] === false) {
      rkey[keyCode] ++;
    }
    if (rkey[keyCode] === 2) {rkey[keyCode] = true;} else {rkey[keyCode] = false;}
};
function rotateIt(cx, cy, x, y, angle) {
    var radians = (Math.PI / 180) * angle,
      cos = Math.cos(radians),
      sin = Math.sin(radians),
      nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
      ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
      return [nx, ny];
}