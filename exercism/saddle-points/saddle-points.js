function Matrix(string) {
	var saddlePoints = []

	var matrix = string.split('\n').map(function(item) {
		return item.split(' ')
	})
	
	// each array in var matrix is looped through to convert each of its strings into a number
	var rows = matrix.map(arr => arr.map(number => parseInt(number)))
	// each item in first array will be first item in each sub array, along with each item from every array 
	var columns = matrix[0].map((col, index) => matrix.map(row => parseInt(row[index])) )

	rows.forEach(function(subArr, index) {
		var largestNum = Math.max(...subArr)
		
		var smallestNum = Math.min(...columns[subArr.indexOf(largestNum)])

		if (largestNum === smallestNum) {
			var colIndex = subArr.indexOf(largestNum)

			saddlePoints.push([index, colIndex])
		}
	})

	this.rows = rows
	this.columns = columns
	this.saddlePoints = saddlePoints
}

module.exports = Matrix