// for in loop used for object mainly
 const myObj = {
    JS : "javascript",
    cpp : "c++",
    RB : "ruby",
    swift : "swift by apple"
 }

 for (const key in myObj) {
    console.log(`the full form of ${key} is ${myObj[key]}`)
 }




const myArray = ["js","java","c++","ruby"]

for (const key in myArray) {
    console.log(myArray[key])
}





// we can't use for in loop on map 