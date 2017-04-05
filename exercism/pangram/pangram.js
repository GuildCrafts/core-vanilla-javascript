function Pangram( str ) {
  this.str = str,
  this.asciiLookup = {
    a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0,
    n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0
  }
}

Pangram.prototype.isPangram = function() {

  if ( this.str.length < 1 || typeof this.str !== 'string' ) {
    return false
  } else {
    this.str = this.str.toLowerCase()
    for ( var i = 0; i < this.str.length; i++ ) {
      this.asciiLookup[this.str[i]] = 1
    }
    for ( var prop in this.asciiLookup ) {
      if ( this.asciiLookup[prop] === 0 ) {
        return false
      }
    }
    return true
  }
}

module.exports = Pangram
