//problem 5: factorial

const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }
  let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
};

const result = factorial(6);
console.log(result);
