exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	var x = (00000000 + num.toString(2)).substr(-8)
  	return parseInt(x[x.length - bit])
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
