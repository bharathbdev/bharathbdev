const myaxios = require('axios') 


// const myPromise = new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//        // resolve("hello i ma ngxgdnsadn")
//        reject("errororioror")
//      },3000)
// })

// myPromise.then((value)=>{
//     console.log(value)
// }).catch((err)=>{
//       console.log(err)
// }) 





myaxios.get(' http://127.0.0.1:3000/').then((value)=>{
    console.log(".....value acmememmem")
    let a = value.data
console.log(a)
console.log(".....value enddddddddddd")
}).catch((errr)=>{
console.log("my vswvhsgfqwmjhfmjsmjdbmsabcmsabmcbasmcbmj")
})





// async function jdsgjh(){
//     try{
//     let myasync = await myaxios.get(' http://127.0.0.1:3000/')
//     console.log(myasync)}
//     catch(err){
//               console.log("vdasn",err)
//     }
// }
// jdsgjh()