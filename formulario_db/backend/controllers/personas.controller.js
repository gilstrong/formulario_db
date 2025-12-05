const db = require("../config/database");
const validarCedula = require("../validarCedula");

exports.crearPersona = (req, res) => {
  const { nombre, apellido, cedula } = req.body;

  const validacion = validarCedula(cedula);
  if (!validacion.valido) {
    return res.status(400).json({ error: validacion.mensaje });
  }

  const sql = "INSERT INTO personas (nombre, apellido, cedula) VALUES (?, ?, ?)";

  db.query(sql, [nombre, apellido, cedula], (err, result) => {
    if (err) return res.status(500).json({ error: "Error al guardar los datos" });
    res.json({ mensaje: "Registro guardado correctamente" });
  });
};
