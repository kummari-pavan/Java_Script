//Function Hoisting
msg(); 
function msg() {
  console.log("How Are You!");
}

//var variable Hoisting
console.log(x); 
var x = 5;
console.log(x);  

//let and const variables Hoisting

console.log(y);  // ReferenceError: Cannot access 'y' before initialization
let y = 100;
console.log(y);  // Output: 10

console.log(z);  // ReferenceError: Cannot access 'z' before initialization
const z = 20;
console.log(z);  // Output: 200
