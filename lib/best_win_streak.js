/*******************************************************************************
Write a function bestWinStreak that takes in a string of W's (wins) and L's (losses).
The function should return a number representing the longest consecutive streak
of wins. You may assume the only characters in the string are 'W' and 'L'.

Examples:

bestWinStreak('WWLWWWLWW') => 3
bestWinStreak('WWLLWWWWW') => 5
bestWinStreak('WWWW') => 4
bestWinStreak('LLL') => 0
*******************************************************************************/

function bestWinStreak(string) {
    var winningCount = 0;
    var currentCount = 0;

    for (var i = 0; i < string.length; i++) {
      if (string[i] === 'W') {
        currentCount++;

        if (currentCount > winningCount) {
          winningCount = currentCount;
        }
      } else {
        currentCount = 0;
      }
    }

    return winningCount;
}

//map 

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = bestWinStreak;
