const http = require('http');
const fs = require('fs')

const myServer = http.createServer((req, res)=>{
    
    const log = `${Date.now()}: ${req.url} New Request from Browser\n`;
   
    fs.appendFile('log.txt', log, (err, data)=>{
        switch(req.url){
            case "/": res.end("HomePage")
            break;
            case "/about": res.end("I am Muhammad Zahid")
            break;
            default:
                res.end("404 Not Found")
        }
    });
    
});

myServer.listen(8000, ()=>{
    console.log('Connection Successed!')
})
