const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
    return axios.get(url);
}

const printPlanets = ({data}) => {
    for(let planet of data.results){
        console.log(planet.name);
    }
    return fetchNextPlanets(data.next);
}

fetchNextPlanets()
.then(printPlanets)
.then(printPlanets)
.then(printPlanets)
.then(printPlanets)
.catch((err) => {
    console.log(err);
});
