var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {

    for (var name = 0; name < names.length; name++) {
        names[name] = names[name].split(" ")[1] + ", " + names[name].split(" ")[0];
    };
    names.sort();
    return names;
};

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));
