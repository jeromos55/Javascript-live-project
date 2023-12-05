'use strict';

//Maps has key, value pairs but every items can be deifferent types opposite the object items type.

console.log('--- Maps ---');

const rest = new Map();
rest.set('name', 'Clasico Italiano');
rest.set(1, 'Firenze', 'Italy');
rest.set(2, 'Lisbon', 'Portugal');
console.log(rest);

const rest2 = new Map();
rest2
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open. :)')
  .set(false, 'We are closed. :(');

console.log(rest2);
console.log(rest2.get('categories'));
console.log(rest2.get(true));
console.log(rest.get('name'));

const time = 21;
console.log(rest2.get(time > rest2.get('open') && time < rest2.get('close')));

const time2 = 8;
console.log(rest2.get(time2 > rest2.get('open') && time2 < rest2.get('close')));

console.log(rest2.has('categories'));
console.log(rest2.size);

rest.delete(2);
console.log(rest);

// rest2.clear();
// console.log(rest2);

rest2.set([1, 2], 'Test');
console.log(rest2);
console.log(rest2.get(1));
console.log(rest2.get(2));
console.log(rest[(1, 2)]);

const arr = [1, 2];
rest2.set(arr, 'Test');
console.log(rest2);
console.log(rest2.get(arr));

rest2.set(document.querySelector('h1'), 'Heading');
console.log(rest2);
