const fakeRequest = url => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.3) {
        reject();
      } else {
        resolve();
      }
    }, 3000);
  });
};

fakeRequest()
  .then(() => {
    console.log("Request worked");
  })
  .catch(() => {
    console.log("Request failed");
  });
