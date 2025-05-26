const marvel_heros=["thor","ironMan","spiderMan"]
const dc_heros = ["superMan","batMan","wonderWomen"]

// marvel_heros.push(dc_heros)



// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allHero = marvel_heros.concat(dc_heros)

// console.log("A",allHero)

const all_new_hero = [...marvel_heros, ...dc_heros] // this is spread method 

console.log(all_new_hero)


// so we dont use push to add two array as it add one array in another array
// so we can use concat to add two string
// but we perfer spread method to add strings 

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const new_another_array = another_array.flat(Infinity)
console.log(new_another_array)

console.log(Array.isArray("vandita"))
console.log(Array.from("vandita"))
console.log(Array.from({name:"vandita"})) // this will give empty array

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1,score2,score3,score4))


