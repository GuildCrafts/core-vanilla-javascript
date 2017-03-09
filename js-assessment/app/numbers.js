exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
     var value = num.toString(2).split('')

     return Number(value[value.length - bit])
  },

  base10: function(str) {
  	return parseInt(str, 2)
  },

  convertToBinary: function(num) {
    // num.toString(2) does not include the first 0
  	return (00000000 + num.toString(2)).substr(-8)
  },

  multiply: function(a, b) {
  	return parseFloat( (a * b).toPrecision(1) );
  }
};
