// reduce() in array
const myNum = [1,2,3]


// const sumNum = myNum.reduce( (initial , currentValue) => {
//     console.log(initial  , currentValue)
//     return initial + currentValue 
// } , 0)


const sumNum = myNum.reduce( (acc , currentValue) => acc + currentValue ,)
console.log(sumNum)


const shoopingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "phython course",
        price : 3999
    },
    {
        itemName : "C++ course",
        price : 4500
    }
]

let initialValue = shoopingCart.reduce( (acc , cur) => acc+cur.price,0 )
initialValue = (initialValue*18)/100

const total = shoopingCart.reduce( (acc , cur) => acc+cur.price,initialValue)
console.log("total = ", total)

