'use strict';

///////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

// console.log(jonas instanceof Person);

// this is not the way of creating method of OOP
// this will degrade the performance
// the correct way is to use with the Prototypes to create methods
Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
// Person.hey();

///////////////////////////////////////
// Prototypes

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// console.log(Person.prototype);

// jonas.calcAge();
// matilda.calcAge();

console.log(jonas.__proto__);
