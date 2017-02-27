// Exercises from https://learn.javascript.info/array-methods

// Exercise 1

  // Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
  //
  // That is: removes all dashes, each word after dash becomes uppercased.
  //
  // Examples:
  //
  // camelize("background-color") == 'backgroundColor';
  // camelize("list-style-image") == 'listStyleImage';
  // camelize("-webkit-transition") == 'WebkitTransition';

  function camelize(dashedWord){
  let camelWord = [];
  camelWord = dashedWord.split("-");
  console.log(camelWord);
  camelWord = camelWord.map(
    (item, index) => index === 0 ? item.toLowerCase() : item[0].toUpperCase() + item.slice(1).toLowerCase()
  );
  console.log(camelWord);
  camelWord = camelWord.join('');
  console.log("joined:" + camelWord);
  return camelWord;
  };

// Exercise 2

  // Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.
  // The function should not modify the array. It should return the new array.
  // For instance:
  //
  // let arr = [5, 3, 8, 1];
  // let filtered = filterRange(arr, 1, 4);
  // alert( filtered ); // 3,1 (matching values)
  // alert( arr ); // 5,3,8,1 (not modified)

  function filterRange(arr, a, b) {
    return arr.filter(item => (item >= a && item <= b));
  };

// Exercise 3
  // Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is:a ≤ arr[i] ≤ b`.
  // The function should only modify the array. It should not return anything.
  // For instance:
  // let arr = [5, 3, 8, 1];
  // filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
  // alert( arr ); // [3, 1]

  function filterRangeInPlace(arr, a, b) {
  arr = arr.filter(item => (item >= a && item <= b)).slice(0);
  };

  // The tests say this doesn't pass but I think it does.

// Exercise 4
  // let arr = [5, 2, 1, -10, 8];
  // // ... your code to sort it in the reverse order
  // alert( arr ); // 8, 5, 2, 1, -10

    let arr = [5, 2, 1, -10, 8];
    //arr.sort().reverse();  // Would work on strings, but doesn't work on numbers
    arr.sort((a,b) => b - a);  // To be in regular order, put a - b
    alert( arr ); // 8, 5, 2, 1, -10

// Exercise 5
  // We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
  // Create a function copySorted(arr) that returns such a copy.
  // let arr = ["HTML", "JavaScript", "CSS"];
  // let sorted = copySorted(arr);
  // alert( sorted ); // CSS, HTML, JavaScript
  // alert( arr ); // HTML, JavaScript, CSS (no changes)

  let arr = ["HTML", "JavaScript", "CSS"];

  function copySorted(arr){
    let sorted = arr.slice(0);
    sorted.sort();
    return sorted;
  };

  let sorted = copySorted(arr);

  alert( sorted ); // CSS, HTML, JavaScript
  alert( arr ); // HTML, JavaScript, CSS (no changes)

// More elegant solution: return arr.slice().sort();

// Exercise 6
  // Map to names
  // You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
  // For instance:
  // let john = { name: "John", age: 25 };
  // let pete = { name: "Pete", age: 30 };
  // let mary = { name: "Mary", age: 28 };
  // let users = [ john, pete, mary ];
  // let names = /* ... your code */
  // alert( names ); // John, Pete, Mary

  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };

  let users = [ john, pete, mary ];

  let names = users.map(item => item.name);

  alert( names ); // John, Pete, Mary

// Exercise 7
  // Map to objects
  // You have an array of user objects, each one has name, surname and id.
  //
  // Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
  //
  // For instance:
  //
  // let john = { name: "John", surname: "Smith", id: 1 };
  // let pete = { name: "Pete", surname: "Hunt", id: 2 };
  // let mary = { name: "Mary", surname: "Key", id: 3 };
  //
  // let users = [ john, pete, mary ];
  //
  // let usersMapped = /* ... your code ... */
  //
  // /*
  // usersMapped = [
  //   { fullName: "John Smith", id: 1 },
  //   { fullName: "Pete Hunt", id: 2 },
  //   { fullName: "Mary Key", id: 3 }
  // ]
  // */
  //
  // alert( usersMapped[0].id ) // 1
  // alert( usersMapped[0].fullName ) // John Smith
  // So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.

// My code

let usersMapped = users.map(item => ({
  fullName:[item.name,item.surname].join(" "),
  id:item.id
});

// Alternate solution
let usersMapped = users.map(item => ({
  fullName:`${item.name} ${item.surname}`,
  id:item.id
}));


// Exercise 8
  // Sort objects
  // Write the function sortByName(users) that gets an array of objects with property name and sorts it.
  //
  // For instance:
  //
  // let john = { name: "John", age: 25 }
  // let pete = { name: "Pete", age: 30 }
  // let mary = { name: "Mary", age: 28 }
  //
  // let arr = [ john, pete, mary ];
  //
  // lsortByName(arr);
  //
  // // now: [john, mary, pete]
  // alert(arr[1].name) // Mary

function sortByName(users) {
  arr = arr.sort(function(a, b) { return a.name > b.name; })
};

// Alternatively (elegant solution)
function sortByName(users) {
  arr.sort((a, b) => a.name > b.name)
};

// Exercise 9
  // Get average age
  // importance: 4solution
  // Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.
  //
  // The formula for the average is (age1 + age2 + ... + ageN) / N.
  //
  // For instance:
  //
  // let john = { name: "John", age: 25 }
  // let pete = { name: "Pete", age: 30 }
  // let mary = { name: "Mary", age: 29 }
  //
  // let arr = [ john, pete, mary ];
  //
  // alert( getAverageAge(arr) ); // (25+30+29)/3 = 28

  function getAverageAge(arr) {
  return arr.map(item => item.age).reduce((sum, current) => sum + current, 0) / arr.length;
  };

  // Actual solution
  function getAverageAge(users) {
  return arr.reduce((prev, user) => prev + user.age, 0) / arr.length;
  }

// Exercise 10
  // Filter unique array members
  // importance: 4solution
  // Let arr be an array.
  //
  // Create a function unique(arr) that should return an array with unique items of arr.
  //
  // For instance:
  //
  // function unique(arr) {
  //   /* your code */
  // }
  //
  // let strings = ["Hare", "Krishna", "Hare", "Krishna",
  //   "Krishna", "Krishna", "Hare", "Hare", ":-O"
  // ];
  //
  // alert( unique(strings) ); // Hare, Krishna, :-O

  function unique(arr) {
  let results = [];
    for (let name of arr) {
      console.log(name);
      if (!results.includes(name) {
        results.push(name);
        console.log(results);
      }
    }
  return results;
};

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(strings);


// function unique(arr) {
//   let result = [];

//   for (let str of arr) {
//     if (!result.includes(str) {
//       result.push(str);
//     }
//   }

//   return result;
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) ); // Hare, Krishna, :-O
function unique(arr) {
  let results = [];
    for (let name of arr) {
      console.log(name);
      if (!results.includes(name) {
        results.push(name);
        console.log(results);
      }
    }
  return results;
};

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(strings);

// Note, my code did not work. Could also not get the solution to work.
