const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017';
// MongoDB database name
const dbName = 'your-database-name';

// Create a new MongoDB client
const MongoClient = mongodb.MongoClient;
const client = new MongoClient(mongoURL, { useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect(err => {
    if (err) {
        console.error('Failed to connect to the database:', err);
        return;
    }
    console.log('Connected to the database');

    // Specify the database
    const db = client.db(dbName);
    // Specify the collection
    const collection = db.collection('your-collection-name');

    // Create a new record
    app.post('/api/records', (req, res) => {
        const record = req.body;
        collection.insertOne(record, (err, result) => {
            if (err) {
                console.error('Failed to insert record:', err);
                res.sendStatus(500);
                return;
            }
            res.send(result.ops[0]);
        });
    });

    // Read all records
    app.get('/api/records', (req, res) => {
        collection.find({}).toArray((err, records) => {
            if (err) {
                console.error('Failed to retrieve records:', err);
                res.sendStatus(500);
                return;
            }
            res.send(records);
        });
    });

    // Read a single record
    app.get('/api/records/:id', (req, res) => {
        const recordId = new mongodb.ObjectID(req.params.id);
        collection.findOne({ _id: recordId }, (err, record) => {
            if (err) {
                console.error('Failed to retrieve record:', err);
                res.sendStatus(500);
                return;
            }
            if (!record) {
                res.sendStatus(404);
                return;
            }
            res.send(record);
        });
    });

    // Update a record
    app.put('/api/records/:id', (req, res) => {
        const recordId = new mongodb.ObjectID(req.params.id);
        const updatedRecord = req.body;
        collection.findOneAndUpdate(
            { _id: recordId },
            { $set: updatedRecord },
            { returnOriginal: false },
            (err, result) => {
                if (err) {
                    console.error('Failed to update record:', err);
                    res.sendStatus(500);
                    return;
                }
                res.send(result.value);
            }
        );
    });

    // Delete a record
    app.delete('/api/records/:id', (req, res) => {
        const recordId = new mongodb.ObjectID(req.params.id);
        collection.deleteOne({ _id: recordId }, err => {
            if (err) {
                console.error('Failed to delete record:', err);
                res.sendStatus(500);
                return
