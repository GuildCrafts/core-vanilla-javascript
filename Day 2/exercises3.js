// Object:
// Create a variable, name it animal, and assign it an object literal
var animal = {};


// With Dot Notation:
// Add a property called username and assign it a value
// Ensure that your username property exists in animal by inspecting it in the console
animal.username = "Piggy";
console.log(animal.hasOwnProperty("username")); //prints true


// With Bracket Notation:
// 1.Add a property called tagline and give it a value
// 2.Check that your property exists in the animal object by inspecting it in the console
// 3.Create a variable called noises and assign it an empty array []
// 4.Add the noises array to your object
animal["tagline"] = "work it";
console.log(animal.hasOwnProperty("tagline")); //prints true

var noises = [];
animal["noises"] = noises;


// Loops:
// 1.Loop through the properties of your animal object
//   Count everytime it loops to keep track of the number of properties on your object.
// 2.Write an if/else statement in your loop:
//   If the key is username, console.log('Hi my name is ' + ___) 
//   If the key is tagline, console.log('I like to say ' + ___) 
var counter = 0;

Object.keys(animal).forEach(function(key) {
	counter += 1
	if (key === "username") { console.log("Hi my name is " + animal[key]); }

	if (key === "username") { console.log("Hi my name is " + animal[key]); }
	if (key === "tagline") { console.log("I like to say " + animal[key]); }
});

// What happens if you return 'Hi my name is ' + ___ instead of using console.log()
Returning something does not print it. Nothing will show up when running it through console





