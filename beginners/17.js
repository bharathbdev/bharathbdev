// function parent(){
//     let a = 10
//      function child(){
//               console.log(a)
//      }
//      child()
// }

// parent()



//bind

// let nameObj = { 
// 	name: "Tony"
// } 

// let PrintName = { 
// 	name: "steve", 
// 	sayHi: function () { 

// 		// Here "this" points to nameObj 
// 		console.log(this.name); 
// 	} 
// } 
// //PrintName.sayHi()
//  let HiFun = PrintName.sayHi.bind(nameObj); 
//  HiFun();

//call
// let nameObj = { 
// 	name: "Tony"
// } 

// let PrintName = { 
// 	name: "steve", 
// 	sayHi: function (age) { 
// 		console.log(this.name + " age is " + age); 
// 	} 
// } 

// PrintName.sayHi.call(nameObj, 42);

//apply
// let nameObj = { 
// 	name: "Tony"
// } 

// let PrintName = { 
// 	name: "steve", 
// 	sayHi: function (...age) { 
// 		console.log(this.name + " age is " + age); 
// 	} 
// } 
// PrintName.sayHi.apply(nameObj, [42]);
