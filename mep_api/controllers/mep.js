const express = require("express");
const MEP = express.Router();
const Mep = require("../models/mep.js");

MEP.post('/', async (req, res) => {
    Mep.create(req.body, (error, createdMep) => {
    if (error) {
        res.status(400).json({ error: error.message })
    }
    res.status(200).send(createdMep) 
    })
})

MEP.get("/", (req, res) => {
    Mep.find({}, (err, foundMep) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }

        res.status(200).json(foundMep)
    })
});




MEP.delete("/:id", (req, res) => {
    Mep.findByIdAndRemove(req.params.id, (err, deletedMEP) => {
        if (err) {
            res.status(400).json({ error: err.message})
        }
        
        res.status(200).json(deletedMEP)        
    }) 
})


MEP.put('/:id', (req, res) => {
    Mep.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedMep) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(updatedMep)
    })
})

module.exports = MEP

