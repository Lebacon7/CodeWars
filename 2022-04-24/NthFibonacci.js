/*
I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
*/
const nthFibo = n =>{
    var fibArray = [0,0,1]
    if(n===0){
        return 0
    }else if(n===1){
        return 0
    }else if(n===2){
        return 1
    }else if(n>=3){
        for(let i=3;i<=n;i++){
            fibArray.push(fibArray[i-1]+fibArray[i-2])
        }
    }else{
        return 0
    }
    return fibArray[n]
}
console.log(nthFibo(5))

//This needed to be adjusted as they started their fibo on the 1st term rather than zero-th.  