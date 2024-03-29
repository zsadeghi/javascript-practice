/*******************************************************************************
Write a function greaterCallback(num, cb1, cb2) that takes in a number and two
callback functions. The greaterCallback function should pass the number to
both callbacks and return the result of the callback that is the greater value.

Examples:

greaterCallback(25, Math.abs, Math.sqrt) => 25
greaterCallback(16.6, Math.floor, Math.ceil) => 17
*******************************************************************************/

function greaterCallback(num, cb1, cb2) {
  var result1 = cb1(num);
  var result2 = cb2(num);
  if (result1 > result2) {
    return result1;
  } else {
    return result2;
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = greaterCallback;
