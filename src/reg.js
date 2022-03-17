The search() method uses an expression to search for a match, and returns the position of the match.

    var msg = "Hello John";
var n = msg.search(/John/i); // 6





The replace() method is used to return a modified string where the pattern is replaced.

    var msg = "Hello John";
var n = msg.replace(/John/i, "Buttler"); // Hello Buttler




var text = "Learn JS one by one";
var pattern = /one/g;
var result = text.match(pattern); // one,one



var pattern = /you/;
console.log(pattern.test("How are you?")); //true





var pattern = /you/;
console.log(pattern.exec("How are you?")); //["you", index: 8, input: "How are you?", groups: undefined]








function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
toTitleCase("good morning john"); // Good Morning John




Regular Expressions provide a group of patterns in order to match characters. Basically they are categorized into 3 types,

    Brackets: These are used to find a range of characters. For example, below are some use cases,
    [abc]: Used to find any of the characters between the brackets(a,b,c)
    [0-9]: Used to find any of the digits between the brackets
(a|b): Used to find any of the alternatives separated with |
Metacharacters: These are characters with a special meaning For example, below are some use cases,
\d: Used to find a digit
\s: Used to find a whitespace character
\b: Used to find a match at the beginning or ending of a word
Quantifiers: These are useful to define quantities For example, below are some use cases,
n+: Used to find matches for any string that contains at least one n
n*: Used to find matches for any string that contains zero or more occurrences of n
n?: Used to find matches for any string that contains zero or one occurrences of n
