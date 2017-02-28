function SecretHandshake(number) {
	if (typeof number !== 'number') { throw "Handshake must be a number"; }

	var binary = [1000, 100, 10, 1];
	var values = ['jump', 'close your eyes', 'double blink', 'wink'];

	this.commands = function() {
		var convertedNumber = parseInt(Number(number).toString(2));
		var shake = [];

		if (convertedNumber > 10000) { 
			convertedNumber -= 10000;
			var reverse = true;
		}

		binary.forEach(function(num, index) {
			if (convertedNumber - num >= 0) {
				shake.push(values[index]);
				convertedNumber -= num;
			}
		});
		
		return !reverse ? shake.reverse() : shake;
	}
}


module.exports = SecretHandshake;


var handshake = new SecretHandshake(3);
console.log(handshake.commands());
