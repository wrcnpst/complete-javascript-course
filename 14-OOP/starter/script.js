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

///////////////////////////////////////
// add method to the Prototype
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// console.log(Person.prototype);

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype); // true
// console.log(Person.prototype.isPrototypeOf(jonas)); // true
// console.log(Person.prototype.isPrototypeOf(matilda)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false
// .prototype is .prototypeOfLinkedObjects

///////////////////////////////////////
// add property to Prototype
Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species); // Homo Sapiens Homo Sapiens
// console.log(jonas.hasOwnProperty('firstName')); // true
// console.log(jonas.hasOwnProperty('species')); // false -> this because species is not prop of jonas but is the prop of Person

///////////////////////////////////////
// Prototype Chain

/* 
console.log(jonas.__proto__); // props of Person
console.log(jonas.__proto__.__proto__); // props of Object
console.log(jonas.__proto__.__proto__.__proto__); // props of null === null

const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__); // we will get all methods
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__);
 */

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/* const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const merc = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();
 */

///////////////////////////////////////
// Class in ES6

// class expression
const PersonClx = class {};

// class delclaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance method - will added to .prototype prop so all instances can access
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // set a prop that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
const walter = new PersonCl('Walter Robin', 1998);

/* // no need to create method outside of the class any more
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
}; */

// getter and setter
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

// console.log(account.latest); // using getter
const getLatest = account.latest;
account.latest = 50; // using setter

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    console.log(`get speed is ${this.speed / 1.6} mi/h`);
    return this.speed / 1.6;
  }

  set speedUS(speedUS) {
    console.log(`set speed is ${speedUS} mi/h`);
    this.speed = speedUS * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
ford.speedUS;
ford.speedUS = 50;

// inheritance bwtween classes
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this._fullName} and I study ${this.course}`);
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();

class Account {
  // 1) Public fields (instances)
  locale = 'US-EN';

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // these methods here are "public interface" aka API
  // "public interface" middle things that let outside manipulate inside
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveloan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveloan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  static helper() {
    return `This is account helper`;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveloan(1000); // <== this method shold not be accessable, that why we need data privacy and data encapsulation
console.log(Account.helper());
// acc1.helper(); // <== this method is not accessible
