'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0'); // selecting by Queryselector
const score1El = document.getElementById('score--1'); // selecting by EelementById
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = '0'; // selecting tag content
score1El.innerText = '0'; // selcting HTML tag inner content

let current = [0, 0];
let currentScore = 0;
let activePlayer = 0;

diceEl.classList.add('hidden');

// Rolling dice
btnRoll.addEventListener('click', () => {
  // gererating random dice
  const dice = Math.trunc(Math.random() * 6) + 1;

  // display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // Check for rolled 1 --> if true
  if (dice !== 1) {
    // Add the dice to the score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('palyer--active');
    console.log(player0El.classList);
    console.log(player1El.classList);
  }
});
