/*
    A closure is the combination of a function bundled together (enclosed)
    with references to its surrounding state (the lexical environment).
 */


// function counter() {
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     }
// }
// console.log("with new")
// let count =new counter();
// console.log(count());
// console.log(count());
// console.log(count());
//
// let count2 =new counter();
// console.log(count2());
// console.log(count2());
// console.log(count2());
//
// console.log("without new")
//
// let newCount =counter();
// console.log(newCount());
// console.log(newCount());
// console.log(newCount());
//
//
// let newCount2 =counter();
// console.log(newCount2());
// console.log(newCount2());
// console.log(newCount2());
















//
// function publicFunction() {
//     function privateFunction() {
//         console.log('I was called in privated function');
//     }
//     return function () {
//         privateFunction();
//     }
// }
//
// let privateFunction = publicFunction();
// privateFunction();








//real time exmaple
//
// function testPromise(x) {
//     return new Promise((resolve) => {
//         let s = x + 10;
//         resolve(10);
//     });
// }
//
// let sum = testPromise(1);
