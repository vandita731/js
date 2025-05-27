// singleton

// object literals

const mySym = Symbol("key1")



const jsUser = {
    name : "vandita",
    "full name" : "vandita jain",
    [mySym]:"myKey1",
    age : 19,
    location : "indore",
    email: "vandita@gmail.com",
    lastLoginDay:["monday","saturday"]


}
 
console.log(jsUser.name)
console.log(jsUser["name"]) // this one is more right so perfer this method
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser["lastLoginDay"])
console.log(jsUser[mySym])

jsUser["email"]="vandita@google.com"
jsUser["full name"]= "vandita misty jain"

console.log(jsUser["email"])
console.log(jsUser["full name"])

// Object.freeze(jsUser) if i use this then i cant make any other futher changes

jsUser["email"]="vandita@micro.com"
jsUser.age = 20

console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello JS user ")
}

jsUser.greetingTwo = function(){
    console.log(`hello JS user ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())