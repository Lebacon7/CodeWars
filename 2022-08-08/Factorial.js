//Your task is to write function factorial.  n=4, 4x3x2x1=24
//ARRAY AND REDUCE!
function factorial(n){
    //first handle n equals 0
     return n==0? 1:
            //create an array of n terms 1,2,3...n, and then reduce
            Array(n)
            .fill(1)
            .map((e,i)=>e=(i+1))
            .reduce((acc,c)=>acc*c);
    }