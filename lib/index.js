function getHighestCooordinateOnAPlane(plane) {

var highest = null;
var highestCoordinates = null;

for (var i = 0; i < plane.length; i ++) {
  var row = plane[i];

  for (var j = 0; i < row.length; i ++) {
    var number = row [j];

    if (highest === null || number > highest) {
      highest = number;
      highestCoordinate = [i, j];
    }

  }
}
return highestCoordinates;
}

console.log(getHighestCooordinateOnAPlane(geography));

var geography = [[0, 2, 3, 0], [1, 4, 3, 1], [1, 5, 6, 4], [0, 4, 3, 2]];

// [2,2]
