const fakeRequest = url => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      const pages = {
        "/users": [
          { id: 1, username: "Batman" },
          { id: 5, username: "Ironman" }
        ],
        "/users/1": {
          id: 1,
          username: "Batman",
          upvotes: 360,
          city: "Gotham",
          topPostId: 45321
        },
        "/users/5": {
          id: 5,
          username: "Ironman",
          upvotes: 3000,
          city: "New York City"
        },
        "/posts/45321": {
          id: 45321,
          title: "Detective Work"
        },
        "/about": "This is the about page"
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 1000);
  });
};

fakeRequest("/users")
  .then(res => {
    const id = res.data[0].id;
    return fakeRequest(`/users/${id}`);
  })
  .then(res => {
    const postId = res.data.topPostId;
    return fakeRequest(`/posts/${postId}`);
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log("Oh no", err);
  });
