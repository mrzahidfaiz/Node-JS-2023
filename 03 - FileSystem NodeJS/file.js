const fs = require('fs')


// //console.log(fs);
// // Sync....
//  fs.writeFileSync('./textfile.txt','Muhammad Zahid Faiz');
//  // jsut change the Name
//  fs.writeFileSync('./textfile.txt', 'Name will be over-write');

// _____________________________________________________


// ASync
// Difference is that its req call back function for error
//fs.writeFile('./test.txt', 'Muhammad PBUH', (error)=>{});

// Test Again
// fs.writeFile('./test.txt', 'MUHAMMAD ZAHID', (err)=>{});

// _____________________________________________________

    // Sync...
// const Read = fs.readFileSync('./contact.txt', "utf-8");

// console.log(Read)


    // ASYNC
//  fs.readFile('./contact.txt', 'utf-8', (err, data)=>{
//     if(err){
//         console.log('ERROR', err);
//     }
//     else{
//         console.log("Read", data);
//     }
// })

// _____________________________________________________

//Interview 
// NODE JS Architucture
// Blocking and non-Blocking req

// _____________________________________________________

// write files with out overwrite lines 

// fs.appendFileSync('./contact.txt', 'Mr Shahid Faiz ph# 03123456789')
// fs.appendFileSync('./contact.txt', `Mr Majid Faiz ph# 03123456789\n`)

fs.appendFileSync('./log.txt', `Name: M SHAHID, ID=2, Time:${Date.now()} \n`)

