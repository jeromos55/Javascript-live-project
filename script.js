'use strict';

console.log(this); // window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefine
};

calcAge(1991);

// in arrow functions

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); // window object
};

calcAgeArrow(2000);

// in an object

const john = {
  year: 1990,
  calcAge: function () {
    console.log(this); // this object itself
    console.log(2037 - this.year); // It's 47 becouse this.year = john.year
  },
};

john.calcAge();
