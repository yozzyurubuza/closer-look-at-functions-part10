'use strict';

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); //f is still able to access a variable even g() is already done.
console.dir(f);

// Re-assigning f function
h();
f(); //f is still able to access b variable
console.dir(f);

// Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  //setTimeout function was executed independently but was still able to use all variables that were in the variable environment (n and perGroup)
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; // Closure has priority over scope chain
boardPassengers(180, 3);
