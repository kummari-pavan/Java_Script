const person = {
    name: 'Pavan',
    greet: function() {
      console.log('Heyy, ' + this.name);
    }
  };
  
  const anotherPerson = { name: 'Charan' };
  
  // Using call to change `this` to anotherPerson
  person.greet.call(anotherPerson); // Output: Hello, Charan