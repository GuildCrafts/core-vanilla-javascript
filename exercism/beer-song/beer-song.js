var BeerSong = function(){};

  var answer = ''
  var string1 = ' bottles of beer on the wall, '
  var string2 = ' bottles of beer.\nTake one down and pass it around, '
  var string3 = ' bottles of beer on the wall.\n'
  var string11 = ' bottle of beer on the wall, '
  var string31 = ' bottle of beer on the wall.\n'
  var string22 = ' bottle of beer.\nTake it down and pass it around, '
  var noMore = 'no more bottles of beer on the wall.\n'
  var zeroBottles = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'

BeerSong.prototype.verse = function (amount) {

  if (amount === 2) {
  answer = (amount + string1 + amount + string2 + (amount - 1) + string31)
  } else if (amount === 1) {
    answer = (amount + string11 + amount + string22 + noMore)
    } else if (amount === 0) {
      answer = zeroBottles
    } else {
      answer = (amount + string1 + amount + string2 + (amount - 1) + string3)
      }
    return answer
}

BeerSong.prototype.sing = function (start, stop) {

  var song = ''

  if (stop === undefined) {
    stop = 0
    while (start > 2) {
      song += (start + string1 + start + string2 + (start - 1) + string3 + '\n')
      start--
    }
    if (start === 2) {
      song += (start + string1 + start + string2 + (start - 1) + string31 + '\n')
      start--
    }
    if (start === 1) {
      song += (start + string11 + start + string22 + noMore + '\n')
      start--
    }
    if (start === 0) {
      song += zeroBottles
    }  return song
  } else if (stop > 2){
      while (start > stop && stop > 2) {
        song += (start + string1 + start + string2 + (start - 1) + string3 + '\n')
        start--
      }
      song = song + stop + string1 + stop + string2 + (start - 1) + string3
      return song
    } else {
        while (start > 2){
          song += (start + string1 + start + string2 + (start - 1) + string3 + '\n')
          start--
        if (start === 2) {
          song = song + start + string1 + start + string2 + (start - 1) + string31 + '\n'
          start--
        }
        if (start === 1) {
          song = song + start + string11 + start + string22 + noMore + '\n'
          start--
        }
        if (start === 0) {
          song = song + zeroBottles
        }
      } return song
    }
}
module.exports = BeerSong;
