

// setTimeout(myFunction, 3000);
// setInterval(myFunction, 3000);
// function myFunction() {
//   console.log( "I love You !!")
// }

  
  let myPromise = new Promise(

    function(myResolve2, myReject2) {
    
        let a=256
        let b=256
        if(a==b){
           setTimeout(myResolve2("yes both are eqla"), 3000);
           
        }
        else{
          setTimeout(myReject("no swkhehfmjhmjfh"), 3000);
       
        }
    }
  );
  
  myPromise.then(
    function(value) { console.log(value)},
    function(error) { console.log(error)}
  );



  const myPromise = new Promise((resolve,reject)=>{
    setTimeout(function(){ resolve("I love You !!"); }, 3000);
    //setTimeout(function(){ reject("I love You !!"); }, 3000);
  })
  myPromise.then(
    (value)=>{
    console.log(value)
  }
  
  )









// const myPromise = new Promise(
//     function(myResolve, myReject) {
//     setTimeout(function(){ myResolve("I love You !!"); }, 3000);
//   });
  
//   myPromise.then(
//     function(value) {
//     console.log(value)
//   }

// );


// async function myDisplay() {
//     let myPromise = new Promise(
//         function(resolve) {
//       setTimeout(function() {resolve("I love You !!");}, 3000);
//     }
// );
//     let a = await myPromise;
//     console.log(a)
//   }
  
//   myDisplay();






  // let numArray = [140000, 104, 99];
// console.log(numArray.sort())

var numArray = [140000, 104, 99];
numArray = numArray.sort(myfun);

function myfun(a, b) { 
     return b - a;  }

console.log(numArray)



