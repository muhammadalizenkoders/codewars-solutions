// Description:
// Task
// Return the exact probability as a ratio of drawing at least target marbles of the specified color out of draws total draws without replacement from the specified urn.

// Input
// urn: an object depicting an urn where each key is a color (string), and each value the number of marbles of that color (integer)
// color: the color we are interested in (string)
// draws: the total number of draws from the urn, without replacement (integer)
// target: the least amount of marbles we want to draw from the urn (integer)
// Output
// return the exact probability as ratio (array with 2 elements; the numerator (big integer) and denominator (big integer))
// Constraints
// the ratio needs to be in compact form: [2, 4] should be [1, 2]
// the urn won't be empty
// the color is always available in the urn
// the amount of marbles by color is a non-negative integer
// the total amount of draws is a positive integer, and won't be more than the total number of marbles in the urn
// the target is a non-negative integer and won't be more than:
// the amount of marbles of the specified color
// the amount of draws
// URL:https://www.codewars.com/kata/66085aabab6d670024e2f431/javascript
function probability(urn, color, draws, target) {
    const totalMarbles = Object.values(urn).reduce((sum, count) => sum + count, 0);
    const colorMarbles = urn[color];

    function factorial(n) {
        return n <= 1 ? 1n : BigInt(n) * factorial(n - 1);
    }

    function combinations(n, k) {
        if (k > n) return 0n;
        return factorial(n) / (factorial(k) * factorial(n - k));
    }

    let favorableOutcomes = 0n;
    for (let i = target; i <= Math.min(colorMarbles, draws); i++) {
        const colorComb = combinations(colorMarbles, i);
        const otherComb = combinations(totalMarbles - colorMarbles, draws - i);
        favorableOutcomes += colorComb * otherComb;
    }

    const totalOutcomes = combinations(totalMarbles, draws);
    const gcd = (a, b) => b === 0n ? a : gcd(b, a % b);

    const numerator = favorableOutcomes;
    const denominator = totalOutcomes;
    const divisor = gcd(numerator, denominator);

    return [numerator / divisor, denominator / divisor];
}