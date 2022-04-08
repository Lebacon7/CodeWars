/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/
let arr=[]
//const removeEveryOther = arr.filter((item, index) => {return index%2 ===0});
//console.log(removeEveryOther)
function removeEveryOther(arr){
    var newArr=[]
    for(var i=0;i<arr.length;i+=2){
        newArr.push(arr[i]);
        }return newArr
}
console.log(removeEveryOther([1,2,3,4,5,6,7,8,9,10,11]))
