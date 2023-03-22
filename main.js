'use strict';

const dateFormatter = new Intl.DateTimeFormat('en-in', {
  dateStyle: 'short',
});
// console.log(dateFormatter.format(new Date()));

const relativeTimeFormatter = new Intl.RelativeTimeFormat(
  undefined,
  { numeric: 'auto' }
);

// console.log(relativeTimeFormatter.format(10, 'day'));

const numberFormatter = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'INR',
});

console.log(numberFormatter.format(10000));
