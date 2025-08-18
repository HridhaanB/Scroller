alert("Hi!")
var tilemap = {
  rows: 500,
  cols: 500,
  background: new Map(),
  middleground: new Map(),
  foreground: new Map(),
  getTile: function (layer, row, column) {
    if (layer===-1) {
      return background.get([row, column]);
    } else if (layer===0) {
      return middleground.get([row, column]);
    } else if (layer===1) {
      return foreground.get([row, column]);
    }
  }
}
