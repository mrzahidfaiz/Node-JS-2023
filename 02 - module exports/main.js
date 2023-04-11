// for call function in main we use require function which is used as import in java and c/c++ as include.conio

// const math = require("./math")

// console.log(math); // for value is zahid

// console.log(math); // just call full fucntion [Function: add]

//console.log(math); // give an empty object {}

// console.log("Value is",math(2, 8));

// console.log('Value is ', math.add(6, 2));
// console.log('Value is ', math.sub(6, 2));

//my destructuring

const { add, sub } = require('./math')

console.log(add(6, 6));
console.log(sub(6, 6));

