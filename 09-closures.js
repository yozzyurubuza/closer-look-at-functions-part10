'use strict';

// Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

// How can booker function still access passengerCount when it is no longer active?
// A closure makes the function remember all the variables that existed at the function's birthplace
// booker function will have access to all the variables of secureBooking
// Closure is the variable environment attached to the function
// A closure gives a function access to all the variables of its parent function, even after that parent function has returned.
// A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place.

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
