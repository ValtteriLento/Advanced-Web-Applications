const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const session = require('express-session')

function getUserByUsername(username) {
    return users.find(user => user.username == username)
}

let users = []

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/api/user/register', async (req, res) => {
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
            res.sendStatus(400)
        }
    } else {
        res.sendStatus(400)
    }
})

app.get('/api/user/list', (req, res) => {
    res.send(users)
})

app.listen(3000)