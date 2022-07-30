/*
Task:
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.
*/
function remainder(n, m){
    return m>n && n!=0? m%n: m>n && n==0? NaN: n%m;
  }
  console.log(remainder(12,20))