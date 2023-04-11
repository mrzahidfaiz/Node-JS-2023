const http = require("http");
const os = require('os');

console.log("Aviable Thread", os.cpus().length)

const PORT = 8000;


const myServer = http.createServer((req, res)=>{
    console.log("Request from Browser!")
    res.end("RESPONSE FROM SERVER")
});

myServer.listen(PORT, ()=>{
    console.log(`Server Connected! at Port: ${PORT} `)
});
