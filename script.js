'use strict';

const rest1 = {
  name: 'Capri',
  numGuest: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Govanni Rossi',
};

const rest3 = {
  name: 'Capri',
  numGuest: 20,
};

const rest4 = {
  name: 'La Piazza',
  owner: 'Govanni Rossi',
};

const rest5 = {
  name: 'Capri',
  numGuest: 34,
};

const rest6 = {
  name: 'La Piazza',
  owner: 'Govanni Rossi',
};

// OR assignment operator
console.log('--- OR assignments ---');

rest1.numGuest = rest1.numGuest || 10; // rest1.numGuest is true so it's will be 20
rest2.numGuest = rest2.numGuest || 10; // rest2.numGuest isn't exist so it's false and will be 10

// same as above
rest3.numGuest ||= 10;
rest4.numGuest ||= 10;

console.log(rest1);
console.log(rest2);
console.log(rest3);
console.log(rest4);

// nullish assignment operator (null. undefined)
console.log('--- nullish assignments ---');

rest5.numGuest ??= 10;
rest6.numGuest ??= 10;

console.log(rest5); // rest5.numGuest = 0 so it's will be 0
console.log(rest6); // rest6.numGuest = undefined so it's will be 10
