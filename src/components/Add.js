import Calculator from "./Calculator.js";

class Add extends Calculator {
  constructor(x, y) {
    super(x, y);
  }

  add() {
    return this.x + this.y;
  }
}

export default Add;