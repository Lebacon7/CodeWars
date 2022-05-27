function dirReduc(arr){
    let countN = 0
    let countS= 0
    let countE= 0
    let countW = 0
    let array = []
    arr.forEach(e => {
        if(e =="NORTH"){
            countN++
        }else if(e =="SOUTH"){
            countS++
        }else if(e =="EAST"){
            countE++  
        }else if(e =="WEST"){
            countW++
        }
    })
    if(countN>countS){
        array.push("NORTH")
    }else if(countN<countS){
        array.push("SOUTH")
    }else if(countE>countW){
        array.push("EAST")
    }
    console.log(countE)
    console.log(countW)
    console.log(array)
    return array
}
console.log(dirReduc["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])