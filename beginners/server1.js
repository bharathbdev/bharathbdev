
const http = require('http');


const hostname = '127.0.0.1';
const port = 3000;



// Create the server
const server = http.createServer(
    
    
    (req, res) => {
    // Check if the request method is GET and the URL is the root


    if (req.method === 'GET' && req.url === '/') {
        // Set the response header to indicate JSON content
       // res.setHeader('Content-Type', 'application/json');

        // Define the object with key-value pair

        //gorodb and gete
        let person = {
            name:"bharatah",
            age:24,
            adress: "bansgegjegjej"
        }
        // Write the response with status code 200 and the JSON string
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(person));
    } else {
        // Handle other routes or methods with a 404 response
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found iam not craeteing g');
    }



});

// Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
