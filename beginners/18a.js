// currying

function add (a) {
    return function(b){
      return a + b;
    }
  }
  
  add(3)(4) 


//closure


  function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())

// 1
// 2
// 3