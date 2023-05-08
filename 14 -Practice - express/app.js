const express = require("express");

const app = express();

const form = require("./routers/form");

app.use("/form", form);

app.use("/form/submit", form);

app.listen(3000);
