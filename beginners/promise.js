
const mypromise = new Promise((req,res)=>
{
    setTimeout(()=>{
          req("bdfvbfdjhvbh")
    },3000)
})

// mypromise.then((value)=>{
// console.log(value)

// }).catch((error)=>{
// console.log(error)
// })
async function name (){
    let store = await mypromise
    console.log(store)
    }name()
