// Part 1

function AnimalTestUser(username){
  return {username:username}
};
var testSheep = AnimalTestUser('CottonBall');
console.log(testSheep); //{ username: 'CottonBall' }


// Part 2
function AnimalTestUser(username){
  result = {username:username};
  if (arguments.length > 1) {
    var otherArgs = [];
    for (i = 1; i < arguments.length; i++) {
            otherArgs.push(arguments[i]);
            }
    result.otherArgs = otherArgs;
  }
  return result;
}
var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3] );
console.log(testSheep); //{ username: 'CottonBall', otherArgs: [ {'loves dancing': true}, [1,2,3] ] }

// Part 3
var AnimalCreator = function (username, species, tagline, noises){
  this.username = username;
  this.species = species;
  this.tagline = tagline;
  this.noises = noises;
  this.friends = [];

};

var sheep = new AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(sheep);
      // { username: 'Cloud',
      //  species: 'sheep',
      //  tagline: 'You can count on me!',
      //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
      //  friends: []
      // }

// Part 4


var AnimalCreator = function (username, species, tagline, noises){
  this.username = username;
  this.species = species;
  this.tagline = tagline;
  this.noises = noises;
  this.friends = [];

};
var sheep = new AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
var cow = new AnimalCreator('Moo', 'cow', 'Have a mootiful day!', ['Moo', 'chomp']);
var llama = new AnimalCreator('Zeny', 'llama', 'Happy hump day!', ['chewchewchew']);
function addFriend(animal,friend){
  animal.friends.push(friend);
};

// Write a function, addFriend that takes an animal object
// (like the one returned from the AnimalCreator function) and adds another animal object as a friend.

  addFriend(sheep, cow);
  console.log(sheep);
        // { username: 'Cloud',
        //  species: 'sheep',
        //  tagline: 'You can count on me!',
        //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
        //  friends: [{username: 'Moo', species: 'cow'...}]
        // }
  addFriend(sheep, llama);
  console.log(sheep);
        // { username: 'Cloud',
        //  species: 'sheep',
        //  tagline: 'You can count on me!',
        //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
        //  friends: [{username: 'Moo', species: 'cow'...}, {username: 'Zeny', species: 'llama'...}]
        // }


//Part 5

var AnimalCreator = function (username, species, tagline, noises){
  this.username = username;
  this.species = species;
  this.tagline = tagline;
  this.noises = noises;
  this.friends = [];

};
var sheep = new AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
var cow = new AnimalCreator('Moo', 'cow', 'Have a mootiful day!', ['Moo', 'chomp']);
var llama = new AnimalCreator('Zeny', 'llama', 'Happy hump day!', ['chewchewchew']);
function addFriend(animal,friend){
  animal.friends.push(friend.username);
};


  addFriend(sheep, cow);
  addFriend(sheep, llama);

//Part 6
var AnimalCreator = function (username, species, tagline, noises){
  this.username = username;
  this.species = species;
  this.tagline = tagline;
  this.noises = noises;
  this.friends = [];

};
var sheep = new AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
var cow = new AnimalCreator('Moo', 'cow', 'Have a mootiful day!', ['Moo', 'chomp']);
var llama = new AnimalCreator('Zeny', 'llama', 'Happy hump day!', ['chewchewchew']);
function addFriend(animal,friend){
  animal.friends.push(friend.username);
};

// Change your addFriend function to only add the username of the friend, not the whole object.

  addFriend(sheep, cow);
  addFriend(sheep, llama);


var myFarm = [sheep, cow, llama];
addFriend(cow, sheep);
addFriend(cow, llama);
addFriend(llama,sheep);
addFriend(llama,cow);

console.log(myFarm) //[{username: 'Cloud'...},{username: 'Zeny'...},{username: 'CottonBall'...}]

//Part 7
var AnimalCreator = function (username, species, tagline, noises){
  this.username = username;
  this.species = species;
  this.tagline = tagline;
  this.noises = noises;
  this.friends = [];

};
var sheep = new AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
var cow = new AnimalCreator('Moo', 'cow', 'Have a mootiful day!', ['Moo', 'chomp']);
var llama = new AnimalCreator('Zeny', 'llama', 'Happy hump day!', ['chewchewchew']);
function addFriend(animal,friend){
  animal.friends.push(friend.username);
};

// Create a function, addMatchesArray, that takes a farm (array of animal objects)
// and adds a new property to each animal object called matches that is an empty array.
// Hint: you will need a loop.

  addFriend(sheep, cow);

  addFriend(sheep, llama);

var myFarm = [sheep, cow, llama];
addFriend(cow, sheep);
addFriend(cow, llama);
addFriend(llama,sheep);
addFriend(llama,cow);

function addMatchesArray(arr){
  for (var i=0;i<arr.length;i++){
    arr[i].matches = [];
  }
};

addMatchesArray(myFarm);
console.log(myFarm[0]); // { username: 'Cloud',
        //  species: 'sheep',
        //  tagline: 'You can count on me!',
        //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
        //  friends: ['Moo', 'Zeny'],
        //  matches: []
        // }

//Part 8
var AnimalCreator = function (username, species, tagline, noises){
  this.username = username;
  this.species = species;
  this.tagline = tagline;
  this.noises = noises;
  this.friends = [];

};
var sheep = new AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
var cow = new AnimalCreator('Moo', 'cow', 'Have a mootiful day!', ['Moo', 'chomp']);
var llama = new AnimalCreator('Zeny', 'llama', 'Happy hump day!', ['chewchewchew']);
function addFriend(animal,friend){
  animal.friends.push(friend.username);
};

// Create a function, giveMatches, that takes a farm collection (aka an array of animal objects)
// that already has a matches property. It selects a name from the friends array and adds it to
// the matches array. You can choose how the selection is made (random, the first element, etc).
// Make sure all your animal objects have friends.

  addFriend(sheep, cow);

  addFriend(sheep, llama);

var myFarm = [sheep, cow, llama];
addFriend(cow, sheep);
addFriend(cow, llama);
addFriend(llama,sheep);
addFriend(llama,cow);

function addMatchesArray(arr){
  for (var i=0;i<arr.length;i++){
    arr[i].matches = [];
  }
};

function giveMatches(arr){
  for (var i=0;i<arr.length;i++){
    arr[i].matches[0] = arr[i].friends[0];
  }
};

addMatchesArray(myFarm);
giveMatches(myFarm);
console.log(myFarm[0]); // { username: 'Cloud',
        //  species: 'sheep',
        //  tagline: 'You can count on me!',
        //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
        //  friends: ['Moo', 'Zeny'],
        //  matches: ['Zeny']
        // }
