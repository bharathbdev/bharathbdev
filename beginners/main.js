const apicall = require("axios")

async function name(){

let myaxios = await apicall.get("http://127.0.0.1:3000/")

console.log(myaxios)

console.log("jdcbfbv",myaxios.data.adress)

}
name()