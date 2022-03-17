// let x = {}
//
// let foo = function () {
//     this.hello = "hi";
//     return this;
// }
//
// x.bar = foo;
// console.log(x.bar().bar().hello);



// const person = {
//     name: "Faheem",
//     sm:"Twitter",
//     foo: ()=>{
//         let newName
//         return this.newName;
//     }
// }

//console.log(person.foo() === person);

// console.log(person.foo());


// let a = 10
//
// const person = {
//     name: "Faheem",
//     sm:"Twitter",
//     foo: function () {
//         return this.name;
//     }
// }
//
// //console.log(person.foo() === person);
//
// console.log(person.foo());










// var x = {
//     a:"god"
// }

console.log("outsidebkjb", this === window)
function xyz() {
    console.log("outside", this === window) // this will work only in browser
   //  in nodejs env it will point to the nodejs module
  // this.inside = function (){
  //     console.log("inside", this.x)
  // }
}
//let b = new xyz()
// console.log(b.inside());
xyz()
