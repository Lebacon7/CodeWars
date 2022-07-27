/*
Description:
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples
remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!"
*/
function remove (string) {
    //dumb solution but 'meh.  replace 'em all and add one in at the end.
    string = string.replace(/!/g,'')
    return string+'!'
  }
  console.log(remove('Hi!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'))