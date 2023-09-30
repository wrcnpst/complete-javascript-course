'use strict';

// selecting element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const rollBtn = document.querySelector('.btn--roll');

// in-game variable
let setPlayer, scores, current, playing;

const init = () => {
  diceEl.classList.add('hidden');

  setPlayer = 0;
  scores = [0, 0];
  current = 0;
  playing = true;

  score0El.textContent = scores[0];
  score1El.textContent = scores[1];
  current0El.textContent = current;
  current1El.textContent = current;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

// set game functionality

const changePlayer = () => {
  // reset current
  current = 0;
  current0El.textContent = current;
  current1El.textContent = current;

  // switch player
  setPlayer = setPlayer ? 0 : 1;
  console.log(`switch to player ${setPlayer}`);

  // toggle elements
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const rollModal = () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);

    // display dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice === 1) {
      changePlayer();
    } else {
      current += dice;
      console.log(`current player ${setPlayer}`);
      console.log(`current: ${current}`);
      setPlayer
        ? (current1El.textContent = current)
        : (current0El.textContent = current);
    }
  }
};

const holdModal = () => {
  if (playing) {
    // set score
    scores[setPlayer] = scores[setPlayer] + current;
    setPlayer
      ? (score1El.textContent = scores[1])
      : (score0El.textContent = scores[0]);

    const winScore = 30;
    if (scores[setPlayer] >= winScore) {
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${setPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${setPlayer}`)
        .classList.remove('player--active');
    } else {
      changePlayer();
    }
  }
};

newGameBtn.addEventListener('click', init);

holdBtn.addEventListener('click', holdModal);

rollBtn.addEventListener('click', rollModal);
