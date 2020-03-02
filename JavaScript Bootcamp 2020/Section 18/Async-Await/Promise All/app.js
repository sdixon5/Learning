//SEQUENTIAL REQUESTS!
async function get3PokemonSequential() {
    const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');

    console.log(poke1.data.name);
    console.log(poke2.data.name);
    console.log(poke3.data.name);
}

//PARALLEL REQUESTS!
async function get3PokemonParallel() {
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');

    const results = await Promise.all([prom1, prom2, prom3]);

    printPokemon(results);
}

function printPokemon(results){
    for(let res of results){
        console.log(res.data.name);
    }
}

//Parallel Requests Original
// async function get3PokemonParallel() {
//     const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');

//     const poke1 = await prom1;
//     const poke2 = await prom2;
//     const poke3 = await prom3;

//     console.log(poke1.data.name);
//     console.log(poke2.data.name);
//     console.log(poke3.data.name);
// }

get3PokemonParallel();