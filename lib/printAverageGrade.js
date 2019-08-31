function printAverageGrade(students) {
    for (var i = 0; i < students.length; i++) {
      var student = students[i];
      var scores = student.grades;
      var average = getAverage(scores);
      console.log("${student.name} ${average}");
    }
  }


  function getBest(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      var test = array[i];
    sum += test.score;
    }
    return sum/array.length;
  }
  console.log(printBestGrade(students));

}
