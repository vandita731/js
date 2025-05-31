const userId =" van@game.in"

if (userId){
    console.log("got the usder ID")
}
else{
    console.log("don't have user ID")
}

// falsy value
// false , 0 , -0 , BigInt 0n , "" , null , undefine , NaN

// truthy value 
// "0" , "false" , " " , [] , {} , function(){}

const user = []
if(user.length === 0){
    console.log("array is empty")
}

const emptyObj ={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty")
}



// Nullish Coalescing Operator (??): null , undefined

let val1 
// val1 = 5 ?? null
// val1 = null ?? 10
// val1 = undefined ?? 20
val1 = undefined ?? 10 ?? 20



console.log(val1)

// terniary operator

// condition ? true : false 

const iceTeaPrice = 10
iceTeaPrice>=80 ? console.log("you can buy") : console.log("you can't buy")

