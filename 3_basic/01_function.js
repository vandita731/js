function AddTwoNUmber(number1 , number2){
    console.log("hello")
    // let result = number1+number2
    // return result
    return number1 + number2

}

const result = AddTwoNUmber(3,8)
console.log("result = ",result)

function LoginUserMessage(userName){
    // if(userName===undefined){
    //     console.log("enter a username ")
    //     return
    // }
    if(!userName){  // here we are using !username because if it is undefine it is false ! this will convert it into true 
        console.log("enter a username ")
        return
    }
    return `${userName} logged in `
}

const message = LoginUserMessage()
console.log(message)


function userMessage(userName="van"){  // van is a default name 

    return `${userName} logged in `
}

console.log(userMessage())


function calculateCartPrice(value1, value2 , ...num1){
    // here ...num1 is a rest operator 
    // if you give 5 argument the first will go for value 1
    // and second will go for value 2 now the remaining will go for
    // ...num and get store in form of array 
    console.log("value 1 =",value1)
    console.log("value 2 =",value2)
    return num1
}

console.log("this is the remaining value",calculateCartPrice(299,600,489,567,345,))

const user={
    userName:"vandita",
    price:299
}

function objectHandle(anyObject){
    console.log(`the user name is ${anyObject.userName} and the price is ${anyObject.price}`)

}

objectHandle(user)

// now we will right object while calling for a function

objectHandle({
    userName:"misty",
    price:199
})


const myArray =[200,400,600,800]

function handleArray(anyArray){
    return anyArray[1]
}

console.log(handleArray(myArray))



console.log(handleArray(["vandita","misty","shagun","shikha"]))