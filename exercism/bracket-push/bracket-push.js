var bracket = function() {}

bracket = function( input ) {
  let counterL = [],
    counterR = [],
    splitString = input.split('')

    if (splitString[0] === '}' || splitString[0] === ')' || splitString[0] === ']') {
      return false
    }

  for ( var index = 0; index < splitString.length; index++ ) {

    if (splitString[index] === '{' || splitString[index] === '(' || splitString[index] === '[') {
      counterL.push(splitString[index])

    } else if (splitString[index] === '}' || splitString[index] === ')' || splitString[index] === ']') {
      if (counterL.pop() === splitString[index]) {
        return true
      }
    }
  }
  //
  // if ( counterR === counterL ) {
  //   return true
  // } else {
  //   return false
  // }
}

module.exports = bracket;
