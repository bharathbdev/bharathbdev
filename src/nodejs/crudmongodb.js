const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017';
// MongoDB database name
const dbName = 'school';

// Create a new MongoDB client
const MongoClient = mongodb.MongoClient;
const client = new MongoClient(mongoURL, { useUnifiedTopology: true });

client.connect()
    .then(() => {
        console.log('Connected to the database');

        // Specify the database
        const db = client.db(dbName);
        // Specify the collection
        const collection = db.collection('students');

        // Provide the complete HTTP URL to test this API with the body in Postman
        const baseUrl = `http://localhost:${port}`;
        console.log(`API URL: ${baseUrl}/api/records`);

        // Create a new record
        app.post('/api/records', (req, res) => {
            const record = req.body;
            console.log('Creating a new record:', record)
            collection.insertOne(record)
                .then(result => res.send("Record created successfully"))
                .catch(err => {
                    console.error('Failed to insert record:', err);
                    res.sendStatus(500);
                });
        });

        // Read all records
        app.get('/api/records', (req, res) => {
            collection.find({}).toArray()
                .then(records => res.send(records))
                .catch(err => {
                    console.error('Failed to retrieve records:', err);
                    res.sendStatus(500);
                });
        });

        // Read a single record
        app.get('/api/records/:id', (req, res) => {
            const recordId = new mongodb.ObjectID(req.params.id);
            collection.findOne({ _id: recordId })
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
            const recordId = new mongodb.ObjectId(req.params.id);
            const updatedRecord = req.body;
            collection.findOneAndUpdate(
                { _id: recordId },
                { $set: updatedRecord },
                { returnOriginal: false }
            )
                .then(result => res.send(result.value))
                .catch(err => {
                    console.error('Failed to update record:', err);
                    res.sendStatus(500);
                });
        });

        // Delete a record
        app.delete('/api/records/:id', (req, res) => {
            const recordId = new mongodb.ObjectId(req.params.id);
            collection.deleteOne({ _id: recordId })
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
            client.close().then(() => {
                console.log('MongoDB client closed');
                process.exit(0);
            });
        });
    })
    .catch(err => {
        console.error('Failed to connect to the database:', err);
        process.exit(1);
    });