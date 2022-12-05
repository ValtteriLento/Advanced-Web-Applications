const express = require("express");
const mongoose = require("mongoose");
const Recipe = require("../models/Recipe");
const router = express.Router();



router.get('/:food', function(req, res, next) {
    res.send({
      name: req.params.food,
      ingredients: ["frozen pizza base", "tomato sauce", "mozzarellas"],
      instructions: ["preheat oven 225C", "slice mozzarellas", "put tomato sauce on pizza base", "put mozzarella slices on pizza", "bake for 15 min"]
  })
});
  
module.exports = router;