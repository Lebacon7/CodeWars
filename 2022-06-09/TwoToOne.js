/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
*/
function longest (s1,s2){
    //concatenate string 1 and 2
    let str = s1.concat(s2)
    //create Array from str and then use Set constructor to make new set array which will not repeat objects.  Set is great to get rid of duplicates.  Join to string, and return.
    return Array.from(new Set(str)).sort().join('')
}
console.log(longest("aretheyhere", "yestheyarehere"))