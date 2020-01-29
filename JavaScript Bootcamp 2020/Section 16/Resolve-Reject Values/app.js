const fakeRequest = url => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      const pages = {
        "/users": [
          { id: 1, username: "Batman" },
          { id: 5, username: "Ironman" }
        ],
        "/about": "This is the about page"
      };
      const data = pages[url];
      if (data) {
        resolve({status: 200, data});
      }
      else {
        reject({status: 404});
      }
    }, 1000);
  });
};

fakeRequest("/about")
  .then(res => {
    console.log("Status Code: ", res.status);
    console.log("Status Code: ", res.data);
    console.log("Request worked");
  })
  .catch(res => {
    console.log(res.status);
    console.log("Request failed");
  });
