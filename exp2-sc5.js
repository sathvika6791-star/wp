const simplePromise = new Promise((resolve) => {
    resolve('Mini meeee!');
});

simplePromise.then((message) => {
    console.log(message);
});
//asyn,await
//with async/await
async function run() {
    console.log('I am');
    const message = await tenSeconds();
    console.log(message);
    console.log('YES!');
}
run();
function tenSeconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Mini meeee!');
        }, 10000);
    });
}