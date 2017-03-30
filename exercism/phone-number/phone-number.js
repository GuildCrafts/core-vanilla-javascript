var PhoneNumber = function(newNumber){
this.newNumber = newNumber
}

PhoneNumber.prototype.number = function() {
var cleanNumber = this.newNumber.replace(/\D/g,'')



  var trimmedNumber = ''

  if (cleanNumber.length === 10) {
   trimmedNumber = cleanNumber
 } else if (cleanNumber.length === 11 && cleanNumber.charAt(0) === '1') {
   trimmedNumber = cleanNumber.substr(1)
  } else {
   trimmedNumber = '0000000000'
  }
this.newNumber = trimmedNumber
return trimmedNumber
}
PhoneNumber.prototype.areaCode = function() {
return this.newNumber.slice(0,3)

}

//format the string to look like a phone number //
PhoneNumber.prototype.toString = function() {
return '(' + this.newNumber.slice(0,3) + ') ' + this.newNumber.slice(3,6) + '-' + this.newNumber.slice(6, 10)
 }

module.exports = PhoneNumber;
