// 

// 1.insert

db.collection.insertOne({name : "sangeetha",age : 30, address : "bangalore"})

db.collection.insertMany({name : "sangeetha",age : 30, address : "bangalore"},
{name : "bharath",age : 20, address :"kunigal"},
{name : "bharath",age : 20, address :"kunigal"}
)

//2.read

db.collection.find({})
db.collection.findMany({age : {$gt : 30}})
db.collection.findOne({name:"Sangeetha"})

//3.update

db.collection.updateOne(
    {name:"Geetha"},
    {$set : {age:45}}
)
db.collection.updateMany(
  { name: "bod" },
  { $set: { age: "1527" } }
);
db.collection.deleteOne({name:"Sangeetha"})
db.collection.deleteMany({age:{$lt:30}})

















// 1. Create

// -- Insert a single row
// INSERT INTO users (name, age, city) VALUES ('Alice', 25, 'New York');

// -- Insert multiple rows
// INSERT INTO users (name, age, city) VALUES ('Bob', 30, 'San Francisco'), ('Charlie', 35, 'Los Angeles');


// 2. Read

// -- Select all rows
// SELECT * FROM users;

// -- Select rows with a specific condition
// SELECT * FROM users WHERE age > 30;

// -- Select a single row
// SELECT * FROM users WHERE name = 'Alice' LIMIT 1;


// 3. Update

// -- Update a single row
// UPDATE users SET age = 26 WHERE name = 'Alice';

// -- Update multiple rows
// UPDATE users SET city = 'San Jose' WHERE city = 'San Francisco';

// 4. Delete

// -- Delete a single row
// DELETE FROM users WHERE name = 'Alice';

// -- Delete multiple rows
// DELETE FROM users WHERE age < 30;
















