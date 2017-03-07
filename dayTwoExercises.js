// Create a variable called noiseArray and assign it to an array literal. 
// Place at least one element in the array
var noiseArray = ['snore']


// Add a noise to the beginning of the noiseArray
// Add another noise to the end of the noiseArray
noiseArray.unshift('sneeze')
noiseArray.push('cough')


// Using Bracket Notation… add another noise to the end
noiseArray[noiseArray.length] = 'burp'


// Inspect the noiseArray: What is the length? 
												// What is the last index? 
											  // How is it different than the length?
												// Inspect your handiwork! What does it look like?
noiseArray.length // 4
noiseArray.length - 1 // 3, the last index is one less than length. arrays start with index 0
noiseArray === ['sneeze', 'snore', 'cough', 'burp']


// Put the noiseArray inside the animal object on the noises property
var animal = {
	username: 'Piggy',
	tagline: 'Oink!'
}

animal.noises = noiseArray


// What are the different ways you can add properties and values to arrays?
"you can use .push(), .unshift(), or bracket notation using [array.length -1]"
// Come up with two ways you can add an element to the end of an array, without knowing the exact length of the array
"array.push() and array[array.length -1]"


// Create a variable called animals and set it equal to an empty array
var animals = []

// Using any method you prefer, add your animal from the Object Exercises to the animals array.
animals.push(animal)

// Create a variable called quackers and assign it to this example object:
// { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }
var quackers = {
	username: 'DaffyDuck',
	tagline: 'Yippeee!',
	noises: ['quack', 'honk', 'sneeze', 'growl']
}

// Add quackers to the animals array using a different method than before
animals.unshift(quackers)

// Inspect your animals array to ensure you have two objects inside
console.log(animals)

// Create two more animal objects and add them to your animals array
var chicken = {
	username: 'Little',
	tagline: 'Peck Peck',
	noises: ['yawn', 'sneeze']
}

var hippo = {
	username: 'Big Boy',
	tagline: 'Move!',
	noises: ['yawn', 'snore', 'sneeze']
}

animals.push(hippo, chicken)

// Check the length property of your array. It should give you 4.
console.log(animals.length)



// Write a function, AnimalTestUser, that has one string parameter, username. 
// It returns an object with a username property
function AnimalTestUser(username) {
	return { username: username }
}


// In your AnimalTestUser function, create a check that sees how many arguments are passed. 
// If there is more than one argument, create a property, otherArgs that is an array of remaining
// arguments. Note: the arguments keyword is not a true array. It is an array-like object
function AnimalTestUser(username) {
	var obj = { username: username }
	
	var otherArgs = []

	for (i = 1; i < arguments.length; i++) {
		otherArgs.push(arguments[i])
	}

	obj.otherArgs = otherArgs
}


// Write a constructor function, AnimalCreator that returns a single animal object. 
// The constructor function has 4 parameters: username, species, tagline, and noises. 
// Animal object should have at least 5 properties: username, species, noises, tagline, and friends
// The values should all be strings except noises and friends, which are arrays
function AnimalCreator(username, species, tagline, noises) {
	return {
		username: username,
		species: species,
		tagline: tagline,
		noises: noises,
		friends: []
	}
}


// Write a function, addFriend that takes an animal object (like the one returned from 
// the AnimalCreator function) and adds another animal object as a friend
function addFriend(animal, friend) {
	animal.friends.push(friend)
}


// Change your addFriend function to only add the username of the friend, not the whole object.
function addFriend(animal, friend) {
	animal.friends.push(friend.username)
}


// Create a myFarm collection of at least 3 animal objects. 
// Give them some friends using addFriend, too!
var animalOne = AnimalCreator('First Animal', 'Pig', 'I Oink!', ['sneeze', 'burp'])
var animalTwo = AnimalCreator('Second Animal', 'Dog', 'I Bark!', ['snore', 'cough'])
var animalThree = AnimalCreator('Third Animal', 'Cat', "I don't care", ['meow', 'yawn'])

var myFarm = [animalOne, animalTwo, animalThree]

addFriend(animalOne, animalThree)
addFriend(animalTwo, animalOne)
addFriend(animalThree, animalOne)


// Create a function, addMatchesArray, that takes a farm (array of animal objects) and adds 
// a new property to each animal object called matches that is an empty array. 
function addMatchesArray(farm) {
	for (animal of farm) {
		animal.matches = []
	}
}


// Create a function, giveMatches, that takes a farm collection (aka an array of animal objects) 
// that already has a matches property. It selects a name from the friends array and adds it to 
// the matches array. You can choose how the selection is made (random, the first element, etc). 
// Make sure all your animal objects have friends.
function giveMatches(farm) {
	for (animal of farm) {
		animal.matches.push(animal.friends[0])
	}
}



// Create a variable, name it animal, and assign it an object literal.
var animal = {}

// With Dot Notation… 
// Add a property called username and assign it a value
// Ensure that your username property exists in animal by inspecting it in the console
animal.username = 'je-lopez'
console.log(animal)


// With Bracket Notation…
// Add a property called tagline and give it a value.
// Check that your property exists in the animal object by inspecting it in the console.
// Create a variable called noises and assign it an empty array []
// Add the noises array to your object.
// Inspect your handiwork!
animal['tagline'] = 'I am Jorge'
console.log(animal)

var noises = []
animal.noises = noises
console.log(animal)


// Loop through the properties of your animal object.
// Count everytime it loops to keep track of the number of properties on your object.
// Write an if/else statement in your loop:
// If the key is username, console.log('Hi my name is ' + ___) //fill in with object's username value.
// If the key is tagline, console.log('I like to say ' + ___) //fill in with object's tagline value.
Object.keys(animal).forEach(function (key) {
	switch(key) {
		case 'username':
			console.log('Hi my name is ' + animal[key])
			break
		case 'tagline':
			console.log('I like to say ' + animal[key])
	}
})

// What happens if you return 'Hi my name is ' + ___ instead of using console.log() inside the loop?
"using return alone will not print anything"


// What are the different ways you can add properties and values to objects?
"you can add properties using dot or bracket notation: obj.prop = value, obj['prop'] = value"
// Which of these methods would you use if you wanted to add a property to an object that had a weird symbol (think '&')?
"I would use bracket notation"
// What about if the property is a variable, how does that change the syntax?
"if the property is a variable, use bracket notation without parenthesis: obj[variable] = value"
