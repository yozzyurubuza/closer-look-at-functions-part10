'use strict';

// How Passing Arguments Work: Value vs Reference
// Javascript doest not pass by reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; // Did not change flight variable
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
const flightNum = flight;
const passenger = jonas; //Only copying the reference to the heap memory, so objects will change upon changing one.

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

//2 functions manipulating the same object.
newPassport(jonas);
checkIn(flight, jonas);
