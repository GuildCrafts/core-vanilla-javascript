module.exports = class Series{
  constructor(series){
    this.series = series,
    this.container = [],
    this.biggestProduct = 0
  }

  largestProduct(largestOne){
    console.log('here', this.series, largestOne);
    if(!this.series && largestOne > 0) {
      throw new Error('Slice size is too big.')
    }
    else if(largestOne === 0 || this.series.length <= 0){
      return 1
    }
    else if(largestOne > this.series.length){
      throw new Error('Slice size is too big.')
    }
    else if(isNaN(largestOne) || largestOne < 0){
      throw new Error('Invalid input.')
    }
    for(let i = 0; i < this.series.length; i++){
      if(isNaN(this.series[i])){
        throw new Error('Invalid input.')
      }
      let arr = []
      let temp = 0
      for(let j = 0; j < largestOne; j++){
        arr.push(this.series[i + j])
      }
      for(let k in arr){
        temp = arr.reduce((acc, val) => acc * val)
      }
      if(temp > this.biggestProduct){
        this.biggestProduct = temp
      }
    }
    return this.biggestProduct
  }

}
