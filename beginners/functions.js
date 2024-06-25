import {age,name} from './1.js'

console.log("hiii")
var name = 'vjhggjhgjh'
console.log("..line3",name)
var age = 25
console.log(".....outside name",name )
function displayContent(name2,age2){
    console.log(".....inside name",name )
    console.log(".....inside name2",name2 )
     let expectedSentense = name2 + "is" + age2
     console.log('...10',expectedSentense)
     return expectedSentense
}
//console.log(".....outside name2",name2 )
let expectedOutput = displayContent(name,age)
console.log(expectedOutput)
