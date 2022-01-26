'use strict';

// Immediately Invoked Functions Expressions

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// Run function only once - IIFE
(function () {
  console.log('This will never run again');
  // All variables created inside a scope is PRIVATE
  // We can also say that this isPrivate is ENCAPSULATED inside of this function scope
  const isPrivate = 23;
})();

// console.log(isPrivate);
(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);
