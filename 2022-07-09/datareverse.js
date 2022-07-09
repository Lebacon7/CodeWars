/*
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.
*/
function dataReverse(data) {
    var size = 8; 
    var arrayOfArrays = [];
      for (var i=0; i<data.length; i+=size) {
        arrayOfArrays.push(data.slice(i,i+size));
  }
  return arrayOfArrays.length>0?
    arrayOfArrays.reverse().join(',').split(',').map(Number):
    arrayOfArrays=[];
  } 
  console.log(dataReverse([[0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]]))