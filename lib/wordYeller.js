// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
// var sent = "Stop it now! Please, wont you stop?";
// var yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
// var words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!";

function wordYeller(sentence) {
  var wordYeller = [];
  var words = sentence.split(' ');
  var punctuation = '!.,;:?'.split('');
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var lastCharacter = word.slice(-1);
    if (punctuation.indexOf(lastCharacter)!== -1) {
      wordYeller.push(word);
    } else {
      wordYeller.push(word + '!');
    }
  }
    return wordYeller;
}

console.log(wordYeller('Stop it now! please, wont you stop!'));
console.log(wordYeller('Go to the store and grab the following: milk, bread, run, and cake'));
