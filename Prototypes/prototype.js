//Example: Prototype Basic Example  --> Like inheritance

function Person(name, Mentor) {
    this.name = name;
    this.Mentor = Mentor;
    
    // student()
    // Mentor()
}

Person.prototype.student = function() {
    console.log("Hello, my name is " + this.name);
};
Person.prototype.Mentor=function(){
    console.log("Hello, My mentor Name is"+this.Mentor);
}

const person1 = new Person("Pavan","Ms.Smitha Gaikwad");

person1.student();  // Output: Hello, my name is Alice
person1.Mentor(); //output: Hello, My Mentor Name is Ms.Smitha Gaikwad


// 1.Person(name, age) is a constructor function. It defines the name and age properties for objects created from it.
// 2.Person.prototype.student() adds a student() method to the Person prototype.
// 3.When we create a new object person1, it has access to the student() method because it is linked to the Person.prototype.

//________________________________________________________________________________________________________________________________

//***********************************************> [Doubt]

// How Prototype Chain Works

// JavaScript uses something called the prototype chain to look up properties and methods. If you try to access a property or method on an 
// object and it doesn’t exist on that object, JavaScript will look at the object’s prototype, and then the prototype of the prototype, and 
// so on until it finds the property or reaches the end of the chain.

console.log(person1.hasOwnProperty('student')); // Output: false
console.log(person1.__proto__.hasOwnProperty('student')); // Output: true

/*__proto__: This is an internal property of all objects. It refers to the object's prototype.*/

// sayHello() is not defined directly on person1, but JavaScript finds it in the prototype chain (in Person.prototype).