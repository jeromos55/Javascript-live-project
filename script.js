'use strict';

// the OOP in javascript
const Person = function (firstName, birthday) {
  // instance properties
  this.firstName = firstName;
  this.birthday = birthday;

  // never do this
  // this.calcAge = function () {
  //   const today = new Date();
  //   const age = today.getFullYear() - this.birthday.getFullYear();
  //   return age;
  // };
};

const John = new Person('John', '12/18/1978');
console.log(John);

// 1. new {} is created
// 2, function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', '5/12/2000');
const jack = new Person('Jack', '3/7/2012');
console.log(matilda, jack);

const jay = 'Jay';

console.log(jack instanceof Person);
console.log(jay instanceof Person);
