alert("Hi!")

var tilemap = {
  rows: 500,
  cols: 500,
  background: new Map(),
  middleground: new Map(),
  foreground: new Map(),
  getTile: function (layer, row, column) {
    if (layer===-1) {
      return this.background.get([row, column]);
    } else if (layer===0) {
      return this.middleground.get([row, column]);
    } else if (layer===1) {
      return this.foreground.get([row, column]);
    }
  }
}
var position = {
  x: 250,
  y:250
}
var player = {
  //pos: 
}
const canvasSize = c;
const stepSize = c/10

function update(pos, c, s) {
  if (Keyboard.isdown(Keyboard.Left)) {pos.x -= s;}
  if (Keyboard.isdown(Keyboard.Right)) {pos.x += s;}
  if (Keyboard.isdown(Keyboard.Up)) {pos.y += s;}
  if (Keyboard.isdown(Keyboard.Down)) {pos.y -= s;}
}
