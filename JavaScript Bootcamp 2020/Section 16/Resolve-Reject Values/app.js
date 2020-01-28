const fakeRequest = url => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.3) {
        reject({status: 404});
      } else {
        const pages = {
            '/users': [
                {id: 1, username: 'Batman'},
                {id: 5, username: 'Ironman'}
            ],
            '/about': 'This is the about page'
        };
        const data = pages[url];
        resolve({status: 200, data});
      }
    }, 3000);
  });
};

fakeRequest('/users')
  .then(() => {
    console.log("Request worked");
  })
  .catch((res) => {
    console.log(res.status);
    console.log("Request failed");
  });
