
//primitive data types
//string    //number    //boolean    //undefined    //null    //symbol
//complex data types
//object : arry set map 

let over = 30;
let happy = 30 ;
let un = 10;
console.log(un==happy && un==over)
null === undefined    // false
null == undefined     // true
    



// let x = 10 + "string";
// console.log(x)













// console.log(a)error
// const a;


// console.log(a)error
// let a;


// console.log(a)undefined
// var a;











// const abc = "defgghjj";
// abc = "sfsjhjhdjhd"
// console.log('...line 2',abc) //error

// let abc = "defgghjj";
// abc = "sfsjhjhdjhd"
// console.log('...line 2',abc) 

// var abc = "defgghjj";
// abc = "sfsjhjhdjhd"
// console.log('...line 2',abc) //error








// const abc ;
// console.log('...line 2',abc) //error
// abc= "defgghjj"
// console.log('...line 3',abc)

// let abc ;
// console.log('...line 2',abc)
// abc= "defgghjj"
// console.log('...line 3',abc)


// var abc ;
// console.log('...line 2',abc)
// abc= "defgghjj"
// console.log('...line 3',abc)













var abc = "defgghjj";
function abccccc(){
    console.log('...line 2',abc)
   let def = "ckjhdkd"
   var ghi = "kcsc"
    console.log('...line 2',def,ghi)
}
 console.log('...line 2',abc)
  console.log('...line 2',def)//error
  console.log('...line 2',ghi)//error






  let bc  = "hckhdf00"
  if(true){
    let df = "dhjd"
    console.log('...line 2',bc, df)
  }

  console.log(df)//udefined







// let value = "String";
// console.log(typeof(value))
// let value12 = 124;
// console.log(typeof(value12))
// let value34 = "";
// console.log(typeof(value34))
// let myNumber = 32;
// let tetrunedstring = myNumber.toString(32);
// console.log(typeof(myNumber))
// console.log(typeof(tetrunedstring))
const fruits = ["apples", "bananas", "oranges"];
Array.isArray(fruits);


typeof undefined      // undefined
typeof null           // object
typeof true           // boolean
typeof ' '       // string
typeof ""        // string
typeof 0
typeof 1
typeof {}
typeof []
typeof function(){}
let firstName = 'Asabeneh'      // string
let lastName = 'Yetayeh'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let age = 250                   // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object


let x = 9.656;

 let abc = x.toFixed(2)
 //ciel
let abc = Math.ceil(x)
//floor
let abc = Math.floor(x)

  console.log(x)
  console.log(abc)

 let a =  Number("  10");
 let b = parseInt("10 years")
 console.log(a,b)
 
//parseFloat

let randomNum = Math.random()
console.log(randomNum)

//ternary operator
let aa = 10>6? "yes" : "no"
console.log(aa)
//colense operator
let bb= {
    name:   "sangeetha",
}
bb?.name
bb??name









let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false









let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false



// let nums = [1, 2, 3]
// let numbers = nums

// console.log(nums == numbers)  // true

// let userOne = {
// name:'Asabeneh',
// role:'teaching',
// country:'Finland'
// }

// let userTwo = userOne

// console.log(userOne == userTwo)  // true

console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

