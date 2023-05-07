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
    res.write("<form action='/submit' method='POST'><input name='data' /><button>Submit</button></form>");
    res.end();
  } else if (req.url === "/submit" ) {
    // Now Just Take data form the input filed an show in console 
    // data always recieved in chunk and here, [on] is a eventListner
    // so now putt data as empty sting; let data = ""; merge data in chunk [chunk => data+=chunk]
    let data = "";
    req.on("data", chunk => data+=chunk); // aftr recieving complete data next is
    req.on("end" , () => console.log(data)); // its show Result in console
    res.write("Data Submited Success");
    res.end();
  } else {
    res.write("404 - Not Found");
    res.end();
  }
});

myServer.listen(PORT, console.log("Server Connected!"));
