let charccters= ['a', 'b', 'f', 'd', 'e', 'f', 'g', 'h', 'i', 'c']
let sortedcharccters = charccters.sort()
console.log(sortedcharccters);  
const arr = [10, 30.3, 20,100,99]
const sorted = arr.sort()   
console.log(sorted);

const sortedAfter = arr.sort((a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
});

console.log(sortedAfter);


let words = ['apple', 'Banana', 'grape', 'cherry', 'blueberry'];
let sortedwords = words.sort()
console.log(sortedwords);



let sortedWords = words.sort((a, b)=> {
    let lowerA = a.toLowerCase();
    let lowerB = b.toLowerCase();
    if (lowerA < lowerB) {
        return -1;
    }
    if (lowerA > lowerB) {
        return 1;
    }
    return 0;
});
console.log(sortedWords);







  let numArray = [140000, 104, 99];
console.log(numArray.sort())


const a = [10,30,50,40,20]

const artr = a.sort((a,b)=>{


  if(a<b){
    return -1
  }
if(a>b)
  {
    return 1
  }

})
console.log(arr)