function stepone() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Step one completed');
            resolve('Step one completed');
        }, 2000);
    });
}
function steptwo(previousResult) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Step two completed');
            resolve(previousResult + ' -> Step two completed');
        }, 3000);
    });
}
function stepthree(previousResult) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Step three completed');
            resolve(previousResult + ' -> Step three completed');
        }, 1000);
    });
}
stepone()
    .then(steptwo)
    .then(stepthree)
    .then((FinalResult) => {
        console.log("FinalResult:", FinalResult);
    })

    .catch((error) => {
        console.error('Error:', error);
    });