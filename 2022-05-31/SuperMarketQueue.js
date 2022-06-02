function queueTime(customers, n) {
    let arr = []
    while(customers.length) {
        arr.push(customers.splice(0,n));
    }
    console.log(arr)
    return arr.reduce((acc,c)=>acc+c[Math.max(...arr)],0)
}
console.log(queueTime([2,3,10],2))