function Series(number) {

	this.largestProduct = function(subStringLength) {
		if (isNaN(Number(number)) || subStringLength < 0) { throw "Invalid input."; }
		if (subStringLength > number.length) { throw "Slice size is too big."; }
		if (number === '' || subStringLength === 0) { return 1; }

		var largest = 0;

		for (var i = 0; i <= number.length - subStringLength; i++) {
			var currentSet = number.split('').slice(i, subStringLength + i);

			var currentTotal = currentSet.reduce(function(total, num) {
				return total *= num;
			});

			if (currentTotal > largest) { largest = currentTotal; }
		}

		return largest;
	}
}

module.exports = Series;
