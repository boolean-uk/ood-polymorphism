const Assertion = require("./Assertion");

class Include extends Assertion{
  constructor(val1, val2) {
    super(val1,val2);
  }

  check() {
    if (this.val1 instanceof String || this.val1 instanceof Array) {
      return this.val1.includes(this.val2)
    }
    return false
  }
}

module.exports = Include
