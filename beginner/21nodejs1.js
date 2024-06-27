


// node - node
// nvm node version Manager
// npm  node package Manager
//console.log(__dirname);   




var path = require("path");  
// Normalization  
console.log('normalization vbzvbxs: ' + path.normalize('/sssit/javatpoint//node/newfolder/tab/../..'));  
// Join  
console.log('joint path : ' + path.join('/sssit', 'javatpoint', 'node/newfolder', 'tab', '..'));  
// Resolve  
console.log('resolve : ' + path.resolve('path_example.js'));  
// Extension   
console.log('ext name: ' + path.extname('path_example.js'));  


const querystring = require('querystring');  
const obj1=querystring.parse('name=sonoo&company=javatpoint');  
console.log(obj1);  








var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'