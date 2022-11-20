var express = require("express");
var app = express();
var server = require("http").Server(app);
app.use(express.static("."));
app.get("/", function (req, res) {
  res.redirect("index.html");
});
server.listen(3000);

function kill() {
  grassArr = [];
  grassEaterArr = [];
  predatorArr = [];
  virusArr = [];
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      matrix[y][x] = 0;
    }
  }
}
// var random = Math.random(matrix.length);
function addMen() {
  for (var y = 0; y < random; y++) {
    for (var x = 0; x < random; x++) {
      matrix[y][x] = 5;
    }
  }
}
io.on("connection", function (socket) {
  createObjects();
  socket.on("kill", kill);
});

io.on("connection", function (socket) {
  createObjects();
  socket.on("addMen", addMen);
});
