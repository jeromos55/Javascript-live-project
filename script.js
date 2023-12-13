'use strict';

//------------------------------
// Function default parameters
//------------------------------

console.log('--- Function default parameters ---');
const bookings = [];
const createBooking = function (flightNum, numPassengers, price) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// no default parameters this is the way to some problems
createBooking('LH123');

const createBookingWithDefault = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// create an object with default parameters and there aren't any undefined values here
createBookingWithDefault('LH123');
createBookingWithDefault('LH123', 2);
createBookingWithDefault('LH123', 8);
createBookingWithDefault('LH123', null, 1000);

//-------------------------------------------------
// How passing arguments works value vs. Reference
//-------------------------------------------------

console.log('--- How passing arguments works value vs. Reference ---');
const flight = 'LH123';
const john = {
  name: 'John Smith',
  passport: 345345353,
};

const checkIn = function (flightNum, passenger) {
  const flight = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 345345353) {
    console.log('Checked in!');
  } else {
    console.log('Wrong passport!');
  }
};

checkIn(flight, john);
console.log(flight); // LH123 because the flightNum is different the flight
console.log(john); // the name is 'Mr. John Smith'

// Is the same as doing ...
const flightNum = flight;
const passenger = john; // we passing the preference to the passenger variable

const newPassport = function (person) {
  // we passing the preference to the newPassport function and this is same as the john object
  person.passport = Math.trunc(Math.random() * 10000000000000);
};

newPassport(john);
console.log(john);
checkIn(flight, john);

// So Javascript doesn't have passing by preference, only passing by value, even though looks like it's passing by preference. So There are languages like C++, where you can pass a reference to any value, instead of the value itself.

//------------------------------------------
// Functions accepting callback functions
//------------------------------------------

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWorld = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

// Higher-order functions
console.log('--- Higher-order functions ---');
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript the best!', upperFirstWorld);
transformer('Javascript the best!', oneWord);

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5); // click the browser anywhere

// -----------------------------
// Functions returning function
// -----------------------------

console.log(' --- Functions returning function ---');
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetingHey = greet('Hey');
console.log(greet);
greetingHey('John');
greetingHey('Steven');

greet('Greet')('Steve');

const greetArr = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};
greetArr('Hello')('Jessica');

const greetArr2 = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr2('Hi')('Robert');

//------------------------------
// The call and apply method
//------------------------------

console.log(' --- The call and apply method ---');
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'John Travolta');
lufthansa.book(635, 'John Heard');
console.log(lufthansa);

const euroWings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

// Call method

const book = lufthansa.book;
// book(153, 'John Heard'); // this will be error because 'this' keyword points to nowhere

book.call(euroWings, 234, 'John Heard'); // this call 'book' function from lufthansa object and the 'this' keywords pointing to the euroWings object
console.log(euroWings);

book.call(lufthansa, 635, 'John Reed'); // this call 'book' function from lufthansa object and the 'this' keywords pointing to the lufthansa object
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 234, 'Marry Cooper');
console.log(swiss);

// Apply method this is same as the Call method but it can apply multiple data simultaneously

const flightData = [836, 'George Cooper']; // array object
book.apply(swiss, flightData); // apply an array object
console.log(swiss);

book.call(swiss, ...flightData); // this is same as above so it is a better way to apply an array object
