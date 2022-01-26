'use strict';
// Coding Challenge #2

//1. Attach an event listener to change color to blue, do not select the h1 element again

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

//2. Explain why it worked
/*
   The header.addEventListener worked even though the function was already executed and done because of the closure. After executing the function, the closure kept the header variable, and thus the addEventListener method was able to access the header in the variable environment with the help of closure. 

*/

// Jonas Schmedtmann Implementation

/*
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
  
    document.querySelector('body').addEventListener('click', function () {
      header.style.color = 'blue';
    });
  })();
*/

//Explanation
/*
  Closure
*/
