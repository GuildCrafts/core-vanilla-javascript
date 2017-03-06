var prime = {

	nth: function(position) {
		if (position === 0) { throw 'Prime is not possible' }

		var primes = [2]
		var currentNumber = 3

		while (primes.length != position) {

			for (i = currentNumber - 1; i > 1 ; i--) {
				if (currentNumber % i === 0) { currentNumber++ }
				if (i === 2 && currentNumber % i != 0) { primes.push(currentNumber) }
			}

			currentNumber++
		} 

		return primes[position - 1] 
	}
}

module.exports = prime
