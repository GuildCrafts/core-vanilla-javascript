// Exercises from https://learn.javascript.info/object#tasks

// Task 1
  let user = {};
  user.name = "John";
  user.surname = "Smith";
  user.name = "Pete";
  delete user.name;

// Task 2

  function isEmpty(obj) {
    for(let key in obj) {
      return false;
    }
    return true;
  }

// Task 3

  const user = {
    name: "John"
  };

  // does it work?
  user.name = "Pete";

  console.log(user.name);
  // Yes, the provided code works, the console log returns "Pete"

// Task 4

  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  var sum = 0;
  for (let salary in salaries) {
    sum += salaries[salary];
  };

// Task 5
  // before the call
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };



  // after the call
  // menu = {
  //   width: 400,
  //   height: 600,
  //   title: "My menu"
  // };

  function multiplyNumeric(obj){
    for (let item in obj) {
      if( isNaN(obj[item]) === false){
        obj[item] *= 2;
      };
    }
  };

  multiplyNumeric(menu);
