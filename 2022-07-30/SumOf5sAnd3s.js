/*
Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
*/
function findSum(n) {
    //start array from 0 to n
    return Array(n+1)
    //fill the array with 0s otherwise the map won't work
    .fill(0)
    //map each term so it equals its index
    .map((e,i)=>e=i)
    //filter divisible by 3 OR 5
    .filter(x=>x%3==0||x%5==0)
    //sum it
    .reduce((acc,c)=>acc+c,0)
  }
  console.log(findSum(5))