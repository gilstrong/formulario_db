const mongoose = require("mongoose");

const personaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    cedula: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Persona", personaSchema);
