

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/school';

// Connect to the MongoDB server using Mongoose
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the database');

        // Define a schema and model for the 'students' collection
        const studentSchema = new mongoose.Schema({
            name: String,
            age: Number,
            grade: String
        });
        const Student = mongoose.model('Student', studentSchema);

        // Provide the complete HTTP URL to test this API with the body in Postman
        const baseUrl = `http://localhost:${port}`;
        console.log(`API URL: ${baseUrl}/api/records`);

        // Create a new record
        app.post('/api/records', (req, res) => {
            const record = req.body;
            console.log('Creating a new record:', record)
            Student.create(record)
                .then(() => res.send("Record created successfully"))
                .catch(err => {
                    console.error('Failed to insert record:', err);
                    res.sendStatus(500);
                });
        });

        // Read all records
        app.get('/api/records', (req, res) => {
            Student.find({})
                .then(records => res.send(records))
                .catch(err => {
                    console.error('Failed to retrieve records:', err);
                    res.sendStatus(500);
                });
        });

        // Read a single record
        app.get('/api/records/:id', (req, res) => {
            const recordId = req.params.id;
            Student.findById(recordId)
                .then(record => {
                    if (!record) {
                        res.sendStatus(404);
                    } else {
                        res.send(record);
                    }
                })
                .catch(err => {
                    console.error('Failed to retrieve record:', err);
                    res.sendStatus(500);
                });
        });

        // Update a record
        app.put('/api/records/:id', (req, res) => {
            const recordId = req.params.id;
            const updatedRecord = req.body;
            Student.findByIdAndUpdate(recordId, updatedRecord, { new: true })
                .then(result => res.send(result))
                .catch(err => {
                    console.error('Failed to update record:', err);
                    res.sendStatus(500);
                });
        });

        // Delete a record
        app.delete('/api/records/:id', (req, res) => {
            const recordId = req.params.id;
            Student.findByIdAndDelete(recordId)
                .then(() => res.sendStatus(204))
                .catch(err => {
                    console.error('Failed to delete record:', err);
                    res.sendStatus(500);
                });
        });

        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

        // Ensure the client is closed properly on shutdown
        process.on('SIGINT', () => {
            mongoose.connection.close().then(() => {
                console.log('MongoDB connection closed');
                process.exit(0);
            });
        });
    })
    .catch(err => {
        console.error('Failed to connect to the database:', err);
        process.exit(1);
    });


