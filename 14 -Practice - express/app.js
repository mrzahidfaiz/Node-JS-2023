const express = require("express");

const app = express();

// this function can 3 arug which is res, req and next();
app.use((req, res, next) => {
    next();
})

app.use((req, res, next) => {
    res.send(req.url);
})

app.listen(3000);