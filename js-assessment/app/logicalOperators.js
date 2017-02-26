exports = typeof window === 'undefined' ? global : window;

exports.logicalOperatorsAnswers = {
  or: function(a, b) {
    if ( a === true || b === true){ return true }
  },

  and: function(a, b) {
    if ( a === true && b === true || typeof a == 'number' && typeof b == 'number' ) {
      return true
    } else { return false }
  }
};
