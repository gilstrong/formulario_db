const express = require("express");
const router = express.Router();

// Ruta relativa correcta desde backend/routes → models
const Persona = require('../../models/persona.js');

// ➤ Insertar
router.post("/insertar", async (req, res) => {
    try {
        const persona = new Persona(req.body);
        await persona.save();
        res.json({ mensaje: "Persona guardada", persona });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// ➤ Listar
router.get("/listar", async (req, res) => {
    const personas = await Persona.find();
    res.json(personas);
});

// ➤ Modificar
router.put("/modificar/:id", async (req, res) => {
    try {
        const persona = await Persona.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json({ mensaje: "Persona modificada", persona });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// ➤ Eliminar
router.delete("/eliminar/:id", async (req, res) => {
    await Persona.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Persona eliminada" });
});

module.exports = router;
