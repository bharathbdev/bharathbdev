// // let g = "dgjdgjyd"
// // let a = 'shdgj' + 'hshd' + g
// // console.log('......line4', g , a + g)

// //immutab;e
// let a = "                     india is county"
// let gg = a.trim()
// console.log('.../', gg)
// let l = a.length

// a[0] = 'a'
// console.log(a)

// let b = a.slice(1,16)
// console.log(b)
// let aa = a.toLocaleUpperCase()
// let c = aa + b
// console.log(c, a)

// let text = "Please visit Microsoft!  Microsoft";
// let newText = text.replaceAll("Microsoft", "W3Schools");
// console.log(newText)

// let text = "abharat hb&bhar athcbha &rathdef";
// const myArray = text.split("&");
// console.log(myArray)

// let stringggg = myArray.join('$')
// console.log(stringggg)


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