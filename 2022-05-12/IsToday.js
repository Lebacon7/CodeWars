/*
Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.
*/
const isToday = date => {
    let today = new Date()
    console.log(today)
    console.log(date)
    return date.toString() === today.toString()
}
console.log(isToday('2022-05-13T19:41:38.239Z'))