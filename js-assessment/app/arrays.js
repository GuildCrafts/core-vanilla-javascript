exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function( arr, item ) {
    let location = arr.indexOf( item );
    return location;
  },

  sum: function(arr) {
    let total = arr.reduce( ( a, b ) => a + b );
    return total;
  },

  remove: function( arr, item ) {
    const result = []

    for ( let i = 0; i < arr.length; i++ ) {
      if ( arr[i] !== item ){
        result.push( arr[i] )
      }
    }
    return result
  },

  removeWithoutCopy: function(arr, item) {

    for ( let i = 0; i < arr.length; i++ ) {

      if ( arr[ i ] === item ){
        arr.splice( i, 1 )
        i -= 1
      }
    }
   return arr;
 },

  append: function(arr, item) {

    arr.push( item );
    return arr

  },

  truncate: function(arr) {
    arr.pop()
    return arr
  },

  prepend: function(arr, item) {

    arr.unshift( item )
    return arr
  },

  curtail: function(arr) {

    arr.shift()
    return arr

  },

  concat: function(arr1, arr2) {

    arr3 = arr1.concat( arr2 )
    return arr3

  },

  insert: function(arr, item, index) {

    arr.splice( index, 0, item )
    return arr

  },

  count: function(arr, item) {
    let count = 0
    for ( let idx of arr ) {

      if( item === arr[idx] ){
        count++
      }

    }
    return count

  },

  duplicates: function(arr) {
    console.log( arr )
    for ( let idx of arr ) {

    }
  },

  square: function(arr) {


  },

  findAllOccurrences: function(arr, target) {

  }
};
