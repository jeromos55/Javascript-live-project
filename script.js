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

// string 3 --- 10:06
