const express = require("express");
const EQUIPMENT = express.Router();
const Equipment = require("../models/equipment.js");
const {isAuthenticated} = require("./services/authentication_services")


// MIDDLEWARE
EQUIPMENT.use(isAuthenticated)


EQUIPMENT.post('/', async (req, res) => {
    Equipment.create(req.body, (error, createdEquipment) => {
    if (error) {
        res.status(400).json({ error: error.message })
    }
    res.status(200).send(createdEquipment) 
    })
})


EQUIPMENT.get("/", (req, res) => {
    Equipment.find({}, (err, foundEquipment) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }
        res.status(200).json(foundEquipment)
    })
});


EQUIPMENT.delete("/:id", (req, res) => {
    Equipment.findByIdAndRemove(req.params.id, (err, deletedEquipment) => {
        if (err) {
            res.status(400).json({ error: err.message})
        }       
        res.status(200).json(deletedEquipment)        
    }) 
})


EQUIPMENT.put('/:id', (req, res) => {
    Equipment.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedEquipment) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(updatedEquipment)
    })
})


module.exports = EQUIPMENT