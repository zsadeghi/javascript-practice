/***********************************************************************
Write a function `reverb(word)` that takes in a word string and returns
the word with all characters after the last vowel repeated.

Examples:

reverb('running'); // => 'runninging'
reverb('wild'); // => 'wildild'
reverb('debugged'); // => 'debuggeded'
reverb('my'); // => 'my'
***********************************************************************/

function reverb(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = word.length - 1; i >= 0; i -= 1) {
    var letter = word[i];

    if (vowels.indexOf(letter) > -1) {
      var afterVowel = word.substring(i);
      return word + afterVowel;
    }
  }

  return word;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverb;
//
