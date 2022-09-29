// console.log(x);
// console.log(y);
// var x = 10;
// let y = 10;







// var x = 10;
// function z() {
//     let x = 20;
//     console.log("normal")
//     console.log(this.x);
//     console.log(x);
// }
//
// var someVar = function () {
//     let x = 20;
//     console.log("functionarrow")
//     console.log(this.x);
//     console.log(x);
// }
//
// var someArrowVar = () => {
//     let x = 20;
//     console.log("arrow")
//     console.log(this.x);
//     console.log(x);
// }
// z();
// someVar()
// someArrowVar()
// console.log(x);
// console.log(this.x);











// var x = 30;
// var testObj = {
//     x: 20,
//     inner: {
//         x: 40,
//         print: function () {
//             console.log("inner");
//             console.log(x);
//             console.log(this.x)
//             console.log(testObj.x)
//         }
//     },
//     print: function () {
//         console.log("outer");
//         console.log(x);
//         console.log(this.x)
//     }
// }
//
//function print() {
   // console.log(x)
   // console.log(this);
//}
//
// testObj.print()
//testObj.inner.print()
//print();










// function q() {
//     var w = 10
// }
// q();
// console.log(w);








// const arr = [1, 2, 3, 4]
// for (var i = 0; i < arr.length; i++) {
//     setTimeout(function () {
//         console.log(i, arr[i], arr.length);
//     }, i *1000);
// }




// const arr = [1, 2, 3, 4]
// for (let i = 0; i < arr.length; i++) {
//     setTimeout(function () {
//         console.log(i, arr[i], arr.length);
//     }, i *1000);
// }


//
// function myColour(){
//     colour = 'blue'
//
// }
// myColour()
// console.log(colour)



// function color(){
//     if(true){
//         var color1= 'red';
//         const color2 = 'green';
//         let color3 = 'blue';
//
//     }
//     console.log(color1);  // red
//     console.log(color2);  //  ReferenceError: color is not defined
//     console.log(color3);  //  ReferenceError: fruit2 is not defined
// }
//
// color();
