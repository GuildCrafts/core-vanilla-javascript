module.exports = class SecretHandshake{
  constructor(num){
    if(!Number.isInteger(num)){
      throw new Error('Handshake must be a number')
    }
    this.num = num
    this.secret = []
  }

  commands(){
    console.log(this.num)
    if(this.num & 1){
      this.secret.push('wink')
    }
    if(this.num & 2){
      this.secret.push('double blink')
    }
    if(this.num & 4){
      this.secret.push('close your eyes')
    }
    if(this.num & 8){
      this.secret.push('jump')
    }
    if(this.num & 16){
      this.secret.reverse()
    }
    return this.secret
  }
}

// var handshake = function(input) {
//   this.input = input
//   if ( isNaN( input ) ) {
//     throw new Error('Handshake must be a number')
//   }
// }
//
// handshake.prototype.commands = function() {
// let binary = convertBinary(this.input)
// let secretWords = { '1':'wink', '10':'double blink', '100':'close your eyes', '1000':'jump' }
// let result = []
//
//   if( binary.toString().length === 1 ) {
//     result.push(secretWords['1'])
//   }
//
//   if( binary.toString().length === 2 ) {
//     result.push(secretWords['10'])
//     if ( binary > 10 ) {
//       var remainder = secretWords[parseInt(binary) - 10]
//       result.push(remainder.toString())
//     }
//   }
//
//   if( binary.toString().length === 3 ) {
//     result.push(secretWords['100'])
//     if ( binary > 100 ) {
//       var remainder = secretWords[parseInt(binary) - 100]
//       result.push(remainder.toString())
//     }
//   }
//
//   if( binary.toString().length === 4 ) {
//     result.push(secretWords['1000'])
//     if ( binary > 1000 ) {
//       var remainder = secretWords[parseInt(binary) - 1000]
//       result.push(remainder.toString())
//     }
//   }
//
//   if( binary.toString().length === 5 ) {
//     result.push(secretWords['1000'])
//     if ( binary > 1000 ) {
//       var remainder = secretWords[parseInt(binary) - 10000]
//       result.push(remainder.toString())
//     }
//   }
// return result
// }
//
// function convertBinary(number) {
//   var n = 0;
//   var binaryArr = [];
//   var difference = Math.pow(2, n);
//   while (difference <= number){
//     n++;
//     difference = Math.pow(2, n);
//     binaryArr.push(0);
//   }
//   n--;
//   while(number > 0) {
//     if (Math.pow(2, n) <= number) {
//       binaryArr[n] = 1;
//       number-= Math.pow(2, n);
//     }
//     n--;
//   }
//   return binaryArr.reverse().join("") * 1
// }
//
// module.exports = handshake;
