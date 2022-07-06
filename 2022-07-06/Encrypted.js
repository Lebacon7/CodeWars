/*
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

var encryptThis = function(text){
    let arr = text.split(' ')
    //tried to map but can't do the filter or conditional!!!
    //flet arr2 = arr.map(x=>x[0]+x.charCodeAt(0)+x.charAt(x.length-1)+x.slice(2,x.length-1)+x.charAt(1))
    let arr3 = []
    arr.forEach(x => {
        if(x.length==1){
            arr3.push(x.charCodeAt(0))
        }else if(x.length==2){
            arr3.push(x.charCodeAt(0)+x.charAt(x.length-1))
        }else{
            arr3.push(x.charCodeAt(0)+x.charAt(x.length-1)+x.slice(2,x.length-1)+x.charAt(1))
        }
    });
    return arr3.join(' ')
  }
console.log(encryptThis('A wise old owl lived in an oak'))