const express = require("express");
const mongoose = require("mongoose");
const os = require("os");
const path = require("path");
const app = express();
const port = 3000;

const mongoDB = "mongodb://localhost:27017/testdb";
mongoose.connect(mongoDB);
mongoose.Promise = Promise;
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));




app.use("/recipe", require("./api/recipes.js"));

app.listen(port, () => console.log(`Server listening a port ${port}`));