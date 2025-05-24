// 1. primitive 

// 7 types ---> 1.string  2.number  3.null  4.undefine  5.symbol  6.bigInt

let name = "vandita"
let age = 12.4 
const temp = null
let userId;

const Id = Symbol("1234")

const Id_2 = Symbol("1234")

console.log(Id===Id_2) // both are not equal as they are converted into a symbol so they are unquine now

const bigNumber = 132424353546477586876n // now it is a bigint as we use n at last so it is converted into a big int 
console.log(typeof bigNumber)

// 2. reference (non - primitive)

// 3 types ---> 1.array  2.object  3.functions

// javascript is dyanamic type language


const personal_data = [ "vandita ", "cse 1", "btech" ]; // array

let myObj = {
    name:"vandita",
    age:19,
}
// this is a object just like a dictionary it consist of key and value pair 

// functions 

const myFunction = function(){
    console.log("hello world")

}

console.log(typeof personal_data )
console.log(typeof myObj )
console.log(typeof myFunction )


//----------------------------------------------------------------

console.log("------------------------------------")


// two types of memory 

// 1. stack (primitive)(in this we get copy value )    2. heap (non primitive)(in this we get original value)

 let myName = "vandita"

 let myAnotherName = myName

 myAnotherName ="misty"

 console.log(myName)
 console.log(myAnotherName)

 let userOne = {
    name : "vandita",
    email : "vandita@gmail.com"

 }

 let userTwo = userOne

 userTwo.email = "misty@gmail.com"

 console.log(userOne.email)
 console.log(userTwo.email)