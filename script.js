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

// ES6 Classes

// class expression
// const PersonCl  = class{};

// class declaration

class PersonCl {
  constructor(fullName, birthDay) {
    this.fullName = fullName;
    this.birthDay = birthDay;
  }

  // instance method
  // method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthDay);
  }

  greet() {
    console.log(`Hey, ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthDay;
  }

  // set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
  // static method
  static hey() {
    console.log('Hey there 🖐️');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey, ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1960);

PersonCl.hey();
// walter.hey();

const account = {
  owner: 'John',
  movement: [200, 530, 120, 300],

  get latest() {
    return this.movement.slice(-1).pop();
  },

  set latest(mov) {
    this.movement.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movement);

// object create
const PersonalProto = {
  calcAge() {
    console.log(2037 - this.birthDay);
  },

  init(firstName, birthDay) {
    this.firstName = firstName;
    this.birthDay = birthDay;
  },
};

const steven = Object.create(PersonalProto);
console.log(steven);

steven.name = 'Steven';
steven.birthDay = 1990;
steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonalProto);

const sarah = Object.create(PersonalProto);
console.log(sarah);
sarah.init('Sarah', 1991);
sarah.calcAge();

// ---------------------------------------
// Inheritance between 'classes': constructor functions

const PersonCl2 = function (firstName, birthDay) {
  this.firstName = firstName;
  this.birthDay = birthDay;
};

PersonCl2.prototype.calcAge = function () {
  console.log(2037 - this.birthDay);
};

const Student = function (firstName, birthDay, course) {
  PersonCl2.call(this, firstName, birthDay);
  this.course = course;
};

// linking prototype
Student.prototype = Object.create(PersonCl2.prototype);
// bad practice it make the prototype of Student to be the same as PersonCl2.prototype
// Student.prototype = PersonCl2.prototype;

Student.prototype.introduce = function () {
  console.log(`Hi, I'm ${this.firstName} and I'm a ${this.course} student`);
};

const mike = new Student('Mike', 1990, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof PersonCl2);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// ---------------------------------------
// Inheritance ES6 classes

class Student2 extends PersonCl2 {
  // always needs to happen first!
  constructor(firstName, birthDay, course) {
    super(firstName, birthDay);
    this.course = course;
  }

  introduce = function () {
    console.log(`Hi, I'm ${this.firstName} and I'm a ${this.course} student`);
  };

  calcAge() {
    console.log(
      `I'm ${2037 - this.birthDay} years old, but as a student I feel like ${
        2037 - this.birthDay + 10
      }`
    );
  }
}

const martha = new Student2('Martha', 1989, 'Biology');
console.log(martha);
martha.introduce();
martha.calcAge();

// ---------------------------------------
// Inheritance between 'classes': object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthDay);
  },

  init(firstName, birthDay) {
    this.firstName = firstName;
    this.birthDay = birthDay;
  },
};

const steven2 = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthDay, course) {
  PersonProto.init.call(this, firstName, birthDay);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`Hi, I'm ${this.firstName} and I'm a ${this.course} student`);
};

const john = Object.create(StudentProto);
john.init('John', 1991, 'Computer Science');
john.introduce();
john.calcAge();

// --------------------------------------------
// another class example
// --------------------------------------------

// 1. public fields
// 2. private fields
// 3. public methods
// 4. private methods
// ( there is also the static version)

class Account {
  // 1. public fields (instances)
  locale = navigator.language;

  // 2. private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this.#pin = pin;
    //this._movements = [];
    //this.local = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3. public methods

  // public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(amount) {
    // if (this.#approveLoan(amount)) {  // in the chrome browser not accepting this syntax
    if (this._approveLoan(amount)) {
      this.deposit(amount);
      console.log(`Loan approved, ${amount} deposited`);
    }
  }

  // 4. private methods

  static helper() {
    console.log('I am a helper method');
  }
  // #approveLoan(amount) {  // in the chrome browser not accepting this syntax
  _approveLoan(amount) {
    return true;
  }
}

const acc1 = new Account('John', 'USD', 1234);

// acc1._movements.push(300);
// acc1._movements.push(-120);

acc1.deposit(300);
acc1.withdraw(120);
acc1.requestLoan(1000);
console.log(acc1);

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(1000));
acc1.requestLoan(1000);

Account.helper();
