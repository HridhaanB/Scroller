alert("Hi!")
var Keyboard = {
  L: 37,
  R: 39,
  U: 38,
  D: 40,
  keys: new Set(),
  listen: function (keys) {
    window.addEventListener('keydown', this.keyDown.bind(this));
    window.addEventListener('keyup', this.keyUp.bind(this));
  },
  keyDown: function(event) {
    var keyCode = event.keyCode;
    event.preventDefault();
    this.keys.add(keyCode);
  },
  keyUp: function(event) {
    var code = event.keyCode;
    event.preventDefault();
    this.keys.delete(code);
  },
  isDown: function(keyCode) {
    return this.keys.has(keyCode);
  }
}





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
var Player = {
  pos: {
    x: 250,
    y: 250
  },
  speed: 1
};
const canvasSize = c;
const stepSize = c/10;

function update(player, c, s) {
  if (Keyboard.isDown(Keyboard.L)) {player.pos.x -= s;}
  if (Keyboard.isDown(Keyboard.R)) {player.pos.x += s;}
  if (Keyboard.isDown(Keyboard.U)) {player.pos.y += s;}
  if (Keyboard.isDown(Keyboard.D)) {player.pos.y -= s;}
}

function frame(player, c, s, tilemap) {
  oldPos = player.pos;
  update(player, c, s);
  if (player.pos!=oldPos) {
    for (int layer=-1; layer<2; layer++) {
      renderLayer(player, tilemap, layer);
    }
}

function renderLayer(player, map, layer) {
  var startCol = ;
  var endCol = ;
  var startRow = ;
  var endRow = ;
  for (var c=startCol; c<=endCol; c++) {
    for (var r=startRow; r<=endRow; r++) {
      f
    }
  }
}
