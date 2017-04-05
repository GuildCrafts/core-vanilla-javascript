var BeerSong = function(){};

BeerSong.prototype.verse = function (verse) {

  if (verse === 2) {
    song = (verse + ' bottles of beer on the wall, ' + verse + ' bottles of beer.\nTake one down and pass it around, ' + (verse - 1) + ' bottle of beer on the wall.\n');
  } else if (verse === 1) {
    song = ('1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n')
  } else if (verse === 0) {
    song = ('No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n');
  } else {
    song = (verse + ' bottles of beer on the wall, ' + verse + ' bottles of beer.\nTake one down and pass it around, ' + (verse - 1) + ' bottles of beer on the wall.\n');
  }
  return song;
}

BeerSong.prototype.sing = function (start, stop) {

  var song = '';

  if (stop === undefined) {

    stop = 0;

    while (start > 2) {
      song += (start + ' bottles of beer on the wall, ' + start + ' bottles of beer.\nTake one down and pass it around, ' + (start - 1) + ' bottles of beer on the wall.\n\n');
      start--;
    }

    if (start === 2) {
      song += ('2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n\n')
      start--;
    }

    if (start === 1) {
      song += ('1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n\n')
      start--;
    }

    if (start === 0) {
      song += ('No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n');
      return song;
    }

  } else if (stop > 2) {

    while (start > stop && stop > 2) {
      song += (start + ' bottles of beer on the wall, ' + start + ' bottles of beer.\nTake one down and pass it around, ' + (start - 1) + ' bottles of beer on the wall.\n\n');
      start--;
    }

    song = song + stop + ' bottles of beer on the wall, ' + stop + ' bottles of beer.\nTake one down and pass it around, ' + (stop - 1) + ' bottles of beer on the wall.\n'
    return song;

  } else {

    while (start > 2) {
      song += (start + ' bottles of beer on the wall, ' + start + ' bottles of beer.\nTake one down and pass it around, ' + (start - 1) + ' bottles of beer on the wall.\n\n');
      start--;
    }

    if (start === 2) {
      song += (start + ' bottles of beer on the wall, ' + start + ' bottles of beer.\nTake one down and pass it around, ' + (start - 1) + ' bottle of beer on the wall.\n');
      start--;
    }

    if (start === 1) {
      song += ('1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n\n')
      start--;
    }

    if (start === 0) {
      song += ('No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n');
    }
    return song;
  }
}

module.exports = BeerSong;
