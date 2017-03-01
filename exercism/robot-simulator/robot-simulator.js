function Robot() {
	var directions = ['north', 'east', 'south', 'west'];

	this.orient = function(direction) {
		this.bearing = direction;

		if (!directions.includes(direction)) { throw 'Invalid Robot Bearing' }
	}

	this.turnRight = function() {
		this.bearing = this.bearing === 'west' ? 'north' : directions[directions.indexOf(this.bearing) + 1];
	}

	this.turnLeft = function(argument) {
		this.bearing = this.bearing === 'north' ? 'west' : directions[directions.indexOf(this.bearing) - 1];
	}

	this.at = function(x, y) {
		this.coordinates = [x, y];
	}

	this.advance = function() {
		var coord = this.coordinates;

		switch(this.bearing) {
			case 'north':
				this.at(coord[0], coord[1] + 1);
				break;
			case 'south':
				this.at(coord[0], coord[1] - 1);
				break;
			case 'east':
				this.at(coord[0] + 1, coord[1]);
				break;
			case 'west':
				this.at(coord[0] - 1, coord[1]);
				break;
		}
	}

	this.instructions = function(instructions) {
		instructions.split('');
		switch()	
	}
}

module.exports = Robot
