const numbers = [1, 2, 3];

function sum(a, b, c) {
  return a + b + c;
}

// Using apply to pass arguments as an array
console.log(sum.apply(null, numbers));  // Output: 6
