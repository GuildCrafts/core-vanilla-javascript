var Diamond = function diamond(letter) {

  var alphaArray = ['A','B']
  var space = ' '
  var spacing = space.repeat(alphaArray)

  for(var i = 0; i = alphaArray.indexOf(letter); i++) {
    console.log(spacing + letter[i] + spacing /*+ \n*/)
  }
}
diamond('B')

module.exports = Diamond;

// must pass the paramater B letter somewhere
