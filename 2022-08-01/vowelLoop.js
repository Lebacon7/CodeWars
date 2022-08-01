/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.

*/

function isVow(a){
    for(let i=0; i<a.length;i++){
      a[i]==97? a[i]='a':
      a[i]==101? a[i]='e':
      a[i]==105? a[i]='i':
      a[i]==111? a[i]='o':
      a[i]==117? a[i]='u':
      null;
    }
    return a
  }
  console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]))