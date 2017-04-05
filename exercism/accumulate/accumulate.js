function accumulate(arr, accumulator) {
  var result = []

  for (var i = 0; i < arr.length; i++) {
    result.push(accumulator(arr[i]))
  }

  return result
}
module.exports = accumulate



// function accumulateUpcases(arr, capitalize) {
//   var capitalize = [];
//
//   for (var i = 0; i < arr.length; i++) {
//     result.push(capitalize(array[i]))
//   }
//
//   return capitalize;
// }
// module.exports ={accumulateUpcases} ;


// xit('accumulate upcases', function() {
//   var accumulator = function(word) {
//     return word.toUpperCase();
//   };
//
//   var result = accumulate('hello world'.split(/\s/), accumulator);
//
//   expect(result).toEqual(['HELLO', 'WORLD']);
// });
