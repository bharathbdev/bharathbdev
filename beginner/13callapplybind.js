let nameObj = { 
	name: "Tony"
} 

let PrintName = { 
	name: "steve", 
	sayHi: function (age) { 
		console.log(this.name + " is " + age + " years old"); 
	} 
} 

PrintName.sayHi()

//bind
 let HiFun = PrintName.sayHi.bind(nameObj); 
 HiFun(42);

//call
 PrintName.sayHi.call(nameObj, 42);

//apply
 PrintName.sayHi.apply(nameObj, [42]);
