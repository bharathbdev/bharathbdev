
    const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// PostgreSQL connection configuration
const pool = new Pool({
    user: 'your-username',
    host: 'localhost',
    database: 'school',
    password: 'your-password',
    port: 5432
});

// Connect to the PostgreSQL server
pool.connect()
    .then(client => {
        console.log('Connected to the database');
        client.release();

        // Provide the complete HTTP URL to test this API with the body in Postman
        const baseUrl = `http://localhost:${port}`;
        console.log(`API URL: ${baseUrl}/api/records`);

        // Create a new record
        app.post('/api/records', async (req, res) => {
            const { name, age, grade } = req.body;
            try {
                const result = await pool.query(
                    'INSERT INTO students (name, age, grade) VALUES ($1, $2, $3) RETURNING *',
                    [name, age, grade]
                );
                res.send("Record created successfully");
            } catch (err) {
                console.error('Failed to insert record:', err);
                res.sendStatus(500);
            }
        });

        // Read all records
        app.get('/api/records', async (req, res) => {
            try {
                const result = await pool.query('SELECT * FROM students');
                res.send(result.rows);
            } catch (err) {
                console.error('Failed to retrieve records:', err);
                res.sendStatus(500);
            }
        });

        // Read a single record
        app.get('/api/records/:id', async (req, res) => {
            const { id } = req.params;
            try {
                const result = await pool.query('SELECT * FROM students WHERE id = $1', [id]);
                if (result.rows.length === 0) {
                    res.sendStatus(404);
                } else {
                    res.send(result.rows[0]);
                }
            } catch (err) {
                console.error('Failed to retrieve record:', err);
                res.sendStatus(500);
            }
        });

        // Update a record
        app.put('/api/records/:id', async (req, res) => {
            const { id } = req.params;
            const { name, age, grade } = req.body;
            try {
                const result = await pool.query(
                    'UPDATE students SET name = $1, age = $2, grade = $3 WHERE id = $4 RETURNING *',
                    [name, age, grade, id]
                );
                res.send(result.rows[0]);
            } catch (err) {
                console.error('Failed to update record:', err);
                res.sendStatus(500);
            }
        });

        // Delete a record
        app.delete('/api/records/:id', async (req, res) => {
            const { id } = req.params;
            try {
                await pool.query('DELETE FROM students WHERE id = $1', [id]);
                res.sendStatus(204);
            } catch (err) {
                console.error('Failed to delete record:', err);
                res.sendStatus(500);
            }
        });

        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

        // Ensure the client is closed properly on shutdown
        process.on('SIGINT', async () => {
            await pool.end();
            console.log('PostgreSQL client closed');
            process.exit(0);
        });
    })
    .catch(err => {
        console.error('Failed to connect to the database:', err);
        process.exit(1);
    });












