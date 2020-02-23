const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
    console.log('It worked');
    const data = JSON.parse(this.responseText);
    const filmURL = data.results[0].films[0];
    const filmReq = new XMLHttpRequest();
    filmReq.addEventListener('load', function(){
        console.log('film req');
        const filmData = JSON.parse(this.responseText);
        const title = filmData.title;
        console.log(title);
    });
    filmReq.addEventListener('error', () => {
        console.log('film req error');
    });
    filmReq.open('GET', filmURL);
    filmReq.send();
});
firstReq.addEventListener('error', (e) => {
    console.log('Error', e);
});
firstReq.open('GET', 'https://swapi.co/api/planets/');
firstReq.send();