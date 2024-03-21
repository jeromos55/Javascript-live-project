'use strict';

// the OOP in javascript
const Person = function (firstName, birthday) {
  // instance properties
  this.firstName = firstName;
  this.birthday = birthday;

  //NEVER DO THIS
  // this.calcAge = function () {
  //   console.log(2037 - this.birthday);
  // };
};

const John = new Person('John', 1978);
console.log(John);

// 1. new {} is created
// 2, function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2000);
const jack = new Person('Jack', 2012);
console.log(matilda, jack);

const jay = 'Jay';

console.log(jack instanceof Person);
console.log(jay instanceof Person);

// prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthday);
};

jack.calcAge();
matilda.calcAge();

console.log(jack.__proto__);
console.log(jack.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jack));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObject

Person.prototype.species = 'Homo Sapiens';
console.log(jack, matilda);
console.log(jack.species, matilda.species);

console.log(jack.hasOwnProperty('firstName'));
console.log(jack.hasOwnProperty('species'));

// prototypes inheritance
console.log(jack.__proto__);
// Object.prototype ( top of prototype chain)
console.log(jack.__proto__.__proto__);
console.log(jack.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

// example
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
