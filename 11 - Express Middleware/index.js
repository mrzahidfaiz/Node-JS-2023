const express = require('express');
const users = require('./MOCK_DATA.json')
const fs = require('fs');

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false}))


app.get("/api/users", (req, res)=>{
    res.json(users)
})

app.get("/api/users/:id", (req, res)=>{
    const id = Number(req.params.id);
    const user = users.find( (user) => user.id === id)
    return res.json(user)
})

app.post("/api/users", (req, res)=>{
    const body = req.body;
    users.push({...body, id: users.length + 1})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{
        return res.json({ Status: "Success", id: users.length})
    } )
})

app.listen(PORT, ()=>{
    console.log(`Connection Success! on Port ${PORT}`);
});