// for loop 
for (let i = 0; i <=10; i++) {
    if (i==5) {
        console.log("5 is the best number")
    }
    console.log(`the value is ${i}`)
    
}

for (let i = 1; i < 11; i++) {
      console.log(`outter loop value ${i}`)
      for (let j = 1; j < 11; j++) {
        // console.log(`inner loop value ${j} and outter loop value ${i}`);
        console.log(i,"X",j,"=",i*j)
      }
    
}


let myArray = ["batman","ironman","thor","captain america"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
    
}


// break and continue

for (let i = 1; i < 21; i++) {
    
    if(i==5){
        console.log("5 is the best number")
        break
    }
    console.log(`value of i is ${i}`)
    
}


for (let i = 1; i < 21; i++) {
    
    if(i==5){
        console.log("5 is the best number")
        continue
    }
    console.log(`value of i is ${i}`)
    
}
