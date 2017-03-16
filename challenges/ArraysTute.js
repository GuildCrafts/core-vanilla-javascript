#Team Name #hateful-hedgehog @aishao
# Core Vanilla JavaScript #174


[X] /* Is array copied?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // ? */

let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits; // puts fruits array into a new box
shoppingCart.push("Banana"); // adds "Banana" to array
alert( fruits.length ); // Gives length of the array which is 4

[X] /* Array operations.
Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggie to the array.
The array in the process:

Jazz, Blues
Jazz, Bues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggie, Classics, Rock-n-Roll */

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[(styles.length + 1) / 2 = "Classics";
alert( styles.shift( ) );
styles.unshift("Rap, "Reggie); // pretty cool :)

[X] /* Calling in an array context
What is the result? Why?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})
arr[2](); // ? */

let arr = ["a", "b"];
arr.push(function() { // Appends function to end of array
  alert( this );
})
arr[2](); // will print "a","b",function

[X] /* Sum input numbers
Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/

function sumInput() {
  let numbers = []
  while (true) {
    let value = prompt("Please enter a number", 0);
        if (value === "" || vale === null || !isFinite(value)) break;

        numbers.push(+value);
      }
      let sum = 0;
        for (let number of numbers) {
          sum += number;
        }
      }
      alert( sumInput() );


[X] >>>LETS TALK ABOUT THIS ONE PLEASE O(n2)<<< /* A maximal subarray
The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will find return that sum.

For instance:

getMaxSubSum([-1, 2, 3, -9]) = 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (take all)
*/

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr; i++) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0
