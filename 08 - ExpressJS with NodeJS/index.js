const express = require('express');


const app = express();

app.get("/", (req, res)=>{
    return res.send("Home Page is Here")
});

app.get("/about", (req, res)=>{
    return res.send("About Page is Here")
})
app.get('/me', (req, res)=>{
    return res.send("Muhammad Zahid Faiz")
})

// Query Handler
app.get('/contact', (req, res)=>{
    return res.send("Hey! " + req.query.name)
})
// http://localhost:8000/contact?name=zahid


app.listen(8000, ()=>{
    console.log("Connection Success")
})