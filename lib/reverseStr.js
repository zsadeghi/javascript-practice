// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('App Academy'); //=> 'ymedacA ppA'

function reverseStr(str) {
  var array = str.split('');
  var newStr = [];
  for (var i = array.length -1; i >= 0; i--) {
    var character = array[i];
    newStr.push(character);
  }
  return newStr.join('');
}

console.log(reverseStr('bootcamp'));
console.log(reverseStr('App Academy'));
