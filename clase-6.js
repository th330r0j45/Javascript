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
    console.log(nombre.toUpperCase());
}
mayus(teo);
mayus(dario);