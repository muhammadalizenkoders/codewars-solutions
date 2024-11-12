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