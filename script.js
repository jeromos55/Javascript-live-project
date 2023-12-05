'use strict';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const openingHours = {
  [weekdays[4]]: {
    open: 12,
    close: 22,
  },
  [weekdays[5]]: {
    open: 11,
    close: 23,
  },
  // [`day-${2 + 4}`]: {
  //   open: 0,
  //   close: 24,
  // },
  [weekdays[`${2 + 4}`]]: {
    open: 0,
    close: 24,
  },
};

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

// Map iteration
console.log('--- Map iteration ---');
const question = new Map([
  ['question', 'Waht is the best programming language in the world?'],
  [1, 'C'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);

console.log(question);

// Converting object to map
console.log('--- Converting object to map ---');
console.log(Object.entries(openingHours));

const HoursMap = new Map(Object.entries(openingHours));
console.log(HoursMap);

// Quizz app
console.log('--- Quizz app ---');
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer: ${key}: ${value}`);
  }
}

const answer = Number(prompt('Your answer:'));
console.log(answer);

// const result = answer === question.get('correct') ? 'correct' : 'try again';
const result = question.get(answer === question.get('correct'));
console.log(result);

// convert map to array
console.log('--- Convert map to array ---');
console.log(question.entries()); // map3
console.log([...question]); // array of question
console.log([...question.keys()]); // array of keys
console.log([...question.values()]); //array of values
