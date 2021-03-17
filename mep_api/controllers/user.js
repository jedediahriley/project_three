const bcrypt = require("bcrypt");
const express = require("express");
const USER = express.Router();
const User = require("../models/user.js");


USER.post("/", async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))    ////////HERE///////
    User.create(req.body, (error, createdUser) => {
        console.log("user is created", createdUser)
    if (error) {
        res.status(400).json({ error: error.message })
    };
    res.status(200).send(createdUser);
    });
});


USER.get("/", (req, res) => {
    User.find({}, (err, foundUser) => {
        if (err) {
            res.status(400).json({ error: err.message });
        };
        res.status(200).json(foundUser);
    });
});


USER.get("/new", (req,res) => {
    res.render(/user/new.js)
})                                         


USER.delete("/:id", (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, deletedUser) => {
        if (err) {
            res.status(400).json({ error: err.message});
        };      
        res.status(200).json(deletedUser);      
    });
});


USER.put("/:id", (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUser) => {
        if (err) {
            res.status(400).json({ error: err.message });
        };
        res.status(200).json(updatedUser);
    });
});


module.exports = USER