const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id'

// const pikachuUrl = `${API_URL}${POKEMON_URL.replace(':id', 25)}`

const options = { crossDomain: true }

const onResponse = function(pokemon) {
    console.log('Pikachu: Pika pikaaa!')
    console.log(`Pokedex: ${pokemon.name} es un pokemon de tipo ${pokemon.types[0].type.name}, mide ${pokemon.height*10} centimetros, su habilidad primaria es ${pokemon.abilities[0].ability.name}`)
}

function obtenerPokemon(id) {

    return new Promise((resolve, reject) => {
        const url = `${API_URL}${POKEMON_URL.replace(':id', id)}`
        $.get(url, options, function(data) { resolve(data) })
            .fail(() => { reject(id) })
    })


}

function onError(id) {
    console.log('Error');
}

obtenerPokemon(0)
    .then(function(pokemon) {
        console.log(`El pkemon 1 es `);
    })
    .catch(onError);