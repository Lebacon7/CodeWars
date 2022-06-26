/*
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
*/
function minSum(arr) {
    //sort array
    arr.sort((a,b)=>a-b)
    //create empty array to push to with loop
    let newArr = []
    //multiply greatest term by least term - pairing the terms of the array that are furthest from eachother
    for(i=0;i<arr.length;i+=2){
      newArr.push(arr[i]*arr[arr.length-1-i])
    }
    //reduce and return
    return newArr.reduce((acc,c)=>acc+c,0)
  }
  console.log(minSum([1,2,3,4,5,6,7,8]))