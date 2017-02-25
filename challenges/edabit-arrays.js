// For each of the following challenges, make sure to solve the challenge on edabit AND include your solution code here for review

// 1. Create a function that takes an array of positive and negative numbers. Return an array where the first 
// element is the count of positive numbers and the second element is the sum of negative numbers.
// https://edabit.com/challenge/xXJLZry3vYd4erPct
function countPosSumNeg(array) {
	var countAndSum = [0, 0];
  
	if (arguments[0] === null || array.length === 0) { return []; }
  
	array.forEach(function(number) {
		number > 0 ? countAndSum[0]++ : countAndSum[1] += number;
	});

	return countAndSum;
}

// 2. Create a function that accepts an array and returns the last item in the array. The array can contain any of JavaScript's five primitive data types.
// https://edabit.com/challenge/7JBTN4TbaxJQMdX9W
function getLastItem(arr) {
  return arr[arr.length - 1];
}

// 3. Create a function that takes two arrays and combines them by alternatingly taking elements from each array in turn.
// https://edabit.com/challenge/kaNYPQQWHSX4zGNhj
function mergeArrays(a, b) {
  var merged = [];

  while (a.length > 0 || b.length > 0) {
		if (a.length > 0) { merged.push(a.shift()); }
		if (b.length > 0) { merged.push(b.shift()); }
  }

  return merged;
}

// 4. Create a function that takes an array of numbers and remove the smallest value. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array, return an empty array.
// https://edabit.com/challenge/9ukwiKyv8R9NHSt3d
function removeSmallest(arr) {
  var remove = arr[0];
  
  arr.forEach(function(number) {
    if (number < remove){ remove = number; }
  });
  
  arr.splice(arr.indexOf(remove), 1);
  
  return arr;
}

// 5. Create a function that takes an array of numbers and returns the sum of the two lowest positive integers. No floats or empty arrays will be used in any of the test cases.
// https://edabit.com/challenge/GNgCfKHWfQwByBNqa
function sumTwoSmallestNums(arr) {
  arr = arr.filter(function(number) {
    return number > 0;
  });

	var smallest = Math.min(...arr);
  
	arr.splice(arr.indexOf(smallest), 1);

	var secondSmallest = Math.min(...arr);

	return parseInt(smallest) + parseInt(secondSmallest);
}

// 6. Create a function that accepts an array of 10 integers (between 0 and 9) and returns a string of those numbers in the form of a phone number.
// https://edabit.com/challenge/Z6oY6EWwT9rde8YXm
function formatPhoneNumber(numbers) {
	numbers.splice(0, 0, '(');
	numbers.splice(4, 0, ') ');
	numbers.splice(8, 0, '-');
  
	return numbers.join('');
}

// 7. Create a function that takes an array of names and returns an array with the first letter capitalized.
// https://edabit.com/challenge/ZN5cpGPNRS3nrjMo5


// 8. Create a function that takes an array of numbers and returns the  following statistics:Minimum Value, Maximum Value, Sequence Length, Average Value
// https://edabit.com/challenge/gpozv9DbFqrHDmSQZ

// 9. Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// https://edabit.com/challenge/h7LTMAFeNz79rXB2Y

// 10. Create a function that takes an object and returns the keys and values as separate arrays.
// https://edabit.com/challenge/AP4hnF97anRc2mAZ6
