exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	return parseInt((00000000 + num.toString(2)).substr(-8)[8 - bit])
  },

  base10: function(str) {
  	return parseInt(str, 2)
  },

  convertToBinary: function(num) {
  	return (00000000 + num.toString(2)).substr(-8)
  },

  multiply: function(a, b) {
  	return parseFloat( (a * b).toPrecision(1) );
  }
};
