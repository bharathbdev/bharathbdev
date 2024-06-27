const letters = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c)
letters.add("c")
letters.clear();


// List all entries
let text = "";
letters.forEach (myfun)

function myfun(value, index, arr) {
    text += value;
  }


const letters2 = new Set(["a","b","c", "c"]);
let answer = letters.has("c");
letters.delete("a");
let x = letters.size
console.log(answer)










// Create a Map
const fruits2 = new Map();

// Set Map Values
fruits2.set("apples", 500);
fruits2.set("bananas", 300);
fruits2.set("oranges", 200);

let numb = fruits2.get("apples");
fruits2.has("apples");

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

fruits.size;

fruits.delete("apples");
fruits.clear();


// List all entries
let text2 = "";
fruits.forEach (myfun)

function myfun(value, index, arr) {
    text2 += value;
  }