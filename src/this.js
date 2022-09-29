// let x = {}
//
// let foo = function () {
//     this.hello = "hi";
//     return this;
// }
//
// x.bar = foo;
// console.log(x.bar().bar().hello);



// const person = {
//     name: "Faheem",
//     sm:"Twitter",
//     foo: ()=>{
//         let newName
//         return this.newName;
//     }
// }

//console.log(person.foo() === person);

// console.log(person.foo());


// let a = 10
//
// const person = {
//     name: "Faheem",
//     sm:"Twitter",
//     foo: function () {
//         return this.name;
//     }
// }
//
// //console.log(person.foo() === person);
//
// console.log(person.foo());










// var x = {
//     a:"god"
// }

// console.log("outsidebkjb", this === window)
// function xyz() {
//     console.log("outside", this === window) // this will work only in browser
//    //  in nodejs env it will point to the nodejs module
//   // this.inside = function (){
//   //     console.log("inside", this.x)
//   // }
// }
// //let b = new xyz()
// // console.log(b.inside());
// xyz()


















var a = 3
var b = 4
var obj = {
    a: 1,
    b:2,
    add : function(){
        console.log("a  " , this.a  + "b" + this.b  +" a + b === " + this.a + this.b)
    }
}

obj.add()
let dummy =obj.add
dummy()











var a = 3
var b = 4
var obj = {
    a: 1,
    b:2,
    add : function() {
        return function () {
            console.log("a  ", this.a + "b" + this.b + " a + b === " + this.a + this.b)
        }
    }
}


obj.add()()






var a = 3
var b = 4
var obj = {
    a: 1,
    b:2,
    add : function() {
        this.a = 5
        this.b = 6
        return function () {
            console.log("a  ", this.a + "b" + this.b + " a + b === " + this.a + this.b)
        }
    }
}


let g =obj.add()
g()




var a = 3
var b = 4
var obj = {
    a: 1,
    b:2,
    add : function() {
        this.a = 5
        this.b = 6
        return function () {
            console.log("a  ", this.a + "b" + this.b + " a + b === " + this.a + this.b)
        }
    }
}


let g =obj.add
g()()



var a = 3
var b = 4
var obj = {
    a: 1,
    b:2,
    add : function() {
        this.a = 5
        this.b = 6
        return function () {
            console.log("a  ", this.a + "b" + this.b + " a + b === " + this.a + this.b)
        }
    }
}


obj.add()()











var a = 3
var b = 4
var obj = {
    a: 1,
    b:2,
    add : function() {
        this.a = 5
        this.b = 6
        return function () {
            console.log("a  ", this.a + "b" + this.b + " a + b === " + this.a + this.b)
        }
    }
}


let g =obj.add
g()()










var a = 3
var b = 4
var obj = {
    a: 1,
    b:2,
    add : function() {
        return function () {
            console.log("a  ", this.a + "b" + this.b + " a + b === " + this.a + this.b)
        }
    }
}


let g =obj.add
g()()



var a = 3
var b = 4
var obj = {
    a: 1,
    b:2,
    add : function() {
        this.a = 5
        this.b = 6
        return function () {
            console.log("a  ", this.a + "b" + this.b + " a + b === " + this.a + this.b)
        }
    }
}


obj.add()()



var a = 3
var b = 4
var obj = {
    a: 1,
    b:2,
    add : function() {
        function abc () {
            console.log("a  ", this.a + "b" + this.b + " a + b === " + this.a + this.b)
        }
        abc()
    }
}


obj.add()











var a = 3
var b = 4
var obj = {
    a: 1,
    b:2,
    add : function() {
        console.log(this.a)
        this.a = 7
        this.b = 8
        function abc () {
            console.log("a  ", this.a + "b" + this.b + " a + b === " + this.a + this.b)
        }
        abc()
    }
}


obj.add()



var a = 3
var b = 4
var obj = {
    a: 1,
    b:2,
    add : function() {
        console.log(this.a)
        this.a = 7
        this.b = 8
        function abc () {
            console.log("a  ", this.a + "b" + this.b + " a + b === " + this.a + this.b)
        }
        abc()
    }
}



let d = obj.add
console.log(d())











const person = {
    myname:"Faheem",
    sm:"Twitter",
    bio: function(){
        var a = 6
        let b = 9
        this.c = 8
        setTimeout(function(){
            console.log(this.myname);
            console.log(this.a);
            console.log(b)
            console.log(this.c);
        }, 100)
    },
}
person.bio();




const person = {
    myname:"Faheem",
    sm:"Twitter",
    bio: function(){
        var a = 6
        this.c = 8
        let b = 9
        setTimeout(function(){
            console.log(this.myname);
            console.log(this.a);
            console.log(b)
            console.log(this.c);
        }, 100)
    },
}
let a = person.bio;
a()














var b = 'anup'
const person = {
    myname:"Faheem",
    sm:"Twitter",
    bio: function(){
        console.log( "bazhz",this.b);

        function child(){
            console.log( this.b);
        }


        child()
    }
}

person.bio()


