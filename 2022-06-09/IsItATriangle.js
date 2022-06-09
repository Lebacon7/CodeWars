//given 3 sides of a triangle determine if it is a triangle.
//I used the triangle inequality thm => any two sides summed must be greater than the third side.
const isTriangle = (a,b,c) => a+b>c && a+c>b && b+c>a? true: false;
console.log(isTriangle(7,2,2))