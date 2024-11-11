// Description:
// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
// URL:https://www.codewars.com/kata/54d512e62a5e54c96200019e/javascript
function primeFactors(n) {
    let factors = {};
    let num = 2;
    
    while (n > 1) {
        if (n % num === 0) {
            if (!factors[num]) {
                factors[num] = 0;
            }
            factors[num]++;
            n /= num;
        } else {
            num++;
        }
    }
    
    let result = '';
    for (let prime in factors) {
        if (factors[prime] === 1) {
            result += `(${prime})`;
        } else {
            result += `(${prime}**${factors[prime]})`;
        }
    }
    
    return result;
}