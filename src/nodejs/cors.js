const http = require('http');

const server = http.createServer((req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST'); // Allow only specified HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization'); // Allow only specified headers

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // Handle other requests
    // Your route handling code goes here
});

// Start the server
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



app.use(cors({
    origin: 'http://example.com', // Allow requests from a specific origin
    methods: 'GET,POST', // Allow only specified HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Allow only specified headers
}));





The purpose of the preflight request is to ensure that the server explicitly allows cross-origin requests
that go beyond the basic simple requests. It adds an extra layer of security by enforcing server-side control over
which cross-origin requests are permitted, protecting sensitive data from unauthorized access or potential abuse.
