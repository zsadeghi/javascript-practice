/*******************************************************************************
Write a function `minMaxProduct(array)` that return the product between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxProduct([6, 3, 7, 2]) => 14
minMaxProduct([0, 1, -5, 3, 6]) => -30
*******************************************************************************/

function minMaxProduct(array){
 var max = array[0];
 var min = array[0];
 for ( var i = 0; i < array.length; i++) {
   var number = array[i];
    if (number > max) {
      max = number;
   } else if ( number < min)
    min = number;
 }
 return max * min;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxProduct;
