
/******
 * Recursion
 ******/


// Return 'str' reversed
function reverse(str) {
    if (str.length === 0) {
        return '';
    }

    return reverse(str.slice(1)) + str[0];
}


// Compute 'n' factorial "upwards," i.e. from 1 to 'n' instead of 'n' down to 1
function factorialUp(n, i = 1) {
    if (i === n) {
        return n;
    }

    return i * factorialUp(n, i+1);
}


// Return true if 'n' is a prime number (only divisible by 1 and itself)
function isPrime(n, i = 2) {
    // Return true if 'i' has reached 'n' (divisible by itself)
    if (i === n) {
        return true;
    }

    // Return false if 'n' is divisible by 'i'
    if (n % i === 0) {
        return false;
    }

    // Recursive call
    return isPrime(n, i+1);
}


module.exports = {
    factorialUp,
    isPrime,
    reverse
};
