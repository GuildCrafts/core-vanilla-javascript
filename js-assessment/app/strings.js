exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	Array.from(str);
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
  	return str.split('').reverse().join('');
  }
};
