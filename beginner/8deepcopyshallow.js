// Description: deep copy and shallow copy
let abc = {
    name : "bharyah",
    age: 4
}

let anotheobj = abc //shallow copy
anotheobj.name = "sangeth"
console.log(abc.name) //sangeth
console.log(anotheobj.name)//sangeth


let anotheobj = {...abc} //deep copy  
anotheobj.name = "sangeth"
console.log(abc.name) //bharyah
console.log(anotheobj.name)//sangeth


//other ways to deep copy 
let anotheobj = JSON.parse(JSON.stringify(abc) )
let anotherobj2 = Object.assign({},abc)
let anotherobj3 = loadash.cloneDeep(abc)





// Description:  call by value and call by reference
let a =10  //call by value
let b = {
    name :"dvnd"
} // call by refernce/adress
console.log(a,b)
function myFunction(a, b) {//PARAMETERS

     a=20
     b.name = "sdanhvjsah"

  }

 myFunction(a,b)

console.log(a,b)