// for of loop

// [{},{},{}]

const myArray =[1,2,3,4,5]
for (const num of myArray) {
    console.log(num)
}

const greeting = "hello world!"

for (const greet of greeting) {
    if(greet==" "){
        continue
    }
    console.log(greet)
    
}



// maps

const map = new Map()
map.set("In","india")
map.set("U . S . A","united state ofamerica")
map.set("FR","france")

// console.log(map)

for (const [key , value] of map) {
    console.log(key, "-->", value)
}


// in object we can't use for of loop 
// const myObj ={
//     "game1": "NFS",
//     "game2": "PS5"
// }

// for (const game of myObj) {
//     console.log(game)
// }



