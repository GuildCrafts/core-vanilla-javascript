var Bob = function() {};

Bob.prototype.hey = function(what) {
    if (what === what.toUpperCase() && what.toUpperCase() != what.toLowerCase()){
      return "Whoa, chill out!";
    };
    if (what.slice(-1) === "?") {  //only extract the last character
      return "Sure.";
    }
    if (what.trim().length == 0) {
      return "Fine. Be that way!"
    }
    return "Whatever.";
};

module.exports = Bob;
