const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const session = require('express-session')

function getUserByUsername(username) {
    return users.find(user => user.username == username)
}

function getUserById(id) {
    return users.find(user => user.id === id)
}

const initializePassport = require('./passport-config')
initializePassport(passport, getUserByUsername, getUserById)

let users = []

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: "ASF#LSAFK192409124saf&",
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.post('/api/user/register', checkNotAuthenticated, async (req, res) => {
    if (!getUserByUsername(req.body.username)) {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            users.push({
                id: Date.now().toString(),
                username: req.body.username,
                password: hashedPassword
            })
            console.log(users)
            res.send(getUserByUsername(req.body.username))
        } catch {
            res.redirect("/api/user/register")
        }
    } else {
        res.sendStatus(400)
    }
})

app.post('/api/user/login', checkNotAuthenticated, passport.authenticate('local'), (req, res) => {
    res.sendStatus(200)
})

app.get('/api/secret', checkAuthenticated, (req, res) => {
    res.sendStatus(200)
})

app.get('/api/user/list', (req, res) => {
    res.send(users)
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.sendStatus(401)
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/api/secret")
    }
    return next()
}

app.listen(3000)