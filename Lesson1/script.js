let matrix = [
  [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 3, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [0, 2, 0, 1, 0, 3, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 1, 2, 0, 1, 0, 0, 0, 0, 1, 2, 0, 1, 0, 0, 0, 0, 1, 2],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 0, 0],
  [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
  [0, 0, 0, 3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
  [0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 3, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
  [0, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let side = 30;

let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let virusArr = [];
let alienArr = [];

function setup() {
  frameRate(10);
  createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);
  background("grey");
  for (y = 0; y < matrix.length; y++) {
    for (x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === 1) {
        const grass = new Grass(x, y);
        grassArr.push(grass);
      } else if (matrix[y][x] === 2) {
        let grassEater = new GrassEater(x, y);
        grassEaterArr.push(grassEater);
      } else if (matrix[y][x] === 3) {
        let predator = new Predator(x, y);
        predatorArr.push(predator);
      } else if (matrix[y][x] === 4) {
        let virus = new Virus(x, y);
        virusArr.push(virus);
      } else if (matrix[y][x] === 5) {
        let alien = new Alien(x, y);
        alienArr.push(alien);
      }
    }
  }
}

function draw() {
  for (y = 0; y < matrix.length; y++) {
    for (x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === 1) {
        fill("green");
      } else if (matrix[y][x] === 2) {
        fill("yellow");
      } else if (matrix[y][x] === 3) {
        fill("red");
      } else if (matrix[y][x] === 4) {
        fill("blue");
      } else if (matrix[y][x] === 5) {
        fill("purple");
      } else {
        fill("grey");
      }
      rect(x * side, y * side, side, side);
    }
  }

  for (i = 0; i < grassArr.length; i++) {
    grassArr[i].mul();
  }
  for (i = 0; i < grassEaterArr.length; i++) {
    grassEaterArr[i].eat();
  }
  for (i = 0; i < predatorArr.length; i++) {
    predatorArr[i].eat();
  }
  for (i = 0; i < virusArr.length; i++) {
    virusArr[i].eat();
  }
  for (i = 0; i < alienArr.length; i++) {
    alienArr[i].eat();
  }
}

var btn = document.getElementById("btn");
btn.addEventListener("click", addMen);
