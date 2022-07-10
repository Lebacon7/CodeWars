/*
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
*/

function solve(s) {
    let arr = s.split(/[aeiou]/)
    let array = []
    console.log(arr)
    arr.forEach((e,i) => {
        e=(e.split('').map(x=>Number(x.charCodeAt())-96).filter(x=>x>0).reduce((acc,c)=>acc+c,0))
        array.push(e)
    });
    console.log(array)
    return Math.max(...array)
    }
    console.log(solve('chruschtschov'))