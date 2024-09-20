console.log('Task 1');  // This runs first
console.log('Task 2');  // This runs second
console.log('Task 3');  // This runs third

const fs = require('fs');
const data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);  // This runs after the file is read
console.log('Task finished');

console.log('Start');    // This runs first
console.log('Processing...');  // This runs second
console.log('End');      // This runs last


console.log('Task 1: Start');
for (let i = 0; i < 1000000000; i++) {
    // Simulating a time-consuming task with a large loop
}

console.log('Task 2: End');
