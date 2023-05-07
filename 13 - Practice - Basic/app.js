// console.log("Hello World!");

const http = require('http');

const PORT = 3000;

const myServer = http.createServer((req, res) =>{
    res.write("Home Page");
    res.end();
});


myServer.listen(PORT, console.log("Server Connected!"));