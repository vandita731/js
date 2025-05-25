const score = 100
const balance = new Number(400)

console.log(score)
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)

console.log(balance.toFixed(2))

const anotherNum = new Number(123.58955)

console.log(anotherNum.toPrecision(4))

const hundred = new Number(10000000)
console.log(hundred.toLocaleString("en-IN"))


// --------------------------------maths-----------------------------

console.log("------------------maths----------------------")

console.log(Math)
console.log(Math.abs(-7))
console.log(Math.round(4.6))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.89))
console.log(Math.min(4,3,8,5,1))
console.log(Math.max(4,3,68,9))


console.log(Math.random())

// Math.random() gives the output from 0 to 1

console.log(Math.floor(((Math.random()*10)+1)))

// now we get the value a single digit 

// if it given like that we have to take min value as 10 and max value as 20 then
console.log("we have a question that we want random numbers from range 10 to 20")
const min = 10 
const max = 20

console.log(Math.floor((Math.random()*(max - min + 1))+min))
console.log(Math.floor((Math.random()*(max - min + 1))+min))
console.log(Math.floor((Math.random()*(max - min + 1))+min))
