const user = {
    userName : "vandita",
    price : 999,
    welcomeMessage : function() {
        console.log(`${this.userName}, welcome to the website`)
        console.log(this)

    }
}

user.welcomeMessage()
user.userName = "misty"
user.welcomeMessage()

console.log(this) // this will give a empty object

function one(){
    let userName = "vandita"
    // console.log(this.userName)  this will not work "this" method only works in object
}

one()  

// now let's see the arrow function

const two = () => {
    let userName= "vandita"
    console.log(this)
}
 

two()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }


// another way implisitive return

const addTwo = (num1,num2) => (num1+num2)
console.log(addTwo(2,5))

const addT = (num1,num2) => ({userName:"vandita"})
console.log(addT(2,5))