function translate(text) {
	if ( text.split(' ').length === 1 ) return translateWord(text)

	return text.split(' ').map(function (word) {
		return translateWord(word)
	}).join(' ')

}

function translateWord(word) {
	if ( 'aeiou'.includes(word[0]) ) return word + 'ay'

	if ( word[0] === 'q' && word[1] === 'u' ) {
		word = word.split('').splice(2).join('') + 'qu'
	} else {
		word = word.split('').splice(1).join('') + word.split('').shift()
	}

  return translateWord(word)
}

module.exports = { translate, translateWord }
