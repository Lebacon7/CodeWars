function isIsogram(str){
    //string to LowerCase
    str = str.toLowerCase('')
    //sting to array
    arr = str.split('')
    //create array to loop into
    let arr2=[]
    for(let i=0; i<arr.length; i++){
      //if the character in the array is = on the left and the right it is not duplicated.  If is not it is a duplicate.  I'm pushing a 1 to the created area to identify false.
      if(arr.indexOf(arr[i]) != str.lastIndexOf(arr[i])){
      arr2.push(1)
      }else{
          arr2.push(0)
      }
    }
    //add up the total of the area - if greater than 0 it is not an Isogram.
    points = arr2.reduce((acc,c)=>acc+c,0)
    return (points>0)? false: true
  }
  console.log(isIsogram("aba" ))