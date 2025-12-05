const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Conexión DB
require("./database.js");

// Rutas
const personaRoutes = require("./routes/personaRoutes.js");
app.use("/persona", personaRoutes);

// Servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
