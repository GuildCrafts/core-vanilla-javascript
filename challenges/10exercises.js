// Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.
const max = (a,b) => {
  if (a > b) {
    return a
  }
  return b
}

// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
const maxOfThree = (a, b, c) => {
  if (a > b && a > c) {
    return a
  } else if (b > a && b > c) {
    return b
  } else {
    return c
  }
}

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const vowelChecker = (letter) => {
  return /[aeiou]/.test(letter)
}

// Write a function translate() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
const translate = (originalWord) => {
  let origWordArray = originalWord.split('')
  for (var i = 0; i < origWordArray.length; i++) {
    if ( /[aeiou ]/.test(origWordArray[i]) ) {
      i++
    } else {
      origWordArray.splice(i+1, 0, 'o', origWordArray[i])
      i += 3
    }
  }
  return origWordArray.join('')
}


// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

const sum = (inputArray) => {
  return inputArray.reduce((accumulator, nextValue) => {
    return accumulator + nextValue
  }, 0)
}

const multiply = (inputArray) => {
  return inputArray.reduce((accumulator, nextValue) => {
    return accumulator * nextValue
  }, 1)
}


// Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".



// Represent a small bilingual lexicon as a Javascript object in the following fashion
//{"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"}
//and use it to translate your Christmas cards from English into Swedish.
var lexicon = {
  "merry":"god",
  "christmas":"jul",
  "and":"och",
  "happy":"gott",
  "new":"nytt",
  "year":"år"
  }

const translateXmas = (greeting) => {
// Option 1: <-- is this the best?
  // let lexiconKeys = Object.keys(lexicon)
  // lexiconKeys.forEach((element) => {
  //   let regex = new RegExp(element, "gi")
  //   greeting = greeting.replace(regex, lexicon[element])
  // })

//Option 2: <-- is this the best?
  for( let key in lexicon ) {
    let regex = new RegExp(key, "gi")
    greeting = greeting.replace(regex, lexicon[key])
  }

  return greeting
}


//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
const findLongestWord = (wordArray) => {
  let longestLength = 0
  wordArray.map((element) => {
    if (element.length > longestLength) {
      longestLength = element.length
    }
  })
  return longestLength
}

//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
const filterLongWords = (wordArray, thresholdInteger) => {
  return wordArray.filter((element) => {
    return element.length > thresholdInteger
  })
}

//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
const charFreq = (charString) => {
  let frequencies = {}
  for (var i = 0; i < charString.length; i++) {
    if (frequencies[charString.charAt(i)]) {
      frequencies[charString.charAt(i)] += 1
    } else {
      frequencies[charString.charAt(i)] = 1
    }
  }
  return frequencies
}
