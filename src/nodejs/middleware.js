const http = require('http');

// Custom Middleware function
const customMiddleware = (req, res, next) => {
    try {
        // Perform some actions before the route handler
        console.log('Custom middleware is executed');

        // Modify the request or response objects if needed
        req.customProperty = 'Custom Value';

        // Call the next middleware function
        next();
    } catch (err) {
        // Handle the error
        console.error('Custom middleware error:', err);

        // Send an error response
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
    }
};

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Call the custom middleware
    customMiddleware(req, res, () => {
        // Define your route handlers here
        if (req.url === '/') {
            // Access the modified request object
            console.log(req.customProperty);

            // Send a response
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Hello, World!');
        } else {
            // Handle other routes or send a 404 response
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    });
});

// Start the server
server.listen(3000, () => {
    console.log('Server started on port 3000');
});
