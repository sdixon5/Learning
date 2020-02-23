const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
    console.log('It worked');
    const data = JSON.parse(this.responseText);
    console.log(data);
});
firstReq.addEventListener('error', () => {
    console.log('Error');
});
firstReq.open('GET', 'https://swapi.co/api/planets/');
firstReq.send();