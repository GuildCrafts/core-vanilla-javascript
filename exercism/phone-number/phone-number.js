function PhoneNumber(phoneNumber) {
	phoneNumber = phoneNumber.replace(/\D/g, '')

	this.number = function() {
		if (phoneNumber.length === 11) { 
			return phoneNumber[0] !== '1' ? '0000000000' : phoneNumber.slice(1)
		}

		return phoneNumber.length < 10 ? '0000000000' : phoneNumber
	}

	this.areaCode = function() {
		return this.number().slice(0, 3)
	}

	this.toString = function() {
	 var number = this.number().split('')

	 number.unshift('(')
	 number[3] += ') '
	 number[6] += '-'

	 return number.join('')
	}
}

module.exports = PhoneNumber