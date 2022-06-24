function rowWeights(array){
    let Team1 = array.filter((e,i)=>i%2==0).reduce((acc,c)=>acc+c,0)
    let Team2 = array.filter((e,i)=>i%2!=0).reduce((acc,c)=>acc+c,0)
    return [Team1,Team2]
  }
console.log(rowWeights([10,20,30,40]))