// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//
// Examples:
//
// wordPeriods('hello world'); // => 'hello. world.'
// wordPeriods('what is the weather today'); // => 'what. is. the. weather. today.'

function wordPeriods(sentence) {
 var words = sentence.split(' ');
 var newWord = [];

 for (var i = 0; i < words.length; i++) {
   var word = words[i];
   newWord.push(word + '.');
 }
 return newWord.join(' ');
}

console.log(wordPeriods('what is the weather today'));
console.log(wordPeriods('hello world'));
