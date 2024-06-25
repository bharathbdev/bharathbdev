
// const arr = [10, 30.3, 20,100,99]


// // for (let i = 0; i < arr.length; i++) {
    
// //         console.log(i, arr, arr[i], arr.length);
    
// // }

// for (var i = 0; i < arr.length; i++) {
//     setTimeout(function () {
//         console.log(i, arr[i], arr.length);
//     }, 3000)
// }

// //0 10 5
// // 1 30.3 5

// // for (let i = 0; i < arr.length; i++) {
// //     setTimeout(function () {
// //         console.log(i, arr[i], arr.length);
// //     }, 3000)
// // }

// // for (var i = 0; i < arr.length; i++) {
// //     setTimeout( () =>{
// //       // it will create its own scope of variable
// //         console.log(i, arr, arr[i], arr.length);
// //     }, 3000)
// // }


// // let acc = 0
// // arr.forEach(
// //   (v,i,a)=>{
// //           acc = acc +v
        
// //   }
// // )
// // console.log(acc)

// // const reduce= arr.reduce((acc, v,i,a) => {
// //     return acc + v
// // }, 0) 
// // console.log(reduce);


// // let charccters= ['a', 'b', 'f', 'd', 'e', 'f', 'g', 'h', 'i', 'c']
// // let sortedcharccters = charccters.sort()
// // console.log(sortedcharccters);  
// //const arr = [10, 30.3, 20,100,99]
// // const sorted = arr.sort()   
// // console.log(sorted);

// // const sortedAfter = arr.sort((a, b) => {
// //     if (a < b) {
// //         return -1;
// //     }
// //     if (a > b) {
// //         return 1;
// //     }
// //     return 0;
// // });

// // console.log(sortedAfter);


// // let words = ['apple', 'Banana', 'grape', 'cherry', 'blueberry'];
// // // let sortedwords = words.sort()
// // // console.log(sortedwords);



// // let sortedWords = words.sort((a, b)=> {
// //     let lowerA = a.toLowerCase();
// //     let lowerB = b.toLowerCase();
// //     if (lowerA < lowerB) {
// //         return -1;
// //     }
// //     if (lowerA > lowerB) {
// //         return 1;
// //     }
// //     return 0;
// // });
// // console.log(sortedWords);
 

// const fs = require("fs")

// const data = fs.readFileSync("./new journey/first.txt","utf8")
// console.log(data)



//  fs.readFile("./new journey/fourth.txt","utf8",(err,data) =>{
//       if(err)
//         {
//           console.log("jvjhbdhvjhdfhfvb")
//         }(data)
//         console.log(data)
// })
// console.log(store)

// const fs = require("fs")

// const data = fs.createReadStream("./new journey/fifth.txt","utf8",(chunk)=>{

//   data.on("data",chunk)

// })

// data.on("error",(err)=>{
// console.log(err)

// })
// data.on("end",()=>{
//   console.log("finished")
// })


// const a = [10,30,50,40,20]

// const arr = a.sort((a,b)=>{


//   if(a<b){
//     return -1
//   }
// if(a>b)
//   {
//     return 1
//   }

// })
// console.log(arr)


let a = setInterval(() => {
    console.log('Delayed function execution');
  }, 10);

  clearInterval(a)



  <!DOCTYPE html>
<html>
<body>

<h1>The Window Object</h1>
<h2>The setInterval() and clearInterval() Methods</h2>

<p id="demo"></p>

<button onclick="myStop()">Stop the time</button>

<script>
const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}

function myStop() {
  clearInterval(myInterval);
}
</script>

</body>
</html>



document.cookie = "username=John; expires=Sat, 8 Jun 2019 12:00:00 UTC";


localStorage.setItem('logvfgghfgho', "abcddgjhwdgjeh");
let a = localStorage.getItem('logvfgghfgho');
console.log(a)

localStorage.removeItem('logvfgghfgho')
console.log(localStorage.length)


sessionStorage.setItem('logvfgghfgho', "abcddgjhwdgjeh");
let b = sessionStorage.getItem('logvfgghfgho');
console.log(b)





MongoDB CRUD Queries
1. Create
javascript
Copy code
// Insert a single document
db.collection.insertOne({ name: "Alice", age: 25, city: "New York" });

// Insert multiple documents
db.collection.insertMany([
  { name: "Bob", age: 30, city: "San Francisco" },
  { name: "Charlie", age: 35, city: "Los Angeles" }
]);
2. Read
javascript
Copy code
// Find all documents
db.collection.find({});

// Find documents with a specific condition
db.collection.find({ age: { $gt: 30 } });

// Find a single document
db.collection.findOne({ name: "bob" });
3. Update
javascript
Copy code
// Update a single document
db.collection.updateOne(
  { name: "bob" },
  { $set: { age: 26 } }
);

// Update multiple documents
db.collection.updateMany(
  { name: "bod" },
  { $set: { age: "1527" } }
);
4. Delete
javascript
Copy code
// Delete a single document
db.collection.deleteOne({ name: "bod" });

// Delete multiple documents
db.collection.deleteMany({ age: { $lt: 30 } });
SQL CRUD Queries








SQL CRUD Queries
1. Create
sql
Copy code
-- Insert a single row
INSERT INTO users (name, age, city) VALUES ('Alice', 25, 'New York');

-- Insert multiple rows
INSERT INTO users (name, age, city) VALUES 
('Bob', 30, 'San Francisco'),
('Charlie', 35, 'Los Angeles');
2. Read
sql
Copy code
-- Select all rows
SELECT * FROM users;

-- Select rows with a specific condition
SELECT * FROM users WHERE age > 30;

-- Select a single row
SELECT * FROM users WHERE name = 'Alice' LIMIT 1;
3. Update
sql
Copy code
-- Update a single row
UPDATE users SET age = 26 WHERE name = 'Alice';

-- Update multiple rows
UPDATE users SET city = 'San Jose' WHERE city = 'San Francisco';
4. Delete
sql
Copy code
-- Delete a single row
DELETE FROM users WHERE name = 'Alice';

-- Delete multiple rows
DELETE FROM users WHERE age < 30;




function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc()) 1
console.log(innerFunc()) 2
console.log(innerFunc()) 3


function add (a) {
    return function(b){
      return a + b;
    }
  }
  
  add(3)(4)   7


  let nameObj = { 
	name: "Tony"
} 

let PrintName = { 
	name: "steve", 
	sayHi: function (age) { 
		console.log(this.name + " age is " + age); 
	} 
} 

bind
 let HiFun = PrintName.sayHi.bind(nameObj); 
 HiFun(6);


call
PrintName.sayHi.call(nameObj, 42);

apply

PrintName.sayHi.apply(nameObj, [42]);



class Person {

    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    introduce() {
      console.log(Hello, my name is ${this.name} and I am ${this.age} years old.);
    }
      static introduce2() {
      console.log(Hello, my name is ${this.name} and I am ${this.age} years old.);
    }
  }
  
  const person1 = new Person('Alice', 30);
  person1.introduce();
  