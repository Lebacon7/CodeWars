//Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
let squareArea = (A => Math.round((Math.pow((2*A/Math.PI),2))*100)/100);
console.log(squareArea(20)) 