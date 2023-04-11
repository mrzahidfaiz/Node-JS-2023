const http = require('http');

const fs = require('fs');

const url = require('url')

const myServer = http.createServer((req, res)=> {
    
    if (req.url === "/favicon.ico") return res.end();


    const log = `${Date.now()}: ${req.url} Request Received:\n`
    
    const myUrl = url.parse(req.url, true);
    
    console.log(myUrl);
    
    fs.appendFile('log.txt', log, (err, data)=>{
        
        switch(myUrl.pathname){
            case "/": res.end('Home Page')
            break;
            case "/about": 
           
            const username = myUrl.query.myname 
           
            res.end(`AOA! ${username}`)
           
            break;
            default: res.end("404 Not Found")
        }
    });

});

myServer.listen(8000, ()=>{
    console.log("Connection Success")
})

// http://localhost:8000/about?myname=zahid 