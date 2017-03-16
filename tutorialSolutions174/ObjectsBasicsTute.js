#Team Name #hateful-hedgehog @aishao
# Core Vanilla JavaScript #174

[X] /* Hello, object

Write the code, each line for an action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.*/

var user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

[X] /* Check for emptiness

Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
Should work like that:*/

function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

[X] /* Constant objects?

Is it possible to change an object declared with const, how do you think?*/

const user = {
  name: "John"
};
user.name = "Pete"; //This changes only the contents of the object
user = 123; //Here the variable itself is protected from change

[X] /* Sum object properties

Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
If salaries is empty, then the result must be 0. */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for(let key in salaries) {
  sum += salaries[key];
}
alert(sum); // Total is 390

[X] /* Multiply numeric properties by 2

Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
P.S. Use typeof to check for a number here.*/

/*For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
}; */

function multiplyNum(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
      }
    }
  }
