let name = "Sangeetha"
let age = "three";




function myName (name,age)
{
    let myResult = name + "is" + age + "years old"
    return myResult
}
console.log(myName(name, age))





function myFunction(x ,y=3)
{
   return x + "is" + y + "years old"
}
console.log(myFunction(name))







let a =10;
let b = {
    name : "sangeetha"
}
console.log(b)

function myFunction (a,b){
    a = 10;
    b.age = "kcjkdshv";
    

}
myFunction(a,b)
console.log(b)






 //declarion or normal function
myFunction(4,10) //ARGUMNETS

function myFunction(a, b) {//PARAMETERS
    return a * b; 
  }

//expresion or anoynmous
  const myFunction2 = function (a, b) {return a * b};
  myFunction2(4,10)

// self invoking
(function () {
    let x = "Hello!!";
    console.log(x)  // I will invoke myself
  })();

// arrow function  
const myFunction4 = (a,b) => {
    return a * b
  }

console.log(myFunction(4, 10)) //ARGUMNETS

//call back function
function myDisplayer(some) {  
    some()      //callback function
    
  } 
 myDisplayer(()=>{return "Hello"});
