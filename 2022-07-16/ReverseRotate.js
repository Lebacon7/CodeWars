function revrot(str, sz) {
    console.log(str.length)
    if(sz<=0 || sz>str.length || str==''){
      return ""
    }
    let arr = []  
    for(let i=0;i<str.length;i+=sz){
        arr.push(str.substring(i,i+sz))
        console.log(str.substring(i,i+sz))
      }
     let arr2 = arr
        let arr3 = arr2.map(x=>x.split(''))
        console.log(arr3)
        arr3.forEach(e => {
            if(e%2==0){
                e = e.map(x=>x)
                console.log(e)
            }
            
        });
        console.log(arr2)
        return arr2.join('')
  }
  console.log(revrot("733049910872815764", 5))