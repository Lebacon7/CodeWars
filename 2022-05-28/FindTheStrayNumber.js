/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/
const stray = numbers => {
    //set maximum and minimum variables
    let max = Math.max(...numbers)
    let min = Math.min(...numbers)
    //sort array least to greatest
    numbers.sort((a,b)=>a-b)
    //conditional for 1st term, if it's not = to minimum, mode must be maximum.
    return numbers[1]!==min? min: max;
}
console.log(stray([1,1,1,1,1,1,-4000,1,1]))