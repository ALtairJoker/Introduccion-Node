const fs = require('fs')

const { registrarCitas, leerCitas } = require('./operaciones.js');

const [modo, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2);

modo === 'registrar' ? registrarCitas(nombre, edad, tipo, color, enfermedad) : modo === 'leer' ? leerCitas() : console.log('Ese modo no existe :(')

