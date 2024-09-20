const car = {
    brand: 'Toyota',
    showBrand: function() {
      console.log(this.brand);
    }
  };
  
  const bike = { brand: 'Honda' };
  
  // Using bind to create a new function with `this` set to bike
  const showBikeBrand = car.showBrand.bind(bike);
  
  showBikeBrand();  // Output: Honda
  