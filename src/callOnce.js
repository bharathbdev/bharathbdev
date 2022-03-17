
// example-1
// function once() {
//     let executed = false;
//     return function () {
//         if (!executed) {
//             executed = true;
//             console.log('do something here');
//         }
//     }
// }
//
// let executeOnce = once();
// executeOnce();
// executeOnce();
// executeOnce();
// executeOnce();

// example-2
// function callOnce(fn, context) {
//     let result;
//     console.log("outside this", this)
//     return function () {
//         if (fn) {
//             console.log("inside this", this)
//             result = fn.call(context || this, arguments);
//             fn = null;
//         }
//         return result;
//     }
// }
//
// function sayHello() {
//     console.log("outside this in sayhello ", this)
//     console.log('hello world');
// }
//
// let callsOnlyOnce = callOnce(sayHello)
// callsOnlyOnce();
// callsOnlyOnce();
