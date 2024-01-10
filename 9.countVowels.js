//Problem 9: Count Vowels

const countVowels = (str) => {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

console.log(countVowels("hello"));
