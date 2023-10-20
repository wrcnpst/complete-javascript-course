'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// REST, because on the LEFt side of =
// const [a, b, ...c] = [1, 2, 3, 4, 5];
// console.log(a, b, c);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

/*
const {
  openingHours: { sat, ...weekDays },
} = restaurant;
// console.log(sat, weekDays.fri);
// console.log(sat, weekDays);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, item] of menu.entries()) {
  console.log(i + 1, item);
}

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);


if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours.mon.open); // this will error
console.log(restaurant.openingHours?.mon.open); // this will error

console.log(restaurant.openingHours.mon?.open); // stop at mon bc mon not exists

console.log(restaurant.openingHours?.mon?.open); // optional chaining (?.)

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  try {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`${day} is ${open}`);
  } catch (error) {
    console.log('error');
  }
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

// Property NAMES
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

// Property VALUES
const values = Object.values(restaurant.openingHours);
console.log(values);

// Entire object
const entries = Object.entries(restaurant.openingHours);

for (const [day, { open, close }] of entries) {
  console.log(`${day} : ${open} - ${close}`);
}
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('textarea').value =
  'underscore_case \n first_name \n Some_Variable  \n calculate_AGE \ndelayed_departure';

document.querySelector('button').addEventListener('click', function () {
  const arrText = document.querySelector('textarea').value.split('\n');

  arrText.forEach((text, i) => {
    let newText = text.trim().toLowerCase().split('_');
    newText[1] = newText[1].replace(newText[1][0], newText[1][0].toUpperCase());
    newText = newText
      .join('')
      .padEnd(20)
      .concat('✅'.repeat(i + 1));

    console.log(newText);
  });
});
