function checkDogs(dogsJulia, dogsKate) {
  const correctJulia = dogsJulia.slice(1, -2);
  const dogs = correctJulia.concat(dogsKate);

  function checkAge(dog, i) {
    const type = dog >= 3 ? 'adult' : 'puppy 🐶';
    console.log(`Dog number ${i} is an ${type}, and is ${dog} years old`);
  }

  dogs.forEach(checkAge);
}

// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

// Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// const dogsJulia = [9, 16, 6, 8, 3]
// const dogsKate = [10, 5, 6, 1, 4]

checkDogs(dogsJulia, dogsKate);
