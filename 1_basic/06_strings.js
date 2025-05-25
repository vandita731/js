const name = "vandita"
const repocount = 1
console.log(name+repocount+" value");

console.log(`hello my name is ${name} and my repo count is ${repocount}`)

const gameName= new String("misty-jain-com")

console.log(gameName[1])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))



const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "      vandita     "

console.log(newStringOne)
console.log(newStringOne.trim())

const url ="https://vandita%20jain"

console.log(url.replace("%20","-"))

console.log(url.includes("hdhdk"))

console.log(gameName.split("-"))

