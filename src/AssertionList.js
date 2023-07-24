const Equal = require("./Equal.js")
const Include = require("./Include.js")

class AssertionList {
  constructor(assertions) {
    this.assertions = assertions
  }

  checkAll() {
    return this.assertions.every(assertion => assertion.compare())
  }
}

module.exports = AssertionList
