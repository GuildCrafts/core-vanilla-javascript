var handshake = function(input) {
  this.input = input
}
handshake.prototype.commands = function() {
var binary = convertBinary(this.input)
var secretWords = { '1':'wink', '10':'double blink', '100':'close your eyes', '1000':'jump' }
var result = []

console.log('binary', binary)
  if( binary.toString().length === 1 ) {
    result.push(secretWords['1'])
  }

  if( binary.toString().length === 2 ) {
    result.push(secretWords['10'])
    var remainder = secretWords[parseInt(binary) - 10]
    console.log('remainder', remainder)
    result.push(remainder.toString())
  }

  if( binary.toString().length === 3 ) {
    result.push(secretWords['100'])
    var remainder = secretWords[parseInt(binary) - 100]
    result.push(remainder.toString())
  }

  if( binary.toString().length === 4 ) {
    result.push(secretWords['1000'])
    var remainder = secretWords[parseInt(binary) - 1000]
    result.push(remainder.toString())
  }
return result
}

function convertBinary(number) {
  var n = 0;
  var binaryArr = [];
  var difference = Math.pow(2, n);
  while (difference <= number){
    n++;
    difference = Math.pow(2, n);
    binaryArr.push(0);
  }
  n--;
  while(number > 0) {
    if (Math.pow(2, n) <= number) {
      binaryArr[n] = 1;
      number-= Math.pow(2, n);
    }
    n--;
  }
  return binaryArr.reverse().join("") * 1
}

module.exports = handshake;
