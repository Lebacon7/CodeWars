function calculateYears(principal, interest, tax, desired) {
    let count=0
    while(principal<desired){
        principal = (principal*((1+interest)))*(1-tax)
        count++
      }
      return count
    }
console.log(calculateYears(1000,0.01625,0.18,1200))