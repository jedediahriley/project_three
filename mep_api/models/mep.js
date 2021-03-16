const mongoose = require('mongoose')

const mepSchema = mongoose.Schema({
    name: {type: String, required: true},
    tag: {type: String, required: true},
    poNumber: {type: String, required: true},
    equipDescript: {type: String, default: "Describe equipment: "},
    equipImage: String,
    received: {type: Boolean, default: false},
    location: {type: String, required: true},
    keepCovered: {type: Boolean, default: true},
    damageDescript: {type: String, default: "Describe any damage: "},
    damageImage: String,
    vendor: {type: String, required: true},
    vendorEmail: {type: String, required: true},
    vendorPhone: {type: String, required: true},
    maintenance: []
})

module.exports = mongoose.model('mep', mepSchema)