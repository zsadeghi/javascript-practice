/***********************************************************************
Write a function fibonacci(n) that takes in a number that represents the
length of a sequence. The function should should return the first `n`
numbers in the fibonacci sequence.

The first two numbers of the fibonacci sequence are 1 and 1. The next
number in the sequence can be found by adding the last two numbers in
the sequence.

Solve this without recursion.
If you don't know what recursion is, we'll see it tomorrow!

Examples:

fibonacci(0); // => []
fibonacci(1); // => [ 1 ]
fibonacci(2); // => [ 1, 1 ]
fibonacci(3); // => [ 1, 1, 2 ]
fibonacci(5); // => [ 1, 1, 2, 3, 5 ]
fibonacci(10); // => [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
***********************************************************************/

function fibonacci(n) {
    if (n === 0) {
      return [];
    } else if (n === 1) {
      return [1];
    }

    var seq = [1, 1];

    for (var i = 2; i < n; i += 1) {
      var last = seq[seq.length - 1];
      var secondLast = seq[seq.length - 2];
      var next = last + secondLast;

      seq.push(next);
    }

    return seq;
  }
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = fibonacci;
