const bcrypt = require('bcrypt')
const express = require('express')
const SESSION = express.Router()
const User = require('../models/user.js')

SESSION.get('/new', (req, res) => {
    res.redirect("/", {currentUser: req.session.currentUser})
})

SESSION.post('/', (req, res) => {
    User.findOne({ username: req.body.username }, (err, foundUser) => {

    if (err) {
        console.log(err)
        res.send('The db had a problem')
    } else if (!foundUser) {
        res.send('<a  href="/">Sorry, no user found </a>')
    } else {
        if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.currentUser = foundUser
        res.redirect('/main')                                           //////HERE////// redirect? how does that work with REACT?
        } else {
        res.send('<a href="/"> Invalid password </a>')
        }
    }
    })
})

SESSION.delete('/', (req, res) => {
    req.session.destroy(() => {
    res.redirect('/main')                                               //////HERE////// redirect? how does that work with REACT?
  })
})

module.exports = SESSION