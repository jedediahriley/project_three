const express = require("express");
const USER = express.Router();
const User = require("../models/user.js");


USER.post('/', async (req, res) => {
    User.create(req.body, (error, createdUser) => {
    if (error) {
        // res.status(400).json({ error: error.message })
        console.log(error)
    }
    res.status(200).send(createdUser) 
    })
})


USER.get("/", (req, res) => {
    User.find({}, (err, foundUser) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }
        res.status(200).json(foundUser)
    })
});


USER.delete("/:id", (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, deletedUser) => {
        if (err) {
            res.status(400).json({ error: err.message})
        }       
        res.status(200).json(deletedUser)        
    }) 
})


USER.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUser) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(updatedUser)
    })
})


module.exports = USER