function twoSort(s) {
    return s.toString().split(',').sort().filter((_,i)=>i==0).toString().split('').join('***')
  }
console.log(twoSort('beautiful right?'))