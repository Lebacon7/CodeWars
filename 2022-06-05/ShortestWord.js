//find and return the length of the shortest word given string s
function findShort(s){
    //create arr of words
    let arr = s.split(' ')
    //sort the words by length
      .sort((a,b)=>a.length-b.length)
    //split the first term and then return it's length
    return arr[0].split('').length
  }