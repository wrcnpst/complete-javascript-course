'use strict';

console.log(document);
console.log(document.head);

// query selected in document
const script = document.querySelectorAll('script'); // select all scipt element
const header = document.querySelector('.header'); // select class = 'header'
const logo = document.querySelectorAll('#logo'); // select id = 'logo'

// get element
const logoByID = document.getElementById('logo'); // select id = 'logo'
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// create element
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookie';
message.innerHTML =
  'We use cookie <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);

// header.before(message);
// header.after(message.cloneNode(true));

// delete element
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});

// styles
console.log(message.style.color); // '' bc we didn't specified
console.log(getComputedStyle(message).color); // bc it takes from element
