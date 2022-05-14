/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/
const between = (a,b) => {
    let arr = []
    for(i=a; i<=b; i++){
        arr.push(i)
    }
    return arr
}
console.log(between(5,11))
//Most creative solution I found:
const inBetween = (a,b) => [...Array(b-a+1)].map((_,i) => i + a);
console.log(inBetween(5,11))