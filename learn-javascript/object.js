// Create an empty object user.
let user = {}
// Add the property name with the value John.
user.name = John
// Add the property surname with the value Smith.
user.surname = Smith
// Change the value of the name to Pete.
user.name = Pete
// Remove the property name from the object.
delete user.name

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(obj) {
  if ( Object.keys( obj ).length === 0 ) {
    return true
  } else {
    return false
  }
}

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.

function sum(salaries) {
  let total = 0
  if ( Object.keys( salaries ).length === 0 ) {
    return total = 0
  } else {
    for ( let person in salaries ) {
      total += salaries[ person ]
    }
    return total
  }
}

// Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
function multiplyNumeric(obj) {
  for ( key in obj ) {
    if ( typeof( obj[ key ] ) === 'number' ) {
      obj[ key ] = obj[ key ] * 2
    }
  }
}
