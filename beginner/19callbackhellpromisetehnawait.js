
function firstFunction(callback1) {
    console.log("11111")
    callback1();

}

function secondFunction(callback2) {
    console.log("22222")
    callback2();

}

function thirdFunction(callback3) {
    console.log("333")
    callback3();

}

// Callback hell
firstFunction(
    () => {


        secondFunction(() => {


            thirdFunction(() => {
                console.log('done')
            })
        })


    }
);



const myprise1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("111111")
    }, 3000)

})


const myprise2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("2222")
    }, 3000)

})


const myprise3 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("3333")
    }, 3000)

})

// myprise1.then((value) => {

//     console.log(value)
//     return myprise2

// }).then((value) => {

//     console.log(value)
//     return myprise3

// })
//     .then((value) => {

//         console.log(value)


//     })
// .catch((error) => {
//     console.log("error insns", error)
// })


async function iwiwiwiiw() {
    let value1 = await myprise1
    console.log(value1)
    let value2 = await myprise2
    console.log(value2)
    let value3 = await myprise3
    console.log(value3)

}
iwiwiwiiw()