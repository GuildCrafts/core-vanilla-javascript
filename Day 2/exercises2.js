// 1) Write a function, AnimalTestUser, that has one string parameter, username...
//    ...It returns an object with a username property
function AnimalTestUser(username) {
	this.username = username;

	return this;
}


// 2) In your AnimalTestUser function, create a check that sees how many arguments are passed. 
//    If there is more than one argument, create a property, otherArgs that is an array of the 
//    remaining arguments. 
//    Note: the arguments keyword is not a true array. Remember, it is an array-like object
function AnimalTestUser(username) {
	var extraArguments = [];

	if (arguments.length > 1) {
		for (var i = 1; i < arguments.length; i++) {
			extraArguments.push(arguments[i]);
		}
		this["otherArgs"] = extraArguments;
	}
	
	return this;
}


// 3) Write a constructor function, AnimalCreator that returns a single animal object. 
//    The constructor function has 4 parameters: username, species, tagline, and noises. 
//    The animal object should have at least 5 properties: username, species, noises, tagline, 
//    and friends. The values should all be strings except noises and friends, which are arrays.
function AnimalCreator(username, species, tagline, noises) {
	this.username = username;
	this.species = species;
	this.tagline = tagline;
	this.noises = noises;
	this.friends = [];
}


// 4) Write a function, addFriend that takes an animal object (like the one returned from 
//    the AnimalCreator function) and adds another animal object as a friend.
function addFriend(obj, friend) {
	obj.friends.push(friend);
}


// 5) Change your addFriend function to only add the username of the friend, not whole object
function addFriend(obj, friend) {
	obj.friends.push(friend.username);
}


// 6) Create myFarm collection of at least 3 animal objects. Give them friends using addFriend
var one = new AnimalCreator("Simon", "dog", "barkz", ["bark", "woof"]);
var two = new AnimalCreator("Val", "cat", "meee", ["meow", "sneeze"]);
var three = new AnimalCreator("Edd", "fish", "sluuuuurp", ["fish noises", "fish noisesss"]);

var myFarm = [one, two, three];

addFriend(one, two);
addFriend(two, three);
addFriend(three, one);


// 7) Create a function, addMatchesArray, that takes a farm (array of animal objects) 
//    and adds a new property to each animal object called matches that is an empty array.
function addMatchesArray(farm) {
	farm.forEach(function(animal) {
		animal.matches = [];
	});
}


// 8) Create a function, giveMatches, that takes a farm collection (an array of animal objects)
//    that already has a matches property. It selects a name from the friends array and adds it 
//    to the matches array. You can choose how the selection is made (random, the first element)
//    Make sure all your animal objects have friends
function giveMatches(farm) {
	farm.forEach(function(animal) {
		animal.matches.push(animal.friends[0]);
	});
}

