const express = require("express");
const users = require("./MOCK_DATA.json");

//  FileSyetem
const fs = require("fs");



const app = express();
const PORT = 8000;

// app.get("/users", (req, res)=>{
//     return res.json(users);
// })

// Middleware -- as Plugin
app.use(express.urlencoded({extended: false}))

app.get("/users", (req, res) => {
  const html = `
    <li>
    ${users.map((user) => `${user.first_name}\n`).join("")}
    </li>
    `;
  return res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    return res.json({ Status: "Pending" });
  })
  .delete((req, res) => {
    return res.json({ Status: "Pending" });
  });

app.post("/api/users", (req, res)=>{
    const body = req.body;
    users.push({...body, id: users.length + 1});
    //  console.log("Body", body)
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{
        return res.json({ Status: "Success", id: users.length })
    })
    // return res.json({ Status: "Pending" })
})

app.listen(PORT, () => {
  console.log("Connection Started!");
});
