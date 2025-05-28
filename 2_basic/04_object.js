// const tinderUser = new Object() this is a singleton

const tinderUser = {} // this non singleton object

tinderUser.id ="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn = false


console.log(tinderUser)

const regularUser = {
    fullname:{
        userfullname:{
            firstname:"vandita",
            lastname:"jain"
    
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {
    1:"van",
    2:"jan"
}

const obj2 = {
    3:"abc",
    4:"dfh"
}

// const obj3 = Object.assign({},obj1,obj2)     we can use this method also in which {} is a target object
const obj3 = {...obj1,...obj2} // mostly we are going to use this one method only because it easy and simple 


console.log(obj3)

const myArr = [
    {
        id:'1',
        email : "v@gmal.com"
    },

    {
        id:'2',
        email : "a@gmal.com"
    },

    {
        id:'3',
        email : "b@gmal.com"
    }
]

// now how we can access let see
console.log(myArr[1].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser)) // it will return in array whivh will be very usefull
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename : "Java Script",
    courseprice : "999",
    courseinstructor : "hitesh"
}

const {courseinstructor} = course

console.log(courseinstructor)

const {courseinstructor:instructor} = course

console.log(instructor)

