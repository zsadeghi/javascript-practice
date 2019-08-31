/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/

function highestScore(students) {
  var highest = null;
  for (var i = 0; i < students.length; i++){
    var student = students[i];
    if (highest === null || student.score > highest.score) {
      highest = student;
    }
  }
  var name = highest.name;
  var newName = name.split(" ");
  var initials = "";
  for (var j = 0; j < newName.length; j ++) {
    var part = newName[j];
    initials += part.slice(0,1);
  }
  return initials + highest.id;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
//
