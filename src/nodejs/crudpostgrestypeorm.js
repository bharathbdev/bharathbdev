





import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    grade: string;
}







import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import bodyParser from 'body-parser';
import { Student } from './entity/Student';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Connect to the PostgreSQL server using TypeORM
createConnection().then(connection => {
    console.log('Connected to the database');

    const studentRepository = connection.getRepository(Student);

    // Provide the complete HTTP URL to test this API with the body in Postman
    const baseUrl = `http://localhost:${port}`;
    console.log(`API URL: ${baseUrl}/api/records`);

    // Create a new record
    app.post('/api/records', async (req, res) => {
        const { name, age, grade } = req.body;
        const student = new Student();
        student.name = name;
        student.age = age;
        student.grade = grade;

        try {
            await studentRepository.save(student);
            res.send('Record created successfully');
        } catch (err) {
            console.error('Failed to insert record:', err);
            res.sendStatus(500);
        }
    });

    // Read all records
    app.get('/api/records', async (req, res) => {
        try {
            const students = await studentRepository.find();
            res.send(students);
        } catch (err) {
            console.error('Failed to retrieve records:', err);
            res.sendStatus(500);
        }
    });

    // Read a single record
    app.get('/api/records/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const student = await studentRepository.findOne(id);
            if (!student) {
                res.sendStatus(404);
            } else {
                res.send(student);
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
            let student = await studentRepository.findOne(id);
            if (!student) {
                res.sendStatus(404);
                return;
            }

            student.name = name;
            student.age = age;
            student.grade = grade;

            student = await studentRepository.save(student);
            res.send(student);
        } catch (err) {
            console.error('Failed to update record:', err);
            res.sendStatus(500);
        }
    });

    // Delete a record
    app.delete('/api/records/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const result = await studentRepository.delete(id);
            if (result.affected === 0) {
                res.sendStatus(404);
            } else {
                res.sendStatus(204);
            }
        } catch (err) {
            console.error('Failed to delete record:', err);
            res.sendStatus(500);
        }
    });

    // Start the server
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

    // Ensure the connection is closed properly on shutdown
    process.on('SIGINT', async () => {
        await connection.close();
        console.log('PostgreSQL client closed');
        process.exit(0);
    });

}).catch(err => {
    console.error('Failed to connect to the database:', err);
    process.exit(1);
});
