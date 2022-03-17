// // let fs = require('fs');
//
// // // method 1
// // var myCar1 = new Object();
// // myCar.make = 'Ford';
// // myCar.model = 'Mustang';
// // myCar.year = 1969;
//
// // console.log(myCar1);
//
// // //method 2
// // var myCar2 = {
// //     make: 'Ford',
// //     model: 'Mustang',
// //     year: 1969
// // };
//
// // console.log(myCar2);
//
// // //method 3
// // var myCar3 = {};
// // myCar['make'] = 'Ford';
// // myCar['model'] = 'Mustang';
// // myCar['year'] = 1969;
// // console.log(myCar3);
//
// // //special key names
// // var obj = {};
// // obj['hello world'] = 'hello, world';
// // obj['hello-world'] = 'hello, world';
// // obj.hello_world = 'hello, world';
// // obj['2'] = 'hello, world';
// // console.log(obj);
//
// // //enumarating over objects
//
// // //method 1
// // for (const key in obj) {
// //     console.log(obj[key]);
// // }
//
// // // method 2
// // for (const value of obj) {
// //     console.log(value);
// // }
//
// // //method 3
// // for (const [key, value] of Object.entries(obj)) {
// //     console.log(`${key} : ${value}`)
// // }
//
//
let x = {
    a: 10,
    b: 10
}

let y = {
    a: 10,
    b: 10
}

console.log(x == y);
console.log(x === y);
//
//
// let source = { a: 10, b: 20 };
// let target = {};
// target = Object.create();
// console.log(target === source);











const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

const returnedTarget = Object.assign(target, source);

console.log(target); // { a: 1, b: 3, c: 4 }

console.log(returnedTarget); // { a: 1, b: 3, c: 4 }













const user = {
    name: 'John',
    printInfo: function () {
        console.log(`My name is ${this.name}.`);
    }
};

const admin = Object.create(user);

admin.name = "Nick"; // Remember that "name" is a property set on "admin" but not on "user" object

admin.printInfo(); // My name is Nick



















var user = {
    firstName: "John",
    lastName : "Abraham",
    language : "en",
    get lang() {
        return this.language;
    }
    set lang(lang) {
        this.language = lang;
    }
};
console.log(user.lang); // getter access lang as en
user.lang = 'fr';
console.log(user.lang); // setter used to set lang as fr











const newObject = {};

Object.defineProperty(newObject, 'newProperty', {
    value: 100,
    writable: false
});

console.log(newObject.newProperty); // 100

newObject.newProperty = 200; // It throws an error in strict mode due to writable setting





















var obj = {counter : 0};

// Define getters
Object.defineProperty(obj, "increment", {
    get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
    get : function () {this.counter--;}
});

// Define setters
Object.defineProperty(obj, "add", {
    set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
    set : function (value) {this.counter -= value;}
});

obj.add = 10;
obj.subtract = 5;
console.log(obj.increment); //6
console.log(obj.decrement); //5










You can mark an object non-extensible in 3 ways,

    Object.preventExtensions
Object.seal
Object.freeze
var newObject = {};

Object.preventExtensions(newObject); // Prevent objects are non-extensible
Object.isExtensible(newObject); // false

var sealedObject = Object.seal({}); // Sealed objects are non-extensible
Object.isExtensible(sealedObject); // false

var frozenObject = Object.freeze({}); // Frozen objects are non-extensible
Object.isExtensible(frozenObject); // false










const obj = {
    prop1: function() { return 0 },
    prop2() { return 1 },
    ['prop' + 3]() { return 2 }
}

console.log(obj.prop1());
console.log(obj.prop2());
console.log(obj.prop3());
