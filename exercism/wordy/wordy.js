module.exports = {
  WordProblem: class WordProblem {
    constructor(input){
      this.input = input,
      this.operands = {
        'plus': '+',
        'minus': '-',
        'multiplied': '*',
        'divided': '/'
      },
      this.sequence = []

    }

    answer() {
      let splitString = this.input.replace('?',"")
      .replace(/by/g,'').split(' ').slice(2)
      let operandsKeys = Object.keys(this.operands)
      let match = false
      operandsKeys.forEach(operand => {
        if (splitString.includes(operand)) {
          match = true
        }
      })
      if (!match) {
        throw new Error()
      }
      let mathOperators = splitString.map((x) => {
        if (this.operands.hasOwnProperty(x)) {
          return this.operands[x]
        } else {
          return x
        }
      })
      let result = mathOperators.join(' ')
      return eval(result)
    }
  }
}
