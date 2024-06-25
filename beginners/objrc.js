let abc = {
    name : "bharyah",
    age: 4,
    address: {
        street : 'vnhsgnsn'},
    print: function(){
         let statemnet = this.name + "issssss" + this.age
         return statemnet
    }
}
console.log(abc.address.street)
// let calledValue = abc.print()
// console.log(calledValue)
delete abc.address
let anotheobj = abc //shallow copy
anotheobj.name = "sangeth"
console.log(abc.name)


3
//deep copy 
let anotheobj = JSON.parse(JSON.stringify(abc) )
let anotheobj = [...abc]
let anotherobj = Object.assign({},abc)
// abc.gender = 'male'
// abc['job'] = "gjhgjgdjhfd"


// let abc = new Object()
// abc.age = "djjfjf"

// console.log(abc.address.state)

// for(let key in abc){
//     console.log(abc[key], key)
// }

let values = Object.values(abc)

// for(let element of values){
//     console.log(element)
// }

// let keys = Object.keys(abc)

// for(let element of keys){
//     console.log(element)
// }

//let keysandValues = Object.entries(abc)
// console.log(keysandValues[4][1])



// for(let element of keysandValues){
//     let key = element[0]
//     let value = element[1]
//     console.log(key, value)
// }