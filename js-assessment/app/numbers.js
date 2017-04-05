exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
 var a = num.toString(2).split('')
 return Number(a[a.length - bit])
  },

  base10: function(str) {
    var a = parseInt(str,2)
    return a
  },

  convertToBinary: function(num) {
    var a = num.toString(2)
     if(a.length !== 8){
       var b = a.split('')
  console.log("b",b)
  	b.unshift("0")
       var c = b
  console.log("c",c)
       var e = c.join()
  console.log("e",e)
       var d = e.toString()
       d.split(",").join("")
  console.log("d",d)
       var j = d.split(",").join("")
       return j
     }else return a
    },

  multiply: function(a, b) {
    return a * b
  }
};
