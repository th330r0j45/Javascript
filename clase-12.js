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
var dani = {
    nombre: 'Dani',
    apellido: 'Rojas',
    edad: 16
};



const MAYORIA_DE_EDAD = 18;
// const esMayorDeEdad = (persona) => {
//     return persona.edad >= MAYORIA_DE_EDAD;
// }
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

function esMayor(persona) {
    if (persona.edad <= 18) {
        console.log(`${persona.nombre} es menor de edad`);

    } else {
        console.log(`${persona.nombre} es mayor de edad`);

    }
}
// profesiones(teo);
// esMayor(teo);

function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} NO TIENES PERMISOS`);
    } else {
        console.log(`${persona.nombre} BIENVENIDO`);

    }
}