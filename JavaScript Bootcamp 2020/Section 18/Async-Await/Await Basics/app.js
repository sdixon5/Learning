async function getPlanets() {
  try {
    const res = await axios.get("https://swapi.co/api/planets/");
    console.log(res.data.results);
  } catch (err) {
    console.log(err);
  }
}

getPlanets();
