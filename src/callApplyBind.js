const numbers = [5, 6, 2, 3, 7];


console.log("max-apply", Math.max.apply(null, numbers));
console.log("min-apply", Math.min.apply(null, numbers));

console.log("min-call", Math.min.call(null, ...numbers));
console.log("max-call", Math.max.call(null, ...numbers));

let bindMax = Math.max.bind(null, ...numbers);
console.log("max-bind", bindMax());



































// Call invokes the function and allows you to pass in arguments one by one.
//     Apply invokes the function and allows you to pass in arguments as an array.
//     Bind returns a new function, allowing you to pass in a this array and any number of arguments.
//     Apply vs. Call vs. Bind Examples
// Call

var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.call(person1, 'Hello'); // Hello Jon Kuperman
say.call(person2, 'Hello'); // Hello Kelly King
//Apply

var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.apply(person1, ['Hello']); // Hello Jon Kuperman
say.apply(person2, ['Hello']); // Hello Kelly King
//Bind

var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);

sayHelloJon(); // Hello Jon Kuperman
sayHelloKelly(); // Hello Kelly King









