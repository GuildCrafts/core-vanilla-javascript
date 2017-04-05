var Hamming = function() {}

  Hamming.prototype.compute = function(strandA, strandB) {
    let difference = 0

    for (i = 0; i < strandA.length; i++) {
      if (strandA[i] !== strandB[i]) {
        difference++
      }
    }
    return difference
  }

module.exports = Hamming;
