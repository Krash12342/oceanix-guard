// Umbrales permitidos y detección de anomalías de Oceanix Guard.
const UMBRALES = {
  temperatura: { nombre: 'Temperatura', min: 18, max: 28, unidad: '°C' },
  ph: { nombre: 'pH', min: 7.5, max: 8.5, unidad: '' },
  oxigeno: { nombre: 'Oxígeno disuelto', min: 5, max: Infinity, unidad: 'mg/L' }
};

// Devuelve la lista de alertas de una lectura (vacía si todo está en rango).
function evaluarLectura(lectura) {
  const alertas = [];
  for (const variable in UMBRALES) {
    const u = UMBRALES[variable];
    const valor = lectura[variable];
    if (valor < u.min || valor > u.max) {
      alertas.push({
        variable,
        valor,
        mensaje: `${u.nombre} en ${valor} ${u.unidad} fuera del rango permitido`
      });
    }
  }
  return alertas;
}

if (typeof module !== 'undefined') module.exports = { evaluarLectura, UMBRALES };
