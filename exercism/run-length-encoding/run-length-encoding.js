// xit('decode single characters only', function() {
// 	expect(RLE.decode('XYZ')).toEqual('XYZ');
// });

// xit('encode simple', function() {
// 	expect(RLE.encode('AABBBCCCC')).toEqual('2A3B4C');
// });
function encode(string) {
	if ( isEmpty(string) ) return string

	let encoded = []

	for ( let i = 0; i < string.length; i++ ) {
		if ( string.indexOf(string[i]) === string.lastIndexOf(string[i]) ) {

			encoded.push(string[i])
		} else {
			string.split('').reduce(function (acc, item) {
				
			}, [])
		}
	}

	return encoded.join('')
}

function decode(string) {
	if ( isEmpty(string) ) return string

	let decoded = []

	for ( let i = 0; i < string.length; i++ ) {
		if ( string.indexOf(string[i]) === string.lastIndexOf(string[i]) ) {
			decoded.push(string[i])
		}
	}

	return decoded.join('')
}

function isEmpty(string) {
	return string.length === 0
}

module.exports = { encode, decode }
