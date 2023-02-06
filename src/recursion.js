/******
 * Recursion
 ******/

// Return 'str' reversed
function reverse(str) {
  //explanation in words: So my guess is, imagine the string is "the":
  // 1st return will be something like: reverse(he) + t
  // 2nd: reverse(e) + h
  // 3rd: reverse("") + e
  // and then  the stack returns in order 3-2-1

  if (str === "") {
    return "";
  }

  return reverse(str.slice(1)) + str[0]; //here we are slicing as in removing the first letter and putting it in the 0 index
}

// Compute 'n' factorial "upwards," i.e. from 1 to 'n' instead of 'n' down to 1
function factorialUp(n, i = 1) {
  //base case
  if (n === i) {
    return n;
  }
  return i * factorialUp(n, i + 1); //because it is upwards we must specify both ends
}

// Return true if 'n' is a prime number (only divisible by 1 and itself)
function isPrime(n, i = 2) {
  //base case 1: are we dividing n by itself?
  if (n === i) {
    return true;
  }

  //base case 2:
  if (n % i === 0) {
    return false;
  }
  return isPrime(n, i + 1);
}

module.exports = {
  factorialUp,
  isPrime,
  reverse,
};
