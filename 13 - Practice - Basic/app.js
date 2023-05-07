// console.log("Hello World!");

const http = require("http");

const PORT = 3000;

const myServer = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Home Page");
    res.end();
  } else {
    res.write("404 - Not Found");
    res.end();
  }
});

myServer.listen(PORT, console.log("Server Connected!"));
