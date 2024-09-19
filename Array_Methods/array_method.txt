//push(): Adds one or more elements to the end of an array.
let arr1 = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]


//pop(): Removes the last element from an array and returns that element.
let arr2 = [1, 2, 3];
arr.pop(); // [1, 2]


//shift(): Removes the first element from an array and returns it.
let arr3 = [1, 2, 3];
arr.shift(); // [2, 3]


//unshift(): Adds one or more elements to the beginning of an array.
let arr4 = [1, 2, 3];
arr.unshift(0); // [0, 1, 2, 3]


//concat(): Merges two or more arrays.
let a1 = [1, 2];
let a2 = [3, 4];
let res = arr1.concat(arr2); // [1, 2, 3, 4]


//splice(): Adds/removes elements from an array.
let arr5 = [1, 2, 3, 4];
arr.splice(2, 1, 99); // [1, 2, 99, 4]
// Removes 1 element at index 2 and adds 99


//slice(): Returns a shallow copy of a portion of an array.
let arr6 = [1, 2, 3, 4];
let newArr = arr.slice(1, 3); // [2, 3]


//forEach(): Executes a provided function once for each array element.
let arr7 = [1, 2, 3];
arr.forEach(num => console.log(num)); // 1 2 3


//map(): Creates a new array with the results of calling a function for every element.
let arr8 = [1, 2, 3];
let doubled = arr.map(num => num * 2); // [2, 4, 6]


//filter(): Creates a new array with all elements that pass the test.
let arr9 = [1, 2, 3, 4];
let filtered = arr.filter(num => num > 2); // [3, 4]


//reduce(): Reduces the array to a single value by applying a function.
let arr10 = [1, 2, 3, 4];
let sum = arr.reduce((acc, num) => acc + num, 0); // 10


//find(): Returns the first element that passes the test.
let arr11 = [1, 2, 3, 4];
let found = arr.find(num => num > 2); // 3


//findIndex(): Returns the index of the first element that passes the test.
let arr12 = [1, 2, 3, 4];
let ind = arr.findIndex(num => num > 2); // 2


//some(): Tests whether at least one element passes the test.
let arr13 = [1, 2, 3];
let r = arr.some(num => num > 2); // true


//every(): Tests whether all elements pass the test.
let arr14 = [1, 2, 3];
let result = arr.every(num => num > 0); // true


//includes(): Checks if an array contains a certain value.
let arr15 = [1, 2, 3];
arr.includes(2); // true


//indexOf(): Returns the first index at which a value is found.
let arr16 = [1, 2, 3];
let index = arr.indexOf(2); // 1


//join(): Joins all elements of an array into a string.
let arr17 = [1, 2, 3];
let str = arr.join('-'); // "1-2-3"


//reverse(): Reverses the order of elements in an array.
let arr18 = [1, 2, 3];
arr.reverse(); // [3, 2, 1]


//sort(): Sorts the elements of an array.
let arr19 = [3, 1, 2];
arr.sort(); // [1, 2, 3]