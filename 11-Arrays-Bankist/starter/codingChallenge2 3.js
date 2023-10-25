/*
function calcAverageHumanAge(ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const excluded = humanAges.filter(age => age >= 18);
  const avgHuman = excluded.reduce((acc, r, i, arr) => acc + r / arr.length, 0);
  // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

  return avgHuman;
}
*/

// by using array function and chaining methods
const calcAverageHumanAge = ages => {
  return ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, r, i, arr) => acc + r / arr.length, 0);
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
