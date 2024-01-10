//Problem 8: Check Prime Number

const checkPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const result = checkPrime(8);
console.log(result);

console.log(Math.sqrt(8));
