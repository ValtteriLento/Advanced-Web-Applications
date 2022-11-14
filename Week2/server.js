const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(port, () => console.log("Server running"));









/*
const http = require("http");

http.createServer(function(req, res) {
    res.write("Hello World!");
    res.end();
}).listen(3000);*/