// do...while Loop
// The do...while loop is similar to the while loop, but it ensures that the code block is executed at least once, even if the condition is false from the beginning.

// do {
//   // code to be executed
// } while (condition);

ar=["a","b","c","d"]
let i = ar.length-1;
do {
  console.log(ar[i]);  
  i--;
} while (i>=0);
