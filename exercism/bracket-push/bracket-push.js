const bracket = (str) => {
  let paren = ['(', ')']
  let curly = ['{','}']
  let square = ['[',']']
  let closings = [')', '}', ']']
  //split the string
  let arr = str.split('')
  let stack = []
  //iterate through array
  for(let i in arr){
    if(closings.includes(arr[i])){
      if(check(stack.pop()) !== check(arr[i])){
        return false
      }
    }else{
      stack.push(arr[i])
    }
  }

  function check(element){
    if(paren.includes(element)){
      return 'paren'
    }else if(curly.includes(element)){
      return 'curly'
    }else if(square.includes(element)){
      return 'square'
    }else{
      return false
    }
  }
  if(stack.length > 0) return false
  return true
}

module.exports = bracket;
