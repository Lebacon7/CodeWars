/*
Task
Given a string str, reverse it omitting all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
*/
const reverseLetter = (str) => str.split('').filter(x=>x=/[a-zA-Z]/.test(x)).reverse().join('')
console.log(reverseLetter('kmlkiuleoxoh6_tij)kdms,bu@d)l)e'))