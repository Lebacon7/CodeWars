/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/
const sumMix = x => x.map(Number).reduce((acc,c)=>acc+c,0)
console.log(sumMix([9, 3, '7', '3']))