const test = require('node:test');
const assert = require('node:assert');
const { evaluarLectura } = require('../alertas.js');
const { leerSensores } = require('../sensores.js');

test('una lectura normal no genera alertas', () => {
  assert.strictEqual(evaluarLectura({ temperatura: 24, ph: 8, oxigeno: 7 }).length, 0);
});

test('temperatura alta genera una alerta de temperatura', () => {
  const a = evaluarLectura({ temperatura: 31, ph: 8, oxigeno: 7 });
  assert.strictEqual(a.length, 1);
  assert.strictEqual(a[0].variable, 'temperatura');
});

test('pH bajo genera una alerta de pH', () => {
  const a = evaluarLectura({ temperatura: 24, ph: 7.1, oxigeno: 7 });
  assert.strictEqual(a[0].variable, 'ph');
});

test('oxígeno bajo genera una alerta de oxígeno', () => {
  const a = evaluarLectura({ temperatura: 24, ph: 8, oxigeno: 4 });
  assert.strictEqual(a[0].variable, 'oxigeno');
});

test('las lecturas simuladas normales nunca generan alertas', () => {
  for (let i = 0; i < 200; i++) {
    assert.strictEqual(evaluarLectura(leerSensores(false)).length, 0);
  }
});

test('una anomalía simulada siempre genera al menos una alerta', () => {
  for (let i = 0; i < 200; i++) {
    assert.ok(evaluarLectura(leerSensores(true)).length >= 1);
  }
});
