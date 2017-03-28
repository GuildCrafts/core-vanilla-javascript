var Hamming = function() {};

Hamming.prototype.compute = function(dna1, dna2) {

let hammingLength = 0

if (dna1.length == dna2.length) {
  for ( i=0; i<dna1.length; i++ ) {
      if( dna1[i] !== dna2[i] ) {
        hammingLength++
    }
  } return hammingLength
} else {
  throw 'DNA strands must be of equal length.'
  }
}

module.exports = Hamming;
