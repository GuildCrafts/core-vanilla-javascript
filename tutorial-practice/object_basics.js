/* TASKS */

// Title: Hello, object
/*
Write the code, each line for an action:
Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/

var user = {}
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


// Title: Check for emptiness
/*
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
*/

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// Title: Constant objects?
/*
Is it possible to change an object declared with const, how do you think?

const user = {
  name: "John"
};

// does it work?
user.name = "Pete";
*/

var howIThink = true


// Title: Sum object properties
/*
We have an object storing salaries of our team:
*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
/*
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.
*/


const sumValues = (obj) => {
  let sum = 0;
  for(let key in obj) {
    sum += obj[key];
  }
  return sum;
}

// Title: Multiply numeric properties by 2
/*
Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
*/

const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if(typeof obj[key] === 'number') {
      obj[key] = obj[key]*2;
    }
  }
}
