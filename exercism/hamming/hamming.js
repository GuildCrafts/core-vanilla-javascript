function Hamming(){
  this.compute = function(s,t) {
    var hamming = 0;
    
    if(s.length !== t.length) throw "DNA strands must be of equal length.";

    for (var i = 0; i < s.length; i++) {
      if(s.charAt(i) !== t.charAt(i)) {
        hamming++;
      }
    }
    return hamming;
  }
}

module.exports = Hamming