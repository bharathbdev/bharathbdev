//add elements to the array
const fruits = ["Banana", "Orange",  "gdaajd", "gdajhd", "Apple"];
fruits.push("Lemon");
console.log(fruits)
console.log(fruits.length)
fruits.unshift('firststst')
console.log(fruits)
console.log(fruits.length)

//remove elements from the array
let h = fruits.pop()
console.log(h)
console.log(fruits)
console.log(fruits.length)
fruits.shift()
console.log(fruits)
console.log(fruits.length)
delete fruits[1]
console.log(fruits)
console.log(fruits.length)

//add or remove elements from the array
frnits[2] = "hshh"
console.log(fruits)
console.log(fruits.length)
fruits.splice(2,0,"fhfghfhsef", "fdhfghdfweghf")
console.log(fruits)
console.log(fruits.length)

//flat
const myArr = [
    [1,2],
    [3,4],
    [5,6]
];
console.log(myArr[2][1])
const newArr = myArr.flat();
console.log(newArr)

//find index of element
let arr = [6, 744, "dgdg,", "dgjdh"]

let g = arr.findIndex(

    (v,i,a) => {
        let condition = v ==  "dgdg,"
        return condition
  
    }
    )
    console.log(g)

//find trur or false
let isther = fruits.includes('Apple')
console.log(isther)

//sort and reverse
fruits.sort();
console.log(fruits)
fruits.reverse()
console.log(fruits)

//find max and min
let a = [2,1,8,5]
console.log(Math.max(...a))
console.log(Math.min(...a))

//conver to aray
 const myArr2 = Array.from("ABCDEFG");
 console.log(myArr2)

//join  
 let text = "abharat hb&bhar athcbha &rathdef";
const myArray = text.split("&");
console.log(myArray)

let stringggg = myArray.join('$')
console.log(stringggg)



let str4 = "he is gdjd hyu"
let ba=str4.charAt(str4.length-1)
console.log(ba)