// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

//  2.
const findOwnersDog = (owner, dogs) => {
  const foundDog = dogs.find(dog => dog.owners.includes(owner));
  const dogCondition =
    foundDog.recommendedFood < foundDog.curFood ? 'much' : 'low';
  console.log(`${owner}'s dog is eating too ${dogCondition}`);
  return foundDog;
};

findOwnersDog('Sarah', dogs);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood && dog)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood && dog)
  .flatMap(dog => dog.owners);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
const okayDogs = dogs.filter(checkEatingOkay);

console.log(okayDogs);

// 8.
const sortDogs = dogs.slice().sort((after, before) => {
  return after.recommendedFood - before.recommendedFood;
});

sortDogs.forEach(dog => console.log(dog.recommendedFood));
