function duplicateCount (text) {  
    let s = text;
    let result = [...s].reduce((res, char) => (res[char] = (res[char] || 0) + 1, res), {})
    if(text==''){
        return 0
    }else if(Object.keys(result).reduce((a,b)=>result[a]>result[b]? result[a] : result[b])==1){
        return 0
    }else{
        return Object.keys(result).reduce((a,b)=>result[a]>result[b]?  result[a] : result[b];)
    };
}
  console.log(duplicateCount('aaaaAAAAabBcde'))