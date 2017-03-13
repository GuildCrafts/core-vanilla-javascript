module.exports = class DnaTranscriber{
  constructor(){
    this.nucleotides = ['A', 'T', 'G', 'C']
  }

  toRna(sequence){
    let result = []
    for(let nuc in sequence){
      console.log(sequence[nuc]);
      if(!this.nucleotides.includes(sequence[nuc])){
        throw new Error('Invalid input')
      }
      switch(sequence[nuc]){
        case 'A':
          result.push('U')
          break
        case 'T':
          result.push('A')
          break
        case 'C':
          result.push('G')
          break
        case 'G':
          result.push('C')
          break
      }
    }
    return result.join('')
  }

}
