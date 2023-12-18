'use strict';

//-----------------------------------------------
// Immediately invoked function expression (IIFE)
//-----------------------------------------------

const runOnce = function () {
  console.log('This will never run again.');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again.');
  const isPrivate = 23;
  console.log(isPrivate);
  var notPrivate = 46;
})();

// console.log(isPrivate); // It's will be error message
// console.log(notPrivate); // It's will be error message too

{
  var isNotPrivate = 35;
}

console.log(isNotPrivate);

const runOnce2 = () => console.log('This will ALSO never run again.');
runOnce2();

// IIFE
(() => console.log('This will ALSO never run again.'))();

//------------
// Closures
//------------

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};

const booker = secureBooking();
console.log(booker); // This function has access and can modify the passengerCount variable
booker();
booker();
booker();

console.dir(booker);

console.log(secureBooking);
console.dir(secureBooking);
