alert("Hi!")
var Keyboard = {
  L: 37,
  R: 39,
  U: 38,
  D: 40,
  keys: {},
  listen: function (keys) {
    pass;
  },
  keyDown: function(key) {
    pass;
  },
  keyUp: function(key) {
    pass;
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
  if (Keyboard.isdown(Keyboard.L)) {player.pos.x -= s;}
  if (Keyboard.isdown(Keyboard.R)) {player.pos.x += s;}
  if (Keyboard.isdown(Keyboard.U)) {player.pos.y += s;}
  if (Keyboard.isdown(Keyboard.D)) {player.pos.y -= s;}
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
