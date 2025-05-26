// arrays

const myArr = [89,1,2,3,4,5]
console.log(myArr[0])

const myHeros = ["spiderMan","batMan","thor"]

const myArr2 = new Array(1,2,5,8)

// arrays method

myArr.push(78)
myArr.push(79) // .push add the given value in the end
myArr.pop() // .pop remove the last value 
console.log(myArr)

myArr.unshift(45) // add the given value at first place
console.log(myArr)

myArr.shift() // remove the value which placed at first place

console.log(myArr)


console.log(myArr.includes(2))
console.log(myArr.indexOf(3))

const newArr = myArr.join() // join the array in new variable and also convert it into a string 

console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

// slice , splice

console.log("a",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("b",myArr)

const myn2 = myArr.splice(1,3)

console.log(myn2)
console.log("C",myArr)




