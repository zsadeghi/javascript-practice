/***********************************************************************
Write a function `titleize(title, stopWords)` that takes in a string
`title` and an array of strings `stopWords`. Return the `title` where
every word that does not exist in the `stopWords` array is capitalized;
all others lowercase.

Hints: Decompose this problem into helper functions. Perhaps create these,
- removePunctuation(word)
- isStopWord(word, stopWords)

- Test after you write every function of this decomposition!
- First write a function removePunctuation(word) that takes in a single
word and returns that same word without any punctuation at the end. Feel
free to use the punctuation array we've given you below.
- Second, write a function isStopWord(word, stopWords) that takes in a
single word and returns true if it is a stop word. The check will vary
depending on if the word contains punctuation or not, so use your
removePunctuation function before checking.
- Use slice


var punctuation = [";", "!", ".", "?", ",", "-"];

Examples:

titleize("forest gump, the runner", ["the"])
=> "Forest Gump, the Runner"

titleize("MASTER AND COMMANDER", ["and"])
=> "Master and Commander"

titleize("i LOVE; lover of mine", ["love", "of"])
=> "I love; Lover of Mine"

titleize("shall we dance?", ["dance"])
=> "Shall We dance?"
***********************************************************************/

function titleize(title, stopWords) {
  var result = [];
  var wordArray = title.split(' ');

  for (var i = 0; i < wordArray.length; i++) {
    var word = wordArray[i];
    if (isStopWord(word, stopWords)) {
      word = word.toLowerCase();
      result.push(word);
    } else {
      var letterArray = word.split('');
      for(var j = 0; j < letterArray.length; j++) {
        var letter = letterArray[j];
        if ( j === 0) {
          letter = letter.toUpperCase();
        } else {
          letter = letter.toLowerCase();
        }
        letterArray[j] = letter;
      }
      word = letterArray.join('');
      result.push(word);
    }
  }
  result = result.join(' ');
  return result;
}

function removePunctuation(word) {
  var puncs = [";", "!", ".", "?", ",", "-"];
  var wordArray = word.split('');

  for (var i = 0; i < wordArray.length; i +=1) {
    var letter = wordArray[i];
    if (puncs.indexOf(letter) > -1) {
      wordArray.splice(i, 1);
    }
  }
  return wordArray.join('');
}


function isStopWord(word, stopWords) {
  word = removePunctuation(word);
  word = word.toLowerCase();
  if (stopWords.indexOf(word) > -1) {
    return true;
  }
  return false;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = titleize;
