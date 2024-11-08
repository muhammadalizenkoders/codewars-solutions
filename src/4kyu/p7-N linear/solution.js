// Description:
// This kata generalizes Twice Linear. You may want to attempt that kata first.

// Sequence
// Consider an integer sequence U(m) defined as:

// m is a given non-empty set of positive integers.
// U(m)[0] = 1, the first number is always 1.
// For each x in U(m), and each y in m, x * y + 1 must also be in U(m).
// No other numbers are in U(m).
// U(m) is sorted, with no duplicates.
// Sequence Examples
// U(2, 3) = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
// 1 produces 3 and 4, since 1 * 2 + 1 = 3, and 1 * 3 + 1 = 4.

// 3 produces 7 and 10, since 3 * 2 + 1 = 7, and 3 * 3 + 1 = 10.

// U(5, 7, 8) = [1, 6, 8, 9, 31, 41, 43, 46, 49, 57, 64, 65, 73, 156, 206, ...]
// 1 produces 6, 8, and 9.

// 6 produces 31, 43, and 49.

// Task:
// Implement n_linear or nLinear: given a set of postive integers m, and an index n, find U(m)[n], the nth value in the U(m) sequence.

// Tips
// Tests use large n values. Slow algorithms may time-out.
// Tests use large values in the m set. Algorithms which multiply further than neccessary may overflow.
// Linear run time and memory usage is possible.
// How can you build the sequence iteratively, without growing extra data structures?
// URL:https://www.codewars.com/kata/5aa417aa4a6b344e2200009d/javascript
function nLinear(m, n) {
    const sequence = [1];
    const indices = Array(m.length).fill(0);
    const nextValues = m.map(y => y + 1);
  
    for (let i = 0; i < n; i++) {
      let minValue = Math.min(...nextValues);
  
      sequence.push(minValue);
  
      for (let j = 0; j < m.length; j++) {
        if (nextValues[j] === minValue) {
          indices[j]++;
          nextValues[j] = sequence[indices[j]] * m[j] + 1;
        }
      }
    }
  
    return sequence[n];
  }