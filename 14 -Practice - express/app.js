const express = require("express");

const app = express();

const form = require("./routers/form")


app.use("/form", form)

app.listen(3000);