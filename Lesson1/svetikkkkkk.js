class Alien extends Main {
  constructor(x, y) {
    super(x, y);
    this.multiply = 0;
  }
  getNewDirections() {
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
  eat() {
    this.getNewDirections();
    let newCell = random(this.chooseCell(4));
    if (newCell) {
      this.energy += 5;
      let x = newCell[0];
      let y = newCell[1];

      matrix[y][x] = 5;
      matrix[this.y][this.x] = 0;

      this.y = y;
      this.x = x;

      for (let index = 0; index < virusArr.length; index++) {
        if (virusArr[index].x == x && virusArr[index].y == y) {
          virusArr.splice(index, 1);
        }
      }
    } else {
      this.move();
    }
  }
  move() {
    this.energy--;
    let newCell = random(this.chooseCell(0));
    if (newCell) {
      let x = newCell[0];
      let y = newCell[1];
      matrix[y][x] = 5;
      matrix[this.y][this.x] = 0;

      this.y = y;
      this.x = x;
    }
  }
}
