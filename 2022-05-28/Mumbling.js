/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

//split to create the array
const accum = (s) => s  .split('')
                        //map to UpperCase
                        .map((x,i)=>x.charAt(0).toUpperCase()+
                        //repeat string (like mulitplying string * i)
                        x.toLowerCase().repeat(i))
                        //create string from array with '-' joiner
                        .join('-')
console.log(accum('ZpglnRxqenU'))