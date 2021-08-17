var teo = {
    nombre: 'Mateo',
    apellido: 'Rojas',
    edad: 23,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    drone: true
};


function profesiones(persona) {
    console.log(`${persona.nombre} es:`);
    if (persona.ingeniero) {
        console.log('Ingeniero');
    }
    if (persona.cocinero) {
        console.log('cocinero');
    }
    if (persona.cantante) {
        console.log('cantante');
    }
    if (persona.dj) {
        console.log('dj');
    }
    if (persona.drone) {
        console.log('y Vuela drones');
    }

}

function esMayor(persona) {
    debugger
    if (persona.edad <= 18) {
        console.log(`${persona.nombre} es menor de edad`);

    } else {
        console.log(`${persona.nombre} es mayor de edad`);

    }
}
profesiones(teo);
esMayor(teo);