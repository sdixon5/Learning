const checkStatusAndParse = (response) => {
    if(!response.ok){
        // console.log('Error, not a 200', response.status);
        throw new Error(`Status Code Error: ${response.status}`);
    }
    return response.json();
}

const printPlanets = (data) => {
    console.log('Load 10 planets');
    for(let planet of data.results){
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
}

const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
    return fetch(url);
}

fetchNextPlanets()
.then(checkStatusAndParse)
.then(printPlanets)
.then(fetchNextPlanets)
.then(checkStatusAndParse)
.then(printPlanets)
.catch((err) => {
    console.log('Something is incorrect');
    console.log(err);
});