// const car = {
//     color:"white",
//     name:"xuv700",
//     weight:"1000",
// }

// const person = new Object()
// person.firstName = "Sanheetha";
// person.lastName = "B C"
// person.age = 45;

// console.log(person["age"]+ ""+person["firstName"])


// const car = {
//     color:"white",
//     name:"xuv700",
//     weight:"1000",

//     fullName : function (){
//         return this.color+""+this.name;
//     }
// }
// console.log(car.fullName())

// const car = {
//     color:"white",
//     name:"xuv700",
//     weight:"1000",
// }

// car.age = 30;
// console.log(car["weight"]+ "is" +car["age"])
// console.log(car)
// delete car["color"];
// console.log(car)


// const car = {
//     color:"white",
//     name:"xuv700",
//     weight:"1000",

//     fullName : function (){
//         return (this.color.toLowerCase() + " "+ this.name.toLowerCase());
       
//     }
    
// }
// console.log(car.fullName())


// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };


//   let text = ""
//   for(let x in person)
//     {
//         text = text + person[x];
//     }

//     console.log(text)



// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };

//   const myArray = Object.values(person)
//   console.log(myArray[2])



// person = {
//   name : "sangeetha",
//   age : 24,
//   state : "karnataka",
//   address : {
//     area : "Basweshvara nagar",
//     city : "bangalore"
//   }
// }

// person.city = "bangalore"
// person["gender"] = "female"
// console.log(person.address)
// console.log(typeof(person.city))



// const arrayOfName = ["san","gee","shan","burger"]
// console.log(arrayOfName)
// let arrayStore = arrayOfName.indexOf("burger")
// {
// let arrayStore = arrayOfName.length
// // console.log(arrayStore)
// // }
// console.log(arrayStore)

// for (let index = 0;index <arrayStore; index++ ){
//   let a = arrayOfName[index]
//   console.log("index..."+index,a)

// }
// //with index and elemntes print
// for (let index = arrayStore - 1;index >= 0; index-- ){
//   let a = arrayOfName[index]
//   console.log("index..."+index,a)

// }

// //only elements print
const arrayOfName = {name :"san",address :"gee",age :"shan",city :"burger"}
for (let index in arrayOfName)
  {
    console.log(index,(arrayOfName[index]))
  }



// const arrayOfName = ["san","gee","shan","burger"]
//  arrayOfName.forEach((v,i,a) => {
//   console.log(v,i,a)
//  }
// )

//  arrayOfName.forEach(myname)  
//   function myname(v,i,a){
// console.log(v,i,a)
//   }
 

 

