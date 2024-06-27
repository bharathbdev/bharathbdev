// currying

function add (a) {
    return function(b){
      return a + b;
    }
  }
  
  console.log(add(3)(4) ) //7


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

console.log(innerFunc()) //1
console.log(innerFunc()) //2
console.log(innerFunc()) //