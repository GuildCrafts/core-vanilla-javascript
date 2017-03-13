function meetupDay( year, month, day, ordinal ) {
	const dayOfWeek = dayToOffset( day )

	if( ordinal === 'teenth' ) {
		return teenthSolution( year, month, dayOfWeek ) 
	} else if( ordinal === 'last' ) {
		return lastSolution( year, month, dayOfWeek )
	} else {
		return ordinalSolution( year, month, dayOfWeek, ordinal )
	}
}

function teenthSolution( year, month, dayOfWeek ) {
	let date = new Date( year, month, 12 )

	while( date.getDate() <= 19 ) {
		if( date.getDay() === dayOfWeek && date.getDate() >= 13 && date.getDate() <= 19 ) {
			return date
		}

		date = new Date( year, month, date.getDate() + 1 )
	}
}

function findStartingDate( year, month, startDate, dayOfWeek, direction ) {
	let date = new Date( year, month, startDate )

	while( date.getDay() !== dayOfWeek ) {
		date = new Date( year, month, date.getDate() + direction )
	}

	return date
}

function lastSolution( year, month, dayOfWeek ) {
	const dayCount = daysInMonth( year, month )

	return findStartingDate( year, month, dayCount, dayOfWeek, -1 )
}

function ordinalSolution( year, month, dayOfWeek, ordinal ) {
	let date = findStartingDate( year, month, 1, dayOfWeek, 1 )

	date = new Date( year, month, date.getDate() + ordinalToNumber( ordinal ) * 7)

	if( date.getMonth() !== month ) {
		throw "Not a valid ordinal for this month"
	} else {
		return date
	}
}

function daysInMonth( year, month ) {
	return new Date( year, month + 1, 0 ).getDate()
}

function ordinalToNumber( ordinal ) {
	return {
		'1st': 0,
		'2nd': 1,
		'3rd': 2,
		'4th': 3,
		'5th': 4
	}[ ordinal.toLowerCase() ]
}

function dayToOffset( day ) {
	return {
		'sunday': 0,
		'monday': 1,
		'tuesday': 2,
		'wednesday': 3,
		'thursday': 4,
		'friday': 5,
		'saturday': 6
	}[ day.toLowerCase() ]
}

module.exports = meetupDay

