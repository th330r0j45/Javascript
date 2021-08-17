var teo = {
    nombre: 'Mateo',
    apellido: 'Rojas',
    edad: 23,
    peso: 87
};
var dani = {
    nombre: 'Dani',
    apellido: 'Rojas',
    edad: 16,
    peso: 76
};


console.log(`Al inicio del año ${teo.nombre} pesa ${teo.peso}kg`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANO = 365;
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const bajarDePeso = persona => persona.peso -= INCREMENTO_PESO;

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random();

    if (random < 0.25) {
        //aumentar de peso
        aumentarDePeso(teo);

    } else if (random < 0.5) {
        //adelgazar
        bajarDePeso(teo);
    }
}

console.log(`Al final del año ${teo.nombre} pesa ${teo.peso.toFixed(1)}kg`);