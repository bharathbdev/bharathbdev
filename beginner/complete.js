// function myFunction(a,b)
// {
// let multi = a*b
// return multi
// }
// let b = 10
// let d =10
// let c = myFunction(b,d)
// console.log(c)

// function myFunction(a,b=10)
// {
// let multi = a*b
// return multi
// }
// let a =4
// let d =6
// let c = myFunction(a,d)
// console.log(c)

// const multiply = (b,d)=>{

// let multi = b*d
// return multi
// }
//     let b = 10
//     let d =10
//     let c = multiply(b,d)
//     console.log(c)


// const multiply = (b,d=10)=>{

//     let multi = b*d
//     return multi
//     }
//         let b = 4
//         let c = multiply(b)
//         console.log(c)
    
// function myFunction(callback){
//     console.log("good girl")
//     callback()
// }
// myFunction(callback)

// function callback(){
//     console.log("sangeetha")
// }

// function myFunction(callback){
//     console.log("good girl")
//     callback()
// }
// myFunction(()=>{
//     console.log("sangeetha")
// })


// const promise = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
// resolve("sangeetha")
// // reject("vfgh")
//     },2000)
  
// })

// promise.then(
//     (value)=>{
//         console.log(value)
//     }
// ).catch((err)=>{
    
//     console.log("dnbvjhfvbdf",)
// })

// async function name(){
// try{
//     let a = await promise
//     console.log(a)}
//     catch(err){
//         console.log(err)
//     }
// }
// name()

// let arr = [10,20,30,40,50]
// for(let i =0; i< arr.length;i++){
//     let a = arr[i]
//     console.log(i,a)
// }
// let arr = [10,20,30,40,50]
// arr.forEach((v,i,a) => {
//       console.log(i,v)
// });
// let arr = [10,20,30,40,50]
// for(let element of arr){
//     console.log(element)
// }
// let arr = [10,20,30,40,50]
// for(let key in arr){
//     let value = arr[key]
//     console.log(key, value)
// }

// let person ={

//    name : "sangeetha",
//    age : 24,
//    address : "bangalore"
// }

// for(let key in person ){
//     let index = person[key]
//    console.log(key, index)
// }

// let person ={

//     name : "sangeetha",
//     age : 24,
//     address : "bangalore"
//  }
// let values = Object.values(person)
// console.log(values)
// let person ={

//     name : "sangeetha",
//     age : 24,
//     address : "bangalore"
//  }
// let dim2 = Object.entries(person)


// for(let elemt of dim2)
//     {
//         console.log(elemt[0], elemt[1])
//     }

// let person ={

//     name : "sangeetha",
//     age : 24,
//     address : "bangalore"
//  }
// let keys = Object.keys(person)
// console.log(keys)



// let arr = [40,30,10,20]
// var ab =0

// arr.forEach(
//     (v,i,a) => {
    
//          ab = ab + v
//         console.log(ab,v,ab)
//     }
// )

// let arr = [40,30,10,20]
// let a = arr.map(
//     (v,i,a)=>{

//         let b = v + 10
//         return b
//     }
// )
// console.log(a)

// let arr = [40,30,10,20]
// let a = arr.filter(
//     (v,i,a)=>{

//      let b = v>10
//      if(b){
//         return true
//      }else
//      {
//         return false
//      }
//     }
    
// )
// console.log(a)

// let arr = [40,30,10,20]
// let a = arr.some(
//     (v,i,a)=>{

//         let b = v>10
//         return b
//     }
// )
// console.log(a)

// let arr = [40,30,10,20]
// let a = arr.every(
//     (v,i,a)=>{

//         let b = v>30
//         return b
//     }
// )
// console.log(a)

// let arr = [40,30,10,20]
// let ab = arr.reduce(
//     (acc,v,i,a)=>{
               
//         let bc = acc + v
// return bc
//     },0
// )
// console.log(ab)

// let arr = ["abc","def","ghe"]

// let a = arr.findIndex(

//     (v,i,a)=>{
 
//         let bc = v == "def"
// return bc
//     }
// )
// console.log(a)

// let arr = ["abc","def","ghe"]
// let b = arr.includes("defg")
// if(b == true)
//     {
//         console.log("edhe")
//     }
//     else{
//         console.log("ella")
//     }
// // console.log(b)

// let arr = ["abc", "def", "ghe"];
// delete arr[2]
// // delete arr[arr.indexOf("ghe")];
// // arr = arr.filter(element => element !== undefined);
// console.log(arr);

// let arr = ["abc", "def", "ghe"];
// arr.splice(2,0,"xyz")
// console.log(arr)

// let arr = ["abc", "def", "ghe"];
// arr[1]= "xyz"
// console.log(a)

// let arr=[70,40,30,20]

//  let b = Math.max(...arr)
// console.log(b)

// let arr=[70,40,30,20]

//  let b = Math.min(...arr)
// console.log(b)

// let arr = [70,40,30,20]
// let b = arr
// console.log(b)

// let arr = [70,40,30,20]
// let b = []

// for(let e of arr)
//     {
//         b.push(e)
//     }
// console.log(b)   


// let str = "my name is dhoni"

// let a = str.charAt(1)
// console.log(a)

// let str = "my name is dhoni"
// let b = str.indexOf("d")
// console.log(b)

// let str = "my name is dhoni"
// let b = str.slice(,)
// console.log(b)

// let str = "mY namE iS dhonI"
// let b = str.split("")
// console.log(b)

//  OUTPUT = "_My _Name _Is _Dhoni"
// let str = "mY namE iS dhonI"
// let b = str.split(" ")
// let d = b.map(
//     (v,i,a)=>{
             
//        let c = v.length
//        let f = v.charAt(0)
//        let uppercasefirst = f.toUpperCase()
//        let lastchartcter = v.charAt(v.length-1)
//        let lastcharwithlowercase = lastchartcter.toLowerCase()
//        let kathrs = v.slice(1,v.length-1)
//        let d = "_"+ uppercasefirst + kathrs +  lastcharwithlowercase
//        return d
//     }
// )
// let result = d.join(" ")
// console.log(result)






// output let str = "name bharth age 26 address laggere"
// let str = "name bharth age 26"
// let newstr = str + "address laggere"
// console.log(newstr)

// output  let arr = ["name","bharath","age",26, "addrss", "lagegr"]
// let arr = ["name","bharath","age",26]
// arr.splice(4,0,"addrss","leggere")
// console.log(arr)

// output let obj = {
//     name : "bharath",
//     age : 26,
//     addre:"laggere"
//}

// let obj = {
//     name : "bharath",
//     age : 26
// }
// obj['address'] = "leggere";
// console.log(obj)


// OUTPUT let str = "name bharth age 26"

// let str = "name bharth age 26 address laggere"

// let dele = str.split(" ")
//  dele.splice(4,2)
// let b =  dele.join(" ")
// console.log(b)

// OUTPUT let arr = ["name","bharath","age",26, "addrss", "lagegr"]

// let arr = ["name","bharath","age",26, "addrss", "lagegr"]
// arr.splice(4,2)
// console.log(arr)

// OUTPUT let obj = {
//     name : "bharath",
//     age : 26,
//     address: "laGGERE"
// }

// let obj = {
//         name : "bharath",
//         age : 26,
//         address: "laGGERE"
//     }

//     delete obj.address;
//     console.log(obj);

//output bharath
// let str = "name bharth age 26 address laggere"
// let result = str.slice(5,11)
// console.log(result)


//output BHARATH
// let arr = ["name","bharath","age",26, "addrss", "lagegr"]
// console.log(arr[1])

//OUTPUT bharath

// let obj = {
//         name : "bharath",
//         age : 26,
//         address: "laGGERE"
//     }

//     console.log(obj.name)

    //OUTPUT bharath replace sharath

// let obj = {
//     name : "bharath",
//     age : 26,
//     address: "laGGERE"
// }

// obj['name'] = "sharath";
// console.log(obj)

//output BHARATH replace sharath 
// let arr = ["name","bharath","age",26, "addrss", "lagegr"]
// arr[1]= "sharth"
// arr.splice(1,1,"sharath")
// console.log(arr)

//output bharath replace sharath
// let str = "name bharth age 26 address laggere"
// let newstre = str.slice(0,3) + "'shaarzatyn"+str.slice (10,str.lemgth-1)

// let arr = [1,2,101,10]
// let a = arr.sort((a,b)=>{

//     if(a>b){
//         return 1
//     }
//     if(a<b){
//         return -1
//     }
// })
// console.log(a)

// let words = ['apple', 'Banana', 'grape', 'Cherry', 'blueberry'];
// let b = words.sort(
//     (a,b)=>{
                
//         let g = a.toLowerCase()
//         let j = b.toLowerCase()
//         if(g>j)
//             {
//                 return 1
//             }
//             if(g<j)
//                 {
//                     return -1
//                 }
//     }
// )
// console.log(b)


// const fs = require("fs")

// const dat = fs.readFileSync("./index.js","utf8")
// console.log(dat)

// fs.readFile('./test.js', 'utf8', (err, data) => {
// if(err){
//     console.log("sangeetha")
// }
// console.log(data)

// });


// const data = fs.createReadStream("./index.js","utf8")
// data.on("data",(chunk) => {

// console.log(chunk)


// })

// data.on("error",(error)=>{

// console.log(error)

// })

// data.on("end",()=>{
//     console.log("finished")
// })


// const event = require("events")

// const Emitter = new event

// Emitter.on("vxhcvdjscjhcbjkcs",(chunk) => {

// console.log(chunk)


// })

// Emitter.emit("vxhcvdjscjhcbjkcs", "vdhgavghdcvsvcnxznhczxnxmbc mzxmn")


