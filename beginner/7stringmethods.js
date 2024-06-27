
//concat
let g = "dgjdgjyd"
let aa = 'shdgj' + 'hshd' + g
console.log('......line4', g , aa + g)

// //trim
let a = "                     india is county"
let gg = a.trim()
console.log('.../', gg)

//length
let l = a.length


//immutable
a[0] = 'a'
console.log(a)

//slice
let bb = a.slice(1,16)
console.log(bb)

//toUpperCase
let aaa = a.toLocaleUpperCase()
let c = aaa + b
console.log(c, aaa)

//replace
let text2 = "Please visit Microsoft!  Microsoft";
let newText = text2.replaceAll("Microsoft", "W3Schools");
console.log(newText)

//split
let text = "abharat hb&bhar athcbha &rathdef";
const myArray = text.split("&");
console.log(myArray)

let stringggg = myArray.join('$')
console.log(stringggg)

//startsWith
console.log(abc.startsWith("andia"))
//charAt
console.log(stringggg.charAt(0))
//charCodeAt
console.log(stringggg.charCodeAt(0))
//indexOf
console.log(stringggg.indexOf('a') )
//lastIndexOf 
console.log(stringggg.lastIndexOf('a'))



//compare array and string methods


//to get charcter by using position

let  str4 = "he is gdjd hyu"
let ba=str4.charAt(3)
console.log(ba)

let a = [6,744, "dgdg,", "dgjdh"]
console.log(a[2])







// to fin the index by using a character

let  str = "he is gdjd hyu"
let b =str.indexOf("i")
console.log(b)


let arr = [6, 744, "dgdg,", "dgjdh"]
let a = arr.findIndex(

    (v,i,a) => {
        let condition = v ==  "dgdg,"
        return condition
  
    }
    )
    console.log(a)

  