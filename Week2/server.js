let hello = {
        msg: "Hello world"
    }

const express = require("express");
const os = require("os");
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
    res.json(hello);
})

/*app.get("/", (req, res) => {
    res.send("Hello World!");
})*/

app.listen(port, () => console.log("Server running"));