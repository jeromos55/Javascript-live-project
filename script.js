'use strict';

const airLine = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airLine.length);
console.log(plane.length);

console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('r'));
console.log(airLine.indexOf('Portugal'));
console.log(airLine.indexOf('xxxx'));

console.log(airLine.slice(4));
console.log(airLine.slice(4, 7));

console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

console.log(airLine.slice(-2));
console.log(airLine.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middel seat
  const s = seat.slice(-1);
  s === 'E' || s === 'B'
    ? console.log('You got the middle seat!')
    : console.log('You got lucky!');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('John'));
console.log(typeof new String('John'));
console.log(typeof new String('John').slice(1));

console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

const password = 'JoHn';
const passwordLower = password.toLowerCase();
const passangerCorrect =
  passwordLower[0].toUpperCase() + passwordLower.slice(1);
console.log(passangerCorrect);

const email = 'hello@john.com';
const loginEmail = '   HeLLo@JohN.com';
const lowerEmail = loginEmail.toLowerCase();
const trimedEmail = lowerEmail.trim();
console.log(trimedEmail);
const normalizedEmail = lowerEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

const priceGB = '288,345pound';
console.log(priceGB);
const priceUS = priceGB.replace(',', '.').replace('pound', '$');
console.log(priceUS);

const announcement =
  'All passangers came to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Air'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  baggage.includes('knife') || baggage.includes('gun')
    ? console.log('You are NOT allowed on board!')
    : console.log('Wellcome aboard!');
};

checkBaggage('I have a laptop, some Food a pocket Knife.');
checkBaggage('Socks and camera.');
checkBaggage('Got some snacks and a gun for protection.');

// split and join
console.log('a+very+nice+string'.split('+'));
console.log('John Smith'.split(' '));
const [firstName, lastName] = 'John Smith'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (item) {
  const names = item.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('john smith');

// Padding
//const message = 'Go to gate 23!';
console.log('Go to gate 23!'.padStart(19, '*').padEnd(24, '*'));
// padStart 19 is *****string ---> number of '*' = 19 - 'Go to gate 23!'.length
// padEnd 24 is string***** ---> number of '*' = 24 - '*****Go to gate 23!'.length

// *****John*****
// padStart ---> 5 + 'John'.length
// padEnd ---> padStart + 5
console.log('John'.padStart(9, '*').padEnd(14, '*'));

const maskCredit = function (number) {
  const str = number + ''; // convert number to string
  const last = str.slice(-4); // slice last 4 character
  return last.padStart(str.length, '*');
};

console.log(maskCredit(423423));
console.log(maskCredit(232342342));
console.log(maskCredit(2342342342342));

// repeat
const message2 = 'Bad weather ... All Departures Delayed... \n';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛫'.repeat(n)}`);
};

planesInLine(5);
planesInLine(10);

// other string methods ---> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
