/***********************************************************************
Write a function `toFeet(distances)` that takes in an array of distance
strings. The given distances will either be in `feet` or `yards`. The
function should return a new array where all the distances are converted
to feet. There are 3 feet in 1 yard.

Examples:

var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
toFeet(arr1); // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]

var arr2 = ['2 yards', '3 feet', '10 yards'];
toFeet(arr2); // => [ '6 feet', '3 feet', '30 feet' ]
***********************************************************************/

function toFeet(distances) {

  var newDistances = [];

  for (var i = 0; i < distances.length; i++) {
    var distance = distances[i];
    var parts = distance.split(' ');
    var num = parts[0];
    var part = parts[1];

    if (parts[1] === 'yards') {
      var convert = 3 * num + ' ' + 'feet';
      newDistances.push(convert);
    } else {
      newDistances.push(distance);
    }
  }
  return newDistances;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = toFeet;
