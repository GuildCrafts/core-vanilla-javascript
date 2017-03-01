// Complete the last 5 tasks of Objects Basics Tutorial
// 1) Hello, object
var user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


// 2) Check for emptiness
function isEmpty(obj) {
	for (key in obj) {
		return false;
	}
	return true;
}


// 3) Constant objects
Yes, the object can be changed, but not the variable itself. 
In other words, you can update the keys/values, but it will remain an object.


// 4) Sum object properties
var salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

if (Object.keys(salaries).length) {
	var sum = 0;
	for (keys in salaries) {
		sum += salaries[keys]
	}
	return sum;
}


// 5) Multiply numeric properties by 2
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
	Object.keys(obj).forEach(function(key) {
		if (Number.isInteger(obj[key])) { obj[key] *= 2 }
	});
}


// Complete the last 5 tasks of Arrays Tutorial
// 1) Is array copied?
The output once calling .length on the fruits array will print '4'.


// 2) Array operations
var styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[(styles.length / 2) + 1] = "Classics";
console.log( styles.shift() );
styles.unshift("Rap", "Reggie");


// 3) Calling in an array context
It will have a length equal to '3', becuase it is the 
intitial two items plus the funct that is pushed.


// 4) Sum input numbers
function sumInput() {
	var values = [];
	var total = 0;

	while (true) {
		var value = prompt("Enter a number");

		if (Number.isInteger(value)) { 
			values.push(value); 
		} else {
			break;
		}
	}

	for (num of values) {
		total += num; 
	}
	return total;
}


// 5) A maximal subarray


