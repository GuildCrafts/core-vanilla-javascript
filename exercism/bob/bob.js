function Bob() {
	this.hey = function(sentence) {
		if (sentence.split(',').every(item => !isNaN(item)) ) { return 'Whatever.'; }

		if (sentence.toUpperCase() === sentence ) { return 'Whoa, chill out!'; }

		if (sentence.includes('?')) { return 'Sure.'; }


		return 'Whatever.';
	}
}

module.exports = Bob

// var me = new Bob();
// console.log(me.hey('1, 2, 3'));