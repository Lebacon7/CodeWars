//create a function that returns only even elements in the array
function getEvenNumbers(numbersArray){
    return numbersArray.filter(e=>e%2==0)
  }
  console.log(getEvenNumbers([2,3,5,7,9,10]))