function Acronyms () {
  this.name = 'acronym generator'
}

Acronyms.parse = function(str) {
  var arr = [];

  for (var i = 0; i < str.length; i++) {
    var currentLetter = str[i];
    console.log('currentLetter', currentLetter)

    if (currentLetter === currentLetter.toUpperCase()) {
      if(/[A-Z]/.test(currentLetter)){

        arr.push(currentLetter)
      }
    }

  return arr.join('');
}


module.exports = Acronyms;
