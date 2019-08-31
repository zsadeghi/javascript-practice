/***********************************************************************
Write a function `censor(sentence, curseWords)` that censors
the given sentence by replacing the vowels in curse words with
"*". Assume no punctuation.

var result1 = censor("Darn you Harold you son of a gun", ["darn", "gun"]);
result1; //=> "D*rn you Harold you son of a g*n"

var result2 = censor("Schnikeys I dont give a diddly squat", ["schnikeys", "diddly", "squat"]);
result2; //=> "Schn*k*ys I dont give a d*ddly sq**t"
***********************************************************************/
function replaceVowel(word) {

  var vowels = ['a', 'e', 'o', 'i', 'u'];

  for (var i = 0; i < vowels.length; i++) {
    var vowel = vowels[i];
    word = word.split(vowel).join('*');
  }
  return word;
}

function censor(sentence, curseWords) {

   var newWords = [];
   var words = sentence.split(' ');

   for (var i = 0; i < words.length; i++) {
     var word = words[i];

     if (curseWords.indexOf(word.toLowerCase()) === -1) {
       newWords.push(word);
     } else {
       newWords.push(replaceVowel(word));
     }
   }
   return newWords.join(' ');
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = censor;
