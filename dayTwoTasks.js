// Hello, object
//
// 1. Create an empty object user.
// 2. Add the property name with the value John.
// 3. Add the property surname with the value Smith.
// 4. Change the value of the name to Pete.
// 5. Remove the property name from the object.
var user = {}

user.name = "John"

user.surname = "Smith"

user.name = "Pete"

delete user.name


// Check for emptiness
// 
// Write the function isEmpty(obj) which returns true if the object has no properties, 
// and false otherwise
function isEmpty(object) {
	return Object.keys(object).length === 0 ? true : false
}


// Constant objects?
// 
// Is it possible to change an object declared with const, how do you think?
"Yes and no. 'const' protects the variable from changing, but not its content."


// Sub object properties
//
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example.
// If salaries is empty, then the result must be 0.
var salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumOfSalaries(obj) {
	var sum = 0

	for (key in obj) {
		sum += obj[key]
	}

	return sum
}


// Multiply numeric properties by 2
// 
// Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
// after the call:
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// }
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
}

function multiplyNumeric(obj) {
	for (key in obj) {
		if (typeof obj[key] === 'number') obj[key] *= 2
	}
}


// Is array copied? What is this code is going to show?
// 
// let fruits = ["Apples", "Pear", "Orange"];
// let shoppingCart = fruits;
// shoppingCart.push("Banana");
// alert( fruits.length );
"Line 82 will print 4"


// Array operations
// d d d d d
// 1. Create an array styles with items “Jazz” and “Blues”.
// 2. Append “Rock-n-Roll” to the end.
// 3. Replace the value in the middle by “Classics”. 
//    Your code for finding the middle value should work for any arrays with odd length.
// 4. Strip off the first value of the array and show it.
// 5. Prepend Rap and Reggie to the array.
var styles = ['Jazz', 'Blues']

styles.push('Rock-n-Roll')

styles[(styles.length - 1) / 2] = 'Classics'

console.log(styles.shift())

styles.unshift('Rap', 'Reggie')


// Calling in an array context. What is the result? Why?
// let arr = ["a", "b"];
// arr.push(function() {
//   alert( this );
// })
// arr[2]();
"Since 'this' references the object itself, it will return every item in the 'arr' array "


// Sum input numbers
// 
// Write the function sumInput() that:
// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
function sumInput() {
	var values = []

	while (true) {
		var value = prompt('I need a value!')

		if (value === "" || value === null || !isFinite(value)) break;

		values.push(value)
	}

	return values.reduce(function (sum, number) {
		return sum += number
	})
}


// A maximal subarray
// 
// 


// Map to names
// 
// You have an array of user objects, each one has user.name. 
// Write the code that converts it into an array of names For instance:
	var john = { name: "John", age: 25 }
	var pete = { name: "Pete", age: 30 }
	var mary = { name: "Mary", age: 28 }
	var users = [ john, pete, mary ]
// let names = /* ... your code */
var names = users.map(function (obj) {
	return obj.name
})


// Map to objects
// 
// You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and fullName, 
// where fullName is generated from name and surname.
var john = { name: "John", surname: "Smith", id: 1 };
var pete = { name: "Pete", surname: "Hunt", id: 2 };
var mary = { name: "Mary", surname: "Key", id: 3 };
var users = [ john, pete, mary ];
// var usersMapped = /* ... your code ... */
var usersMapped = users.map(function (obj) {
	return { fullname: obj.name + ' ' + obj.surname, id: obj.id }
})


// Sort objects
// 
// Write the function that gets an array of objects with property name and sorts it
var johny = { name: "Johny", age: 25 }
var petey = { name: "Petey", age: 30 }
var maryy = { name: "Maryy", age: 28 }

var arr = [ johny, petey, maryy ];

// lsortByName(arr);

// now: [john, mary, pete]
// alert(arr[1].name) // Mary

function sortByName(arr) {
	arr.sort(function (a, b) {
		return a.name > b.name
	})
}


// Get average age
// 
// Write the function getAverageAge(users) that gets an array of 
// objects with property age and gets the average.
function getAverageAge(arr) {
	var sum = 0

	for (i = 0; i < arr.length; i++) {
		sum += arr[i].age
	}

	return sum / arr.length
}


// Filter unique array members
// 
// Create a function unique(arr) that should return an array with unique items of arr.
function unique(arr) {
	return Array.from(new Set(arr))
}

