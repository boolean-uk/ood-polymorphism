const Parent = require('./Parent.js')

class Equal extends Parent {
  check() {
    return this.val1 === this.val2
  }
}

module.exports = Equal
