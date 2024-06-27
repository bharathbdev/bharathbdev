

let arr = ["bscbh", "vcvh", "dog"]
arr.forEach((v,i,a) => {
      console.log(v,i,a)
});

for(let i =0; i< arr.length;i++){
    let b = arr[i]
    console.log(i,b)
}

for(let ele of arr){
    console.log(ele)
}

for(let key in arr){
    let c = arr[key]
    console.log(key, c)
}






let obj ={

    a:"abc",
    b: "bcgch",
    c:"fgjfgj"
}


for(let key in obj ){
    let gh = obj[key]
   console.log(key, gh)
}

let s = Object.values(obj)
console.log(s)

let ss = Object.keys(obj)
console.log(ss)

let ovd = Object.entries(obj)
console.log(ovd)

for(let elem of ovd){
    console.log(elem[0], elem[1]) 
}
















