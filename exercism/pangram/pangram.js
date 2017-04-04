function Pangram( str ) {
  this.str = str
  this.asciiLookup = {
    a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0,
    n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0
  }
}

Pangram.prototype.isPangram = function() {
  var stringToCheckPanagramStatusOn = this.str

  if ( stringToCheckPanagramStatusOn.length < 1 || typeof stringToCheckPanagramStatusOn !== 'string' ) {
    return false
  }
  //if the string has no length/isEmpty, don't do anything
  //if the input !string, don't do anything

  //iterate over the string
    //at each index, lookup string[i] in the asciiLookup and set its value to 1
  //if there are any values that are still 0 by the time the iteration is done, function should return false
}

module.exports = Pangram

var thing = new Pangram( 1 )

console.log(thing.isPangram())
