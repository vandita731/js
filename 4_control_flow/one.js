// if

// opperators
// < , > , <= , >= , ==,!= , === , !==

const score = 20
if (score > 100){
    let power = "fly"
    console.log(`user power = ${power}`)
}
else{
    console.log("none power")
}





const balance = 1000
if (balance<500) {
    console.log("grater then 500")
    
}
else if (balance<750) {
    console.log('greater then 750')
}

else if (balance<900) {
    console.log("grester then 900")
}
else{
    console.log("less then 1200")
}



// && , || 

const userloggedin = true
const debitCard = true 

const loggedInFromGoogle = true
const loggedInFromEmail = false

if(userloggedin && debitCard){
    console.log("you are welcome to shop")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in from trusted platfrom")
}