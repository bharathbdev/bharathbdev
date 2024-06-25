const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "    ";
}


console.log(txt)




// // const numbers1 = [45, 4, 9, 16, 25];
// // const numbers2 = numbers1.map(myFunction);

// // function myFunction(value, index, array) {
// //   return value * 2;
// // }

// // console.log(numbers2)

// // const numbers = [45, 4, 9, 16, 25];
// // const over18 = numbers.filter(myFunction);

// // function myFunction(value, index, array) {
// //   return value > 18;
// // }

// // console.log(over18)


// every
// some

// const myArr = Array.from("ABCDEFG");





const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);



// function myFunction(total, value, index, array) {
//   return total + value;
// }


const totalPriceReduce = numbers.reduce(
    (sum, value, index, array ) => 
        {
        
        return sum +value
    }, 0

);
console.log(totalPriceReduce)