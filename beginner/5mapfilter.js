






let arr = [10,20,30,40]

arr.forEach(
    (v,i,a) => {
        console.log(v,i,a)
    }
)

let aa = arr.map(

(v,i,a) => {
let b =  v * 2
    return b
}
)



let b = arr.filter(

    (v,i,a) => {
        let condition = v == 20
  if (condition)
    {
return true
    }else{
        return false
    }
    }
    )
   



let c = arr.every(

    (v,i,a) => {
        let condition = v >10
        return condition
  
    }
    )
   

    let d = arr.some(

    (v,i,a) => {
        let condition = v >10
        return condition
  
    }
    )


    let e = arr.findIndex(

        (v,i,a) => {
            let condition = v ==  20
            return condition
      
        }
        )
        

    

let acc = 0
arr.forEach(
  (v,i,a)=>{
          acc = acc +v
        
  }
)
console.log(acc)

const reduce= arr.reduce((acc, v,i,a) => {
    return acc + v
}, 0) 
console.log(reduce);






















































