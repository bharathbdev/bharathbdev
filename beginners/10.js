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


// // Create an Array
// const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// // Destructuring
// let [fruit1,,,fruit2] = fruits;


//spread rest

// // Create an Array
// const numbers = [ 10, 20, 30, 40, 50, 60, 70];

// // Destructuring
// const [a,b, ...rest] = numbers

// console.log(rest[1])


// const c = [1,2,3]
// const d = [4,5,6]

// const e = [
//     ...c,
//     ...d
// ]

// console.log(e)





let aa = {
    name : "sghdsg",
    age : "ghsgghs"
}

// let bb = {
//     name2 : "sgdmhmhdhdsg",
//     age2 : "ghsggsnnhsghs"
// }

// let cc = { ...aa, ...bb}
//let dd = aa
// let dd = {...aa}
let dd = JSON.parse(JSON.stringify(aa))
dd.age = 40
console.log("...dd", dd.age)
console.log("...aa", aa.age)