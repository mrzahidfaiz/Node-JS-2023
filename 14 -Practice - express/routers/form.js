const express = require("express");
const router = express.Router();

// /form/ works like
router.get("/", (req, res) => {
  res.send(
    `
        <form action="/form/submit" method="POST">
        <input name="data" />
        <button name="submit">Submit</button>
        </form>
        `
  );
});

router.post("/submit", (req, res) => {
  res.send("Submitted SuccessFull");
});

module.exports = router;
