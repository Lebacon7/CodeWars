/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/
function findUniq(arr) {
    //set resulting array
    let res = []
    //start loop.  If First and Last terms are equal && current term equals first term, do nothing.  Otherwise, we will be pushing to the array.
    for(i=0;i<arr.length; i++){
        arr[0]==arr[arr.length-1] && arr[0]==arr[i]? null: arr[0]==arr[arr.length-1] && arr[0]!=arr[i]? res.push(arr[i]):
      arr[1]!=arr[arr.length-1]? res.push(arr[arr.length-1]):res.push(arr[0]);
    }
    //return value to string and then number
    let number = res[0].toString()
    return Number(number)
  }
console.log(findUniq([ 0.2537, 0, 0 ]))

/*My fav solution:
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}*/
//basically just sort and then pop last term off if 0 and 1 are equal, otherwise return last term.  Term has to be at beginning or end.