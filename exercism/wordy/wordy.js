function WordProblem(question) {
    var operators = {
        plus: function(a, b) {
            return a + b;
        },
        minus: function(a, b) {
            return a - b;
        },
        multiplied: function(a, b) {
            return a * b;
        },
        divided: function(a, b) {
            return a / b;
        }
    };

    var tokenize = function() {
        var strings = question.slice(0, -1); // remove question mark
        strings = strings.split(" ");
        strings = strings.slice(2); // remove "What is"
        strings = strings.filter(function(string) {
            return string !== "by";
        });
        return strings.map(function(string, i) {
            if (i % 2 === 0) {
                if (isNaN(string)) {
                    throw new Error();
                }
                return Number(string);
            } else {
                var fun = operators[string];
                if (typeof fun !== "function") {
                    throw new Error();
                }
                return fun;
            }
        });
    };

    this.answer = function() {
        var tokens = tokenize();
        var result = tokens.shift();
        while (tokens.length !== 0) {
            var fun = tokens.shift();
            var secondArgument = tokens.shift();
            result = fun(result, secondArgument);
        }
        return result;
    };
}

module.exports.WordProblem = WordProblem;
