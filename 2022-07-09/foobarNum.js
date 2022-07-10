//stumped on this needswork!
function incrementString (strng) {
    let arr = strng.split('')
    let barr = strng.split('')
    barr.forEach((e,i) => {
        if(e.includes==0){
            e=i
        }
    });
    console.log(barr)
    let value = arr.includes(/[0-9]/)
    console.log(value)
    let array = []
    if(value==-1){
        arr.push(1)
        return arr.join('')
    }
    for(let i=value; i<=arr.length; i++){
     if(!isNaN(arr[i])){
      array.push(Number(arr[i]))
      }
    }
    //arr[arr.length-1]==/[0-9]/? arr[arr.length-1]+1: arr.push(5);
    return strng.slice(0,value)+(parseInt(array.join(''))+1)
  }
  console.log(incrementString('foobar00'))