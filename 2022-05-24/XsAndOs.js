/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/
function XO(str) {
    //set string to lowercase values, and make it an array
    let arr = str.toLowerCase().split('')
    //create two counting values to iterate into
    let countX = 0
    let countO = 0
    //create loop for iteration counting
    for(let i=0; i<arr.length; i++){
        if(arr[i]=='x'){
            countX++
        }else if(arr[i]=='o'){
            countO++
        }
    }
    //return conditional
    return countX == countO
}
console.log(XO('xxoo'))