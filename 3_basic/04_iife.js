// immediately invoked function expressions (IIFE)

(function one(){
    // named IIFE
    console.log(`DB CONNECTED`)
})();

((name) => {
    console.log(`DB CONNECTED two ${name}`)
})("vandita");
