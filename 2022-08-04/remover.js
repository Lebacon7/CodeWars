/*
Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/
function remove (string) {
    string = string.split('')
    for(let i=string.length-1; i>=0;i--){
      string[string.length-1]=='!'? string.pop(): null;
    }
    return string.join('')
  }
  console.log(remove('!Hi! How are you?!'))