function firstFunction(callback) {
    setTimeout(() => {
        console.log('First function done');
        callback();
    }, 1000);
}

function secondFunction(callback) {
    setTimeout(() => {
        console.log('Second function done');
        callback();
    }, 1000);
}

function thirdFunction(callback) {
    setTimeout(() => {
        console.log('Third function done');
        callback();
    }, 1000);
}

// Callback hell
firstFunction(() => {
    secondFunction(() => {
        thirdFunction(() => {
            console.log('All functions done');
        });
    });
});

































function firstFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('First function done');
            resolve();
        }, 1000);
    });
}

function secondFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Second function done');
            resolve();
        }, 1000);
    });
}

function thirdFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Third function done');
            resolve();
        }, 1000);
    });
}

// Promise chaining
firstFunction()
    .then(secondFunction)
    .then(thirdFunction)
    .then(() => {
        console.log('All functions done');
    });

































    function firstFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('First function done');
            resolve();
        }, 1000);
    });
}

function secondFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Second function done');
            resolve();
        }, 1000);
    });
}

function thirdFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Third function done');
            resolve();
        }, 1000);
    });
}

// Using async/await
async function runFunctions() {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
    console.log('All functions done');
}

runFunctions();
