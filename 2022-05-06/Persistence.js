/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/
function persistence(num) {
    let count = 0
    let arr = Array.from(String(num),Number)
    console.log(arr)
    console.log(arr.length)
    if(arr.length<2){
        return count=0
    }else if(arr.indexOf(0)>0){
        return count=1
    }
    let newArr = Array.from(String(num),Number)
    let product = arr.reduce((acc,c)=>acc*c)
    if(product>0){
        count++
    do{
        arr = Array.from(String(product),Number)
        product = arr.reduce((acc,c)=>acc*c)
        count++
    }
    while(product>10)
    console.log(count)
    return (undefined)? 1: count;
 }
}
 console.log(persistence(2))