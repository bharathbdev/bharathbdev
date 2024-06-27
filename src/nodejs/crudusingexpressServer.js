const express = require('express');


const app = express();
const port = 3000;



        // Read all records
        app.get('/api/records', (req, res) => {
     res.send("hellow world")
             
        });

        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

