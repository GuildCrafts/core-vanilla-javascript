// Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.
function max(num1, num2) {
	return num1 > num2 ? num1 : num2;
}

// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(num1, num2, num3) {
	var largerOfTwo = num1 > num2 ? num1 : num2;
	return largerOfTwo > num3 ? largerOfTwo : num3;
}

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function vowelChecker(letter) {
	return "aeiou".includes(letter.toLowerCase());
}

// Write a function translate() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between. 
// For example, translate("this is fun") should return the string "tothohisos isos fofunon".
function translate(text) {
	return text.split('').map(function(item){
		return !'aeiou'.includes(item) && item !== ' ' ? item + 'o' + item : item;
	}).join('');
}

// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
function sum() {
	var numbers = [];

	for (var i = 0; i < arguments.length; i++) {
		numbers.push(arguments[i]);
	}

	return numbers.reduce(function(sum, number) {
		return sum += number;
	});
}

function multiply() {
	var numbers = [];

	for (var i = 0; i < arguments.length; i++) {
		numbers.push(arguments[i]);
	}

	return numbers.reduce(function(sum, number) {
		return sum *= number;
	});
}

// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(string) {
	var reversed = [];

	string.split('').forEach(function(char) {
		reversed.unshift(char);
	});

	return reversed.join('');
}

// Represent a small bilingual lexicon as a Javascript object in the following fashion
//{"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"}
//and use it to translate your Christmas cards from English into Swedish.
var englishSwedish = {
	merry: 'god',
	christmas: 'jul',
	and: 'och',
	happy: 'gott',
	new: 'nytt',
	year: 'år'
};

function translateCard(card) {
	return card.split(' ').map(function(word) {
		if (englishSwedish.hasOwnProperty(word.toLowerCase())) { 
			return englishSwedish[word.toLowerCase()]; 
		} else { 
			return word; }
	}).join(' ');
}

//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(array) {
  var lengths = array.map(function(word) {
		return word.length;
	});

	return Math.max(...lengths);
}

//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(array, i) {
	return array.filter(function(word) {
		return word.length > i;
	});
}

//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
function charFreq(string) {
	var frequencies = {};

	string.split('').forEach(function(letter){
		if (!frequencies.hasOwnProperty(letter)) {
			frequencies[letter] = 1;
		} else {
			frequencies[letter]++;
		}
	});
	return frequencies;
}

