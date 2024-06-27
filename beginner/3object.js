

const person = new Object()
person.firstName = "Sanheetha";
person.lastName = "B C"
person['age'] = 45;

console.log(person["age"]+ ""+person.firstName)
delete person["age"];
console.log(person)






const car = {
    color:"white",
    name:"xuv700",
    weight:"1000",
  address : {
    area : "Basweshvara nagar",
    city : "bangalore"
  },
    fullName : function (){
        return (this.color.toLowerCase() + " "+ this.name.toLowerCase());
       
    }
    
}
console.log(car.fullName())
console.log(car.address.area)















 

 

