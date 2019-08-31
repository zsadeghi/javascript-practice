/***********************************************************************
Write a function oddOnesOut(array) that takes in an array of strings and
returns a new array array containing only elements that appeared an even
number of times in the input array.

Examples:

var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
oddOnesOut(arr1); // => [ 'b', 'd' ]

var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
oddOnesOut(arr2); // => [ 'fish' ]
***********************************************************************/
function createObject(array) {

  var obj = {};

  for (var i = 0; i < array.length; i++) {
    var subject = array[i];

    if (obj[subject] === undefined) {
      obj[subject] = 1;
    } else {
      obj[subject] += 1;
    }
  }
  return obj;
}

function oddOnesOut(array) {
  var newArray = [];
  var obj = createObject(array);

  for (var key in obj) {
    
     if (obj[key] % 2 === 0) {
       newArray.push(key);
    }
  }
  return newArray;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = oddOnesOut;
