/**
 * var is function scope and let is block scope
 * hoisting = var show undefined and let through reference error
 * can't redclare let variables, but var variables can be redeclared
 * var variables are attached to global abject
 */
//
//
// console.log("x", x);
// let x = 10;

// var funcs = [];
//  //let's create 3 functions
// for (var i = 0; i < 3; i++) {
//     // and store them in funcs
//     funcs[i] = function () {
//         // each should log its value.
//         console.log("My value: " + i);
//     }
// }
//
// for (var j = 0; j < 3; j++) {
//     // and now let's run each one to see
//     funcs[j]();
// }
//My Value : 3 for all the functions







// let example

// var funcs = [];
//  //let's create 3 functions
// for (let i = 0; i < 3; i++) {
//     // and store them in funcs
//     funcs[i] = function () {
//         // each should log its value.
//         console.log("My value: " + i);
//     }
// }
//
// for (var j = 0; j < 3; j++) {
//     // and now let's run each one to see
//     funcs[j]();
// }







//
// let ex = [1, 2, 3]
// for (let index = 0; index < 3; index++) {
//     setTimeout(function () {
//         console.log("inside set timeout", index, ex[index]);
//     }, 1000);
// }






// function userDetails(username) {
//     if(username) {
//         console.log(salary); // undefined due to hoisting
//         console.log(age); // ReferenceError: Cannot access 'age' before initialization
//         let age = 30;
//         var salary = 10000;
//     }
//     console.log(salary); //10000 (accessible to due function scope)
//     console.log(age); //error: age is not defined(due to block scope)
// }
// userDetails('John');


// function somemethod() {
//     console.log(counter1); // undefined
//     console.log(counter2); // ReferenceError
//     var counter1 = 1;
//     let counter2 = 2;
// }
