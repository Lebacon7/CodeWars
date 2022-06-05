//Given a string, see if it is a pangram, contains all alpha letters
function isPangram(string){
    //create alphabet array
    let abc = 'abcdefghijklmnopqrstuvwxyz'.split('')
    //create array of lowercase string to match to alphabet
    string = string.toLowerCase().split('').sort()
    //loop using alphabet length, and check if string contains any lowercase letter, if it does, replace it with a 1.
    for(i=0;i<abc.length;i++){
      if(string.indexOf(abc[i])>0){
        abc[i]=1
      }
    }
    //filter all values for 1, and check length
    return abc = abc.filter(e=>e==1).length==26? true: false;
  }
  console.log(isPangram('The quick brown fox jumps over the lazy dog'))