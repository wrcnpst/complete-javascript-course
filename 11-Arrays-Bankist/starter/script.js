'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

// buttons
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

// inputs
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
const arr = [23, 11, 64];

// getting array the last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log(arr[-1]); // <-- undefined because array in js is zero based
*/

// pre-process
const createUsernames = accs => {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(owner => owner[0])
      .join('');
  });
};

createUsernames(accounts);

inputLoginUsername.value = 'js';
inputLoginPin.value = '1111';

// FUNCTIONS

// refresh data
function refresh(acc = currentAccount) {
  reCalculate(acc);
  reMovement(acc);
}

// calculation
function reCalculate(acc) {
  const balance = acc.movements.reduce((acc, r) => acc + r);
  const intrans = acc.movements
    .filter(tran => tran > 0)
    .reduce((acc, r) => acc + r);
  const outtrans = acc.movements
    .filter(tran => tran < 0)
    .reduce((acc, r) => acc + r);
  const interest = (balance * acc.interestRate) / 100;

  // lable DOM
  labelBalance.textContent = balance + '€';
  labelSumIn.textContent = intrans + '€';
  labelSumOut.textContent = -outtrans + '€';
  labelSumInterest.textContent = interest + '€';
}

// movement board
function reMovement(acc) {
  containerMovements.innerHTML = '';

  acc.movements.forEach((amount, i) => {
    const type = amount < 0 ? 'withdrawal' : 'deposit';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${amount}€</div>
  </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

// EVENTLISTENER
let currentAccount = null;

// login button
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(acc => {
    return inputLoginUsername.value === acc.userName;
  });

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('login successfully');
    inputLoginUsername.value = null;
    inputLoginPin.value = null;

    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.slice(
      0,
      currentAccount.owner.indexOf(' ')
    )}`;

    containerApp.style.opacity = 100;
    refresh();
  } else console.log('email or password wong');
});

// Request loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loan = Number(inputLoanAmount.value);

  if (0 < loan) {
    currentAccount.movements.push(loan);
    refresh();
    inputLoanAmount.value = null;
  }
});

// Transfer money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const to = inputTransferTo.value;
  const amount = Number(inputTransferAmount.value);
  const balance = Number(labelBalance.textContent.slice(0, -1));

  const hasDestinationAcc = accounts.find(account => {
    return to !== currentAccount.userName && to === account.userName;
  });

  console.log(to, hasDestinationAcc, amount, balance);

  if (hasDestinationAcc && 0 < amount <= balance) {
    console.log('transfering');
    currentAccount.movements.push(-amount);
    hasDestinationAcc.movements.push(amount);
    refresh();
    inputTransferTo.value = null;
    inputTransferAmount.value = null;
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(currentAccount);
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    console.log('deleting');

    const indexToRemove = accounts.findIndex(acc => {
      return acc.userName === currentAccount.userName;
    });

    accounts.splice(indexToRemove, 1);

    currentAccount = null;
    inputCloseUsername.value = null;
    inputClosePin.value = null;
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
  }
});

let sortDirection = 'asc';
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  if (sortDirection === 'asc') {
    console.log('to asc');
    currentAccount.movements.sort((a, b) => a - b);
    sortDirection = 'desc';
  } else {
    console.log('to desc');
    currentAccount.movements.sort((a, b) => b - a);
    sortDirection = 'asc';
  }

  refresh();
});

///////////////////////////////////////
// The map Method
const eurToUsd = 1.1;

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsUSDfunc = movements.map(function (mov) {
  return mov * eurToUsd;
});

const movementsUSDarrow = movements.map(mov => mov * eurToUsd);
