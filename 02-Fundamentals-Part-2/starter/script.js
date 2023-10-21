// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYeah: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: false,
  
//     // calcAge: function (birthYeah) {
//     //   return 2037 - birthYeah;
//     // }
  
//     // calcAge: function () {
//     //   // console.log(this);
//     //   return 2037 - this.birthYeah;
//     // }
  
//     calcAge: function () {
//       this.age = 2037 - this.birthYeah;
//       return this.age;
//     },

//     createSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
//     }


  
//   };
  
//   console.log(jonas.calcAge());
  
//   console.log(jonas.age);
//   console.log(jonas.age);
//   console.log(jonas.age);
  
//   // Challenge
//   // "Jonas is a 46-year old teacher, and he has a driver's license"
//   console.log(jonas.createSummary())

