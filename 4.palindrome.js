//Problem 4: palindrome check

const checkPalindrome = (str) => {
  const reverseStr = str.split("").reverse().join("");
  //return str === reverseStr;
  if (str !== reverseStr) {
    return false;
  }
  return true;
};

const str = "radars";
const result = checkPalindrome(str);
console.log(result);
