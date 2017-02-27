function diamond(){
  var letters = ['A','B','C','D','E','F'];
  this.makeDiamond = function(letter) {
    count = letters.indexOf(letter);
    var result = [];
    for(i=0;i<=count;i++){
      if(i===0){
        result.push(" ".repeat(count-i) + letters[i] + " ".repeat(count-i));
      } else {
        result.push(" ".repeat(count-i) + letters[i] + " ".repeat(i*2-1) + letters[i] + " ".repeat(count-i));
      }
    }
    reverse = result.slice(0,count).reverse();
    if(count===0){
      return "A" + "\n";
    } else {
      return result.join("\n") + "\n" + reverse.join("\n") + "\n";
    }
  }
}
module.exports = diamond
