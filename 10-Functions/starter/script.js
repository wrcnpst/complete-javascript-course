'use strict';
/*
///////////////////////////////////////
// The call and apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const book = lufthansa.book; // export the book method

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

// use .call() method to call the book method from lufthansa object
book.call(swiss, 239, 'Jonas Schmedtmann'); // put the swiss object as this keyword for the book method

// or use .apply() method to call the book method with defined arguments
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

// or use .call() method to call the book method with spread operator
book.call(swiss, ...flightData);

///////////////////////////////////////
// The bind Method
// book.call(swiss, 23, 'Steven Williams');
const bookSW = book.bind(swiss); // export the book method with .bind() method to bind with swiss object
bookSW(23, 'Steven Williams'); // we can use bookSW method without reference to swiss object anymore

// With Event Listener
lufthansa.planes = 300; // assign new property to lufthansa object
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// summary .bind() method is like a preset of .call() method
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// preset the rate always, so that it always will be this 23%.
//                 ignore->this, rate, (value) <- we can use addVAT just by passing only value
const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

const addTax2 = rate => {
    return value => {
        return value + value * rate;
    };
};

const addVAT2new = addTax2(0.23);
console.log(addVAT2new(1000), addTax2(0.23)(1000));
*/
