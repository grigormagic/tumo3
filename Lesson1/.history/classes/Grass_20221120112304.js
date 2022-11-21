let LivingCreature = require("./LivingCreature");
let random = require("./Random");
module.exports = class Grass extends LivingCreature {
  constructor(x, y) {
    super(x, y);
    this.multiply = 0;
  }

  mul() {
    this.multiply++;
    let emptyCells = this.chooseCell();
    let randomCell = random(emptyCells);
    if (randomCell && this.multiply > 2) {
      let x = randomCell[0];
      let y = randomCell[1];
      matrix[y][x] = 1;
      let grass = new Grass(x, y);
      grassArr.push(grass);
      this.multiply = 0;
    }
  }
};
