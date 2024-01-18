console.log(Number.parseInt('30px'));

console.log(Number.parseFloat('2.5rem'));

// Check if value is NaN
// console.log(Number.isNaN(20)); // false
// console.log(Number.isNaN('20')); // false
// console.log(Number.isNaN(+'20X')); // true
// console.log(Number.isNaN(23 / 0)); // false bc it is infinite

// Checking if value is number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // true
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0));

// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23 / 0));
