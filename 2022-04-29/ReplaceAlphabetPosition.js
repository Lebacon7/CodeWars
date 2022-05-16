/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/
function alphabetPosition(text){
    let text1 = text.toLowerCase()
    text1 = text1.replace(/[^a-z-A-Z ]/g,'')
    text1 = text1.replace(/-/g,'')
    text1 = text1.replace(/ /g,'')
    text1 = text1.replace(/a/g,'1 ')
    let text2 = text1.replace(/b/g,'2 ')
    let text3 = text2.replace(/c/g,'3 ')
    let text4 = text3.replace(/d/g,'4 ')
    let text5 = text4.replace(/e/g,'5 ')
    let text6 = text5.replace(/f/g,'6 ')
    let text7 = text6.replace(/g/g,'7 ')
    let text8 = text7.replace(/h/g,'8 ')
    let text9 = text8.replace(/i/g,'9 ')
    let text10 = text9.replace(/j/g,'10 ')
    let text11 = text10.replace(/k/g,'11 ')
    let text12 = text11.replace(/l/g,'12 ')
    let text13 = text12.replace(/m/g,'13 ')
    let text14 = text13.replace(/n/g,'14 ')
    let text15 = text14.replace(/o/g,'15 ')
    let text16 = text15.replace(/p/g,'16 ')
    let text17 = text16.replace(/q/g,'17 ')
    let text18 = text17.replace(/r/g,'18 ')
    let text19 = text18.replace(/s/g,'19 ')
    let text20 = text19.replace(/t/g,'20 ')
    let text21 = text20.replace(/u/g,'21 ')
    let text22 = text21.replace(/v/g,'22 ')
    let text23 = text22.replace(/w/g,'23 ')
    let text24 = text23.replace(/x/g,'24 ')
    let text25 = text24.replace(/y/g,'25 ')
    let text26 = text25.replace(/z/g,'26 ')
    text26 = text26.slice(0,-1)
    return text26
}
console.log(alphabetPosition('Ok 1234856@#$$#$%%^does it work'))
//this is my worst solution EVER!