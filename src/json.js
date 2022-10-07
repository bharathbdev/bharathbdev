let data = '{"x":"10"}'

console.log("x", data.x);
console.log("x", JSON.parse(data).x);
console.log("x", JSON.stringify(JSON.parse(data)))
