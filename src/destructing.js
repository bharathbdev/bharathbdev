const {a: x = 10, b: y = 20} = {a: 30};

console.log(x);
console.log(y);





const props = [
    { id: 1, name: 'John'},
    { id: 2, name: 'Jack'},
    { id: 3, name: 'Tom'}
];

const [,, { name }] = props;
console.log(name);
