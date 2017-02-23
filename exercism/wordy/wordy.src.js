class WordProblem {
constructor (question){
  this.question = question
  this.operators = {
    "plus": function (a,b) {
      return a + b;
    },
    "minus": function (a,b) {
      return a - b;
    },
    "multiplied by": function (a,b) {
      return a * b;
    },
    "divided by": function (a,b) {
      return a / b;
    }
  };

}
/*  question = question.replace(/plus|minus|multiplied by|divided by/gi, function(matched){
    return question[matched];
  });
*/

  answer () {
  this.question = this.question.replace('What is ', '').replace('?', '');
  var splitQuestion = this.question.split(' ');
  var newOperator = splitQuestion[1];
  return this.operators[newOperator](parseInt(splitQuestion[0]),parseInt(splitQuestion[2]));
  };
};

module.exports = WordProblem;
