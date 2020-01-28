const makeDogPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const rand = Math.random();
        if(rand < 0.5){
            resolve();
        }
        else {
            reject();
        }
        }, 5000);
    });
};

makeDogPromise()
    .then(() => {
        console.log('Yay, we got a dog!');
    })
    .catch(() => {
        console.log('no dog :(');
    });

// const willGetYouADog = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const rand = Math.random();
//         if(rand < 0.5){
//             resolve();
//         }
//         else {
//             reject();
//         }
//     }, 5000);
// })
// .then(() => {
//     console.log('Yay, we got a dog!');
// })
// .catch(() => {
//     console.log('no dog :(');
// })