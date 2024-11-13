// Description:
// For a given list [x1, x2, x3, ..., xn] compute the last (decimal) digit of x1 ^ (x2 ^ (x3 ^ (... ^ xn))).

// E. g., with the input [3, 4, 2], your code should return 1 because 3 ^ (4 ^ 2) = 3 ^ 16 = 43046721.

// Beware: powers grow incredibly fast. For example, 9 ^ (9 ^ 9) has more than 369 millions of digits. lastDigit has to deal with such numbers efficiently.

// Corner cases: we assume that 0 ^ 0 = 1 and that lastDigit of an empty list equals to 1.

// This kata generalizes Last digit of a large number; you may find useful to solve it beforehand.
// URL:https://www.codewars.com/kata/5518a860a73e708c0a000027/javascript
function trueMod(a, n, m) {
    return Math.round( (a % m) * Math.pow( (a % m), (n + 3) % 4 ) ) % m;
}

function lastDigit(as){
    if (as.length == 0) return 1;
    let rightIsZero = false;
    let rightBiggerThan2 = false;
    let rightMod4 = 1;
    for (let i = as.length - 1; i > 0; --i) {
        console.log('With ' + i, as[i], rightIsZero, rightMod4);
        if (rightIsZero) {
            rightMod4 = 1;
            rightIsZero = false;
            rightBiggerThan2 = false;
        } else {
            rightMod4 =(rightBiggerThan2 && (as[i] % 4 === 2)) ? 0 : trueMod(as[i], rightMod4, 4);
             rightIsZero = as[i] === 0;
            rightBiggerThan2 = !rightIsZero && !(as[i] === 1)
        }
    }

    return rightIsZero ? 1 : trueMod(as[0], rightMod4, 10);