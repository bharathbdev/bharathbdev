What steps would you take to find the missing number in an integer array?

    function getMissingNo(a, n) {

        let total = Math.floor((n + 1) * (n + 2) / 2);
        for (let i = 0; i < n; i++)
            total -= a[i];
        return total;
    }

    // Driver Code

    let arr = [ 1, 2, 4, 5, 6 ];
let n = arr.length;
let miss = getMissingNo(arr, n);
document.write(miss);





find out exactly which elements are duplicates


const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

const set = new Set(numbers);

const duplicates = numbers.filter(item => {
    if (set.has(item)) {
        set.delete(item);
    } else {
        return item;
    }
});





What steps would you take to identify all pairs of an integer array if the sum is equal to a given number?

    <script>


        // JavaScript program to check if given array
        // has 2 elements whose sum is equal
        // to the given value

        // Javascript implementation using Hashing

        function printpairs(arr, sum)
        {
            let s = new Set();
            for (let i = 0; i < arr.length; ++i)
        {
            let temp = sum - arr[i];

            // checking for condition
            if (s.has(temp)) {
            document.write(
            "Pair with given sum "
            + sum + " is (" + arr[i]
            + ", " + temp + ")");
        }
            s.add(arr[i]);
        }
        }

        // Driver Code

        let A = [ 1, 4, 45, 6, 10, 8 ];
        let n = 16;
        printpairs(A, n);

    </script>



    How do you find the first unrepeated character of a given string?


    function firstNonRepeatedCharacter(string) {
        return string.split('').filter(function (character, index, obj) {
            return obj.indexOf(character) === obj.lastIndexOf(character);
        }).shift();
    }

    console.log(firstNonRepeatedCharacter('aabcbd'));






first repeated character in a string javascript
function firstRepeatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str.charAt(i)) !== str.lastIndexOf(str.charAt(i))) {
            return str.charAt(i)
        }
    }
    return 'no results found'
}




How do you find the maximum occurring character in a given string?

var getMax = function (str) {
    var max = 0,
        maxChar = '';
    str.split('').forEach(function(char){
        if(str.split(char).length > max) {
            max = str.split(char).length;
            maxChar = char;
        }
    });
    return maxChar;
};



anagram
function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
        console.log('Invalid Input');
        return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
        console.log("True");
    } else {
        console.log("False");
    }
}
checkStringsAnagram("indian","ndiani")







prime


// program to check if a number is prime or not

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}


prime range



// program to print prime numbers between the two numbers

// take input from the user
const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}






fiboonice

// program to display fibonacci sequence using recursion
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

// take nth term input from the user
const nTerms = prompt('Enter the number of terms: ');

if(nTerms <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}


factorial
// program to find the factorial of a number

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}




// program to replace all line breaks in a string with <br>
const string = `I am Learning JavaScript.
JavaScript is fun.
JavaScript is easy.`;

const result = string.replace(/(\r\n|\r|\n)/g, '<br>');

console.log(result);





pair of numbers sum up to k


const findTwoNum = ((arr, value) => {
    let result = [];
    for(let i= 0; i< arr.length-1; i++) {
        if(arr[i] > value) {
            continue;
        }
        if(arr.includes(value-arr[i])) {
            result.push(arr[i]);
            result.push(value-arr[i]);
            break;;
        }
    }
    return result;
});
let arr = [20,10,40,50,60,70,30];
const value = 120;
console.log(findTwoNum(arr, value));




Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
    Example:
Input: [-2,1,-3,4,-1,2,1,-5,4],
    Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

const maxSubArray = (nums) => {
    // initiate two variable, maxSum for total max, sum for current max
    let maxSum = -Infinity
    let currentSum = 0
    // iterate through the nums, store sub-problems result
    for(let i = 0; i < nums.length; i++){
        //cumulating answers to the top

        //compare currentSum add current number
        //with current number and store the maximum value
        currentSum = Math.max(nums[i], currentSum + nums[i])

        //compare maxSum with currentSum and store the greater value
        maxSum = Math.max(currentSum, maxSum)

    }
    return maxSum
}




Longest substring without repeating characters (JavaScript)

var lengthOfLongestSubstring = function (s) {
    // Initialise an array to store the running characters and a longest string length variable
    let currentString = [];
    let longestStringLength = 0;

    // Loop through the provided string
    for (let i = 0; i < s.length; i++) {
        // Attempt to get the current character's position in the current string
        const currentCharacterPosition = currentString.indexOf(s[i]);

        // Check if the current character exists in the current string
        if (currentCharacterPosition !== -1) {
            // Chop the array off after the occurence of the character
            currentString.splice(0, currentCharacterPosition + 1);
        }

        // Add the current character to the array
        currentString.push(s[i]);

        // Store the current string length if bigger than the existing record
        longestStringLength = Math.max(
            longestStringLength,
            currentString.length
        );
    }

    return longestStringLength;
};

longest palindrome
function isPalindrome(s) {
    //var rev = s.replace(/\s/g,"").split('').reverse().join('');  //to remove space
    var rev = s.split('').reverse().join('');
    return s == rev;
}

function longestPalind(s) {
    var maxp_length = 0,
        maxp = '';
    for (var i = 0; i < s.length; i++) {
        var subs = s.substr(i, s.length);
        if (subs.length <= maxp_length) break; //Stop Loop for smaller strings
        for (var j = subs.length; j >= 0; j--) {
            var sub_subs = subs.substr(0, j);
            if (sub_subs.length <= maxp_length) break; // Stop loop for smaller strings
            if (isPalindrome(sub_subs)) {

                maxp_length = sub_subs.length;
                maxp = sub_subs;

            }
        }
    }
    return maxp;
}




leap year
#include <stdio.h>
int main ()
{
    int year;
    scanf("%d",&year);

    if(year % 400 == 0 || (year % 4 == 0  && year % 100 != 0))
        printf("%d is a Leap Year",year);

    else
        printf("%d is not a Leap Year",year);

    return 0;
}
