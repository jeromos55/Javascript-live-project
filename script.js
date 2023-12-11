'use strict';

//------------------------------
// Function default parameters
//------------------------------

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
