// write the function isAnagram
var isAnagram = function(test, original) {
    let anny = test.toLowerCase().split('').sort().join('')
    console.log(anny)
    let oG = original.toLowerCase().split('').sort().join('')
    return anny == oG? true: false;
  };
  console.log(isAnagram("foefet", "toffee"))