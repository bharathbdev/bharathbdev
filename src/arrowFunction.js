
/**
1. Lexical this and arguments

Arrow functions don't have their own this or arguments binding.
Instead, those identifiers are resolved in the lexical scope like
any other variable. That means that inside an arrow function,
this and arguments refer to the values of this and arguments in the
environment the arrow function is defined in.
 */

// let person1 = {
//     firstname: 'Harshith',
//     lastname: 'Gowda',
//     sayHello: function () {
//         console.log(this);
//         console.log(`Hello ${this.firstname}`);
//     }
// }
// person1.sayHello();
//






// let person2 = {
//     firstname: 'Harshith',
//     lastname: 'Gowda',
//     sayHello: () => {
//         console.log(this)
//         console.log(`Hello ${this.firstname}`);
//         console.log(`Hello ${person2.firstname}`);
//     }
// }
// person2.sayHello();
//




//
//
// let arrowFunctionExample = () => {
//     for (let index = 0; index < arguments.length; index++) {
//         const arg = arguments[index];
//         console.log(arg);
//     }
// }
// arrowFunctionExample(1, 2)








// let normalFunctionExample = function () {
//     for (let index = 0; index < arguments.length; index++) {
//         const arg = arguments[index];
//         console.log(arg);
//     }
// }
// normalFunctionExample(1, 2)



//ES6
var calculateArea = function(height = 50, width = 60) {
    return width * height;
}

console.log(calculateArea()); //300









const arrowFunc = (...args) => args.length;
console.log(arrowFunc(1, 2, 3));
