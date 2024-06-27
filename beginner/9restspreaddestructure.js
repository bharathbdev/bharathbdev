//Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };
  
  let a = person.firstName
  let b = person.lastName
  // Destructuring
  let {firstName:name, lastName, country = "US"} = person;
  console.log(name)


// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1,,,fruit2] = fruits;


//spread rest

// Create an Array
const numbers = [ 10, 20, 30, 40, 50, 60, 70];

// Destructuring
const [e,f, ...rest] = numbers

console.log(rest[1])


const c = [1,2,3]
const d = [4,5,6]

const g = [
    ...c,
    ...d
]

console.log(g)





let aa = {
    name : "sghdsg",
    age : "ghsgghs"
}

let bb = {
    name2 : "sgdmhmhdhdsg",
    age2 : "ghsggsnnhsghs"
}

let cc = { ...aa, ...bb}
console.log(cc)




//rest and spread using function example
//rest
function myFunction(...args) { 
    console.log(args)    }
myFunction(1,2,3,4,5,6,7,8,9,10)

//spread
function myFunction2(a,b,c,d,e) { 
    console.log(a,b,c,d,e)    }
let arr = [1,2,3,4,5]
myFunction2(...arr)