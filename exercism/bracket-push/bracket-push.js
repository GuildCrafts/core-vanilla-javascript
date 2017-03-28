var bracket = function(string) {

  var openChar = ['{', '[', '(']
  var closeChar = ['}', ']', ')']

  var openBracket = [];
  var closeBracket = [];

  var answer = [];

  for ( var i = 0; i < string.length; i++ ) {
    for ( var j = 0; j < openChar.length; j++ ) {
      if ( string[i] === openChar[j] ) {
        openBracket.push(string[i]);
      }
    }
  }

  for ( var i = 0; i < string.length; i++ ) {
    for ( var j = 0; j < closeChar.length; j++ ) {
      if ( string[i] === closeChar[j] ) {
        closeBracket.push(string[i]);
      }
    }
  }

  for ( var i = 0; i < openBracket.length; i++ ) {
    for (var j = 0; j < closeBracket.length; j++ ) {
      if ( openBracket[i] === openChar[0] && closeBracket[j] === closeChar[0] ) {
        answer.push(openBracket[i]);
        answer.push(closeBracket[j]);
      }
    }
  }

  for ( var i = 0; i < openBracket.length; i++ ) {
    for (var j = 0; j < closeBracket.length; j++ ) {
      if ( openBracket[i] === openChar[1] && closeBracket[j] === closeChar[1] ) {
        answer.push(openBracket[i]);
        answer.push(closeBracket[j]);
      }
    }
  }

  for ( var i = 0; i < openBracket.length; i++ ) {
    for (var j = 0; j < closeBracket.length; j++ ) {
      if ( openBracket[i] === openChar[2] && closeBracket[j] === closeChar[2] ) {
        answer.push(openBracket[i]);
        answer.push(closeBracket[j]);
      }
    }
  }
  console.log('open', openBracket);
  console.log('close', closeBracket);

  console.log('answer', answer)

return answer.length === 0;

};

module.exports = bracket;
