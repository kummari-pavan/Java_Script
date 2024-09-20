// for Loop
// The for loop repeats a block of code a certain number of times, based on a condition.


// for (initialization; condition; increment/decrement) {
//   // code to be executed
// }

// Example:--------------------------------------------

for (let i = 0; i < 5; i++) {
  console.log(i);  // Outputs: 0, 1, 2, 3, 4
}

// let i = 0: Initializes the loop counter i.
// i < 5: Runs the loop as long as i is less than 5.
// i++: Increments i by 1 after each iteration.

var a=[1,2,3,4,5]
for (let i=-1; i<-5;i--){
    console.log(a[i])
}

var s=[10,4,2,7,8,1]
let l=[]

for(let i=0; i<6; i++){
    if(s[i]<s[i+1]){
        l.push(s[i])
        console.log(l)
    }
    
}
