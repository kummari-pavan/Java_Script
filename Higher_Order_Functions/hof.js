// 1. Function as an Argument

const n = [1, 2, 3, 4, 5];

function double(n) {
    return n ** 2;
}

const pow = n.map(double);

console.log(pow); // Output: [2, 4, 6, 8, 10]


let x=[2,4,6,8,10]
function makeOdd(x){
    return x+1
}
let odd=x.map(makeOdd);
console.log(odd)

let ex=[2,3]
function mul(ex){
    return ex*10
}
let m=x.map(ex);
console.log(m)

// 2. Function Returning a Function
// A function can return another function. This is useful for creating customized or partially applied functions.

// Function that returns another function

function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2); // Creates a function that doubles numbers
const triple = createMultiplier(3); // Creates a function that triples numbers

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15


//3.Array filter() Method

// The filter() method filters elements in an array based on a condition provided by a function.

const numbers = [1, 2, 3, 4, 5];

// Function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

const evenNumbers = numbers.filter(isEven); // Using filter() with the isEven function

console.log(evenNumbers); // Output: [2, 4]


//3.Array reduce() Method

const n1 = [1, 2, 3, 4];

// Using reduce() to sum the numbers
const sum = n1.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum);  // Output: 10