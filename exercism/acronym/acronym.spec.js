var Acronyms = require('./acronym');

describe('Acronyms are produced from', function(){
  it('title cased phrases', function() {
    expect(Acronyms.parse('Portable Network Graphics')).toEqual('PNG');
  });

  xit('other title cased phrases', function(){
    expect(Acronyms.parse('Ruby on Rails')).toEqual('ROR');
  });

  xit('inconsistently cased phrases', function(){
    expect(Acronyms.parse('HyperText Markup Language')).toEqual('HTML');
  });

  xit('phrases with punctuation', function() {
    expect(Acronyms.parse('First In, First Out')).toEqual('FIFO');
  });

  xit('other phrases with punctuation', function() {
    expect(Acronyms.parse('PHP: Hypertext Preprocessor')).toEqual('PHP');
  });

  xit('phrases with punctuation and sentence casing', function() {
    expect(Acronyms.parse('Complementary metal-oxide semiconductor')).toEqual('CMOS');
  });
