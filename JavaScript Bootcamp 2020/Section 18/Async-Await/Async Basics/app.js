async function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw 'X and Y must be numbers!';
    }
    return x + y;
}

//this will work exactly the same!
// function add(x, y) {
//     return new Promise((resolve, reject) => {
//         if (typeof x !== 'number' || typeof y !== 'number'){
//             reject('X and Y must be numbers!');
//         }
//         resolve(x + y);
//     });
// }

add('e', 'r')
.then((val) => {
    console.log('Promise Resolved with: ', val);
})
.catch((err) => {
    console.log('Promised Rejected with: ', err);
});