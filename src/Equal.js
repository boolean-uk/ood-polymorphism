const Assertion = require("./Assertion");

class Equal extends Assertion {
  constructor(val1, val2) {
    super(val1, val2); // Call super() to initialize the parent class
  }
}

module.exports = Equal;