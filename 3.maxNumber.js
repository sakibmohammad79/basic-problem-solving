//Problem 3 : find maximum Number

const findMaxNumber = (array) => {
  const maxNumber = Math.max(...array);
  return maxNumber;
};

const array = [2, 3, 34, 87, 23];
const result = findMaxNumber(array);
console.log(result);
