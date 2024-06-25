var http = require("http");  


http.createServer(function (request, response) {  
    // Send the HTTP header   
    // HTTP Status: 200 : OK  
    // Content Type: text/plain  
    response.writeHead(200, {'Content-Type': 'text/plain'});  
    // Send the response body as "Hello World"
    
    // let username = request.username
      //password

      //db connect
      //users find
      // user === paswroxd







    response.end('wormng\n');  
 }).listen(8081);  
 // Console will print the message  
 console.log('Server running at http://127.0.0.1:8081/'); 


// // // // node - node
// // // // nvm node version Manager
// // // // npm  node package Manager
// // // //console.log(__dirname);   

// // // var fs = require("fs");  
// // // var data = '';  
// // // // Create a readable stream  
// // // var readerStream = fs.createReadStream('./2.js');  
// // // // Set the encoding to be utf8.   
// // // readerStream.setEncoding('UTF8');  
// // // // Handle stream events --> data, end, and error  
// // // readerStream.on('data', function(chunk) {  
// // //    data += chunk;  
// // // });  
// // // readerStream.on('end',function(){  
// // //    console.log(data);  
// // // });  
// // // readerStream.on('error', function(err){  
// // //    console.log(err.stack);  
// // // });  
// // // console.log("Program Ended");  








// // // var fs = require("fs");  
// // // var data = 'A Solution of all Technology';  
// // // // Create a writable stream  
// // // var writerStream = fs.createWriteStream('./2.js');  
// // // // Write the data to stream with encoding to be utf8  
// // // writerStream.write(data,'UTF8');  
// // // // Mark the end of file  
// // // writerStream.end();  
// // // // Handle stream events --> finish, and error  
// // // writerStream.on('finish', function() {  
// // //     console.log("Write completed.");  
// // // });  
// // // writerStream.on('error', function(err){  
// // //    console.log(err.stack);  
// // // });  
// // // console.log("Program Ended");  
// // // // // Importing events 
// // // // const EventEmitter = require('events'); 
   
// // // // // Initializing event emitter instances  
// // // // var eventEmitter = new EventEmitter(); 
  
// // // // // Registering to myEvent  
// // // // eventEmitter.on('myarraowgwjqgdj', (msg) => { 
// // // //    console.log(msg); 
// // // // }); 
  
// // // // // Triggering myEvent 
// // // // eventEmitter.emit('myarraowgwjqgdj', "szhncszcnszmbcmzsbmcmzcmnzxmnc");
// // // // eventEmitter.emit('myarraowgwjqgdj', "sFHFHYH^^^^^^nc");


// // // var path = require("path");  
// // // // Normalization  
// // // console.log('normalization vbzvbxs: ' + path.normalize('/sssit/javatpoint//node/newfolder/tab/../..'));  
// // // // Join  
// // // console.log('joint path : ' + path.join('/sssit', 'javatpoint', 'node/newfolder', 'tab', '..'));  
// // // // Resolve  
// // // console.log('resolve : ' + path.resolve('path_example.js'));  
// // // // Extension   
// // // console.log('ext name: ' + path.extname('path_example.js'));  


// // const querystring = require('querystring');  
// // const obj1=querystring.parse('name=sonoo&company=javatpoint');  
// // console.log(obj1);  


// // var fs = require("fs");  
  
// // fs.readFile('input.txt', function (err, data) {  
// //     if (err) return console.error(err);  
// //     console.log(data.toString());  
// // });  
// // console.log("Program Ended"); 







// var http = require('http');  
// var fs = require('fs');  
// var url = require('url');  
  
// // Create a server  
// http.createServer( function (request, response) {    
//    // Parse the request containing file name  
//    var pathname = url.parse(request.url).pathname;  
     
//    // Print the name of the file for which request is made.  
//    console.log("Request for " + pathname + " received.");  
     
//    // Read the requested file content from file system  
//    fs.readFile(pathname.substr(1), function (err, data) {  
//       if (err) {  
//          console.log(err);  
//          // HTTP Status: 404 : NOT FOUND  
//          // Content Type: text/plain  
//          response.writeHead(404, {'Content-Type': 'text/html'});  
//       }else{      
//          //Page found       
//          // HTTP Status: 200 : OK  
//          // Content Type: text/plain  
//          response.writeHead(200, {'Content-Type': 'text/html'});      
           
//          // Write the content of the file to response body  
//          response.write(data.toString());         
//       }  
//       // Send the response body   
//       response.end();  
//    });     
// }).listen(8081);  
// // Console will print the message  
// console.log('Server running at http://127.0.0.1:8081/');  



// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'








