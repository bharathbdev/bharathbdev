const express = require('express');
const app = express();

// Custom Middleware function
const customMiddleware = (req, res, next) => {
    // Perform some actions before the route handler
    console.log('Custom middleware is executed');

    // Modify the request or response objects if needed
    req.customProperty = 'Custom Value';

    // Call the next middleware function
    next();
};

// Middleware applied to all routes
app.use(customMiddleware);

// Route with custom middleware
app.get('/protected', customMiddleware, (req, res) => {
    // Access the modified request object
    console.log(req.customProperty);

    // Send a response
    res.send('Protected Route');
});

// Route without custom middleware
app.get('/public', (req, res) => {
    res.send('Public Route');
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
