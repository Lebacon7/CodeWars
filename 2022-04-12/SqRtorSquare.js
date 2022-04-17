/*
#To square(root) or not to square(root)

Write a method, that will get an integer array as parameter and will process every number from this array.
Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

[4,3,9,7,2,1] -> [2,9,3,49,4,1]
*/
function squareOrSquareRoot(array) {
        var array2 = [];
        for(var i=0;i<array.length;i++){
        (Number.isInteger(Math.sqrt(array[i])))?
            array2.push(Math.sqrt(array[i])):
            array2.push(Math.pow(array[i],2));
        }return array2;
}
console.log(squareOrSquareRoot([4,3,9,7,2,1]))