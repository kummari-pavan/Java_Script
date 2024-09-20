// for...in Loop
// The for...in loop is used to iterate over the properties (keys) of an object or array. It iterates over the keys of an object.


// for (key in object) {
//   // code to be executed
// }


// Example (Object):

let person = { name: "John", age: 25, city: "New York" };
for (let key in person) {
  console.log(key + ": " + person[key]);  
  // Outputs: name: John, age: 25, city: New York
}

// Example (Array):

let arr = [10, 20, 30, 40];
for (let index in arr) {
  console.log(index + ": " + arr[index]);  
  // Outputs: 0: 10, 1: 20, 2: 30, 3: 40
}

// Explanation: In the case of an object, for...in loops through the keys (properties). In the case of an array, it loops through the indices.

let cls={name:"pavan",id:"R180185",company:"wipro"}

for(let obj in cls){
    console.log(obj+":"+cls[obj])
}