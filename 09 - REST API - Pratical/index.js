const express = require('express');
const users = require('./MOCK_DATA.json')
const app = express();
const PORT = 8000;


// app.get("/users", (req, res)=>{
//     return res.json(users);
// })

app.get("/users", (req, res)=>{
    const html = `
    <li>
    ${users.map((user)=>`${user.first_name}\n`).join("")}
    </li>
    `;
    return res.send(html)
})

app.get("/api/users", (req, res)=>{
    return res.json(users);
})

app.get("/api/users/:id", (req, res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id)
    return res.json(user);
})

app.listen(PORT, ()=>{
    console.log("Connection Started!")
})
