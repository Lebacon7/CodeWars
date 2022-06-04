/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount (string) {  
    //create a vowel array
    let vowels = 'aeiou'.split('')
    //create array of string
    let stringy = string.split('')
    //setup a vowel counter
    let count = 0
    //setup loop and count everytime vowel occurs.  This is not great but it's very easy to understand and works!
    stringy.forEach(e => {
        (e === vowels[0] || e === vowels [1] ||e === vowels [2] || e === vowels [3] || e === vowels [4])? count++: count+=0;
    });
    return count
}
console.log(getCount('abracadabra'))
