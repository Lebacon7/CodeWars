/*
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/
//this one took me forever because of the spaces!  I had to remember how to do geometric math patterns
//basically I figured out it was n+1/2 for the spaces and then you had to subtract i+1
//so if n=3, n+1=4,/2=2 and then if i=0, i+1=1, so we would have 2-1=1.
//so n=3, i=0, we expect 1 space total.  
//edge cases handled with initial if/then.
function diamond (n) {
    if(n==1){
        return '*\n'
    }else if(n%2==0 || n<1){
        return null
    }else{
    let arr = Array(Math.ceil(n/2)).fill('*').map((x,i)=>' '.repeat(((n+1)/2)-(i+1))+x.repeat(2*i+1)+'\n')
    console.log(arr)
    let revArr= Array(Math.ceil(n/2)).fill('*').map((x,i)=>' '.repeat(((n+1)/2)-(i+1))+x.repeat(2*i+1)+'\n').reverse().splice(1,n)
    console.log(revArr)
    let newArr = arr.concat(revArr)
    console.log(newArr)
    return newArr.join('')
    }
}
console.log(diamond(3))