const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/formulario_db")
    .then(() => console.log("Base de datos conectada"))
    .catch(err => console.error("Error al conectar a MongoDB:", err));
