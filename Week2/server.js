let hello = {
    msg: "Hello world"
}

let list = {
    list: []
};

const express = require("express");
const os = require("os");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/hello", (req, res) => {
    res.json(hello);
})

app.get("/echo/:id", (req, res) => {
    res.json(req.params);
})

/*app.post("/sum", (req, res) => { 
    res.send(req.body.numbers)
})*/

app.post("/list", (req, res) => {
    list.list.push(req.body.text);
    res.send(list);
})


app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log(`Server listening a port ${port}`));