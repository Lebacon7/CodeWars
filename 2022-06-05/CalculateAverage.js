//calculate the average given an array of nums
const find_average =(array)=> array!=''?array.reduce((acc,c)=>acc+c,0)/array.length:0;
console.log(find_average([1,2,3,4]))