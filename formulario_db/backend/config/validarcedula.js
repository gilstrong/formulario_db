function validarCedula(cedula) {
  if (!/^\d{11}$/.test(cedula)) {
    return { valido: false, mensaje: "❌ La cédula debe tener exactamente 11 números." };
  }

  const digitos = cedula.split("").map(Number);
  let suma = 0;

  for (let i = 0; i < 10; i++) {
    const multiplicador = (i % 2 === 0) ? 1 : 2;
    let producto = digitos[i] * multiplicador;

    if (producto > 9) {
      producto = Math.floor(producto / 10) + (producto % 10);
    }

    suma += producto;
  }

  const verificadorEsperado = (10 - (suma % 10)) % 10;
  const verificadorReal = digitos[10];

  if (verificadorEsperado !== verificadorReal) {
    return { valido: false, mensaje: "❌ Cédula inválida. Inténtalo de nuevo." };
  }

  return { valido: true };
}

module.exports = validarCedula;
