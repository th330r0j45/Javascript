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

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_ANO = 365;
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const bajarDePeso = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4
const META = teo.peso - 0.3;
var dias = 0;
while (teo.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(teo)
            //aumentarDePeso
    }
    if (realizaDeporte()) {
        //adelgazar
        bajarDePeso(teo);
    }
    dias += 1;
}

console.log(`Pasaron ${dias} días hasta que  ${teo.nombre} adelgazo ${teo.peso.toFixed(1)}kg`);