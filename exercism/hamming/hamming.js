var hamming = function() {}

hamming.prototype.compute = function( first, second ) {
let exact = 0

  if ( first.length !== second.length ) {
    throw new Error("DNA strands must be of equal length.")
  }

  for (var i = 0; i < first.length; i++) {
    if( first[i] !== second[i] ) {
      exact++
    }
  }
  return exact
}

module.exports = hamming;
