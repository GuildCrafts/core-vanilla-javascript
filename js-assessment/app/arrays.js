exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    return arr.reduce(function(total, number) {
      return total += number
    })
  },

  remove: function(arr, item) {
    return arr.filter(function(currentItem) {
      if (currentItem !== item) return currentItem
    })
  },

  removeWithoutCopy: function(arr, item) {
    
  },

  append: function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate: function(arr) {
    arr.pop()
    return arr
  },

  prepend: function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail: function(arr) {
    arr.shift()
    return arr
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count: function(arr, item) {
    return arr.filter(function (element) {
      return element === item;
    }).length
  },

  duplicates: function(arr) {
    var repeats = []

    arr.forEach(function (item, index) {
      var multiples = arr.filter(function(element) {
        return arr[index] === element
      })

      if (multiples.length > 1 && !repeats.includes(item)) repeats.push(item)
    })
    
    return repeats
  },

  square: function(arr) {
    return arr.map(function(number) {
      return number ** 2
    })
  },

  findAllOccurrences: function(arr, target) {
    var occurrences = [];

    arr.forEach(function (element, index) {
     if (element === target) occurrences.push(index)
    });

    return occurrences
  }
};
