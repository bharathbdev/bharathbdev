let arr = [1, 2, 3]

arr = arr.map(item => item * item);

console.log(arr);

let arr = [0, 1, 1, 2,]




function delay(item) {
    return new Promise(resolve => setTimeout(resolve, 2000 *item));
}

async function delayedLog(item) {
    await delay(item);
    console.log(item);
}

async function process(array) {
    array.forEach(async (item) => {
        await delayedLog(item);
    });
    console.log('Process completed!');
}
process([1, 2, 3, 5]);
