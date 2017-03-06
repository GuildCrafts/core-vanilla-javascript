function Garden(diagram, students=[]) {
	var veggies = {
		R: 'radishes',
		C: 'clover',
		G: 'grass',
		V: 'violets'
	}

  var row1 = diagram.split('\n')[0];
	var row2 = diagram.split('\n')[1];

	if (students.length === 0) { 
		this.students = ['alice', 'bob', 'charlie', 'david', 'eve', 'fred', 'ginny', 'harriet', 'ileana', 'joseph', 'kincaid', 'larry']
		this.students.length = row1.length / 2
	} else {
		this.students = students.sort().map(function(student) { return student.toLowerCase() })
	}

	for (var i = 1, index = 0; i < this.students.length * 2; i += 2, index++) {
		this[this.students[index]] = [ row1[i - 1], row1[i], row2[i - 1], row2[i] ].map(function(letter) {
			return veggies[letter]
		})
	}
}

module.exports = Garden
