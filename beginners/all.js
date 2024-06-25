// // let arr = ["bscbh", "vcvh", "dog"]
// // a.array.forEach((v,i,a) => {
// //       console.log
// // });

// // for(let i =0; i< arr.length;i++){
// //     let b = arr[i]
// //   console.log(i,b)
// // }

// // for(let ele of arr){
// //     console.log(ele)
// // }

// // for(let key in arr){
// //     let c = arr[key]
// //     console.log(key, c)
// // }



// let obj ={

//     a:"abc",
//     b: "bcgch",
//     c:"fgjfgj"
// }


// for(let key in obj ){
//     let gh = obj[key]
//   //  console.log(key, gh)
// }

// let s = Object.values(obj)
// console.log(s)

// for(let ele of s){
//     console.log(ele)
// }

// let ovd = Object.entries(obj)
// console.log(ovd)

// for(let elem of ovd){
//     console.log(elem[0], elem[1]) 
// }



// for (let i=0;i<animals.length;i++)
//     {
//       let b = animals[i]
//       console.log(b,i)
//     }

// animals.forEach(


//     (v,i,a) =>{

     
//            console.log(v,i)
//     }
// )

// let animals = ["cat","dog","lion"]


// for(let element of animals)
//     {
//         console.log(element)
//     }
    // for(let key in animals)
    //     {
    //         let b = animals[key]
    //         console.log(key,b)
    //     }


        // const num = Object.entries(animals)
        // console.log(num)


        // let obj = {

        //     a : "cat",
        //     b : "dog",
        //     c: "lion"
        // }

        // console.log(obj.c)

        // let b = obj["c"]
        // console.log(b)
// for (const key in obj)
//     {
//         let b = obj[key]
//         console.log(key,b)
//     }

// let num = Object.entries(obj)
// console.log(num)

// for(let element of num)
//     {
//         console.log(element,element[0],element[1])
//     }

// let a = Object.values(obj)
// console.log(a)

// for(let element of a)
//     {
//         console.log(element)
//     }
// let b = Object.keys(obj)
// console.log(b)








// for of // vlue
// for ecah let i for in kwy value


// obj
// in key vlue
// entries key vlue  




// for (let key in obj)
//     {
//         let b = obj[key]
//         console.log(key,b)
//     }

// let obj = {

//     a : "cat",
//     b : "dog",
//     c: "lion"
// }


// let array = ["cat","dog","animals"]


// array.forEach(

// (v,i,a) =>{
 
//     console.log(v,i)
// }



// )


// ["_abC_", "_deuuuuuF_","_ghI_"]

let arr = ["abc", "deuuuuf", "ghi"]
let b = arr.map(

(v,i,a) => {

   let s = v.slice(0,2)
   let d = v.charAt(v.length-1)
    let upper = d.toUpperCase(),,,,,
    let g = "_" + s+upper + "_"
   return g
}

)
console.log(b)






















// strings length indexof lastindexof slice split trim toupper tolower chartCodeAt charat 
// aaray  length   includes join    splice reverse sort findIndex  []
//posituion string   chart(2)  arr[2]
//string post     indefoc      findindex
// ,jgjjhgjh,vhnogo
// 012345678  
// input daata out return yav
// let arr = ["a", "b", "c", "b", "e"]
//    structuredClone.indecfof("c")
// let index = arr.findIndex(

//     (v,i,a)=>{
//         let cond = v ==  "c"
//         return cond

//     }
// )
// console.log(index)

// let arr = ["a", "b", "c", "b", 9 , 0, "e"]

// let index = arr.findIndex(

//     (v,i,a)=>{
//         let cond = v ==  "bgjhgjhjh"
//         return cond

//     }
// )
// if(index == -1){
//     console.log("ur string nothgjfgd")
// }
// else{
//     console.log("bhvsajhcshad")
// }
// // let edhya = arr.includes("bcbxjsajh")
// console.log(index)




// let arr = ["a", "e", "c",,  "d" , "gsjwqgsjh"]
// let sposdjgsdd =
//  arr.splice(arr.length-1,1)
// console.log(arr)


let str = "my coydb is insida"

// ["gjss"
//     "xx"
//     "vsfhd"
//     "78"
''
// ]

// let vhd = str.split(" ")
// console.log(vhd)
// console.log(vhd.join(" "))


// let arr= ["jgjcsa", "jgjhd",
// "677"
// ]
// // jgjcsa jgjhd 677

// let gdadjsg = arr.join(" gjjh")
// console.log(gdadjsg)




// 1.Question: Given a string "_Hello_,_World_,_JavaScript_", split the string into an array of individual words without the underscores.

// Output: ["Hello", "World", "JavaScript"]

// let a = "_Hello_,_World_,_JavaScript_"

// let b = a.split(",")

// let c = b.map(
//     (v,i,a) =>{
// let f = v.length

// let g = v.slice(1,v.length-1)

// return g

//     }
// )
// console.log(c)
 

// 2.Question: Given an array ['apple', 'banana', 'orange'], join the elements into a single string separated by commas.

// Output: "apple,banana,orange"


// let num = ['apple', 'banana', 'orange']

// let b = `"${num.join(",")}"`
// console.log(b)


// 3.Question: Given a string "JavaScript is awesome!", reverse the order of the characters in the string.

// Output: "!emosewa si tpircSavaJ"


// let a = `"JavaScript is awesome!"`

// let b = a.split("").reverse().join("")

// console.log(b)


// 4.Question: Given an array ['one', 'two', 'three'], convert all the strings in the array to uppercase.

// Output: ["ONE", "TWO", "THREE"]

// let b = ['one', 'two', 'three']
// let g = b.map(

//     (v,i,a)  => {
//                     let c = v.toUpperCase()
// return c
// })
// console.log(g)


// 5.Question: Given a string "_coding_,_is_,_fun_", remove all the underscores and split the string into an array of words.

// Output: ["coding", "is", "fun"]


// let b = "_coding_,_is_,_fun_"
// let s = b.split(",")
// let g = s.map(

//         (v,i,a)  => {
//                       let e = v.slice(1,v.length-1)
//                       return e
//     })
//     console.log(g)


// 6.Question: Given an array ['John', 'Jane', 'Doe'], check if the array contains the string 'Jane'.

// Output: true

// let a = ['John', 'Jane', 'Doe']
// let b =a.includes("Jane")
// console.log(b)

// 7.Question: Given a string "banana", find the index of the first occurrence of the letter 'a'.

// Output: 1

// let a = "banana"
// let b = a.lastIndexOf("a")
// console.log(b)


// 8.Question: Given an array ['foo', 'bar', 'baz'], remove the last element and add 'qux' to the beginning of the array.

// Output: ["qux", "foo", "bar"]

// let a =['foo', 'bar', 'baz']
//  a.unshift("qux")
//  a.pop()
// console.log(a)



// 9.Question: Given a string "The quick brown fox", count the number of words in the string.

// Output: 4

// let b ="The quick brown fox"
// let g = b.split(" ")
// let c=g.length
// console.log(c)

// 10.Question: Given an array [1, 2, 3, 4, 5], return a new array with all elements squared.

// Output: [1, 4, 9, 16, 25]





// 11.Question: Given a string "123-456-7890", extract the substring "456".

// Output: "456"


let g ="123-456-7890"
let b = g.slice(4,7)
console.log(b)


// let str = "india awon match nowy"
// let out = "ndiA #oN atcH o#Y"

// let array = str.split(" ")
// let  store = array.map(

// (v,i,a) => {
//       //let v = "india"   ndiA

    
//             //   let length = v.length
//             //   console.log(length)

          
//             let lastchar = v.charAt(v.length-1)
//             let capital = lastchar.toUpperCase()
//             let cut = v.slice(1,v.length-1)
//             let newString = cut+capital
//             let finalString = newString.replace("w","#")
            
//             //    console.log(firstchar,lastchar,capital,cut,newString,finalString)

//               //console.log("before    ", v , "dhoul eb ndiA")         
//               return finalString


// }

// )

// let result = store.join(" ")
// console.log(result)


// let arr = ["bdscjdg", "gjhdchwedfg"]
// arr[1]

// const person = {
//     name : "sangeetha",
//     age : 24,
//     address :"bettahalli",
//     city : "kunigal"
// }
// // person.city = "gjghgghh"
// person["city"]  = "LHGJHG"
// console.log(person)

// const person = {
//     name : "sangeetha",
//     age : 24,
//     address :"bettahalli",
//     city : "kunigal"
// }

// const animals = {

// }

// // animals["name"] = "sangeetha"
// // animals["age"]  = 24
 
// for (let key in person)
//     {
//         animals[key] = person[key]
        
    
//     }
//     for (let key in animals){

//         console.log(key,animals[key])
//     }



// function number (name)
// {
//     name()
//     console.log("jbhsgjcdjhsc")
 
// }
// number(name)

// function name () {


//     console.log("kjkbcjhsc")
// }




// let  str = "he is gdjd hyu"

// let b =str.charAt(3)
// console.log(b)

// let a = [6,744, "dgdg,", "dgjdh"]
// console.log(a[2])


// let  str = "he is gdjd hyu"
// let b =str.indexOf("i")
// console.log(b)


// let arr = [6, 744, "dgdg,", "dgjdh"]

// let a = arr.findIndex(

//     (v,i,a) => {
//         let condition = v ==  "dgdg,"
//         return condition
  
//     }
//     )
//     console.log(a)



// let  str = "he is gdjd hyu"
// let start = str.indexOf("i")
// let end = str.indexOf("j")
// let b =str.slice(start,end+1)
// console.log(b)

//  let  str = "hefghfghfghfhfhghb       vngjhghgmh hmjhmjhmjb  mngjumh bmnhgmnhu"
//  console.log(str.length)
//  let gg = str.length -1
// let b = str.charAt(gg)
// console.log(b)
//  let d = str.charAt(2)

// let b = []
// let arr = ["a", "b","d", "e"]
// arr[2] = "fghfhgfhg"
// arr.reverse()
// for(let elem of arr){
//     console.log(elem)
//     b.push(elem)
// }

// // let b = arr.splice(2,1,"c")
// console.log(b)

// let str = "fabcdefgh"
// let newstr = "f " + str.slice(0,3) +str.slice(4,str.length) 
// console.log(str)


// let str = "my name is bharth hdgdhdh idodingh shohd heoksy"

// let a = str.split(" ")
// console.log(a.length)

// let arr = [
//     'my',      'name',
//     'is',      'bharth',
//     'hdgdhdh', 'idodingh',
//     'shohd',   'heoksy',
//     ''
//   ]

// let a = arr.join(" ")
// console.log(a)





// let str = "my name is bharth hdgdhdh idodingh shohd heoksy"

// let jaga = str.indexOf("bharth")


// if(jaga == -1)
//     {
//         console.log("not")
//     }else
//     {
//         console.log("here")
//     }


// let arr = [
//     'my',      'name',
//     'is',      'bharth',
//     'hdgdhdh', 'idodingh',
//     'shohd',   'heoksy',
//     ''
//   ]

//   let position = arr.includes("bharth")
//   console.log(position)
//   if(position == true){
//     console,jj:djdg
//   }
// ]else{
//     fdhfdhf
// }



//forach  ABC DEF GHIIU
// function array (num){

// let store = Array.isArray(num)
// return store
// }
// let a = [10,20]
// let b = array(a)
// console.log(b);


// let a = (num) =>{


//     let store = Array.isArray(num)
//     return store

// }
// let b = "hgjhscbbjdhcb"
// let c =a(b)
// console.log(c)


// let arr = ["abc", "def", "ghiu", "fhggfnfn", "dgddgfdgf"]
// arr.forEach(

// (v,i,a) => {

// let b =v.toUpperCase()
// console.log(b)


// }

// )



// //map   Abc Def Ghi

// let arr = ["abc", "def", "ghiu", "fhggfnfn", "dgddgfdgf"]
// let a = arr.map(

// (v,i,a) => {

// let b =v.charAt(0)
// let c = b.toUpperCase()
// let f = v.length
//  let d = v.slice(1,f)
// let s = c + d

// return s


// }


// )
// console.log(a)




//filter ghiu
// let arr = ["abc", "def", "ghiu", "fhggfnfn", "dgddgfdgf"]
// let a = arr.filter(

// (v,i,a) => {

// let b = v.length
// console.log(b,v)
// if (b == 4 ){
// return true
// }else{
// return false
// }



// }


// )
// console.log(a)



let arr = ["abz", "zd", "ghiu", "fhggfnfn", "dgddgfdgf"]
let a = arr.some(

(v,i,a) => {

 let confdyuu = v.indexOf("z") == -1  ? false : true
 console.log("kkk",confdyuu)
 return confdyuu



}


)
console.log(a)







let myArray = [10,20,30,40,50]

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// for (let index in myArray) {
//     console.log(index, myArray[index]);
// }

// for (let value of myArray) {
//     console.log(value);
// }

// const mySet = new Set([1, 2, 3]);

// let a = mySet.has(4)
// console.log(a)

// const mySet = new Set([1, 2, 3]);

// let a = mySet.delete
// console.log(a)
// const sum = myArray.reduce((acc, item) => acc + item, 0);
// console.log(sum);
// const foundItem = myArray.find(item => item > 3);
// console.log(foundItem);
// const allEven = myArray.every(item => item % 2 === 20);
// console.log(allEven);
// output [ ' hi  ghyt', 'jkj  ', 'hufghfhh', '', 'himoo' ]
//const a = " hi  ghyt,jkj  ,hufghfhh,,himoo"
// let result = a.split("")
// console.log(result)
let a = {
    key1: "value1",
    key2: "value2",
}

for (let b in a)
    {
        console.log(b)
    }
    function myFunction ()
    {
        function name()
        {
            
        }
    }





    middleware
  
var let constdiffereence
es6 features
callabck or higher order
lsit higher order fucntion 
differnet for loops 
differnet for each and map
call apply bind
differt ways to create object 
callback hell
promise
afvantage of using promis than callback
async await 
nodejs advantage disadvantage
setimout vs process.next tixk difference
call by value and reference 
spread and rest
deep copy and shallow how u will do 3 ways 
differ arrow function and normal function
diffeerence rest and soap
event emitter 
diffenece no sql and sql
typescript features
what is docker and commands
git commands
waht is authetichation and authorization
jwt token
fs module 3 way sto read and write   fs.readFileSync(path[, options]),
streams
pipe
foregin key index join 
== ===
modules
package.json
cors
dif sql and nosql
what i stypescript and its advantage(inerface enum data type) 
micro service
docker commands
symbol
npm
require
security for api (cors rate limiter vpn sql inkection ssl)
crypto bycrypt

try catch finally
aws
docker

recursion
null vs undefind 
undefined vs not defined


javscript
nodejs
hoisting
closure
settimout setinterval setimeediate process.nexttick
use strict
local vs session vs cookie
undefined null typeof
class
inheritance 
advantage of mongodb
ternary operator
diff monolitic vs microservice
jenkins
aggregation 
status code
diff post vs patch vs put
worker cluster fork spaw exec
this
prototype 
selfinvoke imediate anonyoums fucntion 
destructure
lexical scpe
repl
buffer
open file
mock jest.mock  describe it function exoect to be (it will mock the modul or function)
lsit few array methods
lsit string few methods 
unit test(describe it expect jest mock)
increafe the performance of api  or databse using (index sharding rpelic set)
currying
scope block functional global
event loop
temporal dead zone
oops
libuv v8
event loop event queue call stack callbackqueue
implict an dexplict conversion
nan
use strict
errors
generator
weakset vs set
weakmap vs object vs map
erro handling in nodejs
2 type sof api function (async non block and sync block)
eslint
passport
lsit few npm pacakges
client side sand server side rendering 
scaling 
what is ecmascript
oops
solid principle
javascript events (clck blur etc)
event handler
file upload downlaod (multer)
pagination(smaller chunks or pages. Let's say each page displays 10 search results.)
promis all race any(to fetch api at a time 3api )
difference of this in norml functioan and arrow fucnction 
craete basic hhtp server
create middleware/
orm
















Hoisting : 
Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope.  This means that you can access variables and functions before they are actually declared in the code, 

curring  : curring is a advance technique to transform the function of argument n to n functuins  of one or few arguments

closure : closure are ability of functions to remember the variable and functions and that are declared in its outer scope


settimeout : execute the function some specified  delay time
settimeimmediate : execute the function as soon as the current event loop complete
settimeinterval : execute the functions repetadly after specified delay time (if we given 3 sec )

event loop :allowing efficiently holds multiple opereation without blocking
event emitter  : event emitter is a class and its holds the all the objects that can emitte the event


let const
middleware
file
crea api http
crete api get apiprotested
creet using expres mmogod/mongoose
promise 
call back
map filter 





js ts monngod NoSQL nodejs expressjs  git GitHub bitbucfull 3.6 mean mern  3.6 
sql postgress 2.5
aws 1.5 year  s3 
docker deployment jenkins  1
FE htmk css 1.5

5.5  7.5
i am serving my notice period July 26th is my last working day  if needed tere is possibiky of early relive of 10 days.
hybrif wfjh wfo bangkore  
i have been in the sma ecompay since fresher ity tiem for carrerir groth in the techongies that i have learnt
no


selct * friom student
select * from studed  where name = "abc2"
INSERT INTO student (name, age) VALUES ("bdhhd, 5);
uoaste  student set age - 10 where name = "sgbdjd"
EdLETE FROM tstudename WHERE name = "vsasvnsgdfdn;


crud get insert uodT DELKETE





post  name : bshhs age :6

patch  age :8  updte


put  botgh inet and  uoadte if date uoadet isnr





db.collection.insertOne({ name: "bshsh", age: "66" });
db.collection.insertMany([{ key1: "value1" }, { key2: "value2" }]);

db.collection.find({  });
db.collection.findOne({ name: "abshghss" });


db.collection.updateOne({ name: "bahhsgds" }, { $set: { age: "32tryr32" } });
db.collection.updateMany({ key: "value" }, { $set: { key: "new_value" } });




https:baharshhd/ap/dfgaha
{
  htto:amson
hstsdo:gsodggd
:httpk:ca;ri
}+









monlithic  hava dotnet c c  cc0c0
micro servuex    nodej





application  
  100
     items 20    react 
     payment? 20  nodejs
     bill  20    pyathib 
     image process  java   




pat pricing inns

printer hp lenoveo 



aoi/dev
ui dev  mlops 



api/dev

    printhp elnovo compare throughout/
              api.mlops
                       psos




Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase, regardless of where they are declared in the code. This means that you can access variables and functions before they are actually declared in the code, although their initial values will be undefined. Here's a simplified explanation:







math round floor ciel abs sqrt
datatyoe primitive non primiyive 
== === != !==
string length indexof("sjjg") , split(''), slice, 
aaray  length  indexiod("sfhdd) incused join  slice  splice reverse sort
bool undefined null nan 0 '' tyepeof isarray undifen === null
& |  ++ --
? switch break default
of normal
default annuoynomsus  self nvlovn arrow function difefrne noral vs arraow
  =function vs methords diff     object create {}  shallow deepui 3 ways in keys values entries
for each vs map filter every some reduce from
call back promise await callback hell how over come prmose await

spread rest where u wilkk sue
calss instance static method inherto super get setter 
setdictuong map add dkete size has xlear get foreach differ Map and Object 
local session cookit
call apply bind 

closure cy=uury
erro hanlde

hoisting  undefined local gloabal scope udefubed not defined tempoyial dead zone refeenc sybtax  lexical

strict call by value address 







let arr = [10,20,30,40]
arr.forEach(
    (v,i,a) => {
       
    }
)

let a = arr.map(

(v,i,a) => {
let b = 
    return b
}
)
console.log(a)


let a = arr.filter(

    (v,i,a) => {
        let condition = v 
  if (condition)
    {
return true
    }else{
        return false
    }
    }
    )
    console.log(a)


    

let a = arr.every(

    (v,i,a) => {
        let condition = v 
        return condition
  
    }
    )
    console.log(a)


    let a = arr.findIndex(

        (v,i,a) => {
            let condition = v ==  
            return condition
      
        }
        )
        console.log(a)

        












const arr = [10, 30.3, 20,100,99]

// for (let i = 0; i < arr.length; i++) {
    
//         console.log(i, arr, arr[i], arr.length);
    
// }

// for (var i = 0; i < arr.length; i++) {
//     setTimeout(function () {
//         console.log(i, arr, arr[i], arr.length);
//     }, 3000)
// }


// for (let i = 0; i < arr.length; i++) {
//     setTimeout(function () {
//         console.log(i, arr, arr[i], arr.length);
//     }, 3000)
// }

// for (var i = 0; i < arr.length; i++) {
//     setTimeout( () =>{
//         console.log(i, arr, arr[i], arr.length);
//     }, 3000)
// }



const reduce= arr.reduce((acc, v,i,a) => {
    return acc + v
}, 0) 
console.log(reduce);


let charccters= ['a', 'b', 'f', 'd', 'e', 'f', 'g', 'h', 'i', 'c']
let sortedcharccters = charccters.sort()
console.log(sortedcharccters);  

const sorted = arr.sort()   
console.log(sorted);

const sortedAfter = arr.sort((a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
});

console.log(sortedAfter);


let words = ['apple', 'Banana', 'grape', 'cherry', 'blueberry'];
let sortedwords = words.sort()
console.log(sortedwords);



let sortedWords = words.sort((a, b)=> {
    let lowerA = a.toLowerCase();
    let lowerB = b.toLowerCase();
    if (lowerA < lowerB) {
        return -1;
    }
    if (lowerA > lowerB) {
        return 1;
    }
    return 0;
});
console.log(sortedWords);
 







