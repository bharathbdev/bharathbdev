// const mySet1 = new Set([22, 2, 3, 4]);
// mySet1.add(44)
// console.log(mySet1.size);
// console.log([...mySet1].length);
//
// for (const item of mySet1) {
//     console.log(item);
// }
//
// for (const [key, value] of mySet1.entries()) {
//     console.log(key,value);
// }





























const kvArray = [['key1', 'value1'], ['key2', 'value2']];

// Use the regular Map constructor to transform a 2D key-value Array into a map
const myMap = new Map(kvArray);

myMap.set('key3', 'zero');
myMap.set('key4', 'one');
console.log(myMap.size);
console.log([...myMap].length);
for (const [key, value] of myMap) {
    console.log(`${key} = ${value}`);
}


for (const [key, value] of myMap.entries()) {
    console.log(`${key} = ${value}`);
}




