
//various way to create object
const person4 = { firstName: "John" };
const person6 = new Object();
const person2 = Object.create({ firstName: "John" });
const person3 = Object.assign({}, { firstName: "John" });
const person8 = { ...person };



let person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
 
person1.gdhdmhjd = "gahgh"
// add new property
Object.defineProperty(person1, "year", {value:"2008"})
console.log(person1)

//avoid adding new property
  const person = {firstName:"John", lastName:"Doe"};
  Object.preventExtensions(person)
  try {
    person.nationality = "English";
  }
  catch (err) {
    console.log(err)
  }


  // Seal Object
Object.seal(person)
//freeze
Object.freeze(person)
console.log("ghghj")


