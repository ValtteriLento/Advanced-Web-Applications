const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const {body, validationResult } = require("express-validator");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const validateToken = require("../auth/validateToken.js")

router.post('/register/',
    body("email").isLength({min: 3}).trim().escape(),
    body("password").isLength({min: 5}),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        User.findOne({email: req.body.email}, (err, user) => {
            if(err) {
                console.log(err);
                throw err
            };
            if(user) {
                return res.status(403).json({email: "Email already in use."});
            } else {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.password, salt, (err, hash) => {
                        if(err) throw err;
                        User.create(
                            {
                                email: req.body.email,
                                password: hash
                            },
                            (err, ok) => {
                                if(err) throw err;
                                return res.sendStatus(400);
                            }
                        );
                    });
                });
            }
        });
    });

    module.exports = router;