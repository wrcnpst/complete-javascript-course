const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const ans = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    if (typeof ans === 'number' && ans < this.answers.length) {
      this.answers[ans]++;
      this.displayResults();
    } else console.log('wrong input');
  },

  displayResults: function (type = 'array') {
    const str = `Poll results are ${this.answers.join(', ')}`;
    type === 'array' && console.log(this.answers);
    type === 'string' && console.log(str);
  },

  data1: [5, 2, 3],
  data2: [1, 5, 3, 9, 6, 1],
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
