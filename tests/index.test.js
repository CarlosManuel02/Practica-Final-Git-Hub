const obtenerSaludo  = require('../src/index');

test('hola_mundo function should return "Hola Mundo"', () => {
    expect(obtenerSaludo()).toBe('Practica Final!, Carlos Manuel Cedeño Barrera 2022-0018!');
  });