'use strict';

const john = {
  year: 1990,
  firstName: 'John',
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};

john.greet();
// undefined because the arrow function hasn't 'this' object so it's a global object.
console.log(this); // golbal object is window object
console.log(this.firstName); // window object has't 'firstName'

var firstName = 'Maria'; // It has a global scope
john.greet(); // so that's 'Hey Maria'
