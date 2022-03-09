/*
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/
function findLongestWordLength(str) {

    let arrWords = str.split(" ");
    let longestWord = 0;
  
    for(let i=0;i<arrWords.length;i++){
  
       (longestWord < arrWords[i].length ) 
       && (longestWord = arrWords[i].length)
    }
  
    return longestWord;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");