
// // callback


function callback1(callback2){
  console.log("111")
  callback2(callback3)
}

function callback2(callback3){
  console.log("222")
  callback3()
}

function callback3(){
  console.log("333")
}


function run(param1, callback1){
  console.log(param1)
  callback1(callback2)
}

run("start", callback1)



//promise



// function callback1() {
//   return new Promise((resolve) => {
//     console.log("111");
//     resolve();
//   });
// }

// function callback2() {
//   return new Promise((resolve) => {
//     console.log("222");
//     resolve();
//   });
// }

// function callback3() {
//   return new Promise((resolve) => {
//     console.log("333");
//     resolve();
//   });
// }

// function run(param1,callback1 ) {
//   console.log(param1);
//   callback1()
//     .then(() => callback2())
//     .then(() => callback3())
//     .then(() => {
//       console.log("Done");
//     })
//     .catch((error) => {
//       console.error("An error occurred:", error);
//     });
// }

// run("start", callback1);



//await
// async function run(param1) {
//     console.log(param1);
//     await callback1();
//     await callback2();
//     await callback3();
//     console.log("Done");
//   }
  
//   run("start").catch((error) => {
//     console.error("An error occurred:", error);
//   });
  