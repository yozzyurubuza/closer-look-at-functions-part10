'use strict';

// Functions returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

//Other way
greet('Hello')('Jonas');

//Function Arrow
// const greet2 = greeting =>
//   function (name) {
//     console.log(`${greeting} ${name}`);
//   };

// greet2('Yo')('Jonas');

//Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');
