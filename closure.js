
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