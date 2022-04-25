/*
Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

Please use the following function names:

addition = add

multiply = multiply

division = divide (both integer and float divisions are accepted)

modulus = mod

exponential = exponent

subtraction = subt

Note: All math operations will be: a (operation) b
*/
function add(a,b){
    return a+b;
}
console.log(add(2,3))
function divide(a,b){
    return a/b;
}
console.log(divide(10,5))
function multiply(a,b){
    return a*b;
}
console.log(multiply(2,3))
function mod(a,b){
    return a%b;
}
console.log(mod(10,7))
function exponent(a,b){
    return Math.pow(a,b);
}
console.log(exponent(2,5))
function subt(a,b){
    return a-b;
}
console.log(subt(5,3))