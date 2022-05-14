//Write a function that returns a string in which firstname is swapped with last name.
//nameShuffler('john McClane'); => "McClane john"
function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
//    return `${arrName[1]} ${arrName[0]}`
  }
console.log(nameShuffler('John Wayne'))