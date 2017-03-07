var Diamond = require('./diamond');

describe('Diamond', function() {
  var diamond = new Diamond();

  it('"A" should just return "A\\n"', function() {
    expect(diamond.makeDiamond('A')).toEqual("A\n");
  });

  it('"C" should return a 5 high diamond', function() {
    expect(diamond.makeDiamond('C')).toEqual(
      "  A  \n"+
      " B B \n"+
      "C   C\n"+
      " B B \n"+
      "  A  \n"
    );
  });

  it('"E" should return a 9 high diamond', function() {
    expect(diamond.makeDiamond('E')).toEqual(
      "    A    \n"+
      "   B B   \n"+
      "  C   C  \n"+
      " D     D \n"+
      "E       E\n"+
      " D     D \n"+
      "  C   C  \n"+
      "   B B   \n"+
      "    A    \n"
    );
  });
});
