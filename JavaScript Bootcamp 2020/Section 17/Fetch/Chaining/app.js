fetch('https://swapi.co/api/planets/')
.then((response) => {
    if(!response.ok){
        // console.log('Error, not a 200', response.status);
        throw new Error(`Status Code Error: ${response.status}`);
    }
    return response.json();
})
.then((data) => {
    console.log('Planets');
    const filmURL = data.results[0].films[0];
    return fetch(filmURL);
})
.then((response) => {
    if(!response.ok){
        // console.log('Error, not a 200', response.status);
        throw new Error(`Status Code Error: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    console.log('Film');
    console.log(data.title);
})
.catch((err) => {
    console.log('Something is incorrect');
    console.log(err);
});