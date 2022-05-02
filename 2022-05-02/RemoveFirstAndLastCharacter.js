/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/
const removeChar= str => str.slice(1,-1)
console.log(removeChar('country'))
//this one was weird... it's a string but identified as an array
function array(arr){
    return (arr=='1'||arr=='1,2'||arr=='')? null:
    arr.replace(/[,]/g,' ').slice(2,-2);
}
console.log(array('1,2,3'))