const Parent = require('./Parent.js')

class Include extends Parent {
  check() {
    if (this.val1 instanceof String || this.val1 instanceof Array) {
      return this.val1.includes(this.val2)
    }
    return false
  }
}

module.exports = Include
