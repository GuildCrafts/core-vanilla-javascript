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
    alphaCount = 1;
    counter = 0;
    while (alphaCount > 0) {
        for (var name = 0; name < names.length; name++) {
            if( name !== 0 && names[name].split(" ")[1] < names[name-1].split(" ")[1]) {
                nameHolder = names[name-1];
                names[name-1] = names[name];
                names[name] = nameHolder;
                counter++;
                console.log(counter);
            };
        };
        if (counter === 0) {alphaCount = 0;};
        counter = 0;
    };
    return names;
};

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));
