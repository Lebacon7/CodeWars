/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/
function validatePIN (pin) {
    let count=0
    for(let i=0; i<pin.length; i++){
      count++
    }
    return (count==4||count==6)&& !pin.match(/\D/)
  }
console.log(validatePIN('a245'))