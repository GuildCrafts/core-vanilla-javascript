module.exports = {
  WordProblem: class WordProblem {
    constructor(input){
      this.input = input,
      this.operands = {
        'plus': '+',
        'minus': '-',
        'multiplied': '*',
        'divided': '/'
      }
    }

    separateString( data ) {
      return data.replace('?',"")
      .replace(/by/g,'').split(' ').slice(2)
    }

    validProblem( data ) {
      let operandsKeys = Object.keys(this.operands)
      let match = false
      operandsKeys.forEach(operand => {
        if (data.includes(operand)) {
          match = true
        }
      })
      if (!match) {
        throw new Error()
      }
    }

    turnIntoEquation( data ){
      return data.map((x) => {
        if (this.operands.hasOwnProperty(x)) {
          return this.operands[x]
        } else {
          return x
        }
      })
    }

    answer() {
      let splitString = this.separateString(this.input)
      this.validProblem(splitString)
      let mathOperators = this.turnIntoEquation(splitString)
      return eval(mathOperators.join(' '))
    }
  }
}
