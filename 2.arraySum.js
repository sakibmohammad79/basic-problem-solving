//Problem 2: Sum of array

function sumArray(array) {
  const sum = array.reduce((sum, num) => sum + num, 0);
  return sum;
}

const number = [2, 34, 98, 34];
const result = sumArray(number);
console.log(result);
