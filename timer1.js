// Get all command line arguments after the first two elements
const inputArgs = process.argv.slice(2);

// Filter out invalid arguments: non-numeric and negative numbers
const validTimers = inputArgs.filter(arg => {
  const number = Number(arg);
  return !isNaN(number) && number >= 0;
});

// Iterate over the valid arguments and call the timer function
validTimers.forEach(time => {
  // Convert time to a number and schedule the beep
  const delay = Number(time) * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay);
});

/*

const input = process.argv.slice(2);
const time = input.map(function(str) {
  // using map() to convert array of strings to numbers
  return parseInt(str); });

let seconds = process.argv[2];

const timer = (time) => {
  let delay = time * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay);
} 

timer(seconds);
*/