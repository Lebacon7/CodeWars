/*
Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.
You can assume the input will always be a number.
*/
function validateCode (code) {
    //set regEx expression ^ means starts with 1,2, OR 3
    const regEx = /^[123]/
    //use .test(code) to see if it is T or F
    return regEx.test(code)
  }
  console.log(validateCode(2789456))