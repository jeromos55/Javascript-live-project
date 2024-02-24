'use strict';

// selecting elements
console.log('--- Selecting elements ---');

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
