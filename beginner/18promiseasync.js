//callback



function number (callback)
{
    callback()
    console.log("jbhsgjcdjhsc")
}
number(callback)

function callback () {
    console.log("kjkbcjhsc")
}


//or using arrow function
 number(()=>{console.log("kjkbcjhsc")})



 //example

let numbers = [4, 9, 16, 25];
numbers.forEach(myFunction);
function myFunction(value, index, array) {
  txt = txt + value + "    ";
}
console.log(txt)

numbers.forEach(   
    (v,i,a) =>{
        console.log(v,i,a)
      
 }
  

)







//promise





const mypromise = new Promise((resolve,reject)=>
{
    setTimeout(()=>{
          resolve("bdfvbfdjhvbh")
         // reject('error')
    },3000)
})

mypromise.then((value)=>{
console.log(value)

}).catch((error)=>{
console.log(error)
})






//async await


async function myFunction (){
  try{
    let store = await mypromise
    console.log(store)}
    catch(error){
        console.log(error)
    }
  }
    myFunction()


