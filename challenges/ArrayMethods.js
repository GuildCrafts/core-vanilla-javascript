#Team Name #hateful-hedgehog @aishao
# Core Vanilla JavaScript #174


[X] /* Map to names
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
 */
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let names = [ "John", " Pete", " Mary"];

alert( names );

[X] /* Map to objects
You have an array of user objects, each one has name, surname and id.
Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
  */
  let john = { name: "John", surname: "Smith", id: 1 };
  let pete = { name: "Pete", surname: "Hunt", id: 2 };
  let mary = { name: "Mary", surname: "Key", id: 3 };

  let users = [ john, pete, mary ];
  let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
  });
  alert( usersMapped[0].id )
  alert( usersMapped[0].fullName )


[X] /* Sort objects
Write the function sortByName(users) that gets an array of objects with property name and sorts it.
   */
let jon = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 28 }

let names = [ john, pete, mary ];

lsortByName( names );
alert ( names[1].name )

[X] /* Get average age
Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.
The formula for the average is (age1 + age2 + ... + ageN) / N.
    */
  function getAverageAge(users) {
    return arr.reduce((previous, user) => prev + user.age, 0) / arr.length;
  }
  let jon = { name: "John", age: 25 }
  let pete = { name: "Pete", age: 30 }
  let mary = { name: "Mary", age: 29 }

  let names = [ john, pete, mary ];
  alert( getAverageAge(arr) );

[X] /* Filter unique array members
Let arr be an array. Create a function unique(arr) that should return an array with unique items of arr.
     */

     function unique(arr) {
       let result = [];

       for (let str of arr) {
         if (!result.includes(str) {
           result.push(str);
         }
       }
       return result;
     }

     let strings = ["Hare", "Krishna", "Hare", "Krishna",
       "Krishna", "Krishna", "Hare", "Hare", ":-O"];

     alert( unique(strings) );
