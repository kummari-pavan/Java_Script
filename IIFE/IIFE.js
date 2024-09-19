//syntax of an IIFE 
(function() {
    // Your code here
})();

//Example
(function() {
    console.log("Hi Pavan !! This function runs immediately!");
})();

//--------------------------------------------------------------

//Example: Encapsulating Variables
(function() {
    var message = "Hello, Pavan!";
    console.log(message); //Hello Pavan!
})();

console.log(message);  // Error: message is not defined

//--------------------------------------------------------------

//IIFE with Parameters

(function(name) {
    console.log("Hello,  " + name);
})("Pavan");

//--------------------------------------------------------------
//Creating a Private Scope
(function() {
    var count = 0;
    // count is only available within this IIFE
    count++;
    console.log(count);  // Output: 1
})();
// Outside, count is not accessible
console.log(count);  // Error: count is not defined

//--------------------------------------------------------------
// Avoiding Name Conflicts
(() => {
    console.log("Function1");
})();

(() => {
    console.log("Function2");
})();
(() => {
    console.log("Function3");
})();