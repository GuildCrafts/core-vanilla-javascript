class WordProblem {
  constructor (question){
    this.question = question.replace(/ by/g, '').replace('What is ', '').replace('?', '');
    this.operators = {
      "plus": function (a,b) {
        return a + b;
        },
      "minus": function (a,b) {
        return a - b;
        },
      "multiplied": function (a,b) {
        return a * b;
        },
      "divided": function (a,b) {
        return a / b;
        }
      };
  };
  answer() {
    var splitQuestion = this.question.split(' ');  //split question into an array
    var newOperator = splitQuestion[1];            //extract first operator
    var secondOperator = splitQuestion[3];         //extract second operator
    var answer1 = this.operators[newOperator](parseInt(splitQuestion[0]),parseInt(splitQuestion[2]));
    if (splitQuestion.length == 3){
      return answer1;
    } else {
      return this.operators[secondOperator](answer1,parseInt(splitQuestion[4]));
    };
  };

}


module.exports.WordProblem = WordProblem;
// module.exports = ArgumentError;
