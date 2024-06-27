// ["_abC_", "_deuuuuuF_","_ghI_"]

let arr = ["abc", "deuuuuf", "ghi"]
let b = arr.map(

(v,i,a) => {

   let s = v.slice(0,2)
   let d = v.charAt(v.length-1)
    let upper = d.toUpperCase()
    let g = "_" + s+upper + "_"
   return g
}

)
console.log(b)















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




// let vhd = str.split(" ")
// console.log(vhd)
// console.log(vhd.join(" "))



// let arr= ["jgjcsa", "jgjhd",
// "677"
// ]
// // jgjcsa jgjhd 677

// let gdadjsg = arr.join(" gjjh")
// console.log(gdadjsg)



let abc = 'india is india countryyyyy bharath'
let num =abc.indexOf('india', 8)
let num2 =abc.lastIndexOf('india')
console.log(num2)
let istherornot = abc.includes('bharagth')
console.log(istherornot)
if(num <= -1){
    console.log("ur strng not forund")
}
else{
    console.log("ur string is founst at " + num )
}

console.log(abc.slice(num,abc.length))


console.log(abc.startsWith("andia"))














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
let bb = g.slice(4,7)
console.log(bb)












let arr2 = ["abz", "zd", "ghiu", "fhggfnfn", "dgddgfdgf"]
let a = arr2.some(

(v,i,a) => {

 let confdyuu = v.indexOf("z") == -1  ? false : true
 console.log("kkk",confdyuu)
 return confdyuu



}


)
console.log(a)



// const allEven = myArray.every(item => item % 2 === 20);
// console.log(allEven);















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