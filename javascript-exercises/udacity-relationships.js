function getRelationship(x, y) {

    if(isNaN(x) && isNaN(y)) {
        relationship = "Can't compare relationships because " + x + " and " + y + " are not numbers";
    }
    else if(isNaN(x)) {
        relationship = "Can't compare relationships because " + x + " is not a number";
    }
    else if(isNaN(y)) {
        relationship = "Can't compare relationships because " + y + " is not a number";
    }
    else if(x < y) {
        relationship = "<";
    }
    else if(x > y) {
        relationship = ">";
    }
    else if(x === y) {
        relationship = "=";
    }
    return relationship;
};

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));
