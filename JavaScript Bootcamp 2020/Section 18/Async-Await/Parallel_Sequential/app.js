//the following calls to the pokemon api are happening in sequence.
//poke1 has to be returned before poke 2 runs, then poke 2 b4 poke 3, etc.
//we don't need them to be sequential because the seconed request is not dependent on the first, as too with the third on the second

//SEQUENTIAL REQUESTS!
/*async function get3Pokemon() {
    const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');

    console.log(poke1.data.name);
    console.log(poke2.data.name);
    console.log(poke3.data.name);
}*/

//PARALLEL REQUESTS!
async function get3Pokemon() {
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');

    const poke1 = await prom1;
    const poke2 = await prom2;
    const poke3 = await prom3;

    console.log(poke1.data.name);
    console.log(poke2.data.name);
    console.log(poke3.data.name);
}

//get3Pokemon();

function changeBodyColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
}

//sequential
/*async function lightShow(){
    await changeBodyColor('teal', 2000);
    await changeBodyColor('pink', 2000);
    await changeBodyColor('indigo', 2000);
    await changeBodyColor('violet', 2000);
}*/

//parallel
async function lightShow(){
    const p1 = changeBodyColor('teal', 2000);
    const p2 = changeBodyColor('pink', 2000);
    const p3 = changeBodyColor('indigo', 2000);
    const p4 = changeBodyColor('violet', 2000);

    await p1;
    await p2;
    await p3;
    await p4;
}

lightShow();


