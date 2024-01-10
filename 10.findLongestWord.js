//Problem 10: Find the Longest Word

const longestWord = (sentence) => {
  const words = sentence.split(" ");
  let maxLength = 0;
  for (let word of words) {
    maxLength = Math.max(maxLength, word.length);
  }
  return maxLength;
};
console.log(longestWord("My name is sakibbb"));
