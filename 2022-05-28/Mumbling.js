//split to create the array
const accum = (s) => s  .split('')
                        //map to UpperCase
                        .map((x,i)=>x.charAt(0).toUpperCase()+
                        //repeat string (like mulitplying string * i)
                        x.toLowerCase().repeat(i))
                        //create string from array with '-' joiner
                        .join('-')
console.log(accum('ZpglnRxqenU'))