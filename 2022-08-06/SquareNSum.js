//square all numbers in the array and then sum them.
function squareSum(numbers){
    //map the array to square all values in the array
return numbers.map(x=>x**2)
    //add all the values in the array with a reduce
      .reduce((acc,c)=>acc+c,0)
}