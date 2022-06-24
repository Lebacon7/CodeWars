function capitalize(s){
    let arr=[]
    let arrS = s.split('')
    arrS.forEach(element, index => {
        if(index%2!=0){
            arr.push(element.toUpperCase())
            }else{
            arr.push(element.toLowerCase())
            }
    });
    return arr
}
console.log(capitalize('abcdef'))