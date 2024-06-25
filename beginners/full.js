1 Hoisting : 
Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope.
This means that you can access variables and functions before they are actually initilaize in the code.

example 
// first define a variable a var, now if u try to consume  before it will be undefined and no error, this is because of hoisting

console.log(a)     //undefined
var a
a=10
console.log(a) //10
abc()
function abc(){
}

abc()// undefined
var abc = ()=>{
}
abc()


//first define a variable y let, now if u try to consume  before it will give error, and if u try to access after it will be undefined  this is because of hoisting
//same for arrow function with let
console.log(y); // ReferenceError: y is not defined
let y ;
console.log(y); // undefined
abc()// error
let abc = ()=>{
}
abc()









2.closure : 
closure are ability of functions to remember the variable and functions and that are declared in its outer scope

example
//  Now if you call innerfunc it will form closure with count variable by retaining the previous count
  function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())

// 1
// 2
// 3

3.currying:
curring is a advance technique to transform the function of argument n to n functuins  of one or few arguments

example
function add (a) {
    return function(b){
      return a + b;
    }
  }
  
  add(3)(4) 




4.
middelware
middelware is function with 3 paramter request response and callback function.
middelware is called before api request and inside the middelware logic is return like authentication if it is valid call callback else errror

we can write custom middleware or using express we can write app.use(middelware function)
I used many middleware like cors(karse) body parser.json etc

5.
var let const differeence



Feature	                var	                                          let	                             const
Scope	              Function-scoped/global                            Block-scoped	                 Block-scoped
Hoisting	Yes, initialized to undefined	                         Yes, but not initialized	Yes, but not initialized
Re-declaration	Allowed	                                                        Not allowed	           Not allowed
Reassignment	Allowed	                                                            Allowed	            Not allowed

console.log(x); // undefined
var x = 5;
console.log(x); // 5
console.log(y); // ReferenceError: y is not defined
let y = 10;
console.log(y); // 10
const z = 15;
console.log(z); // 15
// z = 20; // TypeError: Assignment to constant variable.

const obj = { a: 1 };
obj.a = 2; // This is allowed
console.log(obj); // { a: 2 }




6
es6 features
arrow function
class
destructring
rest and spread
let const
modules
promise
map set etc

7
callabck or higher order
 A function passed as a parameter to another fucntion is know as callback function 
example
  fucntion callBackfunction(){
  }
  function normalFunction(callBackfunction){
   callBackfunction
  }   
   normalFunction(callBackfunction)





8
list higher order fucntion 
  foreach map filter some every reduc etc

9
differnet for loops 
  for(i=0)  for(of)  for(in)
let a = ["first", "second"]   
for(let i=0; i<a.length;i++){
   console.log(i,a[i])// 0, first
}

for(let element of a){
console.log(element)// first
}

for(let key in a){
console.log(key,a[key]) 0, first
}



10
differnet for each and map
                          foreach                           map
return                    no(undefined)                     yes
transfom/modify           no                                yes(new array)   

a.forEach((i,v,array)=>{
  console.log(i,v)// 0,first
})

let  b = a.map((i,v,array)=>{
return v*2
})




11
call apply bind

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



12
differt ways to create object 

a.Object Literals       const a = {}
b new Object            const a = new Object()
c constructor function  function a(){}   const b = new a()
d Object.create()        const a = Object.create()


13
callback hell
Callback hell is a like many nested callback functions like pyramid, making it hard to read and manage.

doSomething(function(result1) {
  doSomethingElse(result1, function(result2) {
    doAnotherThing(result2, function(result3) {
      doFinalThing(result3, function(result4) {
        console.log(result4);
      });
    });
  });
});

14 hwo to over come call back hell
 
promise
By using promises or async/await, you can avoid callback hell and make your code more readable and easier to manage.

using promise
doSomething()
  .then(result1 => doSomethingElse(result1))
  .then(result2 => doAnotherThing(result2))
  .then(result3 => doFinalThing(result3))
  .then(result4 => console.log(result4))
  .catch(error => console.error(error));

using async await
async function doAll() {
  try {
    const result1 = await doSomething();
    const result2 = await doSomethingElse(result1);
    const result3 = await doAnotherThing(result2);
    const result4 = await doFinalThing(result3);
    console.log(result4);
  } catch (error) {
    console.error(error);
  }
}

doAll();


15 promise

A promise is a JavaScript object used to handle asynchronous operations, representing a value that may be available now, in the future, or never.

it has 3 states
pending
reslove
reject

const myPromise = new Promise(
    function(resolve, reject) {
    setTimeout(function(){ resolve("I love You !!"); }, 3000);
  });
  
  myPromise.then(
    function(value) {
    console.log(value)
  }




16
async await 
 it is asynchronous programming and improves code readability and maintainability.

 async myFunction(){
  await myPromise
}

17
nojs advantage disadvantage

18

 setTimeout  - executing a function once after a delay.
 setInterval - executing a function repeatedly at fixed intervals.
 setImmediate - executing a function asynchronously after the current event loop.
 process.nextTick-  executes before the event loop continues.


setTimeout(() => {
  console.log('Delayed function execution');
}, 1000);

setInterval(() => {
  console.log('Repeated function execution');
}, 2000);

setImmediate(() => {
  console.log('Immediate function execution');
});
process.nextTick(() => {
  console.log('Next tick function execution');
});



19
call by value and reference 

Call by Value:
Passes a copy of the variable's value 
primitive data type
let a = 5;
let b = a; // b now holds a copy of the value of a

b = 10; // Changing b doesn't affect a
console.log('a:', a); // Output: a: 5
console.log('b:', b); // Output: b: 10

Call by Reference:
non primitive data type
Passes the memory address of the variable 
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 now holds a reference to the same memory address as arr1

arr2.push(4); // Changing arr2 affects arr1 because they point to the same memory address
console.log('arr1:', arr1); // Output: arr1: [1, 2, 3, 4]
console.log('arr2:', arr2); // Output: arr2: [1, 2, 3, 4]


20
spread and rest

spread : use for combining 2 array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2); // Output: [1, 2, 3, 4, 5]

rest: used to collec multiple arguments into an array.
function sum(...args) {
  //arg is array [1,2,3,4,5]
}

console.log(sum(1, 2, 3, 4, 5));


21
deep copy and shallow how u will do 3 ways 


shallow copy

Shallow copy creates a new object and copies the reference adress
let a = {name: "abc"}
let b = a
b.name = "def"
console.log("a",a.name) //def
console.log("b",b.name) //def


deep copy
 Shallow copy creates a new object and copies values 
let a = {name: "abc"}
let b = {...a}
b.name = "def"
console.log("a",a.name) //abc
console.log("b",b.name) //def


other ways to do   
  spread
  json.stringfy(json.parse)
  object.assign
  laodash



22
differ arrow function and normal function
arrow function is short hand syntax for normal function
Feature	                                                          Arrow Functions	                                         Normal Functions
Syntax	                                                       (params) => {return  }                                   	function name(params) {r }
calling                                                        error if u csll before decalring                           nor erro u can call
this 	                                               Inherits this from lexical scope	                                Has its own this 
Use with new constructor functions 	                              no 	                                         yes
prototype 	                                        no	                                                           yes


23
diffeerence rest and soap


     rest uses http     stateless json data
     soap uses protocol statefull xml more complex



24
event emitter 
event emitter is an object that emits events and allows listeners to be attached to those events
const EventEmitter = require('events');

const EventEmitter = require("events")
const myEmitter = new EventEmitter();

myEmitter.on('greet', (data) => {
  console.log(data);
});
myEmitter.emit('greet', "hi");

25

diffenece no sql and sql


Feature	SQL    (Relational Databases)	        NoSQL (Non-relational Databases)
Data Model	structured schema	        structured(moongose), semi-structured, or unstructured(mongodb)
type            numebr character                BSON(binary json)
Schema    	Strict schema              	dynamic schemas
Scalability	Vertically scalable          	Horizontally scalable 
Performance	good for complex queries	good for read-heavy or write-heavy 
Examples	MySQL, PostgreSQL, SQL   	MongoDB, DynamoDB


26
typescript features/ advantags
typescript : superset of javascript

static typing : valid datatype
interface : model for object or class
enum   : define a set of named constants
class


27
what is docker and commands
Docker: Docker is a platform for developing, shipping, and running applications in containers.
Container: A container is a lightweight, portable unit that contains an application and its dependencies.
Image: An image is a read-only template used to create containers.
dockerdesktop: to see the containers and image we install this

dicker file and docker compose yaml
28
git commands 

version control: git github bitbucket

git pull remo
git branch branchname
git checkout branchname
git add .
git commit -m "message"
git push origin branch name 

git stash    (keep my cahnges )
git stash apply (stash my cahnges)


git pull vs git git fetch
git pull no merge to my local
git fetch will megre to my local



what is conflict and how u will resolve conflicts
when 2 developers push to smae file then conflict comes
i will use vs code and manually resolve it
then
git merge
git push


29
waht is authetichation and authorization
authentication is checking validation like username and password
authrization is like checking roles like admin or user


30
jwt token

jwt is a jsonwebtoken or bearer token whcih contains infoamtion about expiretion time, jwt secret and payload(like roles admin user)
while login
 do jwt.sign(payload, jwtsecret, expriesin1hr) will give jwt token
while doing any other api call pass this token
 do verify jwt.verify(receivedtoken,jwtsecret) thsi will check valid use or not also roles whetehr he is admin or user




31 


fs module 3 way sto read and write
  3 ways to read file
  syncronously fs.realFilesync(path)
  asynchrolsly fs.realfile(path,call back function)
  stream       fs.createReadStream()


  same for write also


32
streams
readable stream - used to read file
writeabke stream - used to write file
duplex-  both read an dwrite
transform- output depends on input


33
pipe
output of readablestream given as input to writeable stream


34

what is json
 javaScript Object Notation 


35
foregin key index join 
Index: index  improves the speed of data retrieval from table.
Foreign Key: A foreign key is a column in table(student) that refers to the primary key in another table(teacher)
Join: A join is used to combine rows from two or more tables
Inner Join: Returns match in both tables.
Left Join : Returns all rows from the left table and the matched rows from the right table
Right Join: Returns all rows from the right table and the matched rows from the left table. 
Full Outer Join: Returns all rows from both tables
primary key = unique identifier 


36
==  comapre only value

===  compare both value and data type


undefined == null 
null == {}
0 == "0"
0==NAN


36
typeof

tells data type
 typeof(null)  undefined ""  object function NAN

Array.isArray()



37
 modules
modules are reusable units of code 

hhtp
util
url
querystring
path
zlib
os


38
package.json
it is a root file which contains information about
name , descrption
npm packages
dependencies
dev dependencis : whcih is installed only for development like eslint
scripts: npm run start


39
cors
Cross-Origin Resource Sharing. restricts api from making requests to another domain.

it can be done by 
adding the required domains in access-control-origin-headers or 
using cors middelware npm i cors app.use(cors)


38
micro service 
is a way to build application breaking in to a small blocks and its independent service ecah handlies the specific fucntion and can be developed independently
microservice vs monolithic

                             monolthic                                                      microserviec
c\repo                  single                                                            many
technology                  same                                                             differnet
deployment                  whole application one time                                       deploy each service separelyt
cost                         less sinec one db                                               more since many db
work                        sequential                                                       parallel


39
symbol
Symbol is a unique and immutable primitive value

40
npm - npm install express
 node pacakage manager  to install npm packaage 
nvm
node version manager - to have differment node version

41
require

it is similar to import which is used to import modules or files

42
security for api (cors rate limiter vpn sql inkection ssl)

we can secure api by 
cors
rate limiter npm packjage - to restrict hitting apis more time
vpm- by connecting to comaony vpn
sql injection
ssl- secure socket layer


43
crypto bycrypt
both are used to encrypt and decrypt data


44
recursion
call the same function by itself


function factorial(){
    retrun factorial()

}
factorial()

45   how u will handle error in js or ndoe
try  

catch

 finally- it will execute even no error or error 

try{

}
catch{

}

finally{

}


46
aws

aws- amazon workspace
s3- storage bucket to uplaod an ddownlaod files
aws secert manager- to store secrets in aws like db password
cloud watch- used to see production logs



47

javscript
 javascript is a high-level, interpreted programming language whish is used to develop a web application.
 single thread synchronous blocking but it can be asynchronous and non blocking also


nodejs
Node.js is an open-source, cross-platform JavaScript runtime environment.
  single thread asynchronous non-blocking but it can be synchronous and blocking also


48 

synchronous- line by line execution which results in blocking another tasks
let a = 10
let b = 40
asynchrous -  allow other tasks to proceed while the operation is being performed. (using call back promise async await)


lwt a =10
callback
lwet c =5404
 

49

use strict
it is there in es6
It helps developers to avoid common coding mistakes

exaplme
a = "jdhdj" // ok in es6

but use strict will throw error u shoud give var a = "dvdd"


50

local vs session vs cookie

| Feature         | Local Storage               | Session Storage            | Cookies               |
|-----------------|----------------------------|---------------------------|-----------------------|
| Capacity        | 5-10MB                     | 5-10MB                    | 4KB                   |
| Lifetime        | Persistent                 | Tab-Session               | Expiration-Date       ||
| APIs            | localStorage.setitem       | sessionStorage.setitem    | document.cookie       |



51


undefined null  not defined
console.log(a)//undefined
var a 
console.log(b)// not defined
var c = null // empty value



52
class

a class is a blueprint for creating objects

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


52 inheritance  and static and super
inheritance- child class  to inherit properties another parent class. 
static Person.inroduce2()

class Person extends anotherClass{
    constructor(){
      super()
}
}



53 oops

class
object
inheritance
encapsulation: hide the implemnetion 
abstraction  : show only necessary details 
polymorishim : same method call in different ways



54
advantage of mongodb
Flexible Schema Design (NoSQL)
Scalability (Horizontal Scaling)
High Performance (In-Memory Operations)
Document-Oriented Storage (JSON-like Documents)
Aggregation Framework (Powerful Data Analysis)


55
ternary operator

let a = condition ? return this if condition istrue : return this condition is false 
let a = 2>3 ? "yes": "no"
cosnoel.log(a)//yes

56
jenkins
It is a tool used by devops team to deploy the application in to dev test staging and production
i used to see pipelines and job whenwever i craete a merge request.

56
aggregation 
In mongodb to write complex query we use aggregation like
db.collection.aggaregate(
match, group, sort all are pipelines
)

57
status code


200 OK: Successful request
201 Created: Resource created
204 No Content: Empty response
400 Bad Request: Invalid request
401 Unauthorized: Authentication required
403 Forbidden: Access forbidden
404 Not Found: Resource not found
500 Internal Server Error: Server error
502 Bad Gateway: Invalid response
503 Service Unavailable: Server busy

58
diff post vs patch vs put

post only insert
patch only upadte
put both insert and upadte


59
worker cluster fork spaw exec



Worker: A component that executes tasks in parallel, often used in concurrent programming or distributed systems.
Cluster: A module in Node.js that enables the distribution of incoming network traffic among multiple processes to leverage multi-core systems.
Child Process: A subprocess created by another process, typically used for parallel execution or isolating tasks.
Spawn: A method to create a new process from within a program, often used to execute external commands or run scripts.
Fork: A form of spawning a child process in Unix-based systems, creating an exact copy of the parent process.
Exec: A function in Node.js used to run external commands or programs asynchronously within a child process.



child process
   spawn                const { spawn } = require('child_process');
   fork                 const { fork} = require('child_process');
   exec                 const { exec} = require('child_process');




fork vs spawn
Spawn -
Useful for continuous data transfer in binary / encoded format.
Does not create a new v8 instance.

Fork-
 Useful for sending individual messages in json/xml.
Create a new v8 instance.


 worker vs cluster
 clusters create multiple instances of a Node.js process, each running on a separate CPU core,
 worker threads provide a way to create multiple threads within a single process.


Feature            | Worker Processes                                   | Clusters                                      | Child Processes
-------------------|----------------------------------------------------|-----------------------------------------------|-------------------------------------------
Purpose           | Handle concurrent tasks within a single process.   | Manage multiple instances of the same process. | Execute tasks independently.
Communication     | Can communicate with each other via IPC or events. | Communicate via IPC or message passing.        | No direct communication by default.
Scalability       | Typically used for tasks like I/O operations.      | Distribute incoming connections across workers. | Used for isolated tasks or services.
Concurrency       | Single-threaded, but multiple can run concurrently. | Multiple instances can run concurrently.       | Can run independently, potentially in parallel.
Example           | Handling file uploads in a web server.              | Load balancing HTTP requests in a web server.  | Running a script for data processing.



60
this
this refers to object to which a function belongs

let PrintName = { 
	name: "steve", 
	sayHi: function (age) { 
		console.log(this.name + " age is " + age); 
	} 
} 


61
prototype 
blueprint for objects, share properties  to all instances

function Person(){}

Person.prototype.print = function(){
}


Person.print


62
selfinvoke imediate  fucntion 

function called by itself called self invoking function

(function(){

})()

63
anonynoums function 
function without name is called anonymous function
let myFunction = function() {
   
};

let a = function (){
}
a()

64
destructuing

Destructuring in JavaScript is a way to extract values from objects into variables

let person = { firstName: 'John', lastName: 'Doe' };
let { firstName, lastName } = person;

console.log(firstName); // Output: 'John'

65
scope block functional global lexical

Global Scope: Variables declared outside any function or block.
Local Scope (Block Scope): Variables declared inside a block ({}) using let or const.
Function Scope: Variables declared inside a function using var.
Lexical Scope: scope defines the accessing of variables based on where they are defined.

// Global scope variable
let globalVar = 'I am global';

function outerFunction() {
    // Function scope variable
    var functionVar = 'I am function-scoped';

    if (true) {
        // Block scope variable
        let blockVar = 'I am block-scoped';
        const constBlockVar = 'I am also block-scoped (const)';

        console.log(blockVar); // Output: 'I am block-scoped'
        console.log(constBlockVar); // Output: 'I am also block-scoped (const)'
    }

    // console.log(blockVar); // Error: blockVar is not defined (outside the block)
    // console.log(constBlockVar); // Error: constBlockVar is not defined (outside the block)

    function innerFunction() {
        // Lexical scope variables
        let lexicalVar = 'I am lexical to innerFunction';

        console.log(globalVar); // Access globalVar from global scope
        console.log(functionVar); // Access functionVar from outerFunction scope
        console.log(lexicalVar); // Access lexicalVar from innerFunction scope
    }

    innerFunction();
    // console.log(lexicalVar); // Error: lexicalVar is not defined (outside innerFunction)
}

outerFunction();
// console.log(globalVar); // Access globalVar from global scope
// console.log(functionVar); // Error: functionVar is not defined (outside outerFunction)
// console.log(blockVar); // Error: blockVar is not defined (outside outerFunction)
// console.log(constBlockVar); // Error: constBlockVar is not defined (outside outerFunction)
// console.log(lexicalVar); // Error: lexicalVar is not defined (outside outerFunction)


66

repl

REPL stands for Read-Eval-Print Loop.


67
buffer
it is temporary storage for file upload and dowload


68
open file


fs.open(path)

69
mock

jest.mock(module or function)

70
unit test

i used jest to write unit test
spec.js file
describe inside taht many test case it then call teh function then expect.tobe 




71
lsit few array methods
  splic push pull shift unshift include sort reverse join
lsit string few methods 
   split splice findIndex toupper tolower trim


72
event loop
allowing efficiently holds multiple opereation without blocking
It always checks the call stack , event queue and the callback queue to determine if there are any tasks that need to be executed.


73
temporal dead zone
  Used to access a variablke before initializing 

74
libuv v8


libuv - present in nodejs whcih provide internal threds in thread pool
v8 - is js engine

75
implicit an explicit conversion

implict- automatic data type converion?   
let a = 8 
let b ="6"
let c = a +b //86


explixt - manullay data typee

let a = 8 
let b ="6"
let c = a + Number(b) //14


76
nan
not an number - leagl number


77
errors

const a =10
  a= 20 - syntax error


console.log(a) not defined or refernece error

let num = 10;
num.toUpperCase();    type error


throw error - custom erorr

    


78

what is Error-First Callbacks:

inside a callback erro is handled first then data 
const fs = require('fs');

function readFileCallback(err, data) {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File content:', data);
    }
}

fs.readFile('example.txt', 'utf8', readFileCallback);




79 how u will handle error in nodejs promsie and async await

  by using try catch or by writing .catch
 prmose.then().catch()


80 2 type of api function in nodesj

 

syncronuos blocking
let a = 10
let b =20
let c =30





asyncronuos non block and
let a =10
 callback
letb =30


81
generator
A generator function  allows write a single function to maintain  its own state and yield multiple values one at a time.
function* generatorFunction() {
    yield 'First';
    yield 'Second';
    yield 'Third';
}

// Using the generator function
const gen = generatorFunction();

console.log(gen.next()); // Output: { value: 'First', done: false }
console.log(gen.next()); // Output: { value: 'Second', done: false }
console.log(gen.next()); // Output: { value: 'Third', done: false }
console.log(gen.next()); // Output: { value: undefined, done: true }


82
weakset vs set
Feature           | Set                            | WeakSet
------------------|----------------------------------|-------------------------------------
Key Type          | Any value (objects and primitives)| Only objects
Garbage Collection| No weak references                | Uses weak references for keys
Iteration         | Iterates in insertion order       | No direct iteration methods available
Memory Management | Holds strong references           | Allows objects to be garbage collected if no other references exist



83
weakmap vs object vs map
Feature            | Map                   | WeakMap
-------------------|-------------------------|--------------------------
Key Type           | Any value               | Only objects
Garbage Collection | Strong references       | Weak references
Iteration          | Iterates in insertion order | No direct iteration
Memory Usage       | More memory             | Less memory


Feature            | Object                              | Map
-------------------|---------------------------------------|----------------------------------------
Key Type           | Strings and symbols                   | Any value (including objects and primitives)
Iteration          | Keys are not ordered                  | Iterates in insertion order
Performance        | Suitable for simple key-value pairs   | Better performance for frequent updates and lookups
Size               | Keys are always converted to strings | Maintains insertion order and size can be easily retrieved



84
eslint
it is a tool used by developer to mainatin smae code standar across project
npm i eslint
if developer forgot to add "
it will add when we run npm run eslint



85
passport
  it is a npm package used in authentication 

86
lsit few npm pacakges
exprees mongodb pg cors body parser exceljs aws sdk node-cron

87
client side sand server side rendering 
Client-side Rendering:
Definition: Web page rendering process where the browser downloads HTML, CSS, and JavaScript and renders the page on the client side (user's browser).
Server-side Rendering:
Definition: Web page rendering process where the server generates the HTML, CSS, and JavaScript and sends a fully rendered page to the client (user's browser).


88
solid principle
Single Responsibility Principle (SRP): A class should have only one reason to change
Open/Closed Principle (OCP): classes should be open for extension but closed for modification.
Liskov Substitution Principle (LSP): superclass should be replaceable with subclasses 
Interface Segregation Principle (ISP): Clients should not be forced to depend on interfaces they do not use. 
Dependency Inversion Principle (DIP): High-level modules/classes should not depend on low-level modules/classes. Both should depend on abstractions (interfaces). 

89
javascript events 

click blur mosuseover

90
file upload downlaod 

I use multer to uplaod an downalod
i use aws sdk to uplaod file to s3

91
pagination

In mongodb i wrote db.collection.find().skip(100).limit(200)

92
how u will make api call which pacakage u will use
fetch or axios
fetch.then()

93
promis all race any
assume 3 apis one taking 10 sec anothe 20sec another 30 sec
promise.all - will wait till all are done?
promise.race - once one api done it won't wait
promise.sny -once one api fail it won't wait


94
design pattern

Module Pattern Encapsulates private and public members using closures.
Singleton Pattern Restricts instantiation of a class to a single instance.
Factory Pattern Creates objects without specifying the exact class of object that will be created.
Observer Pattern Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
Prototype Pattern Creates objects based on a template of an existing object through cloning.
Iterator Pattern Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.



96
which archteture u followed?
microservice
MVC model view controller
controller
serveice
db layer


97
swagger- list all apis to share to FE team api documentation


96 
routing in Express.js?
difwfenrt routing folder
 app.get(), app.post(), app.put(), app.delete(), etc.

97 
What is the purpose of app.use() in Express.js?

app.use(cors)  It is used to configure middleware for your application.


98
How do you handle errors in Express.js?

 middleware functions with four parameters (err, req, res, next). 

99
Explain the difference between req.params and req.query in Express.js.
host domain   end point   request parms    req query
http:127.00.1/api/:id?name="bharath"

req.params in the path part of the URL  :id
req.query in the query string of the URL name="bharayth"

100
What is the role of body-parser middleware in Express.js?

app.use(bodyparser.json())
it is used to parse incoming request .




101
differnec between mongodb and moongosee
mongodb schema less
moonofgoee we had schema like name age etc


102
did u use orm?
object relation mapping  is schema a
yes  moobgoise and typeorm in sql  and moongoose in mongodb



103
metod use dto insert find delet upadte in mongodb mongose and sql  queries
mongodb
collection.insertOne
 collection.find()
collection.findOne
collection.upadte
collection.delete

moongose
user.save
 User.find
 User.findById
 User.findByIdAndUpdate
 User.findByIdAndDelete

postgresssql
pool.query() to execute SQL queries (INSERT, SELECT, UPDATE, DELETE)






102how to coonect to db in express
install npm instal mongodb
mongoclient.connect(url, callback)



103  sql and mongo query 
sql
INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');
SELECT * FROM users;
SELECT * FROM users WHERE id = 1;
UPDATE users SET name = 'Jane Doe', email = 'jane@example.com' WHERE id = 1;
DELETE FROM users WHERE id = 1;

mongodb
db.collection.insertOne({ name: "bshsh", age: "66" });
db.collection.insertMany([{ key1: "value1" }, { key2: "value2" }]);

db.collection.find({  });
db.collection.findOne({ name: "abshghss" });

db.collection.updateOne({ name: "bahhsgds" }, { $set: { age: "32tryr32" } });
db.collection.updateMany({ key: "value" }, { $set: { key: "new_value" } });



104 oauth
it is authentication where thirdparty willl validate and send call back url to redirect to our appliaction eg: google login


105
reduce 
it si array nethod usied cases like calcut sum of array

arr.reduce((result,v,i,a)=>{},0)

106 Is JS is single-threaded or multi-threaded ? And how does it achieve the asynchronous activity?
promise call back async await




107 map vs filer
map jsut modify
filter remoev the element

108

const a =10
a =20// this is worng

but 
const a = {"name": "dvd"}
 a.name = "dvddd"// this is right how



because u are upadting not reintialiing


if u do 
a={name: "vdhjdgd"} then it will throw error




109 explin difernet data type
primitive  numebr sring bool undefien null symbol big int
non primitve object



110 What is memoization?
Memoization is a form of caching where the return value of a function is cached based on its parameters.

111What is DOM?
DOM stands for Document Object Model. 


112 chart.at() and charCodeAt()
charCodeAt  gives asci value  // 24
charat gievs character // "b"


113 advantage of nodejs
It is generally fast
It rarely blocks
It offers a unified programming language and data type
Everything is asynchronous and non blocking



114 disadvantges 
can't handle cup intensive task
it needs workers to handle muit thread
with sql it is not too good relation data


114 what is I/O opertion

inpout out opertaion is like request respnse like watsup chat applocation 

115 nodejs vs javascript

JavaScript        | Node.js
-------------------------------------
Client-side       | Server-side
Runs in browsers | Runs on servers
Manipulates DOM   | Handles I/O operations
sync and block    |  default async and non block
Interacts with UI | Interacts with file system
no libuv              libuv
no modules           core modules





116 url module
use dto get host name and path 








117
packag.lock
used to store history of npm pacjage version 


118 what is .env file 

used to store env variables using dotenv package
staging testing dev prod



119
 Why should you separate the Express app and server?

to uniy test our code easily and for readiabitiy



120
what is helmet
 The helmet middleware helps secure your application by setting various HTTP headers. 
app.use(helmet)

121 
how u handle routing in express
app.route()
app.get

122
hwo u handle middleware in express
app.use()

123
what is set 

set is a ditonary to store unique valuse
let a = new Set([1,2,3,3])
few methods are 
a.add has delete clear

124
have u heard cache and queue system

cahe -redis 
queye - rabbitmq , kafka
i heard didn't work

125
unary operator a++ ++a a-- --a
Pre-Increment (++variable)
javascript
Copy code
let a = 5;
let b = ++a; // a is incremented to 6, then b is assigned the value 6

console.log(a); // Output: 6
console.log(b); // Output: 6
Post-Increment (variable++)
javascript
Copy code
let c = 5;
let d = c++; // d is assigned the value 5, then c is incremented to 6

console.log(c); // Output: 6
console.log(d); // Output: 5

126 
getter and setter in class
class Person {
    constructor(name) {
        this._name = name; // Using an underscore to denote private variables
    }

    // Getter for the 'name' property
    get name() {
        return this._name;
    }

    // Setter for the 'name' property
    set name(newName) {
       
            this._name = newName;
       
    }

   private sum(){
}
}

// Example usage
let person = new Person('John Doe');

// Using the getter methods
console.log(person.name); // Output: John Doe

// Using the setter methods
person.name = 'Jane Doe';

console.log(person.name); // Output: Jane Doe
console.log(person.age);  // Output: 25

 


128 docker commands to run 


Create a Dockerfile
FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]

Create a docker-compose.yml file 
version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/usr/src/app
    environment:
      - NODE_ENV=development


# Log in to Docker Hub
docker login

# Build the Docker image
docker build -t my-express-app .

# Tag the Docker image
docker tag my-express-app your-username/my-express-app:latest

# Push the Docker image to Docker Hub
docker push your-username/my-express-app:latest

# Run the Docker image
docker run -d -p 3000:3000 your-username/my-express-app:latest



129

how to run js   node fielname.js
how to run ts   tsc filename.ts then node filename.js  or tsc node filename.js
how to run express npm run start or node main.js
how to run unit test npm run test
5t 

130 ec2

Amazon EC2 (Elastic Compute Cloud) is used to rent virtual servers, to run applications

Sign up for AWS and configure the AWS CLI.
Launch an EC2 instance using the AWS CLI.
Connect to your EC2 instance using SSH.
Set up Node.js on the instance.

131 what is jobs in Jenkins

creating build of our app is called job
like run unit test 
like run eslint

132 what is pipeline Jenkins merge request
when ever i create a merge request some task will run like unittest or eslint if any one fail my merge request will not get merged this is pipeline.
this is added by devops

133
in string comparing the value primitive data type == ===
in array and object it comparing the address == === no primitive data type
let num =[1,2,3]
let number = [1,2,3] num == number //false






