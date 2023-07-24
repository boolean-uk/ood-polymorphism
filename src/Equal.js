const Assertion = require("./Assertion");

class Equal extends Assertion {
  constructor(val1, val2) {
    super(val1, val2); 
  }
}

module.exports = Equal;