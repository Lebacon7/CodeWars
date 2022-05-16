/*
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array){
    var arrOdds = []
    var arrFinal = []
    const odds = array.filter(i=>i%2!=0).sort();
    console.log(odds)
    array.forEach(e=>{
        if(e%2==0){
            arrFinal.push(e)
        }else{
            arrFinal.push(odds[i]);
            i++;
        }
    })
    console.log(array)
    console.log(arrOdds)
    console.log(arrFinal)
    return arrayFinal
}
console.log(sortArray([5, 3, 2, 8, 1, 4]))
*/
function sortedArray(array){
    arrSorted = [];
    array.filter((e,i)=>e%2 && arrSorted.push(i))    
        .sort((a,b)=>a-b)
        .forEach((e,i)=>array[arrSorted[i]]=e);
    console.log(array)
    return array
}
console.log(sortedArray([5, 3, 2, 8, 1, 4]))