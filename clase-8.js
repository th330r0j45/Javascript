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


function mayus(persona) {
    debugger
    // var nombre = persona.nombre
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

mayus(teo);
mayus(dario);

function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    };
}
cumpleanos(teo);
cumpleanos(dario);