// Create an array
// Create a variable called noiseArray and assign it to an array literal... 
// ...place at least one element in the array
var noiseArray = ["beep"];

// Using a native array method
// 1) Add a noise to the beginning of the noiseArray
noiseArray.unshift("honk");
// 2) Add another noise to the end of the noiseArray
noiseArray.push("snore");

// Using Bracket Notation
// add another noise to the end
noiseArray[noiseArray.length] = "whistle";

// Inspect the noiseArray
// 1) What is the length?
noiseArray.length === 4
// 2) What is the last index? How is it different than the length?
The last index is 3, and the length is 4. The length is always one higher than the last
index because js starts with index 0

// Nest the Array in the Object
var animal = {
	username: "je-lopez",
	tagline: "helloooo",
	noises: noiseArray
};

// Create a variable called animals and set it equal to an empty array
var animals = [];
// Using any method you prefer, add your animal from the Object Exercises to the animals array
animals.push(animal);
// Create a variable called quackers and assign it to this example object:
// { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }
var quackers = {
	username: 'DaffyDuck',
	tagline: 'Yippeee!',
	noises: ['quack', 'honk', 'sneeze', 'growl']
};
// Add quackers to the animals array using a different method than before
animals.unshift(quackers);

// Create two more animal objects and add them to your animals array
var animalThree = {
	username: 'Stevie',
	tagline: 'Do it',
	noises: ['sneeze', 'burp']
};

var animalFour = {
	username: 'Zanimal',
	tagline: 'I Am Zanimal',
	noises: ['snore', 'sneeze', 'scream']
};

animals.push(animalThree, animalFour);
