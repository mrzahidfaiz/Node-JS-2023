// console.log("Hello World!");

const http = require("http");

const PORT = 3000;

const myServer = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Home Page");
    res.end();
  } else if (req.url === "/form"){
    res.setHeader("Content-Type", "text/html");
    // by default its send Get request so we use method in form tag; by default button action as sumbit
    res.write("<form action='/submit' method='POST'><input name='Data'/><button>Submit</button></form>");
    res.end();
  } else {
    res.write("404 - Not Found");
    res.end();
  }
});

myServer.listen(PORT, console.log("Server Connected!"));
