const mongoose = require("mongoose")

const equipmentSchema = mongoose.Schema({
    name: {type: String, required: true},
    tag: {type: String, required: true},
    poNumber: {type: String, required: true},
    equipDescription: {type: String, default: "Describe equipment: "},
    equipImage: String,
    received: {type: Boolean, default: false},
    location: {type: String, required: true},
    keepCovered: {type: Boolean, default: true},
    indoors: Boolean,
    damage: Boolean,
    damageDescription: {type: String, default: "Describe any damage: "},
    damageImage: String,
    vendor: {type: String, required: true},
    vendorEmail: String,
    vendorPhone: String,
    vendorContact: String,
    vendorAddress: String,
    maintenance: {type: [mongoose.Schema.Types.ObjectId]}
});

module.exports = mongoose.model("equipment", equipmentSchema);