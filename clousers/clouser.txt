function outer() {
    let name = 'Pavan K';
  
    function inner() {
      console.log(name);  
    }
  
    return inner;
  }
  
  const closureFunc = outer();  
  closureFunc();

//---------------------------------------------------

  function outerFunction() {
    let outerVariable = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVariable); 
    }
  
    return innerFunction;
  }
  
  const closure = outerFunction();
  closure();  

  //--------------------------------------------------

//Data Privacy/Encapsulation:

  function counter() {
    let count = 0;
  
     function inc() {
      count++;
      return count;
    };
    return inc;
  }
  
  const increment = counter();
  console.log(increment());  // Output: 1
  console.log(increment());  // Output: 2
  console.log(increment());  // Output: 3

  //---------------------------------------------------

//   Maintaining State Between Function Calls:

//   Event Handlers/Callback Functions:
  