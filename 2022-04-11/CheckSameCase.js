/*
Write a function that will check if two given characters are the same case.

If any of characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters and not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/
const sameCase = (a, b) => {
    if(!isNaN(a) || !isNaN(b) || /[~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(b) || /[~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(a) || (a.indexOf(' ') >= 0) ||(b.indexOf(' ') >= 0) ){
        return -1
    }else if((a===a.toLowerCase() && b===b.toLowerCase()) ||(a===a.toUpperCase() && b===b.toUpperCase())){
        return 1
    }else if(a.toLowerCase() != a.toUpperCase() || b.toLowerCase() != b.toUpperCase()){
        return 0
    }else{
        return -1
    }
}
console.log(sameCase(' ','c'))