const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(req.url);
})

app.listen(3000);