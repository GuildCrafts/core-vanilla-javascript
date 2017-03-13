function encode(string) {
	string = string.split('')

	let encoded = []
	let counter = 1

	string.forEach(function (letter, index) {
		if ( letter === string[index + 1] ) {
			counter++
		} else {
			if ( counter === 1 ) {
				encoded.push(letter)
			} else {
				encoded.push(counter, letter)
				counter = 1
			}
		}
	})

	return encoded.join('')
}

function decode(string) {
	let decoded = []

	for (let i = 0; i < string.length; i++) {

		if ( isNaN(string[i]) || string[i] === ' ' ) {
			decoded.push(string[i])
		} else {

			if ( !isNaN(string[i - 1]) ) {
				decoded.push(string[i + 1])
			} else {

				if ( !isNaN(string[i + 1]) ) {
					let number = parseInt(string[i] + string[i + 1])

					for (let index = 0; index < number - 2; index++) {
						decoded.push(string[i + 2])
					}	
				} else {
					let number = parseInt(string[i])
					
					for (let index = 0; index < number - 1; index++) {
						decoded.push(string[i + 1])	
					}
				}

			}
		}
	}

	return decoded.join('')
}

module.exports = { encode, decode }
