function ArgumentError() {
  this.message = "Your question doesn't make sense to me.";
}

function WordProblem(question) {
  this.answer = function() {
    var operatorWords = ['plus', 'minus', 'multiplied', 'divided'];
    var operators = ['+', '-', '*', '/'];

    question = question.replace('?', '');
    question = question.replace(/th/g, '');
    question = question.replace(/nd/g, '');
    question = question.replace(/st/g, '');
    question = question.replace(/rd/g, '');


    var splitQuestion = question.split(' ').filter(function(item) {
      if (!isNaN(item) || operatorWords.includes(item)) {
        return item;
      }
    });

    question = splitQuestion.join(' ');

    if (splitQuestion.length < 3) {
      throw new ArgumentError();
    }

    for (var i = 0; i < operators.length; i++) {
      var re = new RegExp(operatorWords[i], 'g');
      question = question.replace(re, operators[i]);
    }

    return eval(question);
  }
}

module.exports = {
    WordProblem,
    ArgumentError
}
