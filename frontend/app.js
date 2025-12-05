const form = document.getElementById("formPersona");
const mensaje = document.getElementById("mensaje");
const lista = document.getElementById("listaPersonas");

// Mostrar todas las personas
async function mostrarPersonas() {
  lista.innerHTML = "";
  try {
    const res = await fetch("http://localhost:3000/api/persona/listar");
    const personas = await res.json();
    personas.forEach(p => {
      const li = document.createElement("li");
      li.innerText = `${p.nombre} ${p.apellido} - ${p.cedula} - ${p.correo} - ${p.telefono}`;
      lista.appendChild(li);
    });
  } catch (err) {
    console.error(err);
  }
}

// Guardar nueva persona
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const persona = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    cedula: document.getElementById("cedula").value,
    correo: document.getElementById("correo").value,
    telefono: document.getElementById("telefono").value
  };

  try {
    const res = await fetch("http://localhost:3000/api/persona/insertar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(persona)
    });

    const data = await res.json();
    mensaje.innerText = data.mensaje || data.error;
    form.reset();
    mostrarPersonas(); // actualizar lista
  } catch (err) {
    console.error(err);
    mensaje.innerText = "Error al enviar los datos";
  }
});

// Mostrar personas al cargar la página
mostrarPersonas();
