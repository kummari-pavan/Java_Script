// String Methods

//charAt(): Returns the character at a specified index.
let str = "Hello";
let char = str.charAt(1); // 'e'

//charCodeAt(): Returns the Unicode of the character at a specified index.
let str1 = "Hello";
let code = str.charCodeAt(1); // 101 (for 'e')


//concat(): Combines two or more strings.
let str_1 = "Hello";
let str_2 = "World";
let result = str1.concat(' ', str2); // "Hello World"


//includes(): Checks if a string contains a specified value.

let str2 = "Hello World";
let result1 = str.includes("World"); // true

//indexOf(): Returns the index of the first occurrence of a specified value.

let str3 = "Hello World";
let index = str.indexOf("o"); // 4

//slice(): Extracts a part of a string and returns it as a new string.

let str4= "Hello World";
let sliced = str.slice(0, 5); // "Hello"

//split(): Splits a string into an array of substrings.

let str5 = "Hello World";
let arr = str.split(' '); // ["Hello", "World"]

//replace(): Replaces a specified value with another value in a string.

let str6 = "Hello World";
let newStr = str.replace("World", "Everyone"); // "Hello Everyone"


//toUpperCase(): Converts a string to uppercase.
let str7 = "Hello World";
let upperStr = str.toUpperCase(); // "HELLO WORLD"

//toLowerCase(): Converts a string to lowercase.

let str8 = "Hello World";
let lowerStr = str.toLowerCase(); // "hello world"

//trim(): Removes whitespace from both ends of a string.
let str9 = "  Hello World  ";
let trimmedStr = str.trim(); // "Hello World"


//startsWith(): Checks if a string starts with a specified value.
let str10 = "Hello World";
let result2 = str.startsWith("Hello"); // true

//endsWith(): Checks if a string ends with a specified value.
let str11 = "Hello World";
let result3 = str.endsWith("World"); // true

//substring(): Extracts characters between two indices.
let str12 = "Hello World";
let substr = str.substring(0, 5); // "Hello"

//padStart(): Pads the current string with another string until it reaches a given length (from the start).
let str13 = "5";
let paddedStr = str.padStart(3, '0'); // "005"

//padEnd(): Pads the current string with another string until it reaches a given length (from the end).
let str14 = "5";
let paddedStr1 = str.padEnd(3, '0'); // "500"