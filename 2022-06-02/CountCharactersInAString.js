function count (string) {  
    let stringy = string.split('')
    let count = {};
    stringy.forEach(e => {
       count[e]? count[e]++ : count[e] = 1;
    });
    return count;
  }console.log(count('abbas'))