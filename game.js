alert("Hi!");
const canvas = document.getElementById("my-house");
const ctx = canvas.getContext("2d");

var tileSize = 50;
var Keyboard = {
  Left: 37,
  Right: 39,
  Up: 38,
  Down: 40,
  keys: new Set(),
  listen: function (keys) { //CHANGE LATER
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
};

var Tiles = new Image();
Tiles.src = "PATH"; // Change later
var tileDict = {}; // Add stuff later
function drawTile(key, x, y) {
  ctx.drawImage(Tiles,tileSize*tileDict[key],0,x,y,tileSize,tileSize);
}

var tilemap = {
  rows: 500,
  cols: 500,
  background: new Map(),
  middleground: new Map(),
  foreground: new Map(),
  getTileKey: function (layer, row, column) {
    if (layer===-1) {
      return this.background.get([row, column]);
    } else if (layer===0) {
      return this.middleground.get([row, column]);
    } else if (layer===1) {
      return this.foreground.get([row, column]);
    }
  }
};

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
  if (Keyboard.isDown(Keyboard.Left)) {player.pos.x -= s;}
  if (Keyboard.isDown(Keyboard.Right)) {player.pos.x += s;}
  if (Keyboard.isDown(Keyboard.Up)) {player.pos.y += s;}
  if (Keyboard.isDown(Keyboard.Down)) {player.pos.y -= s;}
}

function frame(player, c, s, tilemap) {
  oldPos = player.pos;
  update(player, c, s);
  if (player.pos!=oldPos) {
    for (int layer=-1; layer<2; layer++) {
      renderLayer(player, tilemap, layer);
    }
  }
}

function renderLayer(player, map, layer) {
  /*
  var startCol = ;
  var endCol = ;
  var startRow = ;
  var endRow = ;
  for (var c=startCol; c<=endCol; c++) {
    for (var r=startRow; r<=endRow; r++) {
      f
    }
  }
  */
}
