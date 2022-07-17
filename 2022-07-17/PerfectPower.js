/*
A perfect power is a classification of positive integers:

In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.

Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.
*/
var isPP = function(n){
    let arr= Array(n).fill(1).map((e,index)=>e=index+1)
    let arr3=[]
      for(let i=0;i<n;i++){
        for(let j=1; j<n; j++){
            if(arr[i]**arr[j]==n){
                arr3.push(arr[i],arr[j])
            }
        }
    }
    return arr3.slice(0,2)==''? null: arr3.slice(0,2)
  }
  console.log(isPP(8))
  //solution works but is difficult on computer due to time looping.  Here is better one:
  /*
  function isPP(n) {
  for (var m = 2; m * m <= n; ++ m)
    for (var k = 2; Math.pow(m, k) <= n; ++ k)
      if (Math.pow(m, k) == n) return [m, k];
  return null;
}*/