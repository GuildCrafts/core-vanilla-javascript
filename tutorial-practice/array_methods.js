//TITLE: Translate border-left-width to borderLeftWidth
/* Write the function camelize(str) that changes dash-separated words like
“my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.
*/

const camelize = (input) => {
  let inputArray = input.split('')
  inputArray.forEach(function(item, index, array) {
    if (inputArray[index] === '-') {
      inputArray[index+1] = inputArray[index+1].toUpperCase()
      inputArray.splice(index, 1)
    }
  })
  inputArray = inputArray.join('')
  return inputArray
}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';


//TITLE: Filter "in place"
/*Write a function filterRange(arr, a, b) that gets an array arr, looks for
elements between a and b in it and returns an array of them.

The function should not modify the array. It should return the new array.
*/

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)


//TITLE: Filter "in place"
/*Write a function filterRangeInPlace(arr, a, b) that gets an array arr and
removes from it all values except those that are between a and b. The test is:
a ≤ arr[i] ≤ b`.

The function should only modify the array. It should not return anything.*/

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]


//TITLE: Sort in the reverse order
let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in the reverse order

alert( arr ); // 8, 5, 2, 1, -10


//TITLE: Copy and sort array
/* We have an array of strings arr. We’d like to have a sorted copy of it, but
keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.*/

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)


//TITLE: Map to names

/* You have an array of user objects, each one has user.name. Write the code
that converts it into an array of names.*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = /* ... your code */

alert( names ); // John, Pete, Mary


//TITLE: Map to objects
/*You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName,
where fullName is generated from name and surname.*/


let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = /* ... your code ... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
/* So, actually you need to map one array of objects to another.
Try using => here. There’s a small catch.*/

//TITLE: Sort objects
/* Write the function sortByName(users) that gets an array of objects with
property name and sorts it.*/


let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 28 }

let arr = [ john, pete, mary ];

lsortByName(arr);

// now: [john, mary, pete]
alert(arr[1].name) // Mary


//TITLE: Get average age

/* Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

The formula for the average is (age1 + age2 + ... + ageN) / N. */

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 29 }

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25+30+29)/3 = 28


//TITLE: Filter unique array members

/* Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance: */

function unique(arr) {
  /* your code */
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
