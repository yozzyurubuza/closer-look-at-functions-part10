'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section
  answers: new Array(4).fill(0),

  //1.1 Create a new method on poll object. Display a prompt window for the user to input the number of the selected option

  registerNewAnswer() {
    let displayString = `${this.question}\n`;

    for (const choices of this.options) {
      displayString += `${choices}\n`;
    }

    let answer = Number(prompt(displayString));
    while (this.answers[answer] === undefined) {
      console.log('Please choose a number from the option');
      answer = Number(prompt(displayString));
    }

    //1.2 Update Answers array by incrementing based on the input
    this.answers[answer]++;

    //4. Run displayResults at the end of registerNewAnswer
    return this.displayResults(this.answers);
  },

  //3. Create new method displayResults
  displayResults(type) {
    //Destruct the string and retrieve the numbers
    if (typeof type === 'string' && type.startsWith('[')) {
      type = type.slice(1, type.length - 1);
    }

    const display =
      typeof type === 'string'
        ? console.log(`Poll results are ${type}`)
        : console.log(type);
  },

  //Jonas Schmedtmann Implementation
  /*
  registerNewAnswer() {
    const answer = Number(
      promt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array'){
      if (type === 'array'){
      console.log(this.answers);
    }else if (type === 'string'){
        console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  }
*/
};

//2. Call this method whenever Answer Poll is clicked

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//5. Bonus: Use displayResults method to display the 2 arrays in the test data
poll.displayResults('[5, 2, 3]');
poll.displayResults([5, 2, 3]);
poll.displayResults('[1, 5, 3, 9, 6, 1]');
poll.displayResults([1, 5, 3, 9, 6, 1]);

//Jonas Schmedtmann Implementation
/*

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

  poll.displayResults.call({answers: [5, 2, 3]}, 'string');
  poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string');
  poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]});

*/
