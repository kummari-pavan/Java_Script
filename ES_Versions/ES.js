//ES6
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//Modularization
//------------------>

//export
//Derived variables
export var name = 'Pavan'
 
var name = 'Pavan';
var age = '22';
export {name, age};
 
//Derived constant
export const sqrt = Math.sqrt;
 
//derived function
export function myModule(someArg) {
  return someArg;
}

//import
import {myModule} from 'myModule';//Structure assignment is used
import {name,age} from 'test';
 
//An import statement can import default functions and other variables at the same time.
import defaultMethod, { otherMethod } from 'xxx.js';

//***********************************************************************************************************************

//Arrow Function
//------------------>


const greet = () => {
    console.log("Hello!");
  };
  
greet(); 

const greet1 = (a,b) => {
    return a+b
  };
  
greet1(10,20); 

//************************************************************************************************************************ */

//default parameters
//------------------>


const test = (a='10',b='20',c='0')=>{
    return a+b+c
}
 
console.log(test('10','20','10')) //40
console.log(test('10','20'))     //30
console.log(test('40'))         //60


//************************************************************************************************************************ */

//template string

//Do not use template string:
var first="Pavan";
var Last="K"
 
var name = 'My Name is ' + first + ' and' + last + '.'
console.log(name)
 
//Use template string:
 
var name = `my name is ${first} ${last}.`
console.log(name)

//************************************************************************************************************************ */

//spread operator

// Spread in arrays: Copies and merges arrays.
// Spread in objects: Copies and merges objects.
// Spread in functions: Passes elements as function arguments.

//Arrays: You can create a shallow copy of an array without modifying the original.

const arr1 = [1, 2, 3];
const arr2 = [...arr1];  // [1, 2, 3]

//Merging Arrays: The spread operator can merge arrays into a single array.
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const merged = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]

//Passing Arguments to Functions: You can use the spread operator to pass an array of arguments into a function.

function add(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
console.log(add(...numbers));  // 6

//Copying and Merging Objects: You can copy or merge object properties in a new object.

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3};
const mergedObj = {...obj1, ...obj2};  // {a: 1, b: 2, c: 3}

//Destructuring Arrays or Objects: The spread operator can also be used to destructure elements while keeping the remaining ones.

const [first, ...rest] = [1, 2, 3, 4];
console.log(first);  // 1
console.log(rest);   // [2, 3, 4]

//************************************************************************************************************************ */

//Promise


//************************************************************************************************************************ */


//2 new features of ES7 (2016)
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//includes(): Checks if an array contains a certain value.
let arr15 = [1, 2, 3];
arr.includes(2); // true


let arr = ['react', 'angular', 'vue'];
 
if (arr.includes('react'))
{
    console.log('react existence');
}


//************************************************************************************************************************ */
// Exponential Operator (**)

console.log(2 ** 10);