exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    let index = -1
    for ( i = 0 ; i < arr.length ; i++ ) {
      if ( i === item ) {
        index = i - 1
      }
    }
    return index
  },

  sum: function(arr) {
    return arr.reduce( ( a , b ) => { return a + b }, 0 )
  },

  remove: function(arr, item) {
    return arr.filter( (element) => { return element !== item } )
  },

  removeWithoutCopy: function(arr, item) {
    arr = arr.filter( (element) => { return element !== item } )
    return arr
  },

  append: function(arr, item) {
    arr[ arr.length++ ] = item
    return arr
  },

  truncate: function(arr) {
    arr.length = arr.length - 1
    return arr
  },

  prepend: function(arr, item) {
    return [ item, ...arr ]
  },

  curtail: function(arr) {
    for ( i = 1 ; i < arr.length ; i++ ) {
      arr[ i - 1 ] = arr[ i ]
    }
    arr.length--
    return arr
  },

  concat: function(arr1, arr2) {
    
  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
