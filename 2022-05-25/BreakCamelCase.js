/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/
function solution(string) {
    //create array and result array
    let arr = string.split('')
    let res = [] 
    //create loop, checking if value is uppercase.  If uppercase push to res with a space, otherwise, push same as string/arr.
    for(let i=0; i<arr.length; i++){
        arr[i] == arr[i].toUpperCase()?
        res.push(' '+arr[i]):res.push(arr[i]);
    }
    //return res and join to create a string value
return res.join('')
}
console.log(solution('camelCase'))