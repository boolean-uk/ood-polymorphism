const Comparison = require("./Comparison");

class Equal extends Comparison {
  checkEqual() {
    return this.val1 === this.val2
  }

  compare() {
    return this.val1 === this.val2
  }
}

module.exports = Equal
