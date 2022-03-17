const path = require('path');

console.log(path.normalize(`${__dirname}/..`))
console.log(path.parse(__dirname));
console.log(path.join(__dirname, 'child_process'));
