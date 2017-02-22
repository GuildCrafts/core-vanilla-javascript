var Hamming = function() {};

Hamming.prototype.compute =  function (a, b) {
		var diff = 0;
		for (var i = 0; i <= a.length; i++) {
			if (a[i] != b[i]) {
	          diff++;            
      		};
  		};
  return diff;
};

module.exports = Hamming;