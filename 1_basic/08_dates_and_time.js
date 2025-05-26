// Dates

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())

console.log(typeof myDate)

let myCreateDate = new Date(2025,0,7)
console.log(myCreateDate.toDateString())

let newDate = new Date("2025-01-26")
console.log(newDate.toLocaleString())

let myTimeStamp = Date.now() // to get time stamp in milli second  


console.log(myTimeStamp);

console.log(myCreateDate.getTime())
console.log(Math.floor(Date.now()/1000)) // milli second to second

let newDate_1 = new Date()
console.log(newDate_1.getDay())

console.log(newDate_1.toLocaleString('default',{
    //weekday:"long",
    timeStyle:"full"

}))

