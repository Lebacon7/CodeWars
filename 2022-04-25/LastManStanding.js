/*
##Object

Find the last number between 1 and n (inclusive) that survives the elimination process

####How It Works

Start with the first number on the left then remove every other number moving right until you reach the the end, then from the numbers remaining start with the first number on the right and remove every other number moving left, repeat the process alternating between left and right until only one number remains which you return as the "last man standing"

##Example

given an input of `9` our set of numbers is `1 2 3 4 5 6 7 8 9`

start by removing from the left    2   4   6   8
                                 1   3   5   7   9


then from the right                2       6
                                       4       8


then the left again                        6
                                   2


until we end with `6` as the last man standing
*/
const lastManStanding = n => {
    let arr = []
    for(let i=1; i<=n; i++){
        arr.push(i)
    }
    while(arr.length>1){
        arr=arr.filter((e,z)=>z%2!==0).reverse()
    }
    return arr[0]
}
console.log(lastManStanding(8))