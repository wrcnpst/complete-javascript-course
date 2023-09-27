'use strict';

/*
// select element form a page
console.log(document.querySelector('.message').textContent); // opertation from left to right doc -> .message -> textContent

// DOM = document object model
// - allow us to use js to access html and styles to manipulate them
// DOM allow js to access html elements and css styles

// DOM <-connection-> JS : its connected by WEB API ex. querySelector

document.querySelector('.message').textContent = 'Correct Number!'; // this is DOM manipulation(change)

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const genNum = () => {
    return Math.trunc(Math.random() * 20) + 1;
};

const displayMessage = message => {
    document.querySelector('.message').textContent = message;
};

let score = 20;
let highScore = 0;
let secretNumber = genNum();
console.log(`answer: ${secretNumber}`);

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(`guessed number: ${guess}`);

    // when there is no input
    if (!guess) {
        displayMessage('No number!');
    }

    // when player wins
    else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('You win the game!');

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    // when guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!');
        } else if (score <= 1) {
            displayMessage('You lose :(');
        }
        score--;
        document.querySelector('.score').textContent = score;
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = genNum();
    console.log(`answer: ${secretNumber}`);
    document.querySelector('.guess').value = null;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
