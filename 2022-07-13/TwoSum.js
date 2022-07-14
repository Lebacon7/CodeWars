/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
*/

function twoSum(numbers, target) {
    //set empty array
    let arr = []
    //Double iterate to see if any of the two terms sum to target
    for(let i=0; i<numbers.length;i++){
      for(let j=0;j<numbers.length;j++){
        if(numbers[i]+numbers[j]==target && j!=i){
          //return both index value of terms
          arr.push(j)
          arr.push(i)
        }
      }
    }
    //return arrays first two terms - easier way to do this was a slice(0,2)
    return arr.slice(0,2)