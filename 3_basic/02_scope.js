let a = 10
const b = 20
var c = 30
if (true){
    let a = 100
    const b = 200
    var c = 300
}

console.log(a)
console.log(b)
console.log(c) // here we will get 300 are it changes it value  if we change it in any scope
// scope is a {} which is used in function , if else ,loop
// so that why we don't use var in our code 


function one(){
    const userName ="vandita"
    function two(){
        const website = "youtube"
        console.log(userName)
    }

    // console.log(website)
    two()

}
one()

if (true){
    const userName = "vandita"
    if(userName==="vandita"){
        const website = " youtube"
        console.log(userName+website)

    }
    // console.log(website)
}
// console.log(username)


console.log(addOne(7)) // this will work

function addOne(num){
    return num+1
}


console.log(addTwo(4))// this will not work it will throw error
const addTwo = function(num){
    return num +2
}


