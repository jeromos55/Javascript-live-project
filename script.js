'use strict';

// DOM
console.log('--- DOM ---');
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSelection = document.querySelectorAll('.section');
console.log(allSelection);

document.getElementById('section--1');
const allButton = document.getElementsByTagName('button');
console.log(allButton);

console.log(document.getElementsByClassName('btn'));

// creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// --- only text content ---
// message.textContent =
//   'We used cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// --- with html content ---
message.innerHTML =
  'We used cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message); // add message before to the header
// header.append(message); // add message after to the header
// header.prepend(message.cloneNode(true));

// header.before(message);
// header.after(message);

// deleting elements

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  // message.remove();
  // message.parentNode.removeChild(message);
  message.parentElement.removeChild(message);
});

// styles
console.log('--- styles ---');

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); // not log anything
console.log(message.style.color); // not log anything
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 50 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// attributes
console.log('--- attributes ---');

const logo = document.querySelector('.nav__logo');

console.log(logo.getAttribute('src'));
console.log(logo.hasAttribute('src'));
console.log(logo.src);

console.log(logo.getAttribute('alt'));
console.log(logo.hasAttribute('alt'));
console.log(logo.alt);

console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// non-standard attributes
console.log('--- non-standard attributes ---');

console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('company'));

console.log(logo.src); // absolute path
console.log(logo.getAttribute('src')); // relative path

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

const link2 = document.querySelector('.nav__link--btn');
console.log(link2.href);
console.log(link2.getAttribute('href'));

// data attribute
console.log('--- data attribute ---');

console.log(logo.dataset.versionNumber);

/**
 * Adds and removes classes from the logo element to toggle styling.
 * Checks if logo contains 'c' class.
 *
 * Notes:
 * - Avoid directly modifying .className, as it overwrites all existing classes.
 * - Prefer using .classList for managing classes instead.
 **/

// classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// don't use
logo.className = 'John'; // because this overwrites all the classes

// scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('.section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
});
