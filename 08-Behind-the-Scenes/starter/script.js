'use strict';

/*
// console.log(this);

// function
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // but this one get function's own 'this' keyword, its function's scope
};

// arrow funciton
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // use lexical this keyword, it points to the global scope
};

// calcAge(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // copy function object, method borrowing
// console.log(matilda.calcAge());
// console.log(jonas.calcAge());

matilda.calcAge = function () {
  console.log(`method changed ${this.year}`);
};

// console.log(matilda.calcAge());
// console.log(jonas.calcAge());

const f = jonas.calcAge; // pass func to variable

// console.log(typeof f);
f(); // undefined year

*/

/*

var firstName = 'mama'; // assign to global window object

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // act like connector
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    // const self = this; // act like connector
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => console.log(`HEY ${this.firstName}`), // access to this global window object
};

// jonas.greet();
jonas.calcAge();
*/

let lastName = 'Rot';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);
