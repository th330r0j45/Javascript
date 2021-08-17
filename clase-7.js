var teo = {
    nombre: 'Mateo',
    apellido: 'Rojas',
    edad: 23
};
var dario = {
    nombre: 'Dario',
    apellido: 'Sunshi',
    edad: 27
};


function mayus({ nombre }) {
    debugger
    // var nombre = persona.nombre
    console.log(nombre.toUpperCase());
}

mayus(teo);
mayus(dario);

function nombreYedad({ nombre, edad }) {
    console.log('Hola, me llamo ' + nombre + ' Y tengo ' + edad + ' años');
}
nombreYedad(teo);
nombreYedad(dario);