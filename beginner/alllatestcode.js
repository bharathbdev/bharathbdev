


// // var abc = () => {
// //     console.log('abc')
// // }
// // abc()// undefined


// //console.log(x); // undefined
// const x = {
//     name: 'abc',
// };
// x = {
//     name: 'xyz',
// }


// console.log(x);
// // console.log(x); // 5
// // console.log(y); // ReferenceError: y is not defined
// // let y = 10;
// // console.log(y); // 10
// // const z = 15;
// // console.log(z); // 15
// // // z = 20; // TypeError: Assignment to constant variable.

// // const obj = { a: 1 };
// // obj.a = 2; // This is allowed
// // console.log(obj); // { a: 2 }





// call by value and reference 

// Call by Value:
// Passes a copy of the variable's value 
// primitive data type
// let a = 5;
// let b = a; // b now holds a copy of the value of a

// b = 10; // Changing b doesn't affect a
// console.log('a:', a); // Output: a: 5
// console.log('b:', b); // Output: b: 10

// Call by Reference:
// non primitive data type
// Passes the memory address of the variable
// let arr1 = [1, 2, 3];
// let arr2 = arr1; // arr2 now holds a reference to the same memory address as arr1

// arr2.push(4); // Changing arr2 affects arr1 because they point to the same memory address
// console.log('arr1:', arr1); // Output: arr1: [1, 2, 3, 4]
// console.log('arr2:', arr2); // Output: arr2: [1, 2, 3, 4]


eep copy and shallow how u will do 3 ways 


shallow copy

Shallow copy creates a new object and copies the reference adress
let a = { name: "abc" }
let b = a
b.name = "def"
console.log("a", a.name) //def
console.log("b", b.name) //def


deep copy
 Shallow copy creates a new object and copies values
let a = { name: "abc" }
let b = { ...a }
b.name = "def"
console.log("a", a.name) //abc
console.log("b", b.name) //def


let a = { name: "abc" }
let b = JSON.parse(JSON.stringify(a))
b.name = "def"
console.log(a, b)

let arr1 = [1, 2, 3];
let arr2 = [...arr1]; // arr2 now holds a reference to the same memory address as arr1

arr2.push(4); // Changing arr2 affects arr1 because they point to the same memory address


other ways to do
    spread
  json.stringfy(json.parse)
  object.assign
laodash




20
spread and rest

spread: use for combining 2 array
const arr1 = [1, 2, 3];
const arr2 = [...arr1,4,5];


const obj1: { name: 'abc', age: 25 };
const obj2 = { ...obj1, age: 30, salary: 50000 };
console.log(obj2); // Output: [1, 2, 3, 4, 5]

rest: used to collec multiple arguments into an array.
function sum(...args) {
    //arg is array [1,2,3,4,5]
    console.log(args);
}

console.log(sum(1, 2, 3, 4, 5));



// differt ways to create object

// a.Object Literals       const a = {}
// b new Object            const a = new Object()
// c constructor function  function a() { } const b = new a()
// d Object.create()        const a = Object.create()



const obj = {
    name: 'abc',
    age: 22
}

let store = obj.age
let store1 = obj['age']
console.log(store, obj.age)

obj.age = 23
obj.salary = 76378738
obj['salary'] = 76378738



// const obj2 = obj
// obj2.age =48

// obj2.scholl = "dhkhfkj"

const obj2 = {
    ...obj,
    scholl: "'jgjr"
}
// obj2.scgiol = "hdkhf"
let storr = obj2.age




const arr1 = [1, 2, 3];
// const arr2= arr1
// let storegjgf = arr1[1]
// arr2[1] = 6

const arr2 = [...arr1, 4]
arr2.push(4)





// const a = {firstname:"xjsxj",lastname:"ckdslkjhc"}

// let{firstname,lastname}=a
// console.log(lastname)



// const a = { firstname: "xjsxj" }

// let { firstname, lastname="kjcdskchkds" } = a
// console.log(lastname)

let b = [1, 2, 3, 4, , 5]

let [a, f, c, d, e] = b


    / Global scope variable
let globalVar = 'I am global';

function outerFunction() {
    // Function scope variable
    var functionVar = 'I am function-scoped';

    if (true) {
        // Block scope variable
        let blockVar = 'I am block-scoped';
        const constBlockVar = 'I am also block-scoped (const)';

        console.log(blockVar); // Output: 'I am block-scoped'
        console.log(constBlockVar); // Output: 'I am also block-scoped (const)'
    }

    // console.log(blockVar); // Error: blockVar is not defined (outside the block)
    // console.log(constBlockVar); // Error: constBlockVar is not defined (outside the block)

    function innerFunction() {
        // Lexical scope variables
        let lexicalVar = 'I am lexical to innerFunction';

        console.log(globalVar); // Access globalVar from global scope
        console.log(functionVar); // Access functionVar from outerFunction scope
        console.log(lexicalVar); // Access lexicalVar from innerFunction scope
    }

    innerFunction();
    // console.log(lexicalVar); // Error: lexicalVar is not defined (outside innerFunction)
}

outerFunction();
// console.log(globalVar); // Access globalVar from global scope
// console.log(functionVar); // Error: functionVar is not defined (outside outerFunction)
// console.log(blockVar); // Error: blockVar is not defined (outside outerFunction)
// console.log(constBlockVar); // Error: constBlockVar is not defined (outside outerFunction)
// console.log(lexicalVar); // Error: lexicalVar is not defined (outside outerFunction)



// let arr =["fgg",4, "hdkjhwadkja", "yu"]
// let s1 = arr.length //legth
// let s2 =arr[1] //print
// arr[1]=5 //update or modify

// arr.push(6) //add at last
// arr.unshift(0) //add at first

// arr.pop() //remove last
// arr.shift() //remove first

// arr.splice(2, 1) //remove ffdfdhfdhf
// arr.splice(2, 1, 'jgdsfsfne') //add 7 at 2nd index
// arr.splice(2, 0, 'jgdsfsfne') //add 7 at 2nd index
// let s1 = arr.length //legth

// delete arr[2]
// let s1 = arr.length //legth

let obj = {
    name: 'abc',
    age: 22
}


let s1 = obj.age // obj['age']
obj.age = 23 // obj['age'] = 23



obj.salary = 76378738// obj['salary'] = 76378738
delete obj.salary // delete obj['salary']

let a = 2
let b = undefined
let chcek = a === b
console.log(chcek)

console.log(typeof true)




var globaal = "i a gloadb"

console.log(globaal) // i a gloadb

function outerFunction() {
    console.log("i ma inside outer", globaal)
    var insidegloabl = "i am insidegloabl"
    console.log("i ma inside gloadb", insidegloabl)

    if (true) {

        let blockVar = 'I am block-scoped';
        console.log("block ia ma ", blockVar); // Output: 'I am block-scoped'
    }
    console.log("i ma blockVar outer", blockVar)



}
outerFunction()
//console.log("i ma outside outer",insidegloabl)


var global = "I am global visible evrywhere "
console.log(global)

function outerfunction() {

    console.log("consume global variable inside the function", global)
    let functionscope = "i am afunctional scope"
    console.log(functionscope)

    if (true) {
        console.log("lexical", functionscope)
        let blockscope = "i am blockscope"
        console.log(blockscope)
    }
    //console.log(blockscope)


}
//console.log(functionscope)
outerfunction()



let a = ["cjcd", "dshjchjdj", 3, "hjgcc"]
let b = a.length
console.log(b)
a.push("hcbhjc")
console.log(a)
a[1] = "abc"
console.log(a)
let c = a[3]
console.log(c)
a[3] = "def"
console.log(a)
let e = a[1]
console.log(e)
a.splice(3, 0, "gh")
console.log(a)
a.splice(3, 3, "wjgf")
console.log(a)
a[2] = "f"
console.log(a)
let y = a[2]
console.log(y)
delete a[1]
console.log(a)
let z = a.length
console.log(z)


let a = {
    name: "san",
    age: 25,
    area: "leggere",
    city: "bangalore",

    inside: {

        salary: 2345566
    }


}

let abc = "state"
a[abc] = "karnataka"
console.log(a)
a.city = "goa"
a[abc] = "panjab"
console.log(a)

let b = a.area
console.log(b)
delete a.area
console.log(a)
let d = a.inside.salary
console.log(d)
a.inside.salary = 8
console.log(a)
a.inside.company = "tcs"
console.log(a)




let gname = "sangeetha"
let nenuem = 3
function myName(name, age = 8) {
    let myResult = name + "is" + age + "years old"
    //  console.log(myResult)
    return myResult

}

let returnbalied = myName(gname, nenuem)
console.log(returnbalied)



let b = { name: "i am here" }
let a = ["bharath"]

let arrow = (c, j) => {

    let r = c.name
    let f = j[0]
    let k = r + f
    return k


}

let u = arrow(b, a)
console.log(u)


let arr = ["a", "b", "c", "d", "e"]


// for(let value of arr){

//     console.log(value)
// }


// for(let index in arr){

//     console.log(index)
//     let store = arr[index]
//     console.log(store)

// }


// for (let i = 0; i < arr.length; i++) {

//     console.log(i)
//     let store = arr[i]
//     console.log(store)
// }


// arr.forEach(

//     (v,i,a)=>{

//         console.log(v)
//         console.log(i)

//     }



// )


let obj = {

    name: "san",
    age: 25,
    area: "leggere",
    city: "bangalore",



}

// let store = obj.city
// let key1 = "name"
// let store1 = obj[key1]

// for(let key in obj){
//   console.log(key)
//   let store2 = obj[key]
//   console.log(store2)
// }

// let alleys = Object.values(obj)  
// console.log(alleys)

let ovd = Object.entries(obj)
console.log(ovd)

for (let value of ovd) {
    let myarray = value

    let mykey = myarray[0]
    let myvalue = myarray[1]
    console.log(mykey)
    console.log(myvalue)

}



//call back function
function myDisplayer(a) {
    let store = a()
    //callback function
    console.log(store)

}
myDisplayer(() => { return "Hello" });


arr.forEach(() => { })









let arr = [10, 20, "abc", 40, 20]
//no return 
arr.forEach(
    (v, i, a) => {
        console.log(v, i, a)

    }
)
//array


map systx

let aa = arr.map(

    (v, i, a) => {

        let b = 
        return b
    }
)




let aa = arr.map(

    (v, i, a) => {

        let b = v * 2
        return b
    }
)




//array

let b = arr.filter(

    (v, i, a) => {
        let condition = 
        if (condition) {
            return true
        } else {
            return false
        }
    }
)



let b = arr.filter(

    (v, i, a) => {


        let condition = typeof v == "number"//V==20
        if (condition) {
            return true
        } else {
            return false
        }
    }
)

let b = [20, 20]

//BOOLEN

let c = arr.every(

    (v, i, a) => {
        let condition = 
        return condition

    }
)




let c = arr.every(

    (v, i, a) => {
        let condition = v > 5
        return condition

    }
)


//booelan
let d = arr.some(

    (v, i, a) => {
        let condition = v > 10
        return condition

    }
)




//number

let e = arr.findIndex(

    (v, i, a) => {
        let condition = 
        return condition

    }
)
let e = arr.findIndex(

    (v, i, a) => {
        let condition = v == "abc"
        return condition

    }
)




let acc = 0
arr.forEach(
    (v, i, a) => {


        acc = acc + v

    }
)
console.log(acc)



//number
const reduce = arr.reduce(
    (acc, v, i, a) => {
        return acc + v
    }, 0)
console.log(reduce);































































let arr = [6, 744, "dgdg,", "dgjdh"]

//srearch
let posoition = arr.findIndex((v, i, a) => {
    let condition = v == "dgdg,"
    return condition
})

let value = arr[posoition]


let str = "he is gdjd hyu"
let post = str.indexOf("i")
let store1 = str.charAt(post)



//concat
let g = "dgjdgjyd"
let aa = 'shdgj' + 'hshd' + g
console.log('i amag', g, aa + g)

// //trim
let a = "    india is county"     andia is country
let gg = a.trim()
console.log('.../', gg)

//length
let l = a.length
let stroe2 = a[0]

//immutable
a[0] = 'a'
console.log(a)

//slice
let bb = a.slice(1, 16)
console.log(bb)

//toUpperCase
let aaa = a.toLocaleUpperCase()
let c = aaa + b
console.log(c, aaa)

//replace
let text2 = "Please visit Microsoft!  Microsoft";
let newText = text2.replaceAll("Microsoft", "W3Schools");
console.log(newText)

//split
let text = "abharat hb&bhar athcbha &rathdef";
const myArray = text.split("&");
console.log(myArray)

let stringggg = myArray.join('$')
console.log(stringggg)

//startsWith
console.log(abc.startsWith("andia"))
//charAt
console.log(stringggg.charAt(0))
//charCodeAt
console.log(stringggg.charCodeAt(0))
//indexOf
console.log(stringggg.indexOf('a'))
//lastIndexOf 
console.log(stringggg.lastIndexOf('a'))



//compare array and string methods


//to get charcter by using position

let str4 = "he is gdjd hyu"
let ba = str4.charAt(3)
console.log(ba)

let a = [6, 744, "dgdg,", "dgjdh"]
console.log(a[2])







// to fin the index by using a character

let str = "he is gdjd hyu"
let b = str.indexOf("i")
console.log(b)


let arr = [6, 744, "dgdg,", "dgjdh"]
let a = arr.findIndex(

    (v, i, a) => {
        let condition = v == "dgdg,"
        return condition

    }
)
console.log(a)

const sortedAfter = arr.sort((a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
});



class Car {
    constructor(name) {
        this.realcarnmae = name

    }

    printcarme() {
        return "tiss is ,u car" + this.realcarnmae
    }

    static staicmensthis() {
        console.log("iam sdjdjfj")
    }

}

Car.staicmensthis()
// const car1 = new Car("i20")
// let stprw = car1.printcarme()
// console.log(stprw)


class Model extends Car {

    constructor(name) {
        super(name)

    }
}


const model1 = new Model("i20")




let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + " is " + age + " years old");
    }
}

//PrintName.sayHi(6)

// //bind
let HiFun = PrintName.sayHi.bind(nameObj);
HiFun(6);

// //call
PrintName.sayHi.call(nameObj, 6);

//apply
PrintName.sayHi.apply(nameObj, [42]);



// currying

function add(a) {
    return function (b) {
        return a + b;
    }
}

console.log(add(3)(4)) //7


//closure

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc()) //1
console.log(innerFunc()) //2
console.log(innerFunc()) //