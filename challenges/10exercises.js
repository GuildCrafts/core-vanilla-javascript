// Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.
function max(firstNum, secondNum) {
	if (firstNum > secondNum) {
		return firstNum
	} else {
		return secondNum
	}
}


// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(firstNum, secondNum, thirdNum) {
	return Math.max(firstNum, secondNum, thirdNum)
}


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function vowelChecker(char) {
	return 'aeiou'.includes(char.toLowerCase()) ? true : false
}


// Write a function translate() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
function translate(text) {
	return text.split('').map(function (letter) {
		return 'aeiou '.includes(letter.toLowerCase()) ? letter : letter + 'o' + letter
	}).join('')
}


// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
function sum(arr) {
	return arr.reduce(function (total, num) {
		return total += num
	})
}

function multiply(arr) {
	return arr.reduce(function (total, num) {
		return total *= num
	})
}


// Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(text) {
	return text.split('').reverse().join('')
}


// Represent a small bilingual lexicon as a Javascript object in the following fashion
//{"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"}
//and use it to translate your Christmas cards from English into Swedish.
var lexicon = {
	merry: 'god',
	christmas: 'jul',
	and: 'och',
	happy: 'gott',
	new: 'nytt',
	year: 'år'
}

function translateCard(text) {
	return text.split(' ').map(function (word) {
		return lexicon.hasOwnProperty(word.toLowerCase()) ? lexicon[word.toLowerCase()] : word
	}).join(' ')
} // words with a capital letter are replaced with a lower case translated version


//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(arr) {
	return arr.reduce(function (longestWord, currentWord) {
		return currentWord.length > longestWord.length ? longestWord = currentWord : longestWord
	}).length
}


//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(arr, i) {
	return arr.filter(function (word) {
		return word.length > i
	})
}


//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
function charFreq(string) {
	var charFreq = {}

	string.split('').forEach(function (char) {
		charFreq.hasOwnProperty(char.toLowerCase()) ? charFreq[char.toLowerCase()] += 1 : charFreq[char.toLowerCase()] = 1
	})

	return charFreq
}
