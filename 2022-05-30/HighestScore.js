/*
const high= x => {
    let arr = x.toLowerCase().split('')
    .map((e,i)=> e.charCodeAt() - 97 + 1)
    console.log(arr)
    for(let index=0; index<=arr.length; index++){
        if(arr[i]!=-64){
            res = arr[i]+res
        }
    }

}
*/
function high(str){
    let summedWords = str.split(' ').map(str=>[...str].reduce((acc,c)=>acc+c.charCodeAt(0)-96,0));
    return str.split(' ')[summedWords.indexOf(Math.max(...summedWords))];
  }
  console.log(high('Ok Ill try this'))