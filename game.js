alert("Hi!");
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

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
Tiles.src = "tiles.png"; // Please actually make tiles
var tileDict = {}; // Add stuff later

var tilemap = {
  rows: 500,
  cols: 500,
  background: new Map(),
  middleground: new Map(),
  foreground: new Map(),
  getTileKey: function (layer, row, column) {
    var stringified = row + ' ' + column
    if (layer===-1) {
      return this.background.get(stringified) ?? 0;
    } else if (layer===0) {
      return this.middleground.get(stringified) ?? 0; //Change Later
    } else if (layer===1) {
      return this.foreground.get(stringified) ?? 0; //Change Later
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

const canvasSize = 600;
const stepSize = canvasSize/10;
const tileSize = 60;

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
    for (let layer=-1; layer<2; layer++) {
      renderLayer(player, tilemap, layer);
    }
  }
}

function drawTile(layer, row, column) {
  ctx.drawImage(Tiles, tilemap.getTileKey(layer, row, column)*tileSize, 0, tileSize, tileSize, row*stepSize, column*stepSize, stepSize, stepSize);
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

Tiles.onload = () => {
  drawTile(-1, 0, 0);
  drawTile(-1, 0, 1);
};
