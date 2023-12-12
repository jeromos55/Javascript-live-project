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
