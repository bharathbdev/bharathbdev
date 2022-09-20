
1

invalid
let a =10
let a =100










valid
let a =10
{
    let a =100
    console.log("inside",a)
}
console.log("outside",a)

inside 100
outside 10






let a =10
{
    a =100
    console.log("inside",a)
}
console.log("outside",a)


inside 100
outside 100











valid
let a =10
function block(){
    let a =100
    console.log("inside",a)
}
block();
console.log("outside",a)


inside 100
outside 10




let a =10
function block(){
    a =100
    console.log("inside",a)
}
block();
console.log("outside",a)


inside 100
outside 100






2

var a =10
var a =100
console.log(a)

100




var a =10
{
    var a =100
    console.log("inside",a)
}
console.log("outside",a)


inside 100
outside 100



var a =10
{
    a =100
    console.log("inside",a)
}
console.log("outside",a)


inside 100
outside 100





{
    var a =100
    console.log("inside",a)
}
console.log("outside",a)
inside 100
outside 100



var a =10
function block(){
    var a =100
    console.log("inside",a)
}
block();
console.log("outside",a)

inside 100
outside 10



var a =10
function block(){
    a =100
    console.log("inside",a)
}
block();
console.log("outside",a)

inside 100
outside 100


invalid
function block(){
    var a =100
    console.log("inside",a)
}
block();
console.log("outside",a)



3
invalid
var a =10
let a =100




valid
var a =10
{
    let a =100
    console.log("inside",a)
}
console.log("outside",a)


inside 100
outside 10





valid
var a =10
function block(){
    let a =100
    console.log("inside",a)
}
block();
console.log("outside",a)


inside 100
outside 10


4
invalid
let a =10
var a =100


invalid
let a =10
{
    var a =100
    console.log("inside",a)
}
console.log("outside",a)


var a =10
{
    var a =100
    console.log("inside",a)
}
console.log("outside",a)

inside 100
outside 100



var a =10
{
    let a =100
    console.log("inside",a)
}
console.log("outside",a)

inside 100
outside 10



valid
let a =10
function block(){
    var a =100
    console.log("inside",a)
}
block();
console.log("outside",a)



inside 100
outside 10








var a =10
function god (){
    var a =100
    console.log("inside",a)
}
god()
console.log("outside",a)

inside 100
outside 10











































valid
var a = 10;
var a =1000;


invalid
let a =10;
let a= 1000;


invalid
let a =10;
var a= 1000;

var stored in gloabscope let in script





invalid
let a =10
function block(){
    var a =10
}




valid
var a =10
function block(){
    let a =10
}

let a =10
function block(){
    let a =10
}

var a =10
function block(){
    var a =10
}





invalid

function block(){
    var a =10
}
console.log(a)




shawoding

var a =10 //it is in global
{
    var a =100// it is in global
}
consol.log(a)// 100


let a =10 // it is in script
{
    let a =100 // it is in block
}
consol.log(a)// 10



lexical env is local memory and it's parent
scope means who and all consume the variable b

allocating mememeory is called hoisting

time when let a is created and inititlazed a=10 is called tem zed zone if u try to acces in tem zed zone referbec error

function along with lexical scope is called closure




