function ETL() {
  this.newData = {};
  this.transformLetters  = {
    1: [ 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T' ],
    2: [ 'D', 'G' ],
    3: [ 'B', 'C', 'M', 'P' ],
    4: [ 'F', 'H', 'V', 'W', 'Y' ],
    5: [ 'K' ],
    8: [ 'J', 'X' ],
    10: [ 'Q', 'Z' ]
  }
}

ETL.prototype.transform = function( oldData ) {
  for ( prop in this.transformLetters ) {
    var individualArray = this.transformLetters[prop]

    while ( individualArray.length > 0 ) {
      var letter = individualArray.pop().toLowerCase()
      this.newData[letter] = prop
    }
  }

  return this.newData

}

module.exports = ETL

//loop through Object and record key.
//for each key, access array
//for each array, pop off until the array is empty
  //as we pop off, push value.lowerCase to this.newData as the key, and the key of the array as the value
//return newData

var scrabble = new ETL()
console.log(scrabble.transform())

//this.transformLetters[prop] gets us all of the arrays without their keys
