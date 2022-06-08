//this one ultimately got me.  Sorry!
function encrypt(text, n){
    if(n<1){
        return text
    }else{
    let count=1
    let arr = text.split('')
    var res = []
    let oddArr = arr.filter((_,i)=>i%2!=0)
    let evenArr = arr.filter((_,i)=>i%2==0)
    res = (oddArr.concat(evenArr))
    while(count<n){
        oddArr = res.filter((_,i)=>i%2!=0)
        evenArr = res.filter((_,i)=>i%2==0)
        res = (oddArr.concat(evenArr))
        count++
    }
    return res.join('')
    }
}
console.log(encrypt('This is a test!',1))

function decrypt(encryptedText, n) {
    if(n==0){
        return encryptedText
    }else{
    let countTwo=1
    let arrTwo = encryptedText.split('')
    var resTwo = []
    let oddArrTwo = arrTwo.filter((_,i)=>i%2!=0)
    let evenArrTwo = arrTwo.filter((_,i)=>i%2==0)
    resTwo = (evenArrTwo.concat(oddArrTwo))
    while(countTwo<n){
    oddArr = resTwo.filter((_,i)=>i%2!=0)
    evenArr = resTwo.filter((_,i)=>i%2==0)
    resTwo = (evenArrTwo.concat(oddArrTwo))
    countTwo++
    }
    return resTwo.join('')
    }
}
console.log(decrypt('hsi  etTi sats!',1))