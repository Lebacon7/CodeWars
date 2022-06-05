function duplicateCount (text) {  
    //ignore letter case A==a
    let texty = text.toLowerCase()
    //Setup array and reduce the values, creating an object which holds reduced totals
    let result = [...texty].reduce((res, char) => (res[char] = (res[char] || 0) + 1, res), {})
    //get reduced values from object
    const values = Object.values(result);
    //identify all letters that occur more than once with a filter
    return filteredArr = values.filter(x=>x>1).length;
}
  console.log(duplicateCount('Aa'))