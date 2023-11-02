'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName} you are ${age}, born in ${birthYear}`;

    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millennial, ${firstName}`;
      var millenial = true;
      let a = 10;
      console.log(str);
    }
    //console.log(str); It's error here because it's outside the if block
    console.log(millenial); // It's not error because the var has a function scope not block scope
    //console.log(a); It's error here because it's outside the if block
  }

  printAge();
  return age;
}

const firstName = 'John';
const a = calcAge(1993);
// console.log(age); It's error here because it's outside the calcAge scope
// printAge(); same as above
console.log(a);
