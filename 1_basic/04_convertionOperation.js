let score="33abc"
console.log(typeof score)

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber)

console.log("----------")

/* 
"33" = 33
"33abc" = NaN(not a number)
true = 1 ; false = 0;

*/

let loggedIn = 1
let booleanLoggedIn = Boolean(loggedIn)

console.log(booleanLoggedIn)

console.log("----------")


// 1 = true 
// 0 = false
// "" = false
// "asfdg" = true

let age = 23
let stringInNumber= String(age)
console.log(stringInNumber)
console.log(typeof stringInNumber)


// *******************operation*******************

console.log("*****************operatins******************")

let value = 3
let negValue= -value
console.log(negValue)

console.log(2+2)
console.log(2-1)
console.log(2*4) // multiplication
console.log(4/2)
console.log(2**3) // power 
console.log(2%3) // remainder


let str1 = "hello "
let str2 = "vandita"
let str3 = str1 + str2

console.log(str3)

console.log("1"+2+3) // first string then ever thing is converted into string
console.log(1+2+"3") // first and second number both are number so they add then a string is add to it
console.log(1+"2"+3)

console.log(+true) // convert this boolean into number 
console.log(+"") // convert this string into 


let gameCounter = 100
gameCounter++
console.log(gameCounter++)
console.log(++gameCounter)





