/*******************************************************************************
Write a function that multiples(max, num) that takes in two numbers. The function
should return an array of positive numbers less than `max` that are multiples of `num`.

Examples:

multiples(10, 2) => [ 2, 4, 6, 8 ]
multiples(15, 3) => [ 3, 6, 9, 12 ]
*******************************************************************************/

function multiples(max, num){
  var array = [];
  for (var i = num; i < max; i++) {
    if ( i % num === 0) {
      array.push(i);
    }
  }
  return array;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = multiples;
