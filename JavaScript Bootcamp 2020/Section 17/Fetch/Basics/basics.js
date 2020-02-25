fetch('https://swapi.co/api/planets/')
.then((response) => {
    if(!response.ok){
        // console.log('Error, not a 200', response.status);
        throw new Error(`Status Code Error: ${response.status}`);
    }
    else{
        response.json()
        .then((data) => {
            for(let planet of data.results){
                console.log(planet.name);
            }
        })
    }
})
.catch((err) => {
    console.log('Something is incorrect');
    console.log(err);
});