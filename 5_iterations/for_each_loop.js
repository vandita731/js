const coding =["JS","python","C++","java","ruby"]
// first way

// coding.forEach(function (value){
//     console.log(value)
// })


// second way
// coding.forEach((value) => {
//     console.log(value)

// })



// third way
// function printMe(item){
//     console.log(item)

// }

// coding.forEach(printMe)


coding.forEach((item , index, arr) => {
    console.log(item , index , arr)

})




const myCoding = [
    {
        languageName : "javascript",
        languageafileNmae : "JS"
    },
    {
        languageName : "java",
        languageafileNmae : "java"
    },
    {
        languageName : "python",
        languageafileNmae : "py"
    }
]


myCoding.forEach((item) => {
    console.log(item.languageName)

})

