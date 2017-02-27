var noiseArray = ["whoop"];
noiseArray.unshift("holla");
noiseArray.push("meow");
noiseArray[noiseArray.length] = "woof";
console.log(noiseArray.length);
console.log(noiseArray.indexOf(noiseArray[noiseArray.length-1]));
console.log(noiseArray);

var animal = {username: 'DaffyDuck', tagline: 'Yippeee!', noises: noiseArray};
console.log(animal);

var animals = [];
animals.push(animal);
var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] };
animals[animals.length] = quackers;

console.log(animals);

var whiskers = { username: 'Mr. Fuzz', tagline: 'Cuddles!', noises: ['mew', 'meow'] };
var meowza = { username: 'Prickles', tagline: 'Go away!', noises: ['hsssss', 'grrrr'] };
animals.push(whiskers);
animals.push(meowza);

console.log(animals);
