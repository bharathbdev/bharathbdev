// const http = require("http")


// const hostname = "127.0.0.1"
// const port = 3001

// const customMiddleware = ((req,res,next)=>{
// try{
//     console.log("vbxhvbfjhvb")
//     // throw Error
//     next()
// }catch(error){
//     console.log("bvjhrbjhrdbrg",error)
// }
// })

// const server = http.createServer((req,res) => {

//     customMiddleware(req,res,(
//         req,res,()=>{
//             if(req.method == "GET" && req.url == "/"){

//                 let a = {
//                     name: "sangeetha"
//                 }
//                 res.writeHead(200,{"Context-Type":"apllication/json"})
//                 res.end(JSON.stringify(a))
            
//             }else{
            
//                      res.writeHead(400,{"Context-Type":"text/plain"})
//                      res.end('jbkjfbkfjbkjf')
//             }
//         }
//     ))
//     })

// server.listen(port,hostname,
//     () =>{

//         console.log("http://"+ hostname + ":" + port + "/")
//     }
// )


const express = require("express")

const app = express()
const port = 3001


const customMiddleware = (req,res,next )=>{
    console.log("11111")
    next()
}
app.get("/",(req,res)=>{
    console.log("22222")
    res.send("public route")
})
app.use(customMiddleware)

app.get("/protected",(req,res)=>{
    console.log("3333")
    res.send("protected route")
})

app.get("/vbdfhv",(req,res)=>{
    console.log("444")
    res.send("protected route")
})
app.get("/nxzbckhdbvkh",(req,res)=>{
    console.log("888")
    res.send("protected route")
})
app.get("/dkbvbkdf",(req,res)=>{
    console.log("777")
    res.send("protected route")
})




app.listen(port,()=>{
    console.log("server startes a port 3001")
})