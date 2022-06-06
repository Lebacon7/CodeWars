function titleCase(title, minorWords) {
    let res = []
    minorWords = minorWords.toLowerCase()
                .split(' ')
                console.log(minorWords)
    let cap = title.toLowerCase()
                .split(' ')
                .map(x=>x.charAt().toUpperCase()+x.slice(1,x.length))
                .replace(/\S+/g, w => minors.indexOf(minorWords) === -1 ? 

}

BEST SOLUTION
const titleCase = (title, minorWords) => {

    if (!title) 
      return title;
  
    let cap = word => 
      word[0].toUpperCase() + word.slice(1);
  
    let minors = (minorWords || '')
      .toLowerCase()
      .split(' ');
  
    let result = title
      .toLowerCase()
      .replace(/\S+/g, w => minors.indexOf(w) === -1 ? cap(w) : w);
  
    return cap(result);
  



console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))