/***********************************************************************
Write a function `signFlipCount` that takes in an array of numbers as
arguments. The function should return the number of times adjacent
numbers in the array switch signs from positive to negative or vice
versa. The number 0 is neither positive nor negative.

Examples:

signFlipCount([5, 6, 10, 3]); //=> 0
signFlipCount([-12, 0, -3, -5]); //=> 0
signFlipCount([-12, 10, -3, -5]); //=> 2
signFlipCount([1, -2, -3, -4]); //=> 1
signFlipCount([-1, 11.3, -3, 100]); //=> 3
***********************************************************************/

function signFlipCount(numbers) {
  var count = 0;
  for ( var i = 0; i < numbers.length - 1; i += 1 ){
    var number = numbers[i];
    var nextNumber = numbers[i + 1];
    if ( number > 0 && nextNumber < 0 || number < 0 && nextNumber > 0) {
      count += 1;
    }
  }
  return count;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = signFlipCount;
// if ( number * nextNumber < 0) {
//count ++;
//}
