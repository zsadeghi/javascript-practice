function printBestGrade(students) {
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    var scores = student.grades;
    var best = getBest(scores);
    console.log("${student.name} ${best}");
  }
}


function getBest(array) {
  var highest = 0;
  for (var i = 0; i < array.length; i++) {
    var test = array[i];
    if ( test.score > highest) {
      highest = test.score;
    }
  }
  return highest;
}
console.log(printBestGrade(students));
