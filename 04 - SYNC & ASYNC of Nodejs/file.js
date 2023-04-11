const fs = require('fs')

// System Thread/core info

const os = require('os')

console.log(os.cpus().length)



//fs.writeFileSync('./contact.txt' , `Muhammad Shaihd Phone#: 035694432321\n`)


// // Sync - BLOCKING Req
// console.log('1');
// const read = fs.readFileSync('./contact.txt' , 'utf-8');
// console.log(read)
// console.log('2')

// ASync - Non - Blocking Req

console.log('1')
console.log('2')
fs.readFile('./contact.txt', 'utf-8' , (err, read) => {
    console.log(read)
})
console.log('4')
console.log('5');