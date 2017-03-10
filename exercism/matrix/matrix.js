function Matrix(string) {
	var matrix = string.split('\n').map(function(item) {
		return item.split(' ')
	})
	
	var rows = matrix.map(arr => arr.map(number => parseInt(number)))
	var columns = matrix[0].map((col, index) => matrix.map(row => parseInt(row[index])) )

	this.rows = rows
	this.columns = columns
}

module.exports = Matrix