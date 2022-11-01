async function testAsync() {
    return 10;
}

(async function () {
    let value = await testAsync();
    console.log(value);
})();









// botha re same


async function func() {
    return 10;
}
console.log(func());



function func() {
    return Promise.resolve(10)
}








//both are same

async function func() {
    await 10;
}
console.log(func());




function func() {
    return Promise.resolve(10).then(() => undefined)
}





async function foo(name) {
    console.log(name, "start");
    await console.log(name, "middle");
    console.log(name, "end");
}

foo("First");
foo("Second");
