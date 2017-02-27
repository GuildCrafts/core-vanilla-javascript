// Array Basics Exercises from https://learn.javascript.info/array

// Exercise 1

  //What is this code going to show?
  let fruits = ["Apples", "Pear", "Orange"];

  // push a new value into the "copy"
  let shoppingCart = fruits;
  shoppingCart.push("Banana");

  // what's in fruits?
  alert( fruits.length ); // ?

  // Answer: 4

// Exercise 2

  // Let’s try 5 array operations.
  //
  // Create an array styles with items “Jazz” and “Blues”.
  // Append “Rock-n-Roll” to the end.
  // Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
  // Strip off the first value of the array and show it.
  // Prepend Rap and Reggie to the array.
  // The array in the process:
  //
  // Jazz, Blues
  // Jazz, Bues, Rock-n-Roll
  // Jazz, Classics, Rock-n-Roll
  // Classics, Rock-n-Roll
  // Rap, Reggie, Classics, Rock-n-Roll

  styles = ["Jazz","Blues"];
  styles.push("Rock-n-Roll");
  var mid = Math.trunc(styles.length / 2);
  styles[mid] = "Classics";
  alert(styles.shift());
  alert(styles);
  styles.unshift("Rap","Reggae");

// Exercise 3

  //What is the result? Why?

  let arr = ["a", "b"];

  arr.push(function() {
    alert( this );
  })

  arr[2](); // ?

  // Answer:
//   a,b,function () {
//   alert( this );
// }

// Exercise 4

  // Write the function sumInput() that:
  //
  // Asks the user for values using prompt and stores the values in the array.
  // Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
  // Calculates and returns the sum of array items.
  // P.S. A zero 0 is a valid number, please don’t stop the input on zero.


// My code (did not work)
  function sumInput() {
    let arr = [];
    let sum = 0;
    while (true) {
      let val = prompt("Enter Number:", 0);
      if (isNaN(val) === true) break;
      arr.push(val);
      sum += val;
    };
    return sum;
  };

  // Modified solution code, did not work as originally printed, but I added a line that made it work
    function sumInput() {

      let numbers = [];

      while (true) {

        let value = prompt("A number please?", 0);

        // should we cancel?
        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
      }

      let sum = 0;
      for (let number of numbers) {
        sum += number;
      }
    	return sum;
    }

    alert( sumInput() );


// Exercise 5
  // The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
  //
  // The task is: find the contiguous subarray of arr with the maximal sum of items.
  //
  // Write the function getMaxSubSum(arr) that will find return that sum.
  //
  // For instance:
  // getMaxSubSum([-1, 2, 3, -9]) = 5 (the sum of highlighted items)
  // getMaxSubSum([2, -1, 2, 3, -9]) = 6
  // getMaxSubSum([-1, 2, 3, -9, 11]) = 11
  // getMaxSubSum([-2, -1, 1, 2]) = 3
  // getMaxSubSum([100, -9, 2, -3, 5]) = 100
  // getMaxSubSum([1, 2, 3]) = 6 (take all)
  // If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:
  //
  // getMaxSubSum([-1, -2, -3]) = 0

  function getMaxSubSum(arr) {
    let maxSum = 0;
    for (var start = 0; start < arr.length; start++) {
      let curSum = 0;
      for (var finish = start; finish < arr.length; finish++) {

        console.log("start " + start);
        console.log("finish " + finish);
        curSum += arr[finish];
        console.log("curSum: " + curSum)
        maxSum = Math.max(maxSum, curSum);
      };
    };
    console.log("maxSum: " + maxSum);
    return maxSum;
  };
