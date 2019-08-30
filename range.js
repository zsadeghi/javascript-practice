/*******************************************************************************
Write a function range(start, end) that returns an array that contains all
numbers between 'start' and 'end' in sequential order.

Examples:

range(1,4) => [1,2,3,4]
range(4,2) => []
*******************************************************************************/


function range(start, end){
  var array = [];
  if (start > end) {
    return [];
    //it's good to just not include this cause the computer does this anyway.
  }
  for(var i = start; i <= end; i += 1){
    array.push(i);
  }
  return array;
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = range;
