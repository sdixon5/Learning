//resolve and reject are functions

const willGetYouADog = new Promise((resolve, reject) => {
    const rand = Math.random();
    if(rand < 0.5){
        resolve();
    }
    else {
        reject();
    }
})
.then(() => {
    console.log('Yay, we got a dog!');
})
.catch(() => {
    console.log('no dog :(');
})

//if you dont resolve or reject a promise, its status is pending