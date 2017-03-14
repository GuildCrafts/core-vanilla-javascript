function bracket(bracketString) {
    if (bracketString.match(/[\{}()[\]]/ig) && bracketString.length%2 === 0){
      if(bracketString[0] == '{' && bracketString[bracketString.length-1] == '}' && bracketString.match(/[{]/ig).length === bracketString.match(/[}]/ig).length){
        return true;
      } else if (bracketString[0] == '[' && bracketString[bracketString.length-1] == ']' && bracketString.match(/[[]/ig).length === bracketString.match(/[\]]/ig).length){
        return true;
      } else if (bracketString[0] == '(' && bracketString[bracketString.length-1] == ')' && bracketString.match(/[(]/ig).length === bracketString.match(/[)]/ig).length){
        return true;
      } else if (bracketString[0] == '{' &&  bracketString[bracketString.length-1] !== '}'){
        if (bracketString[1] == '}'){
          return true;
        }
        return false;
      } else if (bracketString[0] == '[' && bracketString[bracketString.length-1] !== ']'){
        if (bracketString[1] == ']'){
          return true;
        }
        return false;
      } else if (bracketString[0] == '(' && bracketString[bracketString.length-1] !== ')'){
        if (bracketString[1] == ')'){
          return true;
        }
        return false;
      } else {
        return false;
      }
    }
    return false;
}

module.exports = bracket
