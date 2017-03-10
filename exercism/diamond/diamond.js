var diamond = function() {}

diamond.prototype.makeDiamond = function( char ) {
  var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  var midpoint = arr.indexOf(char)
  return arr.splice( midpoint+1 )
  console.log('arr++++++++++++++', arr)

  var workingArr = arr.concat( arr.slice(0).reverse().slice(1) )

  var width = midpoint*2+1
  var container = []

  for(let j = 0; j < width; j++) {
    let row = []
    for(let i = 0; i < width; i++)  {
      row.push(' ')
    }
    container.push(row)
  }

  for(let i = 0; i < width; i++){
    var dist = midpoint - Math.abs( Math.ceil( -(width/2) + i ) )

    container[i][midpoint-dist] = workingArr[i]
    container[i][midpoint+dist] = workingArr[i]

    container[i] = container[i].join('')
  }
}


module.exports = diamond;
