// Write a function `logBetweenStepper(min, max, step)` that takes in 3 numbers as
// parameters. The function should print out numbers between `min` and `max` at `step`
// intervals. See the following examples.
//
// Examples:
//
// logBetweenStepper(5, 9, 1) // prints
// 5
// 6
// 7
// 8
// 9
//
// logBetweenStepper(-10, 15, 5) // prints
// -10
// -5
// 0
// 5
// 10
// 15

function logBetweenStepper(min, max, step) {
  for (var i = min; i <= max; i += step) {
    console.log(i);
  }
}
console.log(logBetweenStepper(5, 9, 1));
console.log(logBetweenStepper(-10, 15, 5));
