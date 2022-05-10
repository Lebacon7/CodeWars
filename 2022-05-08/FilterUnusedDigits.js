/*
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.
*/
const ununsedDigits = (...arr) =>{
    arr = arr.sort((a,b)=>a-b)
    console.log(arr)
    let newArr = arr.filter(x=>![0,1,2,3,4,5,6,7,8,9].includes(x))
    return newArr
}
console.log(ununsedDigits([12, 56, 34, 78]))