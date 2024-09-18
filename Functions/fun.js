//Function Declaration

function greet() {
    console.log("Hello!");
  }
  
greet();

function greet(a,b) {
console.log(a+b);
}

greet(10,20);

//Function Expression

const greet = function() {
    console.log("Hello!");
  };
  
greet(); 

//Arrow Functios

const greet = () => {
    console.log("Hello!");
  };
  
greet(); 

const greet = (a,b) => {
    return a+b
  };
  
greet(10,20); 
  