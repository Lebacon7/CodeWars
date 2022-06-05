/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/
//create an array of the number via toString and split, reverse to easily multiply terms by base 10, then filter, reverse back and join.
const expandedForm = (num) => num.toString().split('').reverse().map((e,i)=>e*(10**i)).filter(x=>x>0).reverse().join(' + ')
  console.log(expandedForm(70304))