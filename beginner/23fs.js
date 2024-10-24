const fs = require('fs');


const store = fs.readFileSync('./Sangeetha/data.txt', 'utf8');
console.log(store)









fs.readFile('./Sangeeha/data.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("i goite rhkekhjcdedmcmdwcmb")
    }
    console.log(data)

});






const data = fs.createReadStream("./new journey/fourth.txt", "utf8")
data.on("data", (chunk) => {

    console.log(chunk)


})

data.on("error", (error) => {

    console.log(error)

})

data.on("end", () => {
    console.log("finished")
})




const fs = require('fs');

try {
    fs.writeFileSync('./new journey/fifth.txt', 'This is the content for the fifth file.\nThis is the second line.');
    console.log('File written successfully');
} catch (error) {
    console.error(error);
}



const fs = require('fs');

fs.writeFile('./new journey/fifth.txt', 'This is the content for the fifth file.\nThis is the second line.', 'utf8', (error,data) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log('File written successfully');
});



const fs = require('fs');

// Create a write stream
const writeStream = fs.createWriteStream("./new journey/fifth.txt", "utf8");

// Write data to the file
writeStream.write("This is the first line.\n");


// Handle the 'finish' event
writeStream.on("finish", () => {
    console.log("Write finished");
});

// Handle the 'error' event
writeStream.on("error", (error) => {
    console.log(error);
});

// End the write stream
writeStream.end();














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