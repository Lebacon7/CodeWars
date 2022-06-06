//return the total number of smiling faces in the array
function countSmileys(arr) {
    if(arr==''){
      return 0;
    }else{
    console.log(arr)
    let count = 0
    let smilyFaces = ':) :D ;-D :~)'.split(' ')
    console.log(smilyFaces)
    for(i=0;i<smilyFaces.length;i++){
        if(smilyFaces.indexOf(arr[i])>0 && (smilyFaces.indexOf(arr[i]) == smilyFaces.lastIndexOf(arr[i]))){
        count+=1
        }else if(arr.indexOf(smilyFaces[i])>0 && (arr.indexOf(smilyFaces) != arr.lastIndexOf(smilyFaces[i]))){
        count+=2
        }
    }
    return arr
    }
}
console.log(countSmileys([":)", ":(", ":D", ":O", ":;" ]))