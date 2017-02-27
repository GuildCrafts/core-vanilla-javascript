var animal = {};
animal.username = "whiskers";
console.log(animal);
animal["tagline"] = "I can haz cuddles?";
console.log(animal);
animal.noises = [];
console.log(animal);

var count = 0;
for(var propt in animal){
    count++;
  if (propt === "username"){console.log('Hi my name is ' + animal[propt])};
  if (propt === "tagline"){console.log('I like to say ' + animal[propt])};
  //if (propt === "username"){return 'Hi my name is ' + animal[propt]};
}

// Write an if/else statement in your loop:
// If the key is username, console.log('Hi my name is ' + ___) //fill in with object's username value.
// If the key is tagline, console.log('I like to say ' + ___) //fill in with object's tagline value.
// What happens if you return 'Hi my name is ' + ___ instead of using console.log() inside the loop?
//   Answer: we get "Illegal return statement"
