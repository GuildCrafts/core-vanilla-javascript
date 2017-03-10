exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  	return listFiles(data)
  },

  permute: function(arr) {
  	
  },

  fibonacci: function(n) {
    
  },

  validParentheses: function(n) {

  }
};


const listFiles = function(data){

	if (Array.isArray(data)){
		return data
			.map(listFiles)
			.reduce(function(c, x){
				return c.concat(x)
			})
	}

	if (typeof data === 'string'){
		if (data.includes('.')){
			console.log('FOUND FILE: ', data)
			return [data]
		}else{
			return []
		}
	}

	if (typeof data === 'object'){
		return Object.keys(data)
			.map(function(key){
				return listFiles(data[key])
			})
			.reduce(function(c, x){
				return c.concat(x)
			})
	} else {
		throw new Error('UNKNOWN OBJECT TYPE')
	}
}


const files = listFiles(fileData)
