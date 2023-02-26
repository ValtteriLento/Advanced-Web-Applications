var express = require('express');
const mongoose = require("mongoose");
const Book = require("../models/Book");
var router = express.Router();

/* GET data . */
router.get('/:name', (req, res, next) => {
    Book.findOne({ name: req.params.name}, (err, book) => {
        if(err) return next(err);
        if(book) {
            return res.json(book);
        } else {
            return res.status(404).send("This is not the webpage you are looking for");
        }
    });
});

module.exports = router;