//create zero array => map to x squared => join all numbers squared toString => split the numbers so we have them all individually => filter numbers to see if they include the digit d => return the length to get number of array terms
const nbDig = (n, d) => Array(n+1).fill(0).map((e,i)=>Math.pow(e+i,2)).join('').split('').filter(e=>e.includes(d)==true).length
console.log(nbDig(5750,0))