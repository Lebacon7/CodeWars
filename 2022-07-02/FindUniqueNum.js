//find unique value in array BUT there will be a VERY LONG array and it must pass the test.  Sorting was only method that worked for me!

function findUniq(arr) {
    arr.sort()
    return arr[0]==arr[1]? arr[arr.length-1]: arr[0]
  } 
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))  