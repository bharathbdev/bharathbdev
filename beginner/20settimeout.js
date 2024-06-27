
//setinterval
let a = setInterval(() => {
    console.log('Delayed function execution');
  }, 10);

  clearInterval(a)

//settimeout
let b = setTimeout(() => {
    console.log('Delayed function execution');
  }, 10);

  clearTimeout(b)

  //setIMMEDIATE
    let c = setImmediate(() => {
        console.log('Delayed function execution');
    }); 
    clearImmediate(c)
//process.nextTick
process.nextTick(() => {
    console.log('Delayed function execution');
  });





  


const arr = [10, 30.3, 20,100,99]


for (let i = 0; i < arr.length; i++) {
    
        console.log(i, arr, arr[i], arr.length);
    
}

for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log(i, arr[i], arr.length);
    }, 3000)
}

// //0 10 5
// // 1 30.3 5

for (let i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log(i, arr[i], arr.length);
    }, 3000)
}

for (var i = 0; i < arr.length; i++) {
    setTimeout( () =>{
      // it will create its own scope of variable
        console.log(i, arr, arr[i], arr.length);
    }, 3000)
}
