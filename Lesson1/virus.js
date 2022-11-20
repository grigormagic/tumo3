class Virus {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.energy = 20;
    this.directions = [];
  }

  getNewCoordinates() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],
    ];
  }

  chooseCell(character, character1) {
    let found = [];
    this.getNewCoordinates();
    for (let i = 0; i < this.directions.length; i++) {
      let x = this.directions[i][0];
      let y = this.directions[i][1];
      if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length) {
        if (matrix[y][x] === character || matrix[y][x] === character1) {
          found.push(this.directions[i]);
        }
      }
    }
    return found;
  }
  move() {
    let found = this.chooseCell(0);
    let emptyCell = random(found);
    this.energy--;
    if (emptyCell && this.energy > 0) {
      let x = emptyCell[0];
      let y = emptyCell[1];
      matrix[y][x] = 4;
      matrix[this.y][this.x] = 0;
      this.x = x;
      this.y = y;
    } else {
      this.die();
    }
  }
  die() {
    matrix[this.y][this.x] = 0;
    for (let i in virusArr) {
      if (this.x === virusArr[i].x && this.y === virusArr[i].y) {
        virusArr.splice(i, 1);
        break;
      }
    }
  }
  eat() {
    let found = this.chooseCell(2, 3);
    let randoms = random(found);

    if (randoms) {
      this.energy += 2;
      let x = randoms[0];
      let y = randoms[1];
      if (matrix[y][x] === 2) {
        for (let i in grassEaterArr) {
          if (x === grassEaterArr[i].x && y === grassEaterArr[i].y) {
            grassEaterArr.splice(i, 1);
            break;
          }
        }
      } else if (matrix[y][x] === 3) {
        for (let i in predatorArr) {
          if (x === predatorArr[i].x && y === predatorArr[i].y) {
            predatorArr.splice(i, 1);
            break;
          }
        }
      }
      matrix[y][x] = 4;
      matrix[this.y][this.x] = 0;
      this.x = x;
      this.y = y;
      if (this.energy > 10) {
        this.mul();
      }
    } else {
      this.move();
    }
  }

  mul() {
    let found = this.chooseCell(0);
    let emptyCell = random(found);
    if (emptyCell) {
      let x = emptyCell[0];
      let y = emptyCell[1];
      matrix[y][x] = 4;
      let virus = new Virus(x, y);
      virusArr.push(virus);
      this.energy = 10;
    }
  }
}
