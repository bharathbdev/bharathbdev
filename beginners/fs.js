const fs = require('fs');


    const store = fs.readFileSync('./Sangeetha/data.txt', 'utf8');
    console.log(store)

fs.readFile('./Sangeeha/data.txt', 'utf8', (err, data) => {
if(err){
    console.log("i goite rhkekhjcdedmcmdwcmb")
}
console.log(data)

});

const data = fs.createReadStream("./new journey/fourth.txt","utf8")
data.on("data",(chunk) => {

console.log(chunk)


})

data.on("error",(error)=>{

console.log(error)

})

data.on("end",()=>{
    console.log("finished")
})

