// Simulador de sensores de Oceanix Guard (datos generados por el programa).
function azar(min, max, dec) {
  return +(min + Math.random() * (max - min)).toFixed(dec);
}

// Devuelve una lectura de temperatura, pH y oxígeno disuelto.
// Si anomalia = true, una de las variables sale del rango permitido.
function leerSensores(anomalia) {
  const lectura = {
    temperatura: azar(22, 25, 1),
    ph: azar(7.9, 8.1, 2),
    oxigeno: azar(6.5, 7.5, 1)
  };
  if (anomalia) {
    const v = ['temperatura', 'ph', 'oxigeno'][Math.floor(Math.random() * 3)];
    if (v === 'temperatura') lectura.temperatura = azar(29, 32, 1);
    if (v === 'ph') lectura.ph = azar(6.8, 7.2, 2);
    if (v === 'oxigeno') lectura.oxigeno = azar(3, 4.5, 1);
  }
  return lectura;
}

if (typeof module !== 'undefined') module.exports = { leerSensores };
