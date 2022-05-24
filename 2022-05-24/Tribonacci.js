function tribonacci(signature,n){
    //set return array, with first 3 terms of signature array
    let array = signature
    //trigger for loop adding 3 previous terms
    for(let i=3; i<n; i++){
      array.push(signature[i-1]+signature[i-2]+signature[i-3])
    }
    //return array and splice so as to return terms under i=2
    array.splice(n)
    return array
  }
console.log(tribonacci([1,1,1],1))