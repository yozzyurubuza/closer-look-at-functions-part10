'use strict';

// Default Parameters

const bookings = [];

//Setting a default value in the parameters in the function
const createBooking = function (
  flightNumber,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //Old way of setting default value (ES5)
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNumber,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

// Skipping a default parameter using undefined
createBooking('LH123', undefined, 1000);
