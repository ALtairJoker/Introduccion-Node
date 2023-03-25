const fs = require('fs');


const registrarCitas = (nombre, edad, tipo, color, enfermedad) => {
    if(nombre, edad, tipo, color, enfermedad){
        const templateCitas = {
            nombre,
            edad,
            tipo,
            color,
            enfermedad
        }
        const citas = JSON.parse(fs.readFileSync('./citas.json'));
        citas.push(templateCitas);
        fs.writeFileSync('./citas.json', JSON.stringify(citas));
        console.log('Se ha registrado correctamente'); 
    } 
    else{
        console.log('Faltan parametros');
    }
}

const leerCitas = () => {
    const citas = JSON.parse(fs.readFileSync('./citas.json'));
    console.log(citas);
}

module.exports = {registrarCitas, leerCitas};